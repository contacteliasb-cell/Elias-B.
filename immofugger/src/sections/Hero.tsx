import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { Button } from '../components/Button'
import { Counter } from '../components/Counter'
import { DashboardMockup } from '../components/mockups/DashboardMockup'
import { config } from '../config'
import { hero } from '../content/de'

export function Hero() {
  const stats = [config.STATS.modules, config.STATS.members, config.STATS.liveCalls]

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24" id="hero">
      {/* Dezenter goldener Licht-Schein hinter der Headline */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(201,162,39,0.5), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold-light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            {hero.badge}
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-5xl font-semibold leading-[1.08] text-parchment sm:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {hero.headline.pre} <span className="text-gold-gradient">{hero.headline.highlight}</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slateink md:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {hero.subline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button to="/registrieren" variant="gold" className="w-full sm:w-auto">
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#fugger-pfad" variant="outline" className="w-full sm:w-auto">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Kennzahlen */}
      <div className="relative mx-auto mt-16 grid max-w-content grid-cols-1 gap-4 px-5 sm:grid-cols-3 md:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="kontor-card px-6 py-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            {stat.value !== null ? (
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                className="font-mono text-4xl font-semibold text-gold-light"
              />
            ) : (
              <span className="font-mono text-4xl font-semibold text-gold-light">{stat.text}</span>
            )}
            <p className="mt-2 text-sm uppercase tracking-widest text-slateink">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
