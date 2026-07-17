export type WikiCategory =
  | 'finanzierung'
  | 'recht'
  | 'steuern'
  | 'bewirtschaftung'
  | 'analyse'
  | 'markt'

export type WikiArticle = {
  /** URL-Slug, muss zu den wikiRefs im Blueprint passen */
  slug: string
  term: string
  category: WikiCategory
  /** Fließtext, Absätze durch \n\n getrennt */
  body: string
  legalHint?: boolean
}

export const CATEGORY_LABELS: Record<WikiCategory, string> = {
  finanzierung: 'Finanzierung',
  recht: 'Recht',
  steuern: 'Steuern',
  bewirtschaftung: 'Bewirtschaftung',
  analyse: 'Analyse',
  markt: 'Markt',
}
