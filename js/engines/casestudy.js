/* ============================================================
   CaseEngine – Fallstudien mit mehreren Entscheidungsschritten
   ============================================================
   Ein Fall besteht aus Intro + Schritten. Jeder Schritt zeigt
   eine Situation, eine Frage und Handlungsoptionen mit
   Qualität 'best' | 'okay' | 'bad' und individuellem Feedback.
   ============================================================ */

const CaseEngine = (() => {

  const QUALITY = {
    best: { pts: 2, label: '💚 Starke Entscheidung', cls: 'best', xp: 'caseStepBest' },
    okay: { pts: 1, label: '🟡 Geht, aber es gibt Besseres', cls: 'okay', xp: 'caseStepOkay' },
    bad:  { pts: 0, label: '🔴 Riskant / falsch', cls: 'bad', xp: 'caseStepBad' },
  };

  function run(container, areaId, caseId) {
    const area = LERN.byId(areaId);
    const cs = area && (area.cases || []).find(c => c.id === caseId);
    if (!cs) { container.innerHTML = '<p>Fallstudie nicht gefunden.</p>'; return; }

    let step = -1; // -1 = Intro
    let points = 0;
    const maxPoints = cs.steps.length * 2;

    function renderIntro() {
      container.innerHTML = `
        <div class="crumbs"><a href="#/themen">Themen</a> › <a href="#/thema/${area.id}">${area.icon} ${area.title}</a> › Fallstudie</div>
        <div class="q-card">
          <span class="q-type-tag">Fallstudie · ${cs.steps.length} Entscheidungen</span>
          <h2 style="margin-top:.2rem">${cs.title}</h2>
          <div class="case-situation">${cs.intro}</div>
          <p class="muted small">In jedem Schritt entscheidest du, wie du als Makler/in vorgehst.
          Es gibt oft mehrere vertretbare Wege – aber meist einen, den ein erfahrener Profi wählen würde.</p>
          <div class="btn-row">
            <button class="btn btn-primary" id="btn-start">Fall starten →</button>
            <a class="btn" href="#/thema/${area.id}">Zurück</a>
          </div>
        </div>`;
      container.querySelector('#btn-start').addEventListener('click', () => { step = 0; renderStep(); });
    }

    function renderStep() {
      if (step >= cs.steps.length) return renderResult();
      const st = cs.steps[step];
      const opts = U.shuffle(st.options.map(o => o));

      container.innerHTML = `
        <div class="session-head">
          <a class="btn btn-ghost" href="#/thema/${area.id}">✕</a>
          <div class="progress-bar"><div style="width:${(step / cs.steps.length) * 100}%"></div></div>
          <span class="counter">Schritt ${step + 1} / ${cs.steps.length}</span>
        </div>
        <div class="q-card case-step">
          <div class="case-situation">${st.situation}</div>
          <div class="q-text">${st.question}</div>
          <div class="q-options"></div>
          <div class="q-feedback-slot"></div>
          <div class="session-footer" hidden><button class="btn btn-primary btn-next">Weiter →</button></div>
        </div>`;

      const optBox = container.querySelector('.q-options');
      const fbSlot = container.querySelector('.q-feedback-slot');
      const footer = container.querySelector('.session-footer');
      let answered = false;

      opts.forEach(o => {
        const btn = U.el('button', 'q-option', o.text);
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          const q = QUALITY[o.quality] || QUALITY.bad;
          points += q.pts;
          Gami.award(q.xp);

          optBox.querySelectorAll('.q-option').forEach((b, i) => {
            b.disabled = true;
            if (opts[i].quality === 'best') b.classList.add('correct');
          });
          if (o.quality === 'bad') btn.classList.add('wrong');

          fbSlot.innerHTML = `
            <div class="case-option-feedback ${q.cls}">
              <strong>${q.label}</strong><br>${o.feedback}
            </div>`;

          footer.hidden = false;
          const next = footer.querySelector('.btn-next');
          if (step === cs.steps.length - 1) next.textContent = 'Zum Ergebnis →';
          next.focus();
          next.addEventListener('click', () => { step++; renderStep(); });
        });
        optBox.appendChild(btn);
      });
    }

    function renderResult() {
      const pctScore = Math.round((points / maxPoints) * 100);
      const s = Store.get();
      const prevBest = s.casesDone[cs.fullId] || 0;
      s.casesDone[cs.fullId] = Math.max(prevBest, pctScore);
      Store.save();
      Store.logSession({ type: 'case', caseId: cs.fullId, score: pctScore });
      Gami.award('sessionFinished');
      Gami.checkAchievements();
      App.refreshTopbar();

      let verdict;
      if (pctScore >= 90) verdict = 'Du hast entschieden wie ein erfahrener Profi. Stark!';
      else if (pctScore >= 65) verdict = 'Solide Leistung – an einigen Stellen hätte ein Profi anders entschieden. Lies das Feedback nochmal in Ruhe.';
      else verdict = 'Guter erster Durchlauf zum Lernen. Wiederhole den Fall in ein paar Tagen – beim zweiten Mal triffst du bessere Entscheidungen.';

      container.innerHTML = `
        <div class="card result-panel">
          <div class="big">${pctScore >= 90 ? '🏆' : pctScore >= 65 ? '💼' : '📚'}</div>
          <h2>Fall abgeschlossen</h2>
          <p class="result-score">${points} von ${maxPoints} Punkten (${pctScore} %)</p>
          <p class="muted">${verdict}</p>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" id="btn-retry">🔁 Fall wiederholen</button>
            <a class="btn btn-primary" href="#/thema/${area.id}">Zurück zum Thema</a>
          </div>
        </div>`;
      container.querySelector('#btn-retry').addEventListener('click', () => {
        step = -1; points = 0; renderIntro();
      });
    }

    renderIntro();
  }

  return { run };
})();
