/* ============================================================
   Storage – Lernfortschritt in localStorage
   ============================================================
   Alles, was gespeichert wird, liegt unter einem einzigen Key.
   Struktur siehe DEFAULT_STATE. Über Store.get()/Store.save()
   greifen alle Module auf denselben State zu.
   ============================================================ */

const Store = (() => {
  const KEY = 'immomentor-v1';

  const DEFAULT_STATE = {
    xp: 0,
    // Streak: letzter Lerntag + aktuelle Serie
    streak: { last: null, count: 0, best: 0 },
    // Aktivität pro Tag: { "2026-07-11": anzahlAktionen }
    activity: {},
    // Erledigte Lektionen: { "bewertung/grundlagen": timestamp }
    lessonsDone: {},
    // Quiz-Statistik je Frage: { qid: { seen, correct } }
    quizStats: {},
    // Statistik je Unterthema: { "bewertung/grundlagen": { attempts, correct } }
    subStats: {},
    // Spaced-Repetition-Zustand je Karte: { cardId: {ef, interval, reps, due} }
    srs: {},
    // Abgeschlossene Fallstudien: { caseId: bestScorePct }
    casesDone: {},
    // Freigeschaltete Erfolge: { achievementId: timestamp }
    achievements: {},
    // Verlauf abgeschlossener Sessions (für Statistik, max. 200)
    sessionLog: [],
  };

  let state = null;

  function load() {
    if (state) return state;
    try {
      const raw = localStorage.getItem(KEY);
      state = raw ? Object.assign({}, structuredClone(DEFAULT_STATE), JSON.parse(raw)) : structuredClone(DEFAULT_STATE);
    } catch (e) {
      console.warn('Konnte Speicherstand nicht laden, starte frisch.', e);
      state = structuredClone(DEFAULT_STATE);
    }
    return state;
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Konnte Speicherstand nicht sichern.', e);
    }
  }

  /** Aktivität für heute registrieren (pflegt auch den Streak) */
  function touchActivity(n = 1) {
    const s = load();
    const today = U.todayKey();
    s.activity[today] = (s.activity[today] || 0) + n;

    if (s.streak.last !== today) {
      if (s.streak.last && U.dayDiff(s.streak.last, today) === 1) {
        s.streak.count += 1;
      } else if (!s.streak.last || U.dayDiff(s.streak.last, today) > 1) {
        s.streak.count = 1;
      }
      s.streak.last = today;
      s.streak.best = Math.max(s.streak.best, s.streak.count);
    }
    save();
  }

  /** Ist der Streak noch "am Leben"? (heute oder gestern gelernt) */
  function liveStreak() {
    const s = load();
    if (!s.streak.last) return 0;
    const diff = U.dayDiff(s.streak.last, U.todayKey());
    return diff <= 1 ? s.streak.count : 0;
  }

  /** Quiz-Antwort verbuchen */
  function recordQuizAnswer(qid, subKey, correct) {
    const s = load();
    const q = s.quizStats[qid] || (s.quizStats[qid] = { seen: 0, correct: 0 });
    q.seen += 1;
    if (correct) q.correct += 1;
    recordSubAttempt(subKey, correct);
  }

  /** Versuch auf Unterthema verbuchen (auch für Lückentext/Rechnen/Fälle) */
  function recordSubAttempt(subKey, correct) {
    const s = load();
    if (!subKey) { save(); return; }
    const st = s.subStats[subKey] || (s.subStats[subKey] = { attempts: 0, correct: 0 });
    st.attempts += 1;
    if (correct) st.correct += 1;
    save();
  }

  function markLessonDone(key) {
    const s = load();
    if (!s.lessonsDone[key]) {
      s.lessonsDone[key] = Date.now();
      save();
      return true; // war neu
    }
    return false;
  }

  function logSession(entry) {
    const s = load();
    s.sessionLog.push(Object.assign({ ts: Date.now() }, entry));
    if (s.sessionLog.length > 200) s.sessionLog = s.sessionLog.slice(-200);
    save();
  }

  /** Kompletten Fortschritt exportieren / importieren / löschen */
  function exportJson() {
    return JSON.stringify(load(), null, 2);
  }
  function importJson(json) {
    const parsed = JSON.parse(json); // wirft bei Fehler
    state = Object.assign({}, structuredClone(DEFAULT_STATE), parsed);
    save();
  }
  function reset() {
    state = structuredClone(DEFAULT_STATE);
    save();
  }

  return {
    get: load, save,
    touchActivity, liveStreak,
    recordQuizAnswer, recordSubAttempt, markLessonDone, logSession,
    exportJson, importJson, reset,
  };
})();
