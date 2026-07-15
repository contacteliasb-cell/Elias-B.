import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { hero } from '../../content/de'
import { BrowserFrame } from '../BrowserFrame'

/** Animiertes Plattform-Dashboard für die Hero-Sektion — reines HTML/CSS/SVG. */
export function DashboardMockup() {
  const m = hero.mockup
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  // Beispielhafte Chart-Punkte (Rendite-Verlauf, rein illustrativ)
  const points = [28, 26, 24, 25, 22, 20, 21, 18, 16, 15, 13, 12]
  const polyline = points.map((y, i) => `${(i / (points.length - 1)) * 100},${y}`).join(' ')

  return (
    <BrowserFrame url={m.url}>
      <div ref={ref} className="grid gap-3 bg-night p-4 sm:grid-cols-2">
        {/* Lernfortschritt */}
        <div className="kontor-card p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slateink">{m.progressTitle}</p>
          <p className="mt-2 text-sm font-medium text-parchment">{m.progressModule}</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-night-line">
            <motion.div
              className="h-full rounded-full bg-gold-gradient"
              initial={{ width: 0 }}
              animate={inView ? { width: `${m.progressPercent}%` } : {}}
              transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 font-mono text-xs text-gold-light">{m.progressPercent} %</p>
        </div>

        {/* Rendite-Chart */}
        <div className="kontor-card p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slateink">{m.chartTitle}</p>
          <div className="mt-2 flex items-end justify-between">
            <span className="font-mono text-2xl font-semibold text-gold-light">{m.chartValue}</span>
          </div>
          <svg viewBox="0 0 100 32" className="mt-2 h-10 w-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A227" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.polyline
              points={polyline}
              fill="none"
              stroke="#E3C567"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
            />
            <polygon points={`0,32 ${polyline} 100,32`} fill="url(#chartFill)" opacity={inView ? 1 : 0} />
          </svg>
          <p className="mt-1 text-[11px] text-slateink">{m.chartCaption}</p>
        </div>

        {/* Community-Feed */}
        <div className="kontor-card p-4 sm:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slateink">{m.feedTitle}</p>
          <ul className="mt-3 space-y-2.5">
            {m.feedMessages.map((msg, i) => (
              <motion.li
                key={msg.name}
                className="flex items-start gap-2.5"
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.25 }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-[10px] font-semibold text-gold-light">
                  {msg.name[0]}
                </span>
                <p className="text-xs leading-relaxed text-parchment-dim">
                  <span className="font-semibold text-parchment">{msg.name}</span> — {msg.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </BrowserFrame>
  )
}
