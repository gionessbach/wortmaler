# Wortmaler

Eine einfache Web-App fürs iPad (und für Android-Handys/-Tablets), die Kinder (5–6 Jahre) zum Schreiben animiert. Gesprochene Wörter erscheinen live und riesig in kindgerechter Druckschrift.

**App öffnen:** https://gionessbach.github.io/wortmaler/

## Funktionen

- **Sprechen statt tippen:** Auf das rote Mikrofon tippen und ein Wort oder einen Satz sagen. Der Text erscheint schon beim Sprechen (grau). Nochmal tippen beendet die Aufnahme.
- **Abc / ABC:** Umschalten zwischen normaler Schreibweise und Großbuchstaben. Ä, Ö, Ü bleiben erhalten, ß wird zum großen ẞ.
- **Große Schrift:** Der Text füllt automatisch die ganze Fläche.
- **Satzzeichen:** Ab drei Wörtern setzt die App automatisch einen Punkt oder, bei Fragen, ein Fragezeichen. Satzzeichen lassen sich auch ansagen: „Punkt“, „Komma“, „Fragezeichen“, „Ausrufezeichen“.
- **Vorlesen:** Ein Wort antippen, und es wird vorgelesen (im Elternbereich abschaltbar).
- **Buchstabieren** (Lautsprecher-Knopf): Ein Wort antippen, und es wird Buchstabe für Buchstabe aufgesagt, der jeweilige Buchstabe leuchtet dabei auf. Danach wird das ganze Wort gesprochen.
- **Profi-Modus** (Stern-Knopf): Wort sagen, ansehen und merken. Nach Ablauf des blauen Balkens wird es verdeckt, das Kind schreibt es auf Papier und deckt dann mit dem Augen-Knopf auf, um zu vergleichen. Im Profi-Modus erscheinen zwei zusätzliche Knöpfe:
  - **Silbenfarben** (Silbenbögen): Silben abwechselnd blau und rot, wie bei der Silbenmethode.
  - **Schreiblinien** (Linien): Die Wörter stehen auf Linien wie im Schulheft.
- **Löschen:** Pfeil unten links löscht das letzte Wort. Der Mülleimer löscht alles (zweimal tippen).
- **Wortfilter:** Gängige Schimpfwörter werden als *** angezeigt und nicht vorgelesen.

### Elternbereich (Zahnrad)

Der Elternbereich ist mit einem vierstelligen Code geschützt. Beim allerersten Start der App wird der Code festgelegt (zweimal eingeben). Nach drei falschen Versuchen ist die Eingabe 30 Sekunden gesperrt.

