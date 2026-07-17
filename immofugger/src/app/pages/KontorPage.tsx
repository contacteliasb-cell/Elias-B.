import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, MessagesSquare, Plus, Send, Trash2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { config } from '../../config'
import { useAuth } from '../../lib/auth/AuthContext'
import { backend, type CommunityPost, type CommunityReply } from '../../lib/backend'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

const CATEGORIES = [
  { value: 'einsteiger', label: 'Einsteiger-Halle' },
  { value: 'kaufleute', label: 'Kaufmannsrunde' },
  { value: 'investoren', label: 'Investoren-Kontor' },
] as const

const RULES_KEY = 'immofugger:kontor:rules-accepted'

function categoryLabel(value: string) {
  return CATEGORIES.find((c) => c.value === value)?.label ?? value
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'gerade eben'
  if (mins < 60) return `vor ${mins} Min.`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `vor ${hours} Std.`
  const days = Math.floor(hours / 24)
  return `vor ${days} ${days === 1 ? 'Tag' : 'Tagen'}`
}

export function KontorPage() {
  usePageTitle('Kontor')

  if (config.COMMUNITY_MODE === 'external') return <ExternalKontor />
  return <BoardKontor />
}

function ExternalKontor() {
  return (
    <div>
      <AppPageHeader kicker="Kontor" title="Die Community" />
      <div className="kontor-card mx-auto max-w-lg p-8 text-center md:p-10">
        <MessagesSquare className="mx-auto h-12 w-12 text-gold-light" />
        <h2 className="mt-5 font-display text-2xl font-semibold text-parchment">Komm in die {config.COMMUNITY_EXTERNAL_NAME}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slateink">
          Unser Austausch findet aktuell in der {config.COMMUNITY_EXTERNAL_NAME} statt. Tritt bei und werde Teil der
          Runde — auf Augenhöhe, hilfsbereit und ohne Verkaufsdruck.
        </p>
        <Button href={config.COMMUNITY_EXTERNAL_URL} variant="gold" className="mt-6">
          Jetzt beitreten <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function BoardKontor() {
  const { user } = useAuth()
  const [posts, setPosts] = useState<CommunityPost[] | null>(null)
  const [filter, setFilter] = useState<string>('alle')
  const [showRules, setShowRules] = useState(false)
  const [composing, setComposing] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(RULES_KEY)) setShowRules(true)
  }, [])

  const load = () => backend.listPosts().then(setPosts)
  useEffect(() => {
    load()
  }, [])

  const acceptRules = () => {
    localStorage.setItem(RULES_KEY, '1')
    setShowRules(false)
  }

  const filtered = (posts ?? []).filter((p) => filter === 'alle' || p.category === filter)

  return (
    <div>
      <RulesModal open={showRules} onAccept={acceptRules} />

      <AppPageHeader
        kicker="Kontor"
        title="Frage & Austausch"
        subtitle="Stell deine Fragen, teile Erfahrungen, hilf anderen. Respektvoll, ohne Finanzberatung, ohne Werbung."
      >
        <Button onClick={() => setComposing(true)} variant="gold">
          <Plus className="h-4 w-4" /> Beitrag schreiben
        </Button>
      </AppPageHeader>

      {/* Filter */}
      <div className="mb-5 flex flex-wrap gap-2">
        <FilterChip active={filter === 'alle'} onClick={() => setFilter('alle')} label="Alle Räume" />
        {CATEGORIES.map((c) => (
          <FilterChip key={c.value} active={filter === c.value} onClick={() => setFilter(c.value)} label={c.label} />
        ))}
      </div>

      <AnimatePresence>
        {composing && (
          <Composer
            onClose={() => setComposing(false)}
            onCreated={() => {
              setComposing(false)
              load()
            }}
          />
        )}
      </AnimatePresence>

      {posts === null ? (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="kontor-card h-28 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="kontor-card p-10 text-center">
          <MessagesSquare className="mx-auto h-10 w-10 text-slateink" />
          <p className="mt-4 text-sm text-slateink">Noch keine Beiträge im Kontor — eröffne die erste Runde.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} currentUserId={user?.id} onChanged={load} />
          ))}
        </ul>
      )}
    </div>
  )
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
        active ? 'border-gold bg-gold/10 text-gold-light' : 'border-night-line text-slateink hover:border-gold/40'
      }`}
    >
      {label}
    </button>
  )
}

function Composer({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState<string>(CATEGORIES[0].value)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async () => {
    if (!title.trim() || !body.trim()) {
      setError('Bitte gib Titel und Text ein.')
      return
    }
    setBusy(true)
    const res = await backend.createPost(title.trim(), body.trim(), category)
    setBusy(false)
    if (res.error) return setError(res.error)
    onCreated()
  }

  return (
    <motion.div
      className="kontor-card mb-5 p-5"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-parchment">Neuer Beitrag</h2>
        <button onClick={onClose} aria-label="Schließen" className="text-slateink hover:text-parchment">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titel deiner Frage oder deines Beitrags"
          className="input-field"
          aria-label="Titel"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Beschreibe dein Anliegen …"
          rows={4}
          className="input-field resize-y"
          aria-label="Text"
        />
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              aria-pressed={category === c.value}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                category === c.value ? 'border-gold bg-gold/10 text-gold-light' : 'border-night-line text-slateink'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <div className="flex justify-end">
          <Button onClick={submit} variant="gold" disabled={busy}>
            <Send className="h-4 w-4" /> Veröffentlichen
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

function PostCard({ post, currentUserId, onChanged }: { post: CommunityPost; currentUserId?: string; onChanged: () => void }) {
  const [open, setOpen] = useState(false)
  const [replies, setReplies] = useState<CommunityReply[] | null>(null)
  const [replyText, setReplyText] = useState('')
  const [busy, setBusy] = useState(false)

  const loadReplies = () => backend.listReplies(post.id).then(setReplies)

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next && replies === null) loadReplies()
  }

  const submitReply = async () => {
    if (!replyText.trim()) return
    setBusy(true)
    const res = await backend.createReply(post.id, replyText.trim())
    setBusy(false)
    if (!res.error) {
      setReplyText('')
      loadReplies()
    }
  }

  const deletePost = async () => {
    await backend.deletePost(post.id)
    onChanged()
  }

  const deleteReply = async (id: string) => {
    await backend.deleteReply(id)
    loadReplies()
  }

  return (
    <li className="kontor-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <span className="rounded border border-gold/25 bg-gold/5 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-gold-light">
            {categoryLabel(post.category)}
          </span>
          <h2 className="mt-2 font-display text-xl font-semibold text-parchment">{post.title}</h2>
          <p className="mt-1 font-mono text-[11px] text-slateink">
            {post.authorName} · {timeAgo(post.createdAt)}
          </p>
        </div>
        {currentUserId === post.userId && (
          <button onClick={deletePost} aria-label="Beitrag löschen" className="shrink-0 text-slateink hover:text-red-300">
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-parchment-dim">{post.body}</p>

      <button onClick={toggle} className="mt-3 text-xs text-gold-light hover:underline">
        {open ? 'Antworten ausblenden' : 'Antworten anzeigen / antworten'}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-3 border-t border-night-line pt-4"
          >
            {replies === null ? (
              <p className="text-xs text-slateink">Lädt …</p>
            ) : replies.length === 0 ? (
              <p className="text-xs text-slateink">Noch keine Antworten — sei die erste Stimme.</p>
            ) : (
              replies.map((r) => (
                <div key={r.id} className="flex items-start gap-2.5 rounded-lg bg-night-soft px-3.5 py-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 font-mono text-[10px] font-semibold text-gold-light">
                    {r.authorName[0]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] text-slateink">
                      {r.authorName} · {timeAgo(r.createdAt)}
                    </p>
                    <p className="mt-0.5 whitespace-pre-line text-sm text-parchment-dim">{r.body}</p>
                  </div>
                  {currentUserId === r.userId && (
                    <button onClick={() => deleteReply(r.id)} aria-label="Antwort löschen" className="text-slateink hover:text-red-300">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))
            )}

            <div className="flex gap-2">
              <input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submitReply()}
                placeholder="Antwort schreiben …"
                className="input-field flex-1 py-2"
                aria-label="Antwort"
              />
              <Button onClick={submitReply} variant="gold" disabled={busy}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function RulesModal({ open, onAccept }: { open: boolean; onAccept: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Community-Regeln"
        >
          <motion.div
            className="kontor-card w-full max-w-md p-7"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="font-display text-2xl font-semibold text-parchment">Willkommen im Kontor</h2>
            <p className="mt-2 text-sm text-slateink">Drei einfache Regeln halten unsere Runde wertvoll:</p>
            <ul className="mt-4 space-y-3 text-sm text-parchment-dim">
              <li className="flex gap-3">
                <span className="font-mono text-gold-light">1.</span>
                <span><strong className="text-parchment">Respektvoll & auf Augenhöhe.</strong> Keine Frage ist zu einfach. Wir behandeln einander fair — unabhängig von Erfahrung oder Portfolio.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-gold-light">2.</span>
                <span><strong className="text-parchment">Keine Finanzberatung.</strong> Wir teilen Erfahrungen und Meinungen — keine individuelle Anlage-, Steuer- oder Rechtsberatung. Bei Fachfragen verweisen wir auf Profis.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-gold-light">3.</span>
                <span><strong className="text-parchment">Keine Werbung.</strong> Das Kontor ist kein Vertriebskanal. Keine Affiliate-Links, kein Anwerben, kein Spam.</span>
              </li>
            </ul>
            <Button onClick={onAccept} variant="gold" className="mt-6 w-full">
              Verstanden — los geht’s
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
