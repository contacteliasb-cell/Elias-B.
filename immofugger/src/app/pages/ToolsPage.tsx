import { Info } from 'lucide-react'
import { AnnuityCalculator } from '../../components/calculators/AnnuityCalculator'
import { CashflowCalculator } from '../../components/calculators/CashflowCalculator'
import { ExtrasCalculator } from '../../components/calculators/ExtrasCalculator'
import { YieldCalculator } from '../../components/calculators/YieldCalculator'
import { tools } from '../../content/de'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

/** /app/werkzeuge — alle vier Rechner (2 wiederverwendet, 2 neu). */
export function ToolsPage() {
  usePageTitle('Werkzeuge')
  return (
    <div>
      <AppPageHeader
        kicker="Werkzeuge"
        title="Rechne wie ein Kaufmann"
        subtitle="Vier Rechner für deine Objektanalyse — Mietrendite, Cashflow, Kaufnebenkosten und Annuität. Ergebnisse kannst du kopieren."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        <YieldCalculator />
        <CashflowCalculator />
        <ExtrasCalculator />
        <AnnuityCalculator />
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slateink">
        <Info className="h-3.5 w-3.5 shrink-0" />
        {tools.disclaimer}
      </p>
    </div>
  )
}
