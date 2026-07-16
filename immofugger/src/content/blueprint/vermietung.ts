import type { ModuleGroup } from './types'

export const vermietung: ModuleGroup = {
  slug: 'vermietung',
  title: 'Vermietung & Bewirtschaftung',
  description:
    'Nach dem Kauf beginnt die eigentliche Arbeit: den richtigen Mieter finden, sauber übergeben, korrekt abrechnen und den Bestand pflegen. Das Handwerk, das aus einem Kauf ein funktionierendes Investment macht.',
  lessons: [
    {
      id: 'vermietung-1',
      title: 'Mieter finden & prüfen: Die wichtigste Entscheidung nach dem Kauf',
      intro:
        'Der falsche Mieter kann dich mehr Geld und Nerven kosten als jede Sanierung. Diese Lektion zeigt dir, wie du seriös inserierst, fair auswählst — und dich dabei im rechtlichen Rahmen bewegst.',
      sections: [
        {
          heading: 'Das Inserat: Ehrlich zieht die Richtigen an',
          body: 'Ein gutes Inserat beschreibt die Wohnung präzise (Größe, Zimmer, Ausstattung, Etage, verfügbar ab), nennt Kaltmiete, Nebenkosten und Kaution transparent und zeigt aussagekräftige, aktuelle Fotos bei Tageslicht. Schönfärberei rächt sich: Wer bei der Besichtigung enttäuscht wird, springt ab — oder wird zum unzufriedenen Mieter.\n\nNenne im Inserat, welche Unterlagen du zur Besichtigung erwartest (Einkommensnachweise, SCHUFA-BonitätsAuskunft, Mieterselbstauskunft). Das filtert vor und signalisiert Professionalität. Formuliere neutral und diskriminierungsfrei — das ist nicht nur Anstand, sondern rechtlich geboten (Allgemeines Gleichbehandlungsgesetz).',
        },
        {
          heading: 'Die Bonitätsprüfung: Was du fragen darfst',
          body: 'Zulässig und üblich sind: Einkommensnachweise der letzten drei Monate, eine SCHUFA-BonitätsAuskunft (die spezielle Variante für Vermieter), die Mieterselbstauskunft und — mit Einschränkungen — eine Mietschuldenfreiheitsbescheinigung des Vorvermieters. Faustregel Bezahlbarkeit: Die Warmmiete sollte etwa ein Drittel des Nettoeinkommens nicht übersteigen.\n\nGrenzen kennen: Fragen nach Familienplanung, Religion, Herkunft, Parteizugehörigkeit oder Vorstrafen sind unzulässig; entsprechende Falschangaben des Bewerbers sind folgenlos. Auch nach laufenden Ermittlungsverfahren darfst du nicht beliebig forschen. Datenschutz gilt: Unterlagen abgelehnter Bewerber werden gelöscht, nicht gesammelt.',
        },
        {
          heading: 'Auswahl mit System statt Bauchgefühl',
          body: 'Bewerte anhand nachvollziehbarer, sachlicher Kriterien: gesicherte Bonität, plausible Wohndauer-Perspektive, Vollständigkeit und Ehrlichkeit der Unterlagen, ein stimmiger Gesamteindruck. Ein sympathischer, aber überschuldeter Bewerber ist ein höheres Risiko als ein zurückhaltender mit soliden Zahlen.\n\nDer beste Mieter ist nicht der mit den höchsten 20 € Mehrgebot, sondern der, der zuverlässig zahlt und lange bleibt. Jeder Mieterwechsel kostet dich Leerstand, Renovierung und Verwaltungsaufwand — Stabilität ist bares Geld. Führe die Auswahl dokumentiert, dann kannst du deine Entscheidung im Zweifel sachlich begründen.',
        },
        {
          heading: 'Die Zusage und der Weg zum Vertrag',
          body: 'Sage dem ausgewählten Bewerber verbindlich zu und den anderen zeitnah und höflich ab — die Immobilienwelt ist kleiner, als man denkt. Vereinbare den Vertragsschluss und die Übergabe. Reserviere die Wohnung nicht ewig gegen eine „Reservierungsgebühr" — solche Gebühren sind rechtlich heikel bis unwirksam.\n\nBevor du unterschreibst, prüfe die Kaution (maximal drei Nettokaltmieten, oft in drei Raten) und kläre den Einzugstermin. Erst mit unterschriebenem Vertrag und gezahlter erster Kautionsrate bzw. Miete ist das Mietverhältnis unter Dach und Fach — bis dahin bleibt die Tür für Rückzieher rechtlich offen.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der teure „Sympathie-Mieter"',
        body: 'Für eine Wohnung (Warmmiete 780 €) hat Nadia zwei Favoriten. Bewerber A: sympathisch, selbstständig, legt aber nur eine BWA und keine sauberen Einkommensnachweise vor, bietet 30 € mehr. Bewerberin B: eher wortkarg, unbefristet angestellt, Netto 2.900 €, lückenlose SCHUFA, Mietschuldenfreiheitsbescheinigung. Nadia rechnet: Bei A liegt die Warmmiete bei unklarer, schwankender Einkommensbasis; bei B bei 27 % eines sicheren Netto. Sie wählt B. Zwei Jahre später zahlt B pünktlich und wohnt noch dort — während A, wie sie später hört, beim Konkurrenzobjekt zwei Mietausfälle produzierte. Die 30 € Mehrgebot hätten ein Vielfaches gekostet.',
      },
      note: 'Ehrlich inserieren, mit zulässigen Mitteln prüfen (Einkommensnachweise, SCHUFA, Selbstauskunft — Warmmiete max. ~⅓ des Nettoeinkommens), diskriminierungsfrei und datensparsam auswählen. Zuverlässigkeit und lange Wohndauer schlagen jedes kleine Mehrgebot. Bildungsinhalt, keine Rechtsberatung.',
      legalHint: true,
      wikiRefs: ['mieterselbstauskunft', 'schufa', 'kaution', 'mietvertrag'],
      quiz: [
        {
          q: 'Welche Frage darfst du einem Mietbewerber NICHT stellen?',
          options: [
            'Nach dem Nettoeinkommen',
            'Nach einer SCHUFA-BonitätsAuskunft',
            'Nach Familienplanung, Religion oder Herkunft',
            'Nach dem gewünschten Einzugstermin',
          ],
          correct: 2,
          explanation:
            'Fragen nach Familienplanung, Religion, Herkunft o. Ä. sind unzulässig — Falschangaben dazu sind für den Bewerber folgenlos (AGG/Datenschutz).',
        },
        {
          q: 'Welche Faustregel gilt für die Bezahlbarkeit?',
          options: [
            'Die Kaltmiete = das halbe Netto',
            'Die Warmmiete sollte etwa ein Drittel des Nettoeinkommens nicht übersteigen',
            'Das Netto muss mindestens 5.000 € betragen',
            'Es gibt keine Grenze',
          ],
          correct: 1,
          explanation:
            'Als Orientierung sollte die Warmmiete rund ein Drittel des Nettoeinkommens nicht überschreiten — mehr erhöht das Ausfallrisiko.',
        },
        {
          q: 'Warum ist ein zuverlässiger Langzeitmieter meist wertvoller als 30 € Mehrgebot?',
          options: [
            'Weil höhere Miete steuerlich schlecht ist',
            'Weil jeder Mieterwechsel Leerstand, Renovierung und Aufwand kostet — Stabilität spart real Geld',
            'Weil die Bank es vorschreibt',
            'Das stimmt nicht, Mehrgebot gewinnt immer',
          ],
          correct: 1,
          explanation:
            'Fluktuation ist teuer: Leerstandsmonate und Renovierung fressen kleine Mehreinnahmen schnell auf. Zuverlässigkeit rechnet sich.',
        },
        {
          q: 'Wie gehst du mit den Unterlagen abgelehnter Bewerber um?',
          options: [
            'Für spätere Vermietungen aufbewahren',
            'Datenschutzkonform löschen',
            'An andere Vermieter weitergeben',
            'Im Inserat veröffentlichen',
          ],
          correct: 1,
          explanation:
            'Personenbezogene Daten abgelehnter Bewerber sind nach Abschluss des Auswahlverfahrens zu löschen — Sammeln ist datenschutzwidrig.',
        },
      ],
    },
    {
      id: 'vermietung-2',
      title: 'Der Mietvertrag: Bausteine, die dich schützen',
      intro:
        'Der Mietvertrag regelt jahrelang das Verhältnis zu deinem Mieter. Ein sauberer, aktueller Vertrag verhindert Streit — ein schlechter produziert ihn. Diese Lektion zeigt die wichtigsten Bausteine.',
      sections: [
        {
          heading: 'Fundament: aktuelle, geprüfte Vorlage',
          body: 'Nutze eine aktuelle Vorlage von Eigentümerverbänden (etwa Haus & Grund) oder einem Fachanwalt — keine zehn Jahre alten Muster aus dem Netz. Das Mietrecht entwickelt sich durch Rechtsprechung ständig weiter, und unwirksame Klauseln fallen immer zu Lasten des Vermieters weg: Dann gilt die gesetzliche Regelung, die oft mieterfreundlicher ist als deine gewollte Vereinbarung.\n\nGrundentscheidung: unbefristeter Vertrag (Regelfall) oder Zeitmietvertrag (nur mit gesetzlichem Befristungsgrund wie geplantem Eigenbedarf — sonst gilt er als unbefristet). Für Kapitalanleger ist der unbefristete Standardvertrag fast immer richtig.',
        },
        {
          heading: 'Miethöhe, Staffel, Index',
          body: 'Du kannst die Miete fest vereinbaren (dann Erhöhung nur über Vergleichsmiete/Modernisierung im engen gesetzlichen Rahmen) oder von Anfang an dynamisieren: Die Staffelmiete legt künftige Erhöhungsschritte betragsmäßig fest (mindestens ein Jahr Abstand). Die Indexmiete koppelt die Miete an den Verbraucherpreisindex — praktisch in Inflationsphasen, aber ohne zusätzliche Vergleichsmieten-Erhöhung.\n\nBei Neuvermietung: Prüfe, ob am Standort die Mietpreisbremse gilt (Neumiete grundsätzlich max. 10 % über ortsüblicher Vergleichsmiete, mit Ausnahmen etwa für Neubau oder umfassende Modernisierung). Regional und rechtlich bewegt sich hier viel — aktuellen Stand prüfen.',
        },
        {
          heading: 'Betriebskosten, Kaution, Schönheitsreparaturen',
          body: 'Betriebskosten: Vereinbare ausdrücklich die Umlage der Betriebskosten nach Betriebskostenverordnung mit angemessener Vorauszahlung — ohne wirksame Vereinbarung trägst du sie selbst. Kaution: maximal drei Nettokaltmieten, der Mieter darf in drei Raten zahlen, du musst sie getrennt von deinem Vermögen und insolvenzfest anlegen.\n\nSchönheitsreparaturen: nur mit flexibler, wirksamer Klausel („bei Bedarf", übliche Fristen als Richtwerte) auf den Mieter übertragbar — starre Fristen oder eine Endrenovierungspflicht unabhängig vom Zustand sind unwirksam und befreien den Mieter komplett. Übergib die Wohnung möglichst renoviert und dokumentiere das im Protokoll.',
        },
        {
          heading: 'Typische unwirksame Klauseln vermeiden',
          body: 'Klassiker, die Verträge kippen: starre Renovierungsfristen, Kleinreparaturklauseln ohne Höchstgrenzen (zulässig nur bis zu einem angemessenen Einzelbetrag und Jahresdeckel), generelle Tierhaltungsverbote (pauschal unwirksam — Einzelfallabwägung), Kündigungsausschlüsse ohne zeitliche Grenze, überzogene Nutzungsverbote.\n\nMerke: Jede unwirksame Klausel ist schlimmer als keine — sie erweckt den Anschein einer Regelung, hält aber vor Gericht nicht, und du stehst schlechter da als mit der klaren gesetzlichen Lage. Weniger, aber wirksame Klauseln schlagen ein überladenes Vertragswerk. Im Zweifel: Fachanwalt für Mietrecht.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Staffelmiete rechnet vor',
        body: 'Timo vermietet neu zu 720 € kalt und vereinbart eine Staffelmiete: +25 € nach 12 Monaten, +25 € nach 24 Monaten, +30 € nach 36 Monaten. Vorteil: Er muss keine aufwendigen Vergleichsmieten-Begründungen schreiben, die Erhöhungen sind rechtssicher vereinbart und planbar, der Mieter kennt sie von Anfang an (Transparenz = weniger Streit). Nach drei Jahren steht die Miete bei 800 € — ohne ein einziges Erhöhungsverlangen. Wichtig war: mindestens 12 Monate Abstand je Stufe und konkrete Beträge (nicht Prozente) im Vertrag. Am Standort galt keine Mietpreisbremse, sonst hätte er die Ausgangsmiete zusätzlich prüfen müssen.',
      },
      note: 'Aktuelle Vorlage nutzen, unwirksame Klauseln (starre Fristen, pauschale Verbote) vermeiden — sie fallen immer zu deinen Lasten weg. Miethöhe fest, gestaffelt oder indexiert; Kaution max. 3 Kaltmieten getrennt anlegen; Betriebskostenumlage ausdrücklich vereinbaren. Bildungsinhalt, im Zweifel Fachanwalt.',
      legalHint: true,
      wikiRefs: ['mietvertrag', 'staffelmiete', 'indexmiete', 'mietpreisbremse', 'kaution', 'betriebskosten'],
      quiz: [
        {
          q: 'Was passiert mit einer unwirksamen Mietvertragsklausel?',
          options: [
            'Sie gilt trotzdem eingeschränkt',
            'Sie fällt ersatzlos weg — es gilt die (oft mieterfreundlichere) gesetzliche Regelung',
            'Der ganze Vertrag ist nichtig',
            'Der Mieter muss eine Ersatzklausel akzeptieren',
          ],
          correct: 1,
          explanation:
            'Unwirksame Klauseln werden nicht „gerettet"; an ihre Stelle tritt das Gesetz — meist zum Nachteil des Vermieters. Deshalb: nur wirksame Klauseln.',
        },
        {
          q: 'Was kennzeichnet eine Staffelmiete?',
          options: [
            'Kopplung an den Verbraucherpreisindex',
            'Im Vertrag festgelegte, betragsmäßige Erhöhungsschritte mit mind. 12 Monaten Abstand',
            'Eine jährliche Erhöhung nach Belieben',
            'Eine einmalige Erhöhung nach Modernisierung',
          ],
          correct: 1,
          explanation:
            'Die Staffelmiete vereinbart konkrete Erhöhungsbeträge im Voraus (mind. ein Jahr Abstand) — ohne separate Vergleichsmieten-Begründung.',
        },
        {
          q: 'Wie muss die Mietkaution angelegt werden?',
          options: [
            'Auf deinem privaten Girokonto',
            'Getrennt vom Vermögen des Vermieters, insolvenzfest',
            'Gar nicht, du darfst sie sofort ausgeben',
            'In Aktien des Mieters',
          ],
          correct: 1,
          explanation:
            'Die Kaution ist treuhänderisch, getrennt und insolvenzfest anzulegen — sie bleibt Vermögen des Mieters.',
        },
        {
          q: 'Welche Klausel ist typischerweise unwirksam?',
          options: [
            'Umlage der Betriebskosten nach BetrKV',
            'Kaution in drei Raten',
            'Ein generelles, pauschales Tierhaltungsverbot',
            'Unbefristetes Mietverhältnis',
          ],
          correct: 2,
          explanation:
            'Pauschale Tierhaltungsverbote sind unwirksam; es bedarf einer Einzelfallabwägung (Kleintiere sind ohnehin meist erlaubt).',
        },
      ],
    },
    {
      id: 'vermietung-3',
      title: 'Die Übergabe: Protokoll, Zähler, Schlüssel',
      intro:
        'Die Wohnungsübergabe ist der Moment, der spätere Streitigkeiten entscheidet — beim Einzug wie beim Auszug. Ein sauberes Protokoll ist deine wichtigste Beweisurkunde.',
      sections: [
        {
          heading: 'Warum das Übergabeprotokoll unverzichtbar ist',
          body: 'Das Übergabeprotokoll hält den Zustand der Wohnung und alle Zählerstände zum Übergabezeitpunkt fest. Es ist keine Formalie, sondern deine Beweisgrundlage: Ohne dokumentierten Einzugszustand kannst du beim Auszug kaum belegen, welche Schäden der Mieter verursacht hat — im Zweifel gehst du leer aus.\n\nErstelle es gemeinsam mit dem Mieter, in Ruhe, Raum für Raum. Beide unterschreiben, jeder bekommt ein Exemplar. Ergänze aussagekräftige Fotos mit Datum. Ein gutes Protokoll schützt übrigens beide Seiten — auch den ehrlichen Mieter vor unberechtigten Forderungen.',
        },
        {
          heading: 'Was ins Protokoll gehört',
          body: 'Datum und Beteiligte; Zählerstände (Strom, Gas, Wasser kalt/warm, Heizung) mit Zählernummern; Zustand jedes Raums (Wände, Böden, Fenster, Türen, Sanitär) mit ehrlicher Beschreibung inklusive vorhandener Gebrauchsspuren und Mängel; Anzahl und Art der übergebenen Schlüssel (Haustür, Wohnung, Keller, Briefkasten, Garage); mitvermietete Ausstattung (Einbauküche, Einbauschränke) mit Zustand.\n\nSei bei Mängeln ehrlich: Was du beim Einzug nicht dokumentierst, gilt später als vom Mieter verursacht — oder umgekehrt, was du als „einwandfrei" protokollierst, kannst du beim Auszug nicht mehr beanstanden, wenn es das schon war.',
        },
        {
          heading: 'Zählerstände und Versorger',
          body: 'Die Zählerstände sind für die verbrauchsabhängige Abrechnung essenziell — sie markieren die Grenze zwischen Vor- und Nachmieter. Melde den Mieterwechsel den Versorgern (Strom/Gas schließt der Mieter meist selbst ab, Wasser läuft oft über dich als Eigentümer). Fotografiere jeden Zähler mit Nummer und Stand.\n\nBei Fernwärme, Aufzug oder verbundenen Anlagen und beim Heizkostenverteiler: Der Messdienstleister nimmt zum Wechsel oft eine Zwischenablesung vor — kläre das rechtzeitig, sonst wird die spätere Betriebskostenabrechnung ungenau oder angreifbar.',
        },
        {
          heading: 'Schlüsselübergabe und der Auszug später',
          body: 'Dokumentiere die Zahl aller übergebenen Schlüssel — beim Auszug muss der Mieter genau diese zurückgeben. Fehlende Schlüssel einer Schließanlage können teuer werden (Austausch der Anlage); ein sauberes Protokoll klärt die Verantwortung.\n\nDenke schon beim Einzug an den Auszug: Dasselbe Protokollformular nutzt du später erneut und vergleichst Zustand und Zählerstände. Normale Abnutzung (Gebrauchsspuren, verblasste Wandfarbe nach Jahren) trägt der Vermieter — nur darüber hinausgehende Schäden oder unterlassene, wirksam vereinbarte Schönheitsreparaturen kannst du geltend machen. Das Einzugsprotokoll ist der Maßstab dafür.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Kratzer, der zum Streit wurde',
        body: 'Beim Auszug entdeckt Vermieterin Petra einen tiefen Kratzer im Parkett des Wohnzimmers und will 900 € von der Kaution einbehalten. Der Mieter behauptet, der Schaden sei beim Einzug schon da gewesen. Petras Vorteil: Das gemeinsame Einzugsprotokoll von vor drei Jahren vermerkt für das Wohnzimmer „Parkett: gepflegt, keine Beschädigungen" samt Foto. Der Kratzer ist damit nachweislich neu — Petra darf die Reparatur (abzüglich Alterswertminderung) einbehalten. Ohne dieses Protokoll stünde Aussage gegen Aussage, und sie müsste die Kaution vermutlich voll zurückzahlen. Zwanzig Minuten Protokoll beim Einzug sicherten hier mehrere hundert Euro.',
      },
      note: 'Das Übergabeprotokoll (Zustand jedes Raums, Zählerstände mit Nummern, Schlüsselzahl, Ausstattung) ist deine wichtigste Beweisurkunde — gemeinsam erstellen, beide unterschreiben, mit datierten Fotos ergänzen. Beim Auszug ist das Einzugsprotokoll der Maßstab; normale Abnutzung trägt der Vermieter.',
      wikiRefs: ['uebergabeprotokoll', 'kaution', 'betriebskosten'],
      quiz: [
        {
          q: 'Warum ist das Einzugs-Übergabeprotokoll so wichtig?',
          options: [
            'Es ist gesetzlich verboten',
            'Es dokumentiert den Ausgangszustand und ist beim Auszug die Beweisgrundlage für verursachte Schäden',
            'Es ersetzt den Mietvertrag',
            'Es senkt die Grundsteuer',
          ],
          correct: 1,
          explanation:
            'Ohne dokumentierten Einzugszustand lässt sich beim Auszug kaum belegen, was der Mieter zu verantworten hat — dann verlierst du im Zweifel.',
        },
        {
          q: 'Was gehört NICHT ins Übergabeprotokoll?',
          options: [
            'Zählerstände mit Zählernummern',
            'Zustand der Räume inkl. vorhandener Mängel',
            'Die politische Meinung des Mieters',
            'Anzahl und Art der Schlüssel',
          ],
          correct: 2,
          explanation:
            'Ins Protokoll gehören objektbezogene Fakten (Zustand, Zähler, Schlüssel, Ausstattung) — keine persönlichen Daten dieser Art.',
        },
        {
          q: 'Wer trägt normale Abnutzung (z. B. nach Jahren verblasste Wandfarbe)?',
          options: [
            'Immer der Mieter',
            'Der Vermieter — normale Gebrauchsspuren sind mit der Miete abgegolten',
            'Die Hausverwaltung',
            'Die Versicherung des Mieters',
          ],
          correct: 1,
          explanation:
            'Vertragsgemäße Abnutzung ist durch die Miete abgedeckt. Nur darüber hinausgehende Schäden oder wirksam vereinbarte, unterlassene Schönheitsreparaturen sind ersatzfähig.',
        },
        {
          q: 'Warum sind Zählerstände bei der Übergabe wichtig?',
          options: [
            'Für die Grunderwerbsteuer',
            'Sie markieren die Verbrauchsgrenze zwischen Vor- und Nachmieter für die korrekte Abrechnung',
            'Sie bestimmen die Kaution',
            'Sie sind unwichtig',
          ],
          correct: 1,
          explanation:
            'Nur mit exakten Übergabe-Zählerständen lässt sich der Verbrauch sauber zuordnen — Grundlage jeder korrekten Betriebskostenabrechnung.',
        },
      ],
    },
    {
      id: 'vermietung-4',
      title: 'Die Nebenkostenabrechnung im Überblick',
      intro:
        'Die jährliche Betriebskostenabrechnung ist Pflicht, fristgebunden und der häufigste Streitpunkt zwischen Mietern und Vermietern. Wer sie sauber beherrscht, spart sich Ärger und Geld.',
      sections: [
        {
          heading: 'Was umlagefähig ist — und was nicht',
          body: 'Umlagefähig sind nur die in der Betriebskostenverordnung (BetrKV) aufgeführten laufenden Kosten: Grundsteuer, Wasser/Abwasser, Heizung/Warmwasser, Müll, Straßenreinigung, Hausmeister, Gebäudereinigung, Gartenpflege, Beleuchtung, Schornsteinfeger, Sach- und Haftpflichtversicherung, Aufzug, Gemeinschaftsantenne. Voraussetzung: Die Umlage muss im Mietvertrag vereinbart sein.\n\nNicht umlagefähig sind Verwaltungskosten, Instandhaltung und Reparaturen, Rücklagen und einmalige Kosten. Ein häufiger Fehler: Reparaturen in die „laufenden Kosten" mogeln — das macht die betroffene Position (im Zweifel die ganze Abrechnung) angreifbar.',
        },
        {
          heading: 'Fristen: Die 12-Monats-Regel ist hart',
          body: 'Du musst über einen Abrechnungszeitraum (meist Kalenderjahr) spätestens 12 Monate nach dessen Ende abrechnen. Versäumst du diese Frist, kannst du in der Regel keine Nachforderung mehr durchsetzen — ein etwaiges Guthaben des Mieters musst du hingegen weiterhin auszahlen. Diese Asymmetrie macht Pünktlichkeit bares Geld.\n\nDer Mieter wiederum hat nach Erhalt der Abrechnung zwölf Monate Zeit, Einwendungen zu erheben. Eine formell und inhaltlich korrekte, nachvollziehbare Abrechnung reduziert Widersprüche drastisch — und ist deine beste Verteidigung, falls es doch zum Streit kommt.',
        },
        {
          heading: 'Der Aufbau einer korrekten Abrechnung',
          body: 'Eine formell wirksame Abrechnung enthält: die Gesamtkosten je Kostenart, den zugrunde gelegten Verteilerschlüssel (Fläche, Personen, Verbrauch — bei Heizung überwiegend verbrauchsabhängig nach Heizkostenverordnung), die Berechnung des Mieteranteils, den Abzug der geleisteten Vorauszahlungen und das Ergebnis (Nachzahlung oder Guthaben). Der Abrechnungszeitraum und die Wohneinheit müssen klar benannt sein.\n\nBelege musst du nicht mitschicken, aber auf Verlangen zur Einsicht bereitstellen. Tipp: Sammle Rechnungen und Bescheide ganzjährig geordnet (am besten pro Objekt) — dann ist die Abrechnung eine Stunde Arbeit statt eines Wochenendprojekts.',
        },
        {
          heading: 'Vorauszahlungen anpassen und Streit vermeiden',
          body: 'Nach der Abrechnung darfst (und solltest) du die monatliche Vorauszahlung anpassen, wenn Kosten dauerhaft gestiegen sind — das vermeidet böse Überraschungen für beide Seiten und schützt deine Liquidität. Setze die Vorauszahlung realistisch an; chronisch zu niedrige Vorauszahlungen führen zu hohen Nachforderungen und Konflikten.\n\nHäufigste Streitpunkte, die du durch Sorgfalt entschärfst: falscher Verteilerschlüssel, nicht umlagefähige Posten, verpasste Fristen, unklare Darstellung. Wer transparent, korrekt und pünktlich abrechnet, hat ruhigere Mietverhältnisse. Bei komplexen Fällen (Leerstand, unterjähriger Mieterwechsel, gemischt genutzte Gebäude) lohnt eine Verwaltung oder ein Abrechnungsdienst.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Verteilerschlüssel richtig gerechnet',
        body: 'Mehrfamilienhaus mit 400 m² Gesamtfläche, davon Mietwohnung 80 m² (= 20 %). Verbrauchsunabhängige Kosten des Jahres: Grundsteuer 1.800 €, Versicherung 1.200 €, Hausmeister 2.400 €, Müll 900 € = 6.300 €. Flächenanteil des Mieters: 20 % = 1.260 €. Heizkosten (separat, verbrauchsabhängig nach HeizkostenV): laut Messdienst 640 € für die Einheit. Summe umlagefähig: 1.900 €. Der Mieter hat 12 × 160 € = 1.920 € vorausgezahlt → Guthaben 20 €. Timo zahlt die 20 € aus, hebt aber wegen gestiegener Energiepreise die Vorauszahlung fürs Folgejahr auf 175 € an — sauber begründet und rechtzeitig kommuniziert.',
      },
      note: 'Nur BetrKV-Kosten sind umlagefähig (nicht Verwaltung/Instandhaltung), Umlage muss vereinbart sein. Abrechnung binnen 12 Monaten nach Zeitraum-Ende, sonst keine Nachforderung. Formell korrekt: Gesamtkosten, Verteilerschlüssel, Mieteranteil, Vorauszahlungen, Ergebnis. Belege auf Verlangen. Bildungsinhalt, keine Rechtsberatung.',
      legalHint: true,
      wikiRefs: ['betriebskosten', 'nebenkostenabrechnung', 'heizkostenverordnung', 'grundsteuer'],
      quiz: [
        {
          q: 'Bis wann muss die Betriebskostenabrechnung beim Mieter sein?',
          options: [
            'Binnen 3 Monaten nach Zeitraum-Ende',
            'Binnen 12 Monaten nach Ende des Abrechnungszeitraums — danach entfällt die Nachforderung',
            'Es gibt keine Frist',
            'Binnen 5 Jahren',
          ],
          correct: 1,
          explanation:
            'Die 12-Monats-Frist ist eine Ausschlussfrist für Nachforderungen; Guthaben bleibt trotzdem auszahlbar. Pünktlichkeit ist bares Geld.',
        },
        {
          q: 'Welche Kosten sind NICHT umlagefähig?',
          options: ['Grundsteuer', 'Müllabfuhr', 'Verwaltungskosten und Reparaturen', 'Gebäudeversicherung'],
          correct: 2,
          explanation:
            'Verwaltung, Instandhaltung/Reparaturen und Rücklagen trägt der Eigentümer — sie in die Abrechnung zu schmuggeln macht sie angreifbar.',
        },
        {
          q: 'Was muss eine formell korrekte Abrechnung enthalten?',
          options: [
            'Nur den Endbetrag',
            'Gesamtkosten je Art, Verteilerschlüssel, Mieteranteil, Abzug der Vorauszahlungen, Ergebnis',
            'Die SCHUFA des Mieters',
            'Den Kaufpreis der Immobilie',
          ],
          correct: 1,
          explanation:
            'Nachvollziehbarkeit ist Wirksamkeitsvoraussetzung: Gesamtkosten, Schlüssel, Anteil, Vorauszahlungen und Ergebnis müssen erkennbar sein.',
        },
        {
          q: 'Heizkosten müssen laut Heizkostenverordnung wie abgerechnet werden?',
          options: [
            'Rein nach Wohnfläche',
            'Überwiegend verbrauchsabhängig (i. d. R. mindestens 50–70 %)',
            'Nach Personenzahl allein',
            'Pauschal gleich für alle',
          ],
          correct: 1,
          explanation:
            'Die HeizkostenV schreibt einen überwiegend verbrauchsabhängigen Anteil vor — das erfordert Erfassung durch Messgeräte/Messdienst.',
        },
      ],
    },
    {
      id: 'vermietung-5',
      title: 'Instandhaltung planen statt reagieren',
      intro:
        'Ungeplante Reparaturen sind teuer und stressig; geplante Instandhaltung ist kalkulierbar und werterhaltend. Der Unterschied zwischen einem Bestandshalter und einem gestressten Eigentümer ist ein System.',
      sections: [
        {
          heading: 'Instandhaltung, Instandsetzung, Modernisierung',
          body: 'Drei Begriffe, drei Bedeutungen — auch steuerlich relevant. Instandhaltung ist die vorbeugende Pflege (Wartung der Heizung, Dachrinnenreinigung). Instandsetzung ist die Reparatur/Erneuerung von Defektem (kaputte Therme ersetzen) — beides in der Regel sofort abziehbarer Erhaltungsaufwand. Modernisierung hebt den Standard (Einbau einer Wärmepumpe statt gleichwertigem Ersatz, energetische Sanierung) — hier greifen andere steuerliche Regeln und ggf. die Modernisierungsumlage.\n\nFür die Praxis wichtig: Ersatz gegen Gleichwertiges = Erhaltung; Standardhebung/Erweiterung = Modernisierung/Herstellung. Und: die 15-%-Grenze in den ersten drei Jahren nach Kauf im Blick behalten (siehe Recht & Steuern).',
        },
        {
          heading: 'Der Instandhaltungsplan: Vorausschauen zahlt sich aus',
          body: 'Führe pro Objekt eine einfache Liste der großen Bauteile mit Alter und erwarteter Restlebensdauer: Dach, Heizung, Fenster, Fassade, Elektrik, Sanitärstränge, Bäder. Daraus ergibt sich, wann welche Investition fällig wird — und dass die 40.000-€-Heizung in acht Jahren keine Überraschung, sondern ein Kalendereintrag ist.\n\nBei ETWs übernimmt die WEG das Gemeinschaftseigentum (prüfe die Rücklage!), du planst nur dein Sondereigentum. Beim MFH planst du alles selbst — mit einem Mehrjahres-Instandhaltungsplan trennst du dich vom „Reparatur-nach-Ausfall"-Modus, der immer im ungünstigsten Moment zuschlägt.',
        },
        {
          heading: 'Die Rücklage: Dein wichtigster Puffer',
          body: 'Ob ETW oder MFH: Instandhaltung kommt sicher — die Frage ist nur, ob du dafür angespart hast. Führe (zusätzlich zur WEG-Rücklage) eine eigene Reserve pro Objekt. Praxisgrößen zur Orientierung: grob 1 €/m²/Monat als monatliche Zuführung, mehr bei Altbauten; oder Ansätze in Anlehnung an die Peterssche Formel. Diese Zahlen sind Kalkulationshilfen, keine Garantien — wichtig ist, dass überhaupt konsequent zurückgelegt wird.\n\nGetrennte Rücklage heißt getrenntes Konto: Wer die Instandhaltungsreserve mental „mitverbraucht", steht bei der ersten größeren Reparatur ohne Puffer da — und muss teuer nachfinanzieren.',
        },
        {
          heading: 'Handwerker-Netzwerk und Wartungsverträge',
          body: 'Ein verlässliches Handwerker-Netzwerk ist Gold wert — der Heizungsbauer, der Elektriker, der Sanitärbetrieb deines Vertrauens. Baue es in ruhigen Zeiten auf, nicht im Notfall um 22 Uhr mit Wasserschaden. Empfehlungen aus der Community (dem Kontor) sind hier oft besser als jede Online-Bewertung.\n\nWartungsverträge (Heizung, ggf. Aufzug) sind meist sinnvoll: Sie verlängern die Lebensdauer, sichern Gewährleistung/Betriebssicherheit und die Kosten sind teilweise umlagefähig. Regelmäßige kleine Wartung verhindert die großen, teuren Ausfälle — vorbeugen ist fast immer günstiger als reparieren.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die eingeplante Heizung',
        body: 'Mira kauft ein Zweifamilienhaus (Baujahr 1985). Ihr Instandhaltungsplan notiert: Heizung Baujahr 2008 → Restlebensdauer ca. 5–8 Jahre → Austausch geschätzt 30.000 € (mit Puffer). Sie legt ab Kauf konsequent 250 €/Monat auf ein separates Instandhaltungskonto. Als die Therme nach sechs Jahren tatsächlich streikt, liegen dort rund 18.000 € — den Rest deckt sie aus laufendem Cashflow und einem Förderprogramm (Antrag vor Beauftragung!). Kein Notkredit, kein Stress, keine gefährdete Liquidität. Ihr Nachbar mit gleichem Baujahr, aber ohne Rücklage, musste zeitgleich einen teuren Ratenkredit aufnehmen. Planung schlägt Reaktion.',
      },
      note: 'Instandhaltung (Pflege) und Instandsetzung (Reparatur) sind meist sofort abziehbarer Erhaltungsaufwand, Modernisierung folgt eigenen Regeln (15-%-Grenze beachten). Führe pro Objekt einen Mehrjahresplan der großen Bauteile und eine getrennte Rücklage (grob ~1 €/m²/Monat). Handwerker-Netzwerk und Wartungsverträge in ruhigen Zeiten aufbauen.',
      legalHint: true,
      wikiRefs: ['erhaltungsaufwand', 'instandhaltungsruecklage', 'sanierungsstau', 'hausverwaltung'],
      quiz: [
        {
          q: 'Was ist typischerweise sofort abziehbarer Erhaltungsaufwand?',
          options: [
            'Der Einbau einer höherwertigen Wärmepumpe als Standardhebung',
            'Der Ersatz einer defekten Therme durch eine gleichwertige',
            'Ein Dachgeschossausbau',
            'Der Anbau eines Balkons',
          ],
          correct: 1,
          explanation:
            'Ersatz gegen Gleichwertiges (Reparatur/Instandsetzung) ist Erhaltungsaufwand. Standardhebung oder Erweiterung ist Modernisierung/Herstellung mit anderen Regeln.',
        },
        {
          q: 'Wozu dient ein Mehrjahres-Instandhaltungsplan?',
          options: [
            'Zur Steuerhinterziehung',
            'Um große Investitionen (Dach, Heizung) vorherzusehen und anzusparen statt überrascht zu werden',
            'Um die Miete automatisch zu erhöhen',
            'Er ist gesetzlich verboten',
          ],
          correct: 1,
          explanation:
            'Wer Restlebensdauern kennt, plant Investitionen als Kalendereintrag mit Rücklage — statt im ungünstigsten Moment teuer nachzufinanzieren.',
        },
        {
          q: 'Welche Orientierungsgröße nennt die Lektion für die monatliche Instandhaltungsrücklage?',
          options: ['0 €, Mieter zahlt', 'grob ~1 €/m²/Monat, mehr bei Altbauten', 'genau 50 €/Wohnung', '10 % der Kaltmiete gesetzlich vorgeschrieben'],
          correct: 1,
          explanation:
            'Rund 1 €/m²/Monat ist eine gängige Kalkulationshilfe (Altbau mehr) — entscheidend ist, überhaupt konsequent auf ein getrenntes Konto zurückzulegen.',
        },
        {
          q: 'Warum lohnen sich Wartungsverträge (z. B. für die Heizung)?',
          options: [
            'Sie sind gesetzlich verboten',
            'Sie verlängern die Lebensdauer, sichern Betriebssicherheit und sind teils umlagefähig — Vorbeugen ist günstiger als der große Ausfall',
            'Sie ersetzen die Rücklage',
            'Sie erhöhen die Grunderwerbsteuer',
          ],
          correct: 1,
          explanation:
            'Regelmäßige Wartung beugt teuren Totalausfällen vor, erhält Gewährleistung/Sicherheit — und die Kosten sind teilweise umlagefähig.',
        },
      ],
    },
    {
      id: 'vermietung-6',
      title: 'Umgang mit Problemen: Mietrückstand, Konflikte, Kündigung',
      intro:
        'Auch bei guter Auswahl kann es Probleme geben: verspätete Miete, Lärmstreit, Schäden. Souveränität heißt hier, die Rechtslage zu kennen und ruhig, aber konsequent zu handeln.',
      sections: [
        {
          heading: 'Mietrückstand: früh, sachlich, dokumentiert',
          body: 'Reagiere bei ausbleibender Miete zeitnah und sachlich — oft steckt ein vorübergehendes Problem dahinter, das sich mit einem Gespräch oder einer Ratenvereinbarung lösen lässt. Dokumentiere jede Zahlung und jede Kommunikation schriftlich. Eine freundliche, aber klare Zahlungserinnerung ist der erste Schritt.\n\nRechtlicher Rahmen: Bei einem Rückstand von zwei Monatsmieten kommt die fristlose Kündigung in Betracht. Wichtig: Eine fristlose Kündigung wegen Zahlungsverzugs kann der Mieter durch vollständige Nachzahlung binnen Schonfrist unwirksam machen (einmal in zwei Jahren) — deshalb gehört so ein Schritt in fachkundige Hände. Handle nie aus dem Affekt, sondern immer entlang der dokumentierten Fakten.',
        },
        {
          heading: 'Alltagskonflikte: Lärm, Nachbarn, Schäden',
          body: 'Bei Beschwerden (Lärm, Verhalten) bleibe neutraler Vermittler und halte dich an Fakten: Wer beschwert sich worüber, seit wann, wie oft? Fordere Betroffene auf, konkrete Störungen zu dokumentieren. Nicht jede Beschwerde rechtfertigt Maßnahmen — aber wiederholte, belegte, erhebliche Störungen können nach Abmahnung bis zur Kündigung führen.\n\nBei Schäden gilt: Der Mieter muss Mängel unverzüglich melden (sonst haftet er für Folgeschäden), und du musst als Vermieter die Gebrauchstauglichkeit erhalten (Reparaturpflicht). Ein kaputter Wasserhahn ist dein Job, ein vom Mieter zerstörtes Waschbecken seiner. Reagiere auf Mängelmeldungen zügig — verschleppte Reparaturen können den Mieter zur (berechtigten) Mietminderung berechtigen.',
        },
        {
          heading: 'Mietminderung und Abmahnung verstehen',
          body: 'Bei erheblichen Mängeln, die die Gebrauchstauglichkeit einschränken (Heizungsausfall im Winter, Schimmel, undichtes Dach), darf der Mieter die Miete mindern — in Höhe angemessen zur Beeinträchtigung. Deine beste Verteidigung: Mängel schnell beheben, dann entfällt die Grundlage. Unberechtigte Minderungen kannst (und solltest) du sachlich zurückweisen und die Differenz einfordern.\n\nDie Abmahnung ist bei Vertragsverletzungen des Mieters (etwa fortgesetzte Störungen, unerlaubte Untervermietung) meist Voraussetzung für eine spätere Kündigung: Sie benennt das Fehlverhalten konkret, fordert zur Unterlassung auf und kündigt Konsequenzen an. Ohne dokumentierte Abmahnung scheitert eine verhaltensbedingte Kündigung oft vor Gericht.',
        },
        {
          heading: 'Wann der Anwalt übernimmt',
          body: 'Spätestens bei fristloser Kündigung, Räumungsklage, hartnäckigem Mietnomadentum, unklarer Rechtslage oder hohen Streitwerten gehört ein Fachanwalt für Mietrecht ans Ruder. Eine falsch formulierte oder unbegründete Kündigung verzögert das Verfahren um Monate und kostet mehr als jede Beratung.\n\nBewahre grundsätzlich Ruhe und Distanz: Eigenmächtige „Selbsthilfe" (Schloss austauschen, Sachen entfernen, Strom abstellen) ist verboten und macht dich schadensersatzpflichtig — auch gegenüber einem Mieter, der klar im Unrecht ist. Der Rechtsstaat ist langsam, aber er ist dein Weg. Und: Eine gute Mieterauswahl (Lektion 1) verhindert die meisten dieser Probleme, bevor sie entstehen.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der richtige Umgang mit dem Rückstand',
        body: 'Jonas\' Mieterin zahlt im März die Miete nicht (890 € warm). Statt sofort zu drohen, ruft er an: Kurzarbeit, vorübergehend. Sie vereinbaren schriftlich, dass sie im April die volle Miete plus 300 € Rückstand zahlt und den Rest im Mai. Jonas dokumentiert alles. Die Mieterin hält sich daran — Problem gelöst, gutes Mietverhältnis erhalten. Hätte sie nicht reagiert und wäre der Rückstand auf zwei Monatsmieten gewachsen, hätte Jonas mit anwaltlicher Hilfe die fristlose Kündigung prüfen lassen — sachlich, dokumentiert, ohne Selbstjustiz. Frühzeitige, faire Kommunikation löst die meisten Fälle günstiger als jeder Rechtsstreit.',
      },
      note: 'Bei Rückstand früh, sachlich und dokumentiert reagieren (Ratenvereinbarung oft besser als Eskalation); fristlose Kündigung ab ~2 Monatsmieten Rückstand, aber durch Nachzahlung heilbar. Mängel zügig beheben (sonst Mietminderung), verhaltensbedingte Kündigung meist erst nach Abmahnung. Niemals Selbstjustiz — bei Eskalation Fachanwalt. Bildungsinhalt, keine Rechtsberatung.',
      legalHint: true,
      wikiRefs: ['mietminderung', 'abmahnung', 'kuendigung', 'raeumungsklage'],
      quiz: [
        {
          q: 'Ab welchem Zahlungsrückstand kommt eine fristlose Kündigung in Betracht?',
          options: [
            'Ab einem Tag Verspätung',
            'Bei einem Rückstand von rund zwei Monatsmieten',
            'Erst ab sechs Monatsmieten',
            'Nie, Kündigung wegen Geld ist verboten',
          ],
          correct: 1,
          explanation:
            'Ein Rückstand von etwa zwei Monatsmieten kann zur fristlosen Kündigung berechtigen — die aber durch fristgerechte Nachzahlung heilbar ist. Fachkundige Begleitung ratsam.',
        },
        {
          q: 'Was ist meist Voraussetzung für eine verhaltensbedingte Kündigung?',
          options: [
            'Eine anonyme Beschwerde',
            'Eine dokumentierte, konkrete Abmahnung mit Aufforderung zur Unterlassung',
            'Ein Eintrag im Grundbuch',
            'Die Zustimmung der Nachbarn',
          ],
          correct: 1,
          explanation:
            'Ohne vorherige, konkrete und dokumentierte Abmahnung scheitert eine verhaltensbedingte Kündigung häufig vor Gericht.',
        },
        {
          q: 'Wie reagierst du auf eine berechtigte Mängelmeldung (z. B. Heizungsausfall)?',
          options: [
            'Ignorieren',
            'Zügig beheben — verschleppte Reparaturen berechtigen zur Mietminderung',
            'Die Miete erhöhen',
            'Dem Mieter kündigen',
          ],
          correct: 1,
          explanation:
            'Du schuldest die Gebrauchstauglichkeit. Schnelle Behebung entzieht einer Mietminderung die Grundlage und erhält das Mietverhältnis.',
        },
        {
          q: 'Was ist auch gegenüber einem klar vertragsbrüchigen Mieter verboten?',
          options: [
            'Eine schriftliche Abmahnung',
            'Eigenmächtige Selbsthilfe wie Schlossaustausch oder Stromabstellen',
            'Eine Räumungsklage',
            'Das Einschalten eines Anwalts',
          ],
          correct: 1,
          explanation:
            'Selbstjustiz ist untersagt und macht dich schadensersatzpflichtig — selbst wenn der Mieter im Unrecht ist. Der Rechtsweg ist der einzige Weg.',
        },
      ],
    },
    {
      id: 'vermietung-7',
      title: 'Hausverwaltung: selbst machen oder delegieren?',
      intro:
        'Mit wachsendem Bestand stellt sich die Frage: Verwaltest du selbst oder gibst du ab? Diese Entscheidung prägt, ob deine Immobilien ein zweiter Job oder ein skalierbares Investment werden.',
      sections: [
        {
          heading: 'Was Verwaltung eigentlich bedeutet',
          body: 'Verwaltung ist mehr als Miete kassieren: Mietersuche und -auswahl, Vertragsmanagement, Betriebskostenabrechnung, Mängel- und Handwerkerkoordination, Mietanpassungen, Kommunikation mit Mietern, Mahnwesen, Instandhaltungsplanung, Buchhaltung fürs Finanzamt. Bei ETWs zusätzlich die Schnittstelle zur WEG-Verwaltung und den Eigentümerversammlungen.\n\nUnterscheide zwei Ebenen: Die WEG-Verwaltung (Pflicht bei ETWs, verwaltet das Gemeinschaftseigentum, wird von der Gemeinschaft bezahlt) und die Miet-/Sondereigentumsverwaltung deiner eigenen Wohnung (optional, verwaltet dein Mietverhältnis, zahlst du). Nur Letztere ist deine Entscheidung.',
        },
        {
          heading: 'Selbst verwalten: Kontrolle und Kosten',
          body: 'Pro: Du sparst die Verwaltergebühr (grob 20–30 €/Einheit/Monat für Mietverwaltung), kennst deine Objekte und Mieter genau, entscheidest sofort und lernst das Handwerk von Grund auf — unbezahlbar für die ersten Objekte. Kontra: Es kostet Zeit und Nerven, erfordert Erreichbarkeit (auch am Sonntagabend beim Wasserschaden), Fachwissen (Abrechnung, Recht) und Disziplin.\n\nFür ein bis wenige Objekte in erreichbarer Nähe ist Selbstverwaltung meist sinnvoll — auch als Lernphase. Werkzeuge (Vorlagen, einfache Software für Abrechnung und Belege) machen es beherrschbar. Rechne aber ehrlich deine Zeit ein: „gespart" ist die Gebühr nur, wenn deine Stunden nicht wertvoller anders eingesetzt wären.',
        },
        {
          heading: 'Delegieren: Zeit und Skalierbarkeit',
          body: 'Pro: Eine gute Hausverwaltung übernimmt den operativen Alltag, ist fachlich versiert, erreichbar und macht dein Portfolio skalierbar — mit zehn Einheiten kannst du nicht mehr alles selbst machen, schon gar nicht über mehrere Städte verteilt. Kontra: Kosten, Abhängigkeit von der Qualität des Dienstleisters und weniger direkter Draht zu Objekt und Mietern.\n\nDie Verwaltergebühr ist bei vermieteten Objekten übrigens als Werbungskosten steuerlich abziehbar — die Netto-Belastung ist also geringer als der Bruttopreis. Ab einer gewissen Portfoliogröße oder Entfernung ist gute Verwaltung selten Luxus, sondern Voraussetzung fürs Weiterwachsen.',
        },
        {
          heading: 'Die richtige Verwaltung finden — und führen',
          body: 'Wähle sorgfältig: Referenzen und Erfahrung mit deinem Objekttyp, klare Leistungsbeschreibung (was ist inklusive, was kostet extra?), transparente Vergütung, Erreichbarkeit, saubere Abrechnungspraxis, gutes Reporting. Empfehlungen anderer Investoren (Kontor!) sind wertvoller als Werbung. Ein zu billiger Verwalter, der Abrechnungen verpatzt und Mängel schleifen lässt, kostet am Ende mehr, als er spart.\n\nDelegieren heißt nicht abschalten: Auch mit Verwaltung bleibst du der Unternehmer. Prüfe Abrechnungen, verfolge Kennzahlen (Leerstand, Rückstände, Instandhaltung), führe den Dienstleister mit klaren Erwartungen. Der Übergang von „alles selbst" zu „klug delegiert" ist genau der Schritt vom Vermieter zum Immobilien-Unternehmer — das Thema der nächsten Modulgruppe.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Kipppunkt bei Objekt Nummer vier',
        body: 'Lea verwaltet ihre ersten drei Wohnungen (alle in ihrer Stadt) selbst — spart Gebühren und lernt enorm viel über Abrechnung, Mieterkommunikation und Handwerkersteuerung. Bei Objekt vier, 180 km entfernt in einer anderen Stadt, rechnet sie: Anfahrten, Erreichbarkeit für Mieter vor Ort, lokale Handwerker, die sie nicht kennt. Sie beauftragt eine örtliche Hausverwaltung für 28 €/Monat (steuerlich abziehbar, netto ~18 €). Ihre eigenen drei Objekte behält sie in Eigenregie. Das Ergebnis: Sie skaliert über Städtegrenzen hinweg, ohne im operativen Klein-Klein zu ertrinken — und nutzt das Gelernte, um die Verwaltung fachkundig zu führen statt blind zu vertrauen.',
      },
      note: 'Verwaltung umfasst weit mehr als Miete kassieren; trenne WEG-Verwaltung (Pflicht, Gemeinschaft) von Mietverwaltung (deine Entscheidung). Selbst verwalten spart Gebühren und lehrt das Handwerk (ideal für die ersten Objekte); delegieren (grob 20–30 €/Einheit/Monat, steuerlich abziehbar) schafft Zeit und Skalierbarkeit. Verwaltung sorgfältig auswählen und aktiv führen.',
      legalHint: true,
      wikiRefs: ['hausverwaltung', 'weg', 'werbungskosten', 'betriebskosten'],
      quiz: [
        {
          q: 'Worin unterscheiden sich WEG-Verwaltung und Mietverwaltung?',
          options: [
            'Es gibt keinen Unterschied',
            'WEG-Verwaltung (Pflicht bei ETWs, Gemeinschaftseigentum, von der WEG bezahlt) vs. Mietverwaltung deiner Wohnung (optional, von dir bezahlt)',
            'Beide zahlt immer der Mieter',
            'WEG-Verwaltung ist verboten',
          ],
          correct: 1,
          explanation:
            'Nur die Mietverwaltung deines Sondereigentums ist deine Entscheidung; die WEG-Verwaltung des Gemeinschaftseigentums ist bei ETWs vorgeschrieben.',
        },
        {
          q: 'Warum ist Selbstverwaltung für die ersten Objekte oft sinnvoll?',
          options: [
            'Weil es gesetzlich vorgeschrieben ist',
            'Weil du Gebühren sparst UND das Handwerk von Grund auf lernst',
            'Weil Verwaltungen keine Wohnungen betreuen dürfen',
            'Weil es keine Zeit kostet',
          ],
          correct: 1,
          explanation:
            'Bei wenigen, nahen Objekten spart Selbstverwaltung Gebühren und vermittelt unbezahlbares Praxiswissen — die beste Lernphase.',
        },
        {
          q: 'Wie wirkt sich die Verwaltergebühr steuerlich aus?',
          options: [
            'Sie ist nicht absetzbar',
            'Sie ist bei vermieteten Objekten als Werbungskosten abziehbar — die Netto-Belastung ist geringer',
            'Sie erhöht die Grunderwerbsteuer',
            'Sie wird auf den Mieter umgelegt',
          ],
          correct: 1,
          explanation:
            'Als Werbungskosten mindert die Verwaltergebühr das steuerliche Ergebnis — netto kostet sie weniger als der Bruttopreis. (Nicht umlagefähig auf Mieter.)',
        },
        {
          q: 'Was gilt, wenn du an eine Hausverwaltung delegierst?',
          options: [
            'Du kannst dich um nichts mehr kümmern',
            'Du bleibst der Unternehmer: Abrechnungen prüfen, Kennzahlen verfolgen, den Dienstleister mit klaren Erwartungen führen',
            'Der Verwalter wird Eigentümer',
            'Die Mieter kündigen automatisch',
          ],
          correct: 1,
          explanation:
            'Delegieren heißt führen, nicht abschalten — die unternehmerische Verantwortung und Kontrolle bleiben bei dir.',
        },
      ],
    },
  ],
}
