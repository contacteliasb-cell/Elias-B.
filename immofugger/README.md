# ImmoFugger — Bildungs- & Community-Plattform für Immobilien

Landingpage **plus** vollständiger Mitgliederbereich: echte Registrierung/Login,
ein Lernprogramm mit 42 Lektionen und Quiz, ein Immobilien-Wiki mit 78 Artikeln,
vier Rechner, ein Community-Board, Kalender und Profil.

Stack: **Vite + React + TypeScript + Tailwind CSS + Framer Motion**, Backend
über **Supabase** (mit automatischem Demo-Modus, siehe unten).

---

## Schnellstart

```bash
cd immofugger
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run preview  # Produktions-Build lokal testen
npm run lint     # Linter (oxlint)
```

> **Sofort testbar ohne Einrichtung:** Solange keine Supabase-Schlüssel gesetzt
> sind, läuft die komplette App im **Demo-Modus** (localStorage). Registrierung,
> Login, Lernfortschritt und Community-Board funktionieren lokal in deinem
> Browser — erkennbar am „Demo-Modus"-Badge oben im Mitgliederbereich.

---

## Wo liegt was?

| Was | Wo |
|---|---|
| **Alle UI-Texte** (Sektionen, Seiten, Rechtstexte) | `src/content/de.ts` |
| **Konfiguration** (Mitgliederzahl, E-Mail, Community-Modus, Grunderwerbsteuer) | `src/config.ts` |
| **Lerninhalte** Blueprint (6 Modulgruppen, 42 Lektionen) | `src/content/blueprint/` |
| **Wiki-Artikel** (78 Begriffe, 6 Kategorien) | `src/content/wiki/` |
| **Kalender-Events** | `src/content/events.ts` |
| Landingpage-Sektionen | `src/sections/` |
| Mitgliederbereich (Layout + Seiten) | `src/app/` |
| Öffentliche Seiten (Login, Registrieren, Recht, 404) | `src/pages/` |
| **Backend-Adapter** (Supabase + Demo) | `src/lib/backend/` |
| Auth-Context, Rang-Logik, Rechner-Bausteine | `src/lib/`, `src/components/calculators/` |
| **Datenbankschema für Supabase** | `supabase/schema.sql` |
| Farben & Fonts (Design-System) | `tailwind.config.js` |

---

## Supabase in 10 Minuten

Damit aus dem Demo-Modus ein echtes Backend mit Konten und gespeichertem
Fortschritt wird:

