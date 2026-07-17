/**
 * Zentrale deutsche Texte für die gesamte Website.
 * Jede Sektion hat ihren eigenen Block — Texte hier ändern, nirgendwo sonst.
 */

export const nav = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'Der Fugger-Pfad', href: '#fugger-pfad' },
    { label: 'Tools', href: '#tools' },
    { label: 'Community', href: '#community' },
    { label: 'FAQ', href: '#faq' },
  ],
  login: 'Login',
  cta: 'Kostenlos starten',
}

export const hero = {
  badge: '100 % Kostenlos',
  headline: {
    pre: 'Meistere Immobilien —',
    highlight: 'mit System und Weitblick.',
  },
  subline:
    'Kuratiertes Wissen statt YouTube-Chaos, ein klarer Karrierepfad und eine Community auf Augenhöhe — für alle, die Immobilien nicht nur kaufen, sondern verstehen wollen.',
  ctaPrimary: 'Kostenlos Mitglied werden',
  ctaSecondary: 'Den Fugger-Pfad ansehen',
  mockup: {
    url: 'app.immofugger.de/kontor',
    progressTitle: 'Dein Lernfortschritt',
    progressModule: 'Modul 3 · Objektanalyse',
    progressPercent: 68,
    chartTitle: 'Beispielrechnung · Mietrendite',
    chartValue: '4,2 %',
    chartCaption: 'Brutto-Mietrendite, Musterobjekt',
    feedTitle: 'Community',
    feedMessages: [
      { name: 'Lena', text: 'Exposé-Check von gestern war Gold wert 🙌' },
      { name: 'Jonas', text: 'Hat jemand den Zins-Report schon gelesen?' },
      { name: 'Miriam', text: 'Erste Besichtigung nächste Woche — dank Checkliste!' },
    ],
  },
}

/** Lose typisierte Mockup-Daten — jede Bento-Karte hat ihr eigenes Mini-Mockup. */
export type FeatureMockup = {
  modules?: { name: string; progress: number }[]
  tags?: string[]
  title?: string
  location?: string
  rows?: { label: string; value: string }[]
  verdict?: string
  items?: { tag: string; title: string; time: string }[]
  channel?: string
  messages?: { name: string; text: string }[]
  month?: string
  events?: { day: string; date: string; title: string; time: string }[]
}

export type FeatureCard = {
  id: string
  title: string
  description: string
  mockup: FeatureMockup
  /** true → als „Coming Soon" gekennzeichnet (Feature noch nicht real verfügbar) */
  soon?: boolean
}

