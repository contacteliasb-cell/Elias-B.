import { useState } from 'react'
import { tools } from '../../content/de'
import { formatEuro, formatPercent } from '../../lib/format'
import { CopyResultButton, ResultRow, SliderField } from './primitives'

/** Mietrendite-Rechner — Brutto und Netto, live. Wiederverwendbar auf Landing & App. */
export function YieldCalculator() {
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

      <div className="mt-4 flex justify-end">
        <CopyResultButton
          getText={() =>
            `Mietrendite-Rechner\nKaufpreis: ${formatEuro(price)}\nKaufnebenkosten: ${formatPercent(extrasPct, 1)}\nKaltmiete/Monat: ${formatEuro(rent)}\n${t.results.gross}: ${formatPercent(gross, 2)}\n${t.results.net}: ${formatPercent(net, 2)}`
          }
        />
      </div>
    </div>
  )
}
