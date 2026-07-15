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
