/* Wortmaler – Offline-Speicher (Service Worker)
   Beim ersten Öffnen werden App und Schrift auf dem Gerät gespeichert, danach startet Wortmaler auch ohne Internet.
   (Die Spracherkennung selbst braucht weiterhin Internet.) KI-Stimmen kommen aus mRead (../mread/) und werden
   gespeichert, sobald sie einmal geladen wurden – eine in mRead geladene Stimme ist auch hier sofort da.
   Bei Änderungen an Dateien die Versionsnummer erhöhen. */
var APP = "wortmaler-app-1";
var BIG = "wortmaler-voices-1";
var SHELL = [
  "./", "index.html", "apple-touch-icon.png", "favicon.png", "manifest.webmanifest", "icon-192.png",
  "vendor/andika/andika-latin-400-normal.woff2", "vendor/andika/andika-latin-700-normal.woff2",
  "vendor/andika/andika-latin-ext-400-normal.woff2", "vendor/andika/andika-latin-ext-700-normal.woff2"
];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(APP).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    // nur eigene alte Speicher löschen – die von mRead (gleiche Adresse github.io) bleiben unangetastet
    return Promise.all(keys.filter(function(k){ return k.indexOf("wortmaler-") === 0 && k !== APP && k !== BIG; })
      .map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

function isBig(path){ return /\/mread\/(voices|vendor\/piper|vendor\/ort)\//.test(path); }

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  if(url.origin !== location.origin) return;
  // die App selbst: erst im Internet nach einer neuen Fassung schauen, sonst die gespeicherte nehmen
  if(req.mode === "navigate" || /\/wortmaler\/(index\.html)?$/.test(url.pathname)){
    e.respondWith(fetch(req).then(function(res){
      if(res.ok){ var copy = res.clone(); caches.open(APP).then(function(c){ c.put("index.html", copy); }); }
      return res;
    }).catch(function(){ return caches.match("index.html", { ignoreSearch: true }); }));
    return;
  }
  var mine = url.pathname.indexOf("/wortmaler/") >= 0;
  if(!mine && !isBig(url.pathname)) return;
  // alles andere: gespeicherte Fassung (auch aus mRead), sonst laden und speichern
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function(hit){
    if(hit) return hit;
    return fetch(req).then(function(res){
      if(res.ok && res.status === 200){
        var copy = res.clone();
        caches.open(isBig(url.pathname) ? BIG : APP).then(function(c){ c.put(req, copy); });
      }
      return res;
    });
  }));
});
