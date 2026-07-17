import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import {
  CalendarMockup,
  ChatMockup,
  DealCardMockup,
  MarketFeedMockup,
  ModuleListMockup,
  WikiTagsMockup,
} from '../components/mockups/FeatureMockups'
import { features } from '../content/de'
import type { ReactNode } from 'react'

const mockupById: Record<string, ReactNode> = {
  blueprint: <ModuleListMockup />,
  wiki: <WikiTagsMockup />,
  deals: <DealCardMockup />,
  market: <MarketFeedMockup />,
  chats: <ChatMockup />,
  calls: <CalendarMockup />,
}

/** Asymmetrisches Bento-Grid: große Karten für Blueprint & Wiki, kompakte für den Rest. */
const spanById: Record<string, string> = {
  blueprint: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
  wiki: 'md:col-span-2 lg:col-span-2',
  deals: 'lg:col-span-2',
  market: 'lg:col-span-2',
  chats: 'md:col-span-2 lg:col-span-2',
  calls: 'md:col-span-2 lg:col-span-2',
}

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading kicker={features.kicker} headline={features.headline} subline={features.subline} />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.cards.map((card, i) => (
            <Reveal key={card.id} delay={(i % 3) * 0.1} className={spanById[card.id] ?? ''}>
              <article className="kontor-card group flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-semibold text-parchment group-hover:text-gold-pale">
                      {card.title}
                    </h3>
                    {card.soon && (
                      <span className="rounded border border-night-line bg-night px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-slateink">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slateink">{card.description}</p>
                </div>
                <div className={card.id === 'blueprint' ? 'mt-auto flex-1' : 'mt-auto'}>
                  {mockupById[card.id]}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
