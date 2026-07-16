import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { login } from '../content/de'
import { useAuth } from '../lib/auth/AuthContext'
import { backend } from '../lib/backend'
import { isValidEmail } from '../lib/forms'
import { usePageTitle } from '../lib/usePageTitle'

export function LoginPage() {
  usePageTitle('Login')
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { refreshUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const next = params.get('next') ?? '/app'

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!isValidEmail(email)) return setError(login.errors.email)
    if (!password) return setError(login.errors.password)
    setBusy(true)
    const result = await backend.login(email.trim(), password)
    setBusy(false)
    if (result.error) return setError(result.error)
    await refreshUser()
    navigate(next.startsWith('/') ? next : '/app', { replace: true })
  }

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
        <div className="text-center">
          <Logo withWordmark={false} className="justify-center" />
          <h1 className="mt-5 font-display text-4xl font-semibold text-parchment md:text-5xl">{login.title}</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slateink">{login.subtitle}</p>
        </div>

        <form onSubmit={onSubmit} className="kontor-card mt-8 space-y-5 p-6 md:p-8" noValidate>
          <div>
            <label htmlFor="login-email" className="mb-1.5 block text-sm text-parchment-dim">
              {login.fields.email}
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={login.fields.emailPlaceholder}
              className="input-field"
              autoComplete="email"
            />
          </div>
          <div>
            <div className="mb-1.5 flex items-baseline justify-between">
              <label htmlFor="login-password" className="block text-sm text-parchment-dim">
                {login.fields.password}
              </label>
              <Link to="/passwort-vergessen" className="text-xs text-gold-light hover:underline">
                {login.forgot}
              </Link>
            </div>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={login.fields.passwordPlaceholder}
              className="input-field"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="gold" className="w-full" disabled={busy}>
            {login.submit}
          </Button>

          <p className="text-center text-xs text-slateink">
            {login.noAccount}{' '}
            <Link to="/registrieren" className="text-gold-light hover:underline">
              {login.registerLink}
            </Link>
          </p>
        </form>
      </motion.div>
    </main>
  )
}
