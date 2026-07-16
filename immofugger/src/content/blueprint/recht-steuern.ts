import type { ModuleGroup } from './types'

export const rechtSteuern: ModuleGroup = {
  slug: 'recht-steuern',
  title: 'Recht & Steuern — Grundlagen',
  description:
    'Grundbuch, Kaufvertrag, Mietrecht, AfA: die rechtlichen und steuerlichen Grundlagen, die jeder Vermieter kennen muss — und das klare Wissen, wann Profis übernehmen. Bildungsinhalte, keine Rechts- oder Steuerberatung.',
  lessons: [
    {
      id: 'recht-1',
      title: 'Das Grundbuch lesen und verstehen',
      intro:
        'Das Grundbuch ist die Wahrheit über eine Immobilie: Wem gehört sie, was lastet auf ihr, wer hat welche Rechte? Wer es lesen kann, erkennt Risiken, bevor sie teuer werden.',
      sections: [
        {
          heading: 'Aufbau: Bestandsverzeichnis und drei Abteilungen',
          body: 'Jedes Grundbuchblatt hat vier Teile. Das Bestandsverzeichnis beschreibt das Grundstück (Gemarkung, Flurstück, Größe, bei ETWs den Miteigentumsanteil). Abteilung I nennt die Eigentümer und den Erwerbsgrund. Abteilung II enthält Lasten und Beschränkungen — alles außer Grundpfandrechten: Wegerechte, Wohnrechte, Nießbrauch, Erbbaurecht, Vorkaufsrechte, Auflassungsvormerkungen. Abteilung III enthält die Grundpfandrechte: Grundschulden und Hypotheken.\n\nAls Kaufinteressent mit berechtigtem Interesse bekommst du (über Makler/Verkäufer oder Notar) einen aktuellen Auszug. Regel: kein Angebot ohne Blick in alle drei Abteilungen.',
        },
        {
          heading: 'Abteilung II: Wo die Überraschungen wohnen',
          body: 'Ein eingetragenes Wohnrecht oder ein Nießbrauch kann den Wert massiv mindern — im Extremfall darfst du als Eigentümer die Immobilie weder nutzen noch die Erträge behalten. Wegerechte (der Nachbar darf über dein Grundstück) sind meist harmlos, aber wertrelevant. Erbbaurecht bedeutet: Das Gebäude gehört dir, der Boden nicht — du zahlst Erbbauzins, und am Laufzeitende gelten besondere Regeln.\n\nNicht alles in Abteilung II ist schlimm — aber alles muss erklärt und eingepreist sein. Was der Verkäufer nicht schlüssig erklären kann, klärt der Notar oder ein Anwalt vor dem Angebot.',
        },
        {
          heading: 'Abteilung III: Schulden, die (nicht) mitkommen',
          body: 'Eingetragene Grundschulden des Verkäufers sehen bedrohlich aus, sind aber Standard: Sie werden bei der Abwicklung aus dem Kaufpreis abgelöst und gelöscht — der Notar koordiniert das über Treuhandauflagen. Du erwirbst lastenfrei, obwohl das Grundbuch beim Angebot noch voll aussieht.\n\nDeine eigene Bank trägt für die Finanzierung eine neue Grundschuld ein. Wichtig zu verstehen: Die Grundschuld ist abstrakt — sie kann höher sein als das aktuelle Darlehen und nach Tilgung „stehen bleiben" für künftige Finanzierungen (spart später Kosten).',
        },
        {
          heading: 'Rangfolge: Wer zuerst kommt',
          body: 'Rechte im Grundbuch haben einen Rang — bei einer Zwangsversteigerung wird streng nach Rang bedient. Deshalb bestehen Banken auf dem ersten Rang für ihre Grundschuld: Sie wollen im Ernstfall zuerst an ihr Geld.\n\nFür dich praktisch relevant: Nachrangige Finanzierungen (z. B. ein zweites Darlehen einer anderen Bank) sind teurer, weil das Risiko höher ist. Und die Auflassungsvormerkung, die dich als Käufer schützt, wirkt ebenfalls über ihren Rang: Sie blockiert alle späteren Verfügungen des Verkäufers.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Der Auszug, der den Preis drückte',
        body: 'Im Grundbuchauszug eines Zweifamilienhauses findet Ayla in Abteilung II ein lebenslanges Wohnrecht für die 74-jährige Mutter des Verkäufers an der Erdgeschosswohnung. Das Exposé erwähnte es mit keinem Wort. Konsequenz: Die EG-Wohnung (55 % der Fläche) bringt auf unabsehbare Zeit weder Miete noch Eigennutzung. Ayla lässt den Kapitalwert des Wohnrechts überschlägig schätzen und bietet statt 380.000 € nur 265.000 € — oder verzichtet. Ohne Grundbuch-Blick hätte sie ein Objekt gekauft, das mehr als ein Drittel weniger wert ist als gedacht.',
      },
      note: 'Grundbuch = Bestandsverzeichnis + Abt. I (Eigentum) + Abt. II (Lasten wie Wohnrecht, Nießbrauch, Erbbaurecht) + Abt. III (Grundschulden). Verkäufer-Grundschulden werden bei Abwicklung abgelöst; Abt.-II-Rechte musst du verstehen und einpreisen. Kein Angebot ohne aktuellen Auszug.',
      legalHint: true,
      wikiRefs: ['grundbuch', 'grundschuld', 'niessbrauch', 'erbbaurecht', 'auflassungsvormerkung'],
      quiz: [
        {
          q: 'In welcher Abteilung des Grundbuchs stehen Wohnrechte und Nießbrauch?',
          options: ['Bestandsverzeichnis', 'Abteilung I', 'Abteilung II', 'Abteilung III'],
          correct: 2,
          explanation: 'Abteilung II enthält Lasten und Beschränkungen außer Grundpfandrechten — dort wohnen die Überraschungen.',
        },
        {
          q: 'Der Verkäufer hat eine Grundschuld über 200.000 € eingetragen. Was bedeutet das für dich?',
          options: [
            'Du übernimmst die Schulden automatisch',
            'Normalfall: Sie wird bei der Abwicklung aus dem Kaufpreis abgelöst und gelöscht — der Notar sichert das ab',
            'Der Kauf ist unmöglich',
            'Die Grundschuld senkt die Grunderwerbsteuer',
          ],
          correct: 1,
          explanation:
            'Verkäufer-Grundschulden sind Standard. Über notarielle Treuhandauflagen wird lastenfreier Erwerb sichergestellt.',
        },
        {
          q: 'Warum bestehen Banken auf dem ersten Rang in Abteilung III?',
          options: [
            'Aus Tradition',
            'Weil im Verwertungsfall streng nach Rang bedient wird — Rang 1 bekommt zuerst sein Geld',
            'Weil Rang 1 weniger Notarkosten kostet',
            'Der Rang ist bedeutungslos',
          ],
          correct: 1,
          explanation:
            'Die Rangfolge entscheidet über die Verteilung des Versteigerungserlöses — deshalb ist nachrangiges Kapital teurer.',
        },
        {
          q: 'Was bedeutet ein eingetragenes lebenslanges Wohnrecht für den Objektwert?',
          options: [
            'Nichts, es erlischt beim Verkauf',
            'Es kann den Wert erheblich mindern — die belastete Fläche bringt weder Miete noch Nutzung',
            'Es erhöht den Wert',
            'Es betrifft nur den Notar',
          ],
          correct: 1,
          explanation:
            'Das Wohnrecht bleibt beim Verkauf bestehen. Sein Kapitalwert gehört zwingend in Preisfindung und Finanzierung.',
        },
      ],
    },
    {
      id: 'recht-2',
      title: 'Kaufvertrag & Notartermin ohne Überraschungen',
      intro:
        'Der notarielle Kaufvertrag ist das juristische Herzstück des Erwerbs. Diese Lektion erklärt die wichtigsten Klauseln, den Ablauf der Abwicklung — und die Punkte, bei denen du genau hinsehen musst.',
      sections: [
        {
          heading: 'Die Kernklauseln des Kaufvertrags',
          body: 'Kaufgegenstand (Grundstück/Wohnungseigentum exakt nach Grundbuch, mitverkauftes Zubehör wie die Einbauküche separat ausgewiesen), Kaufpreis und Fälligkeitsvoraussetzungen, Auflassung und Vormerkung, Besitzübergang („Nutzen und Lasten" — meist mit Kaufpreiszahlung), Gewährleistung und die Belastungsvollmacht (erlaubt deiner Bank, die Grundschuld schon vor Eigentumsumschreibung einzutragen — ohne sie bekommst du kein Geld ausgezahlt).\n\nBei ETWs zusätzlich: Verweis auf Teilungserklärung, Übernahme der Rücklage, Regelungen zu laufenden Hausgeld-Abrechnungen und beschlossenen Sonderumlagen — wer zahlt die beschlossene, aber noch nicht fällige Sanierung? Das gehört ausdrücklich geregelt.',
        },
        {
          heading: '„Gekauft wie gesehen": Was der Gewährleistungsausschluss bedeutet',
          body: 'Bei gebrauchten Immobilien wird die Sachmängelhaftung üblicherweise ausgeschlossen — du kaufst den Zustand, den du besichtigt hast. Genau deshalb ist deine Prüfung vor dem Vertrag so entscheidend: Danach gibt es für normale Mängel kein Zurück.\n\nDie wichtige Ausnahme: Arglistig verschwiegene Mängel. Wusste der Verkäufer von einem erheblichen Mangel (etwa einem verdeckten Feuchteschaden) und hat ihn auf Nachfrage verschwiegen oder aktiv verschleiert, haftet er trotz Ausschluss. Praxis-Tipp: Wichtige Fragen (Feuchtigkeit? Schädlinge? Rechtsstreitigkeiten?) schriftlich stellen und die Antworten aufbewahren.',
        },
        {
          heading: 'Der Ablauf: Vom Entwurf bis zur Umschreibung',
          body: 'Bei Verbraucherbeteiligung soll der Vertragsentwurf mindestens 14 Tage vor Beurkundung vorliegen — nutze diese Frist wirklich: lesen, markieren, Fragen an den Notar (seine Erklärung ist im Honorar enthalten). Beim Termin verliest der Notar den vollständigen Vertrag; Änderungen sind bis zur Unterschrift möglich.\n\nDanach übernimmt der Notar die Regie: Vormerkung eintragen, Vorkaufsrechts-Anfragen (Gemeinde), Löschungsunterlagen der Verkäuferbank besorgen, Grunderwerbsteuer-Anzeige ans Finanzamt. Erst wenn alle Fälligkeitsvoraussetzungen vorliegen, erhältst du die Fälligkeitsmitteilung — jetzt (und erst jetzt) fließt Geld. Nach Zahlung und Unbedenklichkeitsbescheinigung des Finanzamts folgt die Eigentumsumschreibung.',
        },
        {
          heading: 'Warnsignale und Sonderfälle',
          body: 'Größtes Warnsignal: Zahlungen am Notar vorbei („Ablöse bar auf die Hand"). Das ist nicht clever, sondern riskant bis strafbar (Steuerhinterziehung bei verdecktem Kaufpreis) — und du verlierst jede Absicherung. Ebenso kritisch: Druck, auf die 14-Tage-Frist zu verzichten, oder ein Verkäufer, der Vertragspassagen nicht erklären kann oder will.\n\nSonderfall Bauträgerkauf: Hier gelten eigene Schutzregeln (Zahlung nach Baufortschritt gemäß Makler- und Bauträgerverordnung). Sonderfall Erwerb aus Zwangsversteigerung: kein Notarvertrag, kein Gewährleistungsrecht, eigene Spielregeln — nichts für den ersten Kauf.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die Sonderumlage im Kleingedruckten',
        body: 'Jan kauft eine ETW für 210.000 €. Im Entwurf steht standardmäßig: „Beschlossene, noch nicht fällige Sonderumlagen trägt der Käufer." Aus den Protokollen weiß Jan: Die WEG hat vier Monate zuvor eine Dachsanierung mit Sonderumlage von 9.200 € pro Einheit beschlossen, fällig in sechs Monaten — also nach Besitzübergang. Jan lässt die Klausel ändern: „Beschlossene Sonderumlagen bis zum Übergabetag trägt der Verkäufer." Der Verkäufer akzeptiert nach kurzer Verhandlung eine Teilung. Ersparnis durch einen einzigen gelesenen Satz: 4.600 €.',
      },
      note: 'Kaufvertrag: Fälligkeitsvoraussetzungen, Besitzübergang, Gewährleistungsausschluss (Ausnahme: Arglist!) und bei ETWs die Sonderumlagen-Klausel genau lesen. 14-Tage-Frist nutzen, Fragen dem Notar stellen, niemals am Notar vorbei zahlen.',
      legalHint: true,
      wikiRefs: ['kaufvertrag', 'notar', 'auflassungsvormerkung', 'sonderumlage', 'zwangsversteigerung'],
      quiz: [
        {
          q: 'Was bedeutet der übliche Gewährleistungsausschluss bei Bestandsimmobilien?',
          options: [
            'Der Verkäufer haftet für alle Mängel 5 Jahre',
            'Du kaufst den besichtigten Zustand — Haftung nur noch bei arglistig verschwiegenen Mängeln',
            'Mängel repariert die Gemeinde',
            'Der Notar haftet für Mängel',
          ],
          correct: 1,
          explanation:
            '„Gekauft wie gesehen" — deshalb ist die Prüfung vor Vertragsschluss so wichtig. Nur Arglist durchbricht den Ausschluss.',
        },
        {
          q: 'Wann zahlst du den Kaufpreis?',
          options: [
            'Bar beim Besichtigungstermin',
            'Direkt nach der Unterschrift beim Notar',
            'Erst nach der Fälligkeitsmitteilung des Notars, wenn alle Voraussetzungen (u. a. Vormerkung) vorliegen',
            'Nach der Eigentumsumschreibung',
          ],
          correct: 2,
          explanation:
            'Der Notar stellt die Fälligkeit erst fest, wenn du abgesichert bist (Vormerkung, Löschungsunterlagen, Vorkaufsrecht geklärt). Vorher fließt kein Geld.',
        },
        {
          q: 'Warum ist eine Barzahlung „am Notar vorbei" gefährlich?',
          options: [
            'Sie ist nur unhöflich',
            'Verdeckte Kaufpreisteile sind riskant bis strafbar und du verlierst jede notarielle Absicherung',
            'Sie erhöht die Maklerprovision',
            'Sie verzögert nur den Termin',
          ],
          correct: 1,
          explanation:
            'Schwarzgeldabreden gefährden den ganzen Vertrag, sind steuerlich strafbar — und dein Geld ist ohne Treuhandmechanismus ungesichert.',
        },
        {
          q: 'Eine Sonderumlage wurde vor dem Verkauf beschlossen, wird aber erst nach Übergabe fällig. Worauf achtest du?',
          options: [
            'Auf nichts — das regelt das Gesetz eindeutig zu deinen Gunsten',
            'Auf die Vertragsklausel: Ohne Regelung/Änderung kann die Zahlung an dir hängen bleiben',
            'Sonderumlagen betreffen nur Mieter',
            'Die WEG erlässt sie beim Eigentümerwechsel',
          ],
          correct: 1,
          explanation:
            'Wer beschlossene Umlagen trägt, ist Verhandlungs- und Vertragsgestaltungssache — die Protokolle liefern dir das Wissen, der Vertrag die Regelung.',
        },
      ],
    },
    {
      id: 'recht-3',
      title: 'Mietrecht-Basics für Vermieter',
      intro:
        'Als Vermieter bewegst du dich in einem stark mieterschützenden Rechtsrahmen. Die Grundlagen zu kennen schützt dich vor teuren Fehlern — und macht dich zum fairen, souveränen Vertragspartner.',
      sections: [
        {
          heading: 'Der Mietvertrag: Dein wichtigstes Dokument',
          body: 'Nutze aktuelle, geprüfte Vertragsvorlagen (z. B. von Eigentümerverbänden wie Haus & Grund) — veraltete Muster aus dem Internet enthalten oft unwirksame Klauseln, und unwirksame Klauseln gehen zu deinen Lasten (dann gilt die gesetzliche Regelung). Klassiker: starre Renovierungsfristen („alle 3 Jahre streichen") sind unwirksam — dann schuldet der Mieter gar keine Schönheitsreparaturen.\n\nKerninhalte: Parteien, Wohnung mit Zubehör, Kaltmiete + Betriebskostenvorauszahlung mit Abrechnungsvereinbarung, Kaution (maximal 3 Nettokaltmieten, in 3 Raten zahlbar, getrennt anzulegen), Schönheitsreparaturen (flexible, wirksame Klausel), Übergabeprotokoll als Anlage.',
        },
        {
          heading: 'Miete erhöhen: Enge, aber klare Regeln',
          body: 'Im laufenden Mietverhältnis führen drei Wege zur höheren Miete: (1) Anpassung an die ortsübliche Vergleichsmiete — begründet über Mietspiegel, Frist- und Kappungsgrenzen beachten (maximal 20 % in 3 Jahren, in vielen Städten 15 %). (2) Modernisierungsumlage — ein Teil der Modernisierungskosten (nicht: Instandhaltung!) darf umgelegt werden; die Abgrenzung ist streitanfällig. (3) Vereinbarte Staffel- oder Indexmiete von Anfang an.\n\nBei Neuvermietung gilt in vielen Städten die Mietpreisbremse (Neumiete grundsätzlich max. 10 % über Vergleichsmiete, mit Ausnahmen). Regionale Regeln prüfen — hier ändert sich laufend etwas.',
        },
        {
          heading: 'Kündigung: Warum „einfach rauswerfen" nicht existiert',
          body: 'Als Vermieter kannst du unbefristete Mietverhältnisse nur mit berechtigtem Interesse kündigen — vor allem Eigenbedarf (ernsthaft, konkret, begründet; vorgeschobener Eigenbedarf ist teuer schadensersatzpflichtig) oder erhebliche Vertragsverletzungen des Mieters (z. B. Zahlungsverzug: fristlose Kündigung ab zwei Monatsmieten Rückstand möglich).\n\n„Verwertungskündigung" (wegen Verkauf/Abriss) hat sehr hohe Hürden. Merke für den Ankauf: Eine vermietete Wohnung kaufst du mit dem Mieter — plane nie mit einer schnellen Entmietung, sie ist rechtlich schwer und moralisch wie reputativ heikel.',
        },
        {
          heading: 'Die Betriebskostenabrechnung: Pflicht mit Fristen',
          body: 'Über die Vorauszahlungen musst du jährlich abrechnen — spätestens 12 Monate nach Ende des Abrechnungszeitraums. Verpasst du die Frist, kannst du Nachforderungen in der Regel nicht mehr stellen (Guthaben des Mieters bleiben fällig). Umlegbar ist nur, was in der Betriebskostenverordnung steht und im Vertrag vereinbart ist.\n\nSaubere Abrechnungen sind auch Beziehungspflege: Die meisten Mietstreitigkeiten drehen sich um Nebenkosten. Wer transparent, korrekt und pünktlich abrechnet, hat ruhigere Mietverhältnisse — und bessere Chancen, gute Mieter lange zu halten.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die unwirksame Klausel',
        body: 'Vermieter Timo nutzt einen alten Mustervertrag mit starrer Klausel: „Der Mieter renoviert alle 3 Jahre Küche und Bad, alle 5 Jahre alle übrigen Räume." Nach 8 Jahren zieht der Mieter aus — unrenoviert. Timo verlangt Renovierung, der Mieter lässt die Klausel anwaltlich prüfen: starr = unwirksam = keinerlei Renovierungspflicht des Mieters. Timo streicht selbst für 4.200 €. Mit einer aktuellen, flexiblen Klausel („soweit erforderlich, im Rahmen üblicher Fristen") hätte der Mieter zumindest anteilig renovieren müssen. Vorlagenpflege kostet 20 Minuten — dieser Fehler kostete 4.200 €.',
      },
      note: 'Aktuelle Vertragsvorlagen nutzen (unwirksame Klauseln gehen zu deinen Lasten), Kaution max. 3 Kaltmieten getrennt anlegen, Mieterhöhung nur in engen Grenzen (Kappungsgrenze, ggf. Mietpreisbremse), Kündigung nur mit berechtigtem Interesse, Betriebskosten binnen 12 Monaten abrechnen. Bildungsinhalt — im Streitfall zum Fachanwalt für Mietrecht.',
      legalHint: true,
      wikiRefs: ['mietvertrag', 'kappungsgrenze', 'mietpreisbremse', 'betriebskosten', 'kaution', 'eigenbedarf'],
      quiz: [
        {
          q: 'Was passiert, wenn eine Schönheitsreparatur-Klausel unwirksam ist?',
          options: [
            'Der Mieter muss trotzdem renovieren',
            'Es gilt die gesetzliche Regel: Der Vermieter trägt die Schönheitsreparaturen',
            'Der Vertrag ist komplett nichtig',
            'Die Kaution verfällt',
          ],
          correct: 1,
          explanation:
            'Unwirksame Klauseln fallen ersatzlos weg — dann gilt das Gesetz, und das legt Schönheitsreparaturen dem Vermieter auf.',
        },
        {
          q: 'Wie hoch darf die Mietkaution maximal sein?',
          options: ['1 Nettokaltmiete', '3 Nettokaltmieten', '6 Warmmieten', 'Unbegrenzt'],
          correct: 1,
          explanation: 'Maximal drei Nettokaltmieten, zahlbar in drei Monatsraten, getrennt vom Vermögen des Vermieters anzulegen.',
        },
        {
          q: 'Was begrenzt die Kappungsgrenze?',
          options: [
            'Die Höhe der Neuvermietungsmiete',
            'Mieterhöhungen im Bestand: max. 20 % (vielerorts 15 %) innerhalb von 3 Jahren bis zur Vergleichsmiete',
            'Die Betriebskosten',
            'Die Kaufnebenkosten',
          ],
          correct: 1,
          explanation:
            'Die Kappungsgrenze deckelt Bestandserhöhungen zeitlich und prozentual — deshalb hebt sich Unter-Markt-Miete nur langsam.',
        },
        {
          q: 'Bis wann musst du über Betriebskosten abrechnen — und was passiert danach?',
          options: [
            'Innerhalb von 3 Jahren, sonst nichts',
            'Innerhalb von 12 Monaten nach Ende des Abrechnungszeitraums — danach sind Nachforderungen regelmäßig ausgeschlossen',
            'Es gibt keine Frist',
            'Innerhalb von 14 Tagen',
          ],
          correct: 1,
          explanation:
            'Die 12-Monats-Frist ist hart: Zu spät = Nachforderung weg (Mieter-Guthaben bleiben trotzdem auszuzahlen).',
        },
      ],
    },
    {
      id: 'recht-4',
      title: 'WEG & Teilungserklärung: Die Spielregeln der Gemeinschaft',
      intro:
        'Wer eine Eigentumswohnung kauft, tritt einer Organisation bei: der Wohnungseigentümergemeinschaft. Ihre Verfassung ist die Teilungserklärung, ihr Parlament die Eigentümerversammlung.',
      sections: [
        {
          heading: 'Sondereigentum, Gemeinschaftseigentum, Sondernutzungsrecht',
          body: 'Die Teilungserklärung teilt das Gebäude auf: Sondereigentum ist, was dir allein gehört (im Wesentlichen die Räume deiner Wohnung „von der Tapete bis zur Tapete", Innentüren, nicht tragende Wände, Sanitärobjekte). Gemeinschaftseigentum ist alles Konstruktive und Gemeinsame: Dach, Fassade, tragende Wände, Fenster (meist!), Treppenhaus, Leitungsstränge, Heizungsanlage.\n\nDazwischen: Sondernutzungsrechte — Flächen des Gemeinschaftseigentums, die du exklusiv nutzen darfst (Gartenanteil, Stellplatz, Kellerraum). Wichtig beim Kauf: Was das Exposé „Garten" nennt, ist rechtlich oft nur ein Sondernutzungsrecht — nutzbar ja, aber baulich nur mit Zustimmung der Gemeinschaft veränderbar.',
        },
        {
          heading: 'Die Eigentümerversammlung: Beschlüsse und Mehrheiten',
          body: 'Einmal jährlich (mindestens) tagt die Versammlung: Wirtschaftsplan, Jahresabrechnung, Verwalterbestellung, Instandhaltung, bauliche Veränderungen. Seit der WEG-Reform 2020 reicht für die meisten Beschlüsse die einfache Mehrheit der abgegebenen Stimmen — auch für viele bauliche Maßnahmen (die Kostenverteilung folgt dann eigenen Regeln).\n\nFür dich als Investor heißt das: Du kannst überstimmt werden. Eine beschlossene energetische Sanierung mit Sonderumlage trifft dich auch, wenn du dagegen gestimmt hast. Deshalb gehört die „Kultur" einer WEG (Protokolle: Wird konstruktiv entschieden oder jahrelang vertagt und gestritten?) zur Kaufprüfung wie die Rücklage.',
        },
        {
          heading: 'Verwalter, Beirat, Hausgeld',
          body: 'Die Verwaltung führt die Beschlüsse aus, erstellt Wirtschaftsplan und Jahresabrechnung, beruft die Versammlung ein und verwaltet die Konten der Gemeinschaft. Der Verwaltungsbeirat (gewählte Eigentümer) kontrolliert sie. Als Eigentümer zahlst du das monatliche Hausgeld nach dem Verteilerschlüssel der Teilungserklärung (meist Miteigentumsanteile).\n\nPraxis-Tipp für neue Eigentümer: Geh zur Versammlung — oder gib eine durchdachte Vollmacht ab. Wer nie erscheint, überlässt Fremden Entscheidungen über sein Vermögen. Und lies die Beschluss-Sammlung: Sie ist das Gedächtnis der Gemeinschaft.',
        },
        {
          heading: 'Was du vor dem Kauf einer ETW immer prüfst',
          body: 'Die WEG-Checkliste: Teilungserklärung samt Gemeinschaftsordnung (Sonderregeln! Etwa Vermietungsbeschränkungen oder gewerbliche Nutzung), Protokolle der letzten 2–3 Versammlungen (beschlossene/vertagte Maßnahmen, Streit, Rückstände einzelner Eigentümer), aktuelle Jahresabrechnung und Wirtschaftsplan, Höhe der Rücklage (absolut und pro m²), laufende oder drohende Rechtsstreitigkeiten, Verwalter (professionell? erreichbar?).\n\nEine gesunde WEG ist ein Qualitätsmerkmal, das im Exposé nie steht — und ein Grund, warum zwei identische Wohnungen in Nachbarhäusern völlig unterschiedliche Investments sein können.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Überstimmt — und trotzdem gut gefahren',
        body: 'Leas WEG (18 Einheiten) beschließt mit 11:7 Stimmen eine Fassadendämmung samt Sonderumlage von 7.800 € pro Einheit. Lea hatte dagegen gestimmt — zahlen muss sie trotzdem. Weil sie die Protokolle vor dem Kauf gelesen hatte, war die Maßnahme für sie keine Überraschung: Sie hatte die 8.000 € als Rückstellung eingeplant und den Kaufpreis entsprechend verhandelt. Zwei Jahre später: Energieklasse verbessert, Nebenkosten der Mieter gesunken, Neuvermietung 9 % über alter Miete. Die Gemeinschaft kann dich zwingen — vorbereitet trifft es dich planbar statt existenziell.',
      },
      note: 'Teilungserklärung = Verfassung der WEG (Sonder-/Gemeinschaftseigentum, Sondernutzungsrechte, Verteilerschlüssel). Versammlungen entscheiden mehrheitlich — du kannst überstimmt werden. Vor jedem ETW-Kauf: Protokolle, Abrechnung, Rücklage, Gemeinschaftsordnung prüfen.',
      legalHint: true,
      wikiRefs: ['weg', 'teilungserklaerung', 'sondernutzungsrecht', 'hausgeld', 'sonderumlage'],
      quiz: [
        {
          q: 'Was gehört typischerweise zum Gemeinschaftseigentum?',
          options: [
            'Deine Innentüren',
            'Dach, Fassade, tragende Wände, Leitungsstränge, Heizungsanlage',
            'Deine Einbauküche',
            'Die Bodenbeläge deiner Wohnung',
          ],
          correct: 1,
          explanation:
            'Alles Konstruktive und gemeinsam Genutzte ist Gemeinschaftseigentum — Kosten dafür trägt die Gemeinschaft nach Schlüssel.',
        },
        {
          q: 'Was ist ein Sondernutzungsrecht?',
          options: [
            'Volles Eigentum an einer Gartenfläche',
            'Das exklusive Nutzungsrecht an einer Fläche des Gemeinschaftseigentums (z. B. Garten, Stellplatz)',
            'Das Recht, die Miete zu erhöhen',
            'Ein Stimmrechtsbonus in der Versammlung',
          ],
          correct: 1,
          explanation:
            'Nutzung exklusiv, Eigentum gemeinschaftlich: bauliche Veränderungen brauchen weiterhin die Gemeinschaft.',
        },
        {
          q: 'Du stimmst gegen eine Sanierung, die Mehrheit dafür. Was gilt?',
          options: [
            'Du bist von den Kosten befreit',
            'Der Beschluss bindet dich — Sonderumlage oder Rücklagenverwendung treffen auch dich',
            'Der Beschluss ist ungültig',
            'Du darfst aus der WEG austreten',
          ],
          correct: 1,
          explanation:
            'Mehrheitsbeschlüsse binden alle Eigentümer. Deshalb gehören WEG-Kultur und Finanzlage zur Kaufprüfung.',
        },
        {
          q: 'Welche Unterlagen prüfst du vor jedem ETW-Kauf?',
          options: [
            'Nur das Exposé',
            'Teilungserklärung, Protokolle, Jahresabrechnung, Wirtschaftsplan, Rücklagenstand',
            'Nur den Energieausweis',
            'Die Steuererklärung des Verkäufers',
          ],
          correct: 1,
          explanation:
            'Diese Dokumente zeigen die wirtschaftliche und soziale Gesundheit der Gemeinschaft — das Investment hinter dem Investment.',
        },
      ],
    },
    {
      id: 'recht-5',
      title: 'Die AfA: Das Grundprinzip der Gebäudeabschreibung',
      intro:
        'Die Absetzung für Abnutzung (AfA) ist der wichtigste Steuermechanismus für Vermieter: Du darfst die Anschaffungskosten des Gebäudes über Jahrzehnte steuerlich geltend machen — ohne dass real Geld abfließt.',
      sections: [
        {
          heading: 'Die Idee: Gebäude nutzen sich ab, Boden nicht',
          body: 'Steuerlich betrachtet verliert ein Gebäude über die Zeit an Wert — diesen fiktiven Wertverzehr darfst du als Werbungskosten von deinen Mieteinnahmen abziehen. Der Boden dagegen nutzt sich nicht ab: Er ist nicht abschreibbar.\n\nDeshalb wird der Kaufpreis aufgeteilt in Gebäudeanteil (abschreibbar) und Bodenanteil (nicht abschreibbar). Diese Aufteilung — im Kaufvertrag sinnvoll dokumentiert oder nach den Arbeitshilfen der Finanzverwaltung ermittelt — hat direkten Einfluss auf deine jährliche Steuerersparnis; ein Punkt, den du mit deinem Steuerberater vor dem Kauf besprichst.',
        },
        {
          heading: 'Die Standardsätze (Stand: Anfang 2026, beispielhaft)',
          body: 'Für vermietete Wohngebäude gilt als Grundregel die lineare AfA: 2 % pro Jahr (Baujahr nach 1924, angesetzte Nutzungsdauer 50 Jahre), 2,5 % für Altbauten davor. Für Neubauten mit Fertigstellung ab 2023 gilt ein Satz von 3 %; zeitweise existieren zusätzlich degressive Varianten und Sonderabschreibungen für den Mietwohnungsneubau — solche Programme ändern sich, den aktuellen Stand liefert der Steuerberater.\n\nWichtig: Bemessungsgrundlage sind die Anschaffungskosten des Gebäudes inklusive des anteiligen Anteils der Kaufnebenkosten — auch Notar und Grunderwerbsteuer wirken also anteilig über die AfA.',
        },
        {
          heading: 'Was die AfA praktisch bewirkt',
          body: 'Die AfA ist ein Buchungsposten ohne Geldabfluss: Sie senkt dein zu versteuerndes Ergebnis aus Vermietung, während dein Konto sie nicht spürt. Ein Objekt kann steuerlich einen Verlust ausweisen (der sich mit anderen Einkünften verrechnen lässt) und gleichzeitig einen positiven Cashflow liefern — dieser Effekt macht Immobilien steuerlich besonders.\n\nZusätzlich relevant: der Unterschied zwischen sofort abziehbarem Erhaltungsaufwand (Reparaturen) und nachträglichen Herstellungskosten (Standardhebung/Erweiterung — nur über AfA abschreibbar) sowie die 15-%-Grenze: Übersteigen Instandsetzungskosten in den ersten drei Jahren 15 % der Gebäude-Anschaffungskosten, werden sie zu anschaffungsnahen Herstellungskosten — und wandern zwangsweise in die langsame AfA. Sanierungsplanung ist deshalb auch Steuerplanung.',
        },
        {
          heading: 'Grenzen und der Profi-Zeitpunkt',
          body: 'Die AfA endet gedanklich nie beim Slogan „der Staat zahlt deine Wohnung" — sie ist ein Stundungs- und Entlastungseffekt, kein Geschenk: Bei einem späteren Verkauf kann die Abschreibung den steuerlichen Buchwert gemindert haben, und die individuellen Effekte hängen an deinem Steuersatz.\n\nSpätestens vor dem ersten Kauf gehört ein Steuerberater mit Immobilienfokus ins Team: Kaufpreisaufteilung, AfA-Satz, Behandlung der Sanierung, Fahrt- und Finanzierungskosten — die Beratung kostet dreistellig und spart regelmäßig vierstellig. Diese Lektion gibt dir das Vokabular für dieses Gespräch, nicht seinen Ersatz.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: AfA einer 250.000-€-Wohnung (vereinfacht)',
        body: 'Gesamtkaufpreis inkl. Nebenkosten: 272.000 €. Kaufpreisaufteilung: 20 % Boden (54.400 €), 80 % Gebäude (217.600 €). Lineare AfA 2 %: 4.352 € pro Jahr als Werbungskosten — 50 Jahre lang, ohne dass ein Euro vom Konto geht. Bei einem persönlichen Grenzsteuersatz von beispielhaft 35 % entspricht das einer jährlichen Steuerentlastung von rund 1.523 €, also ~127 € pro Monat, die die reale Belastung des Objekts senken. Genau deshalb gehört die AfA in jede Nach-Steuer-Betrachtung — und die Kaufpreisaufteilung vorab zum Steuerberater.',
      },
      note: 'AfA = jährliche Abschreibung des Gebäudeanteils (Standard linear 2 %, Altbau 2,5 %, Neubau ab 2023: 3 % — Stand beispielhaft) als Werbungskosten ohne Geldabfluss. Boden ist nicht abschreibbar, die 15-%-Grenze bei Sanierungen beachten. Konkrete Gestaltung: immer mit Steuerberater.',
      legalHint: true,
      wikiRefs: ['afa', 'werbungskosten', 'erhaltungsaufwand', 'kaufpreisaufteilung'],
      quiz: [
        {
          q: 'Warum wird der Kaufpreis in Gebäude- und Bodenanteil aufgeteilt?',
          options: [
            'Für die Grunderwerbsteuer',
            'Weil nur der Gebäudeanteil abschreibbar ist — Boden nutzt sich steuerlich nicht ab',
            'Für die Maklerprovision',
            'Das ist freiwillige Statistik',
          ],
          correct: 1,
          explanation:
            'Die AfA gibt es nur auf das Gebäude. Je sachgerecht höher der Gebäudeanteil, desto höher die jährliche Abschreibung.',
        },
        {
          q: 'Was macht die AfA finanziell besonders?',
          options: [
            'Sie ist eine echte monatliche Auszahlung des Finanzamts',
            'Sie senkt das zu versteuernde Ergebnis, ohne dass real Geld abfließt',
            'Sie erhöht die Miete',
            'Sie ersetzt die Instandhaltungsrücklage',
          ],
          correct: 1,
          explanation:
            'Ein Buchungsposten ohne Liquiditätsabfluss: steuerlicher Verlust und positiver Cashflow können gleichzeitig existieren.',
        },
        {
          q: 'Was besagt die 15-%-Grenze?',
          options: [
            'Maximal 15 % Mieterhöhung pro Jahr',
            'Instandsetzungskosten über 15 % der Gebäude-Anschaffungskosten in den ersten 3 Jahren werden zu langsam abschreibbaren Herstellungskosten',
            'Die AfA beträgt immer 15 %',
            'Der Bodenanteil beträgt immer 15 %',
          ],
          correct: 1,
          explanation:
            'Wer kurz nach Kauf groß saniert, verliert ggf. den Sofortabzug — Sanierungs-Timing ist Steuerplanung. Details: Steuerberater.',
        },
        {
          q: 'Gebäudeanteil 217.600 €, lineare AfA 2 %. Jährliche Abschreibung?',
          options: ['2.176 €', '4.352 €', '6.528 €', '10.880 €'],
          correct: 1,
          explanation: '217.600 × 0,02 = 4.352 € pro Jahr — als Werbungskosten von den Mieteinnahmen abziehbar.',
        },
      ],
    },
    {
      id: 'recht-6',
      title: 'Laufende Steuern im Überblick: Vermietung, Grundsteuer, Verkauf',
      intro:
        'Zwischen Mieteinnahme und Steuerbescheid liegen ein paar Grundmechanismen, die jeder Vermieter verstehen sollte — von den Werbungskosten über die Grundsteuer bis zur berühmten Zehn-Jahres-Frist.',
      sections: [
        {
          heading: 'Einkünfte aus Vermietung und Verpachtung',
          body: 'Deine Mieteinnahmen (Kaltmiete + Umlagen) landen in der Anlage V der Steuererklärung. Dagegen rechnest du die Werbungskosten: Schuldzinsen (nicht die Tilgung!), AfA, Verwaltung, Instandhaltung, Fahrtkosten, Steuerberatung, Kontoführung, anteilige Nebenkosten.\n\nDas Ergebnis — Überschuss oder Verlust — wird mit deinem persönlichen Steuersatz besteuert bzw. mit anderen Einkünften verrechnet. Praktisch heißt das: In den ersten Jahren (hohe Zinsen, volle AfA) zahlen viele Vermieter auf ihre Mieteinnahmen kaum oder keine Steuern — später dreht sich das Bild, wenn Zinsen sinken und Mieten steigen.',
        },
        {
          heading: 'Die Grundsteuer: Klein, aber regelmäßig',
          body: 'Die Grundsteuer zahlst du als Eigentümer jährlich an die Gemeinde; Grundlage sind seit der Reform die neuen Grundsteuerwerte und der kommunale Hebesatz. Gute Nachricht für Vermieter: Die Grundsteuer ist als Betriebskosten auf die Mieter umlagefähig (bei korrekter Vereinbarung im Mietvertrag).\n\nBeim Ankauf prüfst du die aktuelle Höhe im Bescheid des Verkäufers — und denkst daran, dass Hebesätze kommunal steigen können. Ein durchlaufender Posten mit kleinem Verwaltungsaufwand, aber kein Renditekiller.',
        },
        {
          heading: 'Verkauf: Die Zehn-Jahres-Frist (Spekulationsfrist)',
          body: 'Verkaufst du eine vermietete Immobilie innerhalb von zehn Jahren nach Anschaffung mit Gewinn, ist dieser als privates Veräußerungsgeschäft steuerpflichtig — mit deinem persönlichen Steuersatz, was schnell sechsstellige Steuerlasten bedeuten kann. Nach Ablauf der zehn Jahre ist der Veräußerungsgewinn im Privatvermögen grundsätzlich steuerfrei — einer der größten strukturellen Vorteile deutscher Immobilien-Privatinvestoren.\n\nAusnahme: Selbst genutzte Immobilien (im Verkaufsjahr und den beiden Vorjahren eigengenutzt) sind auch früher steuerfrei. Und Vorsicht: Wer wiederholt kauft und verkauft, riskiert die Einstufung als gewerblicher Grundstückshändler (Stichwort Drei-Objekt-Grenze) — mit deutlich schlechteren Folgen.',
        },
        {
          heading: 'Ordnung als Steuerstrategie',
          body: 'Der unterschätzte Hebel ist Buchhaltung: separates Konto pro Objekt, alle Belege digital abgelegt, Fahrten und Termine dokumentiert. Ohne Beleg kein Abzug — jede verlorene Handwerkerrechnung ist verschenktes Geld.\n\nUnd zum wiederholten Mal, weil es wichtig ist: Dieses Modul liefert Grundverständnis, keine Beratung. Steuerrecht ändert sich laufend, und deine Situation ist individuell. Ein auf Immobilien spezialisierter Steuerberater gehört ab dem ersten Objekt zum Team — die Lektionen hier sorgen dafür, dass du sein Sparring verstehst und die richtigen Fragen stellst.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Anlage V im ersten Jahr (vereinfacht)',
        body: 'Mieteinnahmen (10 Monate nach Kauf): 7.500 € + 1.800 € Umlagen = 9.300 €. Werbungskosten: Schuldzinsen 5.900 €, AfA (anteilig) 3.620 €, nicht umlagefähige Verwaltung 850 €, Reparatur 1.200 €, Fahrtkosten/Sonstiges 380 €, umgelegte Betriebskosten 1.800 € = 13.750 €. Steuerliches Ergebnis: −4.450 €. Bei 38 % Grenzsteuersatz entlastet dieser Verlust die übrige Steuer um rund 1.690 € — obwohl das Objekt cashflow-seitig nur leicht negativ lief. Genau diese Doppelsicht (Cashflow vs. Steuer) macht informierte Investoren aus.',
      },
      note: 'Vermietung = Anlage V: Einnahmen minus Werbungskosten (Zinsen, AfA, Kosten — nicht die Tilgung). Grundsteuer ist umlagefähig. Verkauf nach 10 Jahren im Privatvermögen grundsätzlich steuerfrei, vorher steuerpflichtig; Drei-Objekt-Grenze beachten. Belege sind Geld — und der Steuerberater gehört ins Team.',
      legalHint: true,
      wikiRefs: ['werbungskosten', 'spekulationsfrist', 'grundsteuer', 'afa', 'drei-objekt-grenze'],
      quiz: [
        {
          q: 'Welche Position ist KEINE Werbungskosten bei Vermietung?',
          options: ['Schuldzinsen', 'AfA', 'Die Tilgung des Darlehens', 'Verwaltungskosten'],
          correct: 2,
          explanation:
            'Die Tilgung ist Vermögensaufbau, kein Aufwand — abziehbar sind nur die Zinsen (plus AfA und laufende Kosten).',
        },
        {
          q: 'Was gilt beim Verkauf einer vermieteten Immobilie nach 12 Jahren Haltedauer (Privatvermögen)?',
          options: [
            'Voller Gewinn steuerpflichtig',
            'Der Veräußerungsgewinn ist grundsätzlich steuerfrei (Zehn-Jahres-Frist abgelaufen)',
            'Pauschal 25 % Steuer',
            'Verkauf ist verboten',
          ],
          correct: 1,
          explanation:
            'Nach Ablauf der Spekulationsfrist von zehn Jahren ist der private Veräußerungsgewinn grundsätzlich steuerfrei — ein zentraler Planungsfaktor.',
        },
        {
          q: 'Wer trägt wirtschaftlich die Grundsteuer einer korrekt vermieteten Wohnung?',
          options: [
            'Immer der Eigentümer allein',
            'Der Mieter — sie ist als Betriebskosten umlagefähig',
            'Die Bank',
            'Die WEG-Rücklage',
          ],
          correct: 1,
          explanation:
            'Bei vereinbarter Umlage läuft die Grundsteuer über die Nebenkostenabrechnung an den Mieter durch.',
        },
        {
          q: 'Wovor warnt die Drei-Objekt-Grenze?',
          options: [
            'Vor dem Kauf von mehr als drei Objekten überhaupt',
            'Vor der Einstufung als gewerblicher Grundstückshändler bei mehreren Verkäufen binnen kurzer Zeit',
            'Vor zu vielen Besichtigungen',
            'Vor drei Krediten bei einer Bank',
          ],
          correct: 1,
          explanation:
            'Wer binnen ~5 Jahren mehr als drei Objekte verkauft, riskiert Gewerblichkeit — mit Gewerbesteuer und Verlust der Steuerfreiheit. Grenzfälle: zum Steuerberater.',
        },
      ],
    },
    {
      id: 'recht-7',
      title: 'Wann Profis übernehmen: Dein Beraterteam',
      intro:
        'Selbst lernen heißt nicht, alles selbst machen. Die teuersten Fehler passieren an den Stellen, wo Laien Profi-Aufgaben übernehmen. Diese Lektion zeigt, wen du wann brauchst — und wie du gute Berater findest.',
      sections: [
        {
          heading: 'Der Steuerberater: Pflicht ab Objekt eins',
          body: 'Spätestens vor der ersten Beurkundung: Kaufpreisaufteilung (Boden/Gebäude), AfA-Strategie, Behandlung geplanter Sanierungen (15-%-Grenze!), Finanzierungsgestaltung, später die Anlage V. Wähle gezielt jemanden mit Immobilien-Schwerpunkt — die Frage „Wie viele vermietende Mandanten betreuen Sie?" ist völlig legitim.\n\nKosten: für Beratung und Erklärung meist im niedrigen vierstelligen Bereich pro Jahr — regelmäßig weniger, als eine einzige verpasste Gestaltung kostet. Merksatz: Der Steuerberater wird VOR Entscheidungen gefragt, nicht danach. Nachträglich kann er nur noch dokumentieren, was du falsch gemacht hast.',
        },
        {
          heading: 'Anwalt, Notar und die Grenze dazwischen',
          body: 'Der Notar erklärt neutral den Vertrag — er berät aber nicht einseitig in deinem Interesse. Sobald es um Verhandlungspositionen, ungewöhnliche Klauseln, Erbbaurecht, Wohnrechte oder Streit geht, gehört ein Fachanwalt (Miet- und WEG-Recht bzw. Immobilienrecht) an deine Seite. Eine Erstberatung kostet überschaubar; ein verlorener Mietprozess oder ein schlecht gestalteter Vertrag kostet ein Vielfaches.\n\nKlassische Anwalts-Momente: Eigenbedarfskündigung, Mietrückstände und Räumung, Mängel nach Kauf (Arglist-Verdacht), Streit mit der WEG oder dem Verwalter, gewerbliche Mietverträge.',
        },
        {
          heading: 'Bausachverständiger, Finanzierungsvermittler, Energieberater',
          body: 'Der Bausachverständige (400–800 € pro Begehung) gehört zu jedem ernsthaften Kandidaten mit Baujahr vor ~1990 oder unklarem Zustand — sein Bericht ist zugleich Verhandlungswerkzeug. Der Finanzierungsvermittler kostet dich in der Regel nichts und liefert Marktbreite; ein guter erklärt dir auch, WARUM eine Struktur passt. Der zertifizierte Energieberater ist Pflicht-Partner für Förderanträge und lohnt bei jeder größeren Sanierung (individueller Sanierungsfahrplan).\n\nDazu das operative Team, das mit dem Bestand wächst: Hausverwaltung, Handwerker des Vertrauens (der Elektriker, der auch samstags rangeht, ist unbezahlbar), Versicherungsmakler.',
        },
        {
          heading: 'Gute Berater erkennen — und schlechte',
          body: 'Gute Zeichen: Sie stellen dir viele Fragen, bevor sie antworten. Sie sagen auch „Nein, lassen Sie das". Sie erklären verständlich und rechnen transparent ab. Sie haben nachweisbare Erfahrung in genau deinem Thema. Schlechte Zeichen: Produktverkauf statt Beratung (Provisionen!), Zeitdruck, Garantieversprechen, Ausweichen bei der Honorarfrage.\n\nDie beste Quelle für gute Leute: Empfehlungen anderer Investoren — genau dafür ist das Kontor da. Und ein letzter Grundsatz: Berater beraten, entscheiden tust du. Wer die Grundlagen aus diesem Blueprint beherrscht, kann Empfehlungen prüfen statt blind folgen — das ist der ganze Sinn deiner Ausbildung hier.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: 900 € Beratung, 11.000 € Wirkung',
        body: 'Vor ihrem ersten Kauf (ETW, 235.000 €, Sanierung geplant) investiert Emma in zwei Termine: Steuerberater (350 €) und Bausachverständiger (550 €). Ergebnis 1: Die geplante 45.000-€-Sanierung hätte die 15-%-Grenze gerissen — gestreckt auf Jahr 4 bleibt der Sofortabzug erhalten, Steuereffekt über 6.000 €. Ergebnis 2: Der Gutachter findet durchfeuchtete Kellerwände; Emma verhandelt 8.000 € Nachlass und plant die Abdichtung ein. Gesamtwirkung der 900 €: über 11.000 € plus ein vermiedenes Feuchte-Drama. Profis kosten Geld — keine Profis kosten Vermögen.',
      },
      note: 'Steuerberater VOR dem Kauf (Aufteilung, AfA, 15-%-Grenze), Fachanwalt bei Streit und Sonderklauseln, Bausachverständiger bei Altbau/Zustandsfragen, Energieberater für Förderung. Gute Berater fragen viel und sagen auch Nein. Beraten lassen, selbst entscheiden.',
      legalHint: true,
      wikiRefs: ['bausachverstaendiger', 'notar', 'hausverwaltung'],
      quiz: [
        {
          q: 'Wann sprichst du zum ersten Mal mit einem Steuerberater?',
          options: [
            'Bei der ersten Steuererklärung nach dem Kauf',
            'VOR dem Kauf — Kaufpreisaufteilung, AfA und Sanierungsplanung wirken nur vorab',
            'Erst ab drei Objekten',
            'Nie, das Finanzamt berät kostenlos',
          ],
          correct: 1,
          explanation:
            'Die wichtigsten steuerlichen Weichen (Aufteilung, 15-%-Grenze, Struktur) stellst du vor der Beurkundung — danach ist es Dokumentation.',
        },
        {
          q: 'Worin unterscheidet sich der Notar vom Anwalt?',
          options: [
            'Gar nicht',
            'Der Notar ist neutraler Formwahrer für beide Seiten — der Anwalt vertritt einseitig deine Interessen',
            'Der Anwalt beurkundet Kaufverträge',
            'Der Notar ist immer günstiger und deshalb vorzuziehen',
          ],
          correct: 1,
          explanation:
            'Neutralität ist die Stärke und die Grenze des Notars: Für Verhandlungspositionen und Streit brauchst du anwaltliche Vertretung.',
        },
        {
          q: 'Welches ist ein Warnsignal bei einem „Berater"?',
          options: [
            'Er stellt viele Rückfragen',
            'Er rät dir auch mal ab',
            'Er drängt zum schnellen Abschluss eines Produkts und weicht bei der Honorarfrage aus',
            'Er erklärt verständlich',
          ],
          correct: 2,
          explanation:
            'Produktdruck + intransparente Vergütung = Verkäufer, nicht Berater. Gute Beratung beginnt mit Fragen und verträgt Bedenkzeit.',
        },
        {
          q: 'Was ist der Sinn deiner eigenen Ausbildung, wenn du ohnehin Profis engagierst?',
          options: [
            'Keiner — Wissen ist dann überflüssig',
            'Du kannst Empfehlungen prüfen, die richtigen Fragen stellen und selbst entscheiden statt blind zu folgen',
            'Du sparst dir alle Beraterkosten',
            'Du darfst dann selbst als Berater arbeiten',
          ],
          correct: 1,
          explanation:
            'Grundlagenwissen macht dich zum mündigen Auftraggeber: Berater beraten — die Verantwortung und die Entscheidung bleiben bei dir.',
        },
      ],
    },
  ],
}
