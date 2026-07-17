/**
 * Gemeinsames Backend-Interface.
 * Zwei Implementierungen: supabase.ts (echtes Backend) und demo.ts (localStorage).
 * Die Auswahl passiert in index.ts anhand der Umgebungsvariablen.
 */

export type BackendUser = {
  id: string
  email: string
  displayName: string
  levelSlug: string
}

export type AuthResult = {
  user?: BackendUser
  /** Deutsche, nutzerfreundliche Fehlermeldung */
  error?: string
  /** true, wenn Supabase erst eine Bestätigungs-Mail verlangt (Double-Opt-In) */
  needsEmailConfirmation?: boolean
}

export type LessonProgress = {
  lessonId: string
  status: 'gestartet' | 'abgeschlossen'
  quizScore: number | null
  completedAt: string | null
}

export type CommunityPost = {
  id: string
  userId: string
  authorName: string
  title: string
  body: string
  category: string
  createdAt: string
}

export type CommunityReply = {
  id: string
  postId: string
  userId: string
  authorName: string
  body: string
  createdAt: string
}

export interface Backend {
  /** true = localStorage-Demo-Modus (keine Supabase-Variablen gesetzt) */
  readonly isDemo: boolean

  // --- Auth ---
  getSession(): Promise<BackendUser | null>
  onAuthChange(cb: (user: BackendUser | null) => void): () => void
  register(email: string, password: string, displayName: string, levelSlug: string): Promise<AuthResult>
  login(email: string, password: string): Promise<AuthResult>
  logout(): Promise<void>
  requestPasswordReset(email: string): Promise<{ error?: string }>
  updatePassword(newPassword: string): Promise<{ error?: string }>
  updateProfile(patch: { displayName?: string; levelSlug?: string }): Promise<{ error?: string }>
  deleteAccount(): Promise<{ error?: string }>

  // --- Lernfortschritt ---
  getProgress(): Promise<LessonProgress[]>
  saveProgress(progress: LessonProgress): Promise<{ error?: string }>

  // --- Kontor (Community-Board) ---
  listPosts(): Promise<CommunityPost[]>
  createPost(title: string, body: string, category: string): Promise<{ post?: CommunityPost; error?: string }>
  deletePost(id: string): Promise<{ error?: string }>
  listReplies(postId: string): Promise<CommunityReply[]>
  createReply(postId: string, body: string): Promise<{ reply?: CommunityReply; error?: string }>
  deleteReply(id: string): Promise<{ error?: string }>
}
