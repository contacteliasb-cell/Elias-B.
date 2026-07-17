import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2, Clock, RotateCcw, ScrollText, XCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { RankUpModal } from '../../components/RankUpModal'
import { findLesson, lessonNeighbours, readingMinutes } from '../../content/blueprint'
import { getArticle } from '../../content/wiki'
import { useAuth } from '../../lib/auth/AuthContext'
import { currentRank, type Rank } from '../../lib/ranks'
import { usePageTitle } from '../../lib/usePageTitle'

const PASS_THRESHOLD = 0.6

export function LessonPage() {
  const { lessonId } = useParams()
  const found = lessonId ? findLesson(lessonId) : null
  usePageTitle(found?.lesson.title ?? 'Lektion')

  const { progress, saveProgress } = useAuth()
  const [showQuiz, setShowQuiz] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [rankUp, setRankUp] = useState<Rank | null>(null)

  const neighbours = useMemo(() => (lessonId ? lessonNeighbours(lessonId) : { prev: null, next: null }), [lessonId])

  if (!found || !lessonId) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <p className="text-slateink">Diese Lektion wurde nicht gefunden.</p>
        <Button to="/app/blueprint" variant="outline" className="mt-6">
          Zurück zum Blueprint
        </Button>
      </div>
    )
  }

  const { lesson, module } = found
  const savedStatus = progress.find((p) => p.lessonId === lessonId)

  const correctCount = lesson.quiz.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0)
  const score = Math.round((correctCount / lesson.quiz.length) * 100)
  const passed = correctCount / lesson.quiz.length >= PASS_THRESHOLD

  const onSubmitQuiz = async () => {
    setSubmitted(true)
    if (correctCount / lesson.quiz.length >= PASS_THRESHOLD) {
      const before = currentRank(progress)
      await saveProgress({
        lessonId,
        status: 'abgeschlossen',
        quizScore: score,
        completedAt: new Date().toISOString(),
      })
      // Rang nach dem Speichern neu berechnen
      const after = currentRank([
        ...progress.filter((p) => p.lessonId !== lessonId),
        { lessonId, status: 'abgeschlossen', quizScore: score, completedAt: new Date().toISOString() },
      ])
      if (after.slug !== before.slug) setRankUp(after)
    }
  }

  const retryQuiz = () => {
    setAnswers({})
    setSubmitted(false)
  }

  const startQuiz = async () => {
    if (!savedStatus) {
      await saveProgress({ lessonId, status: 'gestartet', quizScore: null, completedAt: null })
    }
    setShowQuiz(true)
  }

  return (
    <div className="mx-auto max-w-3xl">
      <RankUpModal rank={rankUp} onClose={() => setRankUp(null)} />

      {/* Kopf */}
      <div className="mb-6">
        <Link to="/app/blueprint" className="inline-flex items-center gap-1.5 text-xs text-slateink hover:text-gold-light">
          <ArrowLeft className="h-3.5 w-3.5" /> {module.title}
        </Link>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-parchment md:text-4xl">
          {lesson.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slateink">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {readingMinutes(lesson)} Min. Lesezeit
          </span>
          {savedStatus?.status === 'abgeschlossen' && (
            <span className="inline-flex items-center gap-1.5 text-gold-light">
              <CheckCircle2 className="h-3.5 w-3.5" /> Abgeschlossen
              {savedStatus.quizScore != null && ` · ${savedStatus.quizScore}%`}
            </span>
          )}
        </div>
      </div>

      {!showQuiz ? (
        <>
          <p className="border-l-2 border-gold/50 pl-4 text-base italic leading-relaxed text-parchment-dim">
            {lesson.intro}
          </p>

          <article className="mt-8 space-y-8">
            {lesson.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-parchment">{section.heading}</h2>
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-slateink">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            {/* Praxisbeispiel */}
            <section className="kontor-card border-gold/20 p-5">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold">
                <BookOpenCheck className="h-4 w-4" /> {lesson.example.title}
              </p>
              <p className="mt-3 leading-relaxed text-parchment-dim">{lesson.example.body}</p>
            </section>

            {/* Kontor-Notiz */}
            <section className="rounded-xl border border-gold/30 bg-gold/5 p-5">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold-light">
                <ScrollText className="h-4 w-4" /> Kontor-Notiz
              </p>
              <p className="mt-3 leading-relaxed text-parchment">{lesson.note}</p>
            </section>

            {lesson.legalHint && (
              <p className="text-xs italic text-slateink">
                Bildungsinhalt — ersetzt keine Rechts- oder Steuerberatung.
              </p>
            )}

            {/* Wiki-Verlinkungen */}
            {lesson.wikiRefs && lesson.wikiRefs.length > 0 && (
              <section>
                <p className="font-mono text-xs uppercase tracking-widest text-slateink">Passende Wiki-Artikel</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {lesson.wikiRefs.map((slug) => {
                    const art = getArticle(slug)
                    if (!art) return null
                    return (
                      <Link
                        key={slug}
                        to={`/app/wiki/${slug}`}
                        className="rounded-full border border-gold/30 bg-night-soft px-3 py-1 text-xs text-gold-pale transition-colors hover:border-gold/60"
                      >
                        {art.term}
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}
          </article>

          <div className="mt-10 flex justify-center">
            <Button onClick={startQuiz} variant="gold">
              Quiz starten <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <QuizView
          lesson={lesson}
          answers={answers}
          setAnswers={setAnswers}
          submitted={submitted}
          onSubmit={onSubmitQuiz}
          onRetry={retryQuiz}
          passed={passed}
          score={score}
          correctCount={correctCount}
          onBackToText={() => setShowQuiz(false)}
        />
      )}

      {/* Vor/Zurück-Navigation */}
      <div className="mt-12 flex items-center justify-between gap-3 border-t border-night-line pt-6">
        {neighbours.prev ? (
          <Button to={`/app/blueprint/${neighbours.prev.id}`} variant="ghost" className="max-w-[45%]">
            <ArrowLeft className="h-4 w-4" /> <span className="truncate">Zurück</span>
          </Button>
        ) : (
          <span />
        )}
        {neighbours.next ? (
          <Button to={`/app/blueprint/${neighbours.next.id}`} variant="outline" className="max-w-[45%]">
            <span className="truncate">Weiter</span> <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button to="/app/blueprint" variant="outline">
            Zur Übersicht
          </Button>
        )}
      </div>
    </div>
  )
}

type QuizViewProps = {
  lesson: NonNullable<ReturnType<typeof findLesson>>['lesson']
  answers: Record<number, number>
  setAnswers: (a: Record<number, number>) => void
  submitted: boolean
  onSubmit: () => void
  onRetry: () => void
  passed: boolean
  score: number
  correctCount: number
  onBackToText: () => void
}

function QuizView({ lesson, answers, setAnswers, submitted, onSubmit, onRetry, passed, score, correctCount, onBackToText }: QuizViewProps) {
  const allAnswered = lesson.quiz.every((_, i) => answers[i] !== undefined)

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold text-parchment">Quiz</h2>
        <button onClick={onBackToText} className="text-xs text-slateink hover:text-gold-light">
          ← Zurück zum Text
        </button>
      </div>

      <ol className="space-y-6">
        {lesson.quiz.map((q, qi) => (
          <li key={qi} className="kontor-card p-5">
            <p className="font-medium text-parchment">
              {qi + 1}. {q.q}
            </p>
            <div className="mt-3 space-y-2" role="radiogroup" aria-label={q.q}>
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi
                const isCorrect = oi === q.correct
                let cls = 'border-night-line bg-night-soft hover:border-gold/40'
                if (submitted) {
                  if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10'
                  else if (selected) cls = 'border-bordeaux-light/50 bg-bordeaux/20'
                  else cls = 'border-night-line opacity-60'
                } else if (selected) {
                  cls = 'border-gold bg-gold/10'
                }
                return (
                  <button
                    key={oi}
                    role="radio"
                    aria-checked={selected}
                    disabled={submitted}
                    onClick={() => setAnswers({ ...answers, [qi]: oi })}
                    className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${cls}`}
                  >
                    <span className="flex-1 text-parchment-dim">{opt}</span>
                    {submitted && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />}
                    {submitted && selected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-400" />}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <p className="mt-3 rounded-lg bg-night-soft px-4 py-2.5 text-xs leading-relaxed text-slateink">
                {q.explanation}
              </p>
            )}
          </li>
        ))}
      </ol>

      {!submitted ? (
        <div className="mt-8 flex justify-center">
          <Button onClick={onSubmit} variant="gold" disabled={!allAnswered}>
            Auswerten
          </Button>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            className={`mt-8 rounded-xl border p-6 text-center ${
              passed ? 'border-gold/40 bg-gold/5' : 'border-bordeaux-light/40 bg-bordeaux/10'
            }`}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
          >
            {passed ? (
              <CheckCircle2 className="mx-auto h-10 w-10 text-gold-light" />
            ) : (
              <RotateCcw className="mx-auto h-10 w-10 text-parchment-dim" />
            )}
            <p className="mt-3 font-display text-2xl font-semibold text-parchment">
              {correctCount} von {lesson.quiz.length} richtig · {score}%
            </p>
            <p className="mt-2 text-sm text-slateink">
              {passed
                ? 'Bestanden! Die Lektion ist abgeschlossen und dein Fortschritt gespeichert.'
                : 'Noch nicht bestanden (mind. 60 % nötig). Schau dir die Erklärungen an und versuch es erneut — beliebig oft.'}
            </p>
            {!passed && (
              <Button onClick={onRetry} variant="gold" className="mt-5">
                <RotateCcw className="h-4 w-4" /> Erneut versuchen
              </Button>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