export const features: {
  kicker: string
  headline: string
  subline: string
  cards: FeatureCard[]
} = {
  kicker: 'Was dich erwartet',
  headline: 'Vom Fundament bis zum Portfolio',
  subline:
    'Alles, was du brauchst, um Immobilien von Grund auf zu verstehen — strukturiert, aktuell und gemeinsam mit Menschen, die denselben Weg gehen.',
  cards: [
    {
      id: 'blueprint',
      title: 'Der Fugger-Blueprint',
      description:
        'Dein strukturierter Lernpfad in klaren Modulen: Grundlagen, Finanzierung, Objektanalyse, Steuern & Recht (Grundlagen), Vermietung und Skalierung zum Unternehmer. Schritt für Schritt, ohne Umwege.',
      mockup: {
        modules: [
          { name: 'Grundlagen & Begriffe', progress: 100 },
          { name: 'Finanzierung verstehen', progress: 80 },
          { name: 'Objektanalyse & Kalkulation', progress: 45 },
          { name: 'Steuern & Recht — Grundlagen', progress: 10 },
          { name: 'Vermietung & Verwaltung', progress: 0 },
          { name: 'Skalierung zum Unternehmer', progress: 0 },
        ],
      },
    },
    {
      id: 'wiki',
      title: 'Immobilien-Wiki',
      description:
        'Vernetzte Wissensartikel zu allen Begriffen, die dir auf dem Weg begegnen — vom Grundbuch über AfA und Kaufnebenkosten bis zur Exposé-Analyse. Verständlich erklärt, miteinander verknüpft.',
      mockup: {
        tags: ['Grundbuch', 'AfA', 'Kaufnebenkosten', 'Mietrendite', 'Exposé', 'Annuität', 'Beleihung', 'Kaltmiete'],
      },
    },
    {
      id: 'deals',
      title: 'Objekt-Analysen',
      soon: true,
      description:
        'Regelmäßige, tiefgehende Deal-Reviews echter, anonymisierter Beispielobjekte: Zahlen, Risiken, Standortbewertung und Verhandlungsansätze — damit du lernst, wie Profis rechnen.',
      mockup: {
        title: 'Deal-Review #24 · ETW, 68 m²',
        location: 'B-Lage, mittelgroße Stadt',
        rows: [
          { label: 'Kaufpreis', value: '189.000 €' },
          { label: 'Kaltmiete p. a.', value: '9.120 €' },
          { label: 'Brutto-Rendite', value: '4,8 %' },
          { label: 'Risiko-Score', value: 'B' },
        ],
        verdict: 'Verhandlungsspielraum: ~8 %',
      },
    },
    {
      id: 'market',
      title: 'Markt-Updates',
      soon: true,
      description:
        'Wöchentliche Zusammenfassungen zu Zinsen, Kaufpreisen, Mietmärkten und Gesetzesänderungen. Wir lesen die Berichte — du bekommst die Essenz und sparst Stunden an Recherche.',
      mockup: {
        items: [
          { tag: 'Weekly', title: 'Bauzinsen: Seitwärtsbewegung hält an', time: 'Diese Woche' },
          { tag: 'Monatsreport', title: 'Mietmärkte: Nachfrage in B-Städten steigt', time: 'Neu' },
          { tag: 'Gesetz', title: 'Was die neue Förderrunde bedeutet', time: 'Update' },
        ],
      },
    },
    {
      id: 'chats',
      title: 'Community-Chats nach Level',
      description:
        'Eigene Räume für Einsteiger, Fortgeschrittene und Investoren mit Bestand. Stell jede Frage — hier antworten Menschen, die genau da waren, wo du gerade stehst.',
      mockup: {
        channel: '#einsteiger',
        messages: [
          { name: 'Sofia', text: 'Was zählt alles zu Kaufnebenkosten?' },
          { name: 'David', text: 'Grunderwerbsteuer, Notar, Grundbuch — je nach Bundesland ~9–12 %.' },
          { name: 'Sofia', text: 'Danke! Genau die Übersicht hatte ich gesucht 🙏' },
        ],
      },
    },
    {
      id: 'calls',
      title: 'Live-Calls & Kalender',
      description:
        'Q&A-Calls, gemeinsame Objektbesprechungen und ein Kalender mit allen wichtigen Terminen — von Zinsentscheiden bis zu Fristen, die du nicht verpassen solltest.',
      mockup: {
        month: 'Diesen Monat',
        events: [
          { day: 'DI', date: '09', title: 'Q&A: Finanzierung', time: '19:00' },
          { day: 'DO', date: '18', title: 'Objektbesprechung live', time: '20:00' },
          { day: 'MI', date: '24', title: 'Zinsentscheid — Einordnung', time: '18:30' },
        ],
      },
    },
  ],
}

