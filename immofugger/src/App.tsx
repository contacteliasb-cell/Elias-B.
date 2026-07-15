import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { LegalPage } from './pages/LegalPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { RegisterPage } from './pages/RegisterPage'
import { Footer } from './sections/Footer'
import { Navbar } from './sections/Navbar'

/**
 * Scrollt bei Routenwechsel nach oben bzw. zu einem Anker.
 * Anker-Ziele unterhalb des Folds werden lazy geladen — deshalb mit Wiederholung.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      let attempts = 0
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 20) {
          attempts += 1
          setTimeout(tryScroll, 100)
        }
      }
      tryScroll()
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrieren" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/impressum" element={<LegalPage page="impressum" />} />
        <Route path="/datenschutz" element={<LegalPage page="datenschutz" />} />
        <Route path="/disclaimer" element={<LegalPage page="disclaimer" />} />
        <Route path="/community-richtlinien" element={<LegalPage page="richtlinien" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
