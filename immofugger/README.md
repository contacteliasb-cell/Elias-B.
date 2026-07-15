# ImmoFugger — Landingpage

Kostenlose Bildungs- und Community-Plattform für Immobilien.
One-Page-Landingpage mit Registrierung, Rechnern und Unterseiten —
Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Schnellstart

```bash
cd immofugger
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Produktions-Build lokal testen
npm run lint     # Linter (oxlint)
```

## Wo liegt was?

| Was | Wo |
|---|---|
| **Alle Texte** (jede Sektion, jede Seite) | `src/content/de.ts` |
| **Konfiguration** (Mitgliederzahl, E-Mail, Form-Endpoints, Socials, Partner) | `src/config.ts` |
| Sektionen der Landingpage (Hero, Bento, Fugger-Pfad, …) | `src/sections/` |
| Wiederverwendbare UI-Bausteine (Logo, Button, Counter, Mockups) | `src/components/` |
| Seiten (Registrieren, Login, Impressum, 404, …) | `src/pages/` |
| Form-Adapter, Formatierung, Hooks | `src/lib/` |
| Farben & Fonts (Design-System) | `tailwind.config.js` |
| SEO / Open-Graph / Favicon | `index.html`, `public/` |

## Häufige Änderungen

**Mitgliederzahl ändern** — in `src/config.ts`:

```ts
MEMBER_COUNT: '500+',        // Anzeige-Text
MEMBER_COUNT_NUMERIC: 500,   // Zahl für animierte Counter
STATS: { members: { value: 500, … } }
```

**Kontakt-E-Mail ändern** — in `src/config.ts` → `CONTACT_EMAIL`.

**Texte ändern** — ausschließlich in `src/content/de.ts`. Jede Sektion hat dort ihren eigenen, kommentierten Block.

## Registrierung & Newsletter (Form-Adapter)

Version 1 läuft ohne Backend. Der Adapter in `src/lib/forms.ts` arbeitet zweistufig:

1. **Formspree** (empfohlen für den Live-Betrieb):
   - Auf [formspree.io](https://formspree.io) ein kostenloses Konto anlegen und **zwei Formulare** erstellen (z. B. „Registrierung" und „Newsletter").
   - Die beiden Endpoint-URLs in `src/config.ts` eintragen:
     ```ts
     FORMSPREE_REGISTER_ENDPOINT: 'https://formspree.io/f/DEINE_ID_1',
     FORMSPREE_NEWSLETTER_ENDPOINT: 'https://formspree.io/f/DEINE_ID_2',
     ```
   - Fertig — Einsendungen landen in deinem Formspree-Posteingang bzw. per E-Mail-Benachrichtigung.
2. **Fallback (Standard, solange kein Endpoint eingetragen ist):** Einträge werden im
   `localStorage` des Besucher-Browsers gesammelt (Keys `immofugger:registrations` und
   `immofugger:newsletter`) und der Erfolgs-Screen erscheint. So ist die Seite sofort
   live-fähig; für echtes Lead-Sammeln aber bitte Formspree konfigurieren.

## Deployment

Statischer Build, kein Server nötig. SPA-Routing ist für beide Anbieter vorkonfiguriert
(`vercel.json` bzw. `public/_redirects`).

**Vercel**

```bash
npm i -g vercel
cd immofugger
vercel          # Fragen bestätigen — Framework „Vite" wird automatisch erkannt
vercel --prod   # Produktions-Deploy
```

Alternativ über das Vercel-Dashboard: Repo importieren, als **Root Directory** `immofugger` wählen — Build-Command `npm run build`, Output `dist` werden automatisch erkannt.

**Netlify**

```bash
npm i -g netlify-cli
cd immofugger
npm run build
netlify deploy --prod --dir=dist
```

Oder im Netlify-Dashboard: Repo verbinden, **Base directory** `immofugger`, Build-Command `npm run build`, Publish directory `immofugger/dist`.

## Vor dem Launch (Checkliste)

- [ ] Formspree-Endpoints in `src/config.ts` eintragen (siehe oben)
- [ ] Rechtstexte ersetzen: Alle mit `[PLATZHALTER — vor Launch durch Anwalt/Generator ersetzen]` markierten Blöcke in `src/content/de.ts` (Impressum, Datenschutz, Teile von Disclaimer/Richtlinien)
- [ ] `CONTACT_EMAIL` und Social-Links in `src/config.ts` finalisieren
- [ ] Domain in den OG-Tags prüfen (`index.html`), sobald die echte Domain steht

## Technik-Notizen

- **Fonts** (Cormorant Garamond, Inter, IBM Plex Mono) werden **selbst gehostet** (`@fontsource/*`) — kein Google-CDN, DSGVO-freundlich und offline-fähig.
- Sektionen unterhalb des Folds werden **lazy** geladen (`src/pages/LandingPage.tsx`).
- Das OG-Bild liegt unter `public/og.png` (1200 × 630).
- Die Rechner sind bewusst vereinfachte Modellrechnungen — der Disclaimer dazu steht direkt unter der Tools-Sektion und auf `/disclaimer`.
