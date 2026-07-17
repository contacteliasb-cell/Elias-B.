import { CheckCircle2, Circle, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProgressRing } from '../../components/ProgressRing'
import { modules, readingMinutes } from '../../content/blueprint'
import { useAuth } from '../../lib/auth/AuthContext'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

/** /app/blueprint — Modul-Übersicht mit Fortschrittsringen und Lektionsliste. */
export function BlueprintPage() {
  usePageTitle('Blueprint')
  const { progress } = useAuth()

  const statusOf = (lessonId: string) => progress.find((p) => p.lessonId === lessonId)?.status

  return (
    <div>
      <AppPageHeader
        kicker="Der Fugger-Blueprint"
        title="Dein Lernprogramm"
        subtitle="Sechs Modulgruppen, 42 Lektionen — vom Fundament bis zum Portfolio. Jede Lektion schließt du mit einem kurzen Quiz ab."
      />

      <div className="space-y-5">
        {modules.map((module) => {
          const done = module.lessons.filter((l) => statusOf(l.id) === 'abgeschlossen').length
          const pct = (done / module.lessons.length) * 100
          return (
            <section key={module.slug} className="kontor-card overflow-hidden">
              <div className="flex items-center gap-4 border-b border-night-line bg-night-soft px-5 py-4">
                <ProgressRing percent={pct} />
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-semibold text-parchment">{module.title}</h2>
                  <p className="mt-0.5 line-clamp-2 text-xs text-slateink">{module.description}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-gold-light">
                  {done}/{module.lessons.length}
                </span>
              </div>

              <ul className="divide-y divide-night-line/70">
                {module.lessons.map((lesson) => {
                  const st = statusOf(lesson.id)
                  const Icon = st === 'abgeschlossen' ? CheckCircle2 : st === 'gestartet' ? PlayCircle : Circle
                  return (
                    <li key={lesson.id}>
                      <Link
                        to={`/app/blueprint/${lesson.id}`}
                        className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-white/5"
                      >
                        <Icon
                          className={`h-[18px] w-[18px] shrink-0 ${
                            st === 'abgeschlossen' ? 'text-gold' : st === 'gestartet' ? 'text-gold-light' : 'text-slateink'
                          }`}
                        />
                        <span className="min-w-0 flex-1 truncate text-sm text-parchment-dim">{lesson.title}</span>
                        <span className="shrink-0 font-mono text-[11px] text-slateink">{readingMinutes(lesson)} Min.</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
