import { config } from '../config'

/**
 * Austauschbarer Form-Adapter.
 *
 * Standard: Formspree (Endpoint in src/config.ts eintragen).
 * Fallback: Solange kein Endpoint konfiguriert ist, werden Einträge im
 * localStorage gesammelt (Keys: 'immofugger:registrations' bzw.
 * 'immofugger:newsletter'), damit keine Anmeldung verloren geht und die
 * Seite sofort live-fähig ist.
 */

export type RegistrationData = {
  name: string
  email: string
  level: string
}

export type NewsletterData = {
  email: string
}

async function submitToFormspree(endpoint: string, data: Record<string, string>): Promise<boolean> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  return res.ok
}

function storeLocally(key: string, data: Record<string, string>): boolean {
  try {
    const existing: unknown[] = JSON.parse(localStorage.getItem(key) ?? '[]')
    existing.push({ ...data, submittedAt: new Date().toISOString() })
    localStorage.setItem(key, JSON.stringify(existing))
    return true
  } catch {
    return false
  }
}

export async function submitRegistration(data: RegistrationData): Promise<boolean> {
  if (config.FORMSPREE_REGISTER_ENDPOINT) {
    return submitToFormspree(config.FORMSPREE_REGISTER_ENDPOINT, { ...data, form: 'registrierung' })
  }
  return storeLocally('immofugger:registrations', { ...data })
}

export async function submitNewsletter(data: NewsletterData): Promise<boolean> {
  if (config.FORMSPREE_NEWSLETTER_ENDPOINT) {
    return submitToFormspree(config.FORMSPREE_NEWSLETTER_ENDPOINT, { ...data, form: 'newsletter' })
  }
  return storeLocally('immofugger:newsletter', { ...data })
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}
