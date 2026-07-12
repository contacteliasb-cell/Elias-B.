# 🏠 ImmoMentor – Deine Lernplattform für die Makler-Ausbildung

Eine interaktive Lern-App, die dich optimal auf die Ausbildung zum Immobilienmakler vorbereitet –
aufgebaut nach den wirksamsten Methoden der Lernforschung, komplett lokal, ohne Server, ohne Anmeldung.

## 🚀 Starten

**Am einfachsten:** Doppelklick auf `index.html` – die App läuft direkt im Browser (Chrome, Edge, Firefox, Safari).

Optional mit lokalem Mini-Server (verhält sich exakt gleich, vermeidet aber je nach Browser-Einstellung Einschränkungen des Datei-Modus):

```bash
# Im Projektordner (Python ist auf den meisten Systemen vorhanden):
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

Dein Lernfortschritt (XP, Streak, Karten-Fälligkeiten, Statistiken) wird im **localStorage des Browsers**
gespeichert und bleibt nach dem Schließen erhalten. Unter **Statistik → Daten** kannst du ihn als
JSON-Datei exportieren/importieren (z. B. für Backups oder einen Browserwechsel).

> ⚠️ Wichtig: Immer denselben Browser (und beim Datei-Modus denselben Dateipfad) verwenden,
> sonst sieht die App einen leeren Speicher. Im Zweifel: Export nutzen.

## 🧠 Lernmethodik – so ist die App aufgebaut

| Prinzip | Umsetzung |
|---|---|
| **Active Recall / Testing Effect** | Quizfragen, Karteikarten, Lückentexte und Rechenaufgaben fragen Wissen aktiv ab – Lesen allein gibt es nur als kurze Grundlagen-Lektion. |
| **Spaced Repetition** | Karteikarten laufen über einen SM-2-Algorithmus (Anki-Logik): Je nach Bewertung („Nochmal/Schwer/Gut/Einfach") kommt die Karte in wachsenden Abständen wieder. |
| **Interleaving** | Der **Tagesmix** mischt Aufgabentypen und Themenbereiche und bevorzugt automatisch schwache und neue Themen. |
| **Elaboration & Dual Coding** | Lektionen kombinieren Text mit Diagrammen (SVG), Tabellen, Formel-Boxen und durchgerechneten Beispielen. |
| **Praxisnähe** | Mehrstufige Fallstudien aus dem echten Maklerleben mit Feedback zu jeder Entscheidung. |

**Empfohlene Routine:** Täglich zuerst fällige Karteikarten (10–20 Min.), dann ein Tagesmix.
Neue Themen: Lektion lesen → sofort Quiz → Karten des Themas in die Rotation aufnehmen.
Einmal pro Woche eine Fallstudie.

## 📚 Inhalte

Fünf Themenbereiche mit insgesamt 23 Unterthemen (Stand: aktuelle deutsche Gesetzeslage, u. a. WEMoG,
§§ 656a–d BGB, GEG, ImmoWertV, MaBV, CO2KostAufG):

1. **📐 Bewertung & Gutachten** – Marktwert, Gutachterausschüsse, Vergleichs-/Ertrags-/Sachwertverfahren, Beleihungswert
2. **🏢 Hausverwaltung & WEG** – WEG-Recht, Eigentümerversammlung, Mietmanagement, Betriebskosten, technisches Gebäudemanagement
3. **🤝 Makler & Transaktion** – Maklerrecht & Provision, Akquise & Exposé, Kaufprozess, Vermietung, Verhandlungsführung
4. **🏗️ Projektentwicklung** – Baurecht & Genehmigung, Projektphasen (HOAI), Kalkulation (Residualwert), Bauträger & MaBV
5. **💰 Finanzierung & Investment** – Baufinanzierung, Renditeanalyse, Portfolio & Steuern, REITs/Fonds/Crowdinvesting

Pro Unterthema wählst du auf der Themenseite selbst die Lernform:
**📖 Lektion · 🎯 Quiz · 🃏 Karteikarten · 📝 Lückentext · 🧮 Rechenaufgaben** – plus **💼 Fallstudien** je Bereich.

## 🗂️ Projektstruktur

```
index.html              App-Shell (bindet alle Skripte ein)
css/styles.css          Design (helles & dunkles Farbschema)
js/
  core/                 util.js, storage.js (localStorage), srs.js (SM-2), gamification.js (XP/Erfolge)
  data/registry.js      zentrale Inhalts-Registry (LERN) + Schema-Doku
  engines/              Quiz, Karteikarten, Lückentext, Rechnen, Fallstudien, Session-Runner, Lektion
  views/                Dashboard, Themen, Tagesmix/Karten, Statistik
  app.js                Hash-Router + Topbar
data/
  bewertung.js          Themenbereich 1 (Lektionen, Quiz, Karten, Lückentexte, Rechnen, Fälle)
  weg.js                Themenbereich 2
  makler.js             Themenbereich 3
  projekt.js            Themenbereich 4
  finanzierung.js       Themenbereich 5
```

## ✏️ Inhalte erweitern

Alle Inhalte liegen in `data/*.js` – reines JavaScript, keine Build-Tools nötig:

- **Neue Quizfrage:** Objekt ins `quiz`-Array des Bereichs einfügen:
  `{ sub: 'unterthema-id', q: 'Frage?', options: ['richtig', 'falsch …'], correct: 0, explain: 'Erklärung' }`
- **Neue Karteikarte:** `{ sub: '…', front: 'Frage', back: 'Antwort' }` ins `cards`-Array.
- **Neuer Lückentext:** Lücken im Text mit `{{Antwort}}` oder `{{Antwort|Alternative}}` markieren.
- **Neue Rechenaufgabe:** Objekt mit `generate()`-Funktion, die `{ text, unit, answer, tolerance, steps }` zurückgibt (Zufallszahlen → jede Runde neue Werte).
- **Neue Fallstudie:** `{ id, title, teaser, intro, steps: [{ situation, question, options: [{ text, quality: 'best'|'okay'|'bad', feedback }] }] }`
- **Neues Unterthema:** Eintrag in `subtopics` mit `id`, `title`, `teaser` und `lesson` (HTML).
- **Neuer Themenbereich:** neue Datei nach dem Muster von `data/bewertung.js` anlegen und in `index.html` per `<script>` einbinden.

Das komplette Schema ist in `js/data/registry.js` dokumentiert. IDs für die Wiederholungslogik werden
automatisch vergeben – beim **Einfügen neuer Karten ans Array-Ende** bleibt der bisherige Lernstand erhalten
(mittendrin einfügen verschiebt IDs und damit Kartenzustände).

## ⚖️ Hinweis

Die Inhalte sind sorgfältig nach deutschem Recht (Stand ca. 2025/2026) erstellt, ersetzen aber keine
Rechts- oder Steuerberatung. Gesetze ändern sich – prüfe Details im Zweifel an der Primärquelle.