export const path = {
  kicker: 'Dein Karriereplan',
  headline: 'Der Fugger-Pfad',
  subline:
    'Fünf Stufen vom ersten Begriff bis zum eigenen Portfolio. Jede Stufe hat klare Lernziele und Meilensteine — du weißt immer, wo du stehst und was als Nächstes kommt.',
  steps: [
    {
      name: 'Lehrling',
      tagline: 'Das Fundament legen',
      description:
        'Du lernst die Sprache der Immobilienwelt: die wichtigsten Begriffe, wie der Markt funktioniert und welches Mindset langfristig trägt. Du beginnst, Angebote und Standorte bewusst zu beobachten.',
      goals: [
        'Grundbegriffe sicher beherrschen (Grundbuch, Kaufnebenkosten, Rendite)',
        'Marktmechanik verstehen: Angebot, Nachfrage, Lage',
        'Langfristiges Investoren-Mindset statt Schnellreich-Denken',
      ],
      milestone: 'Meilenstein: Du kannst ein Exposé lesen und die wichtigsten Kennzahlen benennen.',
    },
    {
      name: 'Geselle',
      tagline: 'Zahlen & Finanzierung',
      description:
        'Du verstehst, wie Banken denken: Annuität, Zins, Tilgung, Beleihung. Du baust deine Bonität gezielt auf und rechnest deine ersten vollständigen Objektanalysen — noch ohne Kaufdruck.',
      goals: [
        'Finanzierungslogik verstehen: Annuität, Zinsbindung, Tilgungssatz',
        'Eigene Bonität und Eigenkapitalaufbau strukturieren',
        'Erste Objektanalysen selbstständig durchrechnen',
      ],
      milestone: 'Meilenstein: Du rechnest ein reales Angebot komplett durch — inklusive Cashflow.',
    },
    {
      name: 'Kaufmann',
      tagline: 'Das erste Objekt',
      description:
        'Jetzt wird es konkret: systematische Objektsuche, Besichtigung, Prüfung der Unterlagen, Verhandlung, Notartermin und die erste Vermietung. Du gehst den kompletten Kaufprozess einmal durch.',
      goals: [
        'Suchprofil und Besichtigungs-Checkliste anwenden',
        'Unterlagen prüfen: Teilungserklärung, Protokolle, Wirtschaftsplan',
        'Verhandeln, kaufen, vermieten — mit klarem Prozess',
      ],
      milestone: 'Meilenstein: Dein erstes Objekt ist gekauft und vermietet.',
    },
    {
      name: 'Handelsherr',
      tagline: 'Portfolio & Netzwerk',
      description:
        'Aus einem Objekt wird ein Bestand. Du optimierst Mieten und Kosten, nutzt Refinanzierung für weiteres Wachstum und baust dir ein Team: Steuerberatung, Hausverwaltung, Handwerker, Bank-Kontakte.',
      goals: [
        'Bestand optimieren: Mieten, Kosten, Instandhaltung',
        'Refinanzierung und Eigenkapital-Recycling verstehen',
        'Team & Netzwerk aufbauen, Prozesse delegieren',
      ],
      milestone: 'Meilenstein: Dein Portfolio trägt sich selbst und wächst planbar.',
    },
    {
      name: 'Fugger',
      tagline: 'Bauen, was bleibt',
      description:
        'Die letzte Stufe: Du denkst wie ein Immobilien-Unternehmer — Skalierung, Projektentwicklung, größere Einheiten. Und wie einst in der Fuggerei gilt: Der wahre Maßstab ist, was du schaffst, das bleibt.',
      goals: [
        'Skalierung: größere Objekte, Projektentwicklung, Partnerschaften',
        'Strukturen: vom Privatkauf zur unternehmerischen Organisation',
        'Vermächtnis: langfristige Werte schaffen — für dich und andere',
      ],
      milestone: 'Meilenstein: Du führst Immobilien als Unternehmen — mit Weitblick über Generationen.',
    },
  ],
}

export const inspiration = {
  kicker: 'Unsere Inspiration',
  headline: 'Ein Projekt, das seit über 500 Jahren funktioniert',
  year: '1521',
  paragraphs: [
    'Jakob Fugger (1459–1525), genannt „der Reiche", war einer der erfolgreichsten Unternehmer der Geschichte. 1521 stiftete er in Augsburg die Fuggerei — die älteste bestehende Sozialsiedlung der Welt. Bis heute wohnen dort Menschen für eine symbolische Jahresmiete. Sein Immobilienprojekt läuft seit über einem halben Jahrtausend.',
    'Daraus leiten wir alles ab, was ImmoFugger ausmacht: langfristiges Denken statt schneller Versprechen, saubere Zahlen statt Bauchgefühl und die Überzeugung, dass Immobilien Wohlstand aufbauen und gleichzeitig etwas Bleibendes für Menschen schaffen können. Gegründet wurde die Plattform von Elias B. — mit genau diesem Anspruch.',
  ],
  quote: 'Wir verkaufen keine Träume von schnellem Reichtum. Unsere Inspiration ist ein Mann, dessen Immobilienprojekt seit über 500 Jahren funktioniert.',
}

