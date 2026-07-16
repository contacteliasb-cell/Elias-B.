import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { resetPassword } from '../content/de'
import { backend } from '../lib/backend'
import { isValidEmail } from '../lib/forms'
import { usePageTitle } from '../lib/usePageTitle'

function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-5 pb-16 pt-28 md:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(201,162,39,0.6), transparent)' }}
        aria-hidden="true"
      />
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </main>
  )
}

/** /passwort-vergessen — Reset-Link anfordern */
export function PasswordForgotPage() {
  usePageTitle('Passwort vergessen')
  const t = resetPassword.request
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!isValidEmail(email)) return setError('Bitte gib eine gültige E-Mail-Adresse ein.')
    setBusy(true)
    const result = await backend.requestPasswordReset(email.trim())
    setBusy(false)
    if (result.error) return setError(result.error)
    setSent(true)
  }

  return (
    <AuthShell>
      <div className="text-center">
        <Logo withWordmark={false} className="justify-center" />
        <h1 className="mt-5 font-display text-4xl font-semibold text-parchment">{t.title}</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slateink">{t.text}</p>
      </div>

      <div className="kontor-card mt-8 p-6 md:p-8">
        {sent ? (
          <div className="text-center" role="status">
            <CheckCircle2 className="mx-auto h-10 w-10 text-gold-light" />
            <p className="mt-4 text-sm leading-relaxed text-parchment-dim">{t.success}</p>
            {backend.isDemo && <p className="mt-3 text-xs leading-relaxed text-slateink">{t.demoHint}</p>}
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="forgot-email" className="mb-1.5 block text-sm text-parchment-dim">
                E-Mail-Adresse
              </label>
              <input
                id="forgot-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="input-field"
                autoComplete="email"
              />
            </div>
            {error && (
              <p className="text-sm text-red-300" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" variant="gold" className="w-full" disabled={busy}>
              {t.submit}
            </Button>
          </form>
        )}
        <p className="mt-5 text-center text-xs text-slateink">
          <Link to="/login" className="text-gold-light hover:underline">
            {t.back}
          </Link>
        </p>
      </div>
    </AuthShell>
  )
}

/** /passwort-neu — Ziel des Supabase-Reset-Links */
export function PasswordSetPage() {
  usePageTitle('Neues Passwort')
  const t = resetPassword.set
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (pw.length < 8) return setError(t.errorLength)
    if (pw !== pw2) return setError(t.errorMatch)
    setBusy(true)
    const result = await backend.updatePassword(pw)
    setBusy(false)
    if (result.error) return setError(result.error)
    setDone(true)
  }

  return (
    <AuthShell>
      <div className="text-center">
        <Logo withWordmark={false} className="justify-center" />
        <h1 className="mt-5 font-display text-4xl font-semibold text-parchment">{t.title}</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slateink">{t.text}</p>
      </div>

      <div className="kontor-card mt-8 p-6 md:p-8">
        {done ? (
          <div className="text-center" role="status">
            <CheckCircle2 className="mx-auto h-10 w-10 text-gold-light" />
            <p className="mt-4 text-sm leading-relaxed text-parchment-dim">{t.success}</p>
            <Button to="/login" variant="gold" className="mt-6">
              {t.toLogin}
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="new-pw" className="mb-1.5 block text-sm text-parchment-dim">
                {t.password}
              </label>
              <input
                id="new-pw"
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="input-field"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label htmlFor="new-pw2" className="mb-1.5 block text-sm text-parchment-dim">
                {t.passwordRepeat}
              </label>
              <input
                id="new-pw2"
                type="password"
                value={pw2}
                onChange={(e) => setPw2(e.target.value)}
                className="input-field"
                autoComplete="new-password"
              />
            </div>
            {error && (
              <p className="text-sm text-red-300" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" variant="gold" className="w-full" disabled={busy}>
              {t.submit}
            </Button>
          </form>
        )}
      </div>
    </AuthShell>
  )
}
