import { AlertTriangle, CheckCircle2, LogOut, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { config } from '../../config'
import { register as registerContent } from '../../content/de'
import { useAuth } from '../../lib/auth/AuthContext'
import { backend } from '../../lib/backend'
import { completedCount, currentRank, quizAverage } from '../../lib/ranks'
import { usePageTitle } from '../../lib/usePageTitle'
import { AppPageHeader } from '../AppPageHeader'

export function ProfilPage() {
  usePageTitle('Profil')
  const { user, progress, refreshUser, logout } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user?.displayName ?? '')
  const [level, setLevel] = useState(user?.levelSlug ?? 'lehrling')
  const [profileMsg, setProfileMsg] = useState<string | null>(null)
  const [profileBusy, setProfileBusy] = useState(false)

  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [pwMsg, setPwMsg] = useState<string | null>(null)
  const [pwErr, setPwErr] = useState<string | null>(null)
  const [pwBusy, setPwBusy] = useState(false)

  const [confirmDelete, setConfirmDelete] = useState(false)

  const rank = currentRank(progress)
  const done = completedCount(progress)
  const quizAvg = quizAverage(progress)

  const saveProfile = async () => {
    setProfileMsg(null)
    setProfileBusy(true)
    const res = await backend.updateProfile({ displayName: name.trim(), levelSlug: level })
    setProfileBusy(false)
    if (res.error) return setProfileMsg(res.error)
    await refreshUser()
    setProfileMsg('Gespeichert.')
  }

  const changePassword = async () => {
    setPwMsg(null)
    setPwErr(null)
    if (pw.length < 8) return setPwErr('Das Passwort muss mindestens 8 Zeichen lang sein.')
    if (pw !== pw2) return setPwErr('Die Passwörter stimmen nicht überein.')
    setPwBusy(true)
    const res = await backend.updatePassword(pw)
    setPwBusy(false)
    if (res.error) return setPwErr(res.error)
    setPw('')
    setPw2('')
    setPwMsg('Passwort geändert.')
  }

  const doLogout = async () => {
    await logout()
    navigate('/')
  }

  const deleteAccount = async () => {
    await backend.deleteAccount()
    navigate('/')
  }

  return (
    <div className="mx-auto max-w-2xl">
      <AppPageHeader kicker="Profil" title="Dein Konto" />

      {/* Fortschritts-Übersicht */}
      <section className="kontor-card mb-6 grid grid-cols-3 gap-4 p-5 text-center">
        <div>
          <p className="font-mono text-2xl font-semibold text-gold-light">{rank.name}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slateink">Rang</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold text-gold-light">{done}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slateink">Lektionen</p>
        </div>
        <div>
          <p className="font-mono text-2xl font-semibold text-gold-light">{quizAvg != null ? `${quizAvg}%` : '—'}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slateink">Quiz-Schnitt</p>
        </div>
      </section>

      {/* Profil bearbeiten */}
      <section className="kontor-card mb-6 p-6">
        <h2 className="font-display text-xl font-semibold text-parchment">Angaben ändern</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="pf-name" className="mb-1.5 block text-sm text-parchment-dim">Anzeigename</label>
            <input id="pf-name" value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-parchment-dim">Erfahrungslevel</label>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {registerContent.fields.levels.map((lv) => {
                const active = level === lv.value
                return (
                  <button
                    key={lv.value}
                    onClick={() => setLevel(lv.value)}
                    className={`rounded-lg border px-3.5 py-2.5 text-left transition-all ${
                      active ? 'border-gold bg-gold/10' : 'border-night-line bg-night-soft hover:border-gold/40'
                    }`}
                  >
                    <span className={`block font-display text-base font-semibold ${active ? 'text-gold-light' : 'text-parchment'}`}>
                      {lv.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
          {profileMsg && (
            <p className={`flex items-center gap-1.5 text-sm ${profileMsg === 'Gespeichert.' ? 'text-emerald-300' : 'text-red-300'}`}>
              {profileMsg === 'Gespeichert.' && <CheckCircle2 className="h-4 w-4" />}
              {profileMsg}
            </p>
          )}
          <Button onClick={saveProfile} variant="gold" disabled={profileBusy}>
            Speichern
          </Button>
        </div>
      </section>

      {/* Passwort ändern */}
      <section className="kontor-card mb-6 p-6">
        <h2 className="font-display text-xl font-semibold text-parchment">Passwort ändern</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="pf-pw" className="mb-1.5 block text-sm text-parchment-dim">Neues Passwort</label>
            <input id="pf-pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="input-field" autoComplete="new-password" />
          </div>
          <div>
            <label htmlFor="pf-pw2" className="mb-1.5 block text-sm text-parchment-dim">Wiederholen</label>
            <input id="pf-pw2" type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} className="input-field" autoComplete="new-password" />
          </div>
          {pwErr && <p className="text-sm text-red-300">{pwErr}</p>}
          {pwMsg && <p className="flex items-center gap-1.5 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" />{pwMsg}</p>}
          <Button onClick={changePassword} variant="outline" disabled={pwBusy}>
            Passwort speichern
          </Button>
        </div>
      </section>

      {/* Abmelden */}
      <section className="kontor-card mb-6 flex items-center justify-between p-6">
        <div>
          <h2 className="font-display text-lg font-semibold text-parchment">Abmelden</h2>
          <p className="text-sm text-slateink">Du wirst zur Startseite zurückgeführt.</p>
        </div>
        <Button onClick={doLogout} variant="ghost">
          <LogOut className="h-4 w-4" /> Abmelden
        </Button>
      </section>

      {/* Account löschen */}
      <section className="rounded-xl border border-bordeaux-light/40 bg-bordeaux/10 p-6">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-parchment">
          <AlertTriangle className="h-5 w-5 text-bordeaux-light" /> Account löschen
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slateink">
          {backend.isDemo
            ? 'Im Demo-Modus werden dein lokales Konto und dein Fortschritt aus diesem Browser gelöscht.'
            : `Deine Profil- und Fortschrittsdaten werden gelöscht und du wirst abgemeldet. Die endgültige Löschung deines Zugangs veranlassen wir nach einer kurzen Mail an ${config.CONTACT_EMAIL}.`}
        </p>
        {!confirmDelete ? (
          <button
            onClick={() => setConfirmDelete(true)}
            className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-bordeaux-light/50 px-4 py-2 text-sm text-red-200 transition-colors hover:bg-bordeaux/30"
          >
            <Trash2 className="h-4 w-4" /> Account löschen
          </button>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={deleteAccount}
              className="inline-flex items-center gap-1.5 rounded-lg border border-bordeaux-light bg-bordeaux/40 px-4 py-2 text-sm font-medium text-red-100 transition-colors hover:bg-bordeaux/60"
            >
              <Trash2 className="h-4 w-4" /> Ja, endgültig löschen
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="rounded-lg border border-night-line px-4 py-2 text-sm text-parchment-dim hover:border-gold/40"
            >
              Abbrechen
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
