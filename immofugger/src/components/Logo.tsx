type LogoProps = {
  className?: string
  withWordmark?: boolean
}

/**
 * Eigenes Signet: stilisiertes „F" in einem Siegel-Kreis mit
 * abstrahierter Lilien-Spitze — komplett selbst gezeichnetes SVG.
 */
export function Logo({ className = '', withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-label="ImmoFugger Signet"
      >
        <circle cx="32" cy="32" r="29" fill="none" stroke="#C9A227" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="24.5" fill="none" stroke="#C9A227" strokeWidth="0.75" opacity="0.5" />
        {/* Abstrahierte Lilien-Spitze oben */}
        <path d="M32 4.5 l2.6 4.4 h-5.2 Z" fill="#6E2B35" />
        {/* Stilisiertes F im Kontor-Duktus */}
        <path
          d="M25 46 V19 h15 M25 31.5 h11"
          fill="none"
          stroke="#E3C567"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
        <circle cx="42.5" cy="45.5" r="2" fill="#6E2B35" />
      </svg>
      {withWordmark && (
        <span className="font-display text-2xl font-semibold tracking-wide text-parchment">
          Immo<span className="text-gold-light">Fugger</span>
        </span>
      )}
    </span>
  )
}
