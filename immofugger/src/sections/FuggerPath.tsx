import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Flag } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { path } from '../content/de'

export function FuggerPath() {
  const [active, setActive] = useState(0)
  const step = path.steps[active]

  return (
    <section id="fugger-pfad" className="relative py-20 md:py-28">
      {/* Dezente Bordeaux-Fläche als Hintergrund-Akzent */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #8C3A46, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <SectionHeading kicker={path.kicker} headline={path.headline} subline={path.subline} />

        {/* Stepper: horizontal ab md, vertikal auf Mobile */}
        <Reveal>
          <div role="tablist" aria-label="Stufen des Fugger-Pfads" className="relative flex flex-col gap-2 md:flex-row md:items-start md:gap-0">
            {/* Fortschrittslinie (Desktop) */}
            <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-night-line md:block" aria-hidden="true">
              <motion.div
                className="h-full bg-gold-gradient"
                animate={{ width: `${(active / (path.steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            {path.steps.map((s, i) => {
              const isActive = i === active
              const isDone = i < active
              return (
                <button
                  key={s.name}
                  role="tab"
                  id={`path-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="path-panel"
                  onClick={() => setActive(i)}
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-left md:flex-1 md:flex-col md:gap-3 md:py-0 md:text-center"
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'border-gold bg-gold text-night shadow-gold-glow'
                        : isDone
                          ? 'border-gold/60 bg-night-card text-gold-light'
                          : 'border-night-line bg-night-card text-slateink group-hover:border-gold/40 group-hover:text-parchment-dim'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="h-5 w-5" /> : i + 1}
                  </span>
                  <span className="md:mt-1">
                    <span
                      className={`block font-display text-lg font-semibold leading-tight transition-colors ${
                        isActive ? 'text-gold-light' : 'text-parchment-dim group-hover:text-parchment'
                      }`}
                    >
                      {s.name}
                    </span>
                    <span className="block text-xs text-slateink">{s.tagline}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Inhalt der aktiven Stufe */}
        <div
          id="path-panel"
          role="tabpanel"
          aria-labelledby={`path-tab-${active}`}
          className="mt-10 md:mt-14"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="kontor-card grid gap-8 p-7 md:grid-cols-[1fr_1fr] md:p-10"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
                  Stufe {active + 1} von {path.steps.length}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-parchment md:text-4xl">
                  {step.name} <span className="text-slateink">·</span>{' '}
                  <span className="text-gold-light">{step.tagline}</span>
                </h3>
                <p className="mt-4 leading-relaxed text-slateink">{step.description}</p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <ul className="space-y-3">
                  {step.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3 text-sm text-parchment-dim">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {goal}
                    </li>
                  ))}
                </ul>
                <p className="flex items-start gap-3 rounded-lg border border-gold/25 bg-gold/5 px-4 py-3 text-sm text-gold-pale">
                  <Flag className="mt-0.5 h-4 w-4 shrink-0" />
                  {step.milestone}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
