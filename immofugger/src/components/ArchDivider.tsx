type ArchDividerProps = {
  className?: string
  flip?: boolean
}

/**
 * Dezenter Section-Divider aus wiederholten Torbogen-Formen —
 * eine Anspielung auf die Arkaden der Fuggerei-Architektur.
 */
export function ArchDivider({ className = '', flip = false }: ArchDividerProps) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className={`h-8 w-full opacity-25 ${flip ? 'rotate-180' : ''}`}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 80} 40 V24 Q${i * 80} 4 ${i * 80 + 20} 4 Q${i * 80 + 40} 4 ${i * 80 + 40} 24 V40 M${i * 80 + 40} 40 V24 Q${i * 80 + 40} 4 ${i * 80 + 60} 4 Q${i * 80 + 80} 4 ${i * 80 + 80} 24 V40`}
            fill="none"
            stroke="#C9A227"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  )
}
