import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js'
import type {
  AuthResult,
  Backend,
  BackendUser,
  CommunityPost,
  CommunityReply,
  LessonProgress,
} from './types'

/**
 * Supabase-Backend: Auth + Postgres (siehe supabase/schema.sql).
 * Konfiguration über VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY.
 */

/** Übersetzt bekannte Supabase-Fehler in verständliches Deutsch. */
function germanError(message: string): string {
  const m = message.toLowerCase()
  if (m.includes('invalid login credentials')) return 'E-Mail oder Passwort ist falsch. Bitte prüfe deine Eingaben.'
  if (m.includes('already registered') || m.includes('already been registered'))
    return 'Diese E-Mail-Adresse ist bereits registriert. Melde dich stattdessen an.'
  if (m.includes('password should be at least')) return 'Das Passwort muss mindestens 8 Zeichen lang sein.'
  if (m.includes('email not confirmed'))
    return 'Bitte bestätige zuerst deine E-Mail-Adresse — wir haben dir einen Link geschickt.'
  if (m.includes('rate limit') || m.includes('too many requests'))
    return 'Zu viele Versuche — bitte warte einen Moment und versuch es erneut.'
  if (m.includes('network') || m.includes('fetch')) return 'Verbindungsproblem — bitte prüfe deine Internetverbindung.'
  return 'Das hat leider nicht geklappt. Bitte versuch es erneut.'
}

async function loadProfile(client: SupabaseClient, user: User): Promise<BackendUser> {
  const { data } = await client.from('profiles').select('anzeigename, level_slug').eq('id', user.id).maybeSingle()
  return {
    id: user.id,
    email: user.email ?? '',
    displayName: data?.anzeigename ?? (user.user_metadata?.anzeigename as string) ?? 'Mitglied',
    levelSlug: data?.level_slug ?? (user.user_metadata?.level_slug as string) ?? 'lehrling',
  }
}

