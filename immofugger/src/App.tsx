import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { AppLayout } from './app/AppLayout'
import { RequireAuth } from './app/RequireAuth'
import { AuthProvider } from './lib/auth/AuthContext'
import { LandingPage } from './pages/LandingPage'
import { LegalPage } from './pages/LegalPage'
import { LoginPage } from './pages/LoginPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PasswordForgotPage, PasswordSetPage } from './pages/PasswordResetPages'
import { RegisterPage } from './pages/RegisterPage'
import { Footer } from './sections/Footer'
import { Navbar } from './sections/Navbar'

// Mitgliederbereich: routenbasiertes Code-Splitting (Lerninhalte sind groß)
const DashboardPage = lazy(() => import('./app/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })))
const BlueprintPage = lazy(() => import('./app/pages/BlueprintPage').then((m) => ({ default: m.BlueprintPage })))
const LessonPage = lazy(() => import('./app/pages/LessonPage').then((m) => ({ default: m.LessonPage })))
const WikiPage = lazy(() => import('./app/pages/WikiPage').then((m) => ({ default: m.WikiPage })))
const ToolsPage = lazy(() => import('./app/pages/ToolsPage').then((m) => ({ default: m.ToolsPage })))
const KontorPage = lazy(() => import('./app/pages/KontorPage').then((m) => ({ default: m.KontorPage })))
const KalenderPage = lazy(() => import('./app/pages/KalenderPage').then((m) => ({ default: m.KalenderPage })))
const ProfilPage = lazy(() => import('./app/pages/ProfilPage').then((m) => ({ default: m.ProfilPage })))

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

/** Layout der öffentlichen Seiten: Navbar + Footer. */
function MarketingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function AppFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-busy="true">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-night-line border-t-gold" aria-label="Lädt" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollManager />
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/registrieren" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/passwort-vergessen" element={<PasswordForgotPage />} />
            <Route path="/passwort-neu" element={<PasswordSetPage />} />
            <Route path="/impressum" element={<LegalPage page="impressum" />} />
            <Route path="/datenschutz" element={<LegalPage page="datenschutz" />} />
            <Route path="/disclaimer" element={<LegalPage page="disclaimer" />} />
            <Route path="/community-richtlinien" element={<LegalPage page="richtlinien" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route
            path="/app"
            element={
              <RequireAuth>
                <AppLayout />
              </RequireAuth>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<AppFallback />}>
                  <DashboardPage />
                </Suspense>
              }
            />
            <Route
              path="blueprint"
              element={
                <Suspense fallback={<AppFallback />}>
                  <BlueprintPage />
                </Suspense>
              }
            />
            <Route
              path="blueprint/:lessonId"
              element={
                <Suspense fallback={<AppFallback />}>
                  <LessonPage />
                </Suspense>
              }
            />
            <Route
              path="wiki"
              element={
                <Suspense fallback={<AppFallback />}>
                  <WikiPage />
                </Suspense>
              }
            />
            <Route
              path="wiki/:slug"
              element={
                <Suspense fallback={<AppFallback />}>
                  <WikiPage />
                </Suspense>
              }
            />
            <Route
              path="werkzeuge"
              element={
                <Suspense fallback={<AppFallback />}>
                  <ToolsPage />
                </Suspense>
              }
            />
            <Route
              path="kontor"
              element={
                <Suspense fallback={<AppFallback />}>
                  <KontorPage />
                </Suspense>
              }
            />
            <Route
              path="kalender"
              element={
                <Suspense fallback={<AppFallback />}>
                  <KalenderPage />
                </Suspense>
              }
            />
            <Route
              path="profil"
              element={
                <Suspense fallback={<AppFallback />}>
                  <ProfilPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
