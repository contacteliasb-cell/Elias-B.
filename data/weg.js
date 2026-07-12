/* ============================================================
   Themenbereich: Hausverwaltung & Wohnungseigentumsrecht (WEG)
   ============================================================ */

LERN.registerArea({
  id: 'weg',
  title: 'Hausverwaltung & WEG',
  icon: '🏢',
  description: 'Wohnungseigentumsgesetz, Eigentümerversammlung, Mietmanagement, Betriebskostenabrechnung und technisches Gebäudemanagement – das Handwerkszeug der Verwaltung.',

  subtopics: [
    {
      id: 'weg-grundlagen',
      title: 'WEG-Recht: Sonder- & Gemeinschaftseigentum',
      teaser: 'Teilungserklärung, Miteigentumsanteile, was gehört wem?',
      lesson: `
        <p>Wer eine Eigentumswohnung verkauft oder verwaltet, muss das <strong>Wohnungseigentumsgesetz (WEG)</strong> beherrschen – zuletzt grundlegend reformiert durch das <strong>WEMoG</strong> (Wohnungseigentumsmodernisierungsgesetz, in Kraft seit 1.12.2020).</p>

        <h3>Die Konstruktion des Wohnungseigentums</h3>
        <p>Wohnungseigentum besteht immer aus <strong>drei untrennbaren Teilen</strong>:</p>
        <ol>
          <li><strong>Sondereigentum</strong> an einer Wohnung (bzw. Teileigentum an nicht zu Wohnzwecken dienenden Räumen, z. B. Laden, Keller-Gewerbe),</li>
          <li><strong>Miteigentumsanteil (MEA)</strong> am gemeinschaftlichen Eigentum (meist in Tausendstel angegeben),</li>
          <li>Mitgliedschaft in der <strong>Gemeinschaft der Wohnungseigentümer (GdWE)</strong> – seit dem WEMoG voll rechtsfähig.</li>
        </ol>

        <h3>Sondereigentum vs. Gemeinschaftseigentum – der Dauerbrenner</h3>
        <div class="table-wrap"><table>
          <tr><th>Sondereigentum (gehört dir allein)</th><th>Gemeinschaftseigentum (gehört allen)</th></tr>
          <tr><td>Innenräume der Wohnung, Bodenbeläge, Innentüren, nicht tragende Innenwände, Sanitärobjekte, Innenputz</td><td>Grundstück, Dach, Fassade, tragende Wände, Fenster (Außenseite und Konstruktion!), Wohnungseingangstür (außen), Treppenhaus, Aufzug, Leitungen bis zur Wohnung, Heizungsanlage</td></tr>
        </table></div>
        <div class="box box-warn">
          <span class="box-title">⚠️ Klassische Irrtümer</span>
          <strong>Fenster</strong> sind auch dann Gemeinschaftseigentum, wenn sie „zur Wohnung gehören" – Austausch ist grundsätzlich Sache der Gemeinschaft. Beim <strong>Balkon</strong> ist der Raum sondereigentumsfähig, die konstruktiven Teile (Platte, Brüstung, Abdichtung) sind Gemeinschaftseigentum. Solche Fragen entscheiden, wer Reparaturen bezahlt!
        </div>

        <h3>Teilungserklärung & Gemeinschaftsordnung</h3>
        <ul>
          <li><strong>Teilungserklärung (§ 8 WEG):</strong> Der Eigentümer teilt das Grundstück in Miteigentumsanteile verbunden mit Sondereigentum. Dazu gehören <strong>Aufteilungsplan</strong> (Baupläne mit Nummerierung) und <strong>Abgeschlossenheitsbescheinigung</strong> der Baubehörde.</li>
          <li><strong>Gemeinschaftsordnung:</strong> das „Grundgesetz" der WEG – regelt Stimmrechte, Kostenverteilung, Nutzungsregeln (z. B. Gewerbe erlaubt?). Sie kann vom Gesetz abweichen und geht diesem dann vor.</li>
          <li>Für jede Einheit wird ein eigenes <strong>Wohnungsgrundbuch</strong> angelegt.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp für den Wohnungsverkauf</span>
          Beim ETW-Verkauf brauchst du immer: Teilungserklärung + Gemeinschaftsordnung, die <strong>letzten 3 Protokolle</strong> der Eigentümerversammlungen, aktuelle <strong>Jahresabrechnung</strong> und <strong>Wirtschaftsplan</strong>, Stand der <strong>Erhaltungsrücklage</strong> und Infos zu beschlossenen/geplanten Maßnahmen. Käufer (und deren Banken!) fragen genau danach – wer die Unterlagen komplett hat, verkauft schneller und seriöser. Achtung: Steht in der Teilungserklärung eine <strong>Veräußerungszustimmung des Verwalters (§ 12 WEG)</strong>, muss diese vor der Eigentumsumschreibung vorliegen.
        </div>

        <h3>Hausgeld, Wirtschaftsplan, Rücklage</h3>
        <ul>
          <li><strong>Wirtschaftsplan:</strong> die Vorschau der Kosten fürs Jahr → daraus ergibt sich das monatliche <strong>Hausgeld</strong> je Eigentümer (Verteilung i. d. R. nach MEA, wenn nichts anderes vereinbart).</li>
          <li><strong>Jahresabrechnung:</strong> die Nachschau – beschlossen werden seit WEMoG die <strong>Abrechnungsspitzen</strong> (Nachschüsse/Anpassungen).</li>
          <li><strong>Erhaltungsrücklage</strong> (früher „Instandhaltungsrücklage"): angesparte Mittel für Dach, Fassade, Heizung & Co. Eine zu niedrige Rücklage ist beim Kauf ein Warnsignal – dann drohen <strong>Sonderumlagen</strong>.</li>
        </ul>
      `,
    },
    {
      id: 'versammlung',
      title: 'Eigentümerversammlung, Beschlüsse & Verwalter',
      teaser: 'Einberufung, Mehrheiten, bauliche Veränderungen, zertifizierter Verwalter',
      lesson: `
        <p>Die <strong>Eigentümerversammlung</strong> ist das oberste Entscheidungsorgan der WEG. Hier werden Wirtschaftsplan, Abrechnung, Sanierungen und der Verwalter beschlossen. Wer Versammlungen professionell vorbereitet und leitet, ist als Verwalter Gold wert.</p>

        <h3>Formalien der Versammlung</h3>
        <ul>
          <li>Mindestens <strong>einmal jährlich</strong>, einberufen vom Verwalter.</li>
          <li>Einberufungsfrist: mindestens <strong>3 Wochen</strong> (seit WEMoG), Textform genügt (E-Mail möglich).</li>
          <li>Seit WEMoG ist die Versammlung <strong>unabhängig von der Zahl der Anwesenden beschlussfähig</strong> – das alte Quorum von 50 % der MEA ist Geschichte.</li>
          <li><strong>Hybride Versammlungen</strong> sind per Beschluss möglich; seit Oktober 2024 können Eigentümer mit <strong>¾-Mehrheit</strong> sogar rein <strong>virtuelle</strong> Versammlungen zulassen (befristete Regelung, Beschlusswirkung max. 3 Jahre).</li>
          <li>Über die Versammlung ist eine <strong>Niederschrift (Protokoll)</strong> zu fertigen; außerdem führt der Verwalter die <strong>Beschluss-Sammlung</strong>.</li>
          <li><strong>Umlaufbeschluss:</strong> grundsätzlich Allstimmigkeit nötig, aber die Eigentümer können für einen konkreten Gegenstand die einfache Mehrheit im Umlaufverfahren beschließen. Textform genügt.</li>
        </ul>

        <h3>Beschlussmehrheiten seit dem WEMoG</h3>
        <div class="table-wrap"><table>
          <tr><th>Gegenstand</th><th>Mehrheit</th></tr>
          <tr><td>Verwaltung & laufende Maßnahmen (Wirtschaftsplan, Erhaltung, Verwalterbestellung)</td><td>einfache Mehrheit der abgegebenen Stimmen</td></tr>
          <tr><td><strong>Bauliche Veränderungen</strong> (§ 20 WEG)</td><td>einfache Mehrheit! Aber: Kosten trägt grundsätzlich, wer zugestimmt hat – außer bei Beschluss mit >2/3-Mehrheit und mehr als der Hälfte der MEA oder bei Amortisation, dann zahlen alle</td></tr>
          <tr><td>Rein virtuelle Versammlung zulassen</td><td>¾ der abgegebenen Stimmen</td></tr>
        </table></div>

        <h3>Privilegierte Maßnahmen (§ 20 Abs. 2 WEG)</h3>
        <p>Jeder Eigentümer hat <strong>Anspruch</strong> darauf, dass ihm auf eigene Kosten <strong>angemessene</strong> bauliche Veränderungen gestattet werden für:</p>
        <ul>
          <li>🔌 <strong>Laden elektrischer Fahrzeuge</strong> (Wallbox)</li>
          <li>♿ <strong>Barrierefreiheit</strong> (z. B. Rampe, Treppenlift)</li>
          <li>🔒 <strong>Einbruchsschutz</strong></li>
          <li>🌐 <strong>Glasfaseranschluss</strong> (Telekommunikation mit sehr hoher Kapazität)</li>
          <li>☀️ <strong>Steckersolargeräte</strong> („Balkonkraftwerke", seit der Gesetzesänderung 2024)</li>
        </ul>
        <p>Die Gemeinschaft entscheidet nur noch über das „Wie", nicht über das „Ob".</p>

        <h3>Der Verwalter</h3>
        <ul>
          <li>Bestellung: max. <strong>5 Jahre</strong> (bei Erstbestellung nach Begründung der WEG max. <strong>3 Jahre</strong>); daneben steht der <strong>Verwaltervertrag</strong>.</li>
          <li>Seit WEMoG hat der Verwalter <strong>umfassende Vertretungsmacht</strong> für die GdWE nach außen (außer Grundstückskauf-/Darlehensverträge, dafür braucht er Beschluss).</li>
          <li><strong>Zertifizierter Verwalter (§ 26a WEG):</strong> Jeder Eigentümer kann seit 1.12.2023 die Bestellung eines zertifizierten Verwalters verlangen (IHK-Prüfung); Ausnahmen für Kleinanlagen (< 9 Einheiten, Eigentümer verwaltet selbst).</li>
          <li>Gewerberechtlich braucht der Wohnimmobilienverwalter eine <strong>Erlaubnis nach § 34c GewO</strong> und unterliegt der <strong>Weiterbildungspflicht (20 Std. in 3 Jahren)</strong>.</li>
          <li>Der <strong>Verwaltungsbeirat</strong> (Eigentümer-Gremium) unterstützt und kontrolliert den Verwalter, prüft Abrechnung und Wirtschaftsplan.</li>
        </ul>

        <h3>Beschlüsse anfechten</h3>
        <div class="box box-info">
          <span class="box-title">Fristen merken!</span>
          Anfechtungsklage: <strong>1 Monat</strong> ab Beschlussfassung (Erhebung), Begründung binnen <strong>2 Monaten</strong> – beim <strong>Amtsgericht</strong> am Ort der Wohnanlage. Ein anfechtbarer Beschluss bleibt gültig, bis er rechtskräftig für ungültig erklärt wird; nur bei besonders schweren Fehlern ist er von Anfang an <strong>nichtig</strong>.
        </div>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Die meisten Konflikte in Versammlungen drehen sich um Geld (Sonderumlagen) und Lärm/Nutzung. Ein guter Verwalter nimmt Emotionen raus: saubere Tagesordnung, Kostenvergleiche (3 Angebote bei größeren Maßnahmen), realistische Rücklagenplanung. So entstehen Beschlüsse, die halten – und keine Anfechtungswellen.
        </div>
      `,
    },
    {
      id: 'mietmanagement',
      title: 'Mietmanagement: Vertrag, Mieterhöhung, Kündigung',
      teaser: 'Mietvertrag, Kaution, § 558 & § 559 BGB, Kündigungsfristen, Eigenbedarf',
      lesson: `
        <p>Ob als Verwalter von Mietobjekten oder als Makler, der Kapitalanleger berät: Das <strong>Wohnraummietrecht</strong> (§§ 535 ff. BGB) gehört zum Pflichtwissen. Es ist stark <strong>mieterschützend</strong> – wer die Grenzen kennt, vermeidet teure Fehler.</p>

        <h3>Der Mietvertrag</h3>
        <ul>
          <li>Formfrei möglich, aber: Zeitmietverträge und Verträge über 1 Jahr Laufzeit brauchen <strong>Schriftform</strong>. Standard ist der unbefristete Vertrag.</li>
          <li><strong>Kaution:</strong> maximal <strong>3 Nettokaltmieten</strong>, zahlbar in <strong>3 Monatsraten</strong>, insolvenzfest getrennt anzulegen (§ 551 BGB).</li>
          <li><strong>Schönheitsreparaturen:</strong> nur mit wirksamer Klausel auf Mieter übertragbar – starre Fristen („alle 3 Jahre streichen") sind unwirksam; bei unrenoviert übergebener Wohnung ohne Ausgleich ebenfalls.</li>
          <li><strong>Indexmiete</strong> (an Verbraucherpreisindex gekoppelt) und <strong>Staffelmiete</strong> (feste Steigerungen) als Alternativen zur Vergleichsmieten-Erhöhung.</li>
        </ul>

        <h3>Mieterhöhung auf die Vergleichsmiete (§ 558 BGB)</h3>
        <div class="box box-info">
          <span class="box-title">Die 3 Hürden der Mieterhöhung</span>
          <ol style="margin:0">
            <li><strong>Wartefrist:</strong> Die Miete muss zum Erhöhungszeitpunkt 15 Monate unverändert sein (Erhöhung darf frühestens 1 Jahr nach der letzten geltend gemacht werden + 3 Monate Zustimmungsfrist).</li>
            <li><strong>Ortsübliche Vergleichsmiete</strong> als Obergrenze – Begründung z. B. über Mietspiegel, 3 Vergleichswohnungen oder Gutachten.</li>
            <li><strong>Kappungsgrenze:</strong> maximal <strong>+20 % in 3 Jahren</strong>, in Gebieten mit angespanntem Wohnungsmarkt <strong>+15 %</strong>.</li>
          </ol>
        </div>
        <p>Der Mieter muss <strong>zustimmen</strong> (Frist: bis Ende des 2. Monats nach Zugang) – stimmt er nicht zu, muss der Vermieter auf Zustimmung <strong>klagen</strong>.</p>

        <h3>Modernisierungsmieterhöhung (§ 559 BGB)</h3>
        <ul>
          <li>Nach Modernisierung (Energieeinsparung, Wohnwertverbesserung, neuer Wohnraum): <strong>8 % der Modernisierungskosten</strong> pro Jahr auf die Miete umlegbar.</li>
          <li><strong>Kappung:</strong> maximal 3 €/m² in 6 Jahren (2 €/m², wenn die Miete unter 7 €/m² liegt).</li>
          <li>Erhaltungsaufwand (Reparaturen) ist <strong>herauszurechnen</strong> – nur echte Verbesserungen zählen.</li>
          <li>Ankündigungspflicht: 3 Monate vorher in Textform.</li>
        </ul>

        <h3>Mietpreisbremse (§ 556d BGB)</h3>
        <p>In Gebieten mit angespanntem Wohnungsmarkt (Landesverordnung) darf die Miete bei <strong>Wiedervermietung</strong> höchstens <strong>10 % über der ortsüblichen Vergleichsmiete</strong> liegen. Wichtige Ausnahmen:</p>
        <ul>
          <li><strong>Neubau</strong> (erstmals nach dem 1.10.2014 genutzt und vermietet)</li>
          <li><strong>Umfassend modernisierte</strong> Wohnungen (Investition ≥ ⅓ Neubaukosten)</li>
          <li><strong>Vormiete:</strong> War die Vormiete schon höher, darf sie wieder verlangt werden.</li>
        </ul>

        <h3>Kündigung</h3>
        <div class="table-wrap"><table>
          <tr><th>Wer kündigt?</th><th>Frist</th><th>Voraussetzung</th></tr>
          <tr><td>Mieter</td><td>immer 3 Monate</td><td>kein Grund nötig</td></tr>
          <tr><td>Vermieter</td><td>3 Monate; nach 5 Jahren 6, nach 8 Jahren 9 Monate</td><td><strong>berechtigtes Interesse</strong> nötig (§ 573 BGB): v. a. Eigenbedarf, erhebliche Pflichtverletzung, Verwertungskündigung</td></tr>
          <tr><td>Fristlos (beide)</td><td>sofort</td><td>wichtiger Grund, z. B. Zahlungsverzug mit 2 Monatsmieten</td></tr>
        </table></div>
        <ul>
          <li><strong>Eigenbedarf:</strong> für sich, Familienangehörige oder Haushaltsangehörige – vorgeschobener Eigenbedarf macht schadensersatzpflichtig.</li>
          <li><strong>Schonfristzahlung:</strong> Zahlt der Mieter binnen 2 Monaten nach Zustellung der Räumungsklage alle Rückstände, wird die <em>fristlose</em> Kündigung unwirksam.</li>
          <li><strong>Kündigungssperrfrist nach Umwandlung (§ 577a BGB):</strong> Wird vermieteter Wohnraum in Wohnungseigentum umgewandelt und verkauft, ist Eigenbedarfskündigung frühestens nach 3 Jahren möglich (Länder können bis 10 Jahre verlängern). Außerdem: <strong>Vorkaufsrecht des Mieters</strong> (§ 577 BGB) bei der ersten Veräußerung nach Umwandlung.</li>
          <li>Merke außerdem: <strong>„Kauf bricht nicht Miete"</strong> (§ 566 BGB) – der Erwerber tritt in bestehende Mietverträge ein.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Beim Verkauf vermieteter Wohnungen sind das die Käuferfragen: aktuelle Miete vs. Marktmiete (Potenzial?), Mietvertrag & Nachträge, Mietzahlungshistorie, Kaution, laufende Streitigkeiten, Sperrfristen nach Umwandlung. Wer hier vorbereitete Antworten liefert, verkauft an Investoren deutlich leichter.
        </div>
      `,
    },
    {
      id: 'betriebskosten',
      title: 'Betriebskosten & Abrechnung',
      teaser: 'BetrKV, Heizkostenverordnung, CO₂-Kostenaufteilung, Fristen',
      lesson: `
        <p>Die Betriebskostenabrechnung ist das häufigste Streitthema zwischen Mietern und Vermietern – und ein Feld, auf dem eine gute Verwaltung Kompetenz zeigt.</p>

        <h3>Was sind Betriebskosten?</h3>
        <ul>
          <li>Definiert in der <strong>Betriebskostenverordnung (BetrKV)</strong>: laufende Kosten, die durch das Eigentum oder den bestimmungsgemäßen Gebrauch entstehen – <strong>17 Positionen</strong>, u. a. Grundsteuer, Wasser, Heizung, Aufzug, Straßenreinigung/Müll, Gebäudereinigung, Gartenpflege, Beleuchtung, Schornsteinfeger, Versicherungen, Hauswart, Gemeinschaftsantenne/Breitband, „sonstige Betriebskosten".</li>
          <li>Umlage nur, wenn im Mietvertrag <strong>vereinbart</strong> (Verweis auf BetrKV genügt).</li>
          <li><strong>Nicht umlagefähig:</strong> Verwaltungskosten, Instandhaltung/Reparaturen, Bankgebühren, Leerstandskosten (trägt der Eigentümer!).</li>
        </ul>
        <div class="box box-warn">
          <span class="box-title">⚠️ Prüfungsklassiker</span>
          Reparatur des Aufzugs = Instandhaltung → <strong>nicht</strong> umlagefähig. Wartung des Aufzugs = Betriebskosten → umlagefähig. Dieselbe Logik gilt bei Heizung (Wartung ja, Reparatur nein) und Garten (Pflege ja, Neuanlage nein).
        </div>

        <h3>Fristen & Formalien (§ 556 BGB)</h3>
        <ul>
          <li>Abrechnungszeitraum: max. <strong>12 Monate</strong>.</li>
          <li><strong>Abrechnungsfrist: 12 Monate</strong> nach Ende des Abrechnungszeitraums muss die Abrechnung beim Mieter sein – danach sind <strong>Nachforderungen ausgeschlossen</strong> (Guthaben des Mieters bleiben!).</li>
          <li>Einwendungsfrist des Mieters: <strong>12 Monate</strong> nach Zugang der Abrechnung.</li>
          <li>Verteilerschlüssel: vereinbart (Wohnfläche, Personen, Verbrauch, MEA) – ohne Vereinbarung gilt <strong>Wohnfläche</strong> (§ 556a BGB).</li>
          <li>Grundsatz der <strong>Wirtschaftlichkeit</strong>: Der Vermieter muss auf ein angemessenes Kosten-Nutzen-Verhältnis achten.</li>
        </ul>

        <h3>Heizkostenverordnung (HeizKV)</h3>
        <ul>
          <li>Pflicht zur <strong>verbrauchsabhängigen</strong> Abrechnung: <strong>50–70 % nach Verbrauch</strong>, Rest nach Fläche.</li>
          <li>Verstößt der Vermieter (keine Verbrauchserfassung), darf der Mieter <strong>15 % kürzen</strong>.</li>
          <li>Seit 2022: fernablesbare Zähler → Pflicht zu <strong>monatlichen Verbrauchsinformationen</strong> während der Heizperiode.</li>
        </ul>

        <h3>CO₂-Kostenaufteilung (CO2KostAufG, seit 2023)</h3>
        <p>Die CO₂-Abgabe auf Heizbrennstoffe wird bei Wohngebäuden nach einem <strong>10-Stufenmodell</strong> zwischen Mieter und Vermieter aufgeteilt: Je <strong>schlechter</strong> der energetische Zustand des Gebäudes (CO₂-Ausstoß je m²), desto <strong>höher der Vermieteranteil</strong> (bis zu 95 % beim schlechtesten Standard; bei sehr effizienten Gebäuden trägt der Mieter alles).</p>

        <div class="box box-example">
          <span class="box-title">💡 Beispiel Abrechnungslogik</span>
          Haus mit 800 m² Gesamtwohnfläche, Gesamtkosten Grundsteuer 2.400 €. Wohnung mit 80 m²:<br>
          Anteil = 80 ÷ 800 = 10 % → <strong>240 €</strong>. So funktioniert jede flächenbasierte Position: Gesamtkosten × (eigene Fläche ÷ Gesamtfläche).
        </div>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Die häufigsten Abrechnungsfehler: falscher Verteilerschlüssel, umgelegte Verwaltungs-/Instandhaltungskosten, Fristversäumnis, fehlende Vorauszahlungs-Gutschrift. Als Verwalter: Abrechnung so aufbauen, dass ein Laie sie nachrechnen kann – das reduziert Rückfragen um 80 %.
        </div>
      `,
    },
    {
      id: 'technisch',
      title: 'Technisches Gebäudemanagement & Instandhaltung',
      teaser: 'Wartung, Verkehrssicherung, Rücklagenplanung, GEG-Pflichten',
      lesson: `
        <p>Gebäude sind Maschinen mit Lebenszyklen. Wer Instandhaltung nur reaktiv betreibt („reparieren, wenn kaputt"), zahlt am Ende drauf – professionelles Gebäudemanagement plant vorausschauend.</p>

        <h3>Begriffe sauber trennen</h3>
        <div class="table-wrap"><table>
          <tr><th>Begriff</th><th>Bedeutung</th><th>Beispiel</th></tr>
          <tr><td><strong>Instandhaltung/Wartung</strong></td><td>Erhalt des Soll-Zustands, vorbeugend</td><td>Heizungswartung, Dachrinnenreinigung</td></tr>
          <tr><td><strong>Instandsetzung</strong></td><td>Reparatur, Wiederherstellung</td><td>Defekte Therme ersetzen</td></tr>
          <tr><td><strong>Modernisierung</strong></td><td>Verbesserung über Soll-Zustand hinaus</td><td>Dämmung, neue Bäder, PV-Anlage</td></tr>
          <tr><td><strong>Sanierung</strong></td><td>umfassende Erneuerung bei Schäden/Mängeln</td><td>Kernsanierung, Schadstoffsanierung</td></tr>
        </table></div>
        <p>Warum wichtig? Mietrechtlich (nur Modernisierung ist umlagefähig, § 559 BGB), steuerlich (Erhaltungsaufwand sofort absetzbar, Herstellungskosten nur über AfA) und in der WEG (Kostenverteilung).</p>

        <h3>Verkehrssicherungspflicht</h3>
        <p>Eigentümer (bzw. beauftragte Verwalter) müssen Gefahren vom Grundstück abwenden: <strong>Winterdienst</strong>, Baumkontrolle, sichere Wege/Beleuchtung, Spielplatzprüfung, Türen/Tore. Verletzungen führen zu Schadensersatz – Dokumentation der Kontrollen ist Pflichtprogramm einer guten Verwaltung.</p>

        <h3>Wiederkehrende Prüfungen & Wartungen (Auswahl)</h3>
        <ul>
          <li><strong>Heizung:</strong> jährliche Wartung; Schornsteinfeger-Kehr- und Prüftermine.</li>
          <li><strong>Trinkwasser/Legionellen:</strong> zentrale Warmwasserbereitung in vermieteten Mehrfamilienhäusern → Untersuchung alle <strong>3 Jahre</strong> (Trinkwasserverordnung).</li>
          <li><strong>Aufzüge:</strong> wiederkehrende Prüfung durch zugelassene Überwachungsstelle (i. d. R. jährlich; Hauptprüfung alle 2 Jahre), Notrufsystem.</li>
          <li><strong>Rauchwarnmelder:</strong> in allen Bundesländern Pflicht (Einbau; Wartung je nach Land Mieter- oder Vermietersache).</li>
        </ul>

        <h3>GEG – Gebäudeenergiegesetz in der Verwaltungspraxis</h3>
        <ul>
          <li><strong>65 %-EE-Pflicht</strong> für neu eingebaute Heizungen – in Neubaugebieten sofort, im Bestand gekoppelt an die <strong>kommunale Wärmeplanung</strong> (Großstädte bis Mitte 2026, übrige bis Mitte 2028). Bis dahin Übergangsregeln, Havariefälle haben Fristen.</li>
          <li>Betriebsverbot für sehr alte Öl-/Gas-Konstanttemperaturkessel (<strong>älter als 30 Jahre</strong>, Ausnahmen u. a. Niedertemperatur-/Brennwert und selbstnutzende Eigentümer seit 2002).</li>
          <li>Pflichten im Bestand: Dämmung oberste Geschossdecke, Dämmung zugänglicher Heizungsrohre, <strong>hydraulischer Abgleich</strong> und Heizungsprüfung bei größeren Gebäuden mit Gasheizung.</li>
          <li><strong>Energieausweis:</strong> bei Verkauf/Vermietung vorlegen; Kennwerte gehören schon in die Immobilienanzeige!</li>
        </ul>

        <h3>Rücklagenplanung</h3>
        <div class="box box-formula">
          Faustwerte Erhaltungsrücklage: ca. 0,8–1,2 €/m² Wohnfläche pro Monat – mehr bei älteren Gebäuden, Aufzug, Tiefgarage
        </div>
        <p>Professioneller ist ein <strong>Instandhaltungsplan über 10–15 Jahre</strong>: Restlebensdauern der Bauteile (Dach ~40–60 J., Heizung ~20 J., Fenster ~30–40 J., Aufzug ~25 J.) erfassen, Kosten schätzen, Rücklage danach bemessen. So vermeidest du die gefürchteten Sonderumlagen.</p>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp für Makler</span>
          Beim Verkauf einer ETW ist die Rücklage pro MEA plus anstehende Maßnahmen die halbe Preisverhandlung: Eine WEG mit 5.000 € Rücklage und anstehender Dachsanierung für 300.000 € bedeutet für den Käufer eine kommende Sonderumlage – das musst du kennen, bevor es der Käufer-Anwalt findet.
        </div>
      `,
    },
  ],

  quiz: [
    // weg-grundlagen
    { sub: 'weg-grundlagen', q: 'Aus welchen drei Elementen besteht Wohnungseigentum?',
      options: ['Sondereigentum + Miteigentumsanteil + Mitgliedschaft in der GdWE', 'Wohnung + Keller + Stellplatz', 'Grundbuch + Kaufvertrag + Teilungserklärung', 'Sondereigentum + Nießbrauch + Hausgeld'], correct: 0,
      explain: 'Wohnungseigentum ist die untrennbare Verbindung von Sondereigentum, Miteigentumsanteil am Gemeinschaftseigentum und Mitgliedschaft in der rechtsfähigen Gemeinschaft.' },
    { sub: 'weg-grundlagen', q: 'Wozu gehören die Fenster einer Eigentumswohnung?',
      options: ['Zum Gemeinschaftseigentum', 'Zum Sondereigentum', 'Je zur Hälfte', 'Zum Eigentum des Mieters'], correct: 0,
      explain: 'Fenster (Konstruktion und Außenseite) sind zwingend Gemeinschaftseigentum – ihr Austausch ist grundsätzlich Sache der Gemeinschaft. Ein Klassiker!' },
    { sub: 'weg-grundlagen', q: 'Was regelt die Gemeinschaftsordnung?',
      options: ['Das „Innenrecht" der WEG: Stimmrechte, Kostenverteilung, Nutzungsregeln', 'Die Hausordnung für Mieter', 'Die Miethöhe', 'Das Baurecht der Kommune'], correct: 0,
      explain: 'Die Gemeinschaftsordnung ist das „Grundgesetz" der WEG und kann von den gesetzlichen Regeln abweichen – deshalb beim Wohnungskauf immer lesen!' },
    { sub: 'weg-grundlagen', q: 'Welche Unterlagen sollte ein Makler beim ETW-Verkauf standardmäßig beschaffen?',
      options: ['Teilungserklärung, letzte 3 Versammlungsprotokolle, Jahresabrechnung, Wirtschaftsplan, Rücklagenstand', 'Nur den Grundbuchauszug', 'Nur den Energieausweis', 'Personalausweis des Verwalters'], correct: 0,
      explain: 'Käufer und finanzierende Banken verlangen genau dieses Paket. Die Protokolle verraten zudem geplante Maßnahmen und Konflikte.' },
    { sub: 'weg-grundlagen', q: 'Was bedeutet eine sehr niedrige Erhaltungsrücklage für einen Wohnungskäufer?',
      options: ['Risiko von Sonderumlagen bei anstehenden Sanierungen', 'Niedrigeres Hausgeld für immer', 'Gar nichts', 'Die Wohnung ist automatisch günstiger zu finanzieren'], correct: 0,
      explain: 'Ist nichts angespart, müssen Sanierungen über Sonderumlagen finanziert werden – ein zentraler Punkt der Kaufprüfung.' },
    { sub: 'weg-grundlagen', q: 'Der Balkon einer ETW: Wie ist die Eigentumslage?',
      options: ['Raum sondereigentumsfähig, konstruktive Teile (Platte, Abdichtung, Brüstung) Gemeinschaftseigentum', 'Komplett Sondereigentum', 'Komplett Gemeinschaftseigentum', 'Eigentum der Hausverwaltung'], correct: 0,
      explain: 'Deshalb zahlt die Sanierung der Balkonabdichtung i. d. R. die Gemeinschaft – während der Bodenbelag Sache des Eigentümers ist.' },
    { sub: 'weg-grundlagen', q: 'Was ist die Abgeschlossenheitsbescheinigung?',
      options: ['Die Bestätigung der Baubehörde, dass Wohnungen baulich abgeschlossen sind – Voraussetzung der Aufteilung', 'Die Abnahme des Notars', 'Der Nachweis der Fertigstellung des Rohbaus', 'Eine Bescheinigung über abgeschlossene Mietverträge'], correct: 0,
      explain: 'Ohne Abgeschlossenheitsbescheinigung und Aufteilungsplan keine Teilungserklärung nach § 8 WEG.' },
    { sub: 'weg-grundlagen', q: 'Nach welchem Schlüssel werden Kosten in der WEG verteilt, wenn nichts anderes vereinbart ist?',
      options: ['Nach Miteigentumsanteilen', 'Nach Wohnfläche', 'Nach Personenzahl', 'Nach Verbrauch'], correct: 0,
      explain: 'Gesetzlicher Grundschlüssel sind die MEA (§ 16 Abs. 2 WEG); die Gemeinschaftsordnung oder Beschlüsse können abweichen.' },
    { sub: 'weg-grundlagen', q: 'Was bedeutet eine Veräußerungszustimmung nach § 12 WEG in der Teilungserklärung?',
      options: ['Der Verkauf braucht die Zustimmung des Verwalters (oder anderer Eigentümer)', 'Der Käufer muss von der Versammlung gewählt werden', 'Verkäufe sind ganz ausgeschlossen', 'Nur Barzahlung ist erlaubt'], correct: 0,
      explain: 'Ohne die Zustimmung wird das Eigentum nicht umgeschrieben – als Makler früh prüfen und beim Verwalter anfordern, sonst verzögert sich der Vollzug.' },

    // versammlung
    { sub: 'versammlung', q: 'Wie lang ist die Einberufungsfrist für die Eigentümerversammlung seit dem WEMoG?',
      options: ['3 Wochen', '1 Woche', '2 Monate', '3 Tage'], correct: 0,
      explain: 'Seit 1.12.2020 gilt eine Frist von mindestens 3 Wochen; Textform (z. B. E-Mail) genügt.' },
    { sub: 'versammlung', q: 'Wann ist eine Eigentümerversammlung beschlussfähig?',
      options: ['Immer – unabhängig von der Zahl der Anwesenden (seit WEMoG)', 'Ab 50 % der Miteigentumsanteile', 'Ab 75 % der Eigentümer', 'Nur wenn der Beirat anwesend ist'], correct: 0,
      explain: 'Das alte Quorum ist abgeschafft: Auch wenige Erschienene können wirksam beschließen – Nichterscheinen heißt Einfluss verlieren.' },
    { sub: 'versammlung', q: 'Welche Mehrheit braucht eine bauliche Veränderung (z. B. Fassadendämmung) seit dem WEMoG?',
      options: ['Einfache Mehrheit der abgegebenen Stimmen', 'Einstimmigkeit', 'Immer ¾-Mehrheit', 'Zustimmung des Verwalters'], correct: 0,
      explain: 'Bauliche Veränderungen brauchen nur noch einfache Mehrheit – die Kostenverteilung hängt aber von der Mehrheit ab (>2/3 der Stimmen + >50 % MEA oder Amortisation → alle zahlen).' },
    { sub: 'versammlung', q: 'Auf welche Maßnahmen hat jeder Eigentümer einen Anspruch (privilegierte Maßnahmen, § 20 Abs. 2 WEG)?',
      options: ['Wallbox, Barrierefreiheit, Einbruchsschutz, Glasfaser, Steckersolargeräte', 'Pool, Sauna, Wintergarten', 'Dachausbau und Aufstockung', 'Zusammenlegung von Wohnungen'], correct: 0,
      explain: 'Bei diesen Maßnahmen entscheidet die Gemeinschaft nur über das „Wie", nicht das „Ob" – Kosten trägt der Eigentümer selbst. Balkonkraftwerke sind seit 2024 dabei.' },
    { sub: 'versammlung', q: 'Binnen welcher Frist muss ein Beschluss angefochten werden?',
      options: ['Klage binnen 1 Monat, Begründung binnen 2 Monaten – beim Amtsgericht', 'Binnen 1 Woche beim Verwalter', 'Binnen 6 Monaten beim Landgericht', 'Anfechtung ist nicht möglich'], correct: 0,
      explain: 'Anfechtungsklage: 1 Monat ab Beschlussfassung ans Amtsgericht der Wohnanlage. Bis zur Entscheidung bleibt der Beschluss wirksam (außer bei Nichtigkeit).' },
    { sub: 'versammlung', q: 'Wie lange darf ein WEG-Verwalter maximal bestellt werden?',
      options: ['5 Jahre, bei Erstbestellung nach Begründung der WEG 3 Jahre', 'Unbegrenzt', '10 Jahre', '1 Jahr'], correct: 0,
      explain: 'Bestellung max. 5 Jahre (Wiederbestellung möglich), bei der ersten Bestellung nach Entstehen der WEG max. 3 Jahre.' },
    { sub: 'versammlung', q: 'Was ist der „zertifizierte Verwalter" nach § 26a WEG?',
      options: ['Ein Verwalter mit IHK-Prüfung – jeder Eigentümer kann die Bestellung eines solchen verlangen', 'Ein staatlich bestellter Zwangsverwalter', 'Ein Verwalter mit Meistertitel', 'Ein vereidigter Sachverständiger'], correct: 0,
      explain: 'Seit 1.12.2023 gehört die Bestellung eines zertifizierten Verwalters (IHK-Prüfung) zur ordnungsmäßigen Verwaltung; Ausnahmen gelten für kleine Selbstverwalter-Gemeinschaften.' },
    { sub: 'versammlung', q: 'Welche gewerberechtliche Pflicht trifft Wohnimmobilienverwalter?',
      options: ['Erlaubnis nach § 34c GewO + Weiterbildungspflicht 20 Stunden in 3 Jahren', 'Meisterpflicht', 'Zulassung durch das Amtsgericht', 'Keine – Verwaltung ist erlaubnisfrei'], correct: 0,
      explain: 'Wohnimmobilienverwalter brauchen die 34c-Erlaubnis (mit Berufshaftpflicht) und müssen sich – wie Makler – 20 Stunden in 3 Jahren weiterbilden.' },
    { sub: 'versammlung', q: 'Seit Oktober 2024 können rein virtuelle Eigentümerversammlungen zugelassen werden. Mit welcher Mehrheit?',
      options: ['¾ der abgegebenen Stimmen', 'Einfacher Mehrheit', 'Einstimmigkeit', 'Beschluss des Verwaltungsbeirats'], correct: 0,
      explain: 'Mit ¾-Mehrheit können Eigentümer rein virtuelle Versammlungen für max. 3 Jahre zulassen; hybride Versammlungen gehen schon mit einfacher Mehrheit.' },

    // mietmanagement
    { sub: 'mietmanagement', q: 'Wie hoch darf die Mietkaution maximal sein?',
      options: ['3 Nettokaltmieten, zahlbar in 3 Raten', '3 Warmmieten sofort', '6 Nettokaltmieten', '1 Jahresmiete'], correct: 0,
      explain: '§ 551 BGB: max. 3 Nettokaltmieten, der Mieter darf in 3 Monatsraten zahlen; Anlage getrennt vom Vermögen des Vermieters.' },
    { sub: 'mietmanagement', q: 'Was besagt die Kappungsgrenze bei Mieterhöhungen nach § 558 BGB?',
      options: ['Max. +20 % in 3 Jahren, in angespannten Märkten +15 %', 'Max. +5 % pro Jahr', 'Max. +50 % in 10 Jahren', 'Es gibt keine Grenze'], correct: 0,
      explain: 'Selbst wenn die Vergleichsmiete mehr hergäbe: In 3 Jahren darf die Miete höchstens um 20 % (bzw. 15 % per Landesverordnung) steigen.' },
    { sub: 'mietmanagement', q: 'Wie viel Prozent der Modernisierungskosten dürfen jährlich auf die Miete umgelegt werden (§ 559 BGB)?',
      options: ['8 %', '11 %', '20 %', '3 %'], correct: 0,
      explain: 'Seit 2019: 8 % pro Jahr (vorher 11 %), gedeckelt auf 3 €/m² in 6 Jahren (2 €/m² bei Mieten unter 7 €/m²). Erhaltungsanteil herausrechnen!' },
    { sub: 'mietmanagement', q: 'Welche Kündigungsfrist gilt für den Mieter einer Wohnung?',
      options: ['Immer 3 Monate, unabhängig von der Wohndauer', '3, 6 oder 9 Monate je nach Wohndauer', '1 Monat', '6 Monate'], correct: 0,
      explain: 'Mieter: stets 3 Monate ohne Grund. Nur die VERMIETER-Frist verlängert sich mit der Wohndauer (3/6/9 Monate) – und der Vermieter braucht ein berechtigtes Interesse.' },
    { sub: 'mietmanagement', q: 'Was erlaubt die Mietpreisbremse (§ 556d BGB) bei Wiedervermietung in angespannten Märkten?',
      options: ['Höchstens 10 % über der ortsüblichen Vergleichsmiete', 'Höchstens die Vormiete', 'Beliebige Miete bei Neuverträgen', 'Höchstens 20 % über Mietspiegel'], correct: 0,
      explain: 'Max. Vergleichsmiete + 10 %. Ausnahmen: Neubau (Erstnutzung nach 1.10.2014), umfassende Modernisierung, höhere Vormiete.' },
    { sub: 'mietmanagement', q: 'Wann kann eine fristlose Kündigung wegen Zahlungsverzugs ausgesprochen werden?',
      options: ['Bei Rückstand von zwei Monatsmieten (bzw. mehr als einer Miete in zwei aufeinanderfolgenden Terminen)', 'Ab einem Tag Verspätung', 'Erst nach 6 Monaten Rückstand', 'Nie – Wohnraum ist unkündbar'], correct: 0,
      explain: '§ 543 BGB. Wichtig: Die Schonfristzahlung (alle Rückstände binnen 2 Monaten nach Räumungsklage) heilt die fristlose Kündigung.' },
    { sub: 'mietmanagement', q: '„Kauf bricht nicht Miete" bedeutet…',
      options: ['Der Erwerber tritt kraft Gesetzes in bestehende Mietverträge ein (§ 566 BGB)', 'Nach dem Kauf enden alle Mietverträge', 'Der Mieter darf nach Verkauf fristlos kündigen', 'Der Käufer darf die Miete sofort verdoppeln'], correct: 0,
      explain: 'Der neue Eigentümer übernimmt den Mietvertrag unverändert – inklusive Kaution und aller Rechte und Pflichten.' },
    { sub: 'mietmanagement', q: 'Welche Sperrfrist gilt für Eigenbedarfskündigungen nach Umwandlung in Wohnungseigentum und Verkauf (§ 577a BGB)?',
      options: ['Mindestens 3 Jahre, per Landesverordnung bis zu 10 Jahre', '6 Monate', 'Keine', '20 Jahre'], correct: 0,
      explain: 'Käufer umgewandelter, vermieteter Wohnungen können frühestens nach 3 Jahren (regional bis 10 Jahren) wegen Eigenbedarfs kündigen. Zudem hat der Mieter beim ersten Verkauf ein Vorkaufsrecht (§ 577).' },
    { sub: 'mietmanagement', q: 'Eine Mieterhöhung auf die Vergleichsmiete wird wirksam, wenn…',
      options: ['der Mieter zustimmt (oder zur Zustimmung verurteilt wird)', 'der Vermieter sie einseitig erklärt', 'der Mietspiegel veröffentlicht wird', 'die Hausverwaltung sie beschließt'], correct: 0,
      explain: '§ 558 ist ein Zustimmungsmodell: Der Mieter hat bis Ende des 2. Monats nach Zugang Zeit; ohne Zustimmung bleibt nur die Zustimmungsklage.' },

    // betriebskosten
    { sub: 'betriebskosten', q: 'Welche Kosten sind NICHT auf Mieter umlagefähig?',
      options: ['Verwaltungskosten und Instandhaltung/Reparaturen', 'Grundsteuer', 'Müllabfuhr', 'Gebäudeversicherung'], correct: 0,
      explain: 'Verwaltung, Reparaturen, Bankgebühren und Leerstandskosten trägt der Eigentümer. Grundsteuer, Müll, Versicherung & Co. stehen in der BetrKV und sind umlagefähig.' },
    { sub: 'betriebskosten', q: 'Bis wann muss die Betriebskostenabrechnung dem Mieter zugehen?',
      options: ['12 Monate nach Ende des Abrechnungszeitraums', '3 Monate nach Jahresende', '24 Monate nach Jahresende', 'Es gibt keine Frist'], correct: 0,
      explain: '§ 556 Abs. 3 BGB: Nach Ablauf der 12 Monate sind Nachforderungen des Vermieters ausgeschlossen (Mieter-Guthaben bleiben bestehen!).' },
    { sub: 'betriebskosten', q: 'Aufzug: Was ist umlagefähig?',
      options: ['Die laufende Wartung – nicht aber Reparaturen', 'Reparaturen – nicht aber Wartung', 'Beides', 'Nichts'], correct: 0,
      explain: 'Wartung/Betrieb = Betriebskosten (umlagefähig). Instandsetzung = Sache des Eigentümers. Diese Trennung gilt sinngemäß für viele Positionen.' },
    { sub: 'betriebskosten', q: 'Welcher Umlageschlüssel gilt, wenn im Mietvertrag nichts vereinbart ist?',
      options: ['Wohnfläche (§ 556a BGB); verbrauchsabhängige Kosten nach Verbrauch', 'Personenzahl', 'Miteigentumsanteile', 'Gleiche Teile je Wohnung'], correct: 0,
      explain: 'Gesetzlicher Auffangschlüssel ist die Wohnfläche; erfasster Verbrauch (Wasser, Heizung) ist verbrauchsabhängig umzulegen.' },
    { sub: 'betriebskosten', q: 'Was schreibt die Heizkostenverordnung für die Abrechnung vor?',
      options: ['50–70 % nach erfasstem Verbrauch, Rest nach Fläche', '100 % nach Fläche', '100 % nach Verbrauch', 'Frei wählbar'], correct: 0,
      explain: 'Heiz- und Warmwasserkosten müssen zu 50–70 % verbrauchsabhängig abgerechnet werden. Fehlt die Verbrauchserfassung, darf der Mieter 15 % kürzen.' },
    { sub: 'betriebskosten', q: 'Wie werden die CO₂-Kosten der Heizung seit 2023 bei Wohngebäuden verteilt?',
      options: ['Nach einem 10-Stufenmodell: je schlechter der energetische Zustand, desto höher der Vermieteranteil', 'Immer 50/50', 'Der Mieter trägt immer alles', 'Der Vermieter trägt immer alles'], correct: 0,
      explain: 'CO2KostAufG: Bei sehr ineffizienten Gebäuden trägt der Vermieter bis zu 95 %, bei sehr effizienten der Mieter 100 % – ein Anreiz zur Sanierung.' },
    { sub: 'betriebskosten', q: 'Haus mit 1.000 m² Wohnfläche, Grundsteuer gesamt 3.000 €. Wohnung mit 75 m² – welcher Anteil?',
      options: ['225 €', '300 €', '75 €', '450 €'], correct: 0,
      explain: '75/1.000 = 7,5 % → 3.000 × 0,075 = 225 €. Flächenschlüssel: Gesamtkosten × (eigene Fläche ÷ Gesamtfläche).' },
    { sub: 'betriebskosten', q: 'Wie lange kann der Mieter Einwendungen gegen die Abrechnung erheben?',
      options: ['12 Monate nach Zugang der Abrechnung', '2 Wochen', '6 Jahre', 'Unbegrenzt'], correct: 0,
      explain: 'Nach Ablauf der 12-Monats-Frist ist der Mieter mit Einwendungen ausgeschlossen (§ 556 Abs. 3 S. 5 BGB) – die Frist gilt in beide Richtungen fair.' },

    // technisch
    { sub: 'technisch', q: 'Worin unterscheiden sich Instandhaltung und Modernisierung?',
      options: ['Instandhaltung erhält den Soll-Zustand, Modernisierung verbessert darüber hinaus', 'Es gibt keinen Unterschied', 'Modernisierung ist billiger', 'Instandhaltung betrifft nur Neubauten'], correct: 0,
      explain: 'Die Trennung ist mietrechtlich (nur Modernisierung nach § 559 umlagefähig) und steuerlich entscheidend (Erhaltungsaufwand sofort absetzbar).' },
    { sub: 'technisch', q: 'Was gehört zur Verkehrssicherungspflicht eines Eigentümers?',
      options: ['Winterdienst, Baumkontrolle, sichere Wege und Beleuchtung – dokumentiert', 'Nur die Heizungswartung', 'Die Bewachung des Grundstücks rund um die Uhr', 'Nichts – Besucher betreten das Grundstück auf eigene Gefahr'], correct: 0,
      explain: 'Wer Gefahrenquellen beherrscht, muss Dritte schützen. Verstöße führen zu Schadensersatz – die Dokumentation der Kontrollen ist im Streit die Rettung.' },
    { sub: 'technisch', q: 'Wie oft muss in vermieteten MFH mit zentraler Warmwasserbereitung auf Legionellen untersucht werden?',
      options: ['Alle 3 Jahre', 'Jährlich', 'Alle 10 Jahre', 'Nie'], correct: 0,
      explain: 'Trinkwasserverordnung: Großanlagen zur Trinkwassererwärmung in vermieteten Objekten → Untersuchungspflicht alle 3 Jahre.' },
    { sub: 'technisch', q: 'Welcher Faustwert gilt für die Erhaltungsrücklage?',
      options: ['Ca. 0,8–1,2 €/m² Wohnfläche pro Monat, mehr bei Alter/Aufzug/Tiefgarage', '10 €/m² pro Monat', '0,05 €/m² pro Monat', 'Rücklagen sind unnötig'], correct: 0,
      explain: 'Professioneller als Faustwerte ist ein 10–15-Jahres-Instandhaltungsplan nach Bauteil-Lebensdauern – aber die Größenordnung solltest du parat haben.' },
    { sub: 'technisch', q: 'Was verlangt das GEG beim Einbau neuer Heizungen?',
      options: ['65 % erneuerbare Energien – in Neubaugebieten sofort, im Bestand gekoppelt an die kommunale Wärmeplanung', 'Sofortiges Verbot aller Gasheizungen', 'Nur noch Wärmepumpen', 'Keine Vorgaben'], correct: 0,
      explain: 'Die 65 %-EE-Pflicht greift im Bestand erst mit der kommunalen Wärmeplanung (Großstädte Mitte 2026, sonst Mitte 2028); es gibt Übergangsfristen und Technologieoptionen.' },
    { sub: 'technisch', q: 'Ein 32 Jahre alter Öl-Konstanttemperaturkessel…',
      options: ['unterliegt grundsätzlich dem Betriebsverbot (30-Jahre-Regel des GEG)', 'darf unbegrenzt weiterlaufen', 'muss nur gewartet werden', 'darf nur im Sommer laufen'], correct: 0,
      explain: 'Konstanttemperaturkessel über 30 Jahre sind stillzulegen (Ausnahmen u. a. Niedertemperatur-/Brennwerttechnik, bestimmte Selbstnutzer).' },
    { sub: 'technisch', q: 'Warum ist die Unterscheidung Erhaltungsaufwand vs. Herstellungskosten steuerlich wichtig?',
      options: ['Erhaltungsaufwand ist sofort absetzbar, Herstellungskosten nur über die AfA verteilt', 'Beides ist nicht absetzbar', 'Herstellungskosten sind sofort absetzbar', 'Nur Neubauten dürfen abschreiben'], correct: 0,
      explain: 'Reparaturen mindern sofort die Steuer; wesentliche Verbesserungen erhöhen die AfA-Bemessungsgrundlage und wirken über Jahrzehnte. (Achtung: anschaffungsnahe Herstellungskosten – >15 % der Gebäudekosten in 3 Jahren!)' },
    { sub: 'technisch', q: 'Welche Lebensdauer-Größenordnung hat eine Heizungsanlage?',
      options: ['Rund 20 Jahre', '5 Jahre', '60 Jahre', '100 Jahre'], correct: 0,
      explain: 'Heizung ~20 J., Fenster ~30–40 J., Dach ~40–60 J., Aufzug ~25 J. – Grundlage jeder seriösen Instandhaltungs- und Rücklagenplanung.' },
  ],

  cards: [
    { sub: 'weg-grundlagen', front: 'Die 3 Bestandteile des Wohnungseigentums?', back: '1. Sondereigentum an der Wohnung\n2. Miteigentumsanteil (MEA) am Gemeinschaftseigentum\n3. Mitgliedschaft in der rechtsfähigen Gemeinschaft der Wohnungseigentümer (GdWE)' },
    { sub: 'weg-grundlagen', front: 'Sind Fenster Sonder- oder Gemeinschaftseigentum?', back: 'Gemeinschaftseigentum (Konstruktion + Außenanstrich) – auch wenn sie „zur Wohnung gehören". Austausch ist Sache der Gemeinschaft.' },
    { sub: 'weg-grundlagen', front: 'Was gehört zwingend zum Gemeinschaftseigentum?', back: 'Grundstück, Dach, Fassade, tragende Wände, Fenster, Treppenhaus, Aufzug, zentrale Leitungen/Heizung – alles, was für Bestand und Sicherheit des Gebäudes nötig ist.' },
    { sub: 'weg-grundlagen', front: 'Teilungserklärung (§ 8 WEG) – Bestandteile?', back: 'Aufteilung in MEA + Sondereigentum, mit Aufteilungsplan und Abgeschlossenheitsbescheinigung. Ergänzt durch die Gemeinschaftsordnung („Grundgesetz" der WEG).' },
    { sub: 'weg-grundlagen', front: 'Unterschied Wohnungseigentum / Teileigentum?', back: 'Wohnungseigentum: Sondereigentum an Wohnräumen.\nTeileigentum: Sondereigentum an nicht zu Wohnzwecken dienenden Räumen (Laden, Büro, Garage).' },
    { sub: 'weg-grundlagen', front: 'Wirtschaftsplan vs. Jahresabrechnung?', back: 'Wirtschaftsplan: Vorschau → monatliches Hausgeld.\nJahresabrechnung: Nachschau → beschlossen werden die Abrechnungsspitzen (Nachschüsse).' },
    { sub: 'weg-grundlagen', front: 'Erhaltungsrücklage – Zweck und Warnsignal?', back: 'Angespartes Geld der WEG für große Maßnahmen (Dach, Heizung, Fassade). Zu niedrige Rücklage + Sanierungsstau = Risiko von Sonderumlagen → wichtiger Punkt bei Kaufprüfung.' },
    { sub: 'versammlung', front: 'Einberufungsfrist Eigentümerversammlung?', back: 'Mindestens 3 Wochen (seit WEMoG 2020), Textform genügt. Mindestens 1 Versammlung pro Jahr.' },
    { sub: 'versammlung', front: 'Beschlussfähigkeit der Versammlung seit WEMoG?', back: 'Immer beschlussfähig – unabhängig von der Zahl der anwesenden/vertretenen Eigentümer. Das alte 50 %-Quorum ist abgeschafft.' },
    { sub: 'versammlung', front: 'Privilegierte bauliche Maßnahmen (§ 20 Abs. 2 WEG)?', back: 'Anspruch jedes Eigentümers (auf eigene Kosten): Wallbox/E-Laden, Barrierefreiheit, Einbruchsschutz, Glasfaser, Steckersolargeräte (Balkonkraftwerk, seit 2024).' },
    { sub: 'versammlung', front: 'Frist zur Beschlussanfechtung?', back: 'Klage: 1 Monat ab Beschluss.\nBegründung: 2 Monate.\nZuständig: Amtsgericht am Ort der Anlage. Beschluss bleibt bis zur Entscheidung wirksam (außer nichtig).' },
    { sub: 'versammlung', front: 'Maximale Bestellungsdauer des Verwalters?', back: '5 Jahre; bei Erstbestellung nach Begründung der WEG max. 3 Jahre. Daneben steht der schuldrechtliche Verwaltervertrag.' },
    { sub: 'versammlung', front: 'Zertifizierter Verwalter (§ 26a WEG)?', back: 'IHK-geprüfter Verwalter. Seit 1.12.2023 kann jeder Eigentümer die Bestellung eines zertifizierten Verwalters verlangen (Ausnahme: Kleinanlagen unter 9 Einheiten mit Eigentümer-Verwalter).' },
    { sub: 'versammlung', front: 'Kostenverteilung bei baulichen Veränderungen (§ 21 WEG)?', back: 'Grundsatz: Es zahlen die Eigentümer, die zugestimmt haben.\nAlle zahlen bei: Beschluss mit >2/3 der Stimmen und >50 % der MEA, oder wenn sich die Maßnahme in angemessener Zeit amortisiert.' },
    { sub: 'mietmanagement', front: 'Maximale Mietkaution?', back: '3 Nettokaltmieten (§ 551 BGB), zahlbar in 3 Monatsraten, getrennt und insolvenzfest anzulegen.' },
    { sub: 'mietmanagement', front: 'Kappungsgrenze § 558 BGB?', back: 'Mieterhöhung bis zur ortsüblichen Vergleichsmiete, aber max. +20 % innerhalb von 3 Jahren; in angespannten Märkten (Landesverordnung) +15 %.' },
    { sub: 'mietmanagement', front: 'Modernisierungsumlage § 559 BGB?', back: '8 % der (um Erhaltungsanteile bereinigten) Modernisierungskosten pro Jahr; Kappung: max. 3 €/m² in 6 Jahren (2 €/m² bei Miete < 7 €/m²); Ankündigung 3 Monate vorher.' },
    { sub: 'mietmanagement', front: 'Kündigungsfristen Wohnraum?', back: 'Mieter: immer 3 Monate.\nVermieter: 3 Monate, ab 5 Jahren 6, ab 8 Jahren 9 Monate – und nur mit berechtigtem Interesse (§ 573 BGB, v. a. Eigenbedarf).' },
    { sub: 'mietmanagement', front: 'Mietpreisbremse § 556d BGB – Regel & Ausnahmen?', back: 'Wiedervermietung in angespannten Märkten: max. Vergleichsmiete + 10 %.\nAusnahmen: Neubau (Erstnutzung nach 1.10.2014), umfassende Modernisierung, höhere Vormiete.' },
    { sub: 'mietmanagement', front: 'Schonfristzahlung?', back: 'Zahlt der Mieter alle Rückstände binnen 2 Monaten nach Zustellung der Räumungsklage, wird die fristlose Kündigung wegen Zahlungsverzugs unwirksam (die ordentliche kann bestehen bleiben!).' },
    { sub: 'mietmanagement', front: '§ 566 BGB – Stichwort?', back: '„Kauf bricht nicht Miete": Der Erwerber tritt kraft Gesetzes in alle Rechte und Pflichten des bestehenden Mietvertrags ein.' },
    { sub: 'mietmanagement', front: 'Mieterschutz bei Umwandlung in Eigentumswohnungen?', back: '1. Vorkaufsrecht des Mieters beim ersten Verkauf (§ 577 BGB).\n2. Kündigungssperrfrist für Eigenbedarf: mind. 3 Jahre, regional bis 10 Jahre (§ 577a BGB).' },
    { sub: 'betriebskosten', front: 'Nicht umlagefähige Kosten?', back: 'Verwaltungskosten, Instandhaltung/Instandsetzung, Bankgebühren, Leerstandskosten – trägt immer der Eigentümer.' },
    { sub: 'betriebskosten', front: 'Abrechnungs- und Einwendungsfrist bei Betriebskosten?', back: 'Vermieter: Abrechnung binnen 12 Monaten nach Ende des Zeitraums (sonst keine Nachforderung).\nMieter: Einwendungen binnen 12 Monaten nach Zugang.' },
    { sub: 'betriebskosten', front: 'HeizKV – Verteilungsregel?', back: '50–70 % nach erfasstem Verbrauch, Rest nach Wohn-/Nutzfläche. Ohne Verbrauchserfassung: 15 % Kürzungsrecht des Mieters.' },
    { sub: 'betriebskosten', front: 'CO2KostAufG – Grundprinzip?', back: '10-Stufenmodell bei Wohngebäuden: je höher der CO₂-Ausstoß pro m² (schlechter energetischer Zustand), desto größer der Vermieteranteil an den CO₂-Kosten (bis 95 %).' },
    { sub: 'betriebskosten', front: 'Standard-Umlageschlüssel ohne Vereinbarung?', back: 'Wohnfläche (§ 556a BGB); verbrauchs­erfasste Kosten (Wasser, Heizung) nach Verbrauch.' },
    { sub: 'technisch', front: 'Instandhaltung / Instandsetzung / Modernisierung / Sanierung?', back: 'Instandhaltung: vorbeugender Erhalt (Wartung).\nInstandsetzung: Reparatur.\nModernisierung: Verbesserung über Soll-Zustand.\nSanierung: umfassende Erneuerung.' },
    { sub: 'technisch', front: 'Verkehrssicherungspflicht – Beispiele?', back: 'Winterdienst, Baumkontrolle, sichere Wege/Treppen/Beleuchtung, Spielplatzprüfung. Kontrollen dokumentieren – Beweislast im Schadensfall!' },
    { sub: 'technisch', front: 'Legionellenprüfung – wann Pflicht?', back: 'Zentrale Trinkwassererwärmung (Großanlage) in vermieteten Gebäuden: Untersuchung alle 3 Jahre (Trinkwasserverordnung).' },
    { sub: 'technisch', front: 'Faustwert Erhaltungsrücklage?', back: 'Ca. 0,8–1,2 €/m² Wohnfläche/Monat; besser: Instandhaltungsplan über 10–15 Jahre nach Bauteil-Lebensdauern (Heizung ~20 J., Dach ~40–60 J., Fenster ~30–40 J.).' },
    { sub: 'technisch', front: 'GEG: 65 %-EE-Pflicht – ab wann im Bestand?', back: 'Gekoppelt an die kommunale Wärmeplanung: Großstädte (>100.000 EW) Mitte 2026, übrige Kommunen Mitte 2028. Neubaugebiete: sofort. Übergangsfristen bei Heizungshavarie.' },
  ],

  cloze: [
    { sub: 'weg-grundlagen', title: 'Grundbegriffe des Wohnungseigentums',
      intro: 'Ergänze die Fachbegriffe.',
      text: 'Wohnungseigentum entsteht durch Teilung nach § 8 WEG mittels {{Teilungserklärung}} samt Aufteilungsplan und {{Abgeschlossenheitsbescheinigung}}. Jeder Eigentümer hält einen {{Miteigentumsanteil}} am gemeinschaftlichen Eigentum. Fenster und tragende Wände sind zwingend {{Gemeinschaftseigentum}}, nicht tragende Innenwände gehören zum {{Sondereigentum}}. Das interne Regelwerk der WEG heißt {{Gemeinschaftsordnung}}.' },
    { sub: 'versammlung', title: 'Versammlung & Beschluss',
      intro: 'Ergänze Fristen und Begriffe.',
      text: 'Die Eigentümerversammlung ist mit einer Frist von {{3 Wochen|drei Wochen}} einzuberufen und seit dem WEMoG unabhängig von der Anwesenheit {{beschlussfähig}}. Bauliche Veränderungen brauchen nur noch die {{einfache}} Mehrheit. Beschlüsse können binnen {{1 Monat|einem Monat}} beim {{Amtsgericht}} angefochten werden. Seit 2023 kann jeder Eigentümer einen {{zertifizierten}} Verwalter verlangen.' },
    { sub: 'mietmanagement', title: 'Mietrecht in Zahlen',
      intro: 'Ergänze die Zahlen und Begriffe.',
      text: 'Die Kaution beträgt maximal {{3|drei}} Nettokaltmieten. Mieterhöhungen sind durch die Kappungsgrenze auf {{20}} % in drei Jahren begrenzt (angespannte Märkte: {{15}} %). Nach Modernisierung dürfen jährlich {{8|acht}} % der Kosten umgelegt werden. Die Mietpreisbremse erlaubt bei Wiedervermietung höchstens {{10|zehn}} % über der ortsüblichen {{Vergleichsmiete}}.' },
    { sub: 'betriebskosten', title: 'Abrechnung sicher beherrschen',
      intro: 'Ergänze Begriffe und Fristen.',
      text: 'Umlagefähige Kosten definiert die {{Betriebskostenverordnung|BetrKV}}. Nicht umlagefähig sind {{Verwaltungskosten|Verwaltung}} und Instandhaltung. Die Abrechnung muss dem Mieter binnen {{12|zwölf}} Monaten zugehen, sonst sind {{Nachforderungen}} ausgeschlossen. Heizkosten sind zu {{50|50-70|50 bis 70}} bis 70 % nach Verbrauch abzurechnen. Ohne vereinbarten Schlüssel gilt die {{Wohnfläche}}.' },
    { sub: 'technisch', title: 'Gebäudemanagement',
      intro: 'Ergänze die Begriffe.',
      text: 'Der Erhalt des Soll-Zustands heißt {{Instandhaltung}}, die Reparatur {{Instandsetzung}}, die Verbesserung darüber hinaus {{Modernisierung}}. Winterdienst und Baumkontrolle gehören zur {{Verkehrssicherungspflicht}}. Bei zentraler Warmwasserbereitung ist alle drei Jahre eine {{Legionellenprüfung|Legionellenuntersuchung}} fällig. Der Faustwert für die Erhaltungsrücklage liegt bei rund {{1|einem}} €/m² und Monat.' },
  ],

  calc: [
    {
      sub: 'betriebskosten', title: 'Betriebskosten nach Wohnfläche umlegen',
      generate() {
        const gesamt = U.randInt(6, 20) * 100;             // Gesamtkosten Position
        const hausFl = U.randInt(40, 120) * 10;            // 400–1200 m²
        const wohnFl = U.randInt(50, 110);
        const answer = Math.round((gesamt * wohnFl / hausFl) * 100) / 100;
        return {
          text: `Die Grundsteuer eines Mietshauses beträgt <strong>${U.eur(gesamt)}</strong> pro Jahr. Gesamtwohnfläche: <strong>${U.num(hausFl, 0)} m²</strong>, die abzurechnende Wohnung hat <strong>${wohnFl} m²</strong>. Welcher Betrag entfällt auf die Wohnung? (2 Nachkommastellen)`,
          unit: '€', answer, tolerance: 0.6, decimals: 2,
          steps: [
            `Anteil: ${wohnFl} ÷ ${U.num(hausFl, 0)} = ${U.num(wohnFl / hausFl * 100, 2)} %`,
            `Kostenanteil: ${U.eur(gesamt)} × ${U.num(wohnFl / hausFl * 100, 2)} % = <strong>${U.num(answer, 2)} €</strong>`,
          ],
        };
      },
    },
    {
      sub: 'betriebskosten', title: 'Heizkosten 70/30 aufteilen',
      generate() {
        const kosten = U.randInt(80, 240) * 100;
        const verbrauchAnteil = U.pick([0.5, 0.6, 0.7]);
        const eigenerVerbrauch = U.pick([8, 10, 12, 15]);   // % des Gesamtverbrauchs
        const flaecheAnteil = U.pick([8, 10, 12]);          // % der Fläche
        const answer = Math.round(kosten * verbrauchAnteil * eigenerVerbrauch / 100 + kosten * (1 - verbrauchAnteil) * flaecheAnteil / 100);
        return {
          text: `Die Heizkosten eines Hauses betragen <strong>${U.eur(kosten)}</strong>. Laut Mietvertrag werden <strong>${verbrauchAnteil * 100} %</strong> nach Verbrauch und der Rest nach Fläche verteilt. Auf die Wohnung entfallen <strong>${eigenerVerbrauch} %</strong> des erfassten Verbrauchs und <strong>${flaecheAnteil} %</strong> der Fläche. Berechne den Heizkostenanteil der Wohnung (auf ganze Euro).`,
          unit: '€', answer, tolerance: 2, decimals: 0,
          steps: [
            `Verbrauchsanteil: ${U.eur(kosten)} × ${verbrauchAnteil * 100} % × ${eigenerVerbrauch} % = ${U.eur(Math.round(kosten * verbrauchAnteil * eigenerVerbrauch / 100))}`,
            `Flächenanteil: ${U.eur(kosten)} × ${Math.round((1 - verbrauchAnteil) * 100)} % × ${flaecheAnteil} % = ${U.eur(Math.round(kosten * (1 - verbrauchAnteil) * flaecheAnteil / 100))}`,
            `Summe: <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
    {
      sub: 'mietmanagement', title: 'Kappungsgrenze prüfen',
      generate() {
        const alt = U.randInt(60, 110) * 10;                // aktuelle Miete
        const kappung = U.pick([15, 20]);
        const answer = Math.round(alt * (1 + kappung / 100) * 100) / 100;
        return {
          text: `Die Nettokaltmiete einer Wohnung beträgt seit über 3 Jahren unverändert <strong>${U.eur(alt)}</strong>. Die ortsübliche Vergleichsmiete läge deutlich höher. Im Gebiet gilt die Kappungsgrenze von <strong>${kappung} %</strong>. Auf welchen Betrag darf die Miete höchstens erhöht werden?`,
          unit: '€', answer, tolerance: 1, decimals: 2,
          steps: [
            `Kappungsgrenze: +${kappung} % in 3 Jahren`,
            `${U.eur(alt)} × ${U.num(1 + kappung / 100, 2)} = <strong>${U.num(answer, 2)} €</strong>`,
            `Auch wenn die Vergleichsmiete höher liegt: mehr geht in 3 Jahren nicht.`,
          ],
        };
      },
    },
    {
      sub: 'mietmanagement', title: 'Modernisierungsumlage (§ 559 BGB)',
      generate() {
        const kosten = U.randInt(15, 60) * 1000;
        const erhaltung = U.randInt(10, 30);                // % Erhaltungsanteil
        const modKosten = kosten * (1 - erhaltung / 100);
        const answer = Math.round(modKosten * 0.08 / 12 * 100) / 100;
        return {
          text: `Für eine Wohnung fallen Baukosten von <strong>${U.eur(kosten)}</strong> an, davon sind <strong>${erhaltung} %</strong> reiner Erhaltungsaufwand (ohnehin fällige Reparaturen). Um wie viel Euro darf die <strong>Monatsmiete</strong> nach § 559 BGB maximal steigen (8 % jährlich, Kappung hier nicht relevant)?`,
          unit: '€', answer, tolerance: 0.6, decimals: 2,
          steps: [
            `Modernisierungskosten: ${U.eur(kosten)} × (1 − ${erhaltung} %) = ${U.eur(Math.round(modKosten))}`,
            `Jährliche Umlage: ${U.eur(Math.round(modKosten))} × 8 % = ${U.eur(Math.round(modKosten * 0.08))}`,
            `Monatlich: ÷ 12 = <strong>${U.num(answer, 2)} €</strong>`,
          ],
        };
      },
    },
    {
      sub: 'weg-grundlagen', title: 'Hausgeld nach Miteigentumsanteilen',
      generate() {
        const gesamt = U.randInt(30, 90) * 1000;            // Jahres-Wirtschaftsplan
        const mea = U.pick([48, 62, 75, 88, 104, 125]);     // Tausendstel
        const answer = Math.round(gesamt * mea / 1000 / 12 * 100) / 100;
        return {
          text: `Der Wirtschaftsplan einer WEG sieht Gesamtkosten von <strong>${U.eur(gesamt)}</strong> pro Jahr vor, verteilt nach Miteigentumsanteilen. Eine Wohnung hält <strong>${mea}/1.000</strong> MEA. Wie hoch ist ihr monatliches Hausgeld?`,
          unit: '€', answer, tolerance: 0.6, decimals: 2,
          steps: [
            `Jahresanteil: ${U.eur(gesamt)} × ${mea}/1.000 = ${U.eur(Math.round(gesamt * mea / 1000))}`,
            `Monatlich: ÷ 12 = <strong>${U.num(answer, 2)} €</strong>`,
          ],
        };
      },
    },
    {
      sub: 'technisch', title: 'Erhaltungsrücklage planen',
      generate() {
        const flaeche = U.randInt(40, 120) * 10;
        const satz = U.pick([0.8, 1.0, 1.2]);
        const answer = Math.round(flaeche * satz * 12);
        return {
          text: `Eine WEG mit <strong>${U.num(flaeche, 0)} m²</strong> Gesamtwohnfläche plant ihre Erhaltungsrücklage mit <strong>${U.num(satz, 1)} €/m²</strong> pro Monat. Welcher Betrag wird pro <strong>Jahr</strong> der Rücklage zugeführt?`,
          unit: '€', answer, tolerance: 2, decimals: 0,
          steps: [
            `Monatlich: ${U.num(flaeche, 0)} m² × ${U.num(satz, 1)} €/m² = ${U.eur(flaeche * satz)}`,
            `Jährlich: × 12 = <strong>${U.eur(answer)}</strong>`,
          ],
        };
      },
    },
  ],

  cases: [
    {
      id: 'sanierungsstau-weg',
      title: 'Die zerstrittene WEG und das undichte Dach',
      teaser: 'Als Verwalter musst du eine Dachsanierung durch eine schwierige Versammlung bringen.',
      intro: `Du hast die Verwaltung einer WEG mit 24 Einheiten übernommen (Baujahr 1975). Der Vorverwalter hat
        jahrelang nur das Nötigste getan: Erhaltungsrücklage 28.000 €, aber das Flachdach ist undicht –
        Kostenschätzung eines Dachdeckers: 180.000 €. Zwei Eigentümer melden bereits Wasserflecken.
        In drei Monaten ist ordentliche Eigentümerversammlung.`,
      steps: [
        {
          situation: 'Du musst die Dachsanierung auf der Versammlung beschließen lassen. Die Rücklage deckt nur einen Bruchteil der Kosten.',
          question: 'Wie bereitest du den Tagesordnungspunkt professionell vor?',
          options: [
            { quality: 'best', text: 'Ich hole 3 Vergleichsangebote ein, lasse den Schaden ggf. durch einen Sachverständigen dokumentieren und stelle in der Einladung Beschlussvorschläge inkl. Finanzierung (Sonderumlage/Rücklage/Kredit) transparent dar.',
              feedback: 'Genau so hält ein Beschluss: Vergleichsangebote und saubere Beschlussvorlagen in der Einladung sind der Standard ordnungsmäßiger Verwaltung – und schützen vor Anfechtung. Wer Eigentümern Wahlmöglichkeiten mit klaren Zahlen gibt, bekommt Mehrheiten.' },
            { quality: 'okay', text: 'Ich setze den Punkt mit dem vorliegenden Angebot auf die Tagesordnung – Details klären wir in der Versammlung.',
              feedback: 'Riskant: Ein einzelnes Angebot bei 180.000 € verstößt gegen den Grundsatz der Wirtschaftlichkeit und macht den Beschluss anfechtbar. Bei größeren Maßnahmen erwartet die Rechtsprechung Vergleichsangebote.' },
            { quality: 'bad', text: 'Ich beauftrage den Dachdecker sofort selbst – bei Gefahr im Verzug brauche ich keinen Beschluss.',
              feedback: 'Notmaßnahmen decken nur die Gefahrenabwehr (z. B. Notabdichtung), niemals die Komplettsanierung für 180.000 €. Wer so handelt, haftet persönlich für die Kosten ohne Beschlussgrundlage.' },
          ],
        },
        {
          situation: 'Auf der Versammlung eskaliert es: Ein Eigentümer (Dachgeschoss, Wasserflecken) fordert sofortige Sanierung, eine Rentnerin sagt, sie könne keine Sonderumlage von 6.500 € zahlen, ein Kapitalanleger will „alles auf später verschieben".',
          question: 'Wie führst du die Diskussion zum Beschluss?',
          options: [
            { quality: 'best', text: 'Ich strukturiere: Erst die Fakten (Schadensbilder, Angebote, Folgekosten bei Nichtstun), dann die Finanzierungsoptionen – inklusive gestreckter Sonderumlage und der Möglichkeit eines WEG-Kredits. Dann lasse ich abstimmen.',
              feedback: 'Stark: Sachliche Struktur plus soziale Lösung (Ratenzahlung der Sonderumlage, ggf. Gemeinschaftskredit) holt alle drei Lager ab. Die Pflicht zur Erhaltung des Gemeinschaftseigentums ist ohnehin nicht verhandelbar – die Frage ist nur das Wie.' },
            { quality: 'okay', text: 'Ich vertage den Punkt auf eine außerordentliche Versammlung, damit sich die Gemüter beruhigen.',
              feedback: 'Manchmal legitim, hier aber gefährlich: Das Dach ist bereits undicht, Folgeschäden (Schimmel, Dämmung) verteuern alles. Vertagung ohne Not kann sogar Haftungsfragen aufwerfen – Wasserschäden warten nicht auf Harmonie.' },
            { quality: 'bad', text: 'Ich lasse den lautesten Eigentümer ausreden und stelle dann seinen Maximalvorschlag zur Abstimmung.',
              feedback: 'Wer nur dem Lautesten folgt, produziert knappe, anfechtungsanfällige Beschlüsse und spaltet die Gemeinschaft. Versammlungsleitung heißt: alle Optionen fair auf den Tisch, dann strukturiert abstimmen.' },
          ],
        },
        {
          situation: 'Die Sanierung wird mit großer Mehrheit beschlossen: 180.000 €, davon 25.000 € aus der Rücklage, Rest als Sonderumlage. Die Rentnerin fragt dich nach der Versammlung besorgt, was sie jetzt tun kann.',
          question: 'Was rätst du ihr seriös?',
          options: [
            { quality: 'best', text: 'Ich erkläre die beschlossene Ratenzahlungsoption, verweise auf mögliche Förderkredite/Wohngeld und empfehle ihr bei dauerhafter Überforderung ein Beratungsgespräch bei Verbraucherzentrale oder Bank – ehrlich, aber lösungsorientiert.',
              feedback: 'Professionell: Als Verwalter bist du neutraler Dienstleister der Gemeinschaft, kannst aber Wege aufzeigen. Ehrlichkeit gehört dazu – die Zahlungspflicht besteht, aber es gibt fast immer Gestaltungsmöglichkeiten.' },
            { quality: 'okay', text: 'Ich sage ihr, sie solle den Beschluss anfechten, dann gewinnt sie Zeit.',
              feedback: 'Schlechter Rat: Eine Anfechtung ohne Erfolgsaussicht (der Beschluss ist ordnungsgemäß) kostet sie Gerichts- und Anwaltskosten und ändert an der Zahlungspflicht nichts – der Beschluss bleibt bis zur Entscheidung wirksam.' },
            { quality: 'bad', text: 'Ich sage: „Nicht mein Problem – notfalls wird eben zwangsversteigert."',
              feedback: 'Fachlich nicht mal falsch (Hausgeldrückstände können zur Zwangsversteigerung führen), aber menschlich und professionell indiskutabel. Verwaltung ist Dienstleistung – so ein Satz kostet dich den Vertrag bei der nächsten Wahl.' },
          ],
        },
        {
          situation: 'Vier Wochen später ficht der Kapitalanleger den Beschluss an: Die Sonderumlage sei „unverhältnismäßig", außerdem sei sein Stimmrecht falsch gezählt worden.',
          question: 'Wie reagierst du als Verwalter?',
          options: [
            { quality: 'best', text: 'Ich prüfe das Protokoll und die Stimmzählung, informiere die Gemeinschaft, stelle dem Anwalt der GdWE alle Unterlagen zusammen – und lasse die Sanierung weiterlaufen, denn der angefochtene Beschluss bleibt wirksam.',
              feedback: 'Richtig: Anfechtung hat keine aufschiebende Wirkung. Saubere Dokumentation (Einladung, Angebote, Protokoll, Stimmzählung) ist jetzt Gold wert – deshalb war die gründliche Vorbereitung so wichtig.' },
            { quality: 'okay', text: 'Ich stoppe die Sanierung vorsichtshalber bis zum Urteil.',
              feedback: 'Falsches Signal: Der Beschluss ist wirksam, das Dach undicht. Ein Baustopp würde Folgeschäden produzieren, für die du dich als Verwalter rechtfertigen müsstest.' },
            { quality: 'bad', text: 'Ich rufe den Anleger an und biete ihm an, ihn von der Sonderumlage auszunehmen, wenn er die Klage zurückzieht.',
              feedback: 'Klarer Pflichtverstoß: Du kannst nicht einzelne Eigentümer von beschlossenen Kosten befreien – das wäre ein Vermögensschaden der Gemeinschaft und ein Kündigungsgrund für dich.' },
          ],
        },
      ],
    },
    {
      id: 'mietverwaltung-problemfall',
      title: 'Mietrückstand in der verwalteten Wohnung',
      teaser: 'Ein Mieter zahlt nicht mehr – du verwaltest die Wohnung für einen Kapitalanleger.',
      intro: `Du betreust die Mietverwaltung für Herrn Berger, dem eine 3-Zimmer-Wohnung gehört (Miete 950 € kalt + 250 € NK).
        Der Mieter, Herr Wolf, wohnt seit 6 Jahren dort und war immer zuverlässig. Jetzt bleibt die Aprilmiete aus.
        Mitte Mai fehlt auch die Maimiete. Herr Berger ruft aufgebracht an: „Werfen Sie den sofort raus!"`,
      steps: [
        {
          situation: 'Herr Berger verlangt die sofortige Kündigung. Zwei Monatsmieten stehen aus – die Voraussetzung für eine fristlose Kündigung liegt formal vor.',
          question: 'Was ist dein professioneller erster Schritt?',
          options: [
            { quality: 'best', text: 'Ich suche zuerst das Gespräch mit dem Mieter (Zahlungserinnerung + Kontaktaufnahme): 6 Jahre Zuverlässigkeit sprechen für eine vorübergehende Notlage – parallel sichere ich die Rechtsposition durch dokumentierte Mahnung.',
              feedback: 'Genau: Rechtlich könntest du fristlos kündigen, wirtschaftlich ist ein zahlungsfähiger Bestandsmieter fast immer besser als Räumungsklage (Dauer 6–12 Monate, Kosten, Leerstand, Renovierung). Gespräch plus saubere Dokumentation hält beide Wege offen.' },
            { quality: 'okay', text: 'Ich spreche sofort die fristlose Kündigung aus – der Eigentümer will es so.',
              feedback: 'Formal möglich (Rückstand ≥ 2 Monatsmieten), aber übereilt: Zahlt Herr Wolf binnen der Schonfrist, ist die fristlose Kündigung unwirksam und du hast das Verhältnis zerstört. Erst die Ursache klären – dann eskalieren, wenn nötig.' },
            { quality: 'bad', text: 'Ich stelle Strom und Wasser ab, um Druck zu machen.',
              feedback: 'Verbotene Selbstjustiz („kalte Räumung") – das ist rechtswidrig, macht schadensersatzpflichtig und kann strafbar sein. Niemals Versorgungssperren oder Schlossaustausch ohne Räumungstitel!' },
          ],
        },
        {
          situation: 'Herr Wolf meldet sich: Er hat seinen Job verloren, das Arbeitslosengeld ist beantragt, aber noch nicht bewilligt. Er will die Rückstände „auf jeden Fall" begleichen.',
          question: 'Welche Lösung schlägst du Herrn Berger vor?',
          options: [
            { quality: 'best', text: 'Ratenzahlungsvereinbarung mit klaren Terminen, schriftlich, plus Hinweis an Herrn Wolf auf mögliche Mietschuldenübernahme durch das Jobcenter – bei Scheitern der Raten behalten wir uns die Kündigung ausdrücklich vor.',
              feedback: 'Die Profi-Lösung: Das Jobcenter übernimmt in solchen Fällen oft Mietschulden (als Darlehen), gerade um Wohnungslosigkeit zu vermeiden. Die schriftliche Vereinbarung mit Kündigungsvorbehalt schützt den Eigentümer vollständig.' },
            { quality: 'okay', text: 'Ich schlage vor, die Kaution mit den Rückständen zu verrechnen – dann sind wir quitt.',
              feedback: 'Klingt pragmatisch, ist aber falsch: Die Kaution sichert Ansprüche bei VERTRAGSENDE und darf im laufenden Mietverhältnis nicht als „Zahlungspuffer" verbraucht werden. Danach stünde der Eigentümer ohne Sicherheit da.' },
            { quality: 'bad', text: 'Keine Kompromisse: Räumungsklage einreichen, der Rest ist Sache des Gerichts.',
              feedback: 'Unwirtschaftlich: Räumungsverfahren dauern Monate und kosten Tausende – während ein kooperativer Mieter mit Jobcenter-Unterstützung die Rückstände oft komplett ausgleicht. Eskalation ist das letzte Mittel, nicht das erste.' },
          ],
        },
        {
          situation: 'Die Raten laufen zwei Monate gut, dann platzt eine Rate ohne Ankündigung, und Herr Wolf reagiert nicht mehr auf Anrufe und Briefe.',
          question: 'Jetzt handeln – aber wie?',
          options: [
            { quality: 'best', text: 'Jetzt konsequent: fristlose Kündigung (hilfsweise ordentliche) schriftlich mit genauer Rückstandsaufstellung, Räumungsfrist setzen, bei Fruchtlosigkeit Räumungsklage – alles sauber dokumentiert.',
              feedback: 'Richtig: Die Kulanzphase ist vorbei, jetzt zählt Konsequenz. Wichtig: fristlos UND hilfsweise ordentlich kündigen – falls eine Schonfristzahlung die fristlose Kündigung heilt, bleibt die ordentliche bestehen (BGH-Rechtsprechung).' },
            { quality: 'okay', text: 'Ich fahre unangekündigt vorbei und verschaffe mir Zutritt zur Wohnung, um die Lage zu prüfen.',
              feedback: 'Vorbeifahren und klingeln: ja. Aber Zutritt ohne Erlaubnis ist Hausfriedensbruch – auch als Verwalter hast du kein eigenmächtiges Betretungsrecht an der vermieteten Wohnung.' },
            { quality: 'bad', text: 'Ich warte weitere drei Monate – vielleicht wird es ja wieder.',
              feedback: 'Jetzt noch zu warten schadet dem Eigentümer aktiv: Jeder Monat ist eine weitere Monatsmiete Verlust, und die Erfolgsaussicht der Beitreibung sinkt. Kulanz hatte ihre Chance.' },
          ],
        },
      ],
    },
  ],
});
