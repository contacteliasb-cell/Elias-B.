/* ============================================================
   Themenbereich: Makler & Transaktion
   ============================================================ */

LERN.registerArea({
  id: 'makler',
  title: 'Makler & Transaktion',
  icon: '🤝',
  description: 'Dein Kerngeschäft: Maklerrecht und Provision, Akquise und Exposé, der komplette Kaufprozess, Vermietung und professionelle Verhandlungsführung.',

  subtopics: [
    {
      id: 'maklerrecht',
      title: 'Maklerrecht & Provision',
      teaser: '§ 652 BGB, Provisionsteilung (§§ 656a–d), § 34c GewO, Bestellerprinzip, GwG',
      lesson: `
        <p>Die Provision ist dein Einkommen – und sie ist rechtlich anspruchsvoller, als viele denken. Wer die Spielregeln nicht exakt kennt, arbeitet schnell umsonst.</p>

        <h3>Der Maklervertrag (§ 652 BGB)</h3>
        <p>Der Maklerlohn ist <strong>reiner Erfolgslohn</strong>. Der Anspruch entsteht nur, wenn <strong>alle vier</strong> Voraussetzungen vorliegen:</p>
        <ol>
          <li><strong>Wirksamer Maklervertrag</strong> (bei Kauf von EFH/ETW mit Verbrauchern: zwingend <strong>Textform</strong>, § 656a BGB – mündlich reicht dort nicht mehr!),</li>
          <li><strong>Maklerleistung:</strong> Nachweis (Benennung der Gelegenheit/des Vertragspartners) oder Vermittlung (aktives Hinwirken auf den Abschluss),</li>
          <li><strong>Wirksamer Hauptvertrag</strong> (notarieller Kaufvertrag bzw. Mietvertrag),</li>
          <li><strong>Kausalität:</strong> Deine Leistung muss für den Abschluss (mit-)ursächlich sein.</li>
        </ol>
        <div class="box box-warn">
          <span class="box-title">⚠️ Konsequenz des Erfolgsprinzips</span>
          Platzt der Kaufvertrag vor Beurkundung, gibt es keine Provision – egal wie viel Arbeit investiert wurde. Auch <strong>Vorkenntnis</strong> des Kunden („das Objekt kannte ich schon") zerstört die Kausalität. Deshalb: Objektnachweise dokumentieren!
        </div>

        <h3>Provisionsteilung beim Verkauf (§§ 656c, 656d BGB – seit 23.12.2020)</h3>
        <p>Gilt beim Verkauf von <strong>Einfamilienhäusern und Eigentumswohnungen</strong>, wenn der <strong>Käufer Verbraucher</strong> ist:</p>
        <ul>
          <li><strong>Doppeltätigkeit</strong> (Makler für beide Seiten): Provision nur in <strong>gleicher Höhe</strong> von beiden Parteien. Erlässt du einer Seite die Provision, entfällt auch der Anspruch gegen die andere!</li>
          <li><strong>Nur eine Partei beauftragt</strong> (z. B. Innenprovision vom Verkäufer): Weitergabe an die andere Partei nur bis <strong>maximal 50 %</strong> – und der Käufer muss erst zahlen, wenn der Verkäufer seine Zahlung <strong>nachgewiesen</strong> hat.</li>
        </ul>
        <p>Übliche Gesamtprovision: regional verschieden, häufig <strong>5,95–7,14 % inkl. USt</strong>, hälftig geteilt (z. B. 2 × 3,57 %). Die Provision ist <strong>frei verhandelbar</strong> – es gibt keine gesetzliche Gebührenordnung.</p>

        <h3>Vermietung: Bestellerprinzip</h3>
        <div class="box box-info">
          <span class="box-title">Wohnungsvermittlungsgesetz (seit 1.6.2015)</span>
          <strong>„Wer bestellt, bezahlt":</strong> Bei Wohnraumvermietung zahlt der Mieter nur, wenn der Makler <strong>ausschließlich wegen seines Suchauftrags</strong> tätig wurde und die Wohnung erst dafür akquiriert hat. Praktisch zahlt fast immer der Vermieter. Höchstprovision vom Mieter: <strong>2 Nettokaltmieten zzgl. USt</strong>. Verstöße sind bußgeldbewehrt.
        </div>

        <h3>Gewerberecht: § 34c GewO & MaBV</h3>
        <ul>
          <li>Makler brauchen die <strong>Erlaubnis nach § 34c GewO</strong> (Voraussetzungen: Zuverlässigkeit, geordnete Vermögensverhältnisse).</li>
          <li><strong>Weiterbildungspflicht:</strong> 20 Stunden innerhalb von 3 Jahren (gilt auch für mitwirkende Angestellte).</li>
          <li>Die <strong>MaBV</strong> regelt Berufspflichten: Buchführungs- und Aufbewahrungspflichten, Informationspflichten, Umgang mit Kundengeldern.</li>
          <li>Es besteht <strong>keine gesetzliche Ausbildungspflicht</strong> zum Makler – umso wichtiger ist echte Qualifikation (IHK-Kurse, Ausbildung Immobilienkaufmann/-frau) als Wettbewerbsvorteil.</li>
        </ul>

        <h3>Geldwäschegesetz (GwG) – Makler sind Verpflichtete!</h3>
        <ul>
          <li><strong>Identifizierungspflicht</strong> beider Vertragsparteien (Ausweis!) bei Kaufobjekten, sobald ernsthaftes Interesse am Vertragsschluss besteht; bei Vermietung ab <strong>10.000 € Monatsmiete</strong>.</li>
          <li>Wirtschaftlich Berechtigten hinter Gesellschaften ermitteln (Transparenzregister).</li>
          <li><strong>Verdachtsmeldung</strong> an die FIU (goAML) bei Geldwäscheverdacht – ohne den Kunden zu informieren („Tipping-off-Verbot").</li>
          <li>Risikomanagement und Dokumentation, bei größeren Büros Geldwäschebeauftragter.</li>
        </ul>

        <h3>Verbraucherschutz</h3>
        <ul>
          <li><strong>Widerrufsrecht:</strong> Maklerverträge, die per Telefon/E-Mail/Portal (Fernabsatz) geschlossen werden, kann der Verbraucher <strong>14 Tage widerrufen</strong>. Ohne korrekte Widerrufsbelehrung: Frist läuft nicht, Provisionsanspruch in Gefahr. Vor Ablauf tätig werden nur mit ausdrücklichem Verlangen des Kunden + Bestätigung.</li>
          <li><strong>Reservierungsgebühren</strong> in AGB sind nach BGH-Rechtsprechung regelmäßig <strong>unwirksam</strong> (Rückzahlungspflicht) – Finger weg von solchen Konstruktionen.</li>
          <li><strong>Aufklärungspflichten:</strong> Über bekannte wesentliche Mängel und wertbildende Umstände musst du wahrheitsgemäß informieren. Arglist kann Schadensersatz und Vertragsrückabwicklung auslösen – auch für den Makler.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Die drei teuersten Formfehler junger Makler: 1. kein Maklervertrag in Textform vor der Objektinfo, 2. fehlende Widerrufsbelehrung, 3. keine dokumentierte Objektübergabe (Vorkenntnis-Einwand). Bau dir von Tag 1 saubere Prozesse: erst Vertrag + Belehrung, dann Exposé.
        </div>
      `,
    },
    {
      id: 'akquise-expose',
      title: 'Objektakquise & Exposé',
      teaser: 'Alleinauftrag, Unterlagen-Checkliste, Energieausweis-Pflichtangaben, Vermarktung',
      lesson: `
        <p>Ohne Objekte kein Geschäft: <strong>Akquise ist die Königsdisziplin</strong> des Maklerberufs. Und das Exposé ist dein Schaufenster – hier entscheidet sich, ob die richtigen Interessenten anfragen.</p>

        <h3>Auftragsarten</h3>
        <div class="table-wrap"><table>
          <tr><th>Auftragsart</th><th>Merkmale</th></tr>
          <tr><td><strong>Einfacher Maklerauftrag</strong></td><td>Eigentümer darf weitere Makler beauftragen und selbst verkaufen – für dich kaum Planungssicherheit</td></tr>
          <tr><td><strong>Makleralleinauftrag</strong></td><td>Nur du wirst tätig; Eigentümer darf noch selbst verkaufen. Dafür schuldest du aktives Tätigwerden. Befristung üblich (z. B. 6 Monate)</td></tr>
          <tr><td><strong>Qualifizierter Alleinauftrag</strong></td><td>Auch Direktverkäufe laufen über dich (Verweisungsklausel – nur individuell vereinbar, nicht in AGB!)</td></tr>
        </table></div>
        <p>Profis arbeiten fast nur mit (qualifizierten) Alleinaufträgen: Nur so lohnen sich Investitionen in Fotos, Marketing und Zeit.</p>

        <h3>Unterlagen-Checkliste für die Vermarktung</h3>
        <ul>
          <li>Aktueller <strong>Grundbuchauszug</strong> (Lasten in Abt. II und III!)</li>
          <li><strong>Flurkarte/Lageplan</strong>, Baupläne/Grundrisse, Wohnflächenberechnung</li>
          <li><strong>Energieausweis</strong> (zwingend!), Baubeschreibung, Baujahr/Modernisierungen</li>
          <li>Bei ETW: Teilungserklärung, Protokolle, Wirtschaftsplan, Jahresabrechnung, Rücklagenstand</li>
          <li>Bei Vermietung/Anlage: Mietverträge, Mietaufstellung, Betriebskostenabrechnungen</li>
          <li>Grundsteuerbescheid, ggf. Erschließungs­nachweise, Denkmalschutz-Info, Erbbaurechtsvertrag</li>
        </ul>

        <h3>Energieausweis – die Pflichtangaben in jeder Anzeige (GEG)</h3>
        <div class="box box-info">
          <span class="box-title">Diese 5 Angaben gehören in jede Immobilienanzeige</span>
          <ol style="margin:0">
            <li>Art des Ausweises (<strong>Bedarfs-</strong> oder <strong>Verbrauchsausweis</strong>)</li>
            <li>Endenergiebedarf oder -verbrauch (kWh/(m²·a))</li>
            <li>Wesentlicher <strong>Energieträger</strong> der Heizung</li>
            <li><strong>Baujahr</strong> (bei Wohngebäuden)</li>
            <li><strong>Energieeffizienzklasse</strong> (A+ bis H)</li>
          </ol>
        </div>
        <p>Der Ausweis ist spätestens <strong>bei der Besichtigung</strong> vorzulegen und nach Vertragsschluss zu übergeben. Verstöße: Bußgeld (bis zu fünfstellig) – und die trifft auch den Makler als Beauftragten.</p>

        <h3>Das professionelle Exposé</h3>
        <ul>
          <li><strong>Zielgruppe zuerst:</strong> Familie? Kapitalanleger? Senioren? Sprache, Bilder und Fakten darauf ausrichten.</li>
          <li><strong>Struktur:</strong> aussagekräftiger Titel → Eckdaten-Block (Fläche, Zimmer, Baujahr, Energie, Preis, Provision) → Objektbeschreibung → Lagebeschreibung → Grundrisse → rechtliche Hinweise.</li>
          <li><strong>Fotos entscheiden:</strong> aufgeräumt, Tageslicht, Weitwinkel mit Maß, erste 3 Bilder = beste Bilder. Schlechte Fotos kosten nachweislich Anfragen und am Ende Verkaufspreis.</li>
          <li><strong>Wahrheitspflicht:</strong> Exposé-Angaben sind keine bloße Werbung – falsche Flächen oder verschwiegene Mängel führen zu Haftung. Quellen angeben („laut Eigentümer").</li>
          <li><strong>Vollständige Preisangaben:</strong> Kaufpreis, Provision (Höhe + wer zahlt), Hausgeld bei ETW, bei Vermietung Nettokaltmiete + Nebenkosten + Kaution.</li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp: Akquise-Kanäle, die funktionieren</span>
          Empfehlungen zufriedener Kunden (Nr. 1!), Farming (feste Präsenz in einem Stadtteil), Einwertungs-Angebote, Nachbarschaftsbriefe nach Verkäufen („In Ihrer Straße verkauft…"), Kooperationen mit Verwaltern, Banken, Handwerkern, Scheidungsanwälten und Steuerberatern. Kaltakquise auf Privatanzeigen ist rechtlich heikel (UWG: unzumutbare Belästigung) – Anrufe nur, wenn die Anzeige Maklerkontakt nicht ausschließt, besser: Mehrwert bieten statt bedrängen.
        </div>
      `,
    },
    {
      id: 'kaufprozess',
      title: 'Der Kaufprozess bis zum Notar',
      teaser: 'Besichtigung, Finanzierung, Notarvertrag, Auflassungsvormerkung, Nebenkosten, Übergabe',
      lesson: `
        <p>Vom ersten Interessentenkontakt bis zur Schlüsselübergabe: Wer den Prozess beherrscht, führt beide Seiten sicher durch die größte Transaktion ihres Lebens.</p>

        <h3>Der Ablauf im Überblick</h3>
        <figure class="diagram">
        <svg viewBox="0 0 660 120" role="img" aria-label="Ablauf des Kaufprozesses">
          <rect x="5" y="35" width="95" height="50" rx="9" fill="#e8efff" stroke="#1f5eff"/>
          <text x="52" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Anfrage &amp;</text>
          <text x="52" y="70" text-anchor="middle" font-size="11" fill="#1c2333">Besichtigung</text>
          <text x="111" y="65" text-anchor="middle" font-size="14" fill="#5a6478">→</text>
          <rect x="122" y="35" width="95" height="50" rx="9" fill="#e8efff" stroke="#1f5eff"/>
          <text x="169" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Finanzierungs-</text>
          <text x="169" y="70" text-anchor="middle" font-size="11" fill="#1c2333">bestätigung</text>
          <text x="228" y="65" text-anchor="middle" font-size="14" fill="#5a6478">→</text>
          <rect x="239" y="35" width="95" height="50" rx="9" fill="#e8efff" stroke="#1f5eff"/>
          <text x="286" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Kaufvertrags-</text>
          <text x="286" y="70" text-anchor="middle" font-size="11" fill="#1c2333">entwurf (14 T.)</text>
          <text x="345" y="65" text-anchor="middle" font-size="14" fill="#5a6478">→</text>
          <rect x="356" y="35" width="95" height="50" rx="9" fill="#fff4dd" stroke="#ff9f1c"/>
          <text x="403" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Notarielle</text>
          <text x="403" y="70" text-anchor="middle" font-size="11" fill="#1c2333">Beurkundung</text>
          <text x="462" y="65" text-anchor="middle" font-size="14" fill="#5a6478">→</text>
          <rect x="473" y="35" width="85" height="50" rx="9" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="515" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Kaufpreis-</text>
          <text x="515" y="70" text-anchor="middle" font-size="11" fill="#1c2333">zahlung</text>
          <text x="568" y="65" text-anchor="middle" font-size="14" fill="#5a6478">→</text>
          <rect x="578" y="35" width="78" height="50" rx="9" fill="#e2f6ee" stroke="#14a06b"/>
          <text x="617" y="56" text-anchor="middle" font-size="11" fill="#1c2333">Übergabe &amp;</text>
          <text x="617" y="70" text-anchor="middle" font-size="11" fill="#1c2333">Umschreibung</text>
        </svg>
        <figcaption>Zwischen Beurkundung und Eigentumsumschreibung liegen typischerweise 2–3 Monate.</figcaption>
        </figure>

        <h3>Besichtigungen professionell managen</h3>
        <ul>
          <li>Interessenten <strong>vorqualifizieren</strong> (Budget, Finanzierung, Zeithorizont) – Massenbesichtigungen ohne Filter verbrennen Zeit und nerven Verkäufer.</li>
          <li>Objekt vorbereiten (Licht, Lüften, Aufräumen – ggf. Home Staging), Unterlagen griffbereit, Energieausweis vorlegen (Pflicht!).</li>
          <li>Nach der Besichtigung: strukturiertes Follow-up binnen 48 Stunden. Feedback ans Verkäuferlager ist Teil deiner Dienstleistung.</li>
        </ul>

        <h3>Finanzierung absichern</h3>
        <p>Vor Reservierung/Notarauftrag: <strong>Finanzierungsbestätigung</strong> oder Kapitalnachweis des Käufers einholen. Das schützt den Verkäufer vor geplatzten Terminen und dich vor umsonst geleisteter Arbeit.</p>

        <h3>Notartermin & Kaufvertrag</h3>
        <ul>
          <li>Grundstückskaufverträge bedürfen der <strong>notariellen Beurkundung</strong> (§ 311b BGB) – sonst nichtig.</li>
          <li>Bei Verbraucherbeteiligung muss der Vertragsentwurf <strong>2 Wochen vor Beurkundung</strong> vorliegen (§ 17 Abs. 2a BeurkG).</li>
          <li>Der Notar ist <strong>neutral</strong>; er belehrt beide Seiten. Wichtige Vertragspunkte: Kaufpreis & Fälligkeit, Besitzübergang, <strong>Auflassungsvormerkung</strong>, Sachmängel-Regelung („gekauft wie gesehen" – Haftungsausschluss außer bei Arglist), Räumung, ggf. Mängelbeseitigungen.</li>
          <li><strong>Auflassungsvormerkung</strong> (Abt. II Grundbuch): sichert den Käufer ab – der Verkäufer kann nicht mehr anderweitig wirksam verfügen. Erst wenn sie eingetragen ist (plus weitere Fälligkeitsvoraussetzungen wie Löschungsunterlagen der Altlasten und ggf. Verwalterzustimmung), wird der Kaufpreis fällig.</li>
          <li>Zahlung heute meist <strong>direkt an den Verkäufer</strong> nach Fälligkeitsmitteilung des Notars; Notaranderkonto nur noch in besonderen Fällen.</li>
          <li>Nach Zahlung: Grunderwerbsteuerbescheid → <strong>Unbedenklichkeitsbescheinigung</strong> des Finanzamts → Eigentumsumschreibung in Abt. I.</li>
        </ul>

        <h3>Kaufnebenkosten – die musst du auswendig können</h3>
        <div class="table-wrap"><table>
          <tr><th>Position</th><th>Größenordnung</th></tr>
          <tr><td>Grunderwerbsteuer</td><td><strong>3,5–6,5 %</strong> je nach Bundesland (z. B. Bayern 3,5 %, NRW 6,5 %)</td></tr>
          <tr><td>Notar & Grundbuch</td><td>ca. <strong>1,5–2 %</strong></td></tr>
          <tr><td>Maklerprovision (Käuferanteil)</td><td>regional, häufig <strong>ca. 3,57 %</strong> inkl. USt</td></tr>
          <tr><td><strong>Summe</strong></td><td>ca. <strong>9–12 %</strong> des Kaufpreises – vom Käufer i. d. R. aus Eigenkapital zu zahlen</td></tr>
        </table></div>

        <h3>Übergabe</h3>
        <p>Nach Kaufpreiszahlung: Übergabe mit <strong>Protokoll</strong> (Zählerstände Strom/Gas/Wasser, Schlüsselanzahl, Zustand, übernommenes Inventar), Versicherungen klären (Gebäudeversicherung geht auf den Erwerber über, Kündigungsrecht binnen 1 Monats ab Umschreibung), Versorger ummelden. Ein sauberer Abschluss = die Empfehlung von morgen.</p>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Dein Job endet nicht mit der Unterschrift: Begleite beide Seiten bis zur Übergabe und melde dich 3 Monate später noch einmal. Makler leben von Empfehlungen – und die entstehen in der Nachbetreuung, nicht im Notartermin.
        </div>
      `,
    },
    {
      id: 'vermietung',
      title: 'Vermietung & Mietersuche',
      teaser: 'Bestellerprinzip, Selbstauskunft, AGG, Mietpreisbremse, Übergabe',
      lesson: `
        <p>Vermietungsgeschäft bedeutet kleinere Tickets, aber laufende Kontakte zu Eigentümern – oft der Einstieg in spätere Verkaufsmandate. Rechtlich ist es ein Minenfeld aus Mieterschutz und Datenschutz.</p>

        <h3>Der Vermietungsprozess</h3>
        <ol>
          <li><strong>Auftrag & Mietpreis-Check:</strong> Marktmiete ermitteln (Mietspiegel!), Mietpreisbremse prüfen, Zielmieter definieren.</li>
          <li><strong>Anzeige:</strong> Nettokaltmiete, Nebenkosten, Kaution, Energieausweis-Pflichtangaben, Bezugstermin. Provisionsangabe: Beim Bestellerprinzip zahlt (fast immer) der Vermieter.</li>
          <li><strong>Interessenten-Management & Besichtigungen.</strong></li>
          <li><strong>Mieterauswahl:</strong> Selbstauskunft, Bonität (SCHUFA), Mietschuldenfreiheitsbescheinigung, Einkommensnachweise (Faustregel: Kaltmiete ≤ 1/3 Nettoeinkommen).</li>
          <li><strong>Mietvertrag & Übergabe</strong> mit Protokoll und Zählerständen.</li>
        </ol>

        <h3>Selbstauskunft: Was darfst du fragen?</h3>
        <div class="table-wrap"><table>
          <tr><th>✅ Zulässig</th><th>❌ Unzulässig (Recht zur „Notlüge")</th></tr>
          <tr><td>Identität, Anzahl einziehender Personen, Beruf/Arbeitgeber, Nettoeinkommen, Mietschulden/Räumungstitel, Haustiere (bei Relevanz)</td><td>Schwangerschaft/Kinderwunsch, Religion, Parteizugehörigkeit, Gewerkschaft, sexuelle Orientierung, Vorstrafen (ohne Bezug), Mitgliedschaft im Mieterverein</td></tr>
        </table></div>
        <p><strong>Datenschutz (DSGVO):</strong> Daten erst in dem Umfang erheben, in dem sie nötig sind – Bonitätsnachweise erst, wenn der Bewerber in der engeren Auswahl ist. Unterlagen abgelehnter Bewerber löschen.</p>

        <h3>AGG – Diskriminierungsverbot</h3>
        <ul>
          <li>Bei der Wohnungsvergabe darf niemand wegen <strong>Rasse/ethnischer Herkunft, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität</strong> benachteiligt werden.</li>
          <li>Anzeigen neutral formulieren („nur an Deutsche" = klarer AGG-Verstoß mit Entschädigungsrisiko).</li>
          <li>Ausnahmen: Vermieter bewohnt selbst das Grundstück mit (besonderes Näheverhältnis, § 19 Abs. 5 AGG); zulässig bleibt die Auswahl nach <strong>wirtschaftlichen Kriterien</strong> (Bonität!).</li>
          <li>Praxis-Schutz: <strong>Auswahlkriterien dokumentieren</strong> – wer belegen kann, dass die Bonität entschied, ist auf der sicheren Seite.</li>
        </ul>

        <h3>Mietpreisbremse & Auskunftspflichten</h3>
        <p>In Gebieten mit Mietpreisbremse: Neuvertragsmiete max. <strong>Vergleichsmiete + 10 %</strong>. Beruft sich der Vermieter auf Ausnahmen (höhere <strong>Vormiete</strong>, Neubau, umfassende Modernisierung), muss er dem Mieter darüber <strong>unaufgefordert vor Vertragsschluss in Textform Auskunft</strong> erteilen – sonst kann er sich später nicht darauf berufen. Der Mieter kann zu viel gezahlte Miete zurückfordern (Rüge).</p>

        <div class="box box-example">
          <span class="box-title">💡 Beispiel Bestellerprinzip</span>
          Familie Öztürk beauftragt dich, eine 4-Zimmer-Wohnung zu finden. Du akquirierst daraufhin eine passende Wohnung, die du <em>noch nicht im Bestand hattest</em>, und vermittelst sie. → Hier darfst du von der Familie Provision nehmen (max. 2 Nettokaltmieten + USt). Hättest du die Wohnung schon vorher an der Hand gehabt, wäre nur der Vermieter provisionspflichtig.
        </div>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Vermietung ist Beziehungsgeschäft mit Eigentümern: Wer zuverlässig gute Mieter liefert und die Übergaben sauber dokumentiert, bekommt das Verkaufsmandat, wenn der Eigentümer später verkauft – und die Verwaltung gleich mit. Denk in Lebenszyklen, nicht in Einzelabschlüssen.
        </div>
      `,
    },
    {
      id: 'verhandlung',
      title: 'Verhandlungsführung & Kundenbetreuung',
      teaser: 'Preisgespräche, Einwandbehandlung, Psychologie, Bieterverfahren',
      lesson: `
        <p>Verhandeln ist kein Talent, sondern Handwerk. Als Makler verhandelst du täglich – mit Eigentümern über Preise und Aufträge, mit Käufern über Angebote, mit beiden über den Abschluss.</p>

        <h3>Deine Rolle: Vermittler mit klarem Auftrag</h3>
        <p>Du bist kein Gegner einer Seite, sondern <strong>Prozessmanager</strong>: Dein Ziel ist ein Abschluss, mit dem beide Seiten leben können – im Rahmen deines Auftrags. Bei Doppeltätigkeit schuldest du <strong>beiden</strong> Seiten Unparteilichkeit und Ehrlichkeit.</p>

        <h3>Psychologie, die du kennen musst</h3>
        <ul>
          <li><strong>Ankereffekt:</strong> Die erste genannte Zahl prägt die gesamte Verhandlung. Deshalb ist der Angebotspreis strategisch so wichtig – und deshalb solltest du in Preisgesprächen möglichst die erste fundierte Zahl setzen (mit Begründung!).</li>
          <li><strong>Verlustaversion:</strong> Menschen gewichten Verluste stärker als Gewinne. „Wenn wir jetzt nicht reagieren, verlieren Sie diesen Käufer" wirkt stärker als „Sie könnten gewinnen".</li>
          <li><strong>Soziale Bewährtheit:</strong> „Es gibt drei weitere Interessenten" verändert Verhalten – aber: <strong>niemals erfinden</strong>. Gelogene Konkurrenz ist Betrug am Kunden und fliegt auf.</li>
          <li><strong>Reziprozität:</strong> Wer Zugeständnisse macht, bekommt welche. Kleine Konzessionen (Übergabetermin, Inventar) öffnen große (Preis).</li>
          <li><strong>Aktives Zuhören:</strong> Die wichtigste Technik überhaupt. Wer die wahren Motive kennt (Zeitdruck? Emotion? Anschlussfinanzierung?), verhandelt zielgenau.</li>
        </ul>

        <h3>Einwandbehandlung am Beispiel</h3>
        <div class="box box-example">
          <span class="box-title">💡 „Der Preis ist zu hoch"</span>
          1. <strong>Verstehen statt kontern:</strong> „Was genau erscheint Ihnen zu hoch – im Vergleich wozu?"<br>
          2. <strong>Isolieren:</strong> „Wenn wir beim Preis eine Lösung finden – sind wir uns dann einig?"<br>
          3. <strong>Argumentieren mit Substanz:</strong> Vergleichsobjekte, Zustand, Sanierungsrechnung – Zahlen schlagen Meinungen.<br>
          4. <strong>Brücke bauen:</strong> Gegenangebot strukturieren statt Position verteidigen.
        </div>

        <h3>Das Preisgespräch mit dem Eigentümer</h3>
        <ul>
          <li>Komm nie ohne <strong>Daten</strong> (Vergleichspreise, Marktbericht, Nachfragelage) – gegen Gefühle helfen nur Fakten plus Empathie.</li>
          <li>Sprich über das <strong>Ziel des Kunden</strong> (zügiger Verkauf? Höchstpreis? Diskretion?) und zeig den Weg dahin.</li>
          <li>Bei überhöhten Vorstellungen: Konsequenzen aufzeigen (Vermarktungsdauer, „Verbrennen" des Objekts) und einen <strong>Preis-Fahrplan</strong> vereinbaren.</li>
        </ul>

        <h3>Angebote managen & Bieterverfahren</h3>
        <ul>
          <li>Jedes Angebot dokumentiert ans Verkäuferlager weiterleiten – auch niedrige (Informationspflicht!).</li>
          <li>Bei starker Nachfrage: strukturiertes <strong>Bieterverfahren</strong> (Frist, gleiches Informationsniveau für alle, klare Regeln). Transparenz schützt dich vor dem Vorwurf der Mauschelei. Der Verkäufer bleibt frei, jedes oder kein Angebot anzunehmen.</li>
          <li>Käufer nicht gegeneinander „hochjazzen" – erfundene Gebote sind Betrug.</li>
        </ul>

        <h3>Kundenbetreuung als System</h3>
        <ul>
          <li><strong>Erreichbarkeit & Rückmeldezeiten</strong> definieren (z. B. 24 h) und einhalten – der häufigste Beschwerdegrund über Makler ist Funkstille.</li>
          <li>Wöchentliches <strong>Vermarktungsreporting</strong> an Verkäufer: Anfragen, Besichtigungen, Feedback, nächste Schritte.</li>
          <li>Nach Abschluss: Übergabe begleiten, Nachfass nach 3 Monaten, Empfehlung erfragen. <strong>Bestandskundenpflege schlägt jede Kaltakquise.</strong></li>
        </ul>

        <div class="box box-praxis">
          <span class="box-title">🏢 Praxis-Tipp</span>
          Die Grundregel seriöser Verhandlungsführung: <strong>Hart in der Sache, verbindlich im Ton, ehrlich in den Fakten.</strong> Tricks bringen dir einen Abschluss – Vertrauen bringt dir eine Karriere.
        </div>
      `,
    },
  ],

  quiz: [
    // maklerrecht
    { sub: 'maklerrecht', q: 'Welche vier Voraussetzungen hat der Provisionsanspruch des Maklers?',
      options: ['Maklervertrag + Maklerleistung (Nachweis/Vermittlung) + wirksamer Hauptvertrag + Kausalität', 'Exposé + Besichtigung + Kaufinteresse + Rechnung', 'Gewerbeschein + Website + Objekt + Kunde', 'Notartermin + Übergabe + Schlüssel + Quittung'], correct: 0,
      explain: 'Fehlt eine der vier Säulen – z. B. Kausalität wegen Vorkenntnis des Kunden – gibt es keine Provision. Maklerlohn ist reiner Erfolgslohn (§ 652 BGB).' },
    { sub: 'maklerrecht', q: 'Welche Form braucht der Maklervertrag beim Verkauf einer ETW an einen Verbraucher?',
      options: ['Textform (§ 656a BGB) – z. B. E-Mail genügt, mündlich nicht', 'Notarielle Beurkundung', 'Keine – mündlich reicht immer', 'Schriftform mit Zeugen'], correct: 0,
      explain: 'Seit 23.12.2020: Maklerverträge über EFH und ETW mit Verbrauchern bedürfen der Textform. Ohne sie: kein Provisionsanspruch.' },
    { sub: 'maklerrecht', q: 'Du bist als Makler für beide Seiten tätig (Doppeltätigkeit, ETW-Verkauf an Verbraucher). Was gilt für die Provision?',
      options: ['Beide Parteien zahlen in gleicher Höhe; erlässt du einer Seite, entfällt auch der Anspruch gegen die andere', 'Der Käufer zahlt alles', 'Der Verkäufer zahlt alles', 'Du darfst die Verteilung frei wählen'], correct: 0,
      explain: '§ 656c BGB: Bei Doppeltätigkeit nur Provision in gleicher Höhe von beiden Seiten – das „Halbe-halbe-Prinzip" ist zwingend.' },
    { sub: 'maklerrecht', q: 'Nur der Verkäufer hat dich beauftragt. Wie viel der Provision darf auf den kaufenden Verbraucher abgewälzt werden?',
      options: ['Maximal 50 % – und erst zahlbar nach Nachweis der Verkäuferzahlung', 'Bis zu 100 %', 'Nichts', '75 %'], correct: 0,
      explain: '§ 656d BGB: Abwälzung höchstens zur Hälfte; der Käufer muss erst leisten, wenn der Verkäufer seine Zahlung nachgewiesen hat.' },
    { sub: 'maklerrecht', q: 'Was besagt das Bestellerprinzip bei der Wohnungsvermietung?',
      options: ['Wer den Makler beauftragt, bezahlt ihn – der Mieter nur bei exklusivem Suchauftrag', 'Der Mieter zahlt immer', 'Vermieter und Mieter teilen sich die Provision immer', 'Es gibt keine Provision bei Vermietung'], correct: 0,
      explain: 'Seit 1.6.2015 (WoVermittG): Der Mieter zahlt nur, wenn der Makler ausschließlich wegen seines Suchauftrags die Wohnung akquiriert hat. Max. 2 Nettokaltmieten + USt.' },
    { sub: 'maklerrecht', q: 'Welche Erlaubnis braucht ein Immobilienmakler?',
      options: ['§ 34c GewO (Gewerbeerlaubnis, Zuverlässigkeit + geordnete Vermögensverhältnisse)', 'Eine IHK-Meisterprüfung', 'Eine notarielle Bestellung', 'Keine'], correct: 0,
      explain: 'Ohne 34c-Erlaubnis ist gewerbsmäßige Maklertätigkeit verboten. Dazu kommt die Weiterbildungspflicht: 20 Stunden in 3 Jahren.' },
    { sub: 'maklerrecht', q: 'Ab wann muss der Makler nach dem GwG die Vertragsparteien identifizieren?',
      options: ['Bei ernsthaftem Kaufinteresse; bei Vermietung ab 10.000 € Monatsmiete', 'Erst beim Notartermin', 'Nur bei Barzahlung', 'Nie – das macht der Notar'], correct: 0,
      explain: 'Makler sind GwG-Verpflichtete: Identifizierung beider Parteien bei ernsthaftem Interesse am Kaufvertrag; Verdachtsfälle an die FIU melden (ohne Kunden zu informieren).' },
    { sub: 'maklerrecht', q: 'Ein Verbraucher schließt den Maklervertrag per E-Mail. Was musst du beachten?',
      options: ['14-tägiges Widerrufsrecht + ordnungsgemäße Belehrung, sonst wackelt die Provision', 'Nichts – E-Mail-Verträge sind endgültig', 'Der Vertrag ist unwirksam', 'Es gilt eine 6-monatige Kündigungsfrist'], correct: 0,
      explain: 'Fernabsatz: Ohne korrekte Widerrufsbelehrung erlischt das Widerrufsrecht nicht nach 14 Tagen – der Kunde kann noch nach Monaten widerrufen und die Provision entfällt.' },
    { sub: 'maklerrecht', q: 'Wie hoch ist die Maklerprovision gesetzlich festgelegt?',
      options: ['Gar nicht – sie ist frei verhandelbar (übliche Sätze sind nur Marktpraxis)', '7,14 % bundesweit', '3,57 % pro Partei per Gesetz', '5 % netto laut MaBV'], correct: 0,
      explain: 'Es gibt keine gesetzliche Provisionsordnung. Nur die Verteilung (§§ 656c/d) und bei Vermietung die Obergrenze (2 NKM) sind geregelt.' },
    { sub: 'maklerrecht', q: 'Der Kaufinteressent kannte das Objekt nachweislich schon vor deinem Exposé. Folge?',
      options: ['Kein Provisionsanspruch mangels Kausalität (Vorkenntnis)', 'Halbe Provision', 'Volle Provision, du hast ja gearbeitet', 'Der Verkäufer zahlt doppelt'], correct: 0,
      explain: 'Deine Leistung war für den Abschluss nicht ursächlich. Deshalb: Objektnachweise mit Datum dokumentieren und Vorkenntnis abfragen.' },

    // akquise-expose
    { sub: 'akquise-expose', q: 'Was unterscheidet den qualifizierten Alleinauftrag vom einfachen Alleinauftrag?',
      options: ['Direktinteressenten muss der Eigentümer an den Makler verweisen', 'Er ist unbefristet', 'Er ist mündlich gültig', 'Er verbietet dem Makler andere Objekte'], correct: 0,
      explain: 'Beim qualifizierten Alleinauftrag laufen auch Selbstverkäufe über den Makler (Verweisungsklausel). Wichtig: nur individuell vereinbar, nicht formularmäßig in AGB.' },
    { sub: 'akquise-expose', q: 'Welche Energieausweis-Angaben sind in Immobilienanzeigen Pflicht?',
      options: ['Ausweisart, Endenergiewert, Energieträger, Baujahr, Effizienzklasse', 'Nur die Effizienzklasse', 'Nur das Baujahr', 'Gar keine – nur bei Besichtigung'], correct: 0,
      explain: 'GEG-Pflichtangaben in jeder kommerziellen Anzeige. Verstöße sind bußgeldbewehrt – und treffen auch den Makler.' },
    { sub: 'akquise-expose', q: 'Wann muss der Energieausweis Interessenten spätestens vorgelegt werden?',
      options: ['Bei der Besichtigung', 'Beim Notartermin', 'Nach Vertragsschluss', 'Nie'], correct: 0,
      explain: 'Vorlage spätestens bei der Besichtigung, Übergabe (Original/Kopie) unverzüglich nach Vertragsschluss.' },
    { sub: 'akquise-expose', q: 'Welches Dokument zeigt dir Lasten wie Wegerechte oder Wohnrechte?',
      options: ['Grundbuchauszug, Abteilung II', 'Energieausweis', 'Flurkarte', 'Teilungserklärung'], correct: 0,
      explain: 'Abt. II enthält Lasten und Beschränkungen – Pflichtlektüre vor jeder Vermarktung, denn solche Rechte sind massiv wertrelevant.' },
    { sub: 'akquise-expose', q: 'Falsche Wohnflächenangabe im Exposé („150 m²", real 128 m²). Risiko?',
      options: ['Haftung/Kaufpreisminderung – Exposé-Angaben sind keine unverbindliche Werbung', 'Keines, Exposés sind unverbindlich', 'Nur ein Bußgeld der IHK', 'Der Notar korrigiert das automatisch'], correct: 0,
      explain: 'Wesentliche Falschangaben können Schadensersatz, Minderung und Rückabwicklung auslösen. Flächen belegen (Wohnflächenberechnung) und Quellen angeben.' },
    { sub: 'akquise-expose', q: 'Warum arbeiten Profis bevorzugt mit Alleinaufträgen?',
      options: ['Planungssicherheit rechtfertigt Investitionen in Marketing, Fotos und Zeit', 'Sie sind gesetzlich vorgeschrieben', 'Die Provision ist dann höher geregelt', 'Eigentümer verlangen es'], correct: 0,
      explain: 'Ohne Exklusivität konkurrierst du mit anderen Maklern und dem Eigentümer selbst – professionelle Vermarktung lohnt sich nur mit gesichertem Mandat.' },
    { sub: 'akquise-expose', q: 'Kaltakquise-Anruf auf eine private Verkaufsanzeige – was gilt?',
      options: ['Rechtlich heikel (UWG) – unaufgeforderte Werbeanrufe können unzumutbare Belästigung sein', 'Immer erlaubt', 'Nur samstags erlaubt', 'Erlaubt, wenn man höflich ist'], correct: 0,
      explain: 'Privatverkäufer inserieren, um zu verkaufen – nicht, um Makler-Werbung zu erhalten. Abmahnrisiko! Besser: Mehrwert bieten oder andere Akquisekanäle nutzen.' },
    { sub: 'akquise-expose', q: 'Welche Unterlagen brauchst du für die Vermarktung einer ETW zusätzlich zum Grundbuch?',
      options: ['Teilungserklärung, Protokolle, Wirtschaftsplan, Jahresabrechnung, Rücklagenstand', 'Nur den Personalausweis des Eigentümers', 'Die Mietverträge der Nachbarn', 'Den Bebauungsplan der Gemeinde'], correct: 0,
      explain: 'Das WEG-Paket ist Standard – Käufer und Banken verlangen es. Wer es erst nach Käuferfrage besorgt, verliert Wochen.' },

    // kaufprozess
    { sub: 'kaufprozess', q: 'Welche Form braucht ein Grundstückskaufvertrag?',
      options: ['Notarielle Beurkundung (§ 311b BGB)', 'Schriftform', 'Textform', 'Handschlag mit Zeugen'], correct: 0,
      explain: 'Ohne notarielle Beurkundung ist der Vertrag nichtig. Auch Vorverträge und Reservierungen mit Bindungswirkung sind beurkundungspflichtig.' },
    { sub: 'kaufprozess', q: 'Wie lange muss der Kaufvertragsentwurf einem Verbraucher vor Beurkundung vorliegen?',
      options: ['2 Wochen (§ 17 Abs. 2a BeurkG)', '24 Stunden', '3 Monate', 'Gar nicht'], correct: 0,
      explain: 'Die 14-Tage-Frist gibt Verbrauchern Zeit zur Prüfung. Der Notar wacht darüber – plane sie in deine Terminierung ein.' },
    { sub: 'kaufprozess', q: 'Was bewirkt die Auflassungsvormerkung?',
      options: ['Sie sichert den Käufer: Der Verkäufer kann nicht mehr wirksam anderweitig verfügen', 'Sie überträgt sofort das Eigentum', 'Sie ersetzt die Finanzierung', 'Sie löscht alte Grundschulden'], correct: 0,
      explain: 'Die Vormerkung (Abt. II) ist der zentrale Käuferschutz zwischen Beurkundung und Umschreibung – erst danach wird der Kaufpreis fällig.' },
    { sub: 'kaufprozess', q: 'Wann wird der Käufer Eigentümer?',
      options: ['Mit Eintragung im Grundbuch (Abt. I)', 'Mit Unterschrift beim Notar', 'Mit Kaufpreiszahlung', 'Mit der Schlüsselübergabe'], correct: 0,
      explain: 'Beurkundung = Verpflichtung, Auflassung + Grundbucheintragung = Eigentumsübergang. Dazwischen liegen meist 2–3 Monate (Grunderwerbsteuer, Unbedenklichkeitsbescheinigung).' },
    { sub: 'kaufprozess', q: 'Wie hoch ist die Grunderwerbsteuer?',
      options: ['Je nach Bundesland 3,5–6,5 %', 'Bundesweit 5 %', 'Immer 3,5 %', '10 %'], correct: 0,
      explain: 'Ländersache: z. B. Bayern 3,5 %, Hamburg 5,5 %, NRW/Brandenburg u. a. 6,5 %. Zusammen mit Notar/Grundbuch und Provision: ~9–12 % Nebenkosten.' },
    { sub: 'kaufprozess', q: '„Gekauft wie gesehen" – was bedeutet der übliche Haftungsausschluss im Kaufvertrag?',
      options: ['Sachmängelhaftung ausgeschlossen – außer bei arglistig verschwiegenen Mängeln', 'Der Käufer kann nie reklamieren', 'Der Verkäufer haftet 5 Jahre für alles', 'Der Makler übernimmt die Haftung'], correct: 0,
      explain: 'Bei Bestandsimmobilien Standard. Aber: Arglist (bekannte Mängel verschweigen, z. B. Feuchtigkeit) durchbricht den Ausschluss – Aufklärung schützt Verkäufer UND Makler.' },
    { sub: 'kaufprozess', q: 'Was gehört in ein Übergabeprotokoll?',
      options: ['Zählerstände, Schlüssel, Zustand, übernommenes Inventar, Datum + Unterschriften', 'Nur die Schlüsselanzahl', 'Die Lebensläufe der Parteien', 'Der Grundbuchauszug'], correct: 0,
      explain: 'Das Protokoll beugt Streit vor (Wer zahlt welchen Strom? Welche Schäden waren da?) und ist Basis für die Versorger-Ummeldung.' },
    { sub: 'kaufprozess', q: 'Warum verlangst du vor dem Notartermin eine Finanzierungsbestätigung?',
      options: ['Damit der Vertrag nicht an der Finanzierung scheitert – Schutz für alle Beteiligten', 'Weil das Gesetz es vorschreibt', 'Um die Bank zu wechseln', 'Für die Grunderwerbsteuer'], correct: 0,
      explain: 'Ein geplatzter Kauf nach Beurkundung ist der teuerste Fall (Rückabwicklung, Schadensersatz). Vorher prüfen kostet nichts.' },
    { sub: 'kaufprozess', q: 'Was passiert mit der Gebäudeversicherung beim Verkauf?',
      options: ['Sie geht auf den Erwerber über; er kann binnen 1 Monats ab Grundbuchumschreibung kündigen', 'Sie erlischt automatisch', 'Der Makler übernimmt sie', 'Sie muss neu abgeschlossen werden'], correct: 0,
      explain: '§ 95 VVG: Versicherung folgt dem Eigentum – wichtig für die Beratung, damit das Objekt nie unversichert ist.' },

    // vermietung
    { sub: 'vermietung', q: 'Welche Frage in der Mieterselbstauskunft ist unzulässig?',
      options: ['„Sind Sie schwanger?"', '„Wie hoch ist Ihr Nettoeinkommen?"', '„Wie viele Personen ziehen ein?"', '„Bestehen Mietschulden?"'], correct: 0,
      explain: 'Fragen zu Schwangerschaft, Religion, Parteizugehörigkeit etc. sind unzulässig – der Bewerber darf hier sogar wahrheitswidrig antworten („Recht zur Notlüge").' },
    { sub: 'vermietung', q: '„Wohnung nur an Deutsche zu vermieten" – was ist das?',
      options: ['Ein klarer AGG-Verstoß mit Entschädigungsrisiko', 'Zulässige Vertragsfreiheit', 'Nur unhöflich, aber legal', 'Erlaubt bei Altbauten'], correct: 0,
      explain: 'Benachteiligung wegen ethnischer Herkunft ist bei der Wohnungsvergabe verboten (§ 19 AGG). Auswahl nach Bonität ist dagegen zulässig – dokumentieren!' },
    { sub: 'vermietung', q: 'Wann darfst du SCHUFA/Bonitätsnachweise vom Bewerber anfordern?',
      options: ['Erst wenn er in der engeren Auswahl ist (Datenminimierung, DSGVO)', 'Schon bei der Anzeigen-Anfrage', 'Nach Vertragsschluss', 'Gar nicht'], correct: 0,
      explain: 'DSGVO-Grundsatz der Datenminimierung: erheben, was nötig ist, wenn es nötig ist. Unterlagen abgelehnter Bewerber löschen.' },
    { sub: 'vermietung', q: 'Der Vermieter will sich auf die höhere Vormiete berufen (Mietpreisbremse). Was muss er tun?',
      options: ['Dem Mieter unaufgefordert vor Vertragsschluss in Textform Auskunft erteilen', 'Nichts – die Ausnahme gilt automatisch', 'Den Mietspiegel ändern lassen', 'Eine Genehmigung der Gemeinde einholen'], correct: 0,
      explain: 'Ohne die vorvertragliche Auskunft kann sich der Vermieter auf die Ausnahme (Vormiete/Neubau/Modernisierung) nicht berufen und muss ggf. Miete zurückzahlen.' },
    { sub: 'vermietung', q: 'Faustregel zur Mieter-Bonität?',
      options: ['Kaltmiete maximal etwa 1/3 des Nettoeinkommens', 'Miete = halbes Bruttoeinkommen', 'Einkommen ist egal, Hauptsache SCHUFA leer', 'Kaltmiete maximal 2/3 des Einkommens'], correct: 0,
      explain: 'Die Drittel-Regel ist Marktstandard für nachhaltige Leistbarkeit – zusammen mit Einkommensnachweisen und Mietschuldenfreiheitsbescheinigung.' },
    { sub: 'vermietung', q: 'Familie beauftragt dich mit Wohnungssuche; du akquirierst extra dafür eine neue Wohnung und vermittelst sie. Provision?',
      options: ['Vom Mieter zulässig – max. 2 Nettokaltmieten zzgl. USt', 'Verboten – Mieter dürfen nie zahlen', 'Unbegrenzt vom Mieter', 'Nur vom Vermieter'], correct: 0,
      explain: 'Das ist der Ausnahmefall des Bestellerprinzips: exklusiver Suchauftrag + eigens akquirierte Wohnung. Sonst zahlt der Vermieter.' },
    { sub: 'vermietung', q: 'Warum ist das Vermietungsgeschäft für Makler strategisch wertvoll?',
      options: ['Es baut Eigentümerbeziehungen auf, aus denen später Verkaufs- und Verwaltungsmandate entstehen', 'Wegen der hohen Einzelprovisionen', 'Weil es keine rechtlichen Pflichten gibt', 'Weil Mieter selten wechseln'], correct: 0,
      explain: 'Kleine Tickets, große Wirkung: Wer Eigentümern zuverlässig gute Mieter liefert, ist erste Wahl beim späteren Verkauf. Denk in Kundenlebenszyklen.' },

    // verhandlung
    { sub: 'verhandlung', q: 'Was besagt der Ankereffekt?',
      options: ['Die zuerst genannte Zahl prägt die gesamte Verhandlung', 'Man sollte nie zuerst ein Angebot machen', 'Verträge brauchen einen Notaranker', 'Preise sinken automatisch mit der Zeit'], correct: 0,
      explain: 'Der Anker wirkt selbst auf Profis. Deshalb: Angebotspreis strategisch setzen und in Verhandlungen die erste fundierte Zahl mit Begründung nennen.' },
    { sub: 'verhandlung', q: 'Ein Käufer sagt: „Der Preis ist zu hoch." Was ist die beste erste Reaktion?',
      options: ['Verständnisfrage: „Zu hoch im Vergleich wozu?" – erst verstehen, dann argumentieren', 'Sofort 10 % Rabatt anbieten', 'Das Gespräch beenden', 'Mit erfundenen Mitbietern drohen'], correct: 0,
      explain: 'Einwand ≠ Absage. Wer die Vergleichsbasis erfragt, kann gezielt mit Daten argumentieren – und erkennt Kaufsignale hinter dem Einwand.' },
    { sub: 'verhandlung', q: '„Es gibt noch drei weitere Interessenten" – obwohl es keine gibt. Bewertung?',
      options: ['Unzulässige Täuschung – so etwas macht ein seriöser Makler nie', 'Cleverer Verhandlungstrick', 'Standard im Vertrieb', 'Erlaubt bei Kapitalanlegern'], correct: 0,
      explain: 'Erfundene Konkurrenz ist Täuschung (Betrugsrisiko, Anfechtung) und zerstört bei Auffliegen deine Reputation. Verknappung nur, wenn sie real ist.' },
    { sub: 'verhandlung', q: 'Was gehört zu einem fairen Bieterverfahren?',
      options: ['Feste Fristen, gleiches Informationsniveau für alle Bieter, klare Regeln', 'Geheime Einzelabsprachen', 'Nur ausgewählte Bieter informieren', 'Automatischer Zuschlag ans höchste Gebot'], correct: 0,
      explain: 'Transparente Regeln schützen vor Mauschelei-Vorwürfen. Der Verkäufer bleibt frei, jedes oder kein Angebot anzunehmen – das klar kommunizieren.' },
    { sub: 'verhandlung', q: 'Warum ist aktives Zuhören die wichtigste Verhandlungstechnik?',
      options: ['Wer die wahren Motive (Zeitdruck, Emotion, Finanzen) kennt, verhandelt zielgenau', 'Weil man dabei Zeit gewinnt', 'Weil Reden Silber ist', 'Es beeindruckt die Gegenseite'], correct: 0,
      explain: 'Verhandlungen scheitern selten am Preis allein. Motive wie Umzugstermin, Anschlusskauf oder Emotion sind die eigentlichen Hebel.' },
    { sub: 'verhandlung', q: 'Der Verkäufer will ein niedriges schriftliches Angebot „gar nicht erst sehen". Was gilt?',
      options: ['Du musst ihn über jedes Angebot informieren – Entscheidung liegt bei ihm', 'Du darfst es wegwerfen', 'Du entscheidest selbst, was relevant ist', 'Niedrige Angebote sind unwirksam'], correct: 0,
      explain: 'Als Beauftragter des Verkäufers schuldest du vollständige Information. Auch „schlechte" Angebote sind Marktinformation – und oft der Beginn einer Verhandlung.' },
    { sub: 'verhandlung', q: 'Was ist die Grundhaltung seriöser Verhandlungsführung?',
      options: ['Hart in der Sache, verbindlich im Ton, ehrlich in den Fakten', 'Der Zweck heiligt die Mittel', 'Hauptsache Abschluss', 'Immer nachgeben für die Harmonie'], correct: 0,
      explain: 'Tricks bringen einen Deal, Vertrauen bringt eine Karriere: Empfehlungsgeschäft ist das Fundament erfolgreicher Makler.' },
  ],

  cards: [
    { sub: 'maklerrecht', front: 'Die 4 Voraussetzungen des Provisionsanspruchs?', back: '1. Wirksamer Maklervertrag (EFH/ETW an Verbraucher: Textform!)\n2. Maklerleistung: Nachweis oder Vermittlung\n3. Wirksamer Hauptvertrag\n4. Kausalität der Maklerleistung' },
    { sub: 'maklerrecht', front: 'Nachweis- vs. Vermittlungsmakler?', back: 'Nachweis: Benennung der Vertragsgelegenheit (Objekt/Partner).\nVermittlung: aktives Einwirken auf den Vertragsabschluss (Verhandeln).' },
    { sub: 'maklerrecht', front: '§ 656c BGB – Doppeltätigkeit?', back: 'Verkauf EFH/ETW an Verbraucher: Provision nur in GLEICHER Höhe von beiden Parteien. Erlass gegenüber einer Seite lässt auch den Anspruch gegen die andere entfallen.' },
    { sub: 'maklerrecht', front: '§ 656d BGB – nur eine Partei beauftragt?', back: 'Abwälzung auf die andere Partei max. 50 %; Zahlung erst nach Nachweis, dass der Auftraggeber seinen Anteil gezahlt hat.' },
    { sub: 'maklerrecht', front: 'Bestellerprinzip (Vermietung) – Kernregel + Obergrenze?', back: '„Wer bestellt, bezahlt" (WoVermittG, seit 2015). Mieter zahlt nur bei exklusivem Suchauftrag mit eigens akquirierter Wohnung. Max. 2 Nettokaltmieten zzgl. USt.' },
    { sub: 'maklerrecht', front: '§ 34c GewO – Voraussetzungen & Pflichten?', back: 'Gewerbeerlaubnis für Makler: persönliche Zuverlässigkeit + geordnete Vermögensverhältnisse. Dazu MaBV-Pflichten und Weiterbildung: 20 Std. in 3 Jahren.' },
    { sub: 'maklerrecht', front: 'Makler & Geldwäschegesetz – 3 Kernpflichten?', back: '1. Identifizierung beider Parteien (bei ernsthaftem Kaufinteresse; Miete ab 10.000 €/Monat)\n2. Wirtschaftlich Berechtigten klären\n3. Verdachtsmeldung an FIU (goAML) – ohne Info an den Kunden' },
    { sub: 'maklerrecht', front: 'Widerrufsrecht beim Maklervertrag?', back: 'Fernabsatz/außerhalb von Geschäftsräumen mit Verbrauchern: 14 Tage Widerruf. Ohne korrekte Belehrung: verlängertes Widerrufsrecht (12 Monate + 14 Tage) → Provision in Gefahr.' },
    { sub: 'maklerrecht', front: 'Was zerstört die Kausalität des Maklernachweises?', back: 'Vorkenntnis des Kunden (Objekt schon bekannt). Deshalb: Nachweise dokumentieren, Vorkenntnis schriftlich abfragen.' },
    { sub: 'akquise-expose', front: 'Auftragsarten des Maklers?', back: '1. Einfacher Auftrag (mehrere Makler + Selbstverkauf möglich)\n2. Alleinauftrag (nur ein Makler; Selbstverkauf bleibt)\n3. Qualifizierter Alleinauftrag (Verweisungsklausel – Interessenten an Makler; nur individuell vereinbar)' },
    { sub: 'akquise-expose', front: 'Pflichtangaben Energieausweis in Anzeigen?', back: '1. Art (Bedarfs-/Verbrauchsausweis)\n2. Endenergiebedarf/-verbrauch\n3. Energieträger der Heizung\n4. Baujahr\n5. Effizienzklasse (A+ bis H)' },
    { sub: 'akquise-expose', front: 'Unterlagen-Grundpaket für den Verkauf?', back: 'Grundbuchauszug, Flurkarte, Grundrisse + Wohnflächenberechnung, Energieausweis, Baujahr/Modernisierungsliste; bei ETW zusätzlich: Teilungserklärung, Protokolle, Abrechnung, Wirtschaftsplan, Rücklagenstand.' },
    { sub: 'akquise-expose', front: 'Beste Akquise-Kanäle für Makler?', back: 'Empfehlungen, Farming (Stadtteilpräsenz), Einwertungsangebote, Nachbarschaftsmailings nach Verkäufen, Netzwerk (Verwalter, Banken, Steuerberater, Anwälte). Kaltakquise auf Privatanzeigen: UWG-Risiko!' },
    { sub: 'kaufprozess', front: 'Formvorschrift Grundstückskauf?', back: 'Notarielle Beurkundung (§ 311b BGB) – sonst nichtig. Verbraucher: Entwurf 2 Wochen vor Termin (§ 17 Abs. 2a BeurkG).' },
    { sub: 'kaufprozess', front: 'Auflassungsvormerkung – Zweck?', back: 'Sichert den Käufer zwischen Beurkundung und Umschreibung: Verkäufer kann nicht mehr wirksam anderweitig verfügen. Eintragung ist typische Fälligkeitsvoraussetzung für den Kaufpreis.' },
    { sub: 'kaufprozess', front: 'Typische Fälligkeitsvoraussetzungen des Kaufpreises?', back: '1. Auflassungsvormerkung eingetragen\n2. Löschungsunterlagen für Altbelastungen liegen vor\n3. ggf. Verwalterzustimmung (§ 12 WEG)\n4. Fälligkeitsmitteilung des Notars' },
    { sub: 'kaufprozess', front: 'Kaufnebenkosten – Positionen & Größenordnung?', back: 'Grunderwerbsteuer 3,5–6,5 % (Bundesland), Notar + Grundbuch ~1,5–2 %, Maklerprovision (Käuferanteil) regional ~3,57 %. Gesamt: ca. 9–12 %.' },
    { sub: 'kaufprozess', front: 'Wann geht das Eigentum über?', back: 'Erst mit Eintragung des Käufers in Abt. I des Grundbuchs (nach Auflassung, Zahlung und Unbedenklichkeitsbescheinigung des Finanzamts).' },
    { sub: 'kaufprozess', front: '„Gekauft wie gesehen" – Grenze?', back: 'Der Haftungsausschluss gilt NICHT bei arglistig verschwiegenen Mängeln. Bekannte wesentliche Mängel müssen offengelegt werden – schützt Verkäufer und Makler.' },
    { sub: 'kaufprozess', front: 'Inhalt Übergabeprotokoll?', back: 'Zählerstände (Strom/Gas/Wasser/Heizung), Schlüsselliste, Zustand/Räume, übernommenes Inventar, offene Punkte, Datum, Unterschriften beider Parteien.' },
    { sub: 'vermietung', front: 'Unzulässige Fragen in der Selbstauskunft?', back: 'Schwangerschaft/Kinderwunsch, Religion, Partei, Gewerkschaft, sexuelle Identität, Mieterverein, Vorstrafen ohne Bezug. Bewerber dürfen hier falsch antworten („Notlüge").' },
    { sub: 'vermietung', front: 'Zulässige Auswahlkriterien bei der Vermietung?', back: 'Bonität (Einkommen ~3× Kaltmiete), Einkommensnachweise, Mietschuldenfreiheit, Haushaltsgröße passend zur Wohnung. Wirtschaftliche Kriterien sind AGG-fest – dokumentieren!' },
    { sub: 'vermietung', front: 'AGG bei Wohnungsvergabe – verbotene Merkmale?', back: 'Ethnische Herkunft, Geschlecht, Religion/Weltanschauung, Behinderung, Alter, sexuelle Identität. Ausnahme: besonderes Näheverhältnis (Vermieter wohnt selbst im Haus).' },
    { sub: 'vermietung', front: 'Mietpreisbremse: Auskunftspflicht des Vermieters?', back: 'Beruft er sich auf Ausnahmen (höhere Vormiete, Neubau, umfassende Modernisierung), muss er VOR Vertragsschluss unaufgefordert in Textform informieren – sonst keine Berufung darauf.' },
    { sub: 'verhandlung', front: 'Ankereffekt – und wie du ihn nutzt?', back: 'Die erste Zahl prägt die Verhandlung. Setze als Profi den ersten fundierten Anker (begründeter Angebotspreis / Einwertung mit Daten).' },
    { sub: 'verhandlung', front: '4 Schritte der Einwandbehandlung?', back: '1. Verstehen (Rückfrage)\n2. Isolieren („Sonst sind wir uns einig?")\n3. Mit Substanz argumentieren (Daten!)\n4. Brücke bauen (Gegenangebot strukturieren)' },
    { sub: 'verhandlung', front: 'Verlustaversion – Bedeutung für Verhandlungen?', back: 'Verluste wiegen psychologisch ~doppelt so schwer wie Gewinne. Formuliere Konsequenzen („diesen Käufer verlieren") statt nur Chancen.' },
    { sub: 'verhandlung', front: 'Regeln für ein sauberes Bieterverfahren?', back: 'Feste Frist, gleiche Informationen für alle, klare Verfahrensregeln, keine erfundenen Gebote, Verkäufer bleibt in der Annahme frei.' },
    { sub: 'verhandlung', front: 'Wichtigste Verhandlungstechnik?', back: 'Aktives Zuhören: wahre Motive (Zeitdruck, Emotionen, Finanzierung, Anschlusspläne) erkennen – sie sind die eigentlichen Verhandlungshebel.' },
  ],

  cloze: [
    { sub: 'maklerrecht', title: 'Provisionsrecht kompakt',
      intro: 'Ergänze die Begriffe und Zahlen.',
      text: 'Der Maklerlohn ist reiner {{Erfolgslohn|Erfolgslohn (§ 652 BGB)}}. Beim Verkauf von EFH/ETW an Verbraucher braucht der Maklervertrag {{Textform}}. Bei Doppeltätigkeit müssen beide Parteien in {{gleicher}} Höhe zahlen; bei einseitiger Beauftragung dürfen maximal {{50}} % abgewälzt werden. Bei der Vermietung gilt das {{Bestellerprinzip}} mit einer Obergrenze von {{2|zwei}} Nettokaltmieten zzgl. USt. Die Gewerbeerlaubnis regelt § {{34c}} GewO.' },
    { sub: 'akquise-expose', title: 'Anzeige & Exposé rechtssicher',
      intro: 'Ergänze die Begriffe.',
      text: 'In jede Immobilienanzeige gehören die Energieausweis-Pflichtangaben, darunter der wesentliche {{Energieträger}} und die {{Effizienzklasse}}. Der Ausweis ist spätestens bei der {{Besichtigung}} vorzulegen. Lasten wie Wegerechte findest du in Abteilung {{II|2|zwei}} des Grundbuchs. Planungssicherheit für professionelle Vermarktung gibt der {{Alleinauftrag}}.' },
    { sub: 'kaufprozess', title: 'Vom Angebot zum Eigentum',
      intro: 'Ergänze die Begriffe.',
      text: 'Der Grundstückskaufvertrag bedarf der notariellen {{Beurkundung}}. Verbraucher erhalten den Entwurf {{2 Wochen|14 Tage|zwei Wochen}} vorher. Zur Sicherung des Käufers wird eine {{Auflassungsvormerkung}} eingetragen. Das Eigentum geht erst mit der Eintragung ins {{Grundbuch}} über. Vorher verlangt das Finanzamt die {{Grunderwerbsteuer}}, ohne deren {{Unbedenklichkeitsbescheinigung}} keine Umschreibung erfolgt.' },
    { sub: 'vermietung', title: 'Rechtssichere Mietersuche',
      intro: 'Ergänze die Begriffe.',
      text: 'Fragen nach Schwangerschaft oder Religion sind {{unzulässig}} – Bewerber haben insoweit ein Recht zur {{Notlüge}}. Diskriminierung verbietet das {{AGG}}. Bonitätsunterlagen erst in der {{engeren Auswahl|engeren Wahl}} anfordern (DSGVO). In Gebieten mit Mietpreisbremse gilt: höchstens Vergleichsmiete plus {{10|zehn}} %.' },
    { sub: 'verhandlung', title: 'Verhandlungspsychologie',
      intro: 'Ergänze die Fachbegriffe.',
      text: 'Die erste genannte Zahl wirkt als {{Anker}}. Menschen gewichten Verluste stärker als Gewinne – das nennt man {{Verlustaversion}}. Zugeständnisse erzeugen Gegenleistungen ({{Reziprozität}}). Bei starker Nachfrage strukturiert man den Verkauf als {{Bieterverfahren}}. Die wichtigste Technik bleibt aktives {{Zuhören}}.' },
  ],

  calc: [
    {
      sub: 'maklerrecht', title: 'Provision berechnen (inkl. USt)',
      generate() {
        const preis = U.randInt(25, 90) * 10000;
        const satz = U.pick([2.98, 3.57]);
        const answer = Math.round(preis * satz / 100);
        return {
          text: `Ein Haus wird für <strong>${U.eur(preis)}</strong> verkauft. Die Käuferprovision beträgt <strong>${U.num(satz, 2)} % inkl. USt</strong>. Wie viel zahlt der Käufer an Provision?`,
          unit: '€', answer, tolerance: Math.max(10, answer * 0.005), decimals: 0,
          steps: [`${U.eur(preis)} × ${U.num(satz, 2)} % = <strong>${U.eur(answer)}</strong>`],
        };
      },
    },
    {
      sub: 'maklerrecht', title: 'Netto-Provision aus Brutto',
      generate() {
        const brutto = U.randInt(6, 30) * 1000;
        const answer = Math.round(brutto / 1.19 * 100) / 100;
        return {
          text: `Du erhältst eine Provision von <strong>${U.eur(brutto)}</strong> (brutto, inkl. 19 % USt). Wie hoch ist dein Netto-Honorar? (2 Nachkommastellen)`,
          unit: '€', answer, tolerance: 1, decimals: 2,
          steps: [
            `Netto = Brutto ÷ 1,19`,
            `${U.eur(brutto)} ÷ 1,19 = <strong>${U.num(answer, 2)} €</strong>`,
            `Merke: nicht 19 % abziehen (das wäre falsch), sondern durch 1,19 teilen!`,
          ],
        };
      },
    },
    {
      sub: 'kaufprozess', title: 'Kaufnebenkosten komplett',
      generate() {
        const preis = U.randInt(20, 70) * 10000;
        const grest = U.pick([3.5, 5.0, 6.0, 6.5]);
        const notar = 2.0;
        const makler = 3.57;
        const answer = Math.round(preis * (grest + notar + makler) / 100);
        return {
          text: `Kaufpreis: <strong>${U.eur(preis)}</strong>. Grunderwerbsteuer: <strong>${U.num(grest, 1)} %</strong>, Notar & Grundbuch: <strong>${U.num(notar, 1)} %</strong>, Maklerprovision: <strong>${U.num(makler, 2)} %</strong>. Berechne die gesamten Kaufnebenkosten.`,
          unit: '€', answer, tolerance: Math.max(50, answer * 0.005), decimals: 0,
          steps: [
            `Summe der Sätze: ${U.num(grest, 1)} + ${U.num(notar, 1)} + ${U.num(makler, 2)} = ${U.num(grest + notar + makler, 2)} %`,
            `${U.eur(preis)} × ${U.num(grest + notar + makler, 2)} % = <strong>${U.eur(answer)}</strong>`,
            `Daumenregel: ~9–12 % des Kaufpreises – muss der Käufer i. d. R. aus Eigenkapital zahlen.`,
          ],
        };
      },
    },
    {
      sub: 'vermietung', title: 'Mieterprovision (Bestellerprinzip-Ausnahme)',
      generate() {
        const kalt = U.randInt(60, 160) * 10;
        const answer = Math.round(kalt * 2 * 1.19 * 100) / 100;
        return {
          text: `Du hast für einen Suchkunden exklusiv eine Wohnung akquiriert (Nettokaltmiete <strong>${U.eur(kalt)}</strong>) – der Mieter ist ausnahmsweise provisionspflichtig. Wie hoch ist die maximal zulässige Provision (2 Nettokaltmieten zzgl. 19 % USt)?`,
          unit: '€', answer, tolerance: 1, decimals: 2,
          steps: [
            `2 Nettokaltmieten: 2 × ${U.eur(kalt)} = ${U.eur(kalt * 2)}`,
            `Zzgl. 19 % USt: × 1,19 = <strong>${U.num(answer, 2)} €</strong>`,
          ],
        };
      },
    },
    {
      sub: 'maklerrecht', title: 'Provisionsteilung § 656d prüfen',
      generate() {
        const preis = U.randInt(30, 80) * 10000;
        const gesamt = U.pick([5.95, 7.14]);
        const answer = Math.round(preis * gesamt / 100 / 2);
        return {
          text: `Nur der Verkäufer hat dich beauftragt (Gesamtprovision <strong>${U.num(gesamt, 2)} % inkl. USt</strong> vom Kaufpreis <strong>${U.eur(preis)}</strong>). Welchen Betrag darfst du nach § 656d BGB höchstens auf den kaufenden Verbraucher abwälzen?`,
          unit: '€', answer, tolerance: Math.max(10, answer * 0.005), decimals: 0,
          steps: [
            `Gesamtprovision: ${U.eur(preis)} × ${U.num(gesamt, 2)} % = ${U.eur(Math.round(preis * gesamt / 100))}`,
            `Maximal 50 % abwälzbar: ÷ 2 = <strong>${U.eur(answer)}</strong>`,
            `Und: Der Käufer zahlt erst nach Nachweis der Verkäuferzahlung.`,
          ],
        };
      },
    },
  ],

  cases: [
    {
      id: 'erster-alleinauftrag',
      title: 'Der umkämpfte Alleinauftrag',
      teaser: 'Drei Makler buhlen um ein Einfamilienhaus – wie gewinnst du seriös das Mandat?',
      intro: `Familie Brandt (beide Mitte 60) will ihr Einfamilienhaus verkaufen und ins Betreute Wohnen ziehen.
        Sie haben drei Makler eingeladen. Der erste hat 680.000 € „garantiert", der zweite wirbt mit 0 € Verkäuferprovision.
        Deine fundierte Einwertung ergibt realistisch 590.000–620.000 €. Jetzt sitzt du im Wohnzimmer der Brandts.`,
      steps: [
        {
          situation: 'Herr Brandt sagt: „Ihr Kollege garantiert uns 680.000 €. Warum sollten wir Ihnen den Auftrag geben, wenn Sie weniger versprechen?"',
          question: 'Deine Antwort?',
          options: [
            { quality: 'best', text: 'Ich erkläre den Unterschied zwischen Versprechen und Markt: Kein Makler kann Preise „garantieren". Ich zeige meine Vergleichsdaten, erkläre die Folgen eines überhöhten Starts und biete einen dokumentierten Vermarktungsplan mit realistischer Preisstrategie.',
              feedback: 'Genau: Wer mit Daten und Prozess überzeugt statt mit Fantasiezahlen, gewinnt die Kunden, die man behalten will. Die „Einkaufslüge" des Kollegen kannst du sachlich entlarven, ohne ihn schlechtzumachen: „Fragen Sie ihn, welche Vergleichsobjekte seine Zahl stützen."' },
            { quality: 'okay', text: 'Ich gehe auf 660.000 € mit – ganz so hoch wie der Kollege muss es ja nicht sein.',
              feedback: 'Damit machst du dasselbe Spiel eine Nummer kleiner. Wenn deine Analyse 590–620 T€ sagt, ist auch 660 T€ eine Zahl ohne Fundament – und dein Alleinstellungsmerkmal (Seriosität) ist weg.' },
            { quality: 'bad', text: 'Ich sage, der Kollege sei ein bekannter Betrüger und seine Firma stehe vor der Pleite.',
              feedback: 'Herabwürdigung von Mitbewerbern ist unseriös und kann wettbewerbsrechtlich (UWG) angreifbar sein. Du gewinnst Mandate über deine Stärken, nicht über Schlammschlachten.' },
          ],
        },
        {
          situation: 'Frau Brandt fragt nach dem zweiten Angebot: „Der andere Makler kostet uns gar nichts – Sie wollen 3 % von uns. Warum?"',
          question: 'Wie erklärst du dein Provisionsmodell?',
          options: [
            { quality: 'best', text: 'Ich erkläre die Rechtslage (§ 656c/d: Der Käufer zahlt maximal so viel wie der Verkäufer) und rechne vor: „0 € Verkäuferprovision" heißt 0 € Käuferprovision oder versteckte Kosten – Qualität in Fotos, Marketing und Verhandlung zahlt sich im Verkaufspreis mehrfach aus.',
              feedback: 'Stark: Viele Verkäufer kennen die Kopplung aus § 656c nicht. Wer transparent macht, dass „kostenlos" meist an anderer Stelle bezahlt wird (schwächere Vermarktung, weniger Einsatz), verwandelt den Preisnachteil in ein Qualitätsargument.' },
            { quality: 'okay', text: 'Ich biete an, auf die Hälfte meiner Provision zu verzichten, um den Auftrag zu bekommen.',
              feedback: 'Rabatt als Reflex entwertet deine Leistung – und über § 656c koppelst du damit auch die Käuferseite. Gelegentlich strategisch vertretbar, aber erst, wenn Leistungsargumente ausgereizt sind.' },
            { quality: 'bad', text: 'Ich sage: „Dann gehen Sie doch zu dem – viel Erfolg."',
              feedback: 'Beleidigte Reaktionen beenden Gespräche, die du noch gewinnen konntest. Einwände sind Kaufsignale: Wer nach der Provision fragt, vergleicht ernsthaft.' },
          ],
        },
        {
          situation: 'Die Brandts sind überzeugt und wollen dir den Auftrag geben. Herr Brandt: „Aber bitte ohne lange Verträge – machen wir das per Handschlag."',
          question: 'Wie gestaltest du den Auftrag?',
          options: [
            { quality: 'best', text: 'Ich erkläre freundlich, dass ein schriftlicher Alleinauftrag (mit Laufzeit, Leistungskatalog, Preisstrategie und Widerrufsbelehrung) beide Seiten schützt – und für meinen Provisionsanspruch beim Verkauf an Verbraucher sogar Textform vorgeschrieben ist.',
              feedback: 'Richtig: § 656a verlangt Textform, und ohne Widerrufsbelehrung riskierst du den ganzen Lohn. Ein klarer Leistungskatalog (Fotos, Portale, Reporting) macht den Vertrag zum Verkaufsargument statt zur Hürde.' },
            { quality: 'okay', text: 'Ich starte per Handschlag und reiche den Vertrag nach, sobald die Vermarktung läuft.',
              feedback: 'Gefährliche Reihenfolge: Alles, was du vor Vertragsschluss (und vor Ablauf/Verzicht der Widerrufsfrist) leistest, kann provisionsfrei bleiben. Erst Vertrag + Belehrung, dann Leistung.' },
            { quality: 'bad', text: 'Handschlag genügt unter anständigen Leuten – Verträge zerstören nur das Vertrauen.',
              feedback: 'Beim Verbrauchergeschäft über EFH/ETW ist der formlose Maklervertrag schlicht unwirksam (§ 656a BGB) – du würdest komplett umsonst arbeiten.' },
          ],
        },
        {
          situation: 'Nach 3 Wochen Vermarktung zum Preis von 619.000 € liegen zwei Angebote vor: 585.000 € (Finanzierung bestätigt, flexibel beim Termin) und 605.000 € (Finanzierung „in Klärung", will aber sofort den Notartermin).',
          question: 'Was empfiehlst du den Brandts?',
          options: [
            { quality: 'best', text: 'Ich stelle beide Angebote mit Chancen und Risiken transparent dar, fordere vom 605.000-€-Bieter kurzfristig eine Finanzierungsbestätigung und verhandle parallel mit dem sicheren Bieter über eine Preisverbesserung.',
              feedback: 'Profi-Vorgehen: Der Preis ist nur ein Kriterium – Transaktionssicherheit ist das andere. Mit einer Frist für den Finanzierungsnachweis erzeugst du Tempo, ohne den sicheren Käufer zu verlieren. Die Entscheidung treffen die Brandts auf voller Informationsbasis.' },
            { quality: 'okay', text: 'Klar zum Höchstgebot raten – 20.000 € mehr sind 20.000 € mehr.',
              feedback: 'Ein Angebot ohne gesicherte Finanzierung kann 2–3 Monate später platzen – dann ist der sichere Käufer weg und das Objekt „verbrannt". Höchstpreis ohne Sicherheit ist oft der teurere Weg.' },
            { quality: 'bad', text: 'Ich nenne beiden Bietern die jeweilige Gegenofferte plus einen Aufschlag, den ich mir ausgedacht habe, um sie hochzutreiben.',
              feedback: 'Erfundene Gebotsstände sind Täuschung und können als Betrug gewertet werden. Ein strukturiertes, ehrliches Verfahren erzielt nachhaltig bessere Ergebnisse – und schützt deine Lizenz und Reputation.' },
          ],
        },
      ],
    },
    {
      id: 'kaufabwicklung-krise',
      title: 'Kurz vor dem Notartermin wackelt alles',
      teaser: 'Finanzierungsprobleme, ein verschwiegener Mangel und Zeitdruck – rette die Transaktion.',
      intro: `Du hast für das Ehepaar Krüger einen Käufer für ihre Eigentumswohnung gefunden: Herr Steiner, 34,
        Angestellter, Kaufpreis 385.000 €. Der Notartermin ist in 10 Tagen. Da ruft Herr Steiner an:
        Seine Bank habe „Probleme mit dem Objekt" – und beiläufig erwähnt Frau Krüger dir gegenüber,
        im Schlafzimmer sei „ab und zu etwas Schimmel in der Ecke, aber das haben wir immer weggewischt".`,
      steps: [
        {
          situation: 'Erst das Bank-Problem: Die Bank von Herrn Steiner bemängelt die niedrige Erhaltungsrücklage der WEG und eine im Protokoll erwähnte anstehende Fassadensanierung.',
          question: 'Wie reagierst du?',
          options: [
            { quality: 'best', text: 'Ich besorge sofort belastbare Fakten vom Verwalter (Beschlusslage, Kostenschätzung, geplante Finanzierung der Maßnahme) und gebe sie strukturiert an Käufer und Bank – ggf. mit realistischer Einordnung einer möglichen Sonderumlage.',
              feedback: 'Genau: Banken brauchen Fakten, keine Beruhigungen. Oft entspannt sich die Lage, wenn die Maßnahme beziffert und die Finanzierung (Rücklage/Sonderumlage) geklärt ist – und der Käufer kann sie in den Preis oder die Darlehenshöhe einbauen.' },
            { quality: 'okay', text: 'Ich empfehle Herrn Steiner, schnell eine andere Bank zu suchen, die weniger genau hinschaut.',
              feedback: 'Kurzfristig verlockend, aber das Problem (anstehende Sanierung = kommende Kosten) verschwindet nicht durch eine unkritischere Bank – es trifft dann den Käufer unvorbereitet. Transparente Klärung ist der bessere Weg.' },
            { quality: 'bad', text: 'Ich sage der Bank, die Fassadensanierung sei vom Tisch – das Protokoll sei veraltet.',
              feedback: 'Falschangaben gegenüber der finanzierenden Bank sind ein absolutes No-Go (Betrugsnähe, Haftung). Ein Makler, der für den Abschluss lügt, riskiert Existenz und Gewerbeerlaubnis.' },
          ],
        },
        {
          situation: 'Jetzt der Schimmel: Frau Krüger bittet dich, das „kleine Thema" nicht zu erwähnen – „das sieht doch keiner, und wir wollen den Preis nicht gefährden".',
          question: 'Was tust du?',
          options: [
            { quality: 'best', text: 'Ich erkläre den Krügers, dass wiederkehrender Schimmel offenbarungspflichtig ist: Verschweigen wäre Arglist – der Haftungsausschluss im Kaufvertrag würde nicht schützen, Rückabwicklung und Schadensersatz drohen. Wir legen ihn offen und klären die Ursache.',
              feedback: 'Richtig und alternativlos: Arglistig verschwiegene Mängel durchbrechen „gekauft wie gesehen" (§ 444 BGB). Auch du als Makler haftest, wenn du bekannte Mängel verschweigst. Offenlegung mit Ursachenklärung (Lüftung? Wärmebrücke?) ist auch verhandlungstaktisch beherrschbar.' },
            { quality: 'okay', text: 'Ich erwähne den Schimmel mündlich beim nächsten Besichtigungstermin, aber nehme ihn nicht ins Protokoll auf.',
              feedback: 'Halbherzig: Was nicht dokumentiert ist, lässt sich später nicht beweisen – im Streitfall steht Aussage gegen Aussage. Offenlegung gehört schriftlich dokumentiert (z. B. im Kaufvertrag).' },
            { quality: 'bad', text: 'Ich halte mich raus – Mängel sind allein Sache des Verkäufers.',
              feedback: 'Falsch: Als Makler hast du eigene Aufklärungspflichten über dir bekannte wesentliche Mängel. „Raushalten" schützt dich nicht – Wissen verpflichtet.' },
          ],
        },
        {
          situation: 'Herr Steiner bleibt trotz offener Punkte interessiert, will aber wegen Schimmel und Sanierungsrisiko 15.000 € Preisnachlass. Die Krügers sind empört: „Keinen Cent!"',
          question: 'Wie führst du die Verhandlung?',
          options: [
            { quality: 'best', text: 'Ich objektiviere: Kostenschätzung für die Schimmelursache einholen, Sonderumlagen-Risiko beziffern, dann einen begründeten Kompromiss strukturieren (z. B. Nachlass in Höhe der belegten Kosten oder Mängelbeseitigung durch Verkäufer vor Übergabe).',
              feedback: 'So löst man festgefahrene Positionen: Aus „15.000 € – keinen Cent!" wird eine Sachfrage („Was kostet es wirklich?"). Belegte Zahlen akzeptieren beide Seiten leichter als runde Forderungen. Alternativen (Reparatur statt Nachlass) erweitern den Lösungsraum.' },
            { quality: 'okay', text: 'Ich schlage vor, sich einfach in der Mitte bei 7.500 € zu treffen.',
              feedback: '„Mitte" ist besser als Abbruch, aber unbegründete Kompromisse fühlen sich für beide wie Verlust an. Mit einer Kostenbasis wird derselbe Betrag plötzlich akzeptabel – Begründung schlägt Basar.' },
            { quality: 'bad', text: 'Ich setze die Krügers unter Druck: Wenn sie nicht nachgeben, ziehe ich mich vom Auftrag zurück.',
              feedback: 'Drohungen gegen den eigenen Auftraggeber zerstören das Mandat. Deine Rolle ist es, Lösungen zu strukturieren – nicht, die schwächere Seite zu erpressen.' },
          ],
        },
        {
          situation: 'Einigung: 378.000 €, Schimmelursache (Wärmebrücke) wird im Vertrag offengelegt, die Fassadenfakten liegen der Bank vor. Die Finanzierung steht. Was jetzt bis zum Notartermin?',
          question: 'Deine letzte Etappe als Profi?',
          options: [
            { quality: 'best', text: 'Ich koordiniere: angepasster Vertragsentwurf rechtzeitig an alle (Verbraucherfrist!), GwG-Identifizierung abschließen, Unterlagen für die Bank finalisieren, Terminbestätigungen einholen – und bereite die Übergabe (Protokoll, Zähler, Schlüssel) vor.',
              feedback: 'Genau das unterscheidet Profis: Die letzten 10 Tage sind Projektmanagement. Denk an die 2-Wochen-Frist bei Entwurfsänderungen zulasten des Verbrauchers, die GwG-Dokumentation und die Nachbetreuung – hier entstehen Empfehlungen.' },
            { quality: 'okay', text: 'Der Notar übernimmt jetzt – ich melde mich zur Provisionsrechnung nach dem Termin.',
              feedback: 'Der Notar macht die Beurkundung, nicht dein Transaktionsmanagement. Wer sich jetzt zurücklehnt, riskiert vermeidbare Terminplatzer – und verschenkt den Eindruck, der Empfehlungen bringt.' },
            { quality: 'bad', text: 'Ich buche erstmal Urlaub – der Deal ist ja durch.',
              feedback: 'Bis zur Beurkundung ist nichts „durch" – es gibt keinen wirksamen Vertrag vor dem Notartermin. Gerade jetzt entscheidet Erreichbarkeit über Erfolg oder Absprung.' },
          ],
        },
      ],
    },
  ],
});
