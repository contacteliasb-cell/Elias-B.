import { CalendarClock, ExternalLink, Radio, TrendingUp } from 'lucide-react'
import { EVENT_TYPE_LABELS, upcomingEvents, type EventType } from '../../content/events'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

const typeStyles: Record<EventType, { icon: typeof Radio; classes: string }> = {
  call: { icon: Radio, classes: 'border-gold/40 bg-gold/10 text-gold-light' },
  frist: { icon: CalendarClock, classes: 'border-bordeaux-light/50 bg-bordeaux/20 text-red-200' },
  markt: { icon: TrendingUp, classes: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' },
}

function formatDate(iso: string): { day: string; weekday: string; month: string } {
  const d = new Date(iso + 'T00:00:00')
  return {
    day: d.toLocaleDateString('de-DE', { day: '2-digit' }),
    weekday: d.toLocaleDateString('de-DE', { weekday: 'short' }),
    month: d.toLocaleDateString('de-DE', { month: 'short' }),
  }
}

export function KalenderPage() {
  usePageTitle('Kalender')
  const events = upcomingEvents()

  return (
    <div>
      <AppPageHeader
        kicker="Kalender"
        title="Kommende Termine"
        subtitle="Live-Calls, Objektbesprechungen und wichtige Fristen. Alle Zeiten in deiner lokalen Zeitzone."
      />

      {events.length === 0 ? (
        <div className="kontor-card p-10 text-center">
          <CalendarClock className="mx-auto h-10 w-10 text-slateink" />
          <p className="mt-4 text-sm text-slateink">Aktuell sind keine Termine eingetragen. Schau bald wieder vorbei.</p>
        </div>
      ) : (
        <ol className="space-y-3">
          {events.map((ev) => {
            const { day, weekday, month } = formatDate(ev.date)
            const style = typeStyles[ev.type]
            const Icon = style.icon
            return (
              <li key={ev.id} className="kontor-card flex gap-4 p-4 md:p-5">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg border border-gold/25 bg-night">
                  <span className="font-mono text-[10px] uppercase text-slateink">{weekday}</span>
                  <span className="font-mono text-2xl font-semibold leading-none text-gold-light">{day}</span>
                  <span className="font-mono text-[10px] uppercase text-slateink">{month}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${style.classes}`}>
                      <Icon className="h-3 w-3" />
                      {EVENT_TYPE_LABELS[ev.type]}
                    </span>
                    {ev.time && <span className="font-mono text-xs text-slateink">{ev.time} Uhr</span>}
                  </div>
                  <h2 className="mt-1.5 font-display text-lg font-semibold text-parchment">{ev.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-slateink">{ev.description}</p>
                  {ev.link && (
                    <a
                      href={ev.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-gold-light hover:underline"
                    >
                      Zum Termin <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
