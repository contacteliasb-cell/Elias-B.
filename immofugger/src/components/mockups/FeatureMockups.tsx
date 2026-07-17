import { CalendarDays, TrendingUp } from 'lucide-react'
import { features } from '../../content/de'

/** Mini-Mockups für das Bento-Grid — alle selbst gebaut aus HTML/CSS/SVG. */

const [blueprint, wiki, deals, market, chats, calls] = features.cards

export function ModuleListMockup() {
  return (
    <div className="flex h-full flex-col justify-evenly gap-3" aria-hidden="true">
      {blueprint.mockup.modules!.map((mod) => (
        <div key={mod.name} className="rounded-lg border border-night-line bg-night-soft px-3 py-2">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-xs text-parchment-dim">{mod.name}</span>
            <span className="font-mono text-[10px] text-gold-light">{mod.progress} %</span>
          </div>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-night-line">
            <div className="h-full rounded-full bg-gold-gradient" style={{ width: `${mod.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function WikiTagsMockup() {
  const tags = wiki.mockup.tags!
  return (
    <div className="relative h-full min-h-[9rem]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden="true">
        <line x1="18%" y1="22%" x2="55%" y2="45%" stroke="#C9A227" strokeWidth="1" />
        <line x1="55%" y1="45%" x2="30%" y2="75%" stroke="#C9A227" strokeWidth="1" />
        <line x1="55%" y1="45%" x2="82%" y2="25%" stroke="#C9A227" strokeWidth="1" />
        <line x1="82%" y1="25%" x2="72%" y2="70%" stroke="#C9A227" strokeWidth="1" />
        <line x1="30%" y1="75%" x2="72%" y2="70%" stroke="#C9A227" strokeWidth="1" />
      </svg>
      {tags.map((tag, i) => {
        const positions = [
          'left-[4%] top-[12%]',
          'left-[44%] top-[36%]',
          'left-[16%] top-[66%]',
          'left-[68%] top-[14%]',
          'left-[58%] top-[62%]',
          'left-[30%] top-[38%] hidden sm:block',
          'left-[6%] top-[42%] hidden md:block',
          'left-[76%] top-[42%] hidden md:block',
        ]
        return (
          <span
            key={tag}
            className={`absolute rounded-full border border-gold/30 bg-night-soft px-2.5 py-1 font-mono text-[10px] text-gold-pale ${positions[i % positions.length]}`}
          >
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export function DealCardMockup() {
  const m = deals.mockup
  return (
    <div className="rounded-lg border border-night-line bg-night-soft p-3.5" aria-hidden="true">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold text-parchment">{m.title}</span>
        <span className="rounded bg-bordeaux/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-parchment-dim">
          {m.location}
        </span>
      </div>
      <dl className="mt-3 space-y-1.5">
        {m.rows!.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between border-b border-dotted border-night-line pb-1">
            <dt className="text-[11px] text-slateink">{row.label}</dt>
            <dd className="font-mono text-[11px] font-medium text-gold-light">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2.5 font-mono text-[10px] text-parchment-dim">→ {m.verdict}</p>
    </div>
  )
}

export function MarketFeedMockup() {
  return (
    <div className="space-y-2" aria-hidden="true">
      {market.mockup.items!.map((item) => (
        <div key={item.title} className="flex items-center gap-3 rounded-lg border border-night-line bg-night-soft px-3 py-2.5">
          <TrendingUp className="h-3.5 w-3.5 shrink-0 text-gold" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="rounded bg-gold/15 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-gold-light">
                {item.tag}
              </span>
              <span className="font-mono text-[9px] text-slateink">{item.time}</span>
            </div>
            <p className="mt-0.5 truncate text-xs text-parchment-dim">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ChatMockup() {
  const m = chats.mockup
  return (
    <div className="rounded-lg border border-night-line bg-night-soft p-3.5" aria-hidden="true">
      <p className="border-b border-night-line pb-2 font-mono text-[10px] text-gold-light">{m.channel}</p>
      <ul className="mt-2.5 space-y-2.5">
        {m.messages!.map((msg, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-[9px] font-semibold text-gold-light">
              {msg.name[0]}
            </span>
            <p className="text-[11px] leading-relaxed text-parchment-dim">
              <span className="font-semibold text-parchment">{msg.name}:</span> {msg.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CalendarMockup() {
  const m = calls.mockup
  return (
    <div className="rounded-lg border border-night-line bg-night-soft p-3.5" aria-hidden="true">
      <div className="flex items-center gap-2 border-b border-night-line pb-2">
        <CalendarDays className="h-3.5 w-3.5 text-gold" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slateink">{m.month}</span>
      </div>
      <ul className="mt-2.5 space-y-2">
        {m.events!.map((ev) => (
          <li key={ev.title} className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-md border border-gold/25 bg-night">
              <span className="font-mono text-[8px] uppercase text-slateink">{ev.day}</span>
              <span className="font-mono text-xs font-semibold text-gold-light">{ev.date}</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs text-parchment-dim">{ev.title}</p>
              <p className="font-mono text-[10px] text-slateink">{ev.time} Uhr</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
