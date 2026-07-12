/* ============================================================
   Themenbereich: Projektentwicklung
   ============================================================ */

LERN.registerArea({
  id: 'projekt',
  title: 'Projektentwicklung',
  icon: '🏗️',
  description: 'Vom Grundstück zum fertigen Projekt: Baurecht und Genehmigung, Projektphasen, Kalkulation mit Residualwertverfahren, Bauträgervertrieb und Revitalisierung.',

  subtopics: [
    {
      id: 'baurecht',
      title: 'Öffentliches Baurecht & Baugenehmigung',
      teaser: 'BauGB, Bebauungsplan, §§ 30/34/35, GRZ & GFZ, Bauantrag',
      lesson: `
        <p>Bevor irgendjemand baut, entscheidet das <strong>öffentliche Baurecht</strong>, <em>ob</em> und <em>was</em> gebaut werden darf. Für Projektentwickler ist Baurecht = Geld: Aus Ackerland wird durch einen Bebauungsplan Bauland – mit dem Zehnfachen an Wert.</p>

        <h3>Bauplanungsrecht vs. Bauordnungsrecht</h3>
        <ul>
          <li><strong>Bauplanungsrecht (BauGB, BauNVO – Bundesrecht):</strong> Wo und was darf gebaut werden? (Nutzung, Dichte)</li>
          <li><strong>Bauordnungsrecht (Landesbauordnungen):</strong> Wie muss gebaut werden? (Abstandsflächen, Brandschutz, Stellplätze, Verfahren)</li>
        </ul>

        <h3>Die zwei Planungsebenen der Gemeinde</h3>
        <ul>
          <li><strong>Flächennutzungsplan (FNP):</strong> vorbereitend, ganze Gemeinde, nicht parzellenscharf – bindet Behörden, nicht Bürger.</li>
          <li><strong>Bebauungsplan (B-Plan):</strong> verbindlich, als <strong>Satzung</strong> beschlossen, parzellenscharf – bestimmt dein Baurecht.</li>
        </ul>

        <h3>Die drei Zulässigkeits-Welten – das musst du im Schlaf können</h3>
        <div class="table-wrap"><table>
          <tr><th>Situation</th><th>Rechtsgrundlage</th><th>Was gilt?</th></tr>
          <tr><td>Qualifizierter B-Plan vorhanden</td><td><strong>§ 30 BauGB</strong></td><td>Zulässig, was der B-Plan festsetzt (Art & Maß der Nutzung, überbaubare Fläche, Erschließung gesichert)</td></tr>
          <tr><td>Unbeplanter <strong>Innenbereich</strong> (im Bebauungszusammenhang)</td><td><strong>§ 34 BauGB</strong></td><td>Vorhaben muss sich in die <strong>Eigenart der näheren Umgebung einfügen</strong> (Art, Maß, Bauweise, Grundstücksfläche)</td></tr>
          <tr><td><strong>Außenbereich</strong></td><td><strong>§ 35 BauGB</strong></td><td>Grundsätzlich baufrei zu halten – nur <strong>privilegierte Vorhaben</strong> (Landwirtschaft, Windenergie u. a.) zulässig</td></tr>
        </table></div>

        <h3>Was setzt ein B-Plan fest? (BauNVO)</h3>
        <ul>
          <li><strong>Art der Nutzung:</strong> Baugebiete wie WR (reines Wohngebiet), WA (allgemeines Wohngebiet), MI (Mischgebiet), MU (urbanes Gebiet), GE (Gewerbe), GI (Industrie), SO (Sondergebiet).</li>
          <li><strong>Maß der Nutzung:</strong>
            <div class="box box-formula">
              GRZ = überbaute Grundfläche ÷ Grundstücksfläche &nbsp;·&nbsp; GFZ = Geschossfläche ÷ Grundstücksfläche
            </div>
            Beispiel: 1.000 m² Grundstück, GRZ 0,4, GFZ 1,2 → max. 400 m² überbauen, max. 1.200 m² Geschossfläche.</li>
          <li><strong>Bauweise</strong> (offen/geschlossen), <strong>Baugrenzen/Baulinien</strong> (Baufenster), Zahl der Vollgeschosse, Stellplätze u. v. m.</li>
        </ul>

        <h3>Der Weg zur Baugenehmigung</h3>
        <ol>
          <li><strong>Bauvoranfrage → Bauvorbescheid:</strong> klärt einzelne Fragen (z. B. „Ist Wohnbebauung zulässig?") <em>verbindlich</em> vor teurer Planung – das wichtigste Absicherungsinstrument beim Grundstückskauf!</li>
          <li><strong>Bauantrag</strong> mit Bauvorlagen (durch bauvorlageberechtigten Entwurfsverfasser).</li>
          <li><strong>Baugenehmigung:</strong> gebundene Entscheidung – besteht Baurecht, <em>muss</em> sie erteilt werden (kein Ermessen). Je nach Land gibt es vereinfachte Verfahren und Genehmigungsfreistellung im B-Plan-Gebiet.</li>
        </ol>

        <div class="box box-warn">
          <span class="box-title">⚠️ Entwickler-Risiken im Baurecht</span>
          Veränderungssperre der Gemeinde, Erschließungskosten, Stellplatzpflichten, Baulasten (in vielen Ländern im Baulastenverzeichnis – nicht im Grundbuch!), Altlastenverdacht, Denkmalschutz, Naturschutz/Artenschutz. Profis prüfen das alles <strong>vor</strong> dem Grundstückskauf – oder kaufen mit Baurechts-Bedingung.
        </div>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Städtebaulicher Vertrag & Co.: Viele Kommunen vergeben neues Baurecht nur noch mit Auflagen (geförderter Wohnanteil, Infrastrukturkosten, „Sozialgerechte Bodennutzung"). Diese Kosten gehören in jede Kalkulation – wer sie vergisst, rechnet sein Projekt schön.
        </div>
      `,
    },
    {
      id: 'phasen',
      title: 'Projektphasen & Planung (HOAI)',
      teaser: 'Von der Idee zur Übergabe: Machbarkeit, Leistungsphasen 1–9, Beteiligte',
      lesson: `
        <p>Projektentwicklung heißt, die drei Faktoren <strong>Standort, Projektidee und Kapital</strong> so zu kombinieren, dass ein wirtschaftlich tragfähiges, dauerhaft nutzbares Objekt entsteht. Fehlt einer der drei, gibt es kein Projekt.</p>

        <h3>Die Phasen eines Projekts</h3>
        <ol>
          <li><strong>Projektinitiierung:</strong> Idee, Standortsuche bzw. Standort sucht Idee, Grundstückssicherung (Option, Kauf mit Bedingungen, Erbbaurecht).</li>
          <li><strong>Machbarkeitsstudie (Feasibility):</strong> Markt- & Standortanalyse, Baurechtsprüfung, Nutzungskonzept, Grobkalkulation, Risikoanalyse. Hier fällt die Go/No-Go-Entscheidung.</li>
          <li><strong>Planung & Genehmigung:</strong> Architekten-/Fachplanung, Bauantrag, ggf. B-Plan-Verfahren.</li>
          <li><strong>Realisierung:</strong> Vergabe, Bau, Projektsteuerung (Kosten/Termine/Qualität), Bemusterung.</li>
          <li><strong>Vermarktung:</strong> parallel! Verkauf vom Plan (Bauträger) oder Vermietung an Erstnutzer, dann ggf. Globalverkauf an Investoren (Forward Deal).</li>
          <li><strong>Abschluss & Nutzung:</strong> Abnahme, Übergabe, Mängelmanagement, Gewährleistung (<strong>5 Jahre</strong> bei Bauwerken, § 634a BGB).</li>
        </ol>

        <h3>Die 9 Leistungsphasen der HOAI</h3>
        <div class="table-wrap"><table>
          <tr><th>LP</th><th>Bezeichnung</th><th>Merkhilfe</th></tr>
          <tr><td>1</td><td>Grundlagenermittlung</td><td>Was ist die Aufgabe?</td></tr>
          <tr><td>2</td><td>Vorplanung</td><td>Erste Konzepte & Kostenschätzung</td></tr>
          <tr><td>3</td><td>Entwurfsplanung</td><td>Der durchgearbeitete Entwurf & Kostenberechnung</td></tr>
          <tr><td>4</td><td>Genehmigungsplanung</td><td>Bauantrag einreichen</td></tr>
          <tr><td>5</td><td>Ausführungsplanung</td><td>Werkpläne – so wird gebaut</td></tr>
          <tr><td>6</td><td>Vorbereitung der Vergabe</td><td>Leistungsverzeichnisse</td></tr>
          <tr><td>7</td><td>Mitwirkung bei der Vergabe</td><td>Angebote prüfen, Vergabe</td></tr>
          <tr><td>8</td><td>Objektüberwachung</td><td>Bauleitung – die aufwendigste Phase</td></tr>
          <tr><td>9</td><td>Objektbetreuung</td><td>Mängelansprüche nach Abnahme</td></tr>
        </table></div>

        <h3>Wer macht was? Die Beteiligten</h3>
        <ul>
          <li><strong>Projektentwickler:</strong> Initiator, trägt das unternehmerische Risiko.</li>
          <li><strong>Bauträger:</strong> baut auf <em>eigenem</em> Grundstück und verkauft an Erwerber (MaBV!).</li>
          <li><strong>Generalunternehmer (GU):</strong> übernimmt die komplette Bauausführung, oft mit Pauschalpreis; <strong>Generalübernehmer (GÜ)</strong> zusätzlich die Planung, baut aber nicht selbst.</li>
          <li><strong>Projektsteuerer:</strong> Management von Kosten, Terminen, Qualitäten im Auftrag des Bauherrn.</li>
          <li>Architekt, Fachplaner (Statik, Haustechnik), Bodengutachter, Vermesser, Behörden, Banken.</li>
        </ul>

        <h3>Projektrisiken systematisch denken</h3>
        <ul>
          <li><strong>Genehmigungsrisiko</strong> (kein/anderes Baurecht) → Bauvorbescheid, aufschiebende Bedingungen im Kauf</li>
          <li><strong>Baugrundrisiko</strong> (Altlasten, Grundwasser, Tragfähigkeit) → Baugrundgutachten vor Ankauf</li>
          <li><strong>Kosten- & Terminrisiko</strong> → Puffer, GU-Pauschalverträge, Projektsteuerung</li>
          <li><strong>Vermarktungsrisiko</strong> (Zinsen! Nachfrage!) → Vorverkaufs-/Vorvermietungsquoten, die auch Banken fordern</li>
          <li><strong>Finanzierungsrisiko</strong> → Zinsbindung, Eigenkapitalpuffer, realistische Exit-Annahmen</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Banken finanzieren Projektentwicklungen meist erst ab nachgewiesener <strong>Vorverkaufsquote</strong> (z. B. 30–50 %) oder Vorvermietung. Vermarktung ist daher keine Endphase, sondern läuft ab Tag 1 parallel – hier kommen Makler ins Spiel, die den Vertrieb vom Plan beherrschen.
        </div>
      `,
    },
    {
      id: 'kalkulation',
      title: 'Kalkulation & Budgetierung',
      teaser: 'DIN 276, Residualwertverfahren, Developer-Rechnung, Trading Profit',
      lesson: `
        <p>Die wichtigste Frage der Projektentwicklung: <strong>Was darf das Grundstück kosten?</strong> Die Antwort liefert das Residualwertverfahren – rückwärts gerechnet vom Marktpreis des fertigen Produkts.</p>

        <h3>Kostenstruktur nach DIN 276 (Kostengruppen)</h3>
        <div class="table-wrap"><table>
          <tr><th>KG</th><th>Inhalt</th></tr>
          <tr><td>100</td><td>Grundstück (Kaufpreis + Nebenkosten)</td></tr>
          <tr><td>200</td><td>Vorbereitende Maßnahmen (Herrichten, Erschließen, Abbruch)</td></tr>
          <tr><td>300</td><td>Bauwerk – Baukonstruktion</td></tr>
          <tr><td>400</td><td>Bauwerk – Technische Anlagen</td></tr>
          <tr><td>500</td><td>Außenanlagen und Freiflächen</td></tr>
          <tr><td>600</td><td>Ausstattung und Kunstwerke</td></tr>
          <tr><td>700</td><td>Baunebenkosten (Planung, Gutachten, Gebühren – oft 15–20 % der Baukosten!)</td></tr>
          <tr><td>800</td><td>Finanzierung (Zwischenfinanzierungszinsen)</td></tr>
        </table></div>

        <h3>Das Residualwertverfahren (Bauträger-/Developer-Rechnung)</h3>
        <figure class="diagram">
        <svg viewBox="0 0 640 240" role="img" aria-label="Residualwertverfahren Schema">
          <rect x="140" y="8" width="360" height="36" rx="9" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="320" y="31" text-anchor="middle" font-size="13" fill="#1c2333">Erwarteter Verkaufserlös (z. B. Wohnfläche × €/m²)</text>
          <text x="320" y="64" text-anchor="middle" font-size="13" fill="#d64550">− Baukosten (KG 200–600) und Baunebenkosten (KG 700)</text>
          <text x="320" y="90" text-anchor="middle" font-size="13" fill="#d64550">− Vermarktung, Zwischenfinanzierung (KG 800)</text>
          <text x="320" y="116" text-anchor="middle" font-size="13" fill="#d64550">− Entwicklergewinn (Trading Profit, z. B. 15 % vom Erlös)</text>
          <rect x="140" y="132" width="360" height="36" rx="9" fill="#fff4dd" stroke="#ff9f1c"/>
          <text x="320" y="155" text-anchor="middle" font-size="13" fill="#1c2333">= Residuum (tragfähige Grundstückskosten inkl. Nebenkosten)</text>
          <text x="320" y="186" text-anchor="middle" font-size="13" fill="#d64550">− Grunderwerbsnebenkosten des Ankaufs</text>
          <rect x="140" y="198" width="360" height="36" rx="9" fill="#1f5eff"/>
          <text x="320" y="221" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">= maximal zahlbarer Grundstückspreis</text>
        </svg>
        <figcaption>Rückwärtsrechnung: Der Markt bestimmt den Erlös – das Grundstück bekommt, was übrig bleibt.</figcaption>
        </figure>

        <div class="box box-example">
          <span class="box-title">💡 Durchgerechnetes Beispiel</span>
          Geplant: 1.200 m² Wohnfläche, Verkaufspreis 5.500 €/m² → Erlös <strong>6,6 Mio. €</strong>.<br>
          Bau- & Baunebenkosten: 3.600 €/m² × 1.500 m² BGF = <strong>5,4 Mio. €</strong>? Vorsicht – Baukosten immer auf BGF beziehen: hier 1.500 m² BGF × 2.800 €/m² = <strong>4,2 Mio. €</strong>.<br>
          Vermarktung/Finanzierung: <strong>0,5 Mio. €</strong> · Gewinnziel 15 % vom Erlös: <strong>0,99 Mio. €</strong>.<br>
          Residuum: 6,6 − 4,2 − 0,5 − 0,99 ≈ <strong>0,91 Mio. €</strong> für das Grundstück (inkl. Ankaufsnebenkosten).
        </div>

        <h3>Kennzahlen des Entwicklers</h3>
        <ul>
          <li><strong>Trading Profit:</strong> Gewinn = Verkaufserlös − Gesamtinvestitionskosten (üblich angestrebt: 10–20 % der Kosten oder des Erlöses – Konvention klären!).</li>
          <li><strong>Grundstücksanteil:</strong> In normalen Lagen ~15–25 % der Gesamtkosten; in Toplagen deutlich mehr.</li>
          <li><strong>Kostenkennwerte:</strong> Baukosten je m² BGF (Wohnen je nach Standard und Region grob 2.200–3.500 €/m² BGF, Stand Mitte der 2020er – lokal prüfen!), Flächeneffizienz = Wohnfläche ÷ BGF (gut: 0,75–0,8).</li>
          <li><strong>Sensitivität:</strong> Was passiert bei −10 % Verkaufspreis oder +10 % Baukosten? Ein Projekt, das nur im Best Case funktioniert, ist keins.</li>
        </ul>

        <div class="box box-warn">
          <span class="box-title">⚠️ Die klassischen Kalkulationsfehler</span>
          Baunebenkosten (KG 700) zu niedrig (real 15–20 % der Baukosten), Zwischenzinsen und Vermarktungskosten vergessen, Wohnfläche mit BGF verwechselt, keine Reserven für Unvorhergesehenes (5–10 %), Verkaufspreise aus dem Boom fortgeschrieben.
        </div>
      `,
    },
    {
      id: 'vermarktung-revit',
      title: 'Bauträgervertrieb, MaBV & Revitalisierung',
      teaser: 'Verkauf vom Plan, MaBV-Ratenplan, Abnahme, Redevelopment im Bestand',
      lesson: `
        <p>Neubau wird meist <strong>„vom Plan" verkauft</strong> – der Käufer zahlt für etwas, das noch nicht existiert. Genau dafür gibt es das strenge Schutzregime der <strong>Makler- und Bauträgerverordnung (MaBV)</strong>.</p>

        <h3>Der Bauträgervertrag</h3>
        <ul>
          <li>Notariell beurkundeter Vertrag über Grundstück(santeil) <em>plus</em> Errichtungspflicht – rechtlich Kauf- + Werkvertrag (§ 650u BGB).</li>
          <li>Pflichten: vollständige <strong>Baubeschreibung</strong>, verbindliche <strong>Fertigstellungstermine</strong>, Widerrufs-/Verbraucherschutzregeln.</li>
          <li><strong>Abnahme</strong> ist der zentrale Moment: Gefahrübergang, Beweislastumkehr, Beginn der <strong>5-jährigen Gewährleistung</strong>. Gemeinschaftseigentum und Sondereigentum werden getrennt abgenommen!</li>
        </ul>

        <h3>MaBV § 3: Zahlung nur nach Baufortschritt</h3>
        <div class="box box-info">
          <span class="box-title">Das Ratenprinzip</span>
          Der Bauträger darf Käufergelder nur nach <strong>Baufortschritt</strong> entgegennehmen – in höchstens <strong>7 Raten</strong> aus einem gesetzlichen Katalog von <strong>13 Teilbeträgen</strong>, u. a.:<br>
          30 % nach Beginn der Erdarbeiten (inkl. Grundstücksanteil) · 28 % nach Rohbaufertigstellung · 5,6 % Dach · 2,1 % Heizung · … · 3,5 % nach Bezugsfertigkeit · 2,1 % erst nach <strong>vollständiger Fertigstellung</strong>.
          Voraussetzungen: wirksamer Vertrag, Auflassungsvormerkung, Baugenehmigung, Freistellung von Grundpfandrechten.
          Alternative: Bankbürgschaft nach <strong>§ 7 MaBV</strong>.
        </div>
        <p>Für dich als Vertriebsmakler heißt das: Du musst Käufern den Ratenplan erklären können – er ist ihr wichtigster Schutz vor Bauträgerinsolvenz (zusammen mit der Vormerkung).</p>

        <h3>Vertrieb vom Plan – Besonderheiten</h3>
        <ul>
          <li>Verkauft wird ein Versprechen: <strong>Visualisierungen, Baubeschreibung, Grundrisse</strong> ersetzen die Besichtigung. Alle Angaben müssen belastbar sein – die Baubeschreibung wird Vertragsinhalt.</li>
          <li><strong>Sonderwünsche</strong> (Ausstattung, Grundrissänderungen) sind Marge und Risiko zugleich – sauber dokumentieren und bepreisen.</li>
          <li>Preisstaffelung über den Bauverlauf: Frühkäufer erhalten oft günstigere Preise (tragen mehr „Papier-Risiko").</li>
          <li>Käufer brauchen Aufklärung über <strong>Bauzeitrisiken</strong> und Zinsbindungen (Bereitstellungszinsen!).</li>
        </ul>

        <h3>Revitalisierung & Redevelopment</h3>
        <p>Bestand neu denken: <strong>Umnutzung</strong> (Büro → Wohnen), <strong>Aufstockung</strong>, Kernsanierung, energetische Transformation (ESG!). Vorteile: Standort existiert bereits, graue Energie bleibt erhalten, oft politisch gewollt. Herausforderungen:</p>
        <ul>
          <li><strong>Baurecht:</strong> Nutzungsänderung ist genehmigungspflichtig; Stellplätze, Lärmschutz, Brandschutz im Bestand.</li>
          <li><strong>Technik:</strong> Gebäuderaster (Bürotiefe!), Leitungen, Statik, Schadstoffe (Asbest!).</li>
          <li><strong>Wirtschaftlichkeit:</strong> Bestandskauf + Umbau vs. Abriss + Neubau immer parallel rechnen.</li>
          <li><strong>Denkmalschutz:</strong> Auflagen, aber attraktive Steuer-AfA (§§ 7i/7h EStG: 8 Jahre je 9 % + 4 Jahre je 7 % der begünstigten Sanierungskosten für Vermieter) – starkes Vertriebsargument bei Kapitalanlegern.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Der Neubauvertrieb lebt von <strong>Vertrauen in den Bauträger</strong>: Referenzprojekte, Bonität, Bautenstandsberichte. Ein Makler, der nur „schöne Bilder" verkauft und bei Bauverzug abtaucht, ist schnell verbrannt. Wer Käufer durch Bemusterung, Baustellenbegehungen und Abnahme begleitet, baut sich einen Empfehlungsmotor.
        </div>
      `,
    },
  ],

  quiz: [
    // baurecht
    { sub: 'baurecht', q: 'Was regelt das Bauplanungsrecht, was das Bauordnungsrecht?',
      options: ['Planungsrecht: ob/was gebaut werden darf (BauGB/BauNVO); Ordnungsrecht: wie gebaut wird (Landesbauordnung)', 'Beides dasselbe', 'Planungsrecht ist Landesrecht, Ordnungsrecht Bundesrecht', 'Planungsrecht gilt nur für Gewerbe'], correct: 0,
      explain: 'BauGB/BauNVO (Bund) bestimmen Nutzung und Dichte; die Landesbauordnungen regeln Abstandsflächen, Brandschutz, Verfahren.' },
    { sub: 'baurecht', q: 'Ein Grundstück liegt im Geltungsbereich eines qualifizierten Bebauungsplans. Wonach richtet sich die Zulässigkeit?',
      options: ['§ 30 BauGB – es gilt, was der B-Plan festsetzt', '§ 34 BauGB – Einfügungsgebot', '§ 35 BauGB – Außenbereich', 'Nach dem Flächennutzungsplan'], correct: 0,
      explain: 'Im qualifizierten B-Plan-Gebiet bestimmt die Satzung Art & Maß der Nutzung; zusätzlich muss die Erschließung gesichert sein.' },
    { sub: 'baurecht', q: 'Was verlangt § 34 BauGB im unbeplanten Innenbereich?',
      options: ['Das Vorhaben muss sich in die Eigenart der näheren Umgebung einfügen', 'Es gilt Baufreiheit', 'Nur Landwirtschaft ist zulässig', 'Die Gemeinde entscheidet nach Belieben'], correct: 0,
      explain: 'Maßstab ist die Umgebungsbebauung (Art, Maß, Bauweise, überbaubare Fläche). Was sich einfügt, ist zulässig – das „Einfügungsgebot".' },
    { sub: 'baurecht', q: 'Grundstück 800 m², GRZ 0,4. Wie viel Grundfläche darf überbaut werden?',
      options: ['320 m²', '480 m²', '800 m²', '40 m²'], correct: 0,
      explain: 'GRZ 0,4 × 800 m² = 320 m² überbaubare Grundfläche. Die GFZ regelt dagegen die Geschossfläche.' },
    { sub: 'baurecht', q: 'Welches Instrument sichert Baurechtsfragen VOR dem Grundstückskauf verbindlich ab?',
      options: ['Bauvoranfrage → Bauvorbescheid', 'Ein Anruf beim Bauamt', 'Der Maklervertrag', 'Die Grundschuld'], correct: 0,
      explain: 'Der Bauvorbescheid beantwortet einzelne Zulässigkeitsfragen rechtsverbindlich (befristet) – Standard-Absicherung jedes Profis vor dem Ankauf.' },
    { sub: 'baurecht', q: 'Die Baugenehmigung ist eine „gebundene Entscheidung". Das heißt?',
      options: ['Besteht Baurecht und stehen keine Vorschriften entgegen, MUSS sie erteilt werden', 'Die Behörde entscheidet nach freiem Ermessen', 'Der Bürgermeister entscheidet', 'Sie ist an den Bauunternehmer gebunden'], correct: 0,
      explain: 'Kein Gnadenakt: Auf die Genehmigung besteht bei Rechtmäßigkeit ein Anspruch. Politische Bedenken sind kein Versagungsgrund.' },
    { sub: 'baurecht', q: 'Wo stehen Baulasten (z. B. übernommene Abstandsflächen)?',
      options: ['Im Baulastenverzeichnis der Bauaufsichtsbehörde (in den meisten Ländern) – nicht im Grundbuch', 'Immer im Grundbuch Abt. II', 'Im Mietvertrag', 'Im Energieausweis'], correct: 0,
      explain: 'Baulasten sind öffentlich-rechtliche Verpflichtungen und stehen im Baulastenverzeichnis (Ausnahme: Bayern arbeitet mit Grunddienstbarkeiten). Bei Ankaufsprüfungen immer abfragen!' },
    { sub: 'baurecht', q: 'Welches Baugebiet erlaubt Wohnen UND nicht störendes Gewerbe gleichrangig?',
      options: ['Mischgebiet (MI)', 'Reines Wohngebiet (WR)', 'Industriegebiet (GI)', 'Sondergebiet (SO)'], correct: 0,
      explain: 'Im MI stehen Wohnen und nicht wesentlich störendes Gewerbe gleichberechtigt nebeneinander; das neue „Urbane Gebiet" (MU) erlaubt dichtere Mischung.' },

    // phasen
    { sub: 'phasen', q: 'Welche drei Faktoren muss die Projektentwicklung kombinieren?',
      options: ['Standort, Projektidee, Kapital', 'Beton, Stahl, Glas', 'Makler, Notar, Bank', 'Grundstück, Bagger, Werbung'], correct: 0,
      explain: 'Die klassische Definition (nach Diederichs): Aus Standort + Idee + Kapital entsteht ein dauerhaft tragfähiges Objekt – fehlt ein Faktor, gibt es kein Projekt.' },
    { sub: 'phasen', q: 'Was gehört in eine Machbarkeitsstudie?',
      options: ['Markt-/Standortanalyse, Baurechtsprüfung, Nutzungskonzept, Grobkalkulation, Risiken', 'Nur die Bauzeichnung', 'Der fertige Mietvertrag', 'Das Farbkonzept der Fassade'], correct: 0,
      explain: 'Die Feasibility ist die Go/No-Go-Grundlage – wer hier spart, bezahlt später auf der Baustelle.' },
    { sub: 'phasen', q: 'In welcher HOAI-Leistungsphase wird der Bauantrag eingereicht?',
      options: ['LP 4 (Genehmigungsplanung)', 'LP 1', 'LP 8', 'LP 9'], correct: 0,
      explain: 'LP 4 = Genehmigungsplanung. Merkreihe: 1 Grundlagen, 2 Vor-, 3 Entwurfs-, 4 Genehmigungs-, 5 Ausführungsplanung, 6/7 Vergabe, 8 Bauüberwachung, 9 Objektbetreuung.' },
    { sub: 'phasen', q: 'Was unterscheidet den Bauträger vom Generalunternehmer?',
      options: ['Der Bauträger baut auf EIGENEM Grundstück und verkauft; der GU baut auf fremdem Grundstück für den Bauherrn', 'Nichts', 'Der GU verkauft Wohnungen', 'Der Bauträger plant nur'], correct: 0,
      explain: 'Bauträger = Grundstück + Bau + Verkauf aus einer Hand (MaBV-Schutzregime!). GU = reine Bauausführung, oft zum Pauschalpreis.' },
    { sub: 'phasen', q: 'Wie lange läuft die Gewährleistung für Bauwerke nach BGB?',
      options: ['5 Jahre ab Abnahme', '2 Jahre', '10 Jahre', '6 Monate'], correct: 0,
      explain: '§ 634a BGB: 5 Jahre für Bauwerke. Die Abnahme startet die Frist und kehrt die Beweislast um – deshalb ist sie so wichtig.' },
    { sub: 'phasen', q: 'Warum verlangen Banken Vorverkaufs-/Vorvermietungsquoten?',
      options: ['Sie reduzieren das Vermarktungsrisiko der Projektfinanzierung', 'Aus steuerlichen Gründen', 'Wegen der HOAI', 'Um die Bauzeit zu verkürzen'], correct: 0,
      explain: 'Typisch 30–50 % Vorverkauf vor Auszahlung: Die Bank will sehen, dass der Markt das Produkt annimmt. Deshalb läuft Vertrieb ab Tag 1 parallel.' },
    { sub: 'phasen', q: 'Welches Gutachten gehört VOR den Grundstücksankauf?',
      options: ['Baugrundgutachten (plus Altlastenrecherche)', 'Wertgutachten des Verkäufers', 'Energieausweis', 'Mietgutachten'], correct: 0,
      explain: 'Baugrund- und Altlastenrisiken können Projekte ruinieren (Gründungskosten, Entsorgung). Prüfen oder vertraglich absichern – vor der Unterschrift.' },
    { sub: 'phasen', q: 'Was macht ein Projektsteuerer?',
      options: ['Er managt Kosten, Termine und Qualitäten im Auftrag des Bauherrn', 'Er mauert im Akkord', 'Er verkauft die Wohnungen', 'Er erteilt die Baugenehmigung'], correct: 0,
      explain: 'Projektsteuerung = delegierte Bauherrenfunktion: Controlling und Koordination über alle Phasen – nicht zu verwechseln mit der Bauleitung (LP 8).' },

    // kalkulation
    { sub: 'kalkulation', q: 'Was beantwortet das Residualwertverfahren?',
      options: ['Welchen Preis man maximal für das Grundstück zahlen darf', 'Wie hoch die Miete sein muss', 'Wie lange der Bau dauert', 'Welche GRZ gilt'], correct: 0,
      explain: 'Rückwärtsrechnung: Verkaufserlös − alle Kosten − Gewinn = Residuum für das Grundstück. Wer mehr bezahlt, bezahlt es aus der eigenen Marge.' },
    { sub: 'kalkulation', q: 'Welche Kostengruppe der DIN 276 enthält die Baunebenkosten (Planung, Gutachten, Gebühren)?',
      options: ['KG 700', 'KG 100', 'KG 300', 'KG 500'], correct: 0,
      explain: 'KG 700 wird notorisch unterschätzt: Architekten, Fachplaner, Behördengebühren, Gutachten – real oft 15–20 % der Baukosten.' },
    { sub: 'kalkulation', q: 'Erlös 8,0 Mio. €, Gesamtkosten 6,8 Mio. €. Wie hoch ist der Trading Profit (auf Kosten bezogen)?',
      options: ['ca. 17,6 %', 'ca. 15 %', 'ca. 8 %', 'ca. 25 %'], correct: 0,
      explain: '(8,0 − 6,8) ÷ 6,8 = 17,6 %. Achtung Konvention: auf Erlös bezogen wären es 15 % – immer klären, worauf sich die Marge bezieht!' },
    { sub: 'kalkulation', q: 'Warum dürfen Baukosten nie auf die Wohnfläche, sondern müssen auf die BGF bezogen werden?',
      options: ['Gebaut wird die gesamte Brutto-Grundfläche (inkl. Wände, Flure, Keller) – die Wohnfläche ist nur ~75–80 % davon', 'Wohnfläche und BGF sind identisch', 'Weil die DIN es verbietet', 'Aus steuerlichen Gründen'], correct: 0,
      explain: 'Wer 3.000 €/m² Baukosten auf die Wohnfläche statt BGF rechnet, unterschätzt die Kosten um ~25 % – ein klassischer Anfängerfehler.' },
    { sub: 'kalkulation', q: 'Was gehört in eine Sensitivitätsanalyse eines Projekts?',
      options: ['Szenarien wie −10 % Verkaufspreis oder +10 % Baukosten und ihre Wirkung auf den Gewinn', 'Die Farbauswahl der Fassade', 'Die Lebensläufe der Handwerker', 'Nur der Best Case'], correct: 0,
      explain: 'Ein Projekt, das nur im Best Case funktioniert, ist keine Investition, sondern eine Wette. Banken erwarten Stress-Szenarien.' },
    { sub: 'kalkulation', q: 'Welchen Anteil an den Gesamtkosten hat das Grundstück in normalen Lagen typischerweise?',
      options: ['Etwa 15–25 %', 'Unter 2 %', 'Über 60 %', 'Genau 50 %'], correct: 0,
      explain: 'Faustwert für Plausibilitätsprüfungen; in Toplagen (Innenstädte) kann der Bodenanteil deutlich höher liegen.' },
    { sub: 'kalkulation', q: 'Was sind Bereitstellungszinsen?',
      options: ['Zinsen der Bank auf zugesagte, aber noch nicht abgerufene Darlehensteile', 'Zinsen auf das Eigenkapital', 'Verzugszinsen des Käufers', 'Die Grunderwerbsteuer'], correct: 0,
      explain: 'Bei langen Bauzeiten relevant: Nach bereitstellungszinsfreier Zeit (oft 6–12 Monate) kostet nicht abgerufenes Geld ~3 % p. a. – gehört in die Finanzierungsplanung (KG 800).' },

    // vermarktung-revit
    { sub: 'vermarktung-revit', q: 'Wie darf ein Bauträger Käufergelder entgegennehmen (§ 3 MaBV)?',
      options: ['Nur nach Baufortschritt: max. 7 Raten aus 13 Teilbeträgen – oder gegen Bürgschaft (§ 7 MaBV)', 'Komplett bei Vertragsschluss', 'Frei verhandelbar', 'Erst nach Fertigstellung'], correct: 0,
      explain: 'Der Ratenplan (z. B. 30 % nach Erdarbeiten, 28 % Rohbau …) schützt Käufer vor Bauträgerinsolvenz – zusammen mit Vormerkung und Freistellungserklärung.' },
    { sub: 'vermarktung-revit', q: 'Was löst die Abnahme beim Bauträgerobjekt aus?',
      options: ['Gefahrübergang, Beweislastumkehr und Start der 5-jährigen Gewährleistung', 'Nichts – reine Formalie', 'Den Baubeginn', 'Die Grundsteuerpflicht des Bauträgers'], correct: 0,
      explain: 'Deshalb: Abnahme nie unter Zeitdruck, Mängel protokollieren, ggf. Sachverständigen mitnehmen. Gemeinschafts- und Sondereigentum getrennt abnehmen!' },
    { sub: 'vermarktung-revit', q: 'Was ist beim „Verkauf vom Plan" die wichtigste Vertragsgrundlage für die Qualität?',
      options: ['Die Baubeschreibung – sie wird Vertragsinhalt', 'Die Visualisierung', 'Das Exposé', 'Die Musterwohnung'], correct: 0,
      explain: 'Hochglanz-Renderings sind Werbung; die Baubeschreibung definiert verbindlich, was geschuldet ist. Käufer sollten sie prüfen (lassen).' },
    { sub: 'vermarktung-revit', q: 'Welche steuerliche Besonderheit macht Denkmalobjekte für Kapitalanleger attraktiv?',
      options: ['Denkmal-AfA: 8 Jahre je 9 % + 4 Jahre je 7 % der begünstigten Sanierungskosten', 'Keine Grunderwerbsteuer', 'Mieteinnahmen steuerfrei', 'Doppelte Pendlerpauschale'], correct: 0,
      explain: '§§ 7i EStG: Die Sanierungskosten lassen sich in 12 Jahren komplett abschreiben – deshalb werden Denkmalprojekte gezielt an Gutverdiener vertrieben.' },
    { sub: 'vermarktung-revit', q: 'Typische technische Hürde bei der Umnutzung Büro → Wohnen?',
      options: ['Gebäudetiefe/Raster, Leitungsführung, Brandschutz, ggf. Schadstoffe', 'Zu schöne Aussicht', 'Zu viele Balkone', 'Wohnungen sind immer kleiner als Büros'], correct: 0,
      explain: 'Tiefe Büroriegel bekommen innen kein Tageslicht, Bäder brauchen neue Steigstränge, Brandschutz gilt je Nutzung – Umnutzung ist Ingenieursarbeit.' },
    { sub: 'vermarktung-revit', q: 'Braucht die Umnutzung eines Bürogebäudes zu Wohnungen eine Genehmigung?',
      options: ['Ja – die Nutzungsänderung ist genehmigungspflichtig', 'Nein, Eigentum verpflichtet zu nichts', 'Nur bei Denkmalschutz', 'Nur wenn umgebaut wird'], correct: 0,
      explain: 'Auch ohne bauliche Änderung ist die Nutzungsänderung genehmigungspflichtig, denn andere Nutzungen haben andere Anforderungen (Stellplätze, Lärm, Brandschutz).' },
    { sub: 'vermarktung-revit', q: 'Warum erhalten Frühkäufer beim Neubauvertrieb oft günstigere Preise?',
      options: ['Sie tragen mehr Risiko (Kauf „vom Papier") und liefern die Vorverkaufsquote für die Bankfinanzierung', 'Aus reiner Nettigkeit', 'Weil die MaBV es vorschreibt', 'Weil die Preise immer sinken'], correct: 0,
      explain: 'Die ersten 30–50 % Verkäufe schalten die Projektfinanzierung frei – dieser Wert wird mit Preisvorteilen „eingekauft". Später steigen die Listenpreise typischerweise.' },
  ],

  cards: [
    { sub: 'baurecht', front: 'Die 3 Zulässigkeits-Paragrafen des BauGB?', back: '§ 30: qualifizierter B-Plan (es gilt die Satzung)\n§ 34: unbeplanter Innenbereich (Einfügungsgebot)\n§ 35: Außenbereich (nur privilegierte Vorhaben)' },
    { sub: 'baurecht', front: 'GRZ und GFZ – Definitionen?', back: 'GRZ = überbaute Grundfläche ÷ Grundstücksfläche\nGFZ = gesamte Geschossfläche ÷ Grundstücksfläche\nBeispiel: 1.000 m², GRZ 0,4 / GFZ 1,2 → 400 m² Grundfläche, 1.200 m² Geschossfläche.' },
    { sub: 'baurecht', front: 'FNP vs. B-Plan?', back: 'Flächennutzungsplan: vorbereitend, gemeindeweit, bindet nur Behörden.\nBebauungsplan: verbindliche Satzung, parzellenscharf, schafft Baurecht.' },
    { sub: 'baurecht', front: 'Wichtige Baugebiete der BauNVO?', back: 'WR reines Wohngebiet · WA allgemeines Wohngebiet · MI Mischgebiet · MU urbanes Gebiet · GE Gewerbegebiet · GI Industriegebiet · SO Sondergebiet' },
    { sub: 'baurecht', front: 'Bauvorbescheid – Zweck?', back: 'Verbindliche Vorab-Klärung einzelner Baurechtsfragen (z. B. Bebaubarkeit) VOR Planung und Ankauf. Das zentrale Absicherungsinstrument des Entwicklers.' },
    { sub: 'baurecht', front: 'Was ist eine Baulast?', back: 'Öffentlich-rechtliche Verpflichtung des Eigentümers gegenüber der Bauaufsicht (z. B. Abstandsflächenübernahme). Steht im Baulastenverzeichnis, NICHT im Grundbuch (Ausnahme Bayern: Dienstbarkeiten).' },
    { sub: 'baurecht', front: 'Typische Baurechts-Risiken beim Ankauf?', back: 'Veränderungssperre, Erschließungskosten, Stellplatzpflicht, Baulasten, Altlasten, Denkmalschutz, Artenschutz. Lösung: Prüfung vor Kauf oder Kauf unter Baurechts-Bedingung.' },
    { sub: 'phasen', front: 'Definition Projektentwicklung (3 Faktoren)?', back: 'Kombination von Standort + Projektidee + Kapital zu einem dauerhaft tragfähigen, wirtschaftlichen Immobilienprojekt.' },
    { sub: 'phasen', front: 'Die 9 HOAI-Leistungsphasen?', back: '1 Grundlagenermittlung · 2 Vorplanung · 3 Entwurfsplanung · 4 Genehmigungsplanung · 5 Ausführungsplanung · 6 Vorbereitung Vergabe · 7 Mitwirkung Vergabe · 8 Objektüberwachung · 9 Objektbetreuung' },
    { sub: 'phasen', front: 'Bauträger / GU / GÜ / Projektsteuerer?', back: 'Bauträger: eigenes Grundstück, baut & verkauft (MaBV).\nGU: komplette Bauausführung für den Bauherrn.\nGÜ: Planung + Bau, baut aber nicht selbst.\nProjektsteuerer: Kosten-/Termin-/Qualitätsmanagement.' },
    { sub: 'phasen', front: 'Gewährleistungsfrist Bauwerke?', back: '5 Jahre ab Abnahme (§ 634a BGB). Abnahme = Gefahrübergang + Beweislastumkehr + Fristbeginn.' },
    { sub: 'phasen', front: 'Die 5 großen Projektrisiken?', back: 'Genehmigungsrisiko · Baugrundrisiko · Kosten-/Terminrisiko · Vermarktungsrisiko · Finanzierungsrisiko – jedes braucht eine Absicherungsstrategie.' },
    { sub: 'kalkulation', front: 'Residualwertverfahren – Formel?', back: 'Verkaufserlös\n− Baukosten & Baunebenkosten\n− Vermarktung & Finanzierung\n− Entwicklergewinn\n= Residuum = max. tragfähige Grundstückskosten' },
    { sub: 'kalkulation', front: 'DIN 276 – Kostengruppen 100–800?', back: '100 Grundstück · 200 Herrichten/Erschließen · 300 Baukonstruktion · 400 Technische Anlagen · 500 Außenanlagen · 600 Ausstattung · 700 Baunebenkosten · 800 Finanzierung' },
    { sub: 'kalkulation', front: 'Faustwert Baunebenkosten (KG 700)?', back: '15–20 % der Baukosten (Planung, Gutachten, Gebühren) – der am häufigsten unterschätzte Posten.' },
    { sub: 'kalkulation', front: 'Trading Profit?', back: 'Entwicklergewinn = Verkaufserlös − Gesamtinvestitionskosten. Zielgröße üblich 10–20 % (Bezugsgröße Kosten oder Erlös – immer klären!).' },
    { sub: 'kalkulation', front: 'Flächeneffizienz?', back: 'Wohnfläche ÷ BGF. Gute Wohnprojekte: ~0,75–0,8. Baukosten IMMER auf BGF beziehen, Erlöse auf Wohnfläche.' },
    { sub: 'vermarktung-revit', front: 'MaBV § 3 – Ratenprinzip?', back: 'Bauträger darf Gelder nur nach Baufortschritt annehmen: max. 7 Raten aus 13 Teilbeträgen (30 % Erdarbeiten inkl. Grundstück, 28 % Rohbau, … 2,1 % nach vollständiger Fertigstellung). Alternative: § 7-Bürgschaft.' },
    { sub: 'vermarktung-revit', front: 'Voraussetzungen, bevor der Bauträger die 1. Rate verlangen darf?', back: 'Wirksamer (beurkundeter) Vertrag, Auflassungsvormerkung eingetragen, Baugenehmigung erteilt, Freistellung von Globalgrundpfandrechten gesichert.' },
    { sub: 'vermarktung-revit', front: 'Abnahme beim Neubau – 3 Wirkungen?', back: '1. Gefahrübergang auf den Erwerber\n2. Beweislastumkehr für Mängel\n3. Beginn der 5-Jahres-Gewährleistung.\nSonder- und Gemeinschaftseigentum getrennt abnehmen!' },
    { sub: 'vermarktung-revit', front: 'Denkmal-AfA (§ 7i EStG)?', back: 'Begünstigte Sanierungskosten: 8 Jahre × 9 % + 4 Jahre × 7 % = 100 % in 12 Jahren (Vermieter). Starkes Vertriebsargument bei Kapitalanlegern.' },
    { sub: 'vermarktung-revit', front: 'Prüfpunkte Umnutzung Büro → Wohnen?', back: 'Baurecht (Nutzungsänderung genehmigungspflichtig, Stellplätze, Lärm), Technik (Raster/Tiefe, Stränge, Brandschutz, Schadstoffe), Wirtschaftlichkeit (Umbau vs. Abriss/Neubau parallel rechnen).' },
    { sub: 'vermarktung-revit', front: 'Warum läuft Vermarktung parallel zum Bau?', back: 'Banken koppeln die Projektfinanzierung an Vorverkaufs-/Vorvermietungsquoten (oft 30–50 %). Frühkäufer bekommen Preisvorteile fürs „Papier-Risiko".' },
  ],

  cloze: [
    { sub: 'baurecht', title: 'Baurecht in einem Absatz',
      intro: 'Ergänze Paragrafen und Begriffe.',
      text: 'Im Geltungsbereich eines qualifizierten Bebauungsplans richtet sich die Zulässigkeit nach § {{30}} BauGB. Im unbeplanten Innenbereich gilt das Einfügungsgebot des § {{34}} BauGB, im Außenbereich der § {{35}} BauGB. Das Verhältnis von überbauter Fläche zur Grundstücksfläche heißt {{GRZ|Grundflächenzahl}}, das der Geschossfläche {{GFZ|Geschossflächenzahl}}. Verbindliche Vorab-Klärung einzelner Fragen liefert der {{Bauvorbescheid|Vorbescheid}}.' },
    { sub: 'phasen', title: 'Phasen & Beteiligte',
      intro: 'Ergänze die Begriffe.',
      text: 'Die Go/No-Go-Entscheidung fällt nach der {{Machbarkeitsstudie|Feasibility}}. Der Bauantrag wird in HOAI-Leistungsphase {{4|vier}} eingereicht, die Bauleitung ist Phase {{8|acht}}. Wer auf eigenem Grundstück baut und verkauft, ist {{Bauträger}}. Die Gewährleistung für Bauwerke beträgt {{5|fünf}} Jahre ab {{Abnahme}}.' },
    { sub: 'kalkulation', title: 'Developer-Rechnung',
      intro: 'Ergänze die Begriffe.',
      text: 'Beim {{Residualwertverfahren|Residualverfahren}} wird vom erwarteten {{Verkaufserlös|Erlös}} rückwärts gerechnet. Die Baunebenkosten stehen in Kostengruppe {{700}} der DIN 276 und betragen real oft 15–20 % der Baukosten. Der Gewinn des Entwicklers heißt {{Trading Profit|Trading-Profit}}. Baukosten bezieht man auf die {{BGF|Brutto-Grundfläche}}, Verkaufserlöse auf die {{Wohnfläche}}.' },
    { sub: 'vermarktung-revit', title: 'Bauträger & MaBV',
      intro: 'Ergänze Zahlen und Begriffe.',
      text: 'Nach § 3 MaBV darf der Bauträger höchstens {{7|sieben}} Raten aus 13 Teilbeträgen verlangen – die erste über {{30}} % nach Beginn der Erdarbeiten. Alternativ sichert eine {{Bürgschaft}} nach § 7 MaBV. Mit der {{Abnahme}} beginnt die fünfjährige {{Gewährleistung|Gewährleistungsfrist}}. Bei Denkmalobjekten lockt die Denkmal-{{AfA|Abschreibung}}.' },
  ],

  calc: [
    {
      sub: 'baurecht', title: 'Bebaubarkeit aus GRZ und GFZ',
      generate() {
        const grundstueck = U.randInt(50, 150) * 10;
        const gfz = U.pick([0.8, 1.0, 1.2, 1.6, 2.0]);
        const answer = Math.round(grundstueck * gfz);
        return {
          text: `Ein Grundstück ist <strong>${U.num(grundstueck, 0)} m²</strong> groß, der B-Plan setzt eine GFZ von <strong>${U.num(gfz, 1)}</strong> fest. Wie viel Geschossfläche darfst du maximal realisieren?`,
          unit: 'm²', answer, tolerance: 1, decimals: 0,
          steps: [`Geschossfläche = Grundstücksfläche × GFZ = ${U.num(grundstueck, 0)} × ${U.num(gfz, 1)} = <strong>${U.num(answer, 0)} m²</strong>`],
        };
      },
    },
    {
      sub: 'kalkulation', title: 'Residualwert: Was darf das Grundstück kosten?',
      generate() {
        const wfl = U.randInt(8, 20) * 100;               // Wohnfläche
        const vkPreis = U.randInt(40, 70) * 100;           // €/m²
        const erloes = wfl * vkPreis;
        const kostenQuote = U.pick([60, 65, 70]);          // % vom Erlös für Bau+NK+Vertrieb
        const gewinn = U.pick([10, 15]);                   // % vom Erlös
        const answer = Math.round(erloes * (1 - kostenQuote / 100 - gewinn / 100));
        return {
          text: `Geplantes Projekt: <strong>${U.num(wfl, 0)} m² Wohnfläche</strong>, erzielbarer Verkaufspreis <strong>${U.num(vkPreis, 0)} €/m²</strong>. Bau-, Nebenkosten und Vertrieb betragen zusammen <strong>${kostenQuote} % des Erlöses</strong>, dein Gewinnziel <strong>${gewinn} % des Erlöses</strong>. Wie hoch ist das Residuum für den Grundstücksankauf (inkl. Ankaufsnebenkosten)?`,
          unit: '€', answer, tolerance: Math.max(2000, answer * 0.01), decimals: 0,
          steps: [
            `Erlös: ${U.num(wfl, 0)} m² × ${U.num(vkPreis, 0)} €/m² = ${U.eur(erloes)}`,
            `Kosten: ${kostenQuote} % → ${U.eur(erloes * kostenQuote / 100)}`,
            `Gewinn: ${gewinn} % → ${U.eur(erloes * gewinn / 100)}`,
            `Residuum: ${U.eur(erloes)} × (1 − ${kostenQuote} % − ${gewinn} %) = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'kalkulation', title: 'Baukosten über die BGF schätzen',
      generate() {
        const wfl = U.randInt(6, 16) * 100;
        const effizienz = U.pick([0.75, 0.8]);
        const kostenBgf = U.randInt(24, 34) * 100;
        const bgf = wfl / effizienz;
        const answer = Math.round(bgf * kostenBgf);
        return {
          text: `Für ein Wohnprojekt sind <strong>${U.num(wfl, 0)} m² Wohnfläche</strong> geplant, die Flächeneffizienz (Wohnfläche ÷ BGF) beträgt <strong>${U.num(effizienz, 2)}</strong>. Die Baukosten liegen bei <strong>${U.num(kostenBgf, 0)} €/m² BGF</strong>. Wie hoch sind die gesamten Baukosten?`,
          unit: '€', answer, tolerance: Math.max(2000, answer * 0.01), decimals: 0,
          steps: [
            `BGF = Wohnfläche ÷ Effizienz = ${U.num(wfl, 0)} ÷ ${U.num(effizienz, 2)} = ${U.num(Math.round(bgf), 0)} m²`,
            `Baukosten = ${U.num(Math.round(bgf), 0)} m² × ${U.num(kostenBgf, 0)} €/m² = <strong>${U.eur(answer)}</strong>`,
            `Merke: Kosten auf BGF, Erlöse auf Wohnfläche!`,
          ],
        };
      },
    },
    {
      sub: 'kalkulation', title: 'Trading Profit berechnen',
      generate() {
        const kosten = U.randInt(30, 90) * 100000;
        const marge = U.pick([8, 12, 15, 18]);
        const erloes = Math.round(kosten * (1 + marge / 100));
        const answer = marge;
        return {
          text: `Ein Projekt kostet insgesamt <strong>${U.eur(kosten)}</strong> und wird für <strong>${U.eur(erloes)}</strong> verkauft. Wie hoch ist der Trading Profit in Prozent der Gesamtkosten? (1 Nachkommastelle)`,
          unit: '%', answer, tolerance: 0.3, decimals: 1,
          steps: [
            `Gewinn: ${U.eur(erloes)} − ${U.eur(kosten)} = ${U.eur(erloes - kosten)}`,
            `Marge: ${U.eur(erloes - kosten)} ÷ ${U.eur(kosten)} × 100 = <strong>${U.num(answer, 1)} %</strong>`,
          ],
        };
      },
    },
    {
      sub: 'vermarktung-revit', title: 'MaBV-Rate berechnen',
      generate() {
        const preis = U.randInt(30, 75) * 10000;
        const rate = U.pick([{ p: 30, txt: 'nach Beginn der Erdarbeiten (inkl. Grundstücksanteil)' }, { p: 28, txt: 'nach Rohbaufertigstellung' }]);
        const answer = Math.round(preis * rate.p / 100);
        return {
          text: `Ein Käufer erwirbt eine Neubauwohnung vom Bauträger für <strong>${U.eur(preis)}</strong>. Nach MaBV wird die Rate von <strong>${rate.p} %</strong> ${rate.txt} fällig. Wie hoch ist diese Rate?`,
          unit: '€', answer, tolerance: Math.max(10, answer * 0.005), decimals: 0,
          steps: [`${U.eur(preis)} × ${rate.p} % = <strong>${U.eur(answer)}</strong>`],
        };
      },
    },
  ],

  cases: [
    {
      id: 'grundstueck-ortsrand',
      title: 'Das Grundstück am Ortsrand',
      teaser: 'Ein Eigentümer bietet dir Bauerwartungsland an – Chance oder Falle?',
      intro: `Landwirt Huber bietet deinem Büro ein 4.000-m²-Grundstück am Ortsrand an: „Da kann man bestimmt
        acht Häuser draufstellen, das Nachbargrundstück wurde vor Jahren auch bebaut." Ein Investor aus deiner
        Kartei wäre sofort interessiert. Huber will 320 €/m² – „Bauland eben". Der Bodenrichtwert für Bauland
        im Ort liegt bei 380 €/m², für Ackerland bei 9 €/m².`,
      steps: [
        {
          situation: 'Bevor du das Grundstück anbietest oder bewertest, musst du den planungsrechtlichen Status klären.',
          question: 'Was prüfst du zuerst?',
          options: [
            { quality: 'best', text: 'Liegt das Grundstück im Geltungsbereich eines B-Plans, im Innenbereich (§ 34) oder im Außenbereich (§ 35)? Dazu: Flächennutzungsplan, Auskunft beim Bauamt, ggf. laufende Planverfahren.',
              feedback: 'Genau die richtige Reihenfolge: Der Zulässigkeitsstatus entscheidet über den Wert. „Der Nachbar durfte auch" ist kein Baurecht – die Nachbarbebauung kann der letzte Zipfel des Innenbereichs gewesen sein, dahinter beginnt der Außenbereich.' },
            { quality: 'okay', text: 'Ich frage Herrn Huber nach alten Unterlagen und verlasse mich auf seine Aussage zur Bebaubarkeit.',
              feedback: 'Der Eigentümer ist keine Rechtsquelle – und hat ein massives Eigeninteresse an der Einstufung als Bauland. Immer Primärquellen: Bauamt, B-Plan, FNP.' },
            { quality: 'bad', text: 'Ich biete es dem Investor sofort als „Bauland für 8 Häuser" an – wer zuerst kommt, mahlt zuerst.',
              feedback: 'Damit machst du dich für falsche Zusicherungen haftbar. Stellt sich das Grundstück als Außenbereich heraus, ist es fast wertlos für Wohnbebauung – und dein Investor zu Recht wütend.' },
          ],
        },
        {
          situation: 'Ergebnis deiner Recherche: kein B-Plan, das Grundstück liegt überwiegend im Außenbereich (§ 35). ABER: Der FNP stellt die Fläche als Wohnbaufläche dar, und die Gemeinde diskutiert seit Jahren eine Ortsranderweiterung.',
          question: 'Wie ordnest du das wirtschaftlich ein?',
          options: [
            { quality: 'best', text: 'Das ist Bauerwartungsland: heute kein Baurecht, aber begründete Aussicht. Wert deutlich über Acker, deutlich unter Bauland – je nach Wahrscheinlichkeit/Zeithorizont grob 25–50 % des Baulandwerts. Hubers 320 €/m² sind zu hoch.',
              feedback: 'Sauber eingeordnet: Die Entwicklungsstufen (Ackerland → Bauerwartungsland → Rohbauland → baureifes Land) haben je eigene Wertniveaus. FNP-Darstellung + politische Diskussion begründen Erwartung, aber keine Sicherheit – und Zeit kostet Rendite.' },
            { quality: 'okay', text: 'Wenn der FNP Wohnbaufläche zeigt, ist es praktisch Bauland – die 320 €/m² gehen in Ordnung.',
              feedback: 'Gefährlicher Kurzschluss: Der FNP bindet nur die Verwaltung, er schafft kein Baurecht für den Bürger. Bis zum rechtskräftigen B-Plan können Jahre vergehen – oder es passiert nie.' },
            { quality: 'bad', text: 'Außenbereich heißt wertlos – ich sage Huber ab.',
              feedback: 'Zu schwarz-weiß: Bauerwartungsland ist ein eigenes, handelbares Gut mit erheblichem Wert für Entwickler mit langem Atem. Solche Flächen sind das Rohmaterial der Projektentwicklung.' },
          ],
        },
        {
          situation: 'Dein Investor bleibt interessiert, will aber das Risiko nicht allein tragen. Es geht um die Vertragsgestaltung für den Ankauf.',
          question: 'Welche Struktur empfiehlst du für den Deal?',
          options: [
            { quality: 'best', text: 'Kauf mit aufschiebender Bedingung (rechtskräftiger B-Plan/Baurecht) oder gestaffelter Kaufpreis: Sockelbetrag jetzt, Nachzahlung bei Baurechtschaffung – plus ggf. Bauvoranfrage vor Vollzug.',
              feedback: 'Professionelle Risikoteilung: Der Landwirt partizipiert an der Wertsteigerung, der Investor zahlt den Baulandpreis erst, wenn Bauland existiert. Solche Besserungsklauseln/Bedingungen sind Standard bei Entwicklungsgrundstücken (notariell sauber gestalten lassen).' },
            { quality: 'okay', text: 'Der Investor kauft sofort zum Ackerlandpreis von 9 €/m² – Risiko raus.',
              feedback: 'Träum weiter: Kein Eigentümer mit FNP-Wohnbaufläche verkauft zum reinen Ackerpreis. Unrealistische Angebote beenden Verhandlungen – Risikoteilung ist der Weg zum Deal.' },
            { quality: 'bad', text: 'Sofortkauf zu 320 €/m² – wenn der B-Plan kommt, ist es ein Schnäppchen.',
              feedback: 'Volles Baurecht bezahlen, ohne Baurecht zu bekommen: Wenn die Gemeinde anders entscheidet (oder 15 Jahre braucht), ist das Kapital gefangen. Genau so entstehen Entwickler-Pleiten.' },
          ],
        },
        {
          situation: 'Zwei Jahre später: Der B-Plan kommt tatsächlich (WA, GRZ 0,4, zweigeschossig) – aber die Gemeinde verlangt im städtebaulichen Vertrag 25 % geförderten Wohnungsbau und einen Infrastrukturkostenbeitrag.',
          question: 'Wie gehst du mit den Auflagen in der Kalkulation um?',
          options: [
            { quality: 'best', text: 'Beide Auflagen mindern den tragfähigen Grundstückswert: Ich rechne das Residuum neu – geförderte Flächen mit gedeckelten Erlösen, Infrastrukturbeitrag als Kostenposition – und passe die Nachzahlungsklausel entsprechend an.',
              feedback: 'Genau: Auflagen aus städtebaulichen Verträgen sind ökonomisch Grundstückskosten. Wer sie nicht ins Residuum einrechnet, bezahlt sie aus der eigenen Marge. Deshalb koppeln Profis Nachzahlungen an das tatsächlich geschaffene Baurecht inkl. Auflagen.' },
            { quality: 'okay', text: 'Die Auflagen ignoriere ich – 25 % gefördert klingt nach wenig.',
              feedback: 'Geförderter Wohnraum bedeutet gedeckelte Mieten/Preise auf einem Viertel der Fläche – das können leicht 10–15 % des Gesamterlöses sein. „Klingt nach wenig" ist keine Kalkulation.' },
            { quality: 'bad', text: 'Ich empfehle, gegen die Gemeinde zu klagen – solche Auflagen sind Enteignung.',
              feedback: 'Städtebauliche Verträge mit Förderquoten sind etablierte, regelmäßig zulässige Praxis (Angemessenheit vorausgesetzt). Eine Klage verbrennt Zeit und das Verhältnis zur Gemeinde – dem wichtigsten Partner jedes Entwicklers.' },
          ],
        },
      ],
    },
    {
      id: 'neubau-vertrieb',
      title: 'Vertriebsstart im Neubauprojekt',
      teaser: 'Du übernimmst den Vertrieb von 24 Neubauwohnungen – vom Papier bis zur Abnahme.',
      intro: `Ein regionaler Bauträger beauftragt dein Büro mit dem Vertrieb von „Stadtgärten Living":
        24 Eigentumswohnungen, Baubeginn in 4 Monaten, Fertigstellung in ca. 22 Monaten. Die Bank
        des Bauträgers verlangt 40 % Vorverkauf vor Baubeginn. Preisliste: 5.200–6.100 €/m².`,
      steps: [
        {
          situation: 'Vertriebsstart „vom Papier": Es gibt Grundrisse, eine Baubeschreibung und erste Visualisierungen. Ein junges Paar fragt im Beratungsgespräch: „Woher wissen wir, dass wir unser Geld nicht verlieren, wenn der Bauträger pleitegeht?"',
          question: 'Deine Antwort?',
          options: [
            { quality: 'best', text: 'Ich erkläre das MaBV-Schutzsystem: Zahlung nur nach Baufortschritt (Ratenplan), Auflassungsvormerkung im Grundbuch, Freistellungserklärung der Bank – und empfehle zusätzlich einen Blick auf Referenzprojekte und Bonität des Bauträgers.',
              feedback: 'Exakt das Vertrauensgespräch, das Neubauvertrieb ausmacht: Käufer zahlen nie mehr, als schon gebaut ist, und die Vormerkung sichert den Eigentumsanspruch. Wer das souverän erklärt, verkauft ohne Druck.' },
            { quality: 'okay', text: '„Der Bauträger ist seit 30 Jahren am Markt, da passiert nichts."',
              feedback: 'Beruhigung statt Aufklärung: Firmenhistorie ist ein Indiz, kein Schutzmechanismus. Die gesetzlichen Sicherungen (MaBV, Vormerkung) sind die eigentliche Antwort – und dein Kompetenzbeweis.' },
            { quality: 'bad', text: '„Dafür übernehme ich persönlich die Garantie."',
              feedback: 'Niemals persönliche Garantien für Dritte abgeben – rechtlich gefährlich und fachlich unsinnig. Deine Rolle ist Aufklärung über die echten Sicherungsmechanismen.' },
          ],
        },
        {
          situation: 'Nach 3 Monaten sind erst 6 von 24 Einheiten (25 %) reserviert – die Bank braucht 40 % für die Baufreigabe. Der Bauträger drängt: „Machen Sie mehr Druck bei den Interessenten!"',
          question: 'Wie reagierst du strategisch?',
          options: [
            { quality: 'best', text: 'Ich analysiere die Absagegründe (Preis? Grundrisse? Zinsen?), schlage gezielte Maßnahmen vor – z. B. Anpassung einzelner Preise, Frühbucher-Konditionen, Musterwohnung/Bemusterungstermine, Finanzierungspartner – statt Druck auf Interessenten.',
              feedback: 'Vertrieb ist Diagnose, nicht Druck: Wenn 75 % nicht kaufen, hat das Gründe – und die stehen meist in den Absagen. Frühbucherpreise sind legitim (Risikoprämie), Druckverkäufe erzeugen Widerrufe und Rufschäden.' },
            { quality: 'okay', text: 'Ich rufe alle Interessenten an und sage, die Preise würden nächste Woche um 5 % steigen.',
              feedback: 'Künstliche Verknappung mit erfundenen Preiserhöhungen ist Täuschung. Echte, kommunizierte Preisstaffeln über den Bauverlauf sind dagegen legitim – der Unterschied ist die Wahrheit.' },
            { quality: 'bad', text: 'Ich reserviere selbst ein paar Einheiten auf Strohleute, damit die Quote stimmt.',
              feedback: 'Scheinverkäufe gegenüber der finanzierenden Bank sind Kreditbetrug. Das ist der schnellste Weg, Gewerbeerlaubnis und Freiheit zu riskieren.' },
          ],
        },
        {
          situation: 'Das Projekt läuft an, 70 % sind verkauft. Während der Bauphase ruft eine Käuferin an: Der Bauträger habe mitgeteilt, dass sich die Fertigstellung um 4 Monate verzögert – sie muss ihre Mietwohnung eigentlich kündigen und ist verunsichert.',
          question: 'Wie betreust du sie?',
          options: [
            { quality: 'best', text: 'Ich kläre den offiziellen Stand beim Bauträger, erkläre ihr ihre vertragliche Position (verbindlicher Fertigstellungstermin? Verzugsregelungen/Entschädigung?), rate zur schriftlichen Bestätigung des neuen Termins und dazu, die Mietkündigung erst mit Puffer zum bestätigten Termin auszusprechen.',
              feedback: 'Genau diese Betreuung unterscheidet den Profi vom Verkäufer: Der Vertrag regelt Verzugsfolgen (§ 650u BGB, Vertragsstrafen falls vereinbart). Praktisch am wichtigsten: nie die alte Wohnung ohne Puffer aufgeben – Bauzeiten verschieben sich öfter als einmal.' },
            { quality: 'okay', text: 'Ich verweise sie an den Bauträger – nach dem Notartermin bin ich raus.',
              feedback: 'Formal bist du nicht Vertragspartei, aber „bin raus" kostet dich die Empfehlungen aus 24 Haushalten. Neubauvertrieb ist Betreuung bis zur Übergabe – das ist dein Wettbewerbsvorteil.' },
            { quality: 'bad', text: 'Ich sage ihr, 4 Monate seien doch nichts – sie solle sich nicht so anstellen.',
              feedback: 'Für eine Familie mit gekündigter Wohnung sind 4 Monate existenziell. Solche Sätze produzieren Beschwerden, negative Bewertungen und im Zweifel Regressdiskussionen.' },
          ],
        },
        {
          situation: 'Fertigstellung! Die Käuferin bittet dich, sie zur Abnahme ihrer Wohnung zu begleiten. Beim Rundgang entdeckt ihr Kratzer im Parkett, ein schief eingebautes Fenster und eine fehlende Steckdose laut Baubeschreibung.',
          question: 'Was rätst du ihr für die Abnahme?',
          options: [
            { quality: 'best', text: 'Alle Mängel detailliert ins Abnahmeprotokoll aufnehmen, Fristen zur Beseitigung setzen, ggf. einen angemessenen Einbehalt der Schlussrate prüfen – und die Abnahme des Gemeinschaftseigentums getrennt und sorgfältig (idealerweise mit Sachverständigem) durchführen.',
              feedback: 'Perfekt: Die Abnahme startet Gewährleistung und Beweislastumkehr – deshalb gehört jeder Mangel dokumentiert. Bis zur Beseitigung wesentlicher Mängel kann ein Teil der Schlusszahlung zurückgehalten werden. Gemeinschaftseigentum (Dach, Fassade, TG) prüft man am besten mit Gutachter der Erwerbergemeinschaft.' },
            { quality: 'okay', text: 'Unterschreiben und die Mängel später per E-Mail nachreichen – Hauptsache, sie kann einziehen.',
              feedback: 'Nach vorbehaltloser Abnahme muss der Käufer beweisen, dass die Mängel schon vorlagen – die Verhandlungsposition kippt. Mängel gehören VOR der Unterschrift ins Protokoll.' },
            { quality: 'bad', text: 'Die Abnahme verweigern, bis alles perfekt ist – auch wegen der Kratzer.',
              feedback: 'Die Abnahme darf nur bei wesentlichen Mängeln verweigert werden. Wegen Kratzern die Abnahme (und damit den Einzug) zu blockieren, schadet der Käuferin – Protokoll + Fristen + ggf. Einbehalt ist der richtige Werkzeugkasten.' },
          ],
        },
      ],
    },
  ],
});
