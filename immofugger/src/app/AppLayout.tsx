import {
  BookOpen,
  CalendarDays,
  Calculator,
  FlaskConical,
  LayoutDashboard,
  Library,
  LogOut,
  MessagesSquare,
  UserRound,
} from 'lucide-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useAuth } from '../lib/auth/AuthContext'
import { currentRank } from '../lib/ranks'

const NAV_ITEMS = [
  { to: '/app', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/app/blueprint', label: 'Blueprint', icon: BookOpen, end: false },
  { to: '/app/wiki', label: 'Wiki', icon: Library, end: false },
  { to: '/app/werkzeuge', label: 'Werkzeuge', icon: Calculator, end: false },
  { to: '/app/kalender', label: 'Kalender', icon: CalendarDays, end: false },
  { to: '/app/kontor', label: 'Kontor', icon: MessagesSquare, end: false },
  { to: '/app/profil', label: 'Profil', icon: UserRound, end: false },
]

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join('')
}

/** App-Layout des Mitgliederbereichs: Sidebar (Desktop), Bottom-Nav (Mobile). */
export function AppLayout() {
  const { user, isDemo, progress, logout } = useAuth()
  const navigate = useNavigate()
  const rank = currentRank(progress)

  const onLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-night-line bg-night-soft lg:flex">
        <div className="border-b border-night-line px-5 py-5">
          <NavLink to="/" aria-label="Zur Startseite">
            <Logo />
          </NavLink>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="App-Navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-gold/10 font-semibold text-gold-light'
                    : 'text-parchment-dim hover:bg-white/5 hover:text-parchment'
                }`
              }
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-night-line p-3">
          <button
            onClick={onLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-parchment-dim transition-colors hover:bg-white/5 hover:text-parchment"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Abmelden
          </button>
        </div>
      </aside>

      <div className="flex min-h-screen w-full flex-col lg:pl-60">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-night-line bg-night/90 backdrop-blur-md">
          <div className="flex h-16 items-center justify-between gap-3 px-4 md:px-8">
            <NavLink to="/" className="lg:hidden" aria-label="Zur Startseite">
              <Logo withWordmark={false} />
            </NavLink>
            <div className="hidden lg:block" />
            <div className="flex items-center gap-3">
              {isDemo && (
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gold-light"
                  title="Es sind keine Supabase-Zugangsdaten konfiguriert — alle Daten werden lokal in diesem Browser gespeichert."
                >
                  <FlaskConical className="h-3 w-3" />
                  Demo-Modus
                </span>
              )}
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold leading-tight text-parchment">{user?.displayName}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-gold-light">{rank.name}</p>
              </div>
              <NavLink
                to="/app/profil"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-mono text-sm font-semibold text-gold-light transition-colors hover:bg-gold/20"
                aria-label="Zum Profil"
              >
                {initials(user?.displayName ?? '?')}
              </NavLink>
              <button
                onClick={onLogout}
                className="hidden h-10 w-10 items-center justify-center rounded-lg border border-night-line text-parchment-dim transition-colors hover:border-gold/40 hover:text-parchment lg:hidden sm:flex"
                aria-label="Abmelden"
                title="Abmelden"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Seiteninhalt */}
        <main className="flex-1 px-4 pb-28 pt-6 md:px-8 md:pt-8 lg:pb-12">
          <Outlet />
        </main>
      </div>

      {/* Bottom-Navigation (Mobile) */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-night-line bg-night-soft/95 backdrop-blur-md lg:hidden"
        aria-label="App-Navigation (mobil)"
      >
        <ul className="flex items-stretch justify-around">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="flex-1">
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-1 pb-2.5 pt-2 text-[10px] ${
                    isActive ? 'text-gold-light' : 'text-slateink'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
