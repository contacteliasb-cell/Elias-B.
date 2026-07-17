import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

type SliderFieldProps = {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
  format?: (v: number) => string
}

/** Touch-tauglicher Gold-Slider mit Label und Live-Wert. */
export function SliderField({ label, value, min, max, step, unit, onChange, format }: SliderFieldProps) {
  const id = 'sf-' + label.toLowerCase().replace(/[^a-zäöü0-9]+/g, '-')
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm text-parchment-dim">
          {label}
        </label>
        <span className="font-mono text-sm font-medium text-gold-light">
          {format ? format(value) : `${value.toLocaleString('de-DE')} ${unit}`}
        </span>
      </div>
      <input
        id={id}
        type="range"
        className="gold-slider mt-2"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={format ? format(value) : `${value} ${unit}`}
      />
    </div>
  )
}

export function ResultRow({
  label,
  value,
  hint,
  accent = false,
}: {
  label: string
  value: string
  hint?: string
  accent?: boolean
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-dotted border-night-line pb-2.5">
      <div>
        <p className="text-sm text-parchment-dim">{label}</p>
        {hint && <p className="mt-0.5 text-[11px] text-slateink">{hint}</p>}
      </div>
      <span className={`font-mono text-lg font-semibold ${accent ? 'text-gold-light' : 'text-parchment'}`}>{value}</span>
    </div>
  )
}

/** Kleiner „Werte kopieren"-Button für Rechner-Ergebnisse. */
export function CopyResultButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false)
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(getText())
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* Clipboard nicht verfügbar — still ignorieren */
    }
  }
  return (
    <button
      onClick={onCopy}
      className="inline-flex items-center gap-1.5 rounded-md border border-night-line px-2.5 py-1 font-mono text-[11px] text-slateink transition-colors hover:border-gold/40 hover:text-gold-light"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Kopiert' : 'Werte kopieren'}
    </button>
  )
}
