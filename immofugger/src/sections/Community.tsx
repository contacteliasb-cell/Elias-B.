import { MessageCircle, Sparkles, Trophy, Users } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { community } from '../content/de'

const cardIcons = [Users, Trophy, Sparkles]

export function Community() {
  const chat = community.chatMockup

  return (
    <section id="community" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <SectionHeading kicker={community.kicker} headline={community.headline} subline={community.subline} />

        <div className="grid items-start gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Großes Chat-Mockup */}
          <Reveal>
            <div className="kontor-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-night-line bg-night-soft px-5 py-3">
                <span className="flex items-center gap-2 font-mono text-sm text-gold-light">
                  <MessageCircle className="h-4 w-4" />
                  {chat.channel}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-slateink">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  {chat.online}
                </span>
              </div>
              <ul className="space-y-5 p-5 md:p-6">
                {chat.messages.map((msg, i) => (
                  <Reveal key={i} delay={0.15 + i * 0.12} y={16}>
                    <li className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-xs font-semibold text-gold-light">
                        {msg.name[0]}
                      </span>
                      <div>
                        <p className="flex flex-wrap items-baseline gap-2">
                          <span className="text-sm font-semibold text-parchment">{msg.name}</span>
                          <span className="rounded border border-gold/25 bg-gold/5 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-gold-light">
                            {msg.level}
                          </span>
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-parchment-dim">{msg.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Karten */}
          <div className="flex flex-col gap-4">
            {community.cards.map((card, i) => {
              const Icon = cardIcons[i % cardIcons.length]
              return (
                <Reveal key={card.title} delay={0.1 + i * 0.12}>
                  <article className="kontor-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/25 bg-gold/10">
                        <Icon className="h-5 w-5 text-gold-light" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-parchment">{card.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slateink">{card.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
