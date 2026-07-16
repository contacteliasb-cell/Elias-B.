import { demoBackend } from './demo'
import { createSupabaseBackend } from './supabase'
import type { Backend } from './types'

/**
 * Backend-Auswahl:
 * - VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY gesetzt → echtes Supabase-Backend
 * - sonst → Demo-Modus (localStorage), damit die App sofort testbar ist
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

export const backend: Backend = url && anonKey ? createSupabaseBackend(url, anonKey) : demoBackend

export type { Backend, BackendUser, CommunityPost, CommunityReply, LessonProgress } from './types'
