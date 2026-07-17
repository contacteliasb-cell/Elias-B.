import { AlertTriangle } from 'lucide-react'
import { legal } from '../content/de'
import { usePageTitle } from '../lib/usePageTitle'

type LegalKey = 'impressum' | 'datenschutz' | 'disclaimer' | 'richtlinien'

type LegalPageProps = {
  page: LegalKey
}

/** Gemeinsames Layout für alle Rechts-/Richtlinien-Seiten. */
export function LegalPage({ page }: LegalPageProps) {
  const content = legal[page]
  usePageTitle(content.title)

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8">
      <h1 className="ledger-rule font-display text-4xl font-semibold text-parchment md:text-5xl">{content.title}</h1>

      <div className="mt-14 space-y-10">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl font-semibold text-parchment">{section.heading}</h2>
            {section.placeholder && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-bordeaux-light/50 bg-bordeaux/20 px-3.5 py-2 font-mono text-xs text-red-200">
                <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                {legal.placeholderNote}
              </p>
            )}
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slateink">{section.body}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