export const tools = {
  kicker: 'Direkt ausprobieren',
  headline: 'Rechne wie ein Kaufmann',
  subline:
    'Zwei Werkzeuge aus der Plattform — kostenlos, direkt hier, ohne Anmeldung. So fühlt sich strukturiertes Rechnen an.',
  disclaimer: 'Vereinfachte Modellrechnung — keine Anlage-, Steuer- oder Rechtsberatung.',
  yield: {
    title: 'Mietrendite-Rechner',
    description: 'Wie viel Rendite bringt ein Objekt auf den Kaufpreis? Brutto und netto, live berechnet.',
    inputs: {
      price: 'Kaufpreis',
      extras: 'Kaufnebenkosten',
      rent: 'Kaltmiete / Monat',
      costs: 'Nicht umlegbare Kosten / Monat',
    },
    results: {
      gross: 'Brutto-Mietrendite',
      net: 'Netto-Mietrendite',
      grossHint: 'Jahreskaltmiete ÷ Kaufpreis',
      netHint: '(Jahreskaltmiete − Kosten) ÷ Gesamtkosten inkl. Nebenkosten',
    },
  },
  cashflow: {
    title: 'Cashflow-Schnellcheck',
    description: 'Trägt sich das Objekt? Monatlicher Cashflow vor Steuern — auf einen Blick.',
    inputs: {
      price: 'Kaufpreis',
      equity: 'Eigenkapital',
      interest: 'Sollzins p. a.',
      repayment: 'Anfängliche Tilgung p. a.',
      rent: 'Kaltmiete / Monat',
      costs: 'Bewirtschaftungskosten / Monat',
    },
    results: {
      loan: 'Darlehenssumme',
      rate: 'Monatliche Rate (Zins + Tilgung)',
      cashflow: 'Cashflow / Monat vor Steuern',
      positive: 'Positiver Cashflow — das Objekt trägt sich.',
      neutral: 'Knapp an der Null — genau hinschauen.',
      negative: 'Negativer Cashflow — du legst monatlich drauf.',
    },
  },
  extras: {
    title: 'Kaufnebenkosten-Rechner',
    description: 'Was kostet der Kauf wirklich? Grunderwerbsteuer nach Bundesland, Notar, Grundbuch und optional Makler.',
    inputs: {
      price: 'Kaufpreis',
      state: 'Bundesland (Grunderwerbsteuer)',
      notary: 'Notar & Grundbuch',
      broker: 'Maklerprovision',
    },
    results: {
      tax: 'Grunderwerbsteuer',
      notary: 'Notar & Grundbuch',
      broker: 'Maklerprovision',
      sum: 'Kaufnebenkosten gesamt',
      total: 'Gesamtinvestition',
      percentHint: 'Anteil am Kaufpreis',
    },
    stateNote: 'Grunderwerbsteuersätze Stand',
    stateDisclaimer: 'ohne Gewähr — bitte den aktuellen Satz deines Bundeslandes prüfen.',
  },
  annuity: {
    title: 'Annuitäten-Rechner',
    description: 'Monatliche Rate, Restschuld nach der Zinsbindung und der Tilgungsverlauf — auf einen Blick.',
    inputs: {
      loan: 'Darlehenssumme',
      interest: 'Sollzins p. a.',
      repayment: 'Anfängliche Tilgung p. a.',
      years: 'Zinsbindung',
    },
    results: {
      rate: 'Monatliche Rate',
      paidInterest: 'Gezahlte Zinsen (Zinsbindung)',
      paidRepayment: 'Getilgt (Zinsbindung)',
      remaining: 'Restschuld nach Zinsbindung',
      chartTitle: 'Tilgungsverlauf',
      chartRemaining: 'Restschuld',
      chartLabelStart: 'Start',
      chartLabelEnd: 'Ende Bindung',
    },
  },
}

export const community = {
  kicker: 'Gemeinsam statt allein',
  headline: 'Werde Teil der ImmoFugger-Community',
  subline:
    'Immobilien lernt man nicht allein im stillen Kämmerlein. In der Community triffst du Menschen auf jedem Level — vom ersten Exposé bis zum eigenen Bestand.',
  chatMockup: {
    channel: '#objektanalyse',
    online: '128 online',
    messages: [
      { name: 'Amelie', level: 'Geselle', text: 'Habe ein Angebot: 145k, 52 m², 480 € kalt. Lohnt der Blick?' },
      { name: 'Karim', level: 'Handelsherr', text: 'Brutto ~4 % — check die Rücklagen und das letzte Protokoll.' },
      { name: 'Tobias', level: 'Kaufmann', text: 'Und frag nach dem Wirtschaftsplan, das war bei mir der Knackpunkt.' },
      { name: 'Amelie', level: 'Geselle', text: 'Top, danke euch! Ich rechne es heute Abend durch. 📊' },
    ],
  },
  cards: [
    {
      title: 'Räume nach Level',
      description:
        'Einsteiger, Fortgeschrittene, Bestandshalter: Jeder Raum hat sein Niveau. Keine Frage ist zu einfach, keine Diskussion zu tief.',
    },
    {
      title: 'Monatliche Challenges',
      description:
        'Zum Beispiel: „Analysiere das Exposé der Woche." Du bekommst Feedback auf deine Analyse — und siehst, wie andere denken.',
    },
    {
      title: 'Mitglieder-Spotlights',
      description:
        'Wer sich reinhängt, wird sichtbar: Spotlight in der Community und ein 1:1-Feedback-Call für besonders starke Analysen.',
    },
  ],
}

