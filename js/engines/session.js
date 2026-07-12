/* ============================================================
   Session – gemeinsamer Ablauf für Quiz-, Lückentext-,
   Rechen- und gemischte Runden (Interleaving)
   ============================================================
   Ein Item ist { type: 'quiz'|'cloze'|'calc', data: ... }.
   Die Session rendert Fortschritt, delegiert an die Engines
   und zeigt am Ende eine Auswertung.
   ============================================================ */

const Session = (() => {

  const RENDERERS = {
    quiz: (item, el, done) => QuizEngine.renderItem(item.data, el, done),
    cloze: (item, el, done) => ClozeEngine.renderItem(item.data, el, done),
    calc: (item, el, done) => CalcEngine.renderItem(item.data, el, done),
  };

  /**
   * opts: { title, backLink, logType }
   */
  function run(container, items, opts = {}) {
    if (!items.length) {
      container.innerHTML = `
        <div class="card result-panel">
          <div class="big">🤷</div>
          <h2>Keine Aufgaben gefunden</h2>
          <p class="muted">Für diese Auswahl gibt es (noch) keine Inhalte.</p>
          <a class="btn btn-primary" href="${opts.backLink || '#/dashboard'}">Zurück</a>
        </div>`;
      return;
    }

    let index = 0;
    let correct = 0;
    const total = items.length;

    function show() {
      if (index >= total) return finish();
      const item = items[index];

      container.innerHTML = `
        <div class="session-head">
          <a class="btn btn-ghost" href="${opts.backLink || '#/dashboard'}" title="Runde abbrechen">✕</a>
          <div class="progress-bar"><div style="width:${(index / total) * 100}%"></div></div>
          <span class="counter">${index + 1} / ${total}</span>
        </div>
        <div id="session-item"></div>`;

      const slot = container.querySelector('#session-item');
      RENDERERS[item.type](item, slot, result => {
        if (result.correct) correct++;
        index++;
        show();
      });
    }

    function finish() {
      const pct = Math.round((correct / total) * 100);
      Store.logSession({ type: opts.logType || 'quiz', total, correct });
      Gami.award('sessionFinished');
      Gami.checkAchievements();
      App.refreshTopbar();

      let icon, verdict;
      if (pct === 100) { icon = '🥇'; verdict = 'Perfekt! Alles richtig – dieses Thema sitzt.'; }
      else if (pct >= 80) { icon = '💪'; verdict = 'Sehr stark. Schau dir die Erklärungen zu den Fehlern nochmal an.'; }
      else if (pct >= 50) { icon = '📈'; verdict = 'Gute Basis. Wiederhole die Lektion und versuch es in 1–2 Tagen erneut – der Abstand hilft dem Gedächtnis.'; }
      else { icon = '🌱'; verdict = 'Jeder Profi hat mal so angefangen. Lies zuerst die Lektion, dann klappt die nächste Runde deutlich besser.'; }

      container.innerHTML = `
        <div class="card result-panel">
          <div class="big">${icon}</div>
          <h2>${opts.title || 'Runde'} beendet</h2>
          <p class="result-score">${correct} von ${total} richtig (${pct} %)</p>
          <p class="muted">${verdict}</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" id="btn-again">🔁 Nochmal (neu gemischt)</button>
            <a class="btn btn-primary" href="${opts.backLink || '#/dashboard'}">Fertig</a>
          </div>
        </div>`;

      const againBtn = container.querySelector('#btn-again');
      if (opts.rebuild) {
        againBtn.addEventListener('click', () => run(container, opts.rebuild(), opts));
      } else {
        againBtn.addEventListener('click', () => {
          index = 0; correct = 0;
          items = U.shuffle(items);
          show();
        });
      }
    }

    show();
  }

  // ---------- Zusammenstellung von Runden ----------

  /** Quiz-Runde für ein Unterthema (oder ganzen Bereich bei subId=null) */
  function buildQuiz(areaId, subId, limit = 10) {
    const area = LERN.byId(areaId);
    if (!area) return [];
    let pool = (area.quiz || []).filter(q => !subId || q.sub === subId);
    pool = sortByPriority(pool);
    return pool.slice(0, limit).map(q => ({ type: 'quiz', data: q }));
  }

  /** Lückentext-Runde */
  function buildCloze(areaId, subId) {
    const area = LERN.byId(areaId);
    if (!area) return [];
    const pool = (area.cloze || []).filter(c => !subId || c.sub === subId);
    return U.shuffle(pool).map(c => ({ type: 'cloze', data: c }));
  }

  /** Rechen-Runde */
  function buildCalc(areaId, subId, limit = 6) {
    const area = LERN.byId(areaId);
    if (!area) return [];
    const pool = (area.calc || []).filter(c => !subId || c.sub === subId);
    return U.shuffle(pool).slice(0, limit).map(c => ({ type: 'calc', data: c }));
  }

  /**
   * Tagesmix: Interleaving über alle Themenbereiche und Aufgabentypen.
   * Bevorzugt Fragen aus schwachen Unterthemen und noch nie gesehene Fragen.
   */
  function buildDailyMix(size = 12) {
    const quizPool = sortByPriority(LERN.allQuiz());
    const clozePool = U.shuffle(LERN.allCloze());
    const calcPool = U.shuffle(LERN.allCalc());

    const nQuiz = Math.min(quizPool.length, size - 4);
    const items = quizPool.slice(0, nQuiz).map(q => ({ type: 'quiz', data: q }));
    items.push(...clozePool.slice(0, 2).map(c => ({ type: 'cloze', data: c })));
    items.push(...calcPool.slice(0, 2).map(c => ({ type: 'calc', data: c })));

    return interleave(items).slice(0, size);
  }

  /** Fragen priorisieren: schwache Themen & selten Gesehenes zuerst, mit Zufall */
  function sortByPriority(pool) {
    const s = Store.get();
    return pool
      .map(q => {
        const qs = s.quizStats[q.id];
        const sub = s.subStats[`${q.areaId}/${q.sub}`];
        let score = Math.random(); // Grundrauschen
        if (!qs) score += 1.2;                                   // nie gesehen
        else if (qs.correct / qs.seen < 0.6) score += 1.0;       // oft falsch
        if (sub && sub.attempts >= 4 && sub.correct / sub.attempts < 0.7) score += 0.6; // schwaches Thema
        return { q, score };
      })
      .sort((a, b) => b.score - a.score)
      .map(x => x.q);
  }

  /** Items so anordnen, dass möglichst nie zwei gleiche Themenbereiche aufeinanderfolgen */
  function interleave(items) {
    const shuffled = U.shuffle(items);
    const result = [];
    const rest = shuffled.slice();
    while (rest.length) {
      const prev = result[result.length - 1];
      let idx = rest.findIndex(it => !prev || it.data.areaId !== prev.data.areaId);
      if (idx === -1) idx = 0;
      result.push(rest.splice(idx, 1)[0]);
    }
    return result;
  }

  return { run, buildQuiz, buildCloze, buildCalc, buildDailyMix };
})();
