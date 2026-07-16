import type { ModuleGroup } from './types'

export const fundament: ModuleGroup = {
  slug: 'fundament',
  title: 'Fundament',
  description:
    'Bevor du rechnest, verhandelst oder kaufst: Hier legst du das Fundament — wie Immobilien Vermögen aufbauen, wer am Markt mitspielt und wie der Kaufprozess funktioniert.',
  lessons: [
    {
      id: 'fundament-1',
      title: 'Wie Immobilien Vermögen aufbauen',
      intro:
        'Immobilien machen niemanden über Nacht reich — aber sie gehören zu den verlässlichsten Werkzeugen für langfristigen Vermögensaufbau. In dieser Lektion verstehst du die vier Hebel, die dabei zusammenwirken.',
      sections: [
        {
          heading: 'Der erste Hebel: Miete zahlt das Objekt ab',
          body: 'Wenn du eine vermietete Immobilie mit einem Bankdarlehen kaufst, bedient die monatliche Kaltmiete einen großen Teil deiner Kreditrate. Über die Jahre tilgt also nicht nur dein eigenes Geld das Darlehen, sondern vor allem das Geld deiner Mieter. Am Ende der Laufzeit gehört dir ein Sachwert, den zu einem erheblichen Teil andere abbezahlt haben.\n\nDas unterscheidet Immobilien von den meisten anderen Anlageklassen: Eine Aktie kannst du nicht vermieten, ein Sparbuch tilgt keinen Kredit. Genau deshalb funktioniert der Immobilienkauf auch mit vergleichsweise wenig Eigenkapital — die Bank finanziert mit, weil das Objekt selbst als Sicherheit dient.',
        },
        {
          heading: 'Der zweite Hebel: Fremdkapital verstärkt dein Eigenkapital',
          body: 'Fachleute nennen es den Leverage-Effekt: Du setzt zum Beispiel 40.000 € Eigenkapital ein, bewegst aber ein Objekt im Wert von 250.000 €. Steigt der Objektwert um beispielhaft 2 % pro Jahr, wächst nicht dein Eigenkapital um 2 % — sondern der Gesamtwert. Bezogen auf dein eingesetztes Kapital ist der Effekt deutlich größer.\n\nWichtig: Der Hebel wirkt in beide Richtungen. Fallen die Preise oder fällt die Miete aus, trägst du die Verluste ebenfalls gehebelt. Deshalb ist der Leverage-Effekt kein Grund für maximale Verschuldung, sondern ein Werkzeug, das saubere Kalkulation voraussetzt.',
        },
        {
          heading: 'Hebel drei und vier: Cashflow und Wertsteigerung',
          body: 'Ist die Miete höher als Rate plus Bewirtschaftungskosten, bleibt jeden Monat ein Überschuss — der Cashflow. Er ist dein Puffer für Reparaturen und Leerstand und später ein zweites Einkommen. Viele Objekte starten allerdings mit neutralem oder leicht negativem Cashflow; das ist kein Beinbruch, solange du es bewusst einkalkuliert hast.\n\nDie Wertsteigerung ist der vierte Hebel — und der am wenigsten planbare. Historisch sind Immobilienpreise in Deutschland über lange Zeiträume gestiegen, aber es gab auch Jahrzehnte der Stagnation und regionale Rückgänge. Seriöse Kalkulation behandelt Wertsteigerung als möglichen Bonus, nie als Grundlage der Rechnung.',
        },
        {
          heading: 'Warum Geduld der eigentliche Vorteil ist',
          body: 'Alle vier Hebel brauchen Zeit. Die Tilgung wirkt über 15 bis 35 Jahre, der Zinseszins-Effekt aus reinvestierten Überschüssen ebenso. Wer nach zwei Jahren wieder verkauft, hat meist nur die Kaufnebenkosten verloren.\n\nGenau hier liegt deine Chance als Privatperson: Du musst keine Quartalszahlen liefern. Du kannst warten, konservativ rechnen und Krisen aussitzen. Jakob Fuggers Sozialsiedlung von 1521 funktioniert bis heute — nicht wegen genialer Spekulation, sondern wegen langfristigen Denkens.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die 60-m²-Wohnung',
        body: 'Anna kauft eine vermietete Wohnung für 180.000 € plus 18.000 € Nebenkosten. Sie bringt 38.000 € Eigenkapital ein und finanziert 160.000 € (beispielhaft 3,8 % Zins, 2 % Tilgung → Rate 773 €/Monat). Die Kaltmiete beträgt 640 €, Bewirtschaftung 160 €. Anna legt also anfangs rund 293 € pro Monat drauf — bewusst kalkuliert. Nach 10 Jahren hat die Tilgung ihr Darlehen um rund 39.000 € reduziert: Ihre Mieter haben mehr abbezahlt, als sie selbst zugeschossen hat, und die Wohnung gehört ihr zu einem immer größeren Teil.',
      },
      note: 'Vermögensaufbau mit Immobilien beruht auf vier Hebeln: Fremdtilgung durch Miete, Leverage, Cashflow und (als Bonus, nie als Basis) Wertsteigerung. Alle vier brauchen Zeit — Geduld ist dein größter Wettbewerbsvorteil.',
      wikiRefs: ['cashflow', 'tilgung', 'eigenkapital'],
      quiz: [
        {
          q: 'Was ist der wichtigste Grund, warum vermietete Immobilien Vermögen aufbauen können?',
          options: [
            'Immobilienpreise steigen garantiert jedes Jahr',
            'Die Mieteinnahmen tilgen einen großen Teil des Darlehens',
            'Man spart sich die eigene Miete',
            'Banken verschenken Geld an Immobilienkäufer',
          ],
          correct: 1,
          explanation:
            'Der Kern des Modells: Die Kaltmiete bedient die Kreditrate, sodass über die Jahre vor allem fremdes Geld das Darlehen abbezahlt. Wertsteigerung ist möglich, aber nie garantiert.',
        },
        {
          q: 'Was beschreibt der Leverage-Effekt?',
          options: [
            'Je mehr Eigenkapital, desto höher die Rendite',
            'Mit wenig Eigenkapital bewegst du einen großen Objektwert — Gewinne und Verluste wirken verstärkt auf dein Eigenkapital',
            'Die Bank übernimmt das komplette Risiko',
            'Mieten steigen automatisch mit der Inflation',
          ],
          correct: 1,
          explanation:
            'Leverage bedeutet Hebelwirkung: Wertänderungen des Gesamtobjekts wirken verstärkt auf dein (kleineres) Eigenkapital — im Guten wie im Schlechten.',
        },
        {
          q: 'Wie sollte Wertsteigerung in einer seriösen Kalkulation behandelt werden?',
          options: [
            'Als sichere jährliche Einnahme von 5 %',
            'Als Hauptgrund für den Kauf',
            'Als möglicher Bonus, auf dem die Rechnung nicht aufbauen darf',
            'Sie ist steuerlich verboten',
          ],
          correct: 2,
          explanation:
            'Preise können stagnieren oder fallen. Eine gesunde Kalkulation funktioniert auch ohne Wertsteigerung — kommt sie doch, ist sie ein Bonus.',
        },
        {
          q: 'Warum ist ein anfangs leicht negativer Cashflow nicht automatisch ein schlechtes Investment?',
          options: [
            'Weil Verluste immer gut für die Steuer sind',
            'Weil die Tilgung trotzdem Vermögen aufbaut — solange der Zuschuss bewusst einkalkuliert und tragbar ist',
            'Weil die Bank dann die Rate übernimmt',
            'Ein negativer Cashflow ist immer ein Ausschlusskriterium',
          ],
          correct: 1,
          explanation:
            'Entscheidend ist die Gesamtrechnung: Ein tragbarer monatlicher Zuschuss kann durch Tilgungsaufbau mehr als ausgeglichen werden — solange er geplant und leistbar ist.',
        },
      ],
    },
    {
      id: 'fundament-2',
      title: 'Die Sprache des Marktes: Begriffe, die du brauchst',
      intro:
        'Exposés, Banktermine, Notarverträge — überall begegnet dir Fachsprache. Diese Lektion gibt dir das Kernvokabular, damit du mitreden und vor allem mitdenken kannst.',
      sections: [
        {
          heading: 'Rund um den Preis',
          body: 'Der Kaufpreis ist nur der Anfang. Dazu kommen die Kaufnebenkosten: Grunderwerbsteuer (je nach Bundesland unterschiedlich), Notar- und Grundbuchkosten (zusammen etwa 2 %) und gegebenenfalls Maklerprovision. In Summe meist 9–12 % — Geld, das sofort „weg" ist und nicht mitfinanziert wird, sondern in der Regel aus deinem Eigenkapital kommt.\n\nDer Begriff Verkehrswert (auch Marktwert) bezeichnet den Preis, der aktuell am Markt erzielbar wäre — nicht zu verwechseln mit dem Angebotspreis im Exposé, der oft Verhandlungsspielraum enthält, oder dem Beleihungswert, den die Bank intern konservativer ansetzt.',
        },
        {
          heading: 'Rund um die Miete',
          body: 'Die Kaltmiete (Nettokaltmiete) ist die reine Miete ohne Nebenkosten — mit ihr wird gerechnet, wenn von Rendite die Rede ist. Die Warmmiete enthält zusätzlich die umlagefähigen Betriebskosten (Heizung, Wasser, Hausmeister …), die der Mieter über die Nebenkostenabrechnung trägt.\n\nNicht alles ist umlagefähig: Verwaltung, Instandhaltungsrücklage und Reparaturen bleiben beim Eigentümer hängen. Diese nicht umlagefähigen Kosten sind der Grund, warum die Kaltmiete nie 1:1 als Gewinn gerechnet werden darf.',
        },
        {
          heading: 'Rund ums Eigentum',
          body: 'Das Grundbuch ist das amtliche Register, in dem Eigentum, Hypotheken und Rechte an Grundstücken stehen — was dort eingetragen ist, gilt. Bei Eigentumswohnungen kommt die Teilungserklärung dazu: Sie regelt, was dir allein gehört (Sondereigentum) und was allen (Gemeinschaftseigentum, etwa Dach und Treppenhaus).\n\nAls Wohnungseigentümer wirst du Teil der WEG, der Wohnungseigentümergemeinschaft, und zahlst monatlich Hausgeld — daraus werden gemeinschaftliche Kosten und die Instandhaltungsrücklage bedient. Wer ein Mehrfamilienhaus komplett kauft, hat mit alldem nichts zu tun, trägt dafür aber jede Reparatur allein.',
        },
        {
          heading: 'Rund um die Rendite',
          body: 'Die Brutto-Mietrendite ist die Jahreskaltmiete geteilt durch den Kaufpreis — eine schnelle Vergleichszahl, mehr nicht. Die Netto-Mietrendite zieht die nicht umlagefähigen Kosten ab und setzt die Gesamtkosten inklusive Nebenkosten in den Nenner; sie ist deutlich ehrlicher.\n\nDer Kaufpreisfaktor ist die Umkehrung: Kaufpreis geteilt durch Jahreskaltmiete. „Faktor 25" heißt: Du zahlst das 25-Fache der Jahresmiete. Je höher der Faktor, desto teurer ist das Objekt im Verhältnis zur Miete — und desto niedriger die Bruttorendite.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Ein Exposé übersetzen',
        body: '„Charmante 2-Zimmer-Wohnung, 54 m², KM 560 €, HG 210 € (davon 60 € nicht umlagefähig), KP 168.000 €." Übersetzt: Jahreskaltmiete 6.720 €, Bruttorendite 6.720 ÷ 168.000 = 4,0 %, Kaufpreisfaktor 25. Vom Hausgeld trägt der Mieter 150 € über die Nebenkosten, 60 € bleiben bei dir. Mit ~10 % Nebenkosten liegt deine Gesamtinvestition bei rund 185.000 € — die Nettorendite rutscht damit auf etwa 3,2 %.',
      },
      note: 'Kaltmiete, Kaufnebenkosten, Grundbuch, Hausgeld, Bruttorendite und Kaufpreisfaktor — wer diese sechs Begriffe sicher beherrscht, versteht 80 % jedes Exposés und jedes Bankgesprächs.',
      wikiRefs: ['kaltmiete', 'kaufnebenkosten', 'grundbuch', 'hausgeld', 'mietrendite', 'kaufpreisfaktor'],
      quiz: [
        {
          q: 'Was gehört NICHT zu den klassischen Kaufnebenkosten?',
          options: ['Grunderwerbsteuer', 'Notar- und Grundbuchkosten', 'Die Instandhaltungsrücklage der WEG', 'Maklerprovision'],
          correct: 2,
          explanation:
            'Die Instandhaltungsrücklage ist ein laufender Bestandteil des Hausgelds — keine einmalige Erwerbsnebenkosten-Position beim Kauf.',
        },
        {
          q: 'Mit welcher Miete wird die Mietrendite berechnet?',
          options: ['Warmmiete', 'Kaltmiete (Nettokaltmiete)', 'Warmmiete plus Rücklage', 'Hausgeld'],
          correct: 1,
          explanation:
            'Gerechnet wird immer mit der Nettokaltmiete — die Nebenkosten in der Warmmiete sind nur durchlaufende Posten, die der Mieter trägt.',
        },
        {
          q: 'Ein Objekt kostet 200.000 € und bringt 8.000 € Jahreskaltmiete. Welcher Kaufpreisfaktor?',
          options: ['Faktor 40', 'Faktor 25', 'Faktor 12,5', 'Faktor 4'],
          correct: 1,
          explanation: '200.000 ÷ 8.000 = 25. Der Faktor ist der Kehrwert der Bruttorendite (hier 4 %).',
        },
        {
          q: 'Was regelt die Teilungserklärung?',
          options: [
            'Die Aufteilung der Miete zwischen Mieter und Vermieter',
            'Was Sondereigentum und was Gemeinschaftseigentum ist',
            'Die Höhe der Grunderwerbsteuer',
            'Den Beleihungswert der Bank',
          ],
          correct: 1,
          explanation:
            'Die Teilungserklärung ist das Grunddokument jeder Eigentumswohnung: Sie trennt dein Sondereigentum vom Gemeinschaftseigentum der WEG.',
        },
      ],
    },
    {
      id: 'fundament-3',
      title: 'Wer am Markt mitspielt — und was sie wollen',
      intro:
        'Verkäufer, Makler, Bank, Notar, Verwalter: Jeder Akteur hat eigene Interessen. Wer sie kennt, verhandelt besser und tappt in weniger Fallen.',
      sections: [
        {
          heading: 'Verkäufer und Makler',
          body: 'Verkäufer wollen einen möglichst hohen Preis — logisch. Interessanter ist das Warum des Verkaufs: Erbschaft, Scheidung, Umzug, Kapitalbedarf oder anstehende Sanierungen erzählen dir viel über Verhandlungsspielraum und Risiken. Höfliche, ehrliche Fragen nach dem Verkaufsgrund sind völlig legitim.\n\nDer Makler arbeitet in der Regel für den Verkäufer beziehungsweise für seine Provision — er ist kein neutraler Berater. Das macht ihn nicht zum Gegner: Ein guter Makler ist an reibungslosen Abschlüssen interessiert und kann dir als verlässlichem, gut vorbereitetem Käufer sogar Folgeangebote zuspielen. Professionell auftreten lohnt sich doppelt.',
        },
        {
          heading: 'Die Bank',
          body: 'Die Bank verdient am Zins und will vor allem eines: ihr Geld sicher zurück. Sie bewertet deshalb zwei Dinge — dich (Einkommen, Schufa, Eigenkapital, Haushaltsrechnung) und das Objekt (Lage, Zustand, Beleihungswert). Beides zusammen bestimmt, ob und zu welchem Zins sie finanziert.\n\nWichtig zu wissen: Banken setzen den Beleihungswert konservativer an als den Kaufpreis und finanzieren die Kaufnebenkosten meist nicht mit. Und sie vergleichen — deshalb solltest du das auch tun: Konditionen mehrerer Banken oder ein Finanzierungsvermittler gehören zu jedem größeren Kauf.',
        },
        {
          heading: 'Notar, Verwalter, Gutachter',
          body: 'Der Notar ist gesetzlich zur Neutralität verpflichtet: Er beurkundet den Kaufvertrag, sorgt für die korrekte Abwicklung (Auflassungsvormerkung, Grundbucheintrag) und erklärt auf Nachfrage jede Klausel. Er prüft aber nicht, ob der Preis fair oder das Objekt gut ist — das bleibt dein Job.\n\nDie Hausverwaltung führt bei Eigentumswohnungen die Geschäfte der WEG. Ihre Protokolle, Wirtschaftspläne und Abrechnungen sind für dich als Käufer Gold wert. Ein unabhängiger Bausachverständiger schließlich kostet ein paar hundert Euro pro Besichtigung — bei ernsthaften Kandidaten mit unklarem Zustand oft die beste Investition des ganzen Kaufs.',
        },
        {
          heading: 'Und du? Dein Auftritt als Käufer',
          body: 'Der Markt nimmt vorbereitete Käufer ernst. Das heißt konkret: Finanzierungsrahmen vorab geklärt (Selbstauskunft, Eigenkapitalnachweis, im Idealfall eine Finanzierungsbestätigung), Unterlagen-Checkliste dabei, schnelle und verbindliche Kommunikation.\n\nIn gefragten Lagen entscheidet oft nicht das höchste Gebot, sondern die höchste Abschlusswahrscheinlichkeit. Wer der Maklerin in 24 Stunden eine Finanzierungsbestätigung schickt, schlägt regelmäßig Bieter, die „noch mit der Bank sprechen müssen".',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Käufer, ein Objekt',
        body: 'Für eine Wohnung (Angebotspreis 195.000 €) liegen zwei Interessenten im Rennen. Käufer A bietet volle 195.000 €, hat aber weder Selbstauskunft noch Bankgespräch hinter sich. Käuferin B bietet 188.000 €, legt aber eine Finanzierungsbestätigung ihrer Bank und eine vollständige Unterlagen-Mappe vor und kann in vier Wochen zum Notar. Der Verkäufer wählt B: 7.000 € weniger, aber praktisch null Risiko, dass der Deal platzt. Vorbereitung ist bares Geld.',
      },
      note: 'Jeder Akteur folgt seinen eigenen Interessen: Der Makler dient dem Abschluss, die Bank ihrer Sicherheit, der Notar der korrekten Form — für die Qualität des Deals bist allein du zuständig.',
      wikiRefs: ['makler', 'notar', 'beleihungswert', 'hausverwaltung'],
      quiz: [
        {
          q: 'Welche Aufgabe hat der Notar beim Immobilienkauf NICHT?',
          options: [
            'Den Kaufvertrag beurkunden',
            'Die korrekte Abwicklung über das Grundbuch sicherstellen',
            'Prüfen, ob der Kaufpreis angemessen ist',
            'Klauseln des Vertrags auf Nachfrage erklären',
          ],
          correct: 2,
          explanation:
            'Der Notar ist neutraler Formwahrer — die wirtschaftliche Bewertung des Deals (Preis, Zustand, Rendite) ist ausschließlich deine Aufgabe.',
        },
        {
          q: 'Warum ist der Verkaufsgrund für dich als Käufer interessant?',
          options: [
            'Er steht im Grundbuch',
            'Er verrät oft Verhandlungsspielraum und mögliche Risiken',
            'Er bestimmt die Grunderwerbsteuer',
            'Ohne ihn ist der Kaufvertrag ungültig',
          ],
          correct: 1,
          explanation:
            'Zeitdruck (Erbschaft, Scheidung, Kapitalbedarf) schafft Verhandlungsspielraum; ein Verkauf „wegen anstehender Sanierung" ist dagegen ein Warnsignal.',
        },
        {
          q: 'Was bewertet die Bank bei einer Finanzierungsanfrage?',
          options: [
            'Nur das Objekt',
            'Nur deine Bonität',
            'Deine Bonität und das Objekt',
            'Hauptsächlich dein Verhandlungsgeschick',
          ],
          correct: 2,
          explanation:
            'Beides zählt: deine persönliche Kreditwürdigkeit (Einkommen, Schufa, Eigenkapital) und die Werthaltigkeit des Objekts als Sicherheit.',
        },
        {
          q: 'Womit erhöhst du in gefragten Lagen deine Chancen am stärksten?',
          options: [
            'Mit dem höchsten Gebot, egal wie finanziert',
            'Mit vorbereiteter Finanzierung und verbindlichem, schnellem Auftreten',
            'Mit möglichst vielen Besichtigungsterminen',
            'Mit Druck auf den Makler',
          ],
          correct: 1,
          explanation:
            'Verkäufer und Makler wählen oft die höchste Abschlusswahrscheinlichkeit statt des höchsten Preises — Vorbereitung schlägt Gebot.',
        },
      ],
    },
    {
      id: 'fundament-4',
      title: 'Objektarten: Von der ETW bis zum Mehrfamilienhaus',
      intro:
        'Eigentumswohnung, Einfamilienhaus, Mehrfamilienhaus, Mikroapartment oder Gewerbe — jede Objektart hat ein eigenes Chancen-Risiko-Profil. Hier lernst du, welche zu welchem Ziel passt.',
      sections: [
        {
          heading: 'Die Eigentumswohnung (ETW) — der Klassiker für den Einstieg',
          body: 'Die vermietete Eigentumswohnung ist für die meisten der beste Startpunkt: überschaubares Investitionsvolumen, geteilte Verantwortung über die WEG (Dach und Fassade zahlt die Gemeinschaft aus der Rücklage) und ein liquider Markt mit vielen Vergleichsobjekten.\n\nDie Kehrseite: Du entscheidest nicht allein. Sanierungen, Verwalterwahl, Sonderumlagen — alles läuft über Eigentümerversammlungen. Deshalb gilt: Bei einer ETW kaufst du immer auch die WEG mit. Protokolle, Rücklagenhöhe und Wirtschaftsplan gehören zur Prüfung wie der Zustand der Wohnung selbst.',
        },
        {
          heading: 'Ein- und Zweifamilienhäuser',
          body: 'Vermietete Einfamilienhäuser sind emotional gefragte Objekte mit meist solventer Mieterschaft und langer Mietdauer. Aber: Die Rendite ist oft niedriger, weil Eigennutzer die Preise treiben, und jede Reparatur — vom Dach bis zur Heizung — gehört dir allein.\n\nZweifamilienhäuser und Häuser mit Einliegerwohnung sind ein interessanter Hybrid: selbst einziehen und vermieten, oder zwei Mietverträge auf einem Grundstück. Für Kapitalanleger zählt am Ende dieselbe Rechnung wie überall: Miete gegen Kosten, ohne Emotionen.',
        },
        {
          heading: 'Das Mehrfamilienhaus (MFH) — Skalierung in einem Kauf',
          body: 'Mit einem Mehrfamilienhaus kaufst du mehrere Mietverträge in einer Transaktion: ein Notartermin, eine Finanzierung, drei bis zwölf Einnahmequellen. Leerstand einer Einheit ruiniert nicht die ganze Rechnung, und du entscheidest allein — keine WEG, keine Eigentümerversammlung.\n\nDafür trägst du alles allein: Dach, Fassade, Heizung, Verwaltung. Das Investitionsvolumen und die Anforderungen der Bank sind höher, die Käuferschicht ist kleiner (weniger liquide beim Wiederverkauf). MFHs sind der logische zweite oder dritte Schritt, selten der erste.',
        },
        {
          heading: 'Spezialsegmente: Mikroapartments, Denkmal, Gewerbe',
          body: 'Möblierte Mikroapartments und Studentenwohnungen versprechen hohe Quadratmetermieten, haben aber mehr Mieterwechsel und Verwaltungsaufwand. Denkmalobjekte locken mit erhöhter Abschreibung, verlangen aber Erfahrung mit Auflagen und Sanierungskosten. Gewerbeimmobilien (Büros, Läden) bieten lange Verträge, hängen aber stark an einem einzelnen Mieter und an Konjunkturzyklen.\n\nFür den Einstieg gilt die einfache Regel: Kaufe, was du verstehst und was viele andere später auch kaufen würden. Standard schlägt exotisch — Spezialsegmente kommen, wenn Erfahrung und Puffer gewachsen sind.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Gleiche Summe, zwei Wege',
        body: 'Jonas hat 60.000 € Eigenkapital. Option A: eine ETW für 220.000 € in guter Lage — Bruttorendite 3,9 %, WEG mit gesunder Rücklage von 45.000 €, wenig Arbeit. Option B: ein kleines MFH mit 4 Einheiten für 480.000 € in einer Kleinstadt — Bruttorendite 5,8 %, aber Sanierungsstau am Dach (geschätzt 40.000 €) und volle Alleinverantwortung. Jonas wählt für den ersten Kauf Option A und nimmt sich das MFH als Ziel für Kauf Nummer zwei vor — mit dann vorhandener Erfahrung und Rücklagen.',
      },
      note: 'Objektarten sind Werkzeuge: Die ETW ist der überschaubare Einstieg, das MFH der Skalierungshebel, Spezialsegmente sind Kür statt Pflicht. Kaufe zuerst, was du vollständig verstehst.',
      wikiRefs: ['weg', 'sonderumlage', 'instandhaltungsruecklage'],
      quiz: [
        {
          q: 'Warum eignet sich eine Eigentumswohnung besonders für den Einstieg?',
          options: [
            'Sie hat immer die höchste Rendite',
            'Überschaubares Volumen, geteilte Instandhaltung über die WEG, liquider Markt',
            'Es gibt keine laufenden Kosten',
            'Banken finanzieren nur Wohnungen',
          ],
          correct: 1,
          explanation:
            'Kleinere Summen, gemeinschaftlich getragene Großreparaturen und viele Vergleichsobjekte machen die ETW zum überschaubarsten Startpunkt.',
        },
        {
          q: 'Was kaufst du bei einer ETW immer mit?',
          options: ['Das Nachbargrundstück', 'Die WEG samt Rücklage, Protokollen und Beschlüssen', 'Eine Mietgarantie', 'Die Hausverwaltung als Angestellte'],
          correct: 1,
          explanation:
            'Der Zustand der Eigentümergemeinschaft (Rücklage, Beschlüsse, Konflikte, Sanierungsstau) bestimmt deine künftigen Kosten mit — deshalb gehört er zur Kaufprüfung.',
        },
        {
          q: 'Welcher Vorteil spricht für ein Mehrfamilienhaus?',
          options: [
            'Es gibt nie Leerstand',
            'Mehrere Einnahmequellen in einer Transaktion und volle Entscheidungsfreiheit ohne WEG',
            'Die Bank verlangt weniger Eigenkapital',
            'Reparaturen zahlt die Gemeinschaft',
          ],
          correct: 1,
          explanation:
            'Ein MFH bündelt mehrere Mietverhältnisse in einem Kauf und du entscheidest allein — trägst dafür aber auch alle Kosten allein.',
        },
        {
          q: 'Welche Grundregel gilt für Einsteiger bei der Objektwahl?',
          options: [
            'Je exotischer, desto besser die Rendite',
            'Kaufe, was du verstehst und was ein breiter Markt später auch kaufen würde',
            'Nur Neubau ist sicher',
            'Denkmalobjekte zuerst, wegen der Abschreibung',
          ],
          correct: 1,
          explanation:
            'Standardobjekte sind kalkulierbar und wiederverkäuflich. Spezialsegmente (Denkmal, Mikro, Gewerbe) erfordern Erfahrung und Reserven.',
        },
      ],
    },
    {
      id: 'fundament-5',
      title: 'Lage verstehen: Makro, Mikro und die Zeichen vor Ort',
      intro:
        '„Lage, Lage, Lage" ist eine Halbwahrheit — richtig ist: Lage zum passenden Preis. Diese Lektion zeigt dir, wie du Standorte systematisch statt gefühlt bewertest.',
      sections: [
        {
          heading: 'Makrolage: Die Stadt und ihre Zukunft',
          body: 'Die Makrolage beschreibt Stadt und Region: Wächst die Bevölkerung oder schrumpft sie? Wie breit ist die Arbeitgeberlandschaft aufgestellt — eine Universität, mehrere Branchen, oder hängt alles an einem einzigen Werk? Wie entwickeln sich Kaufpreise und Mieten in den letzten Jahren?\n\nDiese Daten sind öffentlich: Statistikämter, Zensus, Mietspiegel und die Preisatlanten der großen Portale. Eine Stunde Recherche ersetzt hier jedes Bauchgefühl. Faustregel: Stabile oder wachsende Bevölkerung plus diversifizierte Wirtschaft schlägt kurzfristige Boom-Storys.',
        },
        {
          heading: 'Mikrolage: Die Straße entscheidet mit',
          body: 'Innerhalb derselben Stadt können 500 Meter über Wohnqualität und Wiederverkaufswert entscheiden. Relevante Faktoren: Entfernung zu ÖPNV, Einkaufsmöglichkeiten, Schulen und Ärzten; Lärmquellen (Hauptstraße, Bahnlinie, Gewerbe); der Pflegezustand der Nachbarhäuser; Grünflächen.\n\nBesichtige die Mikrolage zu verschiedenen Zeiten: Dienstagmorgen, Freitagabend, Samstagnacht. Eine Straße, die um 11 Uhr idyllisch wirkt, kann um 23 Uhr eine andere Geschichte erzählen. Sprich mit Nachbarn — kaum eine Quelle ist ehrlicher.',
        },
        {
          heading: 'A-, B-, C-Lagen — und wo die Chancen liegen',
          body: 'Der Markt sortiert Städte grob in A (Metropolen wie München, Hamburg, Berlin), B (Großstädte wie Leipzig, Nürnberg, Münster) und C/D (Mittel- und Kleinstädte). A-Lagen bieten Sicherheit und Liquidität, aber niedrige Renditen und hohe Einstiegspreise. C-Lagen bieten hohe Papier-Renditen, aber auch höhere Risiken bei Leerstand und Wiederverkauf.\n\nFür viele Einsteiger liegt der Sweet Spot in soliden B-Städten und im Speckgürtel der A-Städte: noch bezahlbar, aber mit stabiler Nachfrage. Entscheidend ist nie das Label, sondern das Verhältnis von Preis, Miete und Zukunftsfähigkeit des konkreten Standorts.',
        },
        {
          heading: 'Warnsignale und grüne Flaggen',
          body: 'Warnsignale: anhaltender Bevölkerungsrückgang, Abhängigkeit von einem einzelnen Arbeitgeber, viele Leerstände und „Zu vermieten"-Schilder, geplante Belastungen (etwa eine neue Schnellstraße direkt am Haus). Grüne Flaggen: Investitionen in Infrastruktur (Bahnanbindung, Hochschul-Ausbau, Klinik-Neubau), sinkender Leerstand, neue Cafés und Läden als Frühindikator der Aufwertung.\n\nWichtig: Ein Warnsignal macht einen Standort nicht unkaufbar — es muss nur im Preis abgebildet sein. Was du nicht wegverhandeln kannst, ist ein Standort, den in zehn Jahren niemand mehr nachfragt.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Zwei Städte im Vergleich',
        body: 'Wohnung 1: 65 m² in einer wachsenden B-Stadt mit Universität, 210.000 €, Kaltmiete 680 € → Bruttorendite 3,9 %. Wohnung 2: 65 m² in einer schrumpfenden Kleinstadt (−6 % Bevölkerung in 10 Jahren, ein dominanter Arbeitgeber), 95.000 €, Kaltmiete 480 € → Bruttorendite 6,1 %. Auf dem Papier gewinnt Wohnung 2. Rechnet man aber realistische 5 % Mietausfall, schwierigere Anschlussvermietung und unsicheren Wiederverkauf ein, ist Wohnung 1 für einen Einsteiger die robustere Wahl — Wohnung 2 wäre nur mit deutlichem Preisabschlag und Erfahrung interessant.',
      },
      note: 'Bewerte Standorte zweistufig: Makro (Bevölkerung, Wirtschaft, Trend) mit öffentlichen Daten, Mikro (Straße, Lärm, Umfeld) mit eigenen Augen zu verschiedenen Tageszeiten. Hohe Rendite auf dem Papier ist oft nur der Preis für Standortrisiko.',
      wikiRefs: ['mikrolage', 'makrolage', 'mietspiegel', 'leerstand'],
      quiz: [
        {
          q: 'Was gehört zur Makrolage-Analyse?',
          options: [
            'Der Zustand des Treppenhauses',
            'Bevölkerungsentwicklung und Arbeitgeberstruktur der Stadt',
            'Die Lautstärke der Nachbarn',
            'Die Farbe der Fassade',
          ],
          correct: 1,
          explanation:
            'Makro = Stadt/Region: Demografie, Wirtschaftsstruktur, Preis- und Miettrends. Das Treppenhaus gehört zur Objekt-, die Nachbarn zur Mikro-Ebene.',
        },
        {
          q: 'Warum solltest du eine Mikrolage mehrfach und zu verschiedenen Zeiten besichtigen?',
          options: [
            'Um den Makler zu beeindrucken',
            'Weil Lärm, Verkehr und Umfeld je nach Tageszeit völlig anders sein können',
            'Weil das Grundbuchamt es verlangt',
            'Um den Kaufpreis automatisch zu senken',
          ],
          correct: 1,
          explanation:
            'Eine Straße kann morgens ruhig und nachts problematisch sein. Mehrere Besuche zu unterschiedlichen Zeiten zeigen das echte Bild.',
        },
        {
          q: 'Hohe Bruttorendite in einer schrumpfenden Kleinstadt bedeutet meist …',
          options: [
            '… ein Schnäppchen ohne Haken',
            '… eine Risikoprämie für Leerstands- und Wiederverkaufsrisiko',
            '… einen Rechenfehler',
            '… dass die Bank besser finanziert',
          ],
          correct: 1,
          explanation:
            'Der Markt bepreist Risiko: Wo Nachfrage unsicher ist, sind Kaufpreise relativ zur Miete niedrig — die hohe Rendite ist die Gegenleistung für das Risiko.',
        },
        {
          q: 'Welches ist eine „grüne Flagge" für einen Standort?',
          options: [
            'Ein einzelner Großarbeitgeber dominiert die Stadt',
            'Viele leerstehende Ladenflächen',
            'Ausbau von Bahnanbindung oder Hochschule',
            'Sinkende Einwohnerzahlen',
          ],
          correct: 2,
          explanation:
            'Infrastruktur-Investitionen ziehen Menschen und Nachfrage nach — ein klassischer Frühindikator für stabile oder steigende Mieten.',
        },
      ],
    },
    {
      id: 'fundament-6',
      title: 'Der Kaufprozess im Überblick: Vom Exposé zum Schlüssel',
      intro:
        'Ein Immobilienkauf folgt einem festen Ablauf mit klaren Stationen. Wer ihn kennt, weiß jederzeit, wo er steht, was als Nächstes kommt — und wo die kritischen Momente liegen.',
      sections: [
        {
          heading: 'Phase 1: Suchen, prüfen, besichtigen',
          body: 'Am Anfang stehen Suchprofil (Ort, Objektart, Budget, Mindest-Rendite) und Marktbeobachtung. Bei interessanten Exposés folgt die Schnellprüfung am Schreibtisch: Kennzahlen rechnen, Lage checken, offensichtliche Ausschlusskriterien finden. Nur was diese Hürde nimmt, bekommt eine Besichtigung.\n\nZur Besichtigung gehören die Unterlagen: bei Wohnungen Teilungserklärung, die letzten Protokolle der Eigentümerversammlung, Wirtschaftsplan, Hausgeldabrechnung, Energieausweis; bei vermieteten Objekten der Mietvertrag. Fehlen Unterlagen dauerhaft trotz Nachfrage, ist das selbst ein Warnsignal.',
        },
        {
          heading: 'Phase 2: Verhandeln und Finanzierung fixieren',
          body: 'Nach positiver Prüfung folgt das Angebot — begründet mit Fakten (Vergleichspreise, Zustand, anstehende Kosten), nicht mit Gefühl. Parallel läuft die Finanzierung: Unterlagen zur Bank oder zum Vermittler, Konditionen vergleichen, Finanzierungsbestätigung einholen.\n\nWichtiger Grundsatz: Unterschreibe nie einen Kaufvertrag ohne schriftliche Finanzierungszusage. Der Notarvertrag ist bindend — platzt danach die Finanzierung, drohen Schadensersatz und der Verlust bereits gezahlter Kosten.',
        },
        {
          heading: 'Phase 3: Der Notartermin',
          body: 'Der Notar erstellt den Vertragsentwurf, den du bei Verbrauchergeschäften mindestens 14 Tage vor dem Termin erhalten sollst — Zeit, ihn vollständig zu lesen und Fragen zu klären. Beim Termin verliest der Notar den Vertrag, beide Seiten unterschreiben.\n\nNach der Beurkundung sichert die Auflassungsvormerkung im Grundbuch dein Anrecht auf das Eigentum. Es folgen Grunderwerbsteuerbescheid und die Fälligkeitsmitteilung des Notars. Erst wenn alle Voraussetzungen erfüllt sind, zahlst du den Kaufpreis — niemals vorher und niemals „unter der Hand".',
        },
        {
          heading: 'Phase 4: Übergang und Übergabe',
          body: 'Mit der Kaufpreiszahlung gehen „Nutzen und Lasten" auf dich über: Ab jetzt gehören dir die Mieteinnahmen, aber auch die Kosten. Der eigentliche Grundbucheintrag als Eigentümer folgt oft erst Wochen später — das ist normal, du bist durch die Vormerkung geschützt.\n\nZur Übergabe gehören ein Protokoll mit Zählerständen, alle Schlüssel und die Übergabe der Mietverhältnisse (Kaution, Mietvertrag, Kontaktdaten). Danach: Mieter über den Eigentümerwechsel informieren, Hausgeld/Abrechnungen umstellen, Versicherungen prüfen. Der gesamte Prozess vom Angebot bis zur Übergabe dauert typischerweise zwei bis vier Monate.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Timeline eines echten Kaufs',
        body: 'Woche 0: Lara findet das Exposé, rechnet die Kennzahlen, fordert Unterlagen an. Woche 1: Besichtigung plus zweiter Termin mit Bausachverständigem. Woche 2: Angebot 174.000 € (Angebotspreis war 185.000 €), begründet mit fälliger Heizungserneuerung; Einigung bei 178.000 €. Woche 3–5: Finanzierungsunterlagen, Vergleich von drei Banken, Zusage. Woche 6: Vertragsentwurf vom Notar. Woche 8: Beurkundung. Woche 10: Fälligkeitsmitteilung, Zahlung. Woche 11: Übergabe mit Protokoll — Lara ist Vermieterin.',
      },
      note: 'Der Kaufprozess hat vier Phasen: Prüfen → Verhandeln & Finanzieren → Beurkunden → Übergeben. Die eiserne Regel: keine Unterschrift beim Notar ohne schriftliche Finanzierungszusage.',
      legalHint: true,
      wikiRefs: ['notar', 'auflassungsvormerkung', 'energieausweis', 'kaufvertrag'],
      quiz: [
        {
          q: 'In welcher Reihenfolge läuft ein Immobilienkauf typischerweise ab?',
          options: [
            'Notartermin → Besichtigung → Finanzierung → Übergabe',
            'Prüfung/Besichtigung → Verhandlung & Finanzierung → Notartermin → Übergabe',
            'Finanzierung → Übergabe → Besichtigung → Notartermin',
            'Verhandlung → Übergabe → Prüfung → Notartermin',
          ],
          correct: 1,
          explanation:
            'Erst prüfen und besichtigen, dann verhandeln und die Finanzierung fixieren, dann beurkunden, zuletzt zahlen und übergeben.',
        },
        {
          q: 'Warum darfst du den Kaufvertrag nie vor der Finanzierungszusage unterschreiben?',
          options: [
            'Weil der Notar das verbietet',
            'Weil der beurkundete Vertrag bindend ist — platzt die Finanzierung danach, drohen Schadensersatz und Kostenverlust',
            'Weil die Bank sonst höhere Zinsen verlangt',
            'Das ist nur eine Höflichkeitsregel',
          ],
          correct: 1,
          explanation:
            'Nach der Beurkundung bist du zur Zahlung verpflichtet. Ohne gesicherte Finanzierung riskierst du Vertragsstrafe, Schadensersatz und die bereits angefallenen Nebenkosten.',
        },
        {
          q: 'Was bewirkt die Auflassungsvormerkung?',
          options: [
            'Sie senkt die Grunderwerbsteuer',
            'Sie sichert dein Anrecht auf das Eigentum im Grundbuch, bis du als Eigentümer eingetragen wirst',
            'Sie ersetzt den Kaufvertrag',
            'Sie verpflichtet den Mieter zum Auszug',
          ],
          correct: 1,
          explanation:
            'Die Vormerkung blockiert Zwischenverkäufe und andere Belastungen — dein Schutz in der Zeit zwischen Beurkundung und endgültigem Grundbucheintrag.',
        },
        {
          q: 'Ab wann stehen dir die Mieteinnahmen des Objekts zu?',
          options: [
            'Ab dem Besichtigungstermin',
            'Ab Unterschrift beim Notar',
            'Ab Kaufpreiszahlung (Übergang von Nutzen und Lasten)',
            'Erst nach dem endgültigen Grundbucheintrag',
          ],
          correct: 2,
          explanation:
            'Der Vertrag regelt den Übergang von „Nutzen und Lasten" üblicherweise zur Kaufpreiszahlung — ab dann gehören dir Einnahmen und Kosten, auch wenn der Grundbucheintrag später folgt.',
        },
      ],
    },
    {
      id: 'fundament-7',
      title: 'Mindset & die sieben teuersten Anfängerfehler',
      intro:
        'Die meisten Verluste im Immobiliengeschäft entstehen nicht durch Pech, sondern durch vermeidbare Denk- und Prozessfehler. Diese Lektion impft dich gegen die häufigsten.',
      sections: [
        {
          heading: 'Fehler 1–3: Emotionen, Schnelligkeit, Schönrechnen',
          body: 'Fehler 1: Emotional kaufen. „Die Wohnung ist so schön, da würde ich selbst einziehen!" — irrelevant. Ein Kapitalanlageobjekt ist eine Zahlenmaschine; ob sie dir gefällt, interessiert nur den Mietermarkt. Fehler 2: Unter Druck entscheiden. „Drei weitere Interessenten heute Nachmittag!" ist ein Verkaufswerkzeug. Wer nicht bereit ist, einen Deal ziehen zu lassen, verhandelt immer aus der schwächeren Position.\n\nFehler 3: Schönrechnen. Leerstand mit 0 % ansetzen, Instandhaltung „später", Mietsteigerung 3 % jährlich fest einplanen — so wird jedes Objekt rentabel. Rechne konservativ: kalkulatorischer Mietausfall, realistische Instandhaltungspauschale, Zinsanstieg nach der Bindung. Wenn das Objekt dann noch funktioniert, ist es gut.',
        },
        {
          heading: 'Fehler 4–5: Nebenkosten vergessen, Rücklagen ignorieren',
          body: 'Fehler 4: Die Kaufnebenkosten unterschätzen. 9–12 % des Kaufpreises sind sofort verloren und kommen üblicherweise aus dem Eigenkapital. Wer sie vergisst, dem fehlt am Ende die Liquidität für die Fälligkeitsmitteilung des Notars — im schlimmsten Fall platzt der Kauf nach der Beurkundung.\n\nFehler 5: Ohne Puffer kaufen. Nach dem Kauf darf dein Konto nicht auf null stehen. Heizungsausfall, Mieterwechsel mit Renovierung, Sonderumlage der WEG — all das kommt garantiert irgendwann. Faustregel: mehrere Monatsraten plus eine realistische Reparaturreserve bleiben unangetastet auf dem Konto.',
        },
        {
          heading: 'Fehler 6–7: Unterlagen überfliegen, allein bleiben',
          body: 'Fehler 6: Unterlagen nicht lesen. Die spannendsten Informationen stehen in den Protokollen der Eigentümerversammlung („Dachsanierung erneut vertagt"), im Wirtschaftsplan und im Mietvertrag. Wer nur das Exposé liest, kauft die Hochglanz-Version — die Probleme stehen im Kleingedruckten.\n\nFehler 7: Alles allein machen wollen. Ein Bausachverständiger für ein paar hundert Euro, ein Steuerberater vor der ersten Vermietung, erfahrene Investoren zum Sparring: Diese „Kosten" sind die günstigste Versicherung gegen fünfstellige Fehler. Niemand baut ein Portfolio allein — auch Fugger hatte sein Kontor voller Fachleute.',
        },
        {
          heading: 'Das Gegenprogramm: Prozess schlägt Bauchgefühl',
          body: 'Gegen all diese Fehler hilft dasselbe Mittel: ein fester Prozess. Definiere schriftlich deine Ankaufskriterien (Ort, Objektart, Mindest-Rendite, maximaler Sanierungsstau) — bevor du suchst. Prüfe jedes Objekt gegen dieselbe Checkliste. Rechne jedes Objekt mit denselben konservativen Annahmen. Und triff die Entscheidung anhand der Zahlen, nicht anhand des Gefühls beim Besichtigungstermin.\n\nDas klingt unromantisch — genau das ist der Punkt. Disziplin und Geduld sind im Immobiliengeschäft keine Tugenden unter vielen, sie sind das Geschäftsmodell.',
        },
      ],
      example: {
        title: 'Praxisbeispiel: Die gerettete Entscheidung',
        body: 'Ben ist verliebt in eine Altbauwohnung: Stuck, Flügeltüren, 4,2 % Bruttorendite. Sein Prozess zwingt ihn trotzdem zur Standardprüfung. Im Protokoll der letzten Eigentümerversammlung findet er: Fassadensanierung beschlossen, Sonderumlage 14.000 € pro Einheit, fällig in 8 Monaten; Rücklage fast leer. Neu gerechnet fällt die Rendite unter 3 % und sein Puffer wäre komplett aufgebraucht. Ben bietet 15.000 € weniger — der Verkäufer lehnt ab, ein anderer kauft zum vollen Preis. Ben hat keinen Deal gemacht. Er hat etwas Besseres: einen Fehler vermieden.',
      },
      note: 'Die sieben Anfängerfehler: emotional kaufen, unter Druck entscheiden, schönrechnen, Nebenkosten unterschätzen, ohne Puffer kaufen, Unterlagen überfliegen, allein bleiben. Das Gegenmittel ist immer dasselbe: schriftliche Kriterien und ein fester Prüfprozess.',
      wikiRefs: ['sonderumlage', 'instandhaltungsruecklage', 'mietausfallwagnis'],
      quiz: [
        {
          q: '„Drei weitere Interessenten kommen heute Nachmittag" — wie reagierst du richtig?',
          options: [
            'Sofort zusagen, bevor jemand schneller ist',
            'Beim eigenen Prüfprozess bleiben und bereit sein, den Deal ziehen zu lassen',
            'Das Gebot um 10 % erhöhen',
            'Den Makler bitten, die anderen abzusagen',
          ],
          correct: 1,
          explanation:
            'Künstlicher Zeitdruck ist ein Verkaufswerkzeug. Wer nicht bereit ist zu verzichten, verhandelt aus der schwächsten Position — dein Prozess schützt dich.',
        },
        {
          q: 'Was bedeutet konservativ rechnen?',
          options: [
            'Mit den besten anzunehmenden Werten kalkulieren',
            'Mietausfall, Instandhaltung und Zinsanstieg realistisch einplanen — das Objekt muss trotzdem funktionieren',
            'Die Nebenkosten weglassen, um vergleichen zu können',
            'Nur die Warmmiete ansetzen',
          ],
          correct: 1,
          explanation:
            'Konservativ heißt: Puffer für die vorhersehbaren Risiken einbauen. Ein Objekt, das nur im Best Case funktioniert, ist keine Investition, sondern eine Wette.',
        },
        {
          q: 'Welche Unterlage verrät bei einer ETW am ehesten kommende Kosten?',
          options: [
            'Das Exposé',
            'Die Protokolle der Eigentümerversammlungen',
            'Der Energieausweis allein',
            'Die Visitenkarte des Maklers',
          ],
          correct: 1,
          explanation:
            'In den Protokollen stehen beschlossene und vertagte Sanierungen, Konflikte und Sonderumlagen — die ehrlichste Quelle über die Zukunft der WEG.',
        },
        {
          q: 'Warum gehört ein finanzieller Puffer zwingend zum Immobilienkauf?',
          options: [
            'Um schneller ein zweites Objekt kaufen zu können',
            'Weil unerwartete Kosten (Reparatur, Mieterwechsel, Sonderumlage) sicher irgendwann kommen',
            'Die Bank schreibt eine bestimmte Summe gesetzlich vor',
            'Ein Puffer ist nur bei Mehrfamilienhäusern nötig',
          ],
          correct: 1,
          explanation:
            'Nicht ob, nur wann: Heizung, Leerstand oder Sonderumlage treffen jeden Eigentümer irgendwann. Ohne Reserve wird aus einem Ärgernis eine Existenzfrage.',
        },
      ],
    },
  ],
}
