import type { ReactNode } from 'react'

type AppPageHeaderProps = {
  kicker?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

/** Einheitlicher Seitenkopf im Mitgliederbereich — dichter als auf der Landingpage. */
export function AppPageHeader({ kicker, title, subtitle, children }: AppPageHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-8">
      <div>
        {kicker && <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{kicker}</p>}
        <h1 className="mt-1.5 font-display text-3xl font-semibold text-parchment md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slateink">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}
