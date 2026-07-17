import { ArrowLeft, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import {
  CATEGORY_LABELS,
  getArticle,
  linkifyArticle,
  wikiArticles,
  wikiCategories,
  type WikiCategory,
} from '../../content/wiki'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

export function WikiPage() {
  const { slug } = useParams()
  if (slug) return <WikiArticleView slug={slug} />
  return <WikiIndex />
}

function WikiIndex() {
  usePageTitle('Wiki')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<WikiCategory | 'alle'>('alle')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return wikiArticles.filter((a) => {
      if (category !== 'alle' && a.category !== category) return false
      if (!q) return true
      return a.term.toLowerCase().includes(q) || a.body.toLowerCase().includes(q)
    })
  }, [query, category])

  return (
    <div>
      <AppPageHeader
        kicker="Immobilien-Wiki"
        title="Vernetztes Wissen"
        subtitle={`${wikiArticles.length} Begriffe, verständlich erklärt und automatisch miteinander verknüpft. Such nach einem Begriff oder filtere nach Thema.`}
      />

      {/* Suche */}
      <div className="relative mb-4">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Begriff suchen …"
          aria-label="Wiki durchsuchen"
          className="input-field pl-10"
        />
      </div>

      {/* Kategorie-Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <FilterChip active={category === 'alle'} onClick={() => setCategory('alle')} label="Alle" />
        {wikiCategories.map((c) => (
          <FilterChip key={c} active={category === c} onClick={() => setCategory(c)} label={CATEGORY_LABELS[c]} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-slateink">
          Kein Artikel gefunden. Versuch einen anderen Begriff.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((a) => (
            <Link
              key={a.slug}
              to={`/app/wiki/${a.slug}`}
              className="kontor-card group p-4 transition-all hover:-translate-y-0.5 hover:border-gold/40"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-display text-lg font-semibold text-parchment group-hover:text-gold-pale">{a.term}</h2>
                <span className="shrink-0 rounded border border-night-line px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-slateink">
                  {CATEGORY_LABELS[a.category]}
                </span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slateink">{a.body}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
        active ? 'border-gold bg-gold/10 text-gold-light' : 'border-night-line text-slateink hover:border-gold/40 hover:text-parchment-dim'
      }`}
    >
      {label}
    </button>
  )
}

function WikiArticleView({ slug }: { slug: string }) {
  const article = getArticle(slug)
  usePageTitle(article?.term ?? 'Wiki')

  if (!article) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <p className="text-slateink">Dieser Artikel wurde nicht gefunden.</p>
        <Button to="/app/wiki" variant="outline" className="mt-6">
          Zum Wiki
        </Button>
      </div>
    )
  }

  const paragraphs = article.body.split('\n\n')

  return (
    <div className="mx-auto max-w-2xl">
      <Link to="/app/wiki" className="inline-flex items-center gap-1.5 text-xs text-slateink hover:text-gold-light">
        <ArrowLeft className="h-3.5 w-3.5" /> Zum Wiki
      </Link>

      <div className="mt-3 flex items-center gap-3">
        <h1 className="font-display text-4xl font-semibold text-parchment">{article.term}</h1>
        <span className="rounded border border-gold/30 bg-gold/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold-light">
          {CATEGORY_LABELS[article.category]}
        </span>
      </div>

      <article className="ledger-rule mt-8 space-y-4 border-none">
        {paragraphs.map((para, i) => (
          <p key={i} className="leading-relaxed text-slateink">
            {linkifyArticle(para, article.slug).map((seg, j) =>
              seg.slug ? (
                <Link key={j} to={`/app/wiki/${seg.slug}`} className="text-gold-light underline decoration-gold/40 underline-offset-2 hover:decoration-gold">
                  {seg.text}
                </Link>
              ) : (
                <span key={j}>{seg.text}</span>
              ),
            )}
          </p>
        ))}
      </article>

      {article.legalHint && (
        <p className="mt-6 text-xs italic text-slateink">Bildungsinhalt — ersetzt keine Rechts- oder Steuerberatung.</p>
      )}
    </div>
  )
}
