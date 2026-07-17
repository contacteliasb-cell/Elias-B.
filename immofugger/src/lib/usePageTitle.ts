import { useEffect } from 'react'

const BASE_TITLE = 'ImmoFugger — Meistere Immobilien mit System und Weitblick'

/** Setzt den Dokumenttitel pro Seite; ohne Argument den Standard-Titel. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ImmoFugger` : BASE_TITLE
  }, [title])
}