- **Vorlesen:** Schaltet das Vorlesen von Wörtern und den Buchstabier-Knopf an oder aus.
- **Buchstaben nacheinander:** Neue Wörter bauen sich Buchstabe für Buchstabe auf.
- **Stimme:** Stimmen des Geräts zum Probehören oder eine der **KI-Stimmen** Kerstin, Ramona (Frauenstimmen) und Thorsten (Männerstimme). KI-Stimmen klingen natürlicher und funktionieren ohne Internet; beim ersten Antippen werden sie einmalig geladen (ca. 90 MB, am besten im WLAN). Sie kommen aus [mRead](https://gionessbach.github.io/mread/) – wurde eine Stimme dort schon geladen, ist sie hier sofort da. Braucht iPadOS 16.4 oder neuer.
- **Tempo beim Vorlesen:** Langsam (Schildkröte), Normal (Igel) oder Schnell (Hase).
- **Satzzeichen automatisch:** ein- und ausschaltbar.
- **Arbeitsblatt drucken:** Alle gesammelten Wörter mit Schreiblinien und zwei leeren Zeilen zum Nachschreiben.
- **Code ändern:** Neuen Code festlegen.

**Code vergessen?** In den iPad-Einstellungen unter Apps → Safari → Erweitert → Website-Daten den Eintrag „github.io“ löschen. Danach fragt die App beim nächsten Start nach einem neuen Code. Dabei gehen auch die gespeicherten Wörter und Einstellungen verloren.

Die Schrift ist [Andika](https://fonts.google.com/specimen/Andika), eine Druckschrift für Leseanfänger.

## Einrichtung auf dem iPad

1. Die Adresse oben in **Safari** öffnen.
2. Beim ersten Tippen auf das Mikrofon den Zugriff erlauben.
3. Über **Teilen → Zum Home-Bildschirm** als App-Symbol ablegen.
4. Tipp: Mit dem **Geführten Zugriff** (Einstellungen → Bedienungshilfen) lässt sich das iPad auf diese App sperren.

## Einrichtung auf Android

1. Die Adresse oben in **Chrome** öffnen.
2. Beim ersten Tippen auf das Mikrofon den Zugriff erlauben. Die Spracherkennung kommt von Google und braucht Internet.
   Geht das Mikrofon nicht, öffnet Wortmaler eine **Mikrofon-Hilfe** (auch im Elternbereich unter „Mikrofon geht nicht? Hilfe“): Sie zeigt, ob die Seite das Mikrofon nutzen darf, und mit „Mikrofon jetzt erlauben“ fragen Chrome und Android erneut nach. Es braucht **zwei** Erlaubnisse – für die App Chrome und für die Seite. Direkt in die Android-Einstellungen springen kann eine Webseite nicht.
   Aus Versehen abgelehnt? In Chrome ⋮ → **Website-Einstellungen** → **Mikrofon** → „gionessbach.github.io“ auf „Zulassen“ stellen (bei älteren Chrome-Versionen: ⋮ → Einstellungen → Website-Einstellungen → Mikrofon). Zusätzlich muss Chrome selbst das Mikrofon nutzen dürfen: Android-Einstellungen → Apps → Chrome → Berechtigungen → Mikrofon.
3. Menü (⋮) → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.

Auf dem Handy ist die Ansicht automatisch kompakter.

**Andere Browser (z. B. Ecosia, Brave):** Sie geben sich zwar als Chrome aus, haben aber keinen Zugang zur Google-Spracherkennung – dann hilft auch keine Mikrofon-Berechtigung. Wortmaler merkt das beim ersten Versuch und schaltet um: Nochmal auf das rote Mikrofon tippen, die Tastatur öffnet sich, dort auf das kleine Mikrofon tippen und sprechen (Diktieren über die Google-Tastatur). Danach wieder auf das rote Mikrofon tippen. Bequemer ist es in **Google Chrome**, dort geht es ohne Tastatur.

## Wortfilter erweitern

In `index.html` nach `EIGENE_WOERTER` suchen und Wörter klein geschrieben (ß als ss) eintragen:

```js
var EIGENE_WOERTER = ["doofi", "bloedmann"];
```

## Hinweise

- Die Spracherkennung läuft über Safari bzw. Apple (auf Android: Google) und braucht eine **Internetverbindung**. Die App selbst, die Schrift und einmal geladene KI-Stimmen sind auf dem Gerät gespeichert; Wortmaler startet also auch ohne Internet, und Vorlesen mit KI-Stimme geht offline.
- iPadOS erlaubt die Spracherkennung nur in Safari selbst, nicht in Web-Apps ohne Safari-Leiste. Das Home-Bildschirm-Symbol öffnet die App deshalb in Safari. Falls beim Hinzufügen „Als Web-App öffnen“ angeboten wird, diesen Schalter ausschalten.
- Die Spracherkennung braucht die eingeschaltete **Diktierfunktion** (Einstellungen → Allgemein → Tastatur).
- Der Code ist eine Kindersicherung, kein Passwortschutz. Er wird nur auf dem iPad gespeichert.
- Silbentrennung und Satzzeichen folgen vereinfachten Regeln und liegen bei manchen Wörtern daneben.

## Technik

Eine einzige Datei (`index.html`) ohne Build-Schritt. Genutzt werden die Web Speech API (Erkennung und Vorlesen) und `localStorage`. Die Schrift liegt in `vendor/andika`, `sw.js` speichert die App für den Offline-Start. KI-Stimmen: [Piper](https://github.com/rhasspy/piper) mit onnxruntime-web, die Dateien werden aus `../mread/` geladen (gleiche Adresse auf GitHub Pages). `manifest.webmanifest` nutzt `"display": "minimal-ui"`, damit das iPad die App vom Home-Bildschirm weiterhin in Safari öffnet (sonst funktioniert dort das Mikrofon nicht). Gehostet über GitHub Pages, das für den Mikrofonzugriff nötige HTTPS ist dort automatisch dabei.

Gedacht für die private Nutzung auf einem eigenen iPad.
