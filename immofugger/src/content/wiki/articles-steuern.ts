import type { WikiArticle } from './types'

export const steuernArticles: WikiArticle[] = [
  {
    slug: 'afa',
    term: 'AfA (Abschreibung)',
    category: 'steuern',
    body: 'Die Absetzung für Abnutzung (AfA) erlaubt es Vermietern, die Anschaffungskosten des Gebäudes über Jahrzehnte steuerlich als Werbungskosten geltend zu machen — ohne dass real Geld abfließt. Steuerlich verliert ein Gebäude über die Zeit an Wert; der Boden dagegen nutzt sich nicht ab und ist nicht abschreibbar.\n\nDeshalb wird der Kaufpreis in Gebäude- und Bodenanteil aufgeteilt. Standardsätze (beispielhaft, Stand Anfang 2026): lineare AfA von 2 % pro Jahr für Wohngebäude ab Baujahr 1925, 2,5 % für ältere; für Neubauten ab 2023 gilt 3 %. Bemessungsgrundlage ist der Gebäudeanteil inklusive anteiliger Kaufnebenkosten.\n\nDie AfA senkt das zu versteuernde Ergebnis, ohne die Liquidität zu belasten — ein Objekt kann steuerlich Verlust und zugleich positiven Cashflow zeigen. Die konkrete Gestaltung gehört zum Steuerberater.',
    legalHint: true,
  },
  {
    slug: 'werbungskosten',
    term: 'Werbungskosten',
    category: 'steuern',
    body: 'Werbungskosten sind Ausgaben, die im Zusammenhang mit deinen Mieteinnahmen stehen und diese steuerlich mindern. Sie werden in der Anlage V der Steuererklärung von den Einnahmen abgezogen.\n\nDazu zählen: Schuldzinsen (nicht die Tilgung!), die AfA, Verwaltungskosten, Instandhaltung und Reparaturen (Erhaltungsaufwand), nicht umlagefähige Betriebskosten, Fahrtkosten, Steuerberatung, Kontoführung und Versicherungen. Die Tilgung ist ausdrücklich keine Werbungskosten, weil sie Vermögensaufbau und kein Aufwand ist.\n\nIn den ersten Jahren (hohe Zinsen, volle AfA) übersteigen die Werbungskosten oft die Einnahmen, sodass ein steuerlicher Verlust entsteht, der sich mit anderen Einkünften verrechnen lässt. Belege sind bares Geld: Ohne Beleg kein Abzug — deshalb ganzjährig geordnet sammeln.',
    legalHint: true,
  },
  {
    slug: 'erhaltungsaufwand',
    term: 'Erhaltungsaufwand',
    category: 'steuern',
    body: 'Erhaltungsaufwand umfasst Ausgaben für die Instandhaltung und Instandsetzung eines bestehenden Gebäudes — Reparaturen und der Ersatz von Defektem durch Gleichwertiges (z. B. eine kaputte Therme durch eine neue). Er ist in der Regel im Jahr der Zahlung sofort als Werbungskosten abziehbar.\n\nDavon abzugrenzen sind Herstellungskosten (Standardhebung, Erweiterung, Neubau) und Modernisierungen, die nur über die AfA über viele Jahre abgeschrieben werden. Ersatz gegen Gleichwertiges = Erhaltung; Standardhebung/Erweiterung = Herstellung.\n\nWichtig ist die 15-%-Grenze: Übersteigen Instandsetzungs- und Modernisierungskosten in den ersten drei Jahren nach dem Kauf 15 % der Gebäude-Anschaffungskosten, werden sie zu „anschaffungsnahen Herstellungskosten" und wandern zwangsweise in die langsame AfA. Sanierungs-Timing ist deshalb auch Steuerplanung.',
    legalHint: true,
  },
  {
    slug: 'spekulationsfrist',
    term: 'Spekulationsfrist',
    category: 'steuern',
    body: 'Die Spekulationsfrist (Zehn-Jahres-Frist) ist einer der größten strukturellen Vorteile deutscher Immobilien-Privatinvestoren. Verkaufst du eine vermietete Immobilie im Privatvermögen nach mehr als zehn Jahren Haltedauer mit Gewinn, ist dieser Veräußerungsgewinn grundsätzlich steuerfrei.\n\nVerkaufst du dagegen innerhalb der zehn Jahre mit Gewinn, ist dieser als privates Veräußerungsgeschäft mit deinem persönlichen Steuersatz steuerpflichtig — das kann schnell hohe Beträge bedeuten. Eine Ausnahme gilt für selbst genutzte Immobilien, die auch früher steuerfrei verkauft werden können.\n\nVorsicht: Wer wiederholt kauft und verkauft, riskiert die Einstufung als gewerblicher Grundstückshändler (Stichwort Drei-Objekt-Grenze) mit deutlich schlechteren steuerlichen Folgen. Die Frist belohnt das langfristige Halten und ist ein zentraler Planungsfaktor.',
    legalHint: true,
  },
  {
    slug: 'grunderwerbsteuer',
    term: 'Grunderwerbsteuer',
    category: 'steuern',
    body: 'Die Grunderwerbsteuer fällt beim Kauf einer Immobilie einmalig an und ist meist der größte Posten der Kaufnebenkosten. Der Steuersatz wird von den Bundesländern festgelegt und liegt aktuell (Stand beispielhaft) zwischen 3,5 % (Bayern) und 6,5 % (u. a. NRW, Brandenburg, Schleswig-Holstein) — das Bundesland entscheidet also über tausende Euro.\n\nBemessungsgrundlage ist der Kaufpreis. Nach Zahlung stellt das Finanzamt die Unbedenklichkeitsbescheinigung aus, die für die Eigentumsumschreibung im Grundbuch nötig ist.\n\nLegale Stellschraube: Realistisch bewertetes bewegliches Zubehör (z. B. eine Einbauküche) kann im Kaufvertrag separat ausgewiesen werden — darauf fällt keine Grunderwerbsteuer an. Aktuellen Satz deines Bundeslandes vor jeder Kalkulation prüfen; der Kaufnebenkosten-Rechner in den Werkzeugen hilft dabei.',
    legalHint: true,
  },
  {
    slug: 'grundsteuer',
    term: 'Grundsteuer',
    category: 'steuern',
    body: 'Die Grundsteuer ist eine laufende, jährlich an die Gemeinde zu zahlende Steuer auf Grundbesitz. Grundlage sind seit der Grundsteuerreform die neuen Grundsteuerwerte in Verbindung mit dem kommunalen Hebesatz, den jede Gemeinde selbst festlegt.\n\nGute Nachricht für Vermieter: Die Grundsteuer ist als Betriebskosten auf die Mieter umlagefähig, sofern dies im Mietvertrag vereinbart ist — wirtschaftlich trägt sie also der Mieter über die Nebenkostenabrechnung.\n\nBeim Ankauf lohnt der Blick in den aktuellen Grundsteuerbescheid des Verkäufers. Denke daran, dass Hebesätze kommunal steigen können. Insgesamt ist die Grundsteuer ein durchlaufender Posten mit geringem Verwaltungsaufwand — kein Renditekiller, aber Teil einer vollständigen Kalkulation. Nicht zu verwechseln mit der einmaligen Grunderwerbsteuer beim Kauf.',
    legalHint: true,
  },
  {
    slug: 'kaufpreisaufteilung',
    term: 'Kaufpreisaufteilung',
    category: 'steuern',
    body: 'Die Kaufpreisaufteilung teilt den Gesamtkaufpreis in einen Bodenanteil (nicht abschreibbar) und einen Gebäudeanteil (abschreibbar über die AfA) auf. Sie hat direkten Einfluss auf deine jährliche Steuerersparnis — je höher der sachgerecht ermittelte Gebäudeanteil, desto höher die AfA.\n\nDie Aufteilung kann im Kaufvertrag sinnvoll dokumentiert werden; das Finanzamt prüft sie und nutzt zur Kontrolle eine eigene Arbeitshilfe. Eine im Vertrag festgehaltene, realistische und begründete Aufteilung erleichtert die Anerkennung, muss aber der Realität entsprechen — überzogene Gebäudeanteile werden korrigiert.\n\nGerade bei hohem Bodenwertanteil (teure Lagen) ist die Aufteilung steuerlich bedeutsam. Sie gehört zu den Themen, die du vor dem Kauf mit deinem Steuerberater besprichst — nachträglich lässt sich hier wenig gestalten.',
    legalHint: true,
  },
  {
    slug: 'drei-objekt-grenze',
    term: 'Drei-Objekt-Grenze',
    category: 'steuern',
    body: 'Die Drei-Objekt-Grenze ist eine von der Rechtsprechung entwickelte Faustregel zur Abgrenzung zwischen privater Vermögensverwaltung und gewerblichem Grundstückshandel. Vereinfacht: Wer innerhalb von etwa fünf Jahren mehr als drei Objekte kauft und wieder verkauft, gilt in der Regel als gewerblicher Grundstückshändler.\n\nDie Folgen sind erheblich: Es fällt Gewerbesteuer an, die Gewinne sind auch nach zehn Jahren nicht mehr steuerfrei (die Spekulationsfrist greift nicht), und es entstehen Buchführungspflichten. Aus dem Steuervorteil des langfristigen Haltens wird das Gegenteil.\n\nDie Grenze ist keine starre Regel, sondern hat viele Ausnahmen und Einzelfallfragen (z. B. was als „Objekt" zählt, welche Rolle die Verkaufsabsicht spielt). Wer mehrere Verkäufe plant, sollte das unbedingt vorher mit dem Steuerberater klären, um nicht ungewollt in die Gewerblichkeit zu rutschen.',
    legalHint: true,
  },
  {
    slug: 'immobilien-gmbh',
    term: 'Immobilien-GmbH',
    category: 'steuern',
    body: 'Die vermögensverwaltende Immobilien-GmbH ist eine Gesellschaftsform, über die Immobilien statt im Privatvermögen gehalten werden können. Sie kommt bei größeren, wachstumsorientierten Portfolios in Betracht.\n\nPotenzieller Vorteil: Gewinne aus Vermietung können unter bestimmten Voraussetzungen begünstigt besteuert werden (Stichwort erweiterte Gewerbesteuerkürzung), was bei hoher persönlicher Progression und Thesaurierung (Gewinne bleiben zum Weiterinvestieren in der Gesellschaft) attraktiv sein kann.\n\nKehrseiten: Gründungs- und laufende Kosten (Notar, Buchführung, Jahresabschluss), keine private Zehn-Jahres-Steuerfreiheit beim Verkauf, oft schlechtere Finanzierungskonditionen und mehr Formalismus. Die GmbH lohnt typischerweise erst ab einer gewissen Größe und wenn Gewinne reinvestiert statt entnommen werden. Die Rechtsform folgt der Strategie — die Entscheidung immer mit einem spezialisierten Steuerberater treffen.',
    legalHint: true,
  },
  {
    slug: 'gewerbesteuer',
    term: 'Gewerbesteuer',
    category: 'steuern',
    body: 'Die Gewerbesteuer ist eine von den Gemeinden erhobene Steuer auf den Gewerbeertrag von Unternehmen. Für private Immobilieninvestoren ist sie vor allem als Risiko relevant: Reine Vermögensverwaltung (Vermietung im Privatvermögen) unterliegt ihr nicht.\n\nGewerbesteuerpflichtig wird es, wenn die Tätigkeit als gewerblicher Grundstückshandel eingestuft wird — etwa bei Überschreiten der Drei-Objekt-Grenze durch häufige An- und Verkäufe.\n\nBei der vermögensverwaltenden Immobilien-GmbH gibt es die sogenannte erweiterte Gewerbesteuerkürzung: Unter bestimmten Voraussetzungen (ausschließliche Verwaltung eigenen Grundbesitzes) kann die Gewerbesteuer auf die Vermietungserträge weitgehend entfallen — einer der Gründe, warum die GmbH-Struktur für große, haltende Portfolios interessant sein kann. Die Regeln sind komplex und gehören in die Hände eines spezialisierten Steuerberaters.',
    legalHint: true,
  },
]