1. **Projekt anlegen** — auf [supabase.com](https://supabase.com) einloggen,
   *New project* klicken, Namen und ein Datenbank-Passwort vergeben, Region
   (z. B. Frankfurt) wählen, *Create new project*. Warte ~2 Minuten, bis das
   Projekt bereit ist.
2. **Schema ausführen** — im Supabase-Dashboard links auf **SQL Editor** →
   *New query*. Öffne die Datei `supabase/schema.sql` aus diesem Projekt,
   kopiere ihren **kompletten Inhalt** ins Editor-Feld und klicke **Run**.
   Das legt die Tabellen (`profiles`, `lesson_progress`, `community_posts`,
   `community_replies`), die Row-Level-Security-Regeln und den Trigger fürs
   automatische Profil an. Das Skript ist idempotent — mehrfaches Ausführen
   schadet nicht.
3. **E-Mail-Bestätigung** — unter **Authentication → Providers → Email** die
   Option *Confirm email* **aktiviert lassen** (Double-Opt-In). Das ist für
   den Start empfehlenswert, weil es sicherstellt, dass sich niemand mit
   fremden Adressen registriert, und dich vor Spam-Konten schützt. Die App
   zeigt nach der Registrierung dann automatisch den Hinweis „Bitte bestätige
   deine E-Mail". Möchtest du zum Testen ohne Mail-Bestätigung arbeiten, kannst
   du *Confirm email* vorübergehend deaktivieren.
   - Unter **Authentication → URL Configuration** trägst du deine spätere
     Domain als *Site URL* ein (lokal: `http://localhost:5173`), damit die
     Bestätigungs- und Passwort-Reset-Links korrekt zurückführen.
4. **Schlüssel kopieren** — unter **Project Settings → API** findest du
   *Project URL* und den *anon public* Key. Kopiere die Datei `.env.example`
   zu `.env` und trage beide Werte ein:
   ```bash
   VITE_SUPABASE_URL=https://deinprojekt.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...   # der „anon public" Key
   ```
5. **Fertig.** Starte den Dev-Server neu (`npm run dev`). Der „Demo-Modus"-Badge
   verschwindet — ab jetzt laufen Konten und Fortschritt über Supabase.

> Der `anon`-Key ist für den Client gedacht und darf öffentlich sein; die
> Datensicherheit stellen die Row-Level-Security-Regeln aus `schema.sql` her
> (jede:r sieht/ändert nur eigene Daten; Community-Beiträge lesen alle
> Eingeloggten, ändern/löschen nur die Autor:innen).

---

## Deployment (Vercel oder Netlify)

Statischer Build, kein eigener Server nötig. SPA-Routing ist für beide Anbieter
vorkonfiguriert (`vercel.json` bzw. `public/_redirects`).

**Wichtig:** Trage die beiden Umgebungsvariablen auch beim Hoster ein — sonst
läuft die Live-Seite im Demo-Modus.

### Vercel

1. Repo im Vercel-Dashboard importieren, als **Root Directory** `immofugger` wählen
   (Framework „Vite", Build `npm run build`, Output `dist` werden erkannt).
2. Unter **Settings → Environment Variables** anlegen:
   `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` (Werte aus deiner `.env`).
3. **Deploy** — bzw. per CLI:
   ```bash
   npm i -g vercel
   cd immofugger
   vercel --prod
   ```

### Netlify

1. Repo verbinden, **Base directory** `immofugger`, Build `npm run build`,
   Publish `immofugger/dist`.
2. Unter **Site settings → Environment variables** dieselben zwei Variablen setzen.
3. Deploy — bzw. per CLI:
   ```bash
   npm i -g netlify-cli
   cd immofugger
   npm run build
   netlify deploy --prod --dir=dist
   ```

Nach jeder Änderung der Umgebungsvariablen beim Hoster einen **Re-Deploy**
auslösen, damit sie in den Build einfließen.

---

## Inhalte & Konfiguration pflegen

- **Mitgliederzahl / Kennzahlen** — `src/config.ts` → `MEMBER_COUNT`,
  `MEMBER_COUNT_NUMERIC`, `STATS`. Die Live-Calls-Kennzahl steht bewusst auf
  „Regelmäßige Calls" (`STATS.liveCalls.value = null`); setz sie auf eine Zahl,
  sobald deine Planung steht.
- **Kontakt-/Support-E-Mail** — `src/config.ts` → `CONTACT_EMAIL` (wird auch für
  den Hinweis zur Kontolöschung genutzt).
- **Community-Modus** — `src/config.ts` → `COMMUNITY_MODE`:
  - `'board'` (Standard): eingebautes Frage- & Austausch-Board im Kontor.
  - `'external'`: zeigt stattdessen eine Beitritts-Karte zu deiner externen
    Gruppe — URL/Name in `COMMUNITY_EXTERNAL_URL` / `COMMUNITY_EXTERNAL_NAME`.
- **Kalender-Events** — `src/content/events.ts`: neuen Eintrag ins Array
  einfügen (`inDays` = Tage ab heute, `type` = `call` | `frist` | `markt`).
  Vergangene Events werden automatisch ausgeblendet. Kommentar in der Datei
  erklärt die Felder.
- **Lerninhalte** redigieren — `src/content/blueprint/<modul>.ts` (Text, Beispiel,
  Kontor-Notiz, Quiz je Lektion). **Wiki** — `src/content/wiki/articles-*.ts`.
- **Newsletter (Landingpage)** — der Formspree-Adapter (`src/lib/forms.ts`)
  sammelt Newsletter-Anmeldungen; Endpoint optional in `src/config.ts`
  (`FORMSPREE_NEWSLETTER_ENDPOINT`), sonst localStorage-Fallback.

---

## Was du vor dem Launch noch tun musst

Alles Übrige ist fertig und getestet. Zu erledigen bleibt nur:

1. **Supabase-Schlüssel eintragen** — `.env` lokal und die Env-Variablen beim
   Hoster (siehe „Supabase in 10 Minuten" und „Deployment").
2. **Rechtstexte ersetzen** — alle mit `[PLATZHALTER — vor Launch durch
   Anwalt/Generator ersetzen]` markierten Blöcke in `src/content/de.ts`
   (Impressum, Datenschutz, Teile von Disclaimer & Community-Richtlinien).
3. **Kontakt- & Community-Links setzen** — `CONTACT_EMAIL`, `SOCIALS` und (falls
   `COMMUNITY_MODE: 'external'`) die Gruppen-URL in `src/config.ts`.

Optional: Domain in den Open-Graph-Tags (`index.html`) und die *Site URL* in
Supabase auf deine echte Domain anpassen.

---

## Technik-Notizen

- **Backend-Adapter:** `src/lib/backend/` mit gemeinsamem Interface (`types.ts`)
  und zwei Implementierungen — `supabase.ts` und `demo.ts`. Die Auswahl passiert
  automatisch in `index.ts` je nachdem, ob die Supabase-Variablen gesetzt sind.
  Kein Feature ist doppelt gebaut.
- **Rang-Logik:** `src/lib/ranks.ts` — der Rang berechnet sich aus abgeschlossenen
  Lektionen (Schwellen: Lehrling 0 · Geselle 8 · Kaufmann 18 · Handelsherr 30 ·
  Fugger 42).
- **Fonts** selbst gehostet (`@fontsource/*`, DSGVO-freundlich, kein Google-CDN).
- **Code-Splitting:** Landing-Sektionen und alle App-Seiten werden lazy geladen.
- **Rechner** sind bewusst vereinfachte Modellrechnungen mit deutlichem Hinweis;
  keine Anlage-, Steuer- oder Rechtsberatung.
```
