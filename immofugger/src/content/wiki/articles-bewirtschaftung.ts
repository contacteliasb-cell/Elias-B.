import type { WikiArticle } from './types'

export const bewirtschaftungArticles: WikiArticle[] = [
  {
    slug: 'kaltmiete',
    term: 'Kaltmiete',
    category: 'bewirtschaftung',
    body: 'Die Kaltmiete (Nettokaltmiete) ist die reine Miete für die Überlassung der Wohnung — ohne Betriebs- und Nebenkosten. Mit ihr wird gerechnet, wenn von Mietrendite oder Kaufpreisfaktor die Rede ist.\n\nDavon zu unterscheiden ist die Warmmiete: Sie enthält zusätzlich die umlagefähigen Betriebskosten (Heizung, Wasser, Müll, Hausmeister …), die der Mieter über die Nebenkostenabrechnung trägt. Für die Bezahlbarkeitsprüfung eines Mieters ist die Warmmiete relevant (Faustregel: max. rund ein Drittel des Nettoeinkommens), für die Renditerechnung die Kaltmiete.\n\nWichtig für Investoren: Die Kaltmiete ist nicht 1:1 dein Gewinn — davon gehen noch die nicht umlagefähigen Kosten (Verwaltung, Instandhaltung, Rücklage) ab. Deshalb liegt die Nettorendite unter der Bruttorendite.',
  },
  {
    slug: 'betriebskosten',
    term: 'Betriebskosten',
    category: 'bewirtschaftung',
    body: 'Betriebskosten sind die laufenden Kosten, die durch das Eigentum und den Betrieb eines Gebäudes entstehen. Welche Kosten umlagefähig sind, regelt die Betriebskostenverordnung (BetrKV) abschließend: u. a. Grundsteuer, Wasser/Abwasser, Heizung/Warmwasser, Müll, Hausmeister, Gebäudereinigung, Gartenpflege, Beleuchtung, Versicherungen, Aufzug.\n\nWichtig: Umlegen darfst du diese Kosten nur, wenn die Umlage im Mietvertrag ausdrücklich vereinbart ist. Bei korrekter Umlage laufen sie für dich als Vermieter neutral durch — der Mieter trägt sie über die Nebenkostenabrechnung.\n\nNicht zu den umlagefähigen Betriebskosten zählen Verwaltungskosten, Instandhaltung/Reparaturen und Rücklagenzuführungen — diese trägt dauerhaft der Eigentümer. Der Versuch, sie in die Abrechnung zu mogeln, macht die betroffene Position angreifbar.',
    legalHint: true,
  },
  {
    slug: 'nebenkostenabrechnung',
    term: 'Nebenkostenabrechnung',
    category: 'bewirtschaftung',
    body: 'Die Nebenkosten- oder Betriebskostenabrechnung ist die jährliche Abrechnung der auf den Mieter umgelegten Betriebskosten gegen dessen geleistete Vorauszahlungen. Sie ist Pflicht und fristgebunden.\n\nFrist: Du musst spätestens 12 Monate nach Ende des Abrechnungszeitraums abrechnen. Verpasst du die Frist, kannst du in der Regel keine Nachforderung mehr durchsetzen — ein Guthaben des Mieters bleibt dagegen auszahlbar. Eine formell korrekte Abrechnung enthält Gesamtkosten je Art, Verteilerschlüssel, Mieteranteil, Abzug der Vorauszahlungen und das Ergebnis.\n\nDie Nebenkostenabrechnung ist der häufigste Streitpunkt zwischen Mietern und Vermietern. Transparente, korrekte und pünktliche Abrechnungen sorgen für ruhigere Mietverhältnisse. Bei komplexen Fällen (Leerstand, unterjähriger Mieterwechsel) hilft eine Verwaltung oder ein Abrechnungsdienst.',
    legalHint: true,
  },
  {
    slug: 'hausgeld',
    term: 'Hausgeld',
    category: 'bewirtschaftung',
    body: 'Das Hausgeld ist der monatliche Betrag, den Wohnungseigentümer an die WEG-Verwaltung zahlen. Es deckt die gemeinschaftlichen Kosten des Gebäudes und die Zuführung zur Instandhaltungsrücklage.\n\nEs setzt sich typischerweise zusammen aus umlagefähigen Betriebskosten (rund 60–75 %, die du bei Vermietung an den Mieter weiterreichst), der Verwaltergebühr und der Rücklagenzuführung. Für deine Kalkulation entscheidend ist der nicht umlagefähige Anteil — er belastet dich als Eigentümer dauerhaft. Ein Hausgeld von 280 € kann also z. B. 190 € durchlaufende Posten und 90 € echte Eigentümerkosten bedeuten.\n\nBeim Kauf einer Eigentumswohnung prüfst du die Hausgeldabrechnung, die Aufteilung und besonders die Höhe der Rücklage: Eine auffällig niedrige Rücklagenzuführung ist ein Warnsignal — Sanierungen kommen dann später als Sonderumlage.',
  },
  {
    slug: 'instandhaltungsruecklage',
    term: 'Instandhaltungsrücklage',
    category: 'bewirtschaftung',
    body: 'Die Instandhaltungsrücklage (auch Erhaltungsrücklage) ist das gemeinsame Sparvermögen einer Wohnungseigentümergemeinschaft für künftige Reparaturen und Sanierungen am Gemeinschaftseigentum — Dach, Fassade, Heizungsanlage, Treppenhaus.\n\nSie wird über die monatliche Zuführung im Hausgeld angespart. Beim Kauf einer Eigentumswohnung ist ihre Höhe ein zentrales Prüfkriterium: Eine gut gefüllte Rücklage (absolut und pro Quadratmeter betrachtet) bedeutet, dass anstehende Maßnahmen finanziert sind. Eine fast leere Rücklage bei gleichzeitig anstehendem Sanierungsbedarf kündigt eine Sonderumlage an.\n\nWichtig: Die WEG-Rücklage deckt nur das Gemeinschaftseigentum. Für Reparaturen im Sondereigentum (deine Wohnung: Bad, Böden, Innentüren, teils die Etagenheizung) brauchst du eine eigene, getrennte Reserve. Als Orientierung für die monatliche Zuführung dienen grob 1 €/m²/Monat, mehr bei Altbauten.',
  },
  {
    slug: 'sonderumlage',
    term: 'Sonderumlage',
    category: 'bewirtschaftung',
    body: 'Eine Sonderumlage ist eine außerplanmäßige Zahlung, die die Wohnungseigentümergemeinschaft beschließt, wenn die Instandhaltungsrücklage für eine größere Maßnahme nicht ausreicht — etwa eine Dach- oder Fassadensanierung. Jeder Eigentümer zahlt anteilig nach seinem Miteigentumsanteil.\n\nWichtig: Ein Mehrheitsbeschluss der Eigentümerversammlung bindet auch die Eigentümer, die dagegen gestimmt haben. Eine beschlossene Sonderumlage kann dich also treffen, ohne dass du zugestimmt hast.\n\nBeim Kauf einer Eigentumswohnung sind Sonderumlagen ein zentrales Risiko: Prüfe die Protokolle der letzten Versammlungen auf beschlossene oder absehbare Maßnahmen. Wer eine beschlossene, aber noch nicht fällige Sonderumlage trägt, ist außerdem Verhandlungs- und Vertragsgestaltungssache — eine entsprechende Klausel im Kaufvertrag kann tausende Euro sparen. Sonderumlagen sind der Grund, warum eine niedrige Rücklage ein Warnsignal ist.',
    legalHint: true,
  },
  {
    slug: 'hausverwaltung',
    term: 'Hausverwaltung',
    category: 'bewirtschaftung',
    body: 'Die Hausverwaltung übernimmt den operativen Betrieb von Immobilien. Zu unterscheiden sind zwei Ebenen: die WEG-Verwaltung (bei Eigentumswohnungen Pflicht, verwaltet das Gemeinschaftseigentum, wird von der Gemeinschaft bezahlt) und die Miet- bzw. Sondereigentumsverwaltung deiner eigenen Wohnung (optional, verwaltet dein Mietverhältnis, zahlst du).\n\nEine Mietverwaltung übernimmt Mietersuche, Vertragsmanagement, Betriebskostenabrechnung, Mängel- und Handwerkerkoordination und Mahnwesen — grob für 20–30 € pro Einheit und Monat, steuerlich als Werbungskosten abziehbar.\n\nSelbstverwaltung spart Gebühren und lehrt das Handwerk (ideal für die ersten, nahen Objekte); delegieren schafft Zeit und macht ein Portfolio skalierbar. Delegieren heißt aber nicht abschalten: Auch mit Verwaltung bleibst du der Unternehmer und prüfst Abrechnungen und Kennzahlen.',
  },
  {
    slug: 'staffelmiete',
    term: 'Staffelmiete',
    category: 'bewirtschaftung',
    body: 'Bei der Staffelmiete werden künftige Mieterhöhungen bereits im Mietvertrag betragsmäßig festgelegt — als konkrete Beträge (nicht Prozente) zu bestimmten Zeitpunkten. Zwischen zwei Staffeln muss mindestens ein Jahr liegen.\n\nVorteil für den Vermieter: Die Erhöhungen sind rechtssicher vereinbart und planbar, ohne dass du jeweils eine aufwendige Vergleichsmieten-Begründung schreiben musst. Vorteil für den Mieter: Er kennt die Entwicklung von Anfang an — Transparenz, die Streit vermeidet.\n\nWährend der Laufzeit einer Staffelmiete sind zusätzliche Erhöhungen nach ortsüblicher Vergleichsmiete ausgeschlossen (Modernisierungsumlagen bleiben in Grenzen möglich). In Gebieten mit Mietpreisbremse gelten für die vereinbarten Staffeln bestimmte Begrenzungen. Die Staffelmiete ist eine von mehreren Möglichkeiten, die Miethöhe zu dynamisieren — die Alternative ist die Indexmiete.',
    legalHint: true,
  },
  {
    slug: 'indexmiete',
    term: 'Indexmiete',
    category: 'bewirtschaftung',
    body: 'Bei der Indexmiete wird die Miethöhe an die Entwicklung des Verbraucherpreisindex des Statistischen Bundesamtes gekoppelt. Steigt die allgemeine Inflation, kann der Vermieter die Miete entsprechend anpassen — die Anpassung muss in Textform verlangt und beziffert werden.\n\nVorteil: In Inflationsphasen bleibt die reale Miete stabil, ohne Vergleichsmieten-Begründung. Während der Geltung einer Indexmiete sind zusätzliche Erhöhungen nach ortsüblicher Vergleichsmiete grundsätzlich ausgeschlossen; Modernisierungsumlagen sind nur eingeschränkt möglich.\n\nDie Indexmiete ist damit eine Alternative zur Staffelmiete: Statt fester Beträge folgt sie der Inflation — mal mehr, mal weniger. Welche Variante passt, hängt von Erwartung und Strategie ab. Beide müssen von Anfang an im Mietvertrag vereinbart werden.',
    legalHint: true,
  },
  {
    slug: 'heizkostenverordnung',
    term: 'Heizkostenverordnung',
    category: 'bewirtschaftung',
    body: 'Die Heizkostenverordnung (HeizkostenV) schreibt vor, dass die Kosten für Heizung und Warmwasser in Mehrparteienhäusern überwiegend verbrauchsabhängig abgerechnet werden müssen — in der Regel zu mindestens 50 bis 70 % nach dem tatsächlichen Verbrauch, der Rest nach Fläche.\n\nDafür ist eine Verbrauchserfassung nötig (Heizkostenverteiler, Wärme- und Warmwasserzähler), die meist ein Messdienstleister übernimmt. Der Sinn: gerechte Verteilung und ein Anreiz zum Energiesparen.\n\nFür Vermieter relevant: Bei einem Mieterwechsel ist oft eine Zwischenablesung nötig, damit sich der Verbrauch sauber zuordnen lässt — das rechtzeitig mit dem Messdienst klären. Eine Abrechnung, die gegen die Heizkostenverordnung verstößt (z. B. rein nach Fläche), kann der Mieter kürzen. Die HeizkostenV ist damit ein wichtiger Baustein jeder korrekten Nebenkostenabrechnung.',
    legalHint: true,
  },
]
