[README.md](https://github.com/user-attachments/files/34084293/README.md)
# Wortmaler

Eine einfache Web-App fürs iPad, die Kinder (5–6 Jahre) zum Schreiben animiert. Gesprochene Wörter erscheinen live und riesig in kindgerechter Druckschrift.

**App öffnen:** https://gionessbach.github.io/wortmaler/

## Funktionen

- **Sprechen statt tippen:** Auf das rote Mikrofon tippen und ein Wort sagen. Es erscheint schon beim Sprechen (grau) und wird schwarz, sobald es erkannt ist. Nochmal tippen beendet die Aufnahme.
- **Abc / ABC:** Umschalten zwischen normaler Schreibweise und Großbuchstaben. Ä, Ö, Ü bleiben erhalten, ß wird zum großen ẞ.
- **Große Schrift:** Der Text füllt automatisch die ganze Fläche, ein einzelnes Wort fast den ganzen Bildschirm.
- **Vorlesen:** Ein Wort antippen, und es wird vorgelesen.
- **Löschen:** Pfeil unten links löscht das letzte Wort. Der Mülleimer oben löscht alles (zweimal tippen).
- Die Wörter bleiben auf dem Gerät gespeichert, auch wenn die App geschlossen wird.

Die Schrift ist [Andika](https://fonts.google.com/specimen/Andika), eine Druckschrift für Leseanfänger.

## Einrichtung auf dem iPad

1. Die Adresse oben in **Safari** öffnen.
2. Beim ersten Tippen auf das Mikrofon den Zugriff erlauben.
3. Über **Teilen → Zum Home-Bildschirm** als App-Symbol ablegen.
4. Tipp: Mit dem **Geführten Zugriff** (Einstellungen → Bedienungshilfen) lässt sich das iPad auf diese App sperren.

## Hinweise

- Die Spracherkennung läuft über Safari bzw. Apple und braucht eine **Internetverbindung**.
- Falls die Erkennung vom Home-Bildschirm-Symbol aus nicht startet, die Seite direkt in Safari öffnen.
- Safari schreibt das erste Wort manchmal groß, auch wenn es kein Nomen ist.
- Wenn der Browser keine Spracherkennung anbietet, öffnet die App stattdessen die Tastatur. Dort kann man die Diktierfunktion (Mikrofon auf der Tastatur) nutzen.

## Technik

Eine einzige Datei (`index.html`) ohne Abhängigkeiten oder Build-Schritt. Genutzt werden die Web Speech API (Erkennung und Vorlesen) und `localStorage`. Gehostet über GitHub Pages, das für den Mikrofonzugriff nötige HTTPS ist dort automatisch dabei.

Gedacht für die private Nutzung auf einem eigenen iPad.
