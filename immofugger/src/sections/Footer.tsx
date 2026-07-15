import { Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArchDivider } from '../components/ArchDivider'
import { Logo } from '../components/Logo'
import { config } from '../config'
import { footer } from '../content/de'

export function Footer() {
  return (
    <footer className="border-t border-night-line/60 bg-night-soft">
      <ArchDivider className="-mt-px" />
      <div className="mx-auto max-w-content px-5 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slateink">{footer.claim}</p>
            <ul className="mt-5 flex gap-4">
              {config.SOCIALS.map((social) => (
                <li key={social.name}>
                  <span
                    className="cursor-default font-mono text-xs text-slateink/70"
                    title={social.comingSoon ? 'Folgt in Kürze' : undefined}
                  >
                    {social.name}
                    {social.comingSoon && <span className="ml-1 text-slateink/40">· folgt</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={footer.platformTitle}>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{footer.platformTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {footer.platformLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-parchment-dim transition-colors hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.legalTitle}>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{footer.legalTitle}</h2>
            <ul className="mt-4 space-y-2.5">
              {footer.legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-parchment-dim transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-gold">{footer.contactTitle}</h2>
            <a
              href={`mailto:${config.CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 break-all text-sm text-parchment-dim transition-colors hover:text-gold-light"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {config.CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-night-line/60 pt-6">
          <p className="text-center font-mono text-xs text-slateink">{footer.copyright}</p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[11px] leading-relaxed text-slateink/70">
            {footer.disclaimerShort}
          </p>
        </div>
      </div>
    </footer>
  )
}
