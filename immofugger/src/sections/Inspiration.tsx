import { Reveal } from '../components/Reveal'
import { inspiration } from '../content/de'

export function Inspiration() {
  return (
    <section id="inspiration" className="relative overflow-hidden py-20 md:py-28">
      {/* Große goldene Jahreszahl im Hintergrund */}
      <span
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[11rem] font-bold leading-none text-gold/[0.07] md:text-[20rem]"
        aria-hidden="true"
      >
        {inspiration.year}
      </span>

      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{inspiration.kicker}</span>
            <h2 className="ledger-rule mt-4 font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl">
              {inspiration.headline}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-6">
            {inspiration.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <p className="leading-relaxed text-slateink md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-12 border-l-2 border-gold pl-6 md:pl-8">
              <p className="font-display text-2xl font-medium italic leading-snug text-parchment md:text-3xl">
                „{inspiration.quote}"
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
