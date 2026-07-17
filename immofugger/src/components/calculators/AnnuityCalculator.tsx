import { useMemo, useState } from 'react'
import { tools } from '../../content/de'
import { formatEuro, formatPercent } from '../../lib/format'
import { CopyResultButton, ResultRow, SliderField } from './primitives'

/**
 * Annuitäten-Rechner: konstante Monatsrate, Restschuld nach Zinsbindung und
 * ein selbst gezeichneter SVG-Tilgungsverlauf (keine Chart-Bibliothek).
 */
export function AnnuityCalculator() {
  const t = tools.annuity
  const [loan, setLoan] = useState(200000)
  const [interest, setInterest] = useState(3.8)
  const [repayment, setRepayment] = useState(2)
  const [years, setYears] = useState(10)

  const { rate, remaining, paidInterest, paidRepayment, curve } = useMemo(() => {
    const annuity = (loan * (interest + repayment)) / 100 // pro Jahr
    const monthlyRate = annuity / 12
    const monthlyInterestRate = interest / 100 / 12
    const months = years * 12

    let balance = loan
    let totalInterest = 0
    const points: number[] = [loan]
    for (let m = 0; m < months; m++) {
      const interestPart = balance * monthlyInterestRate
      const repaymentPart = monthlyRate - interestPart
      totalInterest += interestPart
      balance = Math.max(balance - repaymentPart, 0)
      if ((m + 1) % 12 === 0) points.push(balance)
    }
    return {
      rate: monthlyRate,
      remaining: balance,
      paidInterest: totalInterest,
      paidRepayment: loan - balance,
      curve: points,
    }
  }, [loan, interest, repayment, years])

  // SVG-Pfad des Tilgungsverlaufs
  const W = 100
  const H = 40
  const maxVal = curve[0] || 1
  const polyline = curve
    .map((v, i) => `${(i / (curve.length - 1)) * W},${H - (v / maxVal) * H}`)
    .join(' ')

  return (
    <div className="kontor-card flex h-full flex-col p-6 md:p-8">
      <h3 className="font-display text-2xl font-semibold text-parchment">{t.title}</h3>
      <p className="mt-1.5 text-sm text-slateink">{t.description}</p>

      <div className="mt-6 space-y-5">
        <SliderField label={t.inputs.loan} value={loan} min={20000} max={1000000} step={5000} unit="€" format={(v) => formatEuro(v)} onChange={setLoan} />
        <SliderField label={t.inputs.interest} value={interest} min={0.5} max={8} step={0.1} unit="%" format={(v) => formatPercent(v, 1)} onChange={setInterest} />
        <SliderField label={t.inputs.repayment} value={repayment} min={1} max={5} step={0.25} unit="%" format={(v) => formatPercent(v, 2)} onChange={setRepayment} />
        <SliderField label={t.inputs.years} value={years} min={5} max={30} step={1} unit="Jahre" format={(v) => `${v} Jahre`} onChange={setYears} />
      </div>

      <div className="mt-8 space-y-3">
        <ResultRow label={t.results.rate} value={formatEuro(rate, 0)} accent />
        <ResultRow label={t.results.paidInterest} value={formatEuro(paidInterest, 0)} />
        <ResultRow label={t.results.paidRepayment} value={formatEuro(paidRepayment, 0)} />
        <ResultRow label={t.results.remaining} value={formatEuro(remaining, 0)} accent />
      </div>

      {/* Selbst gezeichneter Tilgungsverlauf */}
      <div className="mt-6">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-slateink">{t.results.chartTitle}</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-24 w-full" preserveAspectRatio="none" role="img" aria-label={t.results.chartTitle}>
          <defs>
            <linearGradient id="annuityFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,${H} ${polyline} ${W},${H}`} fill="url(#annuityFill)" />
          <polyline points={polyline} fill="none" stroke="#E3C567" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-slateink">
          <span>{t.results.chartLabelStart}: {formatEuro(loan, 0)}</span>
          <span>{t.results.chartLabelEnd}: {formatEuro(remaining, 0)}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <CopyResultButton
          getText={() =>
            `Annuitäten-Rechner\nDarlehen: ${formatEuro(loan)}\nZins: ${formatPercent(interest, 1)}, Tilgung: ${formatPercent(repayment, 2)}\nZinsbindung: ${years} Jahre\n${t.results.rate}: ${formatEuro(rate, 0)}\n${t.results.remaining}: ${formatEuro(remaining, 0)}`
          }
        />
      </div>
    </div>
  )
}
