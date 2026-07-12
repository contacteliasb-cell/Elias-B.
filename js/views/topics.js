/* ============================================================
   Topics – Themenübersicht und Themen-Detailseite
   ============================================================ */

const TopicsView = (() => {

  /** Übersicht aller Themenbereiche */
  function renderList(container) {
    container.innerHTML = `
      <h1 class="page-title">Themenbereiche</h1>
      <p class="page-sub">Wähle einen Bereich – dort entscheidest du pro Unterthema, mit welcher Lernform du üben willst.</p>
      <div class="grid grid-2" id="area-grid"></div>`;

    const grid = container.querySelector('#area-grid');
    for (const area of LERN.areas) {
      const pct = DashboardView.areaProgress(area);
      const due = SRS.dueCount(area.id);
      const card = U.el('div', 'area-card', `
        <div class="icon-big">${area.icon}</div>
        <h3><a href="#/thema/${area.id}">${area.title}</a></h3>
        <div class="desc">${area.description}</div>
        <div class="small muted">${area.subtopics.length} Unterthemen · ${(area.quiz || []).length} Quizfragen · ${(area.cards || []).length} Karten${due ? ` · <strong style="color:var(--red)">${due} Karten fällig</strong>` : ''}</div>
        <div class="progress-bar"><div style="width:${pct}%"></div></div>
        <div class="btn-row" style="margin-top:.5rem">
          <a class="btn btn-primary" href="#/thema/${area.id}">Öffnen</a>
          <a class="btn" href="#/quiz/${area.id}">🎯 Quiz-Mix</a>
        </div>`);
      grid.appendChild(card);
    }
  }

  /** Detailseite eines Themenbereichs */
  function renderArea(container, areaId) {
    const area = LERN.byId(areaId);
    if (!area) { container.innerHTML = '<p>Themenbereich nicht gefunden.</p>'; return; }
    const s = Store.get();
    const due = SRS.dueCount(area.id);

    container.innerHTML = `
      <div class="crumbs"><a href="#/themen">Themen</a> › ${area.icon} ${area.title}</div>
      <h1 class="page-title">${area.icon} ${area.title}</h1>
      <p class="page-sub">${area.description}</p>

      <div class="card">
        <strong>Für den ganzen Bereich:</strong>
        <div class="btn-row" style="margin-top:.6rem">
          <a class="btn btn-primary" href="#/quiz/${area.id}">🎯 Quiz-Mix (alle Unterthemen)</a>
          <a class="btn" href="#/karten/${area.id}">🃏 Fällige Karten${due ? ` (${due})` : ''}</a>
          ${(area.calc || []).length ? `<a class="btn" href="#/rechnen/${area.id}">🧮 Rechentraining</a>` : ''}
        </div>
      </div>

      <h2 style="font-size:1.2rem">Unterthemen</h2>
      <div id="subtopics"></div>

      ${(area.cases || []).length ? `
        <h2 style="font-size:1.2rem">💼 Fallstudien aus der Praxis</h2>
        <div id="cases"></div>` : ''}`;

    const subBox = container.querySelector('#subtopics');
    for (const st of area.subtopics) {
      const content = LERN.contentFor(area.id, st.id);
      const lessonDone = !!s.lessonsDone[st.key];
      const stat = s.subStats[st.key];
      const acc = stat && stat.attempts >= 3 ? Math.round((stat.correct / stat.attempts) * 100) : null;

      const chips = [
        `<a class="chip ${lessonDone ? 'done' : ''}" href="#/lektion/${area.id}/${st.id}">📖 Lektion${lessonDone ? ' ✓' : ''}</a>`,
      ];
      if (content.quiz.length) chips.push(`<a class="chip" href="#/quiz/${area.id}/${st.id}">🎯 Quiz (${content.quiz.length})</a>`);
      if (content.cards.length) chips.push(`<a class="chip" href="#/karten/${area.id}/${st.id}">🃏 Karten (${content.cards.length})</a>`);
      if (content.cloze.length) chips.push(`<a class="chip" href="#/luecken/${area.id}/${st.id}">📝 Lückentext</a>`);
      if (content.calc.length) chips.push(`<a class="chip" href="#/rechnen/${area.id}/${st.id}">🧮 Rechnen (${content.calc.length})</a>`);

      subBox.appendChild(U.el('div', 'subtopic-card', `
        <h3>${st.title}</h3>
        <div class="muted small">${st.teaser || ''}${acc !== null ? ` · <strong>Trefferquote: ${acc} %</strong>` : ''}</div>
        <div class="mode-chips">${chips.join('')}</div>`));
    }

    const caseBox = container.querySelector('#cases');
    if (caseBox) {
      for (const c of area.cases) {
        const best = s.casesDone[c.fullId];
        caseBox.appendChild(U.el('div', 'subtopic-card', `
          <h3>${c.title}</h3>
          <div class="muted small">${c.teaser || ''}${best !== undefined ? ` · <strong style="color:var(--green)">Beste Runde: ${best} %</strong>` : ''}</div>
          <div class="mode-chips"><a class="chip" href="#/fall/${area.id}/${c.id}">💼 Fall ${best !== undefined ? 'wiederholen' : 'starten'}</a></div>`));
      }
    }
  }

  return { renderList, renderArea };
})();
