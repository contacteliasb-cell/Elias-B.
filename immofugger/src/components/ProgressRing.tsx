type ProgressRingProps = {
  /** 0–100 */
  percent: number
  size?: number
  stroke?: number
  label?: string
}

/** Goldener Fortschrittsring (SVG) für Modul-Übersichten. */
export function ProgressRing({ percent, size = 48, stroke = 4, label }: ProgressRingProps) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, percent)) / 100) * circumference
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#232C3B" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#C9A227"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <span className="absolute font-mono text-[10px] font-semibold text-gold-light">
        {label ?? `${Math.round(percent)}%`}
      </span>
    </div>
  )
}
