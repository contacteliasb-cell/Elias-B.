/* ============================================================
   Themenbereich: Bewertung & Gutachten
   ============================================================
   Neue Inhalte? Einfach in die Arrays unten eintragen –
   das Schema ist in js/data/registry.js dokumentiert.
   ============================================================ */

LERN.registerArea({
  id: 'bewertung',
  title: 'Bewertung & Gutachten',
  icon: '📐',
  description: 'Was ist eine Immobilie wirklich wert? Marktwert, Gutachterausschüsse, die drei normierten Bewertungsverfahren und der Beleihungswert der Banken.',

  /* ---------------- Unterthemen mit Lektionen ---------------- */

  subtopics: [
    {
      id: 'grundlagen',
      title: 'Wertbegriffe & rechtliche Grundlagen',
      teaser: 'Marktwert nach § 194 BauGB, ImmoWertV, Gutachterausschüsse, Bodenrichtwerte',
      lesson: `
        <p>Bevor du irgendein Verfahren rechnest, musst du wissen, <strong>welchen Wert</strong> du überhaupt suchst und <strong>woher deine Daten kommen</strong>. Das ist das Fundament jeder seriösen Einwertung – und genau hier trennen sich Profis von Schätzern aus dem Bauch.</p>

        <h3>Der Marktwert (Verkehrswert)</h3>
        <div class="box box-info">
          <span class="box-title">§ 194 BauGB – die wichtigste Definition der Immobilienbewertung</span>
          Der Verkehrswert (Marktwert) wird durch den Preis bestimmt, der zum <strong>Wertermittlungsstichtag</strong> im <strong>gewöhnlichen Geschäftsverkehr</strong> nach den rechtlichen Gegebenheiten und tatsächlichen Eigenschaften, der sonstigen Beschaffenheit und der <strong>Lage</strong> des Grundstücks <strong>ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse</strong> zu erzielen wäre.
        </div>
        <p>Drei Dinge solltest du dir aus dieser Definition merken:</p>
        <ul>
          <li><strong>Stichtagsprinzip:</strong> Der Wert gilt für einen bestimmten Tag. Sechs Monate später kann der Markt ganz woanders stehen.</li>
          <li><strong>Gewöhnlicher Geschäftsverkehr:</strong> Kein Notverkauf, kein Verkauf an den Schwager – ein normaler Markt mit normalen Käufern.</li>
          <li><strong>Ohne persönliche Verhältnisse:</strong> Dass die Eigentümerin im Haus geboren wurde, ist emotional wichtig, aber wertneutral.</li>
        </ul>

        <h3>Wert ≠ Preis</h3>
        <p>Ein Klassiker im Maklerbüro: Der <strong>Wert</strong> ist das Ergebnis eines objektivierten Verfahrens, der <strong>Preis</strong> ist, was am Ende tatsächlich bezahlt wird. Preise können vom Wert abweichen – durch Verhandlungsgeschick, Zeitdruck, Emotionen oder besondere Käuferinteressen (z. B. der Nachbar, der unbedingt erweitern will).</p>

        <h3>Die Rechtsgrundlagen im Überblick</h3>
        <div class="table-wrap"><table>
          <tr><th>Regelwerk</th><th>Inhalt</th></tr>
          <tr><td><strong>BauGB §§ 192–199</strong></td><td>Gutachterausschüsse, Kaufpreissammlung, Bodenrichtwerte, Verkehrswert-Definition (§ 194)</td></tr>
          <tr><td><strong>ImmoWertV</strong> (seit 2022 in aktueller Fassung)</td><td>Regelt die normierten Verfahren: Vergleichswert-, Ertragswert-, Sachwertverfahren sowie Bodenrichtwerte, Liegenschaftszinssätze und Sachwertfaktoren</td></tr>
          <tr><td><strong>BelWertV</strong></td><td>Beleihungswertermittlung für Kreditinstitute (eigenes Unterthema)</td></tr>
          <tr><td><strong>§ 34c GewO / MaBV</strong></td><td>Gewerberecht für Makler – bewerten darfst du beratend, „Gutachter" ist aber keine geschützte Aufgabe des Maklers</td></tr>
        </table></div>

        <h3>Gutachterausschüsse – deine wichtigste Datenquelle</h3>
        <p>Die <strong>Gutachterausschüsse für Grundstückswerte</strong> (§§ 192 ff. BauGB) sind unabhängige Gremien, meist bei Landkreisen und kreisfreien Städten angesiedelt. Ihre Aufgaben:</p>
        <ul>
          <li><strong>Kaufpreissammlung</strong> führen (§ 195 BauGB): Jeder notarielle Kaufvertrag wird ihnen übermittelt – daraus entsteht die beste Marktdatenbank, die es gibt.</li>
          <li><strong>Bodenrichtwerte</strong> ableiten (§ 196 BauGB): durchschnittliche Lagewerte für Bauland, bezogen auf den Quadratmeter Grundstücksfläche, mindestens alle zwei Jahre.</li>
          <li><strong>Marktdaten</strong> ableiten: Liegenschaftszinssätze, Sachwertfaktoren, Vergleichsfaktoren – veröffentlicht im Grundstücksmarktbericht.</li>
          <li>Auf Antrag <strong>Verkehrswertgutachten</strong> erstellen.</li>
        </ul>
        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Bodenrichtwerte findest du kostenlos im Portal <strong>BORIS</strong> deines Bundeslandes. Als Makler solltest du zusätzlich den jährlichen <strong>Grundstücksmarktbericht</strong> deiner Region lesen – wer die dortigen Liegenschaftszinssätze und Faktoren kennt, argumentiert in jedem Preisgespräch souveräner als 90 % der Kollegen.
        </div>

        <h3>Was den Wert wirklich treibt</h3>
        <p>Die alte Maklerweisheit „Lage, Lage, Lage" stimmt – aber Profis differenzieren:</p>
        <ul>
          <li><strong>Makrolage:</strong> Region, Stadt, Arbeitsmarkt, Demografie, Infrastruktur.</li>
          <li><strong>Mikrolage:</strong> Straße, Nachbarschaft, Lärm, Ausrichtung, Nahversorgung, ÖPNV.</li>
          <li><strong>Objekteigenschaften:</strong> Baujahr, Zustand, Energieeffizienz, Grundriss, Ausstattung.</li>
          <li><strong>Rechtliche Eigenschaften:</strong> Baurecht, Denkmalschutz, Erbbaurecht, Wegerechte, Grundbuchlasten (Abteilung II!), Mietbindungen.</li>
        </ul>
        <div class="box box-example">
          <span class="box-title">💡 Beispiel</span>
          Zwei identische Doppelhaushälften, 300 m voneinander entfernt: Eine liegt an der Hauptstraße (Lärm, schlechter wiederverkäuflich), eine in der Spielstraße dahinter. Gleicher Bodenrichtwert in der Zone – aber am Markt liegen locker 10–15 % dazwischen. Genau solche Mikrolage-Anpassungen machen eine gute Einwertung aus.
        </div>

        <h3>Die drei normierten Verfahren – wann nimmst du welches?</h3>
        <figure class="diagram">
        <svg viewBox="0 0 640 210" role="img" aria-label="Übersicht der drei Bewertungsverfahren">
          <rect x="10" y="10" width="195" height="150" rx="12" fill="#e8efff" stroke="#1f5eff"/>
          <text x="107" y="42" text-anchor="middle" font-weight="bold" font-size="15" fill="#1c2333">Vergleichswert</text>
          <text x="107" y="70" text-anchor="middle" font-size="12" fill="#1c2333">Preise vergleichbarer</text>
          <text x="107" y="87" text-anchor="middle" font-size="12" fill="#1c2333">Objekte</text>
          <text x="107" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f5eff">ETW · EFH ·</text>
          <text x="107" y="137" text-anchor="middle" font-size="12" font-weight="bold" fill="#1f5eff">Bauland</text>
          <rect x="222" y="10" width="195" height="150" rx="12" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="319" y="42" text-anchor="middle" font-weight="bold" font-size="15" fill="#1c2333">Ertragswert</text>
          <text x="319" y="70" text-anchor="middle" font-size="12" fill="#1c2333">Kapitalisierte</text>
          <text x="319" y="87" text-anchor="middle" font-size="12" fill="#1c2333">Mieterträge</text>
          <text x="319" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#14a06b">MFH · Gewerbe ·</text>
          <text x="319" y="137" text-anchor="middle" font-size="12" font-weight="bold" fill="#14a06b">Anlageobjekte</text>
          <rect x="434" y="10" width="195" height="150" rx="12" fill="#fff4dd" stroke="#ff9f1c"/>
          <text x="531" y="42" text-anchor="middle" font-weight="bold" font-size="15" fill="#1c2333">Sachwert</text>
          <text x="531" y="70" text-anchor="middle" font-size="12" fill="#1c2333">Herstellungskosten</text>
          <text x="531" y="87" text-anchor="middle" font-size="12" fill="#1c2333">minus Alterung</text>
          <text x="531" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#b36b00">EFH ohne Vergleiche ·</text>
          <text x="531" y="137" text-anchor="middle" font-size="12" font-weight="bold" fill="#b36b00">Spezialobjekte</text>
          <text x="320" y="195" text-anchor="middle" font-size="12" fill="#5a6478">Merksatz: Eigennutzer → Vergleich · Investor → Ertrag · kein Markt → Substanz</text>
        </svg>
        <figcaption>Die drei normierten Verfahren der ImmoWertV und ihre typischen Einsatzfelder.</figcaption>
        </figure>
        <p>In der Praxis werden oft <strong>zwei Verfahren parallel</strong> gerechnet und die Ergebnisse plausibilisiert. Die ImmoWertV verlangt ohnehin eine <strong>Marktanpassung</strong> jedes Ergebnisses.</p>
      `,
    },
    {
      id: 'vergleichswert',
      title: 'Vergleichswertverfahren',
      teaser: 'Der Königsweg für Wohnungen, Häuser und Bauland – Preise vergleichbarer Objekte',
      lesson: `
        <p>Das Vergleichswertverfahren ist das <strong>marktnächste</strong> Verfahren und deshalb immer erste Wahl, wenn genug Vergleichsdaten existieren. Logik: Was haben Käufer für <em>vergleichbare</em> Objekte tatsächlich bezahlt?</p>

        <h3>Zwei Varianten</h3>
        <ul>
          <li><strong>Unmittelbarer Vergleich:</strong> konkrete Kaufpreise sehr ähnlicher Objekte (aus der Kaufpreissammlung).</li>
          <li><strong>Mittelbarer Vergleich:</strong> über <strong>Vergleichsfaktoren</strong> des Gutachterausschusses, z. B. €/m² Wohnfläche für Eigentumswohnungen einer bestimmten Baualtersklasse und Lage.</li>
        </ul>

        <div class="box box-formula">
          Vergleichswert = Vergleichspreis (€/m²) ± Zu-/Abschläge × Wohnfläche
        </div>

        <h3>Anpassungen – das Handwerk dahinter</h3>
        <p>Kein Objekt gleicht dem anderen. Abweichungen werden über <strong>Zu- und Abschläge</strong> berücksichtigt, z. B. für:</p>
        <ul>
          <li>Lagequalität innerhalb der Vergleichszone (Mikrolage)</li>
          <li>Zustand / Modernisierungsstand / Energieeffizienz</li>
          <li>Geschoss, Balkon/Terrasse, Aufzug, Stellplatz (bei ETW)</li>
          <li>Grundstücksgröße und -zuschnitt (bei Häusern)</li>
          <li>Marktentwicklung seit dem Vergleichszeitpunkt (Indexierung)</li>
        </ul>
        <div class="box box-warn">
          <span class="box-title">⚠️ Grenze des Verfahrens</span>
          Weichen Vergleichsobjekte zu stark ab (Faustregel: Anpassungen über ~30–35 % Gesamtumfang), ist der „Vergleich" keiner mehr. Dann besser Sachwert- oder Ertragswertverfahren ergänzen.
        </div>

        <div class="box box-example">
          <span class="box-title">💡 Durchgerechnetes Beispiel</span>
          Zu bewerten: 3-Zimmer-ETW, 78 m², 2. OG mit Balkon, guter Zustand.<br>
          Vergleichsfaktor lt. Grundstücksmarktbericht: 3.400 €/m² für die Lage- und Baualtersklasse.<br>
          Anpassungen: +5 % Balkon/Süd (170 €), −3 % kein Aufzug (−102 €) → 3.468 €/m².<br>
          <strong>Vergleichswert: 78 m² × 3.468 €/m² ≈ 270.500 €</strong> (gerundet: 270.000 €).
        </div>

        <h3>Bodenwert unbebauter Grundstücke</h3>
        <p>Auch der <strong>Bodenwert</strong> wird im Vergleichswertverfahren ermittelt – meist über den <strong>Bodenrichtwert</strong>:</p>
        <div class="box box-formula">
          Bodenwert = Grundstücksfläche (m²) × Bodenrichtwert (€/m²) ± Anpassungen
        </div>
        <p>Anpassungen z. B. für abweichende Grundstücksgröße, Zuschnitt, Erschließungszustand oder ein abweichendes Maß der baulichen Nutzung (GFZ/GRZ) gegenüber dem Richtwertgrundstück.</p>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Kunden lieben Online-Bewertungen („Ihr Haus ist 512.343 € wert!"). Nutze sie als Gesprächsöffner, aber erkläre souverän: Automatische Modelle kennen weder den Sanierungsstau im Bad noch die neue Lärmschutzwand. Deine Stärke als Makler ist die <strong>begründete</strong> Einwertung mit echten Vergleichsdaten – das schafft Vertrauen und bringt den Alleinauftrag.
        </div>
      `,
    },
    {
      id: 'ertragswert',
      title: 'Ertragswertverfahren',
      teaser: 'Bewertung über Mieterträge – das Verfahren für Zinshäuser und Gewerbe',
      lesson: `
        <p>Kauft jemand ein Mehrfamilienhaus, kauft er keinen „Wohntraum", sondern einen <strong>Zahlungsstrom</strong>. Das Ertragswertverfahren beantwortet die Frage: Was sind die künftigen Mieterträge heute wert?</p>

        <h3>Das Schema (allgemeines Ertragswertverfahren)</h3>
        <figure class="diagram">
        <svg viewBox="0 0 640 330" role="img" aria-label="Schema Ertragswertverfahren">
          <rect x="150" y="8" width="340" height="34" rx="8" fill="#e8efff" stroke="#1f5eff"/>
          <text x="320" y="30" text-anchor="middle" font-size="13" fill="#1c2333">Jahresrohertrag (marktüblich erzielbare Miete)</text>
          <text x="320" y="60" text-anchor="middle" font-size="13" fill="#d64550">− Bewirtschaftungskosten (Verwaltung, Instandhaltung, Mietausfall)</text>
          <rect x="150" y="72" width="340" height="34" rx="8" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="320" y="94" text-anchor="middle" font-size="13" fill="#1c2333">= Reinertrag</text>
          <text x="320" y="124" text-anchor="middle" font-size="13" fill="#d64550">− Bodenwertverzinsung (Bodenwert × Liegenschaftszinssatz)</text>
          <rect x="150" y="136" width="340" height="34" rx="8" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="320" y="158" text-anchor="middle" font-size="13" fill="#1c2333">= Gebäudereinertrag</text>
          <text x="320" y="188" text-anchor="middle" font-size="13" fill="#1c2333">× Vervielfältiger (aus Restnutzungsdauer &amp; Liegenschaftszins)</text>
          <rect x="150" y="200" width="340" height="34" rx="8" fill="#fff4dd" stroke="#ff9f1c"/>
          <text x="320" y="222" text-anchor="middle" font-size="13" fill="#1c2333">= Gebäudeertragswert</text>
          <text x="320" y="252" text-anchor="middle" font-size="13" fill="#1c2333">+ Bodenwert</text>
          <rect x="150" y="264" width="340" height="38" rx="8" fill="#1f5eff"/>
          <text x="320" y="288" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">= Ertragswert (± Marktanpassung, besondere Merkmale)</text>
        </svg>
        <figcaption>Der Bodenwert wird getrennt behandelt, weil Boden nicht „altert" – nur das Gebäude hat eine begrenzte Nutzungsdauer.</figcaption>
        </figure>

        <h3>Die Stellschrauben im Detail</h3>
        <ul>
          <li><strong>Rohertrag:</strong> die <em>marktüblich erzielbare</em> Jahresmiete (nicht zwingend die tatsächliche!). Liegt die Ist-Miete unter Markt, steckt Potenzial im Objekt – liegt sie darüber, ist Vorsicht geboten (Overrent).</li>
          <li><strong>Bewirtschaftungskosten (BWK):</strong> nicht auf Mieter umlegbare Kosten – Verwaltung, Instandhaltungsrücklage, Mietausfallwagnis, ggf. nicht umlegbare Betriebskosten. Bei Wohnobjekten grob <strong>18–25 % des Rohertrags</strong>.</li>
          <li><strong>Liegenschaftszinssatz (LZ):</strong> der Zinssatz, mit dem der Markt Immobilienerträge kapitalisiert – abgeleitet vom Gutachterausschuss aus echten Kaufpreisen. Faustwerte: Wohnungen/MFH in guten Lagen 2–4 %, einfache Lagen 4–6 %, Gewerbe 5–8 %. <strong>Je höher der LZ, desto niedriger der Wert</strong> (höheres Risiko → Käufer zahlen weniger für denselben Ertrag).</li>
          <li><strong>Restnutzungsdauer (RND):</strong> Gesamtnutzungsdauer (Wohngebäude ~80 Jahre) minus Alter, verlängerbar durch Modernisierung.</li>
          <li><strong>Vervielfältiger:</strong> Barwertfaktor einer Rente über die RND beim LZ. Er steht in Tabellen (Anlage ImmoWertV) – du musst ihn nicht im Kopf berechnen, aber verstehen: <em>lange RND + niedriger Zins = hoher Vervielfältiger.</em></li>
        </ul>

        <div class="box box-example">
          <span class="box-title">💡 Durchgerechnetes Beispiel</span>
          MFH, 6 Wohnungen, Rohertrag 60.000 €/Jahr, BWK 20 %, Bodenwert 200.000 €, LZ 4 %, RND 40 Jahre (Vervielfältiger ≈ 19,79).<br>
          Reinertrag: 60.000 − 12.000 = <strong>48.000 €</strong><br>
          Bodenwertverzinsung: 200.000 × 4 % = <strong>8.000 €</strong><br>
          Gebäudereinertrag: 48.000 − 8.000 = <strong>40.000 €</strong><br>
          Gebäudeertragswert: 40.000 × 19,79 ≈ <strong>791.600 €</strong><br>
          Ertragswert: 791.600 + 200.000 ≈ <strong>991.600 €</strong> → gerundet ~990.000 €.
        </div>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp: der Kaufpreisfaktor</span>
          Investoren reden selten vom Ertragswert, sondern vom <strong>Faktor</strong>: Kaufpreis ÷ Jahresnettokaltmiete. „Das Objekt geht für das 25-Fache weg" heißt: 25 Jahresmieten. Kehrwert = Bruttomietrendite (1/25 = 4 %). Wenn du Faktor und LZ deiner Region kennst, erkennst du überteuerte Angebote in Sekunden.
        </div>

        <div class="box box-warn">
          <span class="box-title">⚠️ Typische Anfängerfehler</span>
          <ul style="margin:0">
            <li>Bruttomiete (mit Nebenkosten) statt Nettokaltmiete angesetzt</li>
            <li>BWK vergessen – dann ist der Wert systematisch zu hoch</li>
            <li>Ist-Miete blind übernommen, obwohl sie weit über Markt liegt</li>
            <li>Leerstand und Mietausfallwagnis ignoriert</li>
          </ul>
        </div>
      `,
    },
    {
      id: 'sachwert',
      title: 'Sachwertverfahren',
      teaser: 'Bewertung über Herstellungskosten – wenn Vergleiche und Erträge fehlen',
      lesson: `
        <p>Das Sachwertverfahren fragt: <strong>Was würde es kosten, das Objekt heute neu zu bauen – abzüglich Alterung?</strong> Es kommt zum Einsatz, wenn weder ausreichend Vergleichspreise existieren noch Erträge im Vordergrund stehen: individuelle Einfamilienhäuser, Spezialimmobilien, eigengenutzte Objekte in dünnen Märkten.</p>

        <h3>Das Schema</h3>
        <div class="box box-formula">
          Sachwert = (Bodenwert + Gebäudesachwert + Außenanlagen) × Sachwertfaktor
        </div>
        <ol>
          <li><strong>Bodenwert:</strong> wie immer über Bodenrichtwert (Vergleichswertverfahren).</li>
          <li><strong>Herstellungskosten des Gebäudes:</strong> Normalherstellungskosten (NHK, €/m² Brutto-Grundfläche, nach Gebäudeart und Standardstufe) × Brutto-Grundfläche (BGF), angepasst mit dem <strong>Baupreisindex</strong> auf den Stichtag.</li>
          <li><strong>Alterswertminderung:</strong> in der Regel <strong>linear</strong> – Alter ÷ Gesamtnutzungsdauer. Ein 40 Jahre altes Haus (GND 80) hat 50 % Alterswertminderung.</li>
          <li><strong>Marktanpassung mit dem Sachwertfaktor:</strong> Der vorläufige Sachwert ist ein Kostenwert, kein Marktwert! Der Gutachterausschuss leitet aus echten Verkäufen <strong>Sachwertfaktoren</strong> ab (z. B. 0,9 in schwachen, 1,4 in gefragten Regionen), die den Kostenwert an den Markt anpassen.</li>
        </ol>

        <div class="box box-example">
          <span class="box-title">💡 Durchgerechnetes Beispiel</span>
          EFH, BGF 240 m², NHK (indexiert) 2.100 €/m², Alter 30 Jahre, GND 80 Jahre, Bodenwert 180.000 €, Außenanlagen 15.000 €, Sachwertfaktor 1,1.<br>
          Herstellungskosten: 240 × 2.100 = <strong>504.000 €</strong><br>
          Alterswertminderung: 30/80 = 37,5 % → Gebäudesachwert: 504.000 × 0,625 = <strong>315.000 €</strong><br>
          Vorläufiger Sachwert: 315.000 + 15.000 + 180.000 = <strong>510.000 €</strong><br>
          Sachwert: 510.000 × 1,1 = <strong>561.000 €</strong>
        </div>

        <div class="box box-warn">
          <span class="box-title">⚠️ Der häufigste Denkfehler von Eigentümern</span>
          „Ich habe 300.000 € reingesteckt, also ist es mindestens 300.000 € mehr wert." Falsch: <strong>Kosten sind nicht Wert.</strong> Ein Koi-Teich für 50.000 € bringt am Markt vielleicht 5.000 € – der Sachwertfaktor und die Marktanpassung sorgen dafür, dass am Ende der Markt entscheidet, nicht die Rechnungssumme. Diesen Zusammenhang musst du Verkäufern immer wieder freundlich erklären können.
        </div>

        <h3>Modernisierung & Restnutzungsdauer</h3>
        <p>Umfassende Modernisierungen (Heizung, Fenster, Dach, Bad, Elektrik) <strong>verlängern die Restnutzungsdauer</strong> und senken damit die Alterswertminderung – die ImmoWertV enthält dafür ein Punktemodell. Für dich als Makler heißt das: Frag im Einwertungstermin systematisch die Modernisierungshistorie ab (Was? Wann?) – das sind bares Geld werte Informationen.</p>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Energieeffizienz ist zum harten Preisfaktor geworden: Zwischen Effizienzklasse B und H liegen am Markt je nach Region deutliche Abschläge, weil Käufer Sanierungskosten (GEG-Pflichten!) einpreisen. Nimm den Energieausweis deshalb schon zur Einwertung mit, nicht erst zur Vermarktung.
        </div>
      `,
    },
    {
      id: 'beleihungswert',
      title: 'Beleihungswert & Bankensicht',
      teaser: 'BelWertV, Sicherheitsabschläge, Beleihungsauslauf – wie Banken Immobilien sehen',
      lesson: `
        <p>Wenn dein Käufer finanziert (also fast immer), bewertet <strong>auch die Bank</strong> das Objekt – aber nach eigenen, konservativeren Regeln. Wer das versteht, kann Finanzierungsprobleme im Verkaufsprozess früh erkennen und vermeiden.</p>

        <h3>Was ist der Beleihungswert?</h3>
        <div class="box box-info">
          <span class="box-title">§ 16 PfandBG / BelWertV</span>
          Der Beleihungswert ist der Wert, der der Immobilie <strong>voraussichtlich dauerhaft</strong> zukommt – unter Ausschluss spekulativer Elemente und nur unter Berücksichtigung der <strong>nachhaltigen</strong> Eigenschaften des Objekts. Er darf den Marktwert <strong>nicht überschreiten</strong> und liegt praktisch immer darunter.
        </div>
        <ul>
          <li><strong>Marktwert:</strong> Stichtagswert – was heute erzielbar wäre.</li>
          <li><strong>Beleihungswert:</strong> vorsichtiger Dauerwert – was das Objekt auch in schwachen Marktphasen wert sein dürfte. Typisch: <strong>ca. 10–20 % unter Marktwert.</strong></li>
        </ul>

        <h3>Wichtige Begriffe der Bankenpraxis</h3>
        <div class="table-wrap"><table>
          <tr><th>Begriff</th><th>Bedeutung</th></tr>
          <tr><td><strong>Beleihungsgrenze</strong></td><td>Anteil des Beleihungswerts, bis zu dem „erstrangig" finanziert wird – für Pfandbriefdeckung 60 % des Beleihungswerts</td></tr>
          <tr><td><strong>Beleihungsauslauf (LTV)</strong></td><td>Darlehenssumme ÷ Beleihungswert (bzw. Kaufpreis). Je höher der Auslauf, desto höher der Zinssatz – wichtige Schwellen liegen oft bei 60 %, 80 %, 90 %, 100 %</td></tr>
          <tr><td><strong>Kleindarlehensgrenze</strong></td><td>Bis 600.000 € Darlehen erlaubt die BelWertV vereinfachte Wertermittlungen (z. B. ohne Innenbesichtigung)</td></tr>
          <tr><td><strong>Vorlast</strong></td><td>Bestehende Grundschulden in Abt. III des Grundbuchs, die vor dem neuen Darlehen rangieren</td></tr>
        </table></div>

        <div class="box box-example">
          <span class="box-title">💡 Durchgerechnetes Beispiel</span>
          Kaufpreis/Marktwert: 500.000 €. Bank setzt Beleihungswert mit 90 % an → 450.000 €.<br>
          Käufer bringt 100.000 € Eigenkapital + Nebenkosten mit, braucht 400.000 € Darlehen.<br>
          Beleihungsauslauf: 400.000 ÷ 450.000 ≈ <strong>88,9 %</strong> → über der 80 %-Schwelle, also spürbarer Zinsaufschlag.<br>
          Mit 45.000 € mehr Eigenkapital käme er auf 355.000 ÷ 450.000 ≈ 78,9 % – und in die günstigere Zinsklasse.
        </div>

        <h3>Wie die Bank rechnet</h3>
        <p>Die BelWertV kennt dieselben drei Verfahren (Vergleichs-, Ertrags-, Sachwert), aber mit <strong>vorsichtigen Ansätzen</strong>: Mindest-Kapitalisierungszinssätze, Pflicht-Bewirtschaftungskosten, Sicherheitsabschläge. Bei Renditeobjekten dominiert der Ertragswert, bei eigengenutzten Objekten der Sachwert-/Vergleichswertansatz.</p>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp für den Verkaufsprozess</span>
          Wenn der Angebotspreis weit über dem liegt, was Banken als Wert ansetzen, platzen Finanzierungen kurz vor dem Notartermin – der Alptraum jedes Maklers. Profis prüfen deshalb früh: Passt der Kaufpreis zu Bodenrichtwert, Mietniveau und Vergleichspreisen? Und sie fordern vom Käufer eine <strong>Finanzierungsbestätigung</strong>, bevor der Notartermin vereinbart wird.
        </div>

        <div class="box box-warn">
          <span class="box-title">⚠️ Abgrenzung</span>
          Verwechsle den Beleihungswert nicht mit der <em>Grundschuld</em>: Die Grundschuld (Abt. III Grundbuch) ist das Sicherungsrecht, das die Bank eintragen lässt – sie kann höher sein als das Darlehen. Der Beleihungswert ist dagegen nur die interne Wertgröße der Bank.
        </div>
      `,
    },
  ],

  /* ---------------- Quizfragen ---------------- */

  quiz: [
    // grundlagen
    { sub: 'grundlagen', q: 'Wo ist der Verkehrswert (Marktwert) gesetzlich definiert?',
      options: ['§ 194 BauGB', '§ 433 BGB', '§ 34c GewO', '§ 16 PfandBG'], correct: 0,
      explain: '§ 194 BauGB definiert den Verkehrswert: der im gewöhnlichen Geschäftsverkehr am Stichtag erzielbare Preis – ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse.' },
    { sub: 'grundlagen', q: 'Was bedeutet das „Stichtagsprinzip" in der Wertermittlung?',
      options: ['Der Wert gilt für einen bestimmten Tag – der Markt kann sich danach ändern', 'Die Bewertung muss an einem Werktag erfolgen', 'Der Wert gilt immer für ein ganzes Kalenderjahr', 'Der Käufer muss am Stichtag besichtigen'], correct: 0,
      explain: 'Der Verkehrswert bezieht sich immer auf den Wertermittlungsstichtag. Marktveränderungen danach sind nicht enthalten – deshalb veralten Gutachten.' },
    { sub: 'grundlagen', q: 'Welche Aufgabe haben die Gutachterausschüsse NICHT?',
      options: ['Baugenehmigungen erteilen', 'Kaufpreissammlung führen', 'Bodenrichtwerte ableiten', 'Verkehrswertgutachten auf Antrag erstellen'], correct: 0,
      explain: 'Baugenehmigungen erteilt die Bauaufsichtsbehörde. Gutachterausschüsse (§§ 192 ff. BauGB) sammeln Kaufpreise, leiten Bodenrichtwerte und Marktdaten ab und erstellen Gutachten.' },
    { sub: 'grundlagen', q: 'Woraus speist sich die Kaufpreissammlung der Gutachterausschüsse?',
      options: ['Aus jedem notariellen Kaufvertrag, den Notare übermitteln müssen', 'Aus freiwilligen Meldungen von Maklern', 'Aus Immobilienportalen', 'Aus Schätzungen der Finanzämter'], correct: 0,
      explain: 'Notare sind verpflichtet, jeden Grundstückskaufvertrag an den Gutachterausschuss zu übermitteln (§ 195 BauGB) – deshalb ist die Kaufpreissammlung die beste Marktdatenquelle.' },
    { sub: 'grundlagen', q: 'Was ist der Unterschied zwischen Wert und Preis?',
      options: ['Der Wert ist das Ergebnis eines objektivierten Verfahrens, der Preis das tatsächlich Gezahlte', 'Es gibt keinen – beide Begriffe sind identisch', 'Der Preis ist immer höher als der Wert', 'Der Wert enthält die Kaufnebenkosten, der Preis nicht'], correct: 0,
      explain: 'Preise entstehen durch Verhandlung, Emotion und Situation – sie können vom rechnerisch ermittelten Wert deutlich abweichen.' },
    { sub: 'grundlagen', q: 'Welche Verordnung regelt die normierten Wertermittlungsverfahren (Vergleichs-, Ertrags-, Sachwertverfahren)?',
      options: ['ImmoWertV', 'MaBV', 'BetrKV', 'HOAI'], correct: 0,
      explain: 'Die Immobilienwertermittlungsverordnung (ImmoWertV) regelt die drei normierten Verfahren sowie Bodenrichtwerte, Liegenschaftszinssätze und Sachwertfaktoren.' },
    { sub: 'grundlagen', q: 'Ein Ehepaar verkauft sein Haus deutlich unter Marktniveau an die Tochter. Warum ist dieser Preis für die Wertermittlung unbrauchbar?',
      options: ['Weil persönliche/ungewöhnliche Verhältnisse vorliegen – kein gewöhnlicher Geschäftsverkehr', 'Weil Verkäufe an Verwandte verboten sind', 'Weil der Preis nicht notariell beurkundet wurde', 'Er ist brauchbar, Preise sind Preise'], correct: 0,
      explain: 'Der Verkehrswert stellt auf den gewöhnlichen Geschäftsverkehr ab. Verwandtenverkäufe spiegeln persönliche Verhältnisse und scheiden als Vergleichspreis aus.' },
    { sub: 'grundlagen', q: 'Was beschreibt die „Mikrolage" eines Objekts?',
      options: ['Das unmittelbare Umfeld: Straße, Lärm, Nachbarschaft, Nahversorgung', 'Die wirtschaftliche Stärke der Region', 'Die Größe des Grundstücks', 'Die Innenausstattung der Immobilie'], correct: 0,
      explain: 'Makrolage = Region/Stadt, Mikrolage = konkretes Umfeld. Zwei Objekte in derselben Stadt können durch die Mikrolage stark unterschiedliche Werte haben.' },
    { sub: 'grundlagen', q: 'In welchem Portal findest du Bodenrichtwerte kostenlos?',
      options: ['BORIS (Bodenrichtwertinformationssystem der Länder)', 'ELSTER', 'Grundbuchamt-Online', 'ImmoScout-Preisatlas'], correct: 0,
      explain: 'Die Länder veröffentlichen Bodenrichtwerte im BORIS-Portal. Für tiefergehende Daten lohnt der Grundstücksmarktbericht des Gutachterausschusses.' },

    // vergleichswert
    { sub: 'vergleichswert', q: 'Für welche Objektart ist das Vergleichswertverfahren erste Wahl?',
      options: ['Eigentumswohnungen und typische Einfamilienhäuser', 'Vermietete Bürogebäude', 'Kraftwerke', 'Hotels'], correct: 0,
      explain: 'Bei ETW, EFH und Bauland gibt es viele ähnliche Transaktionen – das marktnächste Verfahren ist hier am zuverlässigsten. Ertragsobjekte laufen über den Ertragswert.' },
    { sub: 'vergleichswert', q: 'Was ist ein „mittelbarer" Preisvergleich?',
      options: ['Bewertung über Vergleichsfaktoren (z. B. €/m²) statt über konkrete Einzelverkäufe', 'Vergleich über einen Mittelsmann', 'Der Durchschnitt aus zwei Gutachten', 'Ein Vergleich mit Objekten aus anderen Bundesländern'], correct: 0,
      explain: 'Beim unmittelbaren Vergleich nutzt du konkrete Kaufpreise, beim mittelbaren die vom Gutachterausschuss abgeleiteten Vergleichsfaktoren.' },
    { sub: 'vergleichswert', q: 'Der Bodenrichtwert einer Zone beträgt 450 €/m². Was gilt?',
      options: ['Er ist ein durchschnittlicher Lagewert für ein Richtwertgrundstück – individuelle Anpassung nötig', 'Jedes Grundstück der Zone ist exakt 450 €/m² wert', 'Er ist der Mindestpreis für Verkäufe', 'Er gilt nur für bebaute Grundstücke'], correct: 0,
      explain: 'Bodenrichtwerte beziehen sich auf ein definiertes Richtwertgrundstück. Abweichungen (Größe, Zuschnitt, Nutzungsmaß, Erschließung) musst du anpassen.' },
    { sub: 'vergleichswert', q: 'Wann stößt das Vergleichswertverfahren an seine Grenze?',
      options: ['Wenn die nötigen Anpassungen zu groß werden (Faustregel: über ~30–35 %)', 'Wenn das Objekt größer als 100 m² ist', 'Wenn der Käufer finanziert', 'Wenn das Objekt vermietet ist'], correct: 0,
      explain: 'Je mehr du „anpassen" musst, desto weniger ist es ein Vergleich. Dann ergänzt man Sachwert- oder Ertragswertverfahren.' },
    { sub: 'vergleichswert', q: 'Eine ETW wird mit Vergleichsfaktor 3.000 €/m² bewertet. Sie hat einen Süd-Balkon (+5 %) und liegt im Erdgeschoss ohne Aufzugrelevanz (−2 %). Welcher m²-Preis ergibt sich?',
      options: ['3.090 €/m²', '3.150 €/m²', '2.940 €/m²', '3.000 €/m²'], correct: 0,
      explain: '3.000 × (1 + 0,05 − 0,02) = 3.000 × 1,03 = 3.090 €/m². Zu- und Abschläge werden auf den Vergleichsfaktor angewendet.' },
    { sub: 'vergleichswert', q: 'Warum sind Angebotspreise aus Portalen nur bedingt als „Vergleichspreise" tauglich?',
      options: ['Sie sind Wunschpreise – tatsächlich beurkundete Kaufpreise liegen oft darunter', 'Sie sind immer zu niedrig', 'Portale dürfen keine Preise nennen', 'Sie enthalten die Maklerprovision nicht'], correct: 0,
      explain: 'Angebote zeigen die Erwartung der Verkäufer. Echte Vergleichsdaten liefern Kaufpreissammlung und Grundstücksmarktbericht – Angebotspreise sind nur ein Stimmungsindikator.' },
    { sub: 'vergleichswert', q: 'Grundstück: 600 m², Bodenrichtwert 400 €/m², keine Anpassungen. Bodenwert?',
      options: ['240.000 €', '24.000 €', '400.000 €', '150.000 €'], correct: 0,
      explain: '600 m² × 400 €/m² = 240.000 €. Bodenwert = Fläche × Bodenrichtwert (± Anpassungen).' },
    { sub: 'vergleichswert', q: 'Welche Information gehört NICHT zu den typischen Anpassungskriterien beim Wohnungsvergleich?',
      options: ['Der Beruf des Verkäufers', 'Geschoss und Aufzug', 'Balkon/Terrasse', 'Modernisierungszustand'], correct: 0,
      explain: 'Persönliche Verhältnisse des Verkäufers sind wertneutral. Objekteigenschaften wie Geschoss, Ausstattung und Zustand werden dagegen angepasst.' },

    // ertragswert
    { sub: 'ertragswert', q: 'Wie berechnet sich der Reinertrag?',
      options: ['Rohertrag minus Bewirtschaftungskosten', 'Rohertrag minus Bodenwertverzinsung', 'Kaltmiete plus Nebenkosten', 'Kaufpreis geteilt durch Faktor'], correct: 0,
      explain: 'Reinertrag = Jahresrohertrag − Bewirtschaftungskosten (Verwaltung, Instandhaltung, Mietausfallwagnis, nicht umlegbare Betriebskosten).' },
    { sub: 'ertragswert', q: 'Warum wird die Bodenwertverzinsung vom Reinertrag abgezogen?',
      options: ['Weil der Boden getrennt bewertet wird – nur der Gebäudeanteil des Ertrags wird über die Restnutzungsdauer kapitalisiert', 'Weil der Boden keine Erträge bringt', 'Aus steuerlichen Gründen', 'Damit der Wert niedriger ausfällt'], correct: 0,
      explain: 'Der Boden „lebt ewig", das Gebäude nicht. Deshalb trennt das Verfahren: Bodenwert separat, Gebäudereinertrag über die RND kapitalisiert.' },
    { sub: 'ertragswert', q: 'Was passiert mit dem Ertragswert, wenn der Liegenschaftszinssatz steigt?',
      options: ['Er sinkt', 'Er steigt', 'Er bleibt gleich', 'Er verdoppelt sich'], correct: 0,
      explain: 'Höherer Liegenschaftszins = höheres Risiko/höhere Renditeerwartung → Käufer zahlen weniger für denselben Ertrag. Zins hoch, Wert runter – und umgekehrt.' },
    { sub: 'ertragswert', q: 'Rohertrag 48.000 €, Bewirtschaftungskosten 25 %. Wie hoch ist der Reinertrag?',
      options: ['36.000 €', '12.000 €', '44.000 €', '60.000 €'], correct: 0,
      explain: '48.000 × 0,75 = 36.000 €. Die BWK von 25 % (12.000 €) werden abgezogen.' },
    { sub: 'ertragswert', q: 'Was sagt ein Kaufpreisfaktor von 25 aus?',
      options: ['Der Kaufpreis entspricht 25 Jahresnettokaltmieten – Bruttomietrendite 4 %', 'Die Immobilie ist 25 Jahre alt', 'Die Rendite beträgt 25 %', 'Der Preis liegt 25 % über Markt'], correct: 0,
      explain: 'Faktor = Kaufpreis ÷ Jahresnettokaltmiete. Kehrwert = Bruttomietrendite: 1/25 = 4 %. Investoren-Sprache, die du fließend sprechen solltest.' },
    { sub: 'ertragswert', q: 'Welche Miete gehört als Rohertrag ins Ertragswertverfahren?',
      options: ['Die marktüblich erzielbare Nettokaltmiete', 'Die Bruttowarmmiete inklusive aller Nebenkosten', 'Die Miete von vor 10 Jahren', 'Die höchste am Markt beobachtete Miete'], correct: 0,
      explain: 'Angesetzt wird die marktüblich erzielbare (nachhaltige) Nettokaltmiete – nicht Warmmiete und nicht Wunschmieten.' },
    { sub: 'ertragswert', q: 'Ein Objekt hat eine Ist-Miete deutlich ÜBER der Marktmiete (Overrent). Wie gehst du in der Bewertung damit um?',
      options: ['Vorsichtig – nachhaltig ist nur die Marktmiete, der Überhang ist zeitlich begrenzt', 'Die höhere Ist-Miete dauerhaft ansetzen', 'Das Objekt ist unverkäuflich', 'Ist-Miete verdoppeln'], correct: 0,
      explain: 'Overrent ist nicht nachhaltig: Beim Mieterwechsel fällt die Miete auf Marktniveau. Seriös bewertet man mit der marktüblichen Miete und berücksichtigt den Überhang allenfalls befristet.' },
    { sub: 'ertragswert', q: 'Wovon hängt der Vervielfältiger im Ertragswertverfahren ab?',
      options: ['Restnutzungsdauer und Liegenschaftszinssatz', 'Wohnfläche und Zimmerzahl', 'Bodenrichtwert und GRZ', 'Baujahr und Energieklasse'], correct: 0,
      explain: 'Der Vervielfältiger ist der Rentenbarwertfaktor über die Restnutzungsdauer beim Liegenschaftszins: lange RND + niedriger Zins = hoher Vervielfältiger.' },
    { sub: 'ertragswert', q: 'Welche Kostenposition gehört NICHT zu den Bewirtschaftungskosten?',
      options: ['Die Darlehenszinsen des Eigentümers', 'Verwaltungskosten', 'Instandhaltungskosten', 'Mietausfallwagnis'], correct: 0,
      explain: 'Finanzierungskosten sind persönliche Verhältnisse des Eigentümers und fließen nie in die objektive Wertermittlung ein.' },

    // sachwert
    { sub: 'sachwert', q: 'Wann ist das Sachwertverfahren das richtige Verfahren?',
      options: ['Wenn Vergleichspreise fehlen und keine Erträge im Vordergrund stehen (z. B. individuelles EFH)', 'Bei jeder vermieteten Wohnung', 'Nur bei Neubauten', 'Bei Eigentumswohnungen in Großstädten'], correct: 0,
      explain: 'Sachwert = Auffangverfahren für eigengenutzte/individuelle Objekte in dünnen Märkten und Spezialimmobilien.' },
    { sub: 'sachwert', q: 'Wie wird die Alterswertminderung im Sachwertverfahren üblicherweise berechnet?',
      options: ['Linear: Alter geteilt durch Gesamtnutzungsdauer', 'Exponentiell steigend', 'Pauschal 50 % ab 20 Jahren', 'Gar nicht – Gebäude verlieren keinen Wert'], correct: 0,
      explain: 'Die ImmoWertV sieht die lineare Alterswertminderung vor: z. B. 40 Jahre alt bei GND 80 → 50 % Minderung.' },
    { sub: 'sachwert', q: 'Wozu dient der Sachwertfaktor?',
      options: ['Er passt den Kostenwert an den tatsächlichen Markt an (Marktanpassung)', 'Er berücksichtigt die Inflation der Mieten', 'Er berechnet die Grunderwerbsteuer', 'Er ersetzt den Bodenrichtwert'], correct: 0,
      explain: 'Herstellungskosten sind kein Marktwert. Der aus echten Verkäufen abgeleitete Sachwertfaktor (z. B. 0,9 oder 1,3) übersetzt den Kostenwert in den Markt.' },
    { sub: 'sachwert', q: 'Haus, 40 Jahre alt, Gesamtnutzungsdauer 80 Jahre. Wie viel Prozent Alterswertminderung?',
      options: ['50 %', '25 %', '40 %', '80 %'], correct: 0,
      explain: '40 ÷ 80 = 0,5 → 50 % Alterswertminderung. Vom Neubauwert des Gebäudes bleibt die Hälfte.' },
    { sub: 'sachwert', q: 'Ein Eigentümer sagt: „Ich habe 80.000 € in einen Wellnesskeller investiert – das muss auf den Preis drauf." Was ist fachlich richtig?',
      options: ['Kosten sind nicht Wert – der Markt honoriert nur, was Käufer wirklich zahlen würden', 'Er hat recht, Investitionen sind 1:1 wertsteigernd', 'Investitionen zählen doppelt', 'Nur Investitionen der letzten 12 Monate zählen'], correct: 0,
      explain: 'Der Klassiker im Verkäufergespräch: Herstellungskosten ≠ Marktwert. Sehr individuelle Ausstattung bringt oft nur einen Bruchteil der Kosten zurück.' },
    { sub: 'sachwert', q: 'Was verlängert die Restnutzungsdauer eines Gebäudes?',
      options: ['Umfassende Modernisierung (Dach, Heizung, Fenster, Elektrik, Bäder)', 'Ein neuer Anstrich im Wohnzimmer', 'Ein Eigentümerwechsel', 'Eine neue Einbauküche'], correct: 0,
      explain: 'Wesentliche Modernisierungen „verjüngen" das Gebäude – die ImmoWertV bildet das über ein Punktemodell ab. Kosmetik zählt nicht.' },
    { sub: 'sachwert', q: 'Auf welche Fläche beziehen sich die Normalherstellungskosten (NHK)?',
      options: ['Brutto-Grundfläche (BGF)', 'Wohnfläche', 'Grundstücksfläche', 'Nutzfläche des Kellers'], correct: 0,
      explain: 'NHK sind €/m² Brutto-Grundfläche (alle Geschossflächen inkl. Konstruktion) – nicht Wohnfläche! Ein häufiger Rechenfehler.' },
    { sub: 'sachwert', q: 'Warum spielt die Energieeffizienzklasse heute eine große Rolle im Wert?',
      options: ['Käufer preisen Sanierungskosten und GEG-Pflichten ein', 'Sie bestimmt die Grundsteuer', 'Banken finanzieren nur Klasse A', 'Sie ist gesetzlich wertbestimmend mit festen Prozentsätzen'], correct: 0,
      explain: 'Zwischen effizienten und unsanierten Objekten liegen am Markt deutliche Preisabschläge, weil Sanierungskosten (Heizungstausch, Dämmung) kalkuliert werden.' },

    // beleihungswert
    { sub: 'beleihungswert', q: 'Was ist der wichtigste Unterschied zwischen Marktwert und Beleihungswert?',
      options: ['Der Beleihungswert ist ein vorsichtiger Dauerwert und liegt praktisch immer unter dem Marktwert', 'Der Beleihungswert ist immer höher', 'Es gibt keinen Unterschied', 'Der Marktwert gilt nur für Banken'], correct: 0,
      explain: 'Marktwert = Stichtagswert. Beleihungswert = nachhaltiger Wert ohne spekulative Elemente (§ 16 PfandBG, BelWertV), typisch 10–20 % darunter.' },
    { sub: 'beleihungswert', q: 'Welche Grenze gilt für die Pfandbriefdeckung erstrangiger Darlehen?',
      options: ['60 % des Beleihungswerts', '80 % des Kaufpreises', '100 % des Marktwerts', '50 % des Bodenwerts'], correct: 0,
      explain: 'Die Beleihungsgrenze für Pfandbriefdeckung liegt bei 60 % des Beleihungswerts – deshalb sind Finanzierungen bis zu dieser Schwelle am günstigsten.' },
    { sub: 'beleihungswert', q: 'Was beschreibt der Beleihungsauslauf (LTV)?',
      options: ['Das Verhältnis von Darlehenssumme zum Beleihungswert/Objektwert', 'Die Laufzeit des Darlehens', 'Den Zeitpunkt der Auszahlung', 'Die Höhe der Grundschuld'], correct: 0,
      explain: 'LTV (Loan to Value) = Darlehen ÷ Wert. Je höher der Auslauf, desto höher das Bankrisiko und damit der Zinssatz.' },
    { sub: 'beleihungswert', q: 'Käufer: 400.000 € Darlehen, Beleihungswert 450.000 €. Beleihungsauslauf?',
      options: ['ca. 89 %', 'ca. 113 %', 'ca. 50 %', 'ca. 72 %'], correct: 0,
      explain: '400.000 ÷ 450.000 ≈ 0,889 → 88,9 %. Über der 80 %-Schwelle wird der Zins meist spürbar teurer.' },
    { sub: 'beleihungswert', q: 'Warum sollte ein Makler vor dem Notartermin eine Finanzierungsbestätigung des Käufers sehen wollen?',
      options: ['Damit die Finanzierung nicht nach der Beurkundungsvorbereitung platzt und alle Zeit verlieren', 'Weil es gesetzlich vorgeschrieben ist', 'Weil der Notar sonst nicht beurkunden darf', 'Um die Provision zu erhöhen'], correct: 0,
      explain: 'Gesetzlich vorgeschrieben ist sie nicht – aber professionell: Geplatzte Finanzierungen kosten Verkäufer, Käufer und Makler Wochen und Vertrauen.' },
    { sub: 'beleihungswert', q: 'Bis zu welcher Darlehenshöhe erlaubt die BelWertV vereinfachte Wertermittlungen (Kleindarlehensgrenze)?',
      options: ['600.000 €', '100.000 €', '1.000.000 €', '250.000 €'], correct: 0,
      explain: 'Seit der BelWertV-Novelle 2022 liegt die Kleindarlehensgrenze bei 600.000 € – bis dahin sind vereinfachte Verfahren (z. B. ohne Innenbesichtigung) zulässig.' },
    { sub: 'beleihungswert', q: 'Was steht in Abteilung III des Grundbuchs?',
      options: ['Grundpfandrechte wie Grundschulden und Hypotheken', 'Die Eigentümer', 'Lasten und Beschränkungen wie Wegerechte', 'Die Flurstücksbezeichnung'], correct: 0,
      explain: 'Abt. I: Eigentümer, Abt. II: Lasten/Beschränkungen, Abt. III: Grundpfandrechte. Für Finanzierungen ist Abt. III entscheidend (Vorlasten!).' },
    { sub: 'beleihungswert', q: 'Der Angebotspreis liegt 25 % über jedem begründbaren Wert. Welches Risiko entsteht im Verkaufsprozess?',
      options: ['Käufer bekommen die Finanzierung nicht – der Verkauf platzt spät im Prozess', 'Keines, der Markt zahlt jeden Preis', 'Die Grunderwerbsteuer entfällt', 'Der Notar lehnt die Beurkundung ab'], correct: 0,
      explain: 'Banken finanzieren auf Basis ihrer eigenen (konservativen) Werte. Liegt der Kaufpreis weit darüber, fehlt Käufern Eigenkapital für die Lücke – Finanzierungen platzen.' },
  ],

  /* ---------------- Karteikarten ---------------- */

  cards: [
    { sub: 'grundlagen', front: 'Definition Verkehrswert / Marktwert (§ 194 BauGB)?', back: 'Der Preis, der zum Wertermittlungsstichtag im gewöhnlichen Geschäftsverkehr nach den rechtlichen Gegebenheiten und tatsächlichen Eigenschaften ohne Rücksicht auf ungewöhnliche oder persönliche Verhältnisse zu erzielen wäre.' },
    { sub: 'grundlagen', front: 'Welche 3 normierten Wertermittlungsverfahren kennt die ImmoWertV?', back: '1. Vergleichswertverfahren\n2. Ertragswertverfahren\n3. Sachwertverfahren' },
    { sub: 'grundlagen', front: 'Aufgaben der Gutachterausschüsse (§§ 192 ff. BauGB)?', back: 'Kaufpreissammlung führen, Bodenrichtwerte ableiten, Marktdaten (Liegenschaftszinsen, Sachwertfaktoren) veröffentlichen, Gutachten auf Antrag erstellen.' },
    { sub: 'grundlagen', front: 'Was ist ein Bodenrichtwert?', back: 'Durchschnittlicher Lagewert des Bodens in €/m² für ein definiertes Richtwertgrundstück einer Zone – abgeleitet aus der Kaufpreissammlung, mind. alle 2 Jahre (§ 196 BauGB). Portal: BORIS.' },
    { sub: 'grundlagen', front: 'Stichtagsprinzip?', back: 'Der ermittelte Wert gilt nur für den Wertermittlungsstichtag. Spätere Marktveränderungen sind nicht berücksichtigt.' },
    { sub: 'grundlagen', front: 'Unterschied Makrolage vs. Mikrolage?', back: 'Makrolage: Region, Stadt, Wirtschaftskraft, Demografie.\nMikrolage: unmittelbares Umfeld – Straße, Lärm, Nachbarschaft, ÖPNV, Nahversorgung.' },
    { sub: 'grundlagen', front: 'Unterschied Wert und Preis?', back: 'Wert = Ergebnis eines objektivierten Verfahrens.\nPreis = tatsächlich gezahlter Betrag (durch Verhandlung, Emotion, Situation beeinflusst).' },
    { sub: 'grundlagen', front: 'Wo stehen Lasten und Beschränkungen (z. B. Wegerecht, Wohnrecht) im Grundbuch?', back: 'Abteilung II. (Abt. I: Eigentümer, Abt. III: Grundpfandrechte.) Rechte in Abt. II können den Wert erheblich mindern.' },
    { sub: 'vergleichswert', front: 'Formel Bodenwert?', back: 'Bodenwert = Grundstücksfläche (m²) × Bodenrichtwert (€/m²) ± Anpassungen (Größe, Zuschnitt, Nutzungsmaß, Erschließung).' },
    { sub: 'vergleichswert', front: 'Unmittelbarer vs. mittelbarer Preisvergleich?', back: 'Unmittelbar: konkrete Kaufpreise sehr ähnlicher Objekte.\nMittelbar: über Vergleichsfaktoren des Gutachterausschusses (z. B. €/m² Wohnfläche).' },
    { sub: 'vergleichswert', front: 'Typische Anpassungskriterien bei ETW-Vergleich?', back: 'Mikrolage, Geschoss, Aufzug, Balkon/Terrasse, Zustand/Modernisierung, Energieeffizienz, Stellplatz, Marktentwicklung (Indexierung).' },
    { sub: 'vergleichswert', front: 'Warum sind Angebotspreise keine Vergleichspreise?', back: 'Angebotspreise sind Wunschpreise der Verkäufer. Maßgeblich sind tatsächlich beurkundete Kaufpreise (Kaufpreissammlung, Grundstücksmarktbericht).' },
    { sub: 'ertragswert', front: 'Formel Reinertrag?', back: 'Reinertrag = Jahresrohertrag (marktübliche Nettokaltmiete) − Bewirtschaftungskosten.' },
    { sub: 'ertragswert', front: 'Was sind Bewirtschaftungskosten (BWK)?', back: 'Nicht umlegbare Kosten des Eigentümers: Verwaltung, Instandhaltung, Mietausfallwagnis, nicht umlegbare Betriebskosten. Wohnen grob 18–25 % des Rohertrags. KEINE Finanzierungskosten!' },
    { sub: 'ertragswert', front: 'Was ist der Liegenschaftszinssatz?', back: 'Der Zinssatz, mit dem der Markt Immobilienerträge kapitalisiert – vom Gutachterausschuss aus echten Kaufpreisen abgeleitet. Höherer LZ = niedrigerer Ertragswert.' },
    { sub: 'ertragswert', front: 'Schema Ertragswertverfahren (Kurzform)?', back: 'Rohertrag − BWK = Reinertrag\n− Bodenwertverzinsung = Gebäudereinertrag\n× Vervielfältiger = Gebäudeertragswert\n+ Bodenwert = Ertragswert' },
    { sub: 'ertragswert', front: 'Kaufpreisfaktor – Definition und Umrechnung in Rendite?', back: 'Faktor = Kaufpreis ÷ Jahresnettokaltmiete.\nBruttomietrendite = 1 ÷ Faktor (Faktor 25 → 4 %).' },
    { sub: 'ertragswert', front: 'Wovon hängt der Vervielfältiger ab?', back: 'Von Restnutzungsdauer und Liegenschaftszinssatz (Rentenbarwertfaktor). Lange RND + niedriger Zins → hoher Vervielfältiger.' },
    { sub: 'ertragswert', front: 'Was bedeutet Overrent / Underrent?', back: 'Overrent: Ist-Miete über Marktmiete (nicht nachhaltig!).\nUnderrent: Ist-Miete unter Markt (= Mietsteigerungspotenzial). Bewertet wird die nachhaltige Marktmiete.' },
    { sub: 'ertragswert', front: 'Übliche Gesamtnutzungsdauer von Wohngebäuden nach ImmoWertV?', back: 'Ca. 80 Jahre. Restnutzungsdauer = GND − Alter, durch Modernisierung verlängerbar.' },
    { sub: 'sachwert', front: 'Schema Sachwertverfahren (Kurzform)?', back: '(NHK × BGF, indexiert) − Alterswertminderung = Gebäudesachwert\n+ Außenanlagen + Bodenwert = vorläufiger Sachwert\n× Sachwertfaktor = Sachwert' },
    { sub: 'sachwert', front: 'Formel lineare Alterswertminderung?', back: 'Alterswertminderung (%) = Alter ÷ Gesamtnutzungsdauer × 100.\nBeispiel: 20 Jahre / GND 80 = 25 %.' },
    { sub: 'sachwert', front: 'Was ist der Sachwertfaktor?', back: 'Marktanpassungsfaktor des Gutachterausschusses, der den Kostenwert (vorläufiger Sachwert) in den Marktwert übersetzt. Kann unter 1 (schwacher Markt) oder deutlich über 1 liegen.' },
    { sub: 'sachwert', front: 'NHK beziehen sich auf welche Fläche?', back: 'Brutto-Grundfläche (BGF) – alle Geschossflächen inkl. Konstruktion. Nicht die Wohnfläche!' },
    { sub: 'sachwert', front: 'Merksatz: Kosten vs. Wert?', back: '„Kosten sind nicht Wert." Investitionen zahlen sich nur so weit aus, wie der Markt sie honoriert – wichtigstes Argument gegen überhöhte Preisvorstellungen von Verkäufern.' },
    { sub: 'beleihungswert', front: 'Definition Beleihungswert (§ 16 PfandBG / BelWertV)?', back: 'Der Wert, der der Immobilie voraussichtlich dauerhaft zukommt – ohne spekulative Elemente, nur nachhaltige Eigenschaften. Er darf den Marktwert nicht überschreiten (typisch 10–20 % darunter).' },
    { sub: 'beleihungswert', front: 'Beleihungsgrenze für Pfandbriefdeckung?', back: '60 % des Beleihungswerts (erstrangige Absicherung). Finanzierungen bis dahin sind am zinsgünstigsten.' },
    { sub: 'beleihungswert', front: 'Formel Beleihungsauslauf (LTV)?', back: 'LTV = Darlehenssumme ÷ Beleihungswert (bzw. Objektwert) × 100. Zinsrelevante Schwellen oft: 60 / 80 / 90 / 100 %.' },
    { sub: 'beleihungswert', front: 'Kleindarlehensgrenze der BelWertV?', back: '600.000 € (seit Novelle 2022) – bis dahin vereinfachte Wertermittlung möglich, z. B. ohne Innenbesichtigung.' },
    { sub: 'beleihungswert', front: 'Die 3 Grundbuch-Abteilungen?', back: 'Abt. I: Eigentumsverhältnisse\nAbt. II: Lasten & Beschränkungen (Wegerechte, Wohnrechte, Vormerkungen)\nAbt. III: Grundpfandrechte (Grundschuld, Hypothek)' },
    { sub: 'beleihungswert', front: 'Unterschied Grundschuld vs. Hypothek?', back: 'Hypothek: streng an die konkrete Forderung gebunden (akzessorisch).\nGrundschuld: unabhängig von der Forderung (fiduziarisch) – heute Standard in der Baufinanzierung.' },
  ],

  /* ---------------- Lückentexte ---------------- */

  cloze: [
    { sub: 'grundlagen', title: 'Der Marktwert und seine Quellen',
      intro: 'Ergänze die Fachbegriffe.',
      text: 'Der Verkehrswert ist in § {{194}} BauGB definiert und gilt immer für den Wertermittlungs{{stichtag}}. Ausgeschlossen bleiben {{ungewöhnliche|persönliche}} oder persönliche Verhältnisse. Die {{Gutachterausschüsse}} führen die Kaufpreissammlung und leiten daraus {{Bodenrichtwerte}} ab, die im Portal {{BORIS}} veröffentlicht werden.' },
    { sub: 'vergleichswert', title: 'Vergleichswert & Bodenwert',
      intro: 'Ergänze die Fachbegriffe.',
      text: 'Das Vergleichswertverfahren ist das markt{{nächste|naheste}} Verfahren und erste Wahl bei Eigentumswohnungen, Einfamilienhäusern und {{Bauland|unbebauten Grundstücken}}. Der Bodenwert ergibt sich aus Grundstücksfläche mal {{Bodenrichtwert}}. Statt konkreter Kaufpreise können auch {{Vergleichsfaktoren}} des Gutachterausschusses genutzt werden. Angebotspreise aus Portalen sind nur {{Wunschpreise|Angebotspreise}} und keine echten Vergleichsdaten.' },
    { sub: 'ertragswert', title: 'Das Ertragswert-Schema',
      intro: 'Vervollständige das Rechenschema.',
      text: 'Vom Jahresrohertrag werden die {{Bewirtschaftungskosten}} abgezogen – das ergibt den {{Reinertrag}}. Davon zieht man die Bodenwertverzinsung ab (Bodenwert × {{Liegenschaftszinssatz|Liegenschaftszins}}) und erhält den Gebäude{{reinertrag}}. Dieser wird mit dem {{Vervielfältiger}} multipliziert, der von Restnutzungsdauer und Zins abhängt. Am Ende wird der {{Bodenwert}} wieder addiert.' },
    { sub: 'sachwert', title: 'Sachwert in Stichworten',
      intro: 'Ergänze die Begriffe.',
      text: 'Ausgangspunkt sind die Normal{{herstellungskosten}} je m² {{Brutto-Grundfläche|BGF}}. Die Alterswertminderung erfolgt {{linear}}: Alter geteilt durch {{Gesamtnutzungsdauer}}. Zum Schluss übersetzt der {{Sachwertfaktor}} den Kostenwert in den Marktwert. Merksatz: {{Kosten}} sind nicht Wert.' },
    { sub: 'beleihungswert', title: 'Bankensicht',
      intro: 'Ergänze die Begriffe.',
      text: 'Der Beleihungswert ist ein vorsichtiger {{Dauerwert|nachhaltiger Wert}} und liegt meist 10–20 % unter dem {{Marktwert|Verkehrswert}}. Für die Pfandbriefdeckung gilt die Beleihungsgrenze von {{60}} % des Beleihungswerts. Das Verhältnis von Darlehen zu Wert heißt Beleihungs{{auslauf}} (englisch: {{LTV|Loan to Value}}). Grundpfandrechte stehen in Abteilung {{III|3|drei}} des Grundbuchs.' },
  ],

  /* ---------------- Rechenaufgaben ---------------- */

  calc: [
    {
      sub: 'vergleichswert', title: 'Bodenwert ermitteln',
      generate() {
        const flaeche = U.randInt(30, 90) * 10;             // 300–900 m²
        const brw = U.randInt(15, 80) * 10;                 // 150–800 €/m²
        const answer = flaeche * brw;
        return {
          text: `Ein unbebautes, erschlossenes Grundstück ist <strong>${U.num(flaeche, 0)} m²</strong> groß. Der Bodenrichtwert der Zone beträgt <strong>${U.num(brw, 0)} €/m²</strong>; Anpassungen sind nicht erforderlich. Ermittle den Bodenwert.`,
          unit: '€', answer, tolerance: 1, decimals: 0,
          steps: [
            `Bodenwert = Fläche × Bodenrichtwert`,
            `${U.num(flaeche, 0)} m² × ${U.num(brw, 0)} €/m² = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'vergleichswert', title: 'Vergleichswert einer Wohnung',
      generate() {
        const qm = U.randInt(55, 110);
        const faktor = U.randInt(24, 48) * 100;             // 2.400–4.800 €/m²
        const zu = U.pick([3, 5, 8]);                       // Zuschlag %
        const ab = U.pick([2, 4, 6]);                       // Abschlag %
        const preisQm = faktor * (1 + zu / 100 - ab / 100);
        const answer = Math.round(preisQm * qm);
        return {
          text: `Eine Eigentumswohnung mit <strong>${qm} m²</strong> Wohnfläche soll eingewertet werden. Der Vergleichsfaktor laut Grundstücksmarktbericht beträgt <strong>${U.num(faktor, 0)} €/m²</strong>. Du setzt einen Zuschlag von <strong>${zu} %</strong> (Balkon, guter Zustand) und einen Abschlag von <strong>${ab} %</strong> (Erdgeschoss) an. Wie hoch ist der Vergleichswert?`,
          unit: '€', answer, tolerance: Math.max(500, answer * 0.005), decimals: 0,
          steps: [
            `Angepasster m²-Preis: ${U.num(faktor, 0)} × (1 + ${zu} % − ${ab} %) = ${U.num(preisQm, 0)} €/m²`,
            `Vergleichswert: ${U.num(preisQm, 0)} €/m² × ${qm} m² = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'ertragswert', title: 'Reinertrag berechnen',
      generate() {
        const roh = U.randInt(24, 90) * 1000;
        const bwk = U.pick([18, 20, 22, 25]);
        const answer = Math.round(roh * (1 - bwk / 100));
        return {
          text: `Ein Mehrfamilienhaus erzielt einen Jahresrohertrag (Nettokaltmiete) von <strong>${U.eur(roh)}</strong>. Die Bewirtschaftungskosten setzt du mit <strong>${bwk} %</strong> des Rohertrags an. Berechne den Reinertrag.`,
          unit: '€', answer, tolerance: 1, decimals: 0,
          steps: [
            `Bewirtschaftungskosten: ${U.eur(roh)} × ${bwk} % = ${U.eur(roh * bwk / 100)}`,
            `Reinertrag: ${U.eur(roh)} − ${U.eur(roh * bwk / 100)} = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'ertragswert', title: 'Ertragswert komplett',
      generate() {
        const roh = U.randInt(36, 84) * 1000;
        const bwk = U.pick([20, 25]);
        const bodenwert = U.randInt(10, 30) * 10000;
        const lz = U.pick([3, 3.5, 4, 4.5, 5]);
        const rnd = U.pick([30, 40, 50]);
        // Vervielfältiger = (q^n - 1) / (q^n * (q-1))
        const q = 1 + lz / 100;
        const V = Math.round(((Math.pow(q, rnd) - 1) / (Math.pow(q, rnd) * (lz / 100))) * 100) / 100;
        const rein = roh * (1 - bwk / 100);
        const bwvz = bodenwert * lz / 100;
        const gebRein = rein - bwvz;
        const gebEw = gebRein * V;
        const answer = Math.round(gebEw + bodenwert);
        return {
          text: `Zinshaus-Bewertung mit folgenden Daten:<br>
            Jahresrohertrag: <strong>${U.eur(roh)}</strong> · Bewirtschaftungskosten: <strong>${bwk} %</strong><br>
            Bodenwert: <strong>${U.eur(bodenwert)}</strong> · Liegenschaftszinssatz: <strong>${U.num(lz, 1)} %</strong><br>
            Vervielfältiger (RND ${rnd} Jahre): <strong>${U.num(V, 2)}</strong><br>
            Ermittle den Ertragswert (ohne weitere Anpassungen).`,
          unit: '€', answer, tolerance: Math.max(2000, answer * 0.01), decimals: 0,
          steps: [
            `Reinertrag: ${U.eur(roh)} × (1 − ${bwk} %) = ${U.eur(rein)}`,
            `Bodenwertverzinsung: ${U.eur(bodenwert)} × ${U.num(lz, 1)} % = ${U.eur(bwvz)}`,
            `Gebäudereinertrag: ${U.eur(rein)} − ${U.eur(bwvz)} = ${U.eur(gebRein)}`,
            `Gebäudeertragswert: ${U.eur(gebRein)} × ${U.num(V, 2)} = ${U.eur(Math.round(gebEw))}`,
            `Ertragswert: ${U.eur(Math.round(gebEw))} + ${U.eur(bodenwert)} = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'ertragswert', title: 'Kaufpreisfaktor & Bruttorendite',
      generate() {
        const miete = U.randInt(18, 60) * 1000;
        const faktor = U.pick([18, 20, 22, 25, 28]);
        const preis = miete * faktor;
        const answer = Math.round((1 / faktor) * 10000) / 100; // Rendite %
        return {
          text: `Ein Anlageobjekt wird für <strong>${U.eur(preis)}</strong> angeboten, die Jahresnettokaltmiete beträgt <strong>${U.eur(miete)}</strong>. Berechne die Bruttomietrendite in Prozent (2 Nachkommastellen).`,
          unit: '%', answer, tolerance: 0.06, decimals: 2,
          steps: [
            `Kaufpreisfaktor: ${U.eur(preis)} ÷ ${U.eur(miete)} = ${faktor}`,
            `Bruttomietrendite = 1 ÷ Faktor = 1 ÷ ${faktor} = <strong>${U.num(answer, 2)} %</strong>`,
            `(Alternativ: Jahresmiete ÷ Kaufpreis × 100)`,
          ],
        };
      },
    },
    {
      sub: 'sachwert', title: 'Sachwert eines Einfamilienhauses',
      generate() {
        const bgf = U.randInt(18, 30) * 10;                 // 180–300 m²
        const nhk = U.randInt(18, 26) * 100;                // 1.800–2.600 €/m²
        const alter = U.pick([20, 30, 40]);
        const gnd = 80;
        const bodenwert = U.randInt(12, 28) * 10000;
        const swf = U.pick([0.9, 1.0, 1.1, 1.2]);
        const herst = bgf * nhk;
        const minderung = alter / gnd;
        const gebSw = herst * (1 - minderung);
        const answer = Math.round((gebSw + bodenwert) * swf);
        return {
          text: `Einfamilienhaus mit folgenden Daten:<br>
            Brutto-Grundfläche: <strong>${bgf} m²</strong> · Normalherstellungskosten (indexiert): <strong>${U.num(nhk, 0)} €/m²</strong><br>
            Gebäudealter: <strong>${alter} Jahre</strong> · Gesamtnutzungsdauer: <strong>${gnd} Jahre</strong> (lineare Alterswertminderung)<br>
            Bodenwert: <strong>${U.eur(bodenwert)}</strong> · Sachwertfaktor: <strong>${U.num(swf, 1)}</strong> · Außenanlagen: vernachlässigen.<br>
            Ermittle den Sachwert.`,
          unit: '€', answer, tolerance: Math.max(2000, answer * 0.01), decimals: 0,
          steps: [
            `Herstellungskosten: ${bgf} m² × ${U.num(nhk, 0)} €/m² = ${U.eur(herst)}`,
            `Alterswertminderung: ${alter} ÷ ${gnd} = ${U.pct(minderung * 100, 1)}`,
            `Gebäudesachwert: ${U.eur(herst)} × ${U.num(1 - minderung, 3)} = ${U.eur(Math.round(gebSw))}`,
            `Vorläufiger Sachwert: ${U.eur(Math.round(gebSw))} + ${U.eur(bodenwert)} = ${U.eur(Math.round(gebSw + bodenwert))}`,
            `Sachwert: × ${U.num(swf, 1)} = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'beleihungswert', title: 'Beleihungswert & Beleihungsgrenze',
      generate() {
        const marktwert = U.randInt(30, 80) * 10000;
        const abschlag = U.pick([10, 12, 15, 20]);
        const belw = marktwert * (1 - abschlag / 100);
        const answer = Math.round(belw * 0.6);
        return {
          text: `Eine Bank setzt bei einem Marktwert von <strong>${U.eur(marktwert)}</strong> einen Sicherheitsabschlag von <strong>${abschlag} %</strong> an. Wie hoch ist die erstrangige Beleihungsgrenze (<strong>60 %</strong> des Beleihungswerts)?`,
          unit: '€', answer, tolerance: Math.max(500, answer * 0.005), decimals: 0,
          steps: [
            `Beleihungswert: ${U.eur(marktwert)} × (1 − ${abschlag} %) = ${U.eur(Math.round(belw))}`,
            `Beleihungsgrenze: ${U.eur(Math.round(belw))} × 60 % = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'beleihungswert', title: 'Beleihungsauslauf (LTV)',
      generate() {
        const wert = U.randInt(35, 75) * 10000;
        const ek = U.randInt(5, 25) * 10000;
        const darlehen = wert - ek;
        const answer = Math.round((darlehen / wert) * 1000) / 10;
        return {
          text: `Kaufpreis (= angesetzter Objektwert): <strong>${U.eur(wert)}</strong>. Der Käufer zahlt die Nebenkosten aus Eigenmitteln und bringt zusätzlich <strong>${U.eur(ek)}</strong> Eigenkapital in den Kaufpreis ein, der Rest wird finanziert. Berechne den Beleihungsauslauf in Prozent (1 Nachkommastelle).`,
          unit: '%', answer, tolerance: 0.2, decimals: 1,
          steps: [
            `Darlehen: ${U.eur(wert)} − ${U.eur(ek)} = ${U.eur(darlehen)}`,
            `Beleihungsauslauf: ${U.eur(darlehen)} ÷ ${U.eur(wert)} × 100 = <strong>${U.num(answer, 1)} %</strong>`,
          ],
        };
      },
    },
  ],

  /* ---------------- Fallstudien ---------------- */

  cases: [
    {
      id: 'erbschaft-efh',
      title: 'Die geerbte Doppelhaushälfte',
      teaser: 'Eine Erbin will wissen, was das Elternhaus wert ist – und hat sehr konkrete Vorstellungen.',
      intro: `Frau Sommer (54) hat die Doppelhaushälfte ihrer Eltern geerbt: Baujahr 1978, 130 m² Wohnfläche,
        520 m² Grundstück, letzte Modernisierung 2005 (Fenster, Heizung 1998!). Sie sagt dir am Telefon:
        „Der Nachbar hat vor zwei Jahren 550.000 € bekommen, und unseres ist schöner. Unter 600.000 € gebe ich es nicht her."
        Du fährst zum Einwertungstermin.`,
      steps: [
        {
          situation: 'Du stehst mit Frau Sommer im Wohnzimmer. Sie erwartet, dass du ihre 600.000 € bestätigst – dann bekommst du den Auftrag, deutet sie an.',
          question: 'Wie gehst du mit der Preisvorstellung um?',
          options: [
            { quality: 'best', text: 'Ich nehme zunächst systematisch alle Objektdaten auf (Zustand, Modernisierungen, Grundbuch, Energieausweis) und kündige eine begründete Einwertung mit Marktdaten binnen weniger Tage an.',
              feedback: 'Genau richtig. Erst Fakten, dann Preis. Wer im Termin vorschnell eine Zahl nennt, macht sie zum Anker – und eine fundierte Einwertung mit Bodenrichtwert, Vergleichspreisen und Zustandsanalyse ist deine stärkste Kompetenz-Demonstration.' },
            { quality: 'bad', text: 'Ich bestätige die 600.000 €, um den Auftrag zu sichern – den Preis kann man später immer noch senken.',
              feedback: 'Das ist die klassische „Einkaufslüge" unseriöser Makler. Überteuerte Objekte „verbrennen" am Markt: lange Vermarktungsdauer, dann Preissenkungen in Serie – am Ende oft ein schlechterer Erlös als bei realistischem Start. Und dein Ruf leidet dauerhaft.' },
            { quality: 'okay', text: 'Ich sage ihr sofort, dass 600.000 € unrealistisch sind, weil die Heizung von 1998 ist.',
              feedback: 'Fachlich vielleicht richtig, kommunikativ verschenkt: Ohne Datengrundlage wirkt der Widerspruch wie eine Behauptung und die Kundin macht zu. Erst Daten sammeln, dann begründet argumentieren.' },
          ],
        },
        {
          situation: 'Bei der Datenaufnahme stellst du fest: Heizung von 1998 (Gaskessel), Energieausweis fehlt, im Grundbuch Abt. II ist ein Wegerecht zugunsten des Hinterliegergrundstücks eingetragen.',
          question: 'Welche dieser Erkenntnisse ist für die Einwertung am wichtigsten?',
          options: [
            { quality: 'best', text: 'Alle drei fließen ein: Die alte Heizung bedeutet absehbare Investitionen (GEG!), das Wegerecht mindert den Wert, und ohne Energieausweis darf ich nicht einmal inserieren.',
              feedback: 'Perfekt – ein Profi denkt in allen drei Dimensionen: wertmindernde Rechte (Abt. II), Sanierungskosten aus Käufersicht und rechtliche Vermarktungspflichten (Energieausweis ist bei Inseraten Pflicht, sonst droht Bußgeld).' },
            { quality: 'okay', text: 'Vor allem die Heizung – der Rest ist Formsache.',
              feedback: 'Die Heizung ist wichtig (Käufer kalkulieren den Tausch), aber ein Wegerecht kann je nach Verlauf 5–15 % Wert kosten und der fehlende Energieausweis ist keine Formsache, sondern Bußgeldrisiko.' },
            { quality: 'bad', text: 'Keine davon – entscheidend ist nur, was der Nachbar vor zwei Jahren bekommen hat.',
              feedback: 'Der Nachbarpreis ist ein einzelner, zwei Jahre alter Datenpunkt aus einem möglicherweise ganz anderen Marktumfeld. Objektindividuelle Merkmale wie Rechte in Abt. II und Sanierungsstau sind wertentscheidend.' },
          ],
        },
        {
          situation: 'Deine Analyse: Bodenwert ca. 220.000 €, Vergleichspreise für vergleichbare DHH in dem Zustand 440.000–480.000 €. Der Nachbar hatte 2 Jahre früher (besserer Markt) kernsaniert verkauft.',
          question: 'Wie präsentierst du Frau Sommer das Ergebnis?',
          options: [
            { quality: 'best', text: 'Ich zeige ihr die Herleitung Schritt für Schritt: Bodenrichtwert, Vergleichsobjekte, Zustandsunterschiede zum Nachbarhaus – und empfehle einen Angebotspreis von ca. 475.000 € mit begründetem Verhandlungsspielraum.',
              feedback: 'Stark. Transparente Herleitung nimmt die Emotion aus dem Gespräch: Die Kundin sieht selbst, dass das Nachbarhaus kernsaniert war und der Markt sich gedreht hat. Ein realistischer Startpreis erzeugt Nachfrage – und Nachfrage erzeugt gute Preise.' },
            { quality: 'okay', text: 'Ich schlage 520.000 € als Kompromiss zwischen ihrem Wunsch und meiner Analyse vor.',
              feedback: 'Verständlicher Impuls, aber ein „politischer" Preis ist keine Bewertung. 8–10 % über Markt kann als Verhandlungsstrategie vertretbar sein – dann aber bewusst und mit klarem Preissenkungs-Fahrplan, nicht als fauler Kompromiss.' },
            { quality: 'bad', text: 'Ich schicke ihr die Zahl per E-Mail und warte ab, ob sie sich meldet.',
              feedback: 'Eine Einwertung unter Erwartung des Kunden per E-Mail zu „werfen" ist verlorenes Mandat: Ohne persönliches Gespräch kann sie die Herleitung nicht nachvollziehen und sucht sich den Makler, der ihr 600.000 € verspricht.' },
          ],
        },
        {
          situation: 'Frau Sommer überlegt und fragt dann: „Und wenn wir es einfach für 600.000 € probieren? Runtergehen können wir immer noch."',
          question: 'Was antwortest du fachlich fundiert?',
          options: [
            { quality: 'best', text: 'Ich erkläre den Ankereffekt umgekehrt: Die ersten 2–4 Wochen bringen die meisten Interessenten. Startet man 25 % zu hoch, verpuffen genau diese Wochen, das Objekt „verbrennt" und spätere Preissenkungen signalisieren Verhandlungsschwäche.',
              feedback: 'Exakt die Profi-Antwort. Statistisch erzielen überteuert gestartete Objekte nach mehreren Preissenkungen oft weniger als realistisch bepreiste. Wer das mit Daten aus dem eigenen Markt belegen kann, gewinnt solche Diskussionen.' },
            { quality: 'okay', text: 'Ich stimme zu, vereinbare aber schriftlich feste Preissenkungstermine nach 4 und 8 Wochen.',
              feedback: 'Immerhin mit Systematik – das ist die zweitbeste Lösung, wenn die Kundin sonst abspringt. Das Risiko des „Verbrennens" in den wichtigen ersten Wochen bleibt aber bestehen.' },
            { quality: 'bad', text: 'Ich lehne den Auftrag ab – mit unrealistischen Kunden arbeite ich nicht.',
              feedback: 'Zu schnell aufgegeben. Preisvorstellungen sind verhandelbar, wenn man sauber argumentiert. Wer jeden anspruchsvollen Kunden ablehnt, hat bald keine Aufträge – Einwände sind Teil des Berufs.' },
          ],
        },
      ],
    },
    {
      id: 'zinshaus-check',
      title: 'Der Zinshaus-Deal des Investors',
      teaser: 'Ein Kapitalanleger will ein Mehrfamilienhaus kaufen und bittet dich um eine Einschätzung.',
      intro: `Herr Kaya, erfahrener Handwerksunternehmer, will erstmals in Immobilien investieren. Ihm wird ein
        Mehrfamilienhaus angeboten: 8 Wohnungen, Baujahr 1962, teilmodernisiert, Jahresnettokaltmiete 61.200 €,
        Angebotspreis 1.750.000 €. Der Verkäufermakler schwärmt: „Topobjekt, da können Sie nichts falsch machen."
        Herr Kaya fragt dich als seinen Berater: „Ist das ein guter Deal?"`,
      steps: [
        {
          situation: 'Du willst dir schnell einen ersten Eindruck verschaffen, ob der Preis marktgerecht ist.',
          question: 'Was rechnest du als Erstes?',
          options: [
            { quality: 'best', text: 'Kaufpreisfaktor: 1.750.000 ÷ 61.200 ≈ 28,6 – das vergleiche ich mit den üblichen Faktoren für Baujahr/Lage aus dem Grundstücksmarktbericht.',
              feedback: 'Genau: Der Faktor ist der schnellste Marktcheck. 28,6-fach für ein teilmodernisiertes 60er-Jahre-Objekt ist in den meisten Regionen sportlich bis überteuert – gute Basis für die tiefere Analyse.' },
            { quality: 'okay', text: 'Ich frage zuerst den Verkäufermakler nach seiner Ertragswertberechnung.',
              feedback: 'Kann man tun, aber der Verkäufermakler vertritt die Verkäuferseite – seine Rechnung ist tendenziell optimistisch (niedriger LZ, keine Instandhaltungsrückstände). Eigene Rechnung zuerst.' },
            { quality: 'bad', text: 'Ich sage ihm: Bei 8 Wohnungen für unter 2 Mio. kann man nichts falsch machen – zuschlagen.',
              feedback: 'Bauchgefühl ist keine Analyse. Ohne Faktor, Mietniveau-Check und Zustandsbewertung ist jede Kaufempfehlung fahrlässig – bei einem 1,75-Mio.-Investment erst recht.' },
          ],
        },
        {
          situation: 'Du prüfst die Mieten: Durchschnittlich 7,50 €/m² – die ortsübliche Vergleichsmiete für diese Lage liegt bei 9,50 €/m². Zwei Mietverhältnisse bestehen seit über 25 Jahren.',
          question: 'Wie bewertest du diese Erkenntnis?',
          options: [
            { quality: 'best', text: 'Underrent = Potenzial, aber realistisch: Mieterhöhungen sind durch Kappungsgrenze und Mietspiegel gedeckelt und brauchen Jahre. Ich rechne das Potenzial ein, aber bezahle es dem Verkäufer nicht voll.',
              feedback: 'Profi-Denke: Mietsteigerungspotenzial ist real, aber zeitlich gestreckt (Kappungsgrenze: max. 20 %, in vielen Städten 15 % in 3 Jahren) und mit Aufwand verbunden. Wer das Potenzial zum Vollpreis mitbezahlt, schenkt dem Verkäufer die eigene Arbeit.' },
            { quality: 'okay', text: 'Super – dann kann Herr Kaya die Mieten nach dem Kauf sofort um 27 % anheben.',
              feedback: 'Vorsicht: Mieterhöhungen bis zur Vergleichsmiete sind durch die Kappungsgrenze (20 % bzw. 15 % in 3 Jahren) begrenzt, brauchen Begründung und Zustimmungsverfahren. „Sofort" geht da nichts.' },
            { quality: 'bad', text: 'Niedrige Mieten sind ein Warnsignal – Finger weg vom Objekt.',
              feedback: 'Umgekehrt: Underrent ist bei Bestandsobjekten normal und für Investoren gerade attraktiv. Entscheidend ist, was man dafür bezahlt.' },
          ],
        },
        {
          situation: 'Die Objektbegehung zeigt: Dach okay, aber Stränge (Wasser/Abwasser) original 1962, Elektrik teilweise alt, Heizkessel 19 Jahre. Du schätzt mittelfristigen Investitionsbedarf von 250.000–350.000 €.',
          question: 'Wie fließt das in deine Kaufpreisempfehlung ein?',
          options: [
            { quality: 'best', text: 'Investitionsbedarf mindert den vertretbaren Kaufpreis nahezu 1:1 – ich empfehle, mit der Instandhaltungsrechnung in die Preisverhandlung zu gehen und deutlich unter Angebot zu bieten.',
              feedback: 'Richtig: Käufer eines Zinshauses kalkulieren CapEx (Investitionsstau) direkt gegen den Preis. Eine dokumentierte Instandhaltungsanalyse ist zugleich dein stärkstes Verhandlungsinstrument – sachlich, belegbar, schwer wegzudiskutieren.' },
            { quality: 'okay', text: 'Ich erwähne den Investitionsbedarf im Gespräch, halte aber am Faktor-Argument fest – Technik lässt sich immer reparieren.',
              feedback: 'Halbherzig: Natürlich lässt sich alles reparieren, aber 250.000–350.000 € sind rund 20 % des Kaufpreises. Wer das nur „erwähnt", verhandelt Geld seines Kunden weg.' },
            { quality: 'bad', text: 'Solche Details soll der Gutachter nach dem Notartermin klären.',
              feedback: 'Nach dem Notartermin ist es zu spät – gekauft wie gesehen! Technische Risiken müssen vor Vertragsabschluss bewertet und eingepreist werden.' },
          ],
        },
        {
          situation: 'Herr Kaya fragt abschließend: „Der Verkäufermakler sagt, ein Gutachten brauche ich nicht, das koste nur Geld. Was meinst du?"',
          question: 'Deine Empfehlung?',
          options: [
            { quality: 'best', text: 'Bei einem 1,75-Mio.-Investment mit erkennbarem Investitionsstau empfehle ich eine eigene technische und wirtschaftliche Prüfung (Kaufberatung/Kurzgutachten plus Handwerker-Begehung) – die Kosten sind im Verhältnis zum Risiko minimal.',
              feedback: 'Genau. Due Diligence gehört zu jedem größeren Deal: Für wenige tausend Euro Prüfkosten werden sechsstellige Risiken sichtbar – und jedes Ergebnis stärkt die Verhandlungsposition. Dass der VERKÄUFERmakler abrät, spricht für sich.' },
            { quality: 'okay', text: 'Ein Gutachten ist nice-to-have – wichtiger ist, schnell zu sein, bevor ein anderer kauft.',
              feedback: 'Tempo kann wichtig sein, aber „schnell und ungeprüft" ist bei einem Objekt mit sichtbarem Sanierungsstau die teuerste Variante. Prüfung lässt sich auch in 1–2 Wochen straff organisieren.' },
            { quality: 'bad', text: 'Der Verkäufermakler hat recht – Gutachten sind Geldverschwendung, das Objekt wurde ja schon von der Bank geprüft.',
              feedback: 'Die Bank prüft für ihre Sicherheit (Beleihungswert), nicht für die Rendite und Risiken des Käufers. Ihre Prüfung ersetzt keine Due Diligence im Käuferinteresse.' },
          ],
        },
      ],
    },
  ],
});
