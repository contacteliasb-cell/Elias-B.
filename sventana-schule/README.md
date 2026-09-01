# Sventana-Schule Bornhöved – Website (Demo)

Moderne, statische Multi-Page-Website für die **Sventana-Schule** (Grund- und
Gemeinschaftsschule Bornhöved) als Ersatz für die veraltete WordPress-Seite.

## Technik

- Reines **HTML / CSS / JavaScript** – kein Build-Schritt, kein Framework.
- **Mobile-first**, responsiv, schnelle Ladezeiten.
- Header & Footer werden aus **einer** Quelle (`assets/js/main.js`) injiziert –
  die Navigation muss also nur an einer Stelle gepflegt werden.
- Funktioniert auch direkt per Doppelklick (`file://`), ideal ist aber ein
  einfacher Webserver, z. B.:
  ```bash
  cd sventana-schule
  python3 -m http.server 8000
  # dann http://localhost:8000 öffnen
  ```

## Design

- Helle, neutrale Basis (Weiß/Off-White) mit den Schulfarben **Rot, Gelb, Blau,
  Grün** als gezielte Akzente (Buttons, Icons, Kategorie-Tags, Hover-States).
- Farb-Tokens zentral in `assets/css/style.css` (`:root`).
- Schrift: „Inter“ (Google Fonts) mit System-Font-Fallback.

## Seitenübersicht

| Datei | Seite |
|---|---|
| `index.html` | Startseite (Hero, Video-Platzhalter, Schnellzugriffe) |
| `neuigkeiten.html` | Neuigkeiten mit Kategorie-Filter |
| `termine-mensa.html` | Termine und Mensa |
| `vertretungsplan.html` | Vertretungsplan (Verweis auf externes System) |
| `schule.html` | Beschreibung der Schule (inkl. historischem S/W-Foto) |
| `konzepte-ordnungen.html` | Konzepte & Ordnungen (Downloads) |
| `formulare.html` | Formulare (Downloads) |
| `schuelerfirma.html` | Schülerfirma |
| `kontakt.html` | Kontakt (Grundschule + Sekundarstufe I) |
| `schultraeger.html` | Schulträger |
| `kooperationspartner.html` | Kooperationspartner |
| `foerderverein.html` | Förderverein |
| `schueleraufnahme.html` | Schüleraufnahme |
| `vertrauenslehrkraft.html` | Vertrauenslehrkraft |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutz |

## Inhalte, Platzhalter & eigene Ergänzungen

Die Kerninformationen (Adressen, Telefon, E-Mail, Schulträger, Förderverein,
Kooperationspartner, News-Kategorien) stammen von der Original-Seite bzw. aus
öffentlichen Quellen und wurden sprachlich überarbeitet.

- **`[PLATZHALTER]`** (gelbe Markierung) = Beispieltext / fehlender Inhalt, der
  noch durch echte Angaben ersetzt werden muss.
- **`[ERGÄNZT]`** (grüne Markierung) = eigener, plausibel ergänzter Inhalt zum
  Gegenchecken.

> Hinweis: Die Original-Domain `sventana-schule.de` war aus dieser Umgebung
> technisch nicht direkt abrufbar. Die Inhalte basieren daher auf recherchierten
> öffentlichen Angaben und sollten final mit der Schule abgeglichen werden.

## Bilder / Logo nachliefern

Bilder sind als Platzhalter angelegt. Sobald echte Dateien vorliegen, einfach
unter `assets/img/` mit folgenden Namen ablegen – die Seiten binden sie dann
automatisch ein (mit Fallback auf den Platzhalter, falls die Datei fehlt):

- `assets/img/schule-heute.jpg` – aktuelles Foto der Schule
- `assets/img/schule-historisch.jpg` – **historisches Schwarz-Weiß-Foto der
  Schule vor ca. 50 Jahren** (auf `schule.html` in der Rubrik „Ein Blick zurück“)

Logo, Partner-Logos und weitere Fotos ersetzen die entsprechenden
`[BILD-PLATZHALTER]` / `[LOGO]`-Flächen.

PDF-Downloads (Formulare, Konzepte) unter `downloads/` ablegen und die
`href="#"`-Links entsprechend setzen.