export const pricing = {
  kicker: 'Mitgliedschaft',
  headline: 'Ein Preis, der keiner ist',
  subline: 'ImmoFugger ist und bleibt für Mitglieder kostenlos. Kein Abo, keine versteckten Kosten, kein Upsell-Trichter.',
  badge: '100 % Kostenlos',
  membersLabel: 'Mitglieder',
  price: '0 €',
  period: '/ Monat',
  features: [
    { label: 'Der Fugger-Blueprint: kompletter Lernpfad', soon: false },
    { label: 'Alle 5 Stufen des Fugger-Pfads mit Meilensteinen', soon: false },
    { label: 'Immobilien-Wiki mit vernetzten Artikeln', soon: false },
    { label: 'Kontor: Frage- & Austausch-Board nach Level', soon: false },
    { label: 'Termin-Kalender (Live-Calls, Zinsentscheide, Fristen)', soon: false },
    { label: '4 Rechner: Mietrendite, Cashflow, Nebenkosten, Annuität', soon: false },
    { label: 'Objekt-Analysen & Deal-Reviews', soon: true },
    { label: 'Wöchentliche Markt-Updates', soon: true },
    { label: 'Monatsreport: Zinsen, Preise, Gesetze', soon: true },
    { label: 'Live Q&A-Calls & Objektbesprechungen', soon: true },
    { label: 'Monatliche Challenges mit Feedback', soon: true },
    { label: 'Mitglieder-Spotlights & 1:1-Feedback-Calls', soon: true },
    { label: 'Blueprint+ mit vertiefenden Praxismodulen', soon: true },
    { label: 'Deal-Radar: kuratierte Objekt-Hinweise', soon: true },
    { label: 'Mitglieder-App für unterwegs', soon: true },
  ],
  cta: 'Account erstellen — für 0 €',
  note: 'Warum kostenlos? Weil eine starke Community der beste Startpunkt für alles Weitere ist. Ehrlich: Später kann es optionale Zusatzangebote geben — die Kern-Plattform bleibt frei.',
}

export const partners = {
  title: 'Tools, mit denen wir arbeiten',
}

export const faq = {
  kicker: 'Fragen & Antworten',
  headline: 'Alles, was du wissen willst',
  items: [
    {
      q: 'Ist ImmoFugger wirklich kostenlos?',
      a: 'Ja. Die Mitgliedschaft kostet 0 € pro Monat — Lernpfad, Wiki, Community, Live-Calls und Markt-Updates inklusive. Es gibt keine versteckten Kosten und keinen Zwang, irgendetwas zu kaufen. Sollte es später optionale Zusatzangebote geben, bleibt die Kern-Plattform frei.',
    },
    {
      q: 'Für wen ist die Plattform gedacht?',
      a: 'Für alle im deutschsprachigen Raum, die Immobilien wirklich verstehen wollen — vom absoluten Anfänger ohne Vorwissen bis zu Menschen, die bereits ein oder mehrere Objekte besitzen und den nächsten Schritt planen. Der Fugger-Pfad holt dich genau da ab, wo du stehst.',
    },
    {
      q: 'Brauche ich Eigenkapital, um zu starten?',
      a: 'Nein. Du brauchst kein Eigenkapital, um zu lernen. Im Gegenteil: Die Stufen Lehrling und Geselle sind genau dafür da, Wissen und Bonität aufzubauen, bevor du auch nur ein Angebot ernsthaft prüfst. Wer vorbereitet in den Markt geht, macht die teuren Fehler nicht.',
    },
    {
      q: 'Ist das Anlage-, Steuer- oder Rechtsberatung?',
      a: 'Nein. ImmoFugger ist ein Bildungs- und Community-Angebot. Wir vermitteln Wissen, Methoden und Werkzeuge — Entscheidungen triffst du selbst. Für individuelle Anlage-, Steuer- oder Rechtsfragen wende dich bitte an entsprechend zugelassene Profis.',
    },
    {
      q: 'Warum eigentlich „Fugger"?',
      a: 'Jakob Fugger stiftete 1521 die Fuggerei in Augsburg — die älteste bestehende Sozialsiedlung der Welt, in der Menschen bis heute für eine symbolische Jahresmiete wohnen. Für uns ist das der Beweis, dass Immobilien Wohlstand schaffen und gleichzeitig etwas Bleibendes für Menschen leisten können. Dieses langfristige Denken ist unser Leitmotiv.',
    },
    {
      q: 'Wie läuft die Community ab?',
      a: 'Es gibt Chat-Räume nach Erfahrungslevel, regelmäßige Live-Calls, gemeinsame Objektbesprechungen und monatliche Challenges mit Feedback. Der Ton: hilfsbereit, konkret, auf Augenhöhe. Selbstdarstellung und Verkaufsversuche haben bei uns keinen Platz — dafür gibt es Community-Richtlinien.',
    },
    {
      q: 'Verspricht ihr mir, dass ich mit Immobilien reich werde?',
      a: 'Nein — und sei skeptisch bei jedem, der das tut. Immobilien sind ein langfristiges Handwerk mit realen Risiken. Was wir versprechen: strukturiertes Wissen, ehrliche Zahlen und eine Community, die dich besser macht. Was du daraus machst, liegt bei dir.',
    },
    {
      q: 'Wie starte ich?',
      a: 'Erstelle in zwei Minuten deinen kostenlosen Account. Aktuell bauen wir die Plattform mit den Gründungsmitgliedern auf — nach der Registrierung stehst du auf der Liste und bekommst Bescheid, sobald dein Zugang freigeschaltet ist.',
    },
  ],
}

