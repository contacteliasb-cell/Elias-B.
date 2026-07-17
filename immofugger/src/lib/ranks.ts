import type { LessonProgress } from './backend'

/**
 * Rang-Logik des Fugger-Pfads.
 * Der Rang berechnet sich aus der Zahl abgeschlossener Lektionen (42 gesamt):
 *   Lehrling ab 0 · Geselle ab 8 · Kaufmann ab 18 · Handelsherr ab 30 · Fugger ab 42.
 * (Schwellen dokumentiert in DECISIONS.md.)
 */

export type Rank = {
  slug: string
  name: string
  /** Mindestzahl abgeschlossener Lektionen */
  threshold: number
}

export const RANKS: Rank[] = [
  { slug: 'lehrling', name: 'Lehrling', threshold: 0 },
  { slug: 'geselle', name: 'Geselle', threshold: 8 },
  { slug: 'kaufmann', name: 'Kaufmann', threshold: 18 },
  { slug: 'handelsherr', name: 'Handelsherr', threshold: 30 },
  { slug: 'fugger', name: 'Fugger', threshold: 42 },
]

export function completedCount(progress: LessonProgress[]): number {
  return progress.filter((p) => p.status === 'abgeschlossen').length
}

export function rankForCount(completed: number): Rank {
  let current = RANKS[0]
  for (const rank of RANKS) {
    if (completed >= rank.threshold) current = rank
  }
  return current
}

export function currentRank(progress: LessonProgress[]): Rank {
  return rankForCount(completedCount(progress))
}

/** Nächster Rang + wie viele Lektionen noch fehlen (null, wenn Fugger erreicht). */
export function nextRank(progress: LessonProgress[]): { rank: Rank; missing: number } | null {
  const completed = completedCount(progress)
  const next = RANKS.find((r) => r.threshold > completed)
  if (!next) return null
  return { rank: next, missing: next.threshold - completed }
}

/** Lernstreak: Anzahl aufeinanderfolgender Kalendertage (bis heute/gestern) mit Abschlüssen. */
export function learningStreak(progress: LessonProgress[]): number {
  const days = new Set(
    progress
      .filter((p) => p.completedAt)
      .map((p) => new Date(p.completedAt!).toDateString()),
  )
  if (days.size === 0) return 0
  let streak = 0
  const cursor = new Date()
  // Heute zählt, wenn heute etwas abgeschlossen wurde — sonst ab gestern zählen.
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1)
  while (days.has(cursor.toDateString())) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

/** Durchschnittliche Quiz-Trefferquote in Prozent (nur abgeschlossene Lektionen). */
export function quizAverage(progress: LessonProgress[]): number | null {
  const scores = progress.filter((p) => p.quizScore !== null).map((p) => p.quizScore!)
  if (scores.length === 0) return null
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}
