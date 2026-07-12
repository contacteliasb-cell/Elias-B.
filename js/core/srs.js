/* ============================================================
   SRS – Spaced Repetition nach SM-2 (Anki-Logik, vereinfacht)
   ============================================================
   Jede Karteikarte hat einen Zustand:
     ef       Easiness-Faktor (Startwert 2.5, min. 1.3)
     interval aktuelles Intervall in Tagen
     reps     Anzahl erfolgreicher Wiederholungen in Folge
     due      Fälligkeits-Zeitstempel (ms)

   Bewertungen (wie bei Anki):
     0 = Nochmal  (vergessen)
     3 = Schwer
     4 = Gut
     5 = Einfach
   ============================================================ */

const SRS = (() => {

  const DAY = 86400000;

  function getState(cardId) {
    const s = Store.get();
    return s.srs[cardId] || null;
  }

  /** Karte ist fällig, wenn sie neu ist oder due <= jetzt */
  function isDue(cardId, now = Date.now()) {
    const st = getState(cardId);
    return !st || st.due <= now;
  }

  /** SM-2-Update nach einer Bewertung */
  function review(cardId, quality) {
    const s = Store.get();
    const st = s.srs[cardId] || { ef: 2.5, interval: 0, reps: 0, due: 0 };

    if (quality < 3) {
      // Vergessen: von vorn, aber EF bleibt (leicht reduziert)
      st.reps = 0;
      st.interval = 0;
      st.ef = Math.max(1.3, st.ef - 0.2);
      st.due = Date.now() + 10 * 60 * 1000; // in 10 Minuten wieder
    } else {
      // EF-Anpassung nach SM-2-Formel
      st.ef = Math.max(1.3, st.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
      st.reps += 1;
      if (st.reps === 1) st.interval = 1;
      else if (st.reps === 2) st.interval = quality === 5 ? 4 : 3;
      else st.interval = Math.round(st.interval * st.ef * (quality === 3 ? 0.8 : 1));
      if (quality === 5) st.interval = Math.round(st.interval * 1.15);
      st.interval = Math.max(1, st.interval);
      st.due = Date.now() + st.interval * DAY;
    }

    s.srs[cardId] = st;
    Store.save();
    return st;
  }

  /** Alle fälligen Karten (optional gefiltert nach Themenbereich) */
  function dueCards(areaId = null, now = Date.now()) {
    const all = LERN.allFlashcards();
    return all.filter(c => (!areaId || c.areaId === areaId) && isDue(c.id, now));
  }

  /** Anzahl fälliger Karten */
  function dueCount(areaId = null) {
    return dueCards(areaId).length;
  }

  /** Neue (nie gelernte) Karten */
  function newCount(areaId = null) {
    const s = Store.get();
    return LERN.allFlashcards()
      .filter(c => (!areaId || c.areaId === areaId) && !s.srs[c.id]).length;
  }

  /** Menschlich lesbares nächstes Intervall für die Buttons */
  function previewInterval(cardId, quality) {
    const st = getState(cardId) || { ef: 2.5, interval: 0, reps: 0 };
    if (quality < 3) return '10 Min';
    let reps = st.reps + 1, interval;
    if (reps === 1) interval = 1;
    else if (reps === 2) interval = quality === 5 ? 4 : 3;
    else interval = Math.round(st.interval * st.ef * (quality === 3 ? 0.8 : 1));
    if (quality === 5) interval = Math.round(interval * 1.15);
    interval = Math.max(1, interval);
    return interval === 1 ? '1 Tag' : `${interval} Tage`;
  }

  return { getState, isDue, review, dueCards, dueCount, newCount, previewInterval };
})();
