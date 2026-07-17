import { ArrowRight, BookOpen, CalendarDays, Flame, MessagesSquare, Target, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { allLessons, modules } from '../../content/blueprint'
import { upcomingEvents } from '../../content/events'
import { useAuth } from '../../lib/auth/AuthContext'
import { backend, type CommunityPost } from '../../lib/backend'
import { completedCount, currentRank, learningStreak, nextRank, quizAverage, RANKS } from '../../lib/ranks'
import { usePageTitle } from '../../lib/usePageTitle'

export function DashboardPage() {
  usePageTitle('Dashboard')
  const { user, progress } = useAuth()
  const [posts, setPosts] = useState<CommunityPost[]>([])

  useEffect(() => {
    backend.listPosts().then((p) => setPosts(p.slice(0, 2)))
  }, [])

  const done = completedCount(progress)
  const rank = currentRank(progress)
  const next = nextRank(progress)
  const streak = learningStreak(progress)
  const quizAvg = quizAverage(progress)
  const events = upcomingEvents(2)

  // Nächste offene Lektion finden
  const nextLesson =
    allLessons.find((l) => {
      const st = progress.find((p) => p.lessonId === l.id)?.status
      return st !== 'abgeschlossen'
    }) ?? null

  const rankIndex = RANKS.findIndex((r) => r.slug === rank.slug)

  return (
    <div>
      {/* Begrüßung */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-parchment break-words md:text-4xl">
          Willkommen zurück im Kontor, {user?.displayName}
        </h1>
        <p className="mt-1.5 text-slateink">
          Aktueller Rang: <span className="font-medium text-gold-light">{rank.name}</span>
        </p>
      </div>

      {/* Fugger-Pfad-Fortschritt */}
      <section className="kontor-card mb-6 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Dein Fugger-Pfad</h2>
          <span className="font-mono text-xs text-slateink">{done} / {allLessons.length} Lektionen</span>
        </div>

        {/* Rang-Linie */}
        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-[14px] h-0.5 bg-night-line" aria-hidden="true">
            <div
              className="h-full bg-gold-gradient transition-all duration-700"
              style={{ width: `${(rankIndex / (RANKS.length - 1)) * 100}%` }}
            />
          </div>
          <ol className="relative flex justify-between">
            {RANKS.map((r, i) => {
              const reached = i <= rankIndex
              return (
                <li key={r.slug} className="flex min-w-0 flex-1 flex-col items-center gap-2 px-0.5 text-center">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-semibold ${
                      i === rankIndex
                        ? 'border-gold bg-gold text-night shadow-gold-glow'
                        : reached
                          ? 'border-gold/60 bg-night-card text-gold-light'
                          : 'border-night-line bg-night-card text-slateink'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`w-full truncate text-[10px] md:text-xs ${reached ? 'text-parchment-dim' : 'text-slateink'}`}>
                    {r.name}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        {next && (
          <p className="mt-6 text-center text-sm text-slateink">
            Noch <span className="font-semibold text-gold-light">{next.missing}</span>{' '}
            {next.missing === 1 ? 'Lektion' : 'Lektionen'} bis zum Rang{' '}
            <span className="font-semibold text-parchment">{next.rank.name}</span>.
          </p>
        )}
      </section>

      {/* Statistik-Kacheln */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        <StatTile icon={BookOpen} label="Abgeschlossen" value={`${done}`} sub={`von ${allLessons.length}`} />
        <StatTile icon={Target} label="Quiz-Schnitt" value={quizAvg != null ? `${quizAvg}%` : '—'} sub="richtige Antworten" />
        <StatTile icon={Flame} label="Lernstreak" value={`${streak}`} sub={streak === 1 ? 'Tag' : 'Tage'} className="col-span-2 md:col-span-1" />
      </div>

      {/* Weiterlernen */}
      {nextLesson ? (
        <section className="kontor-card mb-6 flex flex-col items-start gap-4 border-gold/30 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Weiterlernen</p>
            <h3 className="mt-1.5 font-display text-xl font-semibold text-parchment">{nextLesson.title}</h3>
            <p className="mt-1 text-xs text-slateink">
              {modules.find((m) => m.lessons.some((l) => l.id === nextLesson.id))?.title}
            </p>
          </div>
          <Button to={`/app/blueprint/${nextLesson.id}`} variant="gold" className="shrink-0">
            Jetzt lernen <ArrowRight className="h-4 w-4" />
          </Button>
        </section>
      ) : (
        <section className="kontor-card mb-6 border-gold/30 p-6 text-center">
          <p className="font-display text-xl font-semibold text-gold-light">Alle Lektionen abgeschlossen — Respekt!</p>
          <p className="mt-1 text-sm text-slateink">Du hast den kompletten Fugger-Pfad durchlaufen. Bleib im Kontor aktiv.</p>
        </section>
      )}

      {/* Vorschauen */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Kalender */}
        <section className="kontor-card min-w-0 p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-parchment">
              <CalendarDays className="h-[18px] w-[18px] text-gold" /> Nächste Termine
            </h2>
            <Link to="/app/kalender" className="text-xs text-gold-light hover:underline">
              Alle
            </Link>
          </div>
          {events.length === 0 ? (
            <p className="text-sm text-slateink">Keine kommenden Termine.</p>
          ) : (
            <ul className="space-y-2.5">
              {events.map((ev) => (
                <li key={ev.id} className="flex items-center gap-3">
                  <TrendingUp className="h-3.5 w-3.5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="truncate text-sm text-parchment-dim">{ev.title}</p>
                    <p className="font-mono text-[10px] text-slateink">
                      {new Date(ev.date + 'T00:00:00').toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}
                      {ev.time && ` · ${ev.time} Uhr`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Kontor */}
        <section className="kontor-card min-w-0 p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-parchment">
              <MessagesSquare className="h-[18px] w-[18px] text-gold" /> Neu im Kontor
            </h2>
            <Link to="/app/kontor" className="text-xs text-gold-light hover:underline">
              Alle
            </Link>
          </div>
          {posts.length === 0 ? (
            <p className="text-sm text-slateink">Noch keine Beiträge — eröffne die erste Runde.</p>
          ) : (
            <ul className="space-y-2.5">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link to="/app/kontor" className="block truncate text-sm text-parchment-dim hover:text-gold-light">
                    {post.title}
                  </Link>
                  <p className="font-mono text-[10px] text-slateink">{post.authorName}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

function StatTile({
  icon: Icon,
  label,
  value,
  sub,
  className = '',
}: {
  icon: typeof BookOpen
  label: string
  value: string
  sub: string
  className?: string
}) {
  return (
    <div className={`kontor-card p-5 ${className}`}>
      <Icon className="h-5 w-5 text-gold" />
      <p className="mt-3 font-mono text-3xl font-semibold text-gold-light">{value}</p>
      <p className="mt-1 text-sm text-parchment-dim">{label}</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-slateink">{sub}</p>
    </div>
  )
}
