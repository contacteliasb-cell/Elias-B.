import { Info } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { tools } from '../content/de'
import { formatEuro, formatPercent } from '../lib/format'

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

function SliderField({ label, value, min, max, step, unit, onChange, format }: SliderFieldProps) {
  const id = label.toLowerCase().replace(/[^a-zäöü0-9]+/g, '-')
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
      />
    </div>
  )
}

function ResultRow({ label, value, hint, accent = false }: { label: string; value: string; hint?: string; accent?: boolean }) {
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

function YieldCalculator() {
  const t = tools.yield
  const [price, setPrice] = useState(250000)
  const [extrasPct, setExtrasPct] = useState(10)
  const [rent, setRent] = useState(900)
  const [costs, setCosts] = useState(80)

  const annualRent = rent * 12
  const totalCost = price * (1 + extrasPct / 100)
  const gross = price > 0 ? (annualRent / price) * 100 : 0
  const net = totalCost > 0 ? ((annualRent - costs * 12) / totalCost) * 100 : 0

  return (
    <div className="kontor-card flex h-full flex-col p-6 md:p-8">
      <h3 className="font-display text-2xl font-semibold text-parchment">{t.title}</h3>
      <p className="mt-1.5 text-sm text-slateink">{t.description}</p>

      <div className="mt-6 space-y-5">
        <SliderField label={t.inputs.price} value={price} min={50000} max={1000000} step={5000} unit="€" format={(v) => formatEuro(v)} onChange={setPrice} />
        <SliderField label={t.inputs.extras} value={extrasPct} min={0} max={15} step={0.5} unit="%" format={(v) => formatPercent(v, 1)} onChange={setExtrasPct} />
        <SliderField label={t.inputs.rent} value={rent} min={200} max={4000} step={10} unit="€" format={(v) => formatEuro(v)} onChange={setRent} />
        <SliderField label={t.inputs.costs} value={costs} min={0} max={600} step={10} unit="€" format={(v) => formatEuro(v)} onChange={setCosts} />
      </div>

      <div className="mt-8 space-y-3">
        <ResultRow label={t.results.gross} hint={t.results.grossHint} value={formatPercent(gross, 2)} accent />
        <ResultRow label={t.results.net} hint={t.results.netHint} value={formatPercent(net, 2)} accent />
      </div>
    </div>
  )
}

function CashflowCalculator() {
  const t = tools.cashflow
  const [price, setPrice] = useState(250000)
  const [equity, setEquity] = useState(50000)
  const [interest, setInterest] = useState(3.8)
  const [repayment, setRepayment] = useState(2)
  const [rent, setRent] = useState(900)
  const [costs, setCosts] = useState(220)

  const loan = Math.max(price - equity, 0)
  const monthlyRate = (loan * (interest + repayment)) / 100 / 12
  const cashflow = rent - costs - monthlyRate

  const status =
    cashflow >= 25
      ? { text: t.results.positive, classes: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' }
      : cashflow > -25
        ? { text: t.results.neutral, classes: 'border-gold/40 bg-gold/10 text-gold-light' }
        : { text: t.results.negative, classes: 'border-bordeaux-light/50 bg-bordeaux/20 text-red-300' }

  return (
    <div className="kontor-card flex h-full flex-col p-6 md:p-8">
      <h3 className="font-display text-2xl font-semibold text-parchment">{t.title}</h3>
      <p className="mt-1.5 text-sm text-slateink">{t.description}</p>

      <div className="mt-6 space-y-5">
        <SliderField label={t.inputs.price} value={price} min={50000} max={1000000} step={5000} unit="€" format={(v) => formatEuro(v)} onChange={setPrice} />
        <SliderField label={t.inputs.equity} value={equity} min={0} max={500000} step={5000} unit="€" format={(v) => formatEuro(v)} onChange={setEquity} />
        <SliderField label={t.inputs.interest} value={interest} min={0.5} max={8} step={0.1} unit="%" format={(v) => formatPercent(v, 1)} onChange={setInterest} />
        <SliderField label={t.inputs.repayment} value={repayment} min={1} max={5} step={0.25} unit="%" format={(v) => formatPercent(v, 2)} onChange={setRepayment} />
        <SliderField label={t.inputs.rent} value={rent} min={200} max={4000} step={10} unit="€" format={(v) => formatEuro(v)} onChange={setRent} />
        <SliderField label={t.inputs.costs} value={costs} min={0} max={1200} step={10} unit="€" format={(v) => formatEuro(v)} onChange={setCosts} />
      </div>

      <div className="mt-8 space-y-3">
        <ResultRow label={t.results.loan} value={formatEuro(loan)} />
        <ResultRow label={t.results.rate} value={formatEuro(monthlyRate, 0)} />
        <ResultRow label={t.results.cashflow} value={formatEuro(cashflow, 0)} accent />
      </div>

      <p
        className={`mt-5 rounded-lg border px-4 py-3 text-sm font-medium ${status.classes}`}
        role="status"
        aria-live="polite"
      >
        {status.text}
      </p>
    </div>
  )
}

export function Tools() {
  return (
    <section id="tools" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading kicker={tools.kicker} headline={tools.headline} subline={tools.subline} />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <YieldCalculator />
          </Reveal>
          <Reveal delay={0.12}>
            <CashflowCalculator />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slateink">
            <Info className="h-3.5 w-3.5 shrink-0" />
            {tools.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
