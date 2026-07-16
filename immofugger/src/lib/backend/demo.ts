import type {
  AuthResult,
  Backend,
  BackendUser,
  CommunityPost,
  CommunityReply,
  LessonProgress,
} from './types'

/**
 * Demo-Backend: simuliert Registrierung, Login und Speicherung komplett im
 * localStorage. Aktiv, solange keine Supabase-Variablen gesetzt sind — so ist
 * die App sofort ohne Einrichtung testbar (dezentes Badge im App-Header).
 *
 * Hinweis: Passwörter werden hier nur für die Demo im Klartext lokal abgelegt.
 * Im echten Betrieb übernimmt Supabase Auth das Passwort-Handling.
 */

const KEYS = {
  users: 'immofugger:demo:users',
  session: 'immofugger:demo:session',
  progress: (userId: string) => `immofugger:demo:progress:${userId}`,
  posts: 'immofugger:demo:posts',
  replies: 'immofugger:demo:replies',
  seeded: 'immofugger:demo:seeded',
}

type DemoUser = BackendUser & { password: string }

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value))
}

function uid(): string {
  return `demo-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function toPublic(u: DemoUser): BackendUser {
  return { id: u.id, email: u.email, displayName: u.displayName, levelSlug: u.levelSlug }
}

/** Vorbefüllte Beispiel-Beiträge, klar als Demo gekennzeichnet. */
function seedPostsOnce() {
  if (localStorage.getItem(KEYS.seeded)) return
  const now = Date.now()
  const posts: CommunityPost[] = [
    {
      id: uid(),
      userId: 'demo-seed-1',
      authorName: 'Lena (Demo)',
      title: 'Erste Besichtigung — worauf achtet ihr zuerst?',
      body: 'Ich habe nächste Woche meine allererste Besichtigung (ETW, Baujahr 1978). Was schaut ihr euch als Allererstes an — Keller, Dach, Protokolle? Die Checkliste aus dem Blueprint habe ich dabei.',
      category: 'einsteiger',
      createdAt: new Date(now - 1000 * 60 * 60 * 26).toISOString(),
    },
    {
      id: uid(),
      userId: 'demo-seed-2',
      authorName: 'Karim (Demo)',
      title: 'Wirtschaftsplan: diese drei Zahlen prüfe ich immer',
      body: 'Kurzer Erfahrungswert aus meinen letzten Käufen: Instandhaltungsrücklage pro m², geplante Sonderumlagen und die Entwicklung des Hausgelds über drei Jahre. Wenn eine der drei Zahlen komisch aussieht, frage ich nach, bevor ich weiter rechne.',
      category: 'kaufleute',
      createdAt: new Date(now - 1000 * 60 * 60 * 22).toISOString(),
    },
    {
      id: uid(),
      userId: 'demo-seed-3',
      authorName: 'Sofia (Demo)',
      title: 'Kaufnebenkosten unterschätzt — mein Lernmoment',
      body: 'Bei meiner ersten Kalkulation hatte ich nur die Grunderwerbsteuer auf dem Zettel. Notar, Grundbuch und Makler kamen oben drauf — fast 12 % statt 6 %. Rechnet die Nebenkosten wirklich von Anfang an mit, sonst stimmt der ganze Plan nicht.',
      category: 'einsteiger',
      createdAt: new Date(now - 1000 * 60 * 60 * 15).toISOString(),
    },
    {
      id: uid(),
      userId: 'demo-seed-4',
      authorName: 'Tobias (Demo)',
      title: 'Refinanzierung nach 10 Jahren — eure Erfahrungen?',
      body: 'Meine erste Wohnung ist bald 10 Jahre im Bestand, die Zinsbindung läuft aus. Ich überlege, Eigenkapital herauszulösen und ein zweites Objekt anzugehen. Wer hat das schon gemacht und worauf sollte ich beim Bankgespräch achten?',
      category: 'investoren',
      createdAt: new Date(now - 1000 * 60 * 60 * 8).toISOString(),
    },
    {
      id: uid(),
      userId: 'demo-seed-5',
      authorName: 'Miriam (Demo)',
      title: 'Lektion „Exposé lesen" — der Rendite-Trick war Gold wert',
      body: 'Kleiner Tipp für alle am Anfang: In der Objektanalyse-Gruppe wird gezeigt, wie man die beworbene Rendite eines Exposés nachrechnet. Bei meinem aktuellen Beispiel kam statt „5,1 %" nur 3,9 % heraus — allein weil die Nebenkosten fehlten.',
      category: 'einsteiger',
      createdAt: new Date(now - 1000 * 60 * 60 * 3).toISOString(),
    },
  ]
  const replies: CommunityReply[] = [
    {
      id: uid(),
      postId: posts[0].id,
      userId: 'demo-seed-2',
      authorName: 'Karim (Demo)',
      body: 'Keller und Dach zuerst — da stecken die teuren Überraschungen. Und lass dir die letzten zwei Protokolle der Eigentümerversammlung zeigen.',
      createdAt: new Date(now - 1000 * 60 * 60 * 24).toISOString(),
    },
    {
      id: uid(),
      postId: posts[3].id,
      userId: 'demo-seed-5',
      authorName: 'Miriam (Demo)',
      body: 'Nimm eine aktuelle Haushaltsrechnung und die Mietverträge mit — das hat bei meinem Termin den Unterschied gemacht.',
      createdAt: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
    },
  ]
  write(KEYS.posts, posts)
  write(KEYS.replies, replies)
  localStorage.setItem(KEYS.seeded, '1')
}

let authListeners: ((user: BackendUser | null) => void)[] = []

function notify(user: BackendUser | null) {
  authListeners.forEach((cb) => cb(user))
}

function currentUser(): DemoUser | null {
  const sessionId = read<string | null>(KEYS.session, null)
  if (!sessionId) return null
  const users = read<DemoUser[]>(KEYS.users, [])
  return users.find((u) => u.id === sessionId) ?? null
}

export const demoBackend: Backend = {
  isDemo: true,

  async getSession() {
    const u = currentUser()
    return u ? toPublic(u) : null
  },

  onAuthChange(cb) {
    authListeners.push(cb)
    return () => {
      authListeners = authListeners.filter((l) => l !== cb)
    }
  },

  async register(email, password, displayName, levelSlug): Promise<AuthResult> {
    const users = read<DemoUser[]>(KEYS.users, [])
    const normalized = email.trim().toLowerCase()
    if (users.some((u) => u.email === normalized)) {
      return { error: 'Diese E-Mail-Adresse ist bereits registriert. Melde dich stattdessen an.' }
    }
    if (password.length < 8) {
      return { error: 'Das Passwort muss mindestens 8 Zeichen lang sein.' }
    }
    const user: DemoUser = { id: uid(), email: normalized, password, displayName, levelSlug }
    users.push(user)
    write(KEYS.users, users)
    write(KEYS.session, user.id)
    const pub = toPublic(user)
    notify(pub)
    return { user: pub }
  },

  async login(email, password): Promise<AuthResult> {
    const users = read<DemoUser[]>(KEYS.users, [])
    const user = users.find((u) => u.email === email.trim().toLowerCase())
    if (!user || user.password !== password) {
      return { error: 'E-Mail oder Passwort ist falsch. Bitte prüfe deine Eingaben.' }
    }
    write(KEYS.session, user.id)
    const pub = toPublic(user)
    notify(pub)
    return { user: pub }
  },

  async logout() {
    localStorage.removeItem(KEYS.session)
    notify(null)
  },

  async requestPasswordReset(email) {
    const users = read<DemoUser[]>(KEYS.users, [])
    if (!users.some((u) => u.email === email.trim().toLowerCase())) {
      // Bewusst kein Hinweis, ob die Adresse existiert — wie im echten Betrieb.
      return {}
    }
    return {}
  },

  async updatePassword(newPassword) {
    if (newPassword.length < 8) return { error: 'Das Passwort muss mindestens 8 Zeichen lang sein.' }
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const users = read<DemoUser[]>(KEYS.users, [])
    write(
      KEYS.users,
      users.map((x) => (x.id === u.id ? { ...x, password: newPassword } : x)),
    )
    return {}
  },

  async updateProfile(patch) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const users = read<DemoUser[]>(KEYS.users, [])
    const updated = users.map((x) =>
      x.id === u.id
        ? { ...x, displayName: patch.displayName ?? x.displayName, levelSlug: patch.levelSlug ?? x.levelSlug }
        : x,
    )
    write(KEYS.users, updated)
    const fresh = updated.find((x) => x.id === u.id)!
    notify(toPublic(fresh))
    return {}
  },

  async deleteAccount() {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const users = read<DemoUser[]>(KEYS.users, [])
    write(KEYS.users, users.filter((x) => x.id !== u.id))
    localStorage.removeItem(KEYS.progress(u.id))
    localStorage.removeItem(KEYS.session)
    notify(null)
    return {}
  },

  async getProgress() {
    const u = currentUser()
    if (!u) return []
    return read<LessonProgress[]>(KEYS.progress(u.id), [])
  },

  async saveProgress(progress) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const all = read<LessonProgress[]>(KEYS.progress(u.id), [])
    const idx = all.findIndex((p) => p.lessonId === progress.lessonId)
    if (idx >= 0) all[idx] = progress
    else all.push(progress)
    write(KEYS.progress(u.id), all)
    return {}
  },

  async listPosts() {
    seedPostsOnce()
    const posts = read<CommunityPost[]>(KEYS.posts, [])
    return [...posts].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  },

  async createPost(title, body, category) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const post: CommunityPost = {
      id: uid(),
      userId: u.id,
      authorName: u.displayName,
      title,
      body,
      category,
      createdAt: new Date().toISOString(),
    }
    const posts = read<CommunityPost[]>(KEYS.posts, [])
    posts.push(post)
    write(KEYS.posts, posts)
    return { post }
  },

  async deletePost(id) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const posts = read<CommunityPost[]>(KEYS.posts, [])
    write(KEYS.posts, posts.filter((p) => !(p.id === id && p.userId === u.id)))
    const replies = read<CommunityReply[]>(KEYS.replies, [])
    write(KEYS.replies, replies.filter((r) => r.postId !== id))
    return {}
  },

  async listReplies(postId) {
    const replies = read<CommunityReply[]>(KEYS.replies, [])
    return replies.filter((r) => r.postId === postId).sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  },

  async createReply(postId, body) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const reply: CommunityReply = {
      id: uid(),
      postId,
      userId: u.id,
      authorName: u.displayName,
      body,
      createdAt: new Date().toISOString(),
    }
    const replies = read<CommunityReply[]>(KEYS.replies, [])
    replies.push(reply)
    write(KEYS.replies, replies)
    return { reply }
  },

  async deleteReply(id) {
    const u = currentUser()
    if (!u) return { error: 'Nicht angemeldet.' }
    const replies = read<CommunityReply[]>(KEYS.replies, [])
    write(KEYS.replies, replies.filter((r) => !(r.id === id && r.userId === u.id)))
    return {}
  },
}
