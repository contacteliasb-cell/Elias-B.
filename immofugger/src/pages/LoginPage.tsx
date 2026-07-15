import { motion } from 'framer-motion'
import { ArrowLeft, KeyRound } from 'lucide-react'
import { Button } from '../components/Button'
import { login } from '../content/de'
import { usePageTitle } from '../lib/usePageTitle'

export function LoginPage() {
  usePageTitle('Login')
  return (
    <main className="relative flex min-h-screen items-center justify-center px-5 pb-16 pt-28 md:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(201,162,39,0.6), transparent)' }}
        aria-hidden="true"
      />
      <motion.div
        className="kontor-card relative w-full max-w-lg p-8 text-center md:p-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
          <KeyRound className="h-7 w-7 text-gold-light" />
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-parchment">{login.title}</h1>
        <p className="mt-4 leading-relaxed text-slateink">{login.text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/registrieren" variant="gold">
            {login.cta}
          </Button>
          <Button to="/" variant="ghost">
            <ArrowLeft className="h-4 w-4" />
            {login.back}
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
