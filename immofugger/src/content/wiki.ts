import { analyseArticles } from './wiki/articles-analyse'
import { bewirtschaftungArticles } from './wiki/articles-bewirtschaftung'
import { finanzierungArticles } from './wiki/articles-finanzierung'
import { rechtArticles } from './wiki/articles-recht'
import { steuernArticles } from './wiki/articles-steuern'
import { CATEGORY_LABELS, type WikiArticle, type WikiCategory } from './wiki/types'

export type { WikiArticle, WikiCategory } from './wiki/types'
export { CATEGORY_LABELS } from './wiki/types'

/** Alle Wiki-Artikel, alphabetisch nach Begriff sortiert. */
export const wikiArticles: WikiArticle[] = [
  ...finanzierungArticles,
  ...analyseArticles,
  ...rechtArticles,
  ...steuernArticles,
  ...bewirtschaftungArticles,
].sort((a, b) => a.term.localeCompare(b.term, 'de'))

export const wikiCategories = Object.keys(CATEGORY_LABELS) as WikiCategory[]

const bySlug = new Map(wikiArticles.map((a) => [a.slug, a]))

export function getArticle(slug: string): WikiArticle | undefined {
  return bySlug.get(slug)
}

/**
 * Baut eine Suchtabelle für die automatische Querverlinkung:
 * Begriff (und einfache Varianten) → Slug. Längere Begriffe zuerst,
 * damit „Netto-Mietrendite" vor „Mietrendite" greift.
 */
type LinkEntry = { needle: string; slug: string }

const linkTable: LinkEntry[] = (() => {
  const entries: LinkEntry[] = []
  for (const a of wikiArticles) {
    // Der Term selbst plus der Teil vor einer Klammer (z. B. „AfA" aus „AfA (Abschreibung)")
    const base = a.term.replace(/\s*\(.*\)\s*/, '').trim()
    const variants = new Set<string>([a.term, base])
    for (const v of variants) {
      if (v.length >= 4) entries.push({ needle: v, slug: a.slug })
    }
  }
  return entries.sort((x, y) => y.needle.length - x.needle.length)
})()

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export type ArticleSegment = { text: string; slug?: string }

/**
 * Zerlegt einen Artikeltext in Segmente und markiert das jeweils erste
 * Vorkommen jedes anderen Wiki-Begriffs als Link (Slug gesetzt).
 * Der eigene Begriff wird nicht verlinkt; jeder Ziel-Slug höchstens einmal.
 */
export function linkifyArticle(body: string, selfSlug: string): ArticleSegment[] {
  const used = new Set<string>([selfSlug])
  let segments: ArticleSegment[] = [{ text: body }]

  for (const entry of linkTable) {
    if (used.has(entry.slug)) continue
    const re = new RegExp(`\\b${escapeRegExp(entry.needle)}\\b`)
    const next: ArticleSegment[] = []
    let linked = false
    for (const seg of segments) {
      if (linked || seg.slug) {
        next.push(seg)
        continue
      }
      const m = seg.text.match(re)
      if (!m || m.index === undefined) {
        next.push(seg)
        continue
      }
      const before = seg.text.slice(0, m.index)
      const match = seg.text.slice(m.index, m.index + m[0].length)
      const after = seg.text.slice(m.index + m[0].length)
      if (before) next.push({ text: before })
      next.push({ text: match, slug: entry.slug })
      if (after) next.push({ text: after })
      linked = true
      used.add(entry.slug)
    }
    segments = next
  }

  return segments
}
