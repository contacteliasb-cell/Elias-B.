import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { nav } from '../content/de'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /** Anker-Links funktionieren auch von Unterseiten aus (SPA-Navigation statt Reload). */
  const goToAnchor = (e: React.MouseEvent, href: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/' + href)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-night-line bg-night/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-content items-center justify-between px-5 md:px-8" aria-label="Hauptnavigation">
        <Link to="/" aria-label="ImmoFugger — Startseite" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop-Links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={location.pathname === '/' ? link.href : '/' + link.href}
                onClick={(e) => goToAnchor(e, link.href)}
                className="text-sm text-parchment-dim transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/login" variant="ghost">
            {nav.login}
          </Button>
          <Button to="/registrieren" variant="gold">
            {nav.cta}
          </Button>
        </div>

        {/* Burger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-night-line text-parchment lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile-Menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-b border-night-line bg-night/95 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="space-y-1 px-5 py-4">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={location.pathname === '/' ? link.href : '/' + link.href}
                    onClick={(e) => goToAnchor(e, link.href)}
                    className="block rounded-lg px-3 py-2.5 text-parchment-dim hover:bg-white/5 hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-3 pt-3">
                <Button to="/login" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                  {nav.login}
                </Button>
                <Button to="/registrieren" variant="gold" className="flex-1" onClick={() => setOpen(false)}>
                  {nav.cta}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
