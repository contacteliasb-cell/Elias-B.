import { CheckCircle2, Mail } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { newsletter } from '../content/de'
import { isValidEmail, submitNewsletter } from '../lib/forms'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    if (!isValidEmail(email)) {
      setError(newsletter.errorEmail)
      return
    }
    if (!consent) {
      setError(newsletter.errorConsent)
      return
    }
    setBusy(true)
    const ok = await submitNewsletter({ email })
    setBusy(false)
    if (ok) setDone(true)
    else setError(newsletter.errorEmail)
  }

  return (
    <section id="newsletter" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <div className="kontor-card relative mx-auto max-w-3xl overflow-hidden p-8 text-center md:p-12">
            {/* Goldener Schein */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(closest-side, rgba(201,162,39,0.6), transparent)' }}
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{newsletter.kicker}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-parchment md:text-4xl">
              {newsletter.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slateink md:text-base">
              {newsletter.subline}
            </p>

            {done ? (
              <p
                className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-4 text-sm font-medium text-emerald-300"
                role="status"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                {newsletter.success}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md" noValidate>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slateink" aria-hidden="true" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={newsletter.placeholder}
                      aria-label="E-Mail-Adresse"
                      className="input-field pl-10"
                      autoComplete="email"
                    />
                  </div>
                  <Button type="submit" variant="gold" disabled={busy}>
                    {newsletter.button}
                  </Button>
                </div>
                <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-left text-xs text-slateink">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
                  />
                  {newsletter.consent}
                </label>
                {error && (
                  <p className="mt-3 text-sm text-red-300" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
