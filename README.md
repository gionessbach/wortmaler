# Wortmaler

Eine einfache Web-App fürs iPad, die Kinder (5–6 Jahre) zum Schreiben animiert. Gesprochene Wörter erscheinen live und riesig in kindgerechter Druckschrift.

**App öffnen:** https://gionessbach.github.io/wortmaler/

## Funktionen

- **Sprechen statt tippen:** Auf das rote Mikrofon tippen und ein Wort oder einen Satz sagen. Der Text erscheint schon beim Sprechen (grau). Nochmal tippen beendet die Aufnahme.
- **Abc / ABC:** Umschalten zwischen normaler Schreibweise und Großbuchstaben. Ä, Ö, Ü bleiben erhalten, ß wird zum großen ẞ.
- **Große Schrift:** Der Text füllt automatisch die ganze Fläche.
- **Satzzeichen:** Ab drei Wörtern setzt die App automatisch einen Punkt oder, bei Fragen, ein Fragezeichen. Satzzeichen lassen sich auch ansagen: „Punkt“, „Komma“, „Fragezeichen“, „Ausrufezeichen“.
- **Vorlesen:** Ein Wort antippen, und es wird vorgelesen.
- **Buchstabieren** (Lautsprecher-Knopf): Ein Wort antippen, und es wird Buchstabe für Buchstabe aufgesagt, der jeweilige Buchstabe leuchtet dabei auf. Danach wird das ganze Wort gesprochen.
- **Profi-Modus** (Stern-Knopf): Wort sagen, ansehen und merken. Nach Ablauf des blauen Balkens wird es verdeckt, das Kind schreibt es auf Papier und deckt dann mit dem Augen-Knopf auf, um zu vergleichen. Im Profi-Modus erscheinen zwei zusätzliche Knöpfe:
  - **Silbenfarben** (Silbenbögen): Silben abwechselnd blau und rot, wie bei der Silbenmethode.
  - **Schreiblinien** (Linien): Die Wörter stehen auf Linien wie im Schulheft.
- **Löschen:** Pfeil unten links löscht das letzte Wort. Der Mülleimer löscht alles (zweimal tippen).
- **Wortfilter:** Gängige Schimpfwörter werden als *** angezeigt und nicht vorgelesen.

### Einstellungen (Zahnrad)

- **Buchstaben nacheinander:** Neue Wörter bauen sich Buchstabe für Buchstabe auf.
- **Satzzeichen automatisch:** ein- und ausschaltbar.
- **Arbeitsblatt drucken:** Alle gesammelten Wörter mit Schreiblinien und zwei leeren Zeilen zum Nachschreiben.

Die Schrift ist [Andika](https://fonts.google.com/specimen/Andika), eine Druckschrift für Leseanfänger.

## Einrichtung auf dem iPad

1. Die Adresse oben in **Safari** öffnen.
2. Beim ersten Tippen auf das Mikrofon den Zugriff erlauben.
3. Über **Teilen → Zum Home-Bildschirm** als App-Symbol ablegen.
4. Tipp: Mit dem **Geführten Zugriff** (Einstellungen → Bedienungshilfen) lässt sich das iPad auf diese App sperren.

## Wortfilter erweitern

In `index.html` nach `EIGENE_WOERTER` suchen und Wörter klein geschrieben (ß als ss) eintragen:

```js
var EIGENE_WOERTER = ["doofi", "bloedmann"];
```

## Hinweise

- Die Spracherkennung läuft über Safari bzw. Apple und braucht eine **Internetverbindung**.
- iPadOS erlaubt die Spracherkennung nur in Safari selbst, nicht in Web-Apps ohne Safari-Leiste. Das Home-Bildschirm-Symbol öffnet die App deshalb in Safari. Falls beim Hinzufügen „Als Web-App öffnen“ angeboten wird, diesen Schalter ausschalten.
- Die Spracherkennung braucht die eingeschaltete **Diktierfunktion** (Einstellungen → Allgemein → Tastatur).
- Silbentrennung und Satzzeichen folgen vereinfachten Regeln und liegen bei manchen Wörtern daneben.

## Technik

Eine einzige Datei (`index.html`) ohne Abhängigkeiten oder Build-Schritt. Genutzt werden die Web Speech API (Erkennung und Vorlesen) und `localStorage`. Gehostet über GitHub Pages, das für den Mikrofonzugriff nötige HTTPS ist dort automatisch dabei.

Gedacht für die private Nutzung auf einem eigenen iPad.
