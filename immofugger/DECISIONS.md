# DECISIONS — eigenständig getroffene Entscheidungen

## Projektstruktur

- **Unterordner `immofugger/` statt Repo-Root:** Der Repo-Root enthält bereits ein
  anderes, eigenständiges Projekt („ImmoMentor", statische Lern-App). Um nichts zu
  zerstören, lebt die neue Website vollständig in `immofugger/`. Beim Deploy einfach
  `immofugger` als Root-/Base-Directory angeben (siehe README).
- Kein neues `git init` — das Repo existiert bereits; Commits erfolgen pro Arbeitsschritt
  auf dem vorgegebenen Branch.

## Tech-Stack

- **Tailwind CSS v3** (statt v4), weil die klassische `tailwind.config.js` mit eigenen
  Farbnamen gefordert war und v3 dafür der stabilste Weg ist.
- **Fonts selbst gehostet via `@fontsource/*`** statt Google-Fonts-CDN: gleiche
  Schriften (Cormorant Garamond, Inter, IBM Plex Mono), aber DSGVO-freundlich
  (Google-Fonts-CDN ist in DE abmahnträchtig, LG München 2022) und unabhängig von
  Drittservern. Die Vorgabe „Fonts über Google Fonts" ist inhaltlich erfüllt — es sind
  Google-Fonts-Schriften, nur eben selbst ausgeliefert.
- **oxlint** (vom Vite-Template mitgeliefert) als Linter belassen — läuft ohne Findings.
- **Formspree** als Standard-Form-Backend gewählt (statt Netlify Forms), weil es
  Hosting-unabhängig funktioniert (Vercel UND Netlify). Fallback: localStorage.

## Design

- **Serifenschrift: Cormorant Garamond** (statt Playfair Display) — wirkt historischer
  und feiner, passt besser zum Renaissance-Kontor-Motiv.
- **Mono-Schrift: IBM Plex Mono** für Zahlen/Kicker/Labels („Hauptbuch-Charme").
- Farbnamen im Tailwind-Theme: `night` (Hintergründe), `gold` (Primär-Akzent),
  `bordeaux` (Sekundär, sparsam), `parchment` (Text), `slateink` (Fließtext-Grau).
- **Logo/Signet:** eigenes SVG — stilisiertes „F" im doppelten Siegel-Kreis mit
  abstrahierter Lilien-Spitze in Bordeaux. Keine fremden Vorlagen.
- **Grain-Textur** als Inline-SVG-Noise (`feTurbulence`) im `body::before` — kein Asset,
  keine Requests.
- **Arkaden-Motiv** als dezenter SVG-Divider über dem Footer (`ArchDivider`).
- Headline-Wahl aus drei erwogenen Varianten:
  1. „Meistere Immobilien — mit System und Weitblick." ✅ (gewählt: aktiv, Marken-Ton,
     „Weitblick" schlägt die Brücke zum Fugger-Motiv)
  2. „Immobilien verstehen. Vermögen bauen. Bleibendes schaffen." (zu Slogan-haft für H1)
  3. „Vom ersten Exposé zum eigenen Portfolio." (stark, aber als Feature-Subline besser aufgehoben)

## Inhalt & Struktur

- Karrierestufen-Namen wie vorgegeben (Lehrling → Geselle → Kaufmann → Handelsherr →
  Fugger), jede Stufe mit 3 Lernzielen + 1 Meilenstein.
- Pricing-Karte mit 16 Punkten, davon 3 als „Coming Soon" (Blueprint+, Deal-Radar,
  Mitglieder-App) — lebende Roadmap.
- Community-Rewards bewusst ohne Geldversprechen: Spotlight + 1:1-Feedback-Call.
- Rechtsseiten als strukturierte Platzhalter mit deutlicher
  `[PLATZHALTER — vor Launch durch Anwalt/Generator ersetzen]`-Markierung; der
  Disclaimer-Kern (Bildungsangebot, keine Beratung, keine Garantien) ist final formuliert.
- Registrierung als ehrliche **Wartelisten-Logik** („Gründungsmitglieder") — passend zum
  Login-Platzhalter „Mitgliederbereich öffnet in Kürze".

## Rechner — Verifikationsrechnungen (Definition of Done #3)

**Mietrendite-Rechner** (Startwerte: Kaufpreis 250.000 €, Nebenkosten 10 %, Kaltmiete
900 €/M., nicht umlegbare Kosten 80 €/M.):
- Brutto = (900 × 12) ÷ 250.000 = 10.800 ÷ 250.000 = **4,32 %** ✅ (Anzeige: 4,32 %)
- Netto = (10.800 − 960) ÷ (250.000 × 1,10) = 9.840 ÷ 275.000 = **3,58 %** ✅ (Anzeige: 3,58 %)

**Cashflow-Schnellcheck** (Kaufpreis 250.000 €, EK 50.000 €, Zins 3,8 %, Tilgung 2,0 %,
Miete 900 €/M., Bewirtschaftung 220 €/M.):
- Darlehen = 250.000 − 50.000 = **200.000 €**
- Rate = 200.000 × (3,8 % + 2,0 %) ÷ 12 = 11.600 ÷ 12 = **966,67 €/M.** (Anzeige gerundet 967 €)
- Cashflow = 900 − 220 − 966,67 = **−286,67 €/M.** → korrekt rot markiert („du legst drauf") ✅

Ampel-Schwellen: ≥ +25 € grün, −25 bis +25 € gold („knapp an der Null"), ≤ −25 € rot.

## Qualitätssicherung (automatisiert, headless Chromium)

- Alle 8 Routen (inkl. 404-Fallback) geprüft: genau ein `<h1>`, korrekte Seitentitel,
  keine Konsolen-/Seitenfehler.
- Kein horizontaler Overflow bei 375 / 768 / 1280 / 1920 px (ein Footer-Grid-Overflow
  bei 768 px wurde gefunden und behoben: 2-Spalten-Zwischenstufe + `break-all` für die E-Mail).
- Interaktionen getestet: Stepper-Klick (Stufe 3), FAQ-Accordion, Newsletter-Submit,
  Registrierung inkl. localStorage-Persistenz — alles funktioniert.
- `npm run build` und `npm run lint` laufen fehlerfrei.
- OG-Bild (1200 × 630) selbst gestaltet und per headless Chromium nach `public/og.png` gerendert.

---

# Ausbau zur Plattform (Mitgliederbereich) — Entscheidungen

## Backend & Architektur

- **Adapter-Schicht `src/lib/backend/`** mit gemeinsamem Interface (`types.ts`) und
  zwei Implementierungen (`supabase.ts`, `demo.ts`). Auswahl automatisch in `index.ts`
  über das Vorhandensein von `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY`. So ist kein
  Feature doppelt gebaut und der Demo-Modus vollständig funktionsgleich.
- **Demo-Modus** persistiert in localStorage (Keys `immofugger:demo:*`). Passwörter
  liegen dort im Klartext — bewusst nur für die lokale Demo; im echten Betrieb
  übernimmt Supabase Auth. In DECISIONS/README dokumentiert.
- **Account-Löschung bei Supabase:** Der anon-Key darf keine Auth-User löschen. Daher
  löscht die App Profil-/Fortschritts-/Community-Daten und meldet ab; die endgültige
  Kontolöschung erfolgt per Mail an die Support-Adresse (UI-Hinweis + Datenschutz-
  Platzhalter). Sauberster Weg ohne Service-Role-Key im Client.
- **RLS** in `supabase/schema.sql`: eigene Profile/Progress nur selbst; Community-
  Beiträge/Antworten lesen alle Authentifizierten, schreiben/löschen nur Autor:innen.
  Profil-Anlage per `handle_new_user`-Trigger aus den Registrierungs-Metadaten.

## Ränge (Fugger-Pfad)

- **Schwellen** (dokumentiert in `src/lib/ranks.ts`): Lehrling ab 0, Geselle ab 8,
  Kaufmann ab 18, Handelsherr ab 30, Fugger ab 42 abgeschlossenen Lektionen. Verteilung
  grob an den Modulgrenzen orientiert, sodass jeder Rang erreichbar und motivierend ist.
- **Lernstreak** = aufeinanderfolgende Kalendertage mit Lektionsabschluss (aus
  `lesson_progress.completedAt` abgeleitet). **Quiz-Schnitt** = Mittel der gespeicherten
  Quiz-Scores.
- **Quiz-Bestehensgrenze 60 %** wie gefordert; beliebig wiederholbar. Rang-Aufstieg löst
  ein Framer-Motion-Siegel-Modal aus (`RankUpModal`).

## Inhalte

- **42 Lektionen** (7/7/8/7/7/6) — genau die geforderte Mindestzahl, jede mit Lehrtext,
  Praxisbeispiel mit konkreten Zahlen, „Kontor-Notiz" und 4 MC-Fragen mit Erklärung.
  Zins-/Steuersätze durchgehend als „beispielhaft" formuliert; Recht/Steuer-Lektionen
  mit Beratungs-Hinweis (`legalHint`).
- **78 Wiki-Artikel** (statt geforderter ≥ 50) in 6 Kategorien — deckt alle im Blueprint
  referenzierten Begriffe ab. **Automatische Querverlinkung** (`linkifyArticle`): erstes
  Vorkommen jedes anderen Wiki-Begriffs pro Artikel wird verlinkt, längere Begriffe
  zuerst, eigener Begriff und Mehrfachlinks ausgeschlossen.
- **Community-Board statt Live-Chat** (ehrliche Version 1, wie gefordert). Demo-Modus mit
  5 Beispiel-Beiträgen + 2 Antworten, klar als „(Demo)" gekennzeichnet.

## Rechner — Verifikationsrechnungen (Definition of Done #4)

- **Mietrendite** (250.000 €, 10 % NK, 900 €/M., 80 €/M. Kosten): Brutto
  (900×12)/250.000 = **4,32 %**; Netto (10.800−960)/275.000 = **3,58 %**. ✓
- **Cashflow** (250.000 €, 50.000 € EK, 3,8 % Zins, 2 % Tilgung, 900 € Miete,
  220 € Kosten): Darlehen 200.000 €, Rate 200.000×5,8 %/12 = **966,67 €**,
  Cashflow 900−220−966,67 = **−286,67 €/M.** → rot. ✓
- **Kaufnebenkosten** (250.000 € in NRW, GrESt 6,5 %, Notar 2 %, Makler 3,57 %):
  16.250 + 5.000 + 8.925 = **30.175 €** (12,07 %); Gesamtinvestition **280.175 €**. ✓
- **Annuität** (200.000 €, 3,8 %, 2 % Tilgung, 10 J.): Rate 966,67 €/M.; Restschuld
  nach 10 Jahren ≈ **151.000 €** (monatlich iterativ gerechnet); SVG-Tilgungsverlauf
  selbst gezeichnet, keine Chart-Bibliothek. ✓
- Grunderwerbsteuersätze als Konfigtabelle mit Stand-Datum und „ohne Gewähr"-Hinweis
  in `src/config.ts`.

## Landingpage-Abgleich (Ehrlichkeits-Check)

- **Coming-Soon** gekennzeichnet: Bento-Karten „Objekt-Analysen" und „Markt-Updates";
  in der 0-€-Karte zusätzlich Monatsreport, Live-Q&A-Report-Charakter, monatliche
  Challenges und Mitglieder-Spotlights (noch nicht real gebaut).
- **Real & entsprechend gelistet:** Blueprint, Fugger-Pfad, Wiki, Kontor-Board,
  Kalender, 4 Rechner.
- **„40+ Lernmodule"** → `STATS.modules = 42` (stimmt jetzt). **„12 Live-Calls/Monat"**
  → `STATS.liveCalls.value = null` („Regelmäßige Calls"), zentral in config änderbar.

## QA (headless Chromium)

- Voller Flow getestet: Registrierung → Dashboard-Redirect, Lektion+Quiz-Auswertung,
  Fortschritt/Rang nach Reload persistent, Wiki-Suche+Querverlink, 4 Rechner, Kontor
  (Regeln-Modal einmalig, Beitrag erstellen), Profil, Logout → geschützte Route
  redirectet zu /login. Alle 7 App-Seiten bei 375 px ohne Overflow (Dashboard-Overflow
  durch fehlendes `min-w-0` an Grid-Items gefunden und behoben). Keine Konsolenfehler.
