import { finanzierung } from './finanzierung'
import { fundament } from './fundament'
import { objektanalyse } from './objektanalyse'
import { rechtSteuern } from './recht-steuern'
import { skalierung } from './skalierung'
import type { Lesson, ModuleGroup } from './types'
import { vermietung } from './vermietung'

export type { Lesson, ModuleGroup, QuizQuestion } from './types'
export { readingMinutes } from './types'

/** Alle Modulgruppen des Fugger-Blueprints in Lernreihenfolge. */
export const modules: ModuleGroup[] = [
  fundament,
  finanzierung,
  objektanalyse,
  rechtSteuern,
  vermietung,
  skalierung,
]

/** Flache Liste aller Lektionen in Reihenfolge (für Navigation & Rang-Berechnung). */
export const allLessons: Lesson[] = modules.flatMap((m) => m.lessons)

/** Gesamtzahl der Lektionen — Quelle der Wahrheit für die „42+ Lernmodule"-Kennzahl. */
export const TOTAL_LESSONS = allLessons.length

export function findLesson(id: string): { lesson: Lesson; module: ModuleGroup } | null {
  for (const module of modules) {
    const lesson = module.lessons.find((l) => l.id === id)
    if (lesson) return { lesson, module }
  }
  return null
}

/** Vorherige/nächste Lektion in der globalen Reihenfolge. */
export function lessonNeighbours(id: string): { prev: Lesson | null; next: Lesson | null } {
  const idx = allLessons.findIndex((l) => l.id === id)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  }
}
