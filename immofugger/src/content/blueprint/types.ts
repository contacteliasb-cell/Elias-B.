/** Datenmodell der Blueprint-Lerninhalte. */

export type QuizQuestion = {
  q: string
  options: string[]
  /** Index der richtigen Antwort in options */
  correct: number
  /** Erklärung, warum die richtige Antwort richtig ist */
  explanation: string
}

export type Lesson = {
  /** eindeutig, z. B. 'fundament-1' */
  id: string
  title: string
  /** Kurze Einordnung (1–2 Sätze) über dem Text */
  intro: string
  /** Lehrtext in Abschnitten; body enthält Absätze, getrennt durch \n\n */
  sections: { heading: string; body: string }[]
  /** Praxisbeispiel mit konkreten, realistischen Zahlen */
  example: { title: string; body: string }
  /** „Kontor-Notiz" — die Merkbox der Lektion */
  note: string
  /** true bei Recht/Steuer-Themen → Beratungs-Hinweis wird angezeigt */
  legalHint?: boolean
  /** Slugs passender Wiki-Artikel */
  wikiRefs?: string[]
  quiz: QuizQuestion[]
}

export type ModuleGroup = {
  slug: string
  title: string
  description: string
  lessons: Lesson[]
}

/** Wörter zählen → Lesezeit (200 Wörter/Minute, min. 3 Minuten) */
export function readingMinutes(lesson: Lesson): number {
  const text = [
    lesson.intro,
    ...lesson.sections.map((s) => `${s.heading} ${s.body}`),
    lesson.example.title,
    lesson.example.body,
    lesson.note,
  ].join(' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(3, Math.round(words / 200))
}
