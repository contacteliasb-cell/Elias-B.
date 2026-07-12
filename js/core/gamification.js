/* ============================================================
   Gamification – XP, Level, Erfolge
   ============================================================
   Bewusst leichtgewichtig: Punkte belohnen echtes Lernen
   (richtige Antworten, erledigte Lektionen, Wiederholungen),
   keine Klick-Farmen.
   ============================================================ */

const Gami = (() => {

  // XP-Werte je Aktion
  const XP = {
    quizCorrect: 10,
    quizWrong: 2,       // auch Fehler sind Lernen (Testing-Effekt)
    clozeGap: 3,
    calcCorrect: 15,
    calcWrong: 3,
    flashReview: 5,
    lessonDone: 25,
    caseStepBest: 12,
    caseStepOkay: 6,
    caseStepBad: 2,
    sessionFinished: 20,
  };

  // Levelschwellen: Level n erreicht ab n²·100 XP
  function levelForXp(xp) {
    return Math.floor(Math.sqrt(xp / 100)) + 1;
  }
  function xpForLevel(level) {
    return Math.pow(level - 1, 2) * 100;
  }

  const LEVEL_TITLES = [
    'Neuling', 'Praktikant/in', 'Azubi 1. Jahr', 'Azubi 2. Jahr', 'Azubi 3. Jahr',
    'Junior-Makler/in', 'Makler/in', 'Senior-Makler/in', 'Teamleiter/in',
    'Büroleiter/in', 'Immobilien-Profi', 'Investment-Profi', 'Branchen-Kenner/in',
    'Top-Makler/in', 'Immobilien-Legende',
  ];

  function levelTitle(level) {
    return LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  }

  /** XP gutschreiben + Streak/Aktivität pflegen */
  function award(kind, times = 1) {
    const s = Store.get();
    const amount = (XP[kind] || 0) * times;
    if (amount <= 0) return 0;
    const before = levelForXp(s.xp);
    s.xp += amount;
    const after = levelForXp(s.xp);
    Store.touchActivity();
    Store.save();
    if (after > before) {
      U.toast(`🎉 Level ${after} erreicht: ${levelTitle(after)}!`, 4000);
    }
    App.refreshTopbar();
    checkAchievements();
    return amount;
  }

  // ---------- Erfolge ----------

  const ACHIEVEMENTS = [
    { id: 'first-quiz',    icon: '🎯', title: 'Erster Treffer',        desc: 'Beantworte deine erste Quizfrage richtig.',
      check: s => Object.values(s.quizStats).some(q => q.correct > 0) },
    { id: 'first-lesson',  icon: '📖', title: 'Leseratte',             desc: 'Schließe deine erste Lektion ab.',
      check: s => Object.keys(s.lessonsDone).length >= 1 },
    { id: 'ten-lessons',   icon: '🎓', title: 'Wissensdurst',          desc: 'Schließe 10 Lektionen ab.',
      check: s => Object.keys(s.lessonsDone).length >= 10 },
    { id: 'all-lessons',   icon: '🏛️', title: 'Grundausbildung',       desc: 'Schließe alle Lektionen ab.',
      check: s => Object.keys(s.lessonsDone).length >= LERN.allSubtopics().length },
    { id: 'streak-3',      icon: '🔥', title: 'Dranbleiber',           desc: 'Lerne an 3 Tagen in Folge.',
      check: s => s.streak.best >= 3 },
    { id: 'streak-7',      icon: '🚀', title: 'Eine Woche stark',      desc: 'Lerne an 7 Tagen in Folge.',
      check: s => s.streak.best >= 7 },
    { id: 'streak-30',     icon: '💎', title: 'Eiserne Disziplin',     desc: 'Lerne an 30 Tagen in Folge.',
      check: s => s.streak.best >= 30 },
    { id: 'cards-50',      icon: '🃏', title: 'Kartenspieler',         desc: 'Wiederhole 50 Karteikarten.',
      check: s => totalReviews(s) >= 50 },
    { id: 'cards-500',     icon: '🧠', title: 'Gedächtnis-Athlet',     desc: 'Wiederhole 500 Karteikarten.',
      check: s => totalReviews(s) >= 500 },
    { id: 'quiz-100',      icon: '💯', title: 'Quiz-Hunderter',        desc: 'Beantworte 100 Quizfragen.',
      check: s => Object.values(s.quizStats).reduce((a, q) => a + q.seen, 0) >= 100 },
    { id: 'first-case',    icon: '🕵️', title: 'Erster Fall gelöst',    desc: 'Schließe eine Fallstudie ab.',
      check: s => Object.keys(s.casesDone).length >= 1 },
    { id: 'all-cases',     icon: '🏆', title: 'Fall-Profi',            desc: 'Schließe alle Fallstudien ab.',
      check: s => Object.keys(s.casesDone).length >= LERN.allCases().length },
    { id: 'xp-1000',       icon: '⭐', title: '1.000 XP',              desc: 'Sammle 1.000 Erfahrungspunkte.',
      check: s => s.xp >= 1000 },
    { id: 'xp-10000',      icon: '🌟', title: '10.000 XP',             desc: 'Sammle 10.000 Erfahrungspunkte.',
      check: s => s.xp >= 10000 },
    { id: 'perfect-quiz',  icon: '🥇', title: 'Fehlerfrei',            desc: 'Beende eine Quiz-Runde mit 100 %.',
      check: s => s.sessionLog.some(e => e.type === 'quiz' && e.total >= 5 && e.correct === e.total) },
  ];

  function totalReviews(s) {
    return (s.sessionLog || [])
      .filter(e => e.type === 'flashcards')
      .reduce((a, e) => a + (e.total || 0), 0);
  }

  function checkAchievements() {
    const s = Store.get();
    for (const a of ACHIEVEMENTS) {
      if (!s.achievements[a.id] && a.check(s)) {
        s.achievements[a.id] = Date.now();
        Store.save();
        U.toast(`${a.icon} Erfolg freigeschaltet: ${a.title}`, 4200);
      }
    }
  }

  return { XP, award, levelForXp, xpForLevel, levelTitle, ACHIEVEMENTS, checkAchievements };
})();
