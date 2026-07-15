/**
 * Zentrale Konfiguration.
 * Alles, was sich regelmäßig ändert (Zahlen, Links, Endpoints), lebt hier —
 * Texte liegen in src/content/de.ts.
 */
export const config = {
  /** Anzeigename der Marke */
  brandName: 'ImmoFugger',

  /** Mitgliederzahl — überall zentral änderbar (Hero-Kennzahl, Pricing-Counter) */
  MEMBER_COUNT: '500+',
  /** Numerischer Wert für animierte Counter (muss zu MEMBER_COUNT passen) */
  MEMBER_COUNT_NUMERIC: 500,

  /** Weitere Kennzahlen der Hero-Sektion */
  STATS: {
    modules: { value: 40, suffix: '+', label: 'Lernmodule' },
    members: { value: 500, suffix: '+', label: 'Mitglieder' },
    liveCalls: { value: 12, suffix: '', label: 'Live-Calls pro Monat' },
  },

  /** Kontakt */
  CONTACT_EMAIL: 'kontakt@immofugger.de',

  /**
   * Formspree-Endpoints. Solange leer, speichert der Form-Adapter
   * Anmeldungen und Newsletter-Einträge im localStorage (siehe src/lib/forms.ts).
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
} as const