export const newsletter = {
  kicker: 'Bleib auf dem Laufenden',
  headline: 'Markt-Updates direkt ins Postfach',
  subline: 'Trag dich ein und erhalte Markt-Updates und neue Features zuerst — kompakt, kostenlos, jederzeit abbestellbar.',
  placeholder: 'deine@email.de',
  consent: 'Ich möchte E-Mails von ImmoFugger erhalten und kann mich jederzeit wieder abmelden.',
  button: 'Eintragen',
  success: 'Danke! Du bist eingetragen — die nächsten Markt-Updates landen bei dir.',
  errorEmail: 'Bitte gib eine gültige E-Mail-Adresse ein.',
  errorConsent: 'Bitte bestätige, dass du E-Mails erhalten möchtest.',
}

export const footer = {
  claim: 'Die kostenlose Bildungs- und Community-Plattform für alle, die Immobilien verstehen wollen.',
  legalTitle: 'Rechtliches',
  legalLinks: [
    { label: 'Impressum', to: '/impressum' },
    { label: 'Datenschutz', to: '/datenschutz' },
    { label: 'Disclaimer', to: '/disclaimer' },
    { label: 'Community-Richtlinien', to: '/community-richtlinien' },
  ],
  platformTitle: 'Plattform',
  platformLinks: [
    { label: 'Features', href: '/#features' },
    { label: 'Der Fugger-Pfad', href: '/#fugger-pfad' },
    { label: 'Rechner', href: '/#tools' },
    { label: 'Registrieren', href: '/registrieren' },
  ],
  contactTitle: 'Kontakt',
  copyright: '© 2026 ImmoFugger — Alle Rechte vorbehalten.',
  disclaimerShort:
    'ImmoFugger ist ein Bildungsangebot. Keine Anlage-, Steuer- oder Rechtsberatung. Alle Beispielrechnungen sind vereinfachte Modelle ohne Gewähr.',
}

export const register = {
  title: 'Werde Gründungsmitglied',
  subtitle:
    'Erstelle deinen kostenlosen Account. Wir schalten die Plattform Schritt für Schritt mit den ersten Mitgliedern frei — du stehst damit ganz vorn auf der Liste.',
  fields: {
    name: 'Dein Name',
    namePlaceholder: 'Vor- und Nachname',
    email: 'E-Mail-Adresse',
    emailPlaceholder: 'deine@email.de',
    level: 'Wo stehst du gerade?',
    levels: [
      { value: 'lehrling', label: 'Lehrling', hint: 'Ich fange bei null an.' },
      { value: 'geselle', label: 'Geselle', hint: 'Grundlagen sitzen, ich will rechnen lernen.' },
      { value: 'kaufmann', label: 'Kaufmann', hint: 'Ich suche aktiv oder besitze schon ein Objekt.' },
    ],
    password: 'Passwort',
    passwordPlaceholder: 'Mindestens 8 Zeichen',
    privacy: 'Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben einverstanden.',
  },
  submit: 'Account erstellen — für 0 €',
  hasAccount: 'Schon dabei?',
  loginLink: 'Zum Login',
  errors: {
    name: 'Bitte gib deinen Namen ein.',
    email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    password: 'Bitte wähle ein Passwort mit mindestens 8 Zeichen.',
    level: 'Bitte wähle dein Erfahrungslevel.',
    privacy: 'Bitte bestätige die Datenschutzerklärung.',
    submit: 'Das hat leider nicht geklappt. Bitte versuch es gleich noch einmal.',
  },
  confirmEmail: {
    title: 'Fast geschafft — bestätige deine E-Mail.',
    text: 'Wir haben dir einen Bestätigungslink geschickt. Klick auf den Link in der E-Mail und melde dich danach an — dann öffnet sich das Kontor für dich.',
    toLogin: 'Zum Login',
  },
}

