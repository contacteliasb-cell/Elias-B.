/**
 * Kalender-Events des Mitgliederbereichs.
 *
 * So fügst du ein Event hinzu: einen neuen Eintrag ins Array einfügen mit
 * date im Format 'YYYY-MM-DD'. Vergangene Events werden im Kalender
 * automatisch ausgeblendet. Für wiederkehrende Termine (z. B. den monatlichen
 * Kontor-Call) legst du einfach mehrere Einträge an.
 *
 * type steuert Farbe und Label:
 *   'call'   → Live-Call (Q&A, Objektbesprechung)
 *   'frist'  → wichtige Frist (Steuer, Abrechnung)
 *   'markt'  → Markt-Termin (Zinsentscheid, Berichte)
 */

export type EventType = 'call' | 'frist' | 'markt'

export type CalendarEvent = {
  id: string
  title: string
  /** ISO-Datum 'YYYY-MM-DD' */
  date: string
  /** Uhrzeit 'HH:MM' oder leer für ganztägig */
  time?: string
  type: EventType
  description: string
  /** Optionaler Link (z. B. zum Video-Call) */
  link?: string
}

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  call: 'Live-Call',
  frist: 'Frist',
  markt: 'Markt-Termin',
}

/**
 * Beispiel-Events. Die Daten sind bewusst als wiederkehrende bzw. neutrale
 * Beispiele angelegt — vor dem Launch durch deine echten Termine ersetzen.
 * Damit die Beispiele „kommend" bleiben, werden sie relativ zum heutigen
 * Datum erzeugt (siehe upcomingEvents()).
 */
type RawEvent = Omit<CalendarEvent, 'date'> & { inDays: number }

const RAW_EVENTS: RawEvent[] = [
  {
    id: 'kontor-call-1',
    title: 'Kontor-Call: Q&A für Einsteiger',
    time: '19:00',
    type: 'call',
    description:
      'Offene Fragerunde für neue Mitglieder rund um die ersten Schritte: Begriffe, erste Objektanalyse, Finanzierungsgrundlagen. Bring deine Fragen mit.',
    inDays: 4,
  },
  {
    id: 'objektbesprechung-1',
    title: 'Objektbesprechung live',
    time: '20:00',
    type: 'call',
    description:
      'Wir rechnen gemeinsam ein anonymisiertes Beispielobjekt durch — von der Bruttorendite über den Cashflow bis zu den Risiken. Ideal, um das Gelernte in Aktion zu sehen.',
    inDays: 9,
  },
  {
    id: 'markt-zinsen-1',
    title: 'Zinsentscheid — Einordnung',
    time: '18:30',
    type: 'markt',
    description:
      'Kurze Einordnung der jüngsten Zinsentwicklung und was sie für Finanzierungen und Anschlussfinanzierungen bedeutet. Neutrale Beispiel-Betrachtung, keine Anlageberatung.',
    inDays: 12,
  },
  {
    id: 'frist-grundsteuer-1',
    title: 'Beispiel-Frist: Grundsteuer-Vorauszahlung',
    type: 'frist',
    description:
      'Neutrale Erinnerung: In vielen Gemeinden sind Grundsteuer-Raten quartalsweise fällig. Prüfe deinen individuellen Bescheid — Termine variieren je nach Kommune.',
    inDays: 16,
  },
  {
    id: 'kontor-call-2',
    title: 'Kontor-Call: Finanzierung & Bankgespräch',
    time: '19:00',
    type: 'call',
    description:
      'Vertiefungs-Call zum Bankgespräch: Unterlagen-Mappe, Konditionen vergleichen, Nebenbedingungen verhandeln. Mit Zeit für eure konkreten Fälle.',
    inDays: 21,
  },
  {
    id: 'markt-report-1',
    title: 'Monatsreport: Miet- und Kaufpreise',
    time: '17:00',
    type: 'markt',
    description:
      'Zusammenfassung der aktuellen Entwicklungen an den Miet- und Kaufpreismärkten mit Fokus auf B-Städte. Kompakt, damit du Stunden an Recherche sparst.',
    inDays: 26,
  },
  {
    id: 'frist-nebenkosten-1',
    title: 'Beispiel-Frist: Betriebskostenabrechnung',
    type: 'frist',
    description:
      'Erinnerung an die 12-Monats-Frist: Für das vergangene Abrechnungsjahr muss die Betriebskostenabrechnung fristgerecht beim Mieter sein, sonst entfällt die Nachforderung.',
    inDays: 33,
  },
  {
    id: 'objektbesprechung-2',
    title: 'Objektbesprechung: Sanierungsfall',
    time: '20:00',
    type: 'call',
    description:
      'Wir analysieren gemeinsam ein Objekt mit Sanierungsstau: Wie schätzt man Kosten, wie preist man das ein, wo liegt die Chance? Praxisnah und mit Zahlen.',
    inDays: 38,
  },
]

function toISODate(inDays: number): string {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + inDays)
  return d.toISOString().slice(0, 10)
}

/** Alle Events mit konkretem Datum, chronologisch sortiert. */
export const events: CalendarEvent[] = RAW_EVENTS.map(({ inDays, ...rest }) => ({
  ...rest,
  date: toISODate(inDays),
})).sort((a, b) => a.date.localeCompare(b.date))

/** Kommende Events (ab heute), optional begrenzt. */
export function upcomingEvents(limit?: number): CalendarEvent[] {
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = events.filter((e) => e.date >= today)
  return limit ? upcoming.slice(0, limit) : upcoming
}