export function createSupabaseBackend(url: string, anonKey: string): Backend {
  const client = createClient(url, anonKey)

  return {
    isDemo: false,

    async getSession() {
      const { data } = await client.auth.getSession()
      if (!data.session?.user) return null
      return loadProfile(client, data.session.user)
    },

    onAuthChange(cb) {
      const { data } = client.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          loadProfile(client, session.user).then(cb)
        } else {
          cb(null)
        }
      })
      return () => data.subscription.unsubscribe()
    },

    async register(email, password, displayName, levelSlug): Promise<AuthResult> {
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: { anzeigename: displayName, level_slug: levelSlug },
          emailRedirectTo: `${window.location.origin}/login`,
        },
      })
      if (error) return { error: germanError(error.message) }
      if (data.user && !data.session) {
        // Double-Opt-In aktiv: Bestätigungs-Mail wurde verschickt.
        return { needsEmailConfirmation: true }
      }
      if (data.user && data.session) {
        // Profil anlegen (upsert, falls Trigger fehlt oder erneut ausgeführt)
        await client.from('profiles').upsert({
          id: data.user.id,
          anzeigename: displayName,
          level_slug: levelSlug,
        })
        return { user: await loadProfile(client, data.user) }
      }
      return { error: germanError('unknown') }
    },

    async login(email, password): Promise<AuthResult> {
      const { data, error } = await client.auth.signInWithPassword({ email, password })
      if (error) return { error: germanError(error.message) }
      // Profil sicherstellen (falls Registrierung mit Double-Opt-In lief und
      // das Profil noch nicht existiert)
      const meta = data.user.user_metadata ?? {}
      await client.from('profiles').upsert(
        {
          id: data.user.id,
          anzeigename: (meta.anzeigename as string) ?? 'Mitglied',
          level_slug: (meta.level_slug as string) ?? 'lehrling',
        },
        { ignoreDuplicates: true },
      )
      return { user: await loadProfile(client, data.user) }
    },

    async logout() {
      await client.auth.signOut()
    },

    async requestPasswordReset(email) {
      const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/passwort-neu`,
      })
      if (error) return { error: germanError(error.message) }
      return {}
    },

    async updatePassword(newPassword) {
      const { error } = await client.auth.updateUser({ password: newPassword })
      if (error) return { error: germanError(error.message) }
      return {}
    },

    async updateProfile(patch) {
      const { data: sessionData } = await client.auth.getSession()
      const userId = sessionData.session?.user.id
      if (!userId) return { error: 'Nicht angemeldet.' }
      const update: Record<string, string> = {}
      if (patch.displayName !== undefined) update.anzeigename = patch.displayName
      if (patch.levelSlug !== undefined) update.level_slug = patch.levelSlug
      const { error } = await client.from('profiles').update(update).eq('id', userId)
      if (error) return { error: germanError(error.message) }
      return {}
    },

    async deleteAccount() {
      // Der anon key darf keine Auth-Nutzer löschen — wir entfernen alle
      // Nutzerdaten (Profil, Fortschritt, Beiträge) und melden ab. Die finale
      // Kontolöschung erfolgt per Mail an die Support-Adresse (siehe UI-Hinweis).
      const { data: sessionData } = await client.auth.getSession()
      const userId = sessionData.session?.user.id
      if (!userId) return { error: 'Nicht angemeldet.' }
      await client.from('community_replies').delete().eq('user_id', userId)
      await client.from('community_posts').delete().eq('user_id', userId)
      await client.from('lesson_progress').delete().eq('user_id', userId)
      await client.from('profiles').delete().eq('id', userId)
      await client.auth.signOut()
      return {}
    },

    async getProgress() {
      const { data, error } = await client
        .from('lesson_progress')
        .select('lesson_id, status, quiz_score, abgeschlossen_am')
      if (error || !data) return []
      return data.map(
        (row): LessonProgress => ({
          lessonId: row.lesson_id,
          status: row.status,
          quizScore: row.quiz_score,
          completedAt: row.abgeschlossen_am,
        }),
      )
    },

    async saveProgress(progress) {
      const { data: sessionData } = await client.auth.getSession()
      const userId = sessionData.session?.user.id
      if (!userId) return { error: 'Nicht angemeldet.' }
      const { error } = await client.from('lesson_progress').upsert(
        {
          user_id: userId,
          lesson_id: progress.lessonId,
          status: progress.status,
          quiz_score: progress.quizScore,
          abgeschlossen_am: progress.completedAt,
        },
        { onConflict: 'user_id,lesson_id' },
      )
      if (error) return { error: germanError(error.message) }
      return {}
    },

    async listPosts() {
      const { data, error } = await client
        .from('community_posts')
        .select('id, user_id, autor_name, titel, text, kategorie, erstellt_am')
        .order('erstellt_am', { ascending: false })
      if (error || !data) return []
      return data.map(
        (row): CommunityPost => ({
          id: row.id,
          userId: row.user_id,
          authorName: row.autor_name,
          title: row.titel,
          body: row.text,
          category: row.kategorie,
          createdAt: row.erstellt_am,
        }),
      )
    },

    async createPost(title, body, category) {
      const { data: sessionData } = await client.auth.getSession()
      const user = sessionData.session?.user
      if (!user) return { error: 'Nicht angemeldet.' }
      const profile = await loadProfile(client, user)
      const { data, error } = await client
        .from('community_posts')
        .insert({
          user_id: user.id,
          autor_name: profile.displayName,
          titel: title,
          text: body,
          kategorie: category,
        })
        .select('id, user_id, autor_name, titel, text, kategorie, erstellt_am')
        .single()
      if (error || !data) return { error: germanError(error?.message ?? 'unknown') }
      return {
        post: {
          id: data.id,
          userId: data.user_id,
          authorName: data.autor_name,
          title: data.titel,
          body: data.text,
          category: data.kategorie,
          createdAt: data.erstellt_am,
        },
      }
    },

    async deletePost(id) {
      const { error } = await client.from('community_posts').delete().eq('id', id)
      if (error) return { error: germanError(error.message) }
      return {}
    },

    async listReplies(postId) {
      const { data, error } = await client
        .from('community_replies')
        .select('id, post_id, user_id, autor_name, text, erstellt_am')
        .eq('post_id', postId)
        .order('erstellt_am', { ascending: true })
      if (error || !data) return []
      return data.map(
        (row): CommunityReply => ({
          id: row.id,
          postId: row.post_id,
          userId: row.user_id,
          authorName: row.autor_name,
          body: row.text,
          createdAt: row.erstellt_am,
        }),
      )
    },

    async createReply(postId, body) {
      const { data: sessionData } = await client.auth.getSession()
      const user = sessionData.session?.user
      if (!user) return { error: 'Nicht angemeldet.' }
      const profile = await loadProfile(client, user)
      const { data, error } = await client
        .from('community_replies')
        .insert({ post_id: postId, user_id: user.id, autor_name: profile.displayName, text: body })
        .select('id, post_id, user_id, autor_name, text, erstellt_am')
        .single()
      if (error || !data) return { error: germanError(error?.message ?? 'unknown') }
      return {
        reply: {
          id: data.id,
          postId: data.post_id,
          userId: data.user_id,
          authorName: data.autor_name,
          body: data.text,
          createdAt: data.erstellt_am,
        },
      }
    },

    async deleteReply(id) {
      const { error } = await client.from('community_replies').delete().eq('id', id)
      if (error) return { error: germanError(error.message) }
      return {}
    },
  }
}
