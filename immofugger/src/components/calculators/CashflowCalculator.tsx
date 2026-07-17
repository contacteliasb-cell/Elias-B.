import { useState } from 'react'
import { tools } from '../../content/de'
import { formatEuro, formatPercent } from '../../lib/format'
import { CopyResultButton, ResultRow, SliderField } from './primitives'

/** Cashflow-Schnellcheck — monatlicher Cashflow vor Steuern, farbcodiert. */
export function CashflowCalculator() {
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

      <p className={`mt-5 rounded-lg border px-4 py-3 text-sm font-medium ${status.classes}`} role="status" aria-live="polite">
        {status.text}
      </p>

      <div className="mt-4 flex justify-end">
        <CopyResultButton
          getText={() =>
            `Cashflow-Schnellcheck\nKaufpreis: ${formatEuro(price)}\nEigenkapital: ${formatEuro(equity)}\nDarlehen: ${formatEuro(loan)}\nRate/Monat: ${formatEuro(monthlyRate, 0)}\n${t.results.cashflow}: ${formatEuro(cashflow, 0)}`
          }
        />
      </div>
    </div>
  )
}