export const login = {
  title: 'Willkommen zurück im Kontor',
  subtitle: 'Melde dich mit deiner E-Mail-Adresse an und mach da weiter, wo du aufgehört hast.',
  fields: {
    email: 'E-Mail-Adresse',
    emailPlaceholder: 'deine@email.de',
    password: 'Passwort',
    passwordPlaceholder: 'Dein Passwort',
  },
  submit: 'Anmelden',
  forgot: 'Passwort vergessen?',
  noAccount: 'Noch keinen Account?',
  registerLink: 'Kostenlos registrieren',
  errors: {
    email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    password: 'Bitte gib dein Passwort ein.',
  },
}

export const resetPassword = {
  request: {
    title: 'Passwort vergessen?',
    text: 'Gib deine E-Mail-Adresse ein — wenn ein Account existiert, senden wir dir einen Link zum Zurücksetzen.',
    submit: 'Link anfordern',
    success: 'Wenn ein Account mit dieser Adresse existiert, ist die E-Mail unterwegs. Schau auch im Spam-Ordner nach.',
    demoHint: 'Demo-Modus: Es wird keine echte E-Mail verschickt. Sobald Supabase konfiguriert ist, funktioniert der Versand automatisch.',
    back: 'Zurück zum Login',
  },
  set: {
    title: 'Neues Passwort festlegen',
    text: 'Wähle ein neues Passwort für deinen Account (mindestens 8 Zeichen).',
    password: 'Neues Passwort',
    passwordRepeat: 'Neues Passwort wiederholen',
    submit: 'Passwort speichern',
    success: 'Dein Passwort wurde geändert. Du kannst dich jetzt anmelden.',
    errorMatch: 'Die Passwörter stimmen nicht überein.',
    errorLength: 'Das Passwort muss mindestens 8 Zeichen lang sein.',
    toLogin: 'Zum Login',
  },
}

export const notFound = {
  code: '404',
  title: 'Diese Seite steht nicht im Hauptbuch',
  text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
  back: 'Zurück zur Startseite',
}

