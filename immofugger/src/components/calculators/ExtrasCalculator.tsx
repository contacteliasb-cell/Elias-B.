import { Info } from 'lucide-react'
import { useState } from 'react'
import { GRUNDERWERBSTEUER } from '../../config'
import { tools } from '../../content/de'
import { formatEuro, formatPercent } from '../../lib/format'
import { CopyResultButton, ResultRow, SliderField } from './primitives'

/** Kaufnebenkosten-Rechner: Grunderwerbsteuer nach Bundesland + Notar/Grundbuch + optional Makler. */
export function ExtrasCalculator() {
  const t = tools.extras
  const [price, setPrice] = useState(250000)
  const [stateIdx, setStateIdx] = useState(4) // Default: ein mittlerer Satz
  const [notaryPct, setNotaryPct] = useState(2)
  const [brokerPct, setBrokerPct] = useState(3.57)

  const state = GRUNDERWERBSTEUER.saetze[stateIdx]
  const tax = price * (state.satz / 100)
  const notary = price * (notaryPct / 100)
  const broker = price * (brokerPct / 100)
  const sum = tax + notary + broker
  const total = price + sum
  const pct = price > 0 ? (sum / price) * 100 : 0

  return (
    <div className="kontor-card flex h-full flex-col p-6 md:p-8">
      <h3 className="font-display text-2xl font-semibold text-parchment">{t.title}</h3>
      <p className="mt-1.5 text-sm text-slateink">{t.description}</p>

      <div className="mt-6 space-y-5">
        <SliderField label={t.inputs.price} value={price} min={50000} max={1000000} step={5000} unit="€" format={(v) => formatEuro(v)} onChange={setPrice} />

        <div>
          <label htmlFor="extras-state" className="mb-1.5 block text-sm text-parchment-dim">
            {t.inputs.state}
          </label>
          <select
            id="extras-state"
            value={stateIdx}
            onChange={(e) => setStateIdx(Number(e.target.value))}
            className="input-field"
          >
            {GRUNDERWERBSTEUER.saetze.map((s, i) => (
              <option key={s.land} value={i}>
                {s.land} — {formatPercent(s.satz, 1)}
              </option>
            ))}
          </select>
        </div>

        <SliderField label={t.inputs.notary} value={notaryPct} min={1} max={3} step={0.1} unit="%" format={(v) => formatPercent(v, 1)} onChange={setNotaryPct} />
        <SliderField label={t.inputs.broker} value={brokerPct} min={0} max={7.14} step={0.01} unit="%" format={(v) => formatPercent(v, 2)} onChange={setBrokerPct} />
      </div>

      <div className="mt-8 space-y-3">
        <ResultRow label={t.results.tax} value={formatEuro(tax)} hint={formatPercent(state.satz, 1)} />
        <ResultRow label={t.results.notary} value={formatEuro(notary)} />
        <ResultRow label={t.results.broker} value={formatEuro(broker)} />
        <ResultRow label={t.results.sum} value={formatEuro(sum)} hint={`${t.results.percentHint}: ${formatPercent(pct, 1)}`} accent />
        <ResultRow label={t.results.total} value={formatEuro(total)} accent />
      </div>

      <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-slateink">
        <Info className="mt-0.5 h-3 w-3 shrink-0" />
        {t.stateNote} {GRUNDERWERBSTEUER.standDatum} — {t.stateDisclaimer}
      </p>

      <div className="mt-3 flex justify-end">
        <CopyResultButton
          getText={() =>
            `Kaufnebenkosten-Rechner\nKaufpreis: ${formatEuro(price)}\nBundesland: ${state.land} (${formatPercent(state.satz, 1)})\n${t.results.tax}: ${formatEuro(tax)}\n${t.results.notary}: ${formatEuro(notary)}\n${t.results.broker}: ${formatEuro(broker)}\n${t.results.sum}: ${formatEuro(sum)}\n${t.results.total}: ${formatEuro(total)}`
          }
        />
      </div>
    </div>
  )
}
