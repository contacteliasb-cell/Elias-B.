import { Reveal } from './Reveal'

type SectionHeadingProps = {
  kicker: string
  headline: string
  subline?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ kicker, headline, subline, align = 'center' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClasses} mb-12 md:mb-16`}>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
        {kicker}
      </span>
      <h2 className="font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl">
        {headline}
      </h2>
      {subline && (
        <p className={`max-w-2xl text-base leading-relaxed text-slateink md:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
          {subline}
        </p>
      )}
    </Reveal>
  )
}
