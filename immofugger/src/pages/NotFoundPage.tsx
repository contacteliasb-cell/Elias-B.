import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/Button'
import { notFound } from '../content/de'
import { usePageTitle } from '../lib/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Seite nicht gefunden')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 pb-16 pt-28 text-center md:px-8">
      <p className="font-display text-8xl font-bold text-gold/30 md:text-9xl" aria-hidden="true">
        {notFound.code}
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-parchment md:text-4xl">{notFound.title}</h1>
      <p className="mt-3 text-slateink">{notFound.text}</p>
      <Button to="/" variant="outline" className="mt-8">
        <ArrowLeft className="h-4 w-4" />
        {notFound.back}
      </Button>
    </main>
  )
}
