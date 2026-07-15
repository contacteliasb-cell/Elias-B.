import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { register } from '../content/de'
import { isValidEmail, submitRegistration } from '../lib/forms'
import { usePageTitle } from '../lib/usePageTitle'

export function RegisterPage() {
  usePageTitle('Registrieren')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [level, setLevel] = useState('')
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = register.errors.name
    if (!isValidEmail(email)) next.email = register.errors.email
    if (!level) next.level = register.errors.level
    if (!privacy) next.privacy = register.errors.privacy
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setBusy(true)
    const ok = await submitRegistration({ name: name.trim(), email: email.trim(), level })
    setBusy(false)
    if (ok) setDone(true)
    else setErrors({ submit: register.errors.submit })
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center px-5 pb-16 pt-28 md:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(201,162,39,0.6), transparent)' }}
        aria-hidden="true"
      />

      {done ? (
        <motion.div
          className="kontor-card relative w-full max-w-lg border-gold/40 p-8 text-center shadow-gold-glow md:p-12"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
            <CheckCircle2 className="h-8 w-8 text-gold-light" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold text-parchment">{register.success.title}</h1>
          <p className="mt-4 leading-relaxed text-slateink">{register.success.text}</p>
          <Button to="/" variant="outline" className="mt-8">
            <ArrowLeft className="h-4 w-4" />
            {register.success.back}
          </Button>
        </motion.div>
      ) : (
        <motion.div
          className="relative w-full max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <Logo withWordmark={false} className="justify-center" />
            <h1 className="mt-5 font-display text-4xl font-semibold text-parchment md:text-5xl">{register.title}</h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slateink">{register.subtitle}</p>
          </div>

          <form onSubmit={onSubmit} className="kontor-card mt-8 space-y-5 p-6 md:p-8" noValidate>
            <div>
              <label htmlFor="reg-name" className="mb-1.5 block text-sm text-parchment-dim">
                {register.fields.name}
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={register.fields.namePlaceholder}
                className="input-field"
                autoComplete="name"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="reg-email" className="mb-1.5 block text-sm text-parchment-dim">
                {register.fields.email}
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={register.fields.emailPlaceholder}
                className="input-field"
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="mb-2 text-sm text-parchment-dim">{register.fields.level}</legend>
              <div className="grid gap-2.5 sm:grid-cols-3">
                {register.fields.levels.map((lv) => {
                  const active = level === lv.value
                  return (
                    <label
                      key={lv.value}
                      className={`cursor-pointer rounded-lg border px-3.5 py-3 transition-all ${
                        active
                          ? 'border-gold bg-gold/10 shadow-gold-glow'
                          : 'border-night-line bg-night-soft hover:border-gold/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="level"
                        value={lv.value}
                        checked={active}
                        onChange={() => setLevel(lv.value)}
                        className="sr-only"
                      />
                      <span className={`block font-display text-lg font-semibold ${active ? 'text-gold-light' : 'text-parchment'}`}>
                        {lv.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-slateink">{lv.hint}</span>
                    </label>
                  )
                })}
              </div>
              {errors.level && (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.level}
                </p>
              )}
            </fieldset>

            <div>
              <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-slateink">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                />
                {register.fields.privacy}
              </label>
              {errors.privacy && (
                <p className="mt-1.5 text-xs text-red-300" role="alert">
                  {errors.privacy}
                </p>
              )}
            </div>

            {errors.submit && (
              <p className="text-sm text-red-300" role="alert">
                {errors.submit}
              </p>
            )}

            <Button type="submit" variant="gold" className="w-full" disabled={busy}>
              {register.submit}
            </Button>
          </form>
        </motion.div>
      )}
    </main>
  )
}
