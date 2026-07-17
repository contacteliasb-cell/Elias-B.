import { Info } from 'lucide-react'
import { CashflowCalculator } from '../components/calculators/CashflowCalculator'
import { YieldCalculator } from '../components/calculators/YieldCalculator'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { tools } from '../content/de'

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
