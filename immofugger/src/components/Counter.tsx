import { animate, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type CounterProps = {
  /** Zielwert */
  value: number
  /** Anhängsel wie „+" oder „ %" */
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

/** Zählt hoch, sobald das Element in den Viewport kommt. */
export function Counter({ value, suffix = '', prefix = '', className = '', duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString('de-DE')),
    })
    return () => controls.stop()
  }, [inView, value, duration, motionValue])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value.toLocaleString('de-DE')}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
