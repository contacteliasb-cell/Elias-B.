import { BadgeCheck, Check, Clock } from 'lucide-react'
import { Button } from '../components/Button'
import { Counter } from '../components/Counter'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { config } from '../config'
import { pricing } from '../content/de'

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading kicker={pricing.kicker} headline={pricing.headline} subline={pricing.subline} />

        <Reveal className="mx-auto max-w-2xl">
          <div className="relative rounded-2xl border border-gold/50 bg-night-card p-8 shadow-gold-glow md:p-12">
            {/* Siegel-Badge */}
            <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold bg-night px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              <BadgeCheck className="h-3.5 w-3.5" />
              {pricing.badge}
            </span>

            <div className="text-center">
              <p className="font-mono text-sm text-slateink">
                <Counter
                  value={config.MEMBER_COUNT_NUMERIC}
                  suffix="+"
                  className="text-lg font-semibold text-gold-light"
                />{' '}
                {pricing.membersLabel}
              </p>
              <p className="mt-4 flex items-baseline justify-center gap-2">
                <span className="font-display text-7xl font-bold lining-nums text-parchment md:text-8xl">{pricing.price}</span>
                <span className="text-lg text-slateink">{pricing.period}</span>
              </p>
            </div>

            <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {pricing.features.map((f) => (
                <li key={f.label} className="flex items-start gap-2.5 text-sm">
                  {f.soon ? (
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slateink" />
                  ) : (
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  )}
                  <span className={f.soon ? 'text-slateink' : 'text-parchment-dim'}>
                    {f.label}
                    {f.soon && (
                      <span className="ml-1.5 rounded border border-night-line bg-night px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-slateink">
                        Coming Soon
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <Button to="/registrieren" variant="gold" className="w-full sm:w-auto sm:px-10">
                {pricing.cta}
              </Button>
              <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-slateink">{pricing.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
