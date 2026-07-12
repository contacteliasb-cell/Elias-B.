/* ============================================================
   Dashboard – Startseite mit Überblick
   ============================================================ */

const DashboardView = (() => {

  function areaProgress(area) {
    const s = Store.get();
    const subs = area.subtopics;
    // Fortschritt = 50 % Lektionen erledigt + 50 % Quiz-Abdeckung des Bereichs
    const lessonPart = subs.filter(st => s.lessonsDone[st.key]).length / Math.max(1, subs.length);
    const quiz = area.quiz || [];
    const seen = quiz.filter(q => s.quizStats[q.id] && s.quizStats[q.id].correct > 0).length;
    const quizPart = quiz.length ? seen / quiz.length : 0;
    return Math.round((lessonPart * 0.5 + quizPart * 0.5) * 100);
  }

  function weakSubtopics(limit = 5) {
    const s = Store.get();
    const list = [];
    for (const area of LERN.areas) {
      for (const st of area.subtopics) {
        const stat = s.subStats[st.key];
        if (stat && stat.attempts >= 5) {
          const rate = stat.correct / stat.attempts;
          if (rate < 0.75) list.push({ area, st, rate, attempts: stat.attempts });
        }
      }
    }
    return list.sort((a, b) => a.rate - b.rate).slice(0, limit);
  }

  function render(container) {
    const s = Store.get();
    const due = SRS.dueCount();
    const fresh = SRS.newCount();
    const streak = Store.liveStreak();
    const level = Gami.levelForXp(s.xp);
    const nextLevelXp = Gami.xpForLevel(level + 1);
    const lessonsDone = Object.keys(s.lessonsDone).length;
    const lessonsTotal = LERN.allSubtopics().length;
    const today = s.activity[U.todayKey()] || 0;

    const hour = new Date().getHours();
    const greet = hour < 11 ? 'Guten Morgen' : hour < 18 ? 'Hallo' : 'Guten Abend';

    const weak = weakSubtopics();

    container.innerHTML = `
      <div class="hero">
        <div>
          <h1 class="page-title">${greet}! 👋</h1>
          <p class="page-sub">Level ${level} · <strong>${Gami.levelTitle(level)}</strong> · noch ${U.num(nextLevelXp - s.xp, 0)} XP bis Level ${level + 1}</p>
        </div>
        <div class="btn-row">
          <a class="btn btn-primary" href="#/tagesmix">🎲 Tagesmix starten</a>
          ${due > 0 ? `<a class="btn" href="#/karten">🃏 ${due} fällige Karten</a>` : ''}
        </div>
      </div>

      <div class="stat-tiles">
        <div class="stat-tile"><div class="num">🔥 ${streak}</div><div class="lbl">Tage-Streak${s.streak.best > streak ? ' (Rekord: ' + s.streak.best + ')' : ''}</div></div>
        <div class="stat-tile"><div class="num">${due}</div><div class="lbl">Karten fällig</div></div>
        <div class="stat-tile"><div class="num">${fresh}</div><div class="lbl">Karten neu</div></div>
        <div class="stat-tile"><div class="num">${lessonsDone}/${lessonsTotal}</div><div class="lbl">Lektionen</div></div>
        <div class="stat-tile"><div class="num">${today > 0 ? '✅' : '—'}</div><div class="lbl">${today > 0 ? 'Heute gelernt' : 'Heute noch nichts'}</div></div>
      </div>

      <div class="grid grid-2">
        <div class="card">
          <h3 style="margin-top:0">📚 Dein Fortschritt je Themenbereich</h3>
          <div id="area-progress"></div>
        </div>
        <div class="card">
          <h3 style="margin-top:0">🎯 Deine Schwachstellen</h3>
          ${weak.length === 0
            ? '<p class="muted">Noch keine erkennbar. Sobald du übst, zeigen sich hier Themen mit vielen Fehlern – die solltest du gezielt wiederholen.</p>'
            : `<div id="weak-list"></div>
               <p class="muted small">Themen mit weniger als 75 % richtigen Antworten (ab 5 Versuchen). Gezieltes Üben genau hier bringt am meisten.</p>`}
        </div>
      </div>

      <div class="card">
        <h3 style="margin-top:0">🧠 So lernst du am effektivsten mit dieser App</h3>
        <ol style="margin-bottom:0">
          <li><strong>Täglich zuerst:</strong> fällige Karteikarten wiederholen (Spaced Repetition wirkt nur, wenn du dranbleibst – 10 Minuten reichen oft).</li>
          <li><strong>Dann ein Tagesmix:</strong> gemischte Fragen aus allen Bereichen (Interleaving) vernetzen dein Wissen.</li>
          <li><strong>Neues Thema?</strong> Lektion lesen → sofort Quiz → Karten des Themas in die Rotation aufnehmen.</li>
          <li><strong>Freitags ein Fall:</strong> Fallstudien trainieren die Denkweise, auf die es im Maklerbüro wirklich ankommt.</li>
        </ol>
      </div>`;

    // Bereichs-Fortschritt
    const ap = container.querySelector('#area-progress');
    for (const area of LERN.areas) {
      const pct = areaProgress(area);
      const row = U.el('div', 'area-row', `
        <div class="icon">${area.icon}</div>
        <div class="info">
          <a href="#/thema/${area.id}"><strong>${area.title}</strong></a>
          <div class="progress-bar"><div style="width:${pct}%"></div></div>
        </div>
        <div class="pct">${pct} %</div>`);
      ap.appendChild(row);
    }

    // Schwachstellen
    const wl = container.querySelector('#weak-list');
    if (wl) {
      for (const w of weak) {
        wl.appendChild(U.el('div', 'weak-item', `
          <span>${w.area.icon} <a href="#/quiz/${w.area.id}/${w.st.id}">${w.st.title}</a></span>
          <span class="rate">${Math.round(w.rate * 100)} %</span>`));
      }
    }
  }

  return { render, areaProgress };
})();