export const legal = {
  placeholderNote: '[PLATZHALTER — vor Launch durch Anwalt/Generator ersetzen]',
  impressum: {
    title: 'Impressum',
    sections: [
      {
        heading: 'Angaben gemäß § 5 DDG',
        placeholder: true,
        body: 'ImmoFugger\nElias B.\n[Straße und Hausnummer]\n[PLZ und Ort]\nDeutschland',
      },
      {
        heading: 'Kontakt',
        placeholder: true,
        body: 'E-Mail: kontakt@immofugger.de\nTelefon: [Telefonnummer]',
      },
      {
        heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        placeholder: true,
        body: 'Elias B.\n[Anschrift wie oben]',
      },
      {
        heading: 'Hinweis',
        placeholder: false,
        body: 'Dieses Impressum ist ein strukturierter Platzhalter. Vor dem öffentlichen Launch müssen die vollständigen, korrekten Angaben ergänzt und rechtlich geprüft werden.',
      },
    ],
  },
  datenschutz: {
    title: 'Datenschutzerklärung',
    sections: [
      {
        heading: '1. Verantwortlicher',
        placeholder: true,
        body: 'Verantwortlich für die Datenverarbeitung auf dieser Website:\nElias B., [Anschrift], kontakt@immofugger.de',
      },
      {
        heading: '2. Erhobene Daten',
        placeholder: true,
        body: 'Bei der Registrierung und Newsletter-Anmeldung verarbeiten wir: Name, E-Mail-Adresse und dein angegebenes Erfahrungslevel. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). [Details je nach eingesetztem Formular-Dienst — z. B. Formspree — ergänzen, inkl. Auftragsverarbeitung und ggf. Drittlandübermittlung.]',
      },
      {
        heading: '3. Hosting & Server-Logs',
        placeholder: true,
        body: '[Angaben zum Hosting-Anbieter (z. B. Vercel/Netlify), Server-Logfiles, Speicherdauer und Rechtsgrundlage ergänzen.]',
      },
      {
        heading: '4. Externe Dienste (Schriftarten)',
        placeholder: true,
        body: 'Diese Website lädt Schriftarten von Google Fonts. [Vor Launch prüfen: Fonts lokal einbinden oder Einwilligung einholen; Abschnitt entsprechend anpassen.]',
      },
      {
        heading: '5. Deine Rechte',
        placeholder: true,
        body: 'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerruf erteilter Einwilligungen sowie ein Beschwerderecht bei einer Aufsichtsbehörde. [Vollständige Belehrung ergänzen.]',
      },
      {
        heading: '6. Konto & Löschung',
        placeholder: true,
        body: 'Über „Profil → Account löschen" kannst du deine Profil- und Fortschrittsdaten selbst entfernen. Die endgültige Löschung deines Zugangs (Auth-Konto) veranlassen wir nach einer kurzen Mitteilung an kontakt@immofugger.de. [Vor Launch an das eingesetzte Backend (Supabase) und die tatsächlichen Löschfristen anpassen.]',
      },
    ],
  },
  disclaimer: {
    title: 'Disclaimer',
    sections: [
      {
        heading: 'Bildungsangebot — keine Beratung',
        placeholder: false,
        body: 'ImmoFugger ist ein reines Bildungs- und Community-Angebot. Sämtliche Inhalte — Lernmodule, Artikel, Objekt-Analysen, Markt-Updates, Rechner und Community-Beiträge — dienen ausschließlich der allgemeinen Information und Weiterbildung. Sie stellen keine Anlageberatung, keine Steuerberatung, keine Rechtsberatung und keine Empfehlung zum Kauf oder Verkauf konkreter Immobilien oder Finanzprodukte dar.',
      },
      {
        heading: 'Keine Erfolgsgarantien',
        placeholder: false,
        body: 'Immobilieninvestitionen sind mit erheblichen Risiken verbunden, bis hin zum Verlust des eingesetzten Kapitals. Historische Entwicklungen und Beispielrechnungen lassen keine Rückschlüsse auf zukünftige Ergebnisse zu. ImmoFugger gibt keinerlei Zusicherungen oder Garantien für wirtschaftliche Erfolge. Jede Entscheidung triffst du eigenverantwortlich.',
      },
      {
        heading: 'Beispielrechnungen',
        placeholder: false,
        body: 'Alle Rechner und Beispielrechnungen auf dieser Website sind stark vereinfachte Modelle. Sie berücksichtigen insbesondere keine individuellen steuerlichen Umstände, keine Instandhaltungsrisiken, kein Mietausfallrisiko und keine Finanzierungsdetails im Einzelfall. Ergebnisse sind unverbindliche Näherungswerte ohne Gewähr.',
      },
      {
        heading: 'Externe Inhalte & Haftung',
        placeholder: true,
        body: '[Haftungsklauseln für externe Links, Community-Inhalte und Aktualität der Informationen vor Launch juristisch prüfen und ergänzen.]',
      },
    ],
  },
  richtlinien: {
    title: 'Community-Richtlinien',
    sections: [
      {
        heading: 'Auf Augenhöhe',
        placeholder: false,
        body: 'Wir behandeln einander respektvoll — unabhängig von Erfahrungslevel, Herkunft oder Portfolio-Größe. Keine Frage ist zu einfach. Wer anderen hilft, macht die Community wertvoller für alle.',
      },
      {
        heading: 'Keine Verkaufsversuche',
        placeholder: false,
        body: 'Die Community ist kein Vertriebskanal. Unaufgeforderte Werbung, Affiliate-Links, Coaching-Angebote und das Anwerben von Mitgliedern für externe Projekte führen zum Ausschluss.',
      },
      {
        heading: 'Keine Finanz-, Steuer- oder Rechtsberatung',
        placeholder: false,
        body: 'Mitglieder teilen Erfahrungen und Meinungen — keine individuelle Beratung. Konkrete Empfehlungen („Kauf das!") sind zu unterlassen. Bei Fachfragen verweisen wir auf zugelassene Profis.',
      },
      {
        heading: 'Datenschutz & Diskretion',
        placeholder: false,
        body: 'Objekt-Analysen werden anonymisiert geteilt (keine vollständigen Adressen, keine Daten Dritter). Was in der Community besprochen wird, bleibt in der Community.',
      },
      {
        heading: 'Durchsetzung',
        placeholder: true,
        body: '[Moderationsprozess, Verwarnstufen und Kontaktweg für Meldungen vor Launch final festlegen.]',
      },
    ],
  },
}
