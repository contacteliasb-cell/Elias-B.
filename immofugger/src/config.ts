/**
 * Zentrale Konfiguration.
 * Alles, was sich regelmäßig ändert (Zahlen, Links, Endpoints), lebt hier —
 * Texte liegen in src/content/de.ts, Lerninhalte in src/content/blueprint/.
 */
export const config = {
  /** Anzeigename der Marke */
  brandName: 'ImmoFugger',

  /** Mitgliederzahl — überall zentral änderbar (Hero-Kennzahl, Pricing-Counter) */
  MEMBER_COUNT: '500+',
  /** Numerischer Wert für animierte Counter (muss zu MEMBER_COUNT passen) */
  MEMBER_COUNT_NUMERIC: 500,

  /**
   * Kennzahlen der Hero-Sektion.
   * liveCalls: bewusst ohne feste Zahl („Regelmäßig"), bis die echte Planung
   * steht — dann value auf die Zahl setzen (z. B. 4) und label anpassen.
   */
  STATS: {
    modules: { value: 42 as number | null, text: '', suffix: '+', label: 'Lernmodule' },
    members: { value: 500 as number | null, text: '', suffix: '+', label: 'Mitglieder' },
    liveCalls: { value: null as number | null, text: 'Live', suffix: '', label: 'Regelmäßige Calls' },
  },

  /** Kontakt & Support (auch für Kontolöschungs-Anfragen, siehe Profil-Seite) */
  CONTACT_EMAIL: 'kontakt@immofugger.de',

  /**
   * Kontor-Community:
   * 'board'    → eingebautes Frage-&-Austausch-Board (Standard)
   * 'external' → Beitritts-Karte mit Link zur externen Gruppe (URL unten setzen)
   */
  COMMUNITY_MODE: 'board' as 'board' | 'external',
  COMMUNITY_EXTERNAL_URL: 'https://t.me/PLATZHALTER',
  COMMUNITY_EXTERNAL_NAME: 'Telegram-Gruppe',

  /**
   * Formspree-Endpoints für die Newsletter-Anmeldung (Landingpage).
   * Solange leer, speichert der Form-Adapter Einträge im localStorage.
   * Eintragen: 'https://formspree.io/f/DEIN_FORM_ID'
   */
  FORMSPREE_REGISTER_ENDPOINT: '',
  FORMSPREE_NEWSLETTER_ENDPOINT: '',

  /** Social-Links — Platzhalter, bis echte Profile existieren */
  SOCIALS: [
    { name: 'Instagram', url: '#', comingSoon: true },
    { name: 'YouTube', url: '#', comingSoon: true },
    { name: 'LinkedIn', url: '#', comingSoon: true },
  ],

  /** Partner-/Tools-Leiste — neutrale Platzhalter, keine echten Fremdlogos */
  PARTNERS: ['Partner folgt', 'Partner folgt', 'Partner folgt', 'Partner folgt'],
}

/**
 * Grunderwerbsteuersätze nach Bundesland für den Kaufnebenkosten-Rechner.
 * Stand: Anfang 2026 — ohne Gewähr, vor Nutzung aktuellen Satz prüfen!
 */
export const GRUNDERWERBSTEUER = {
  standDatum: 'Anfang 2026',
  saetze: [
    { land: 'Baden-Württemberg', satz: 5.0 },
    { land: 'Bayern', satz: 3.5 },
    { land: 'Berlin', satz: 6.0 },
    { land: 'Brandenburg', satz: 6.5 },
    { land: 'Bremen', satz: 5.0 },
    { land: 'Hamburg', satz: 5.5 },
    { land: 'Hessen', satz: 6.0 },
    { land: 'Mecklenburg-Vorpommern', satz: 6.0 },
    { land: 'Niedersachsen', satz: 5.0 },
    { land: 'Nordrhein-Westfalen', satz: 6.5 },
    { land: 'Rheinland-Pfalz', satz: 5.0 },
    { land: 'Saarland', satz: 6.5 },
    { land: 'Sachsen', satz: 5.5 },
    { land: 'Sachsen-Anhalt', satz: 5.0 },
    { land: 'Schleswig-Holstein', satz: 6.5 },
    { land: 'Thüringen', satz: 5.0 },
  ],
} as const
