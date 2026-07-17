import { lazy, Suspense } from 'react'
import { Features } from '../sections/Features'
import { Hero } from '../sections/Hero'
import { usePageTitle } from '../lib/usePageTitle'

// Unterhalb des Folds: lazy geladen für schnellen Erst-Load
const FuggerPath = lazy(() => import('../sections/FuggerPath').then((m) => ({ default: m.FuggerPath })))
const Inspiration = lazy(() => import('../sections/Inspiration').then((m) => ({ default: m.Inspiration })))
const Tools = lazy(() => import('../sections/Tools').then((m) => ({ default: m.Tools })))
const Community = lazy(() => import('../sections/Community').then((m) => ({ default: m.Community })))
const Pricing = lazy(() => import('../sections/Pricing').then((m) => ({ default: m.Pricing })))
const Partners = lazy(() => import('../sections/Partners').then((m) => ({ default: m.Partners })))
const Faq = lazy(() => import('../sections/Faq').then((m) => ({ default: m.Faq })))
const Newsletter = lazy(() => import('../sections/Newsletter').then((m) => ({ default: m.Newsletter })))

export function LandingPage() {
  usePageTitle()
  return (
    <main>
      <Hero />
      <Features />
      <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
        <FuggerPath />
        <Inspiration />
        <Tools />
        <Community />
        <Pricing />
        <Partners />
        <Faq />
        <Newsletter />
      </Suspense>
    </main>
  )
}
