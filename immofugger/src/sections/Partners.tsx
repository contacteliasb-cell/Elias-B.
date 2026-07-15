import { Reveal } from '../components/Reveal'
import { config } from '../config'
import { partners } from '../content/de'

/** Schmale, dezente Leiste — neutrale Platzhalter statt fremder Logos. */
export function Partners() {
  return (
    <section aria-label={partners.title} className="border-y border-night-line/60 py-10">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-slateink">
            {partners.title}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {config.PARTNERS.map((name, i) => (
              <span
                key={i}
                className="font-display text-lg italic text-slateink/50"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
