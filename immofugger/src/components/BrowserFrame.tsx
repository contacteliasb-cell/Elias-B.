import type { ReactNode } from 'react'

type BrowserFrameProps = {
  url: string
  children: ReactNode
  className?: string
}

/** Edler Browser-Rahmen für Mockups — komplett selbst gebaut. */
export function BrowserFrame({ url, children, className = '' }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-night-line bg-night-card shadow-card ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-night-line bg-night-soft px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-bordeaux-light/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
        </div>
        <div className="flex-1 truncate rounded-md border border-night-line bg-night px-3 py-1 font-mono text-[11px] text-slateink">
          {url}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
