import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { backend, type BackendUser, type LessonProgress } from '../backend'

/**
 * Zentraler Auth- und Fortschritts-State.
 * Session und Lernfortschritt werden einmal geladen und über die App geteilt;
 * saveProgress aktualisiert optimistisch und persistiert über die Backend-Schicht.
 */

type AuthState = {
  user: BackendUser | null
  /** true, solange die initiale Session noch geprüft wird */
  loading: boolean
  isDemo: boolean
  progress: LessonProgress[]
  refreshUser: () => Promise<void>
  saveProgress: (p: LessonProgress) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<BackendUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState<LessonProgress[]>([])

  useEffect(() => {
    let mounted = true
    backend.getSession().then((u) => {
      if (!mounted) return
      setUser(u)
      setLoading(false)
    })
    const unsubscribe = backend.onAuthChange((u) => {
      if (!mounted) return
      setUser(u)
    })
    return () => {
      mounted = false
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!user) {
      setProgress([])
      return
    }
    backend.getProgress().then(setProgress)
  }, [user?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const refreshUser = useCallback(async () => {
    const u = await backend.getSession()
    setUser(u)
  }, [])

  const saveProgress = useCallback(async (p: LessonProgress) => {
    setProgress((prev) => {
      const idx = prev.findIndex((x) => x.lessonId === p.lessonId)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = p
        return next
      }
      return [...prev, p]
    })
    await backend.saveProgress(p)
  }, [])

  const logout = useCallback(async () => {
    await backend.logout()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, loading, isDemo: backend.isDemo, progress, refreshUser, saveProgress, logout }),
    [user, loading, progress, refreshUser, saveProgress, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth muss innerhalb von <AuthProvider> verwendet werden.')
  return ctx
}
