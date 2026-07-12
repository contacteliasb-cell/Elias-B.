/* ============================================================
   Stats – Statistik, Erfolge, Datenverwaltung
   ============================================================ */

const StatsView = (() => {

  function render(container) {
    const s = Store.get();
    const level = Gami.levelForXp(s.xp);
    const totalQuiz = Object.values(s.quizStats).reduce((a, q) => a + q.seen, 0);
    const totalCorrect = Object.values(s.quizStats).reduce((a, q) => a + q.correct, 0);
    const accuracy = totalQuiz ? Math.round((totalCorrect / totalQuiz) * 100) : 0;
    const learnedCards = Object.keys(s.srs).length;
    const totalCards = LERN.allFlashcards().length;

    container.innerHTML = `
      <h1 class="page-title">📊 Statistik</h1>
      <p class="page-sub">Dein Lernstand auf einen Blick.</p>

      <div class="stat-tiles">
        <div class="stat-tile"><div class="num">⭐ ${U.num(s.xp, 0)}</div><div class="lbl">XP · Level ${level} (${Gami.levelTitle(level)})</div></div>
        <div class="stat-tile"><div class="num">🔥 ${Store.liveStreak()}</div><div class="lbl">Streak (Rekord: ${s.streak.best})</div></div>
        <div class="stat-tile"><div class="num">${accuracy} %</div><div class="lbl">Quiz-Trefferquote (${U.num(totalQuiz, 0)} Antworten)</div></div>
        <div class="stat-tile"><div class="num">${learnedCards}/${totalCards}</div><div class="lbl">Karten im Lernsystem</div></div>
      </div>

      <div class="grid grid-2">
        <div class="card">
          <h3 style="margin-top:0">Trefferquote je Themenbereich</h3>
          <div class="bar-chart" id="area-bars"></div>
          <p class="muted small">Bereiche unter 70 % verdienen eine Extra-Runde.</p>
        </div>
        <div class="card">
          <h3 style="margin-top:0">Aktivität der letzten 4 Wochen</h3>
          <div class="heat-week" id="heatmap"></div>
          <p class="muted small" style="margin-top:.6rem">Jedes Kästchen ist ein Tag – je dunkler, desto mehr gelernt. Lücken sind okay, Konstanz gewinnt trotzdem.</p>
        </div>
      </div>

      <div class="card">
        <h3 style="margin-top:0">🏅 Erfolge (${Object.keys(s.achievements).length}/${Gami.ACHIEVEMENTS.length})</h3>
        <div id="achievements"></div>
      </div>

      <div class="card">
        <h3 style="margin-top:0">💾 Daten</h3>
        <p class="muted small">Dein Fortschritt liegt nur in diesem Browser (localStorage). Sichere ihn regelmäßig als Datei.</p>
        <div class="btn-row">
          <button class="btn" id="btn-export">⬇ Fortschritt exportieren</button>
          <button class="btn" id="btn-import">⬆ Fortschritt importieren</button>
          <button class="btn" id="btn-reset" style="color:var(--red)">🗑 Alles zurücksetzen</button>
          <input type="file" id="import-file" accept=".json" hidden>
        </div>
      </div>`;

    // Balken je Bereich
    const bars = container.querySelector('#area-bars');
    for (const area of LERN.areas) {
      let attempts = 0, correct = 0;
      for (const st of area.subtopics) {
        const stat = s.subStats[st.key];
        if (stat) { attempts += stat.attempts; correct += stat.correct; }
      }
      const pct = attempts ? Math.round((correct / attempts) * 100) : 0;
      const color = pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--accent)' : 'var(--red)';
      bars.appendChild(U.el('div', 'bar-row', `
        <span>${area.icon} ${area.title}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${attempts ? color : 'transparent'}"></div></div>
        <span>${attempts ? pct + ' %' : '–'}</span>`));
    }

    // Heatmap letzte 28 Tage
    const heat = container.querySelector('#heatmap');
    const today = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = U.todayKey(d);
      const n = s.activity[key] || 0;
      const lvl = n === 0 ? '' : n < 10 ? 'l1' : n < 30 ? 'l2' : 'l3';
      const cell = U.el('div', `heat-day ${lvl}`);
      cell.title = `${key}: ${n} Aktionen`;
      heat.appendChild(cell);
    }

    // Erfolge
    const ach = container.querySelector('#achievements');
    for (const a of Gami.ACHIEVEMENTS) {
      const unlocked = !!s.achievements[a.id];
      ach.appendChild(U.el('div', `achievement ${unlocked ? '' : 'locked'}`, `
        <span class="a-icon">${a.icon}</span>
        <span><strong>${a.title}</strong><br><span class="muted small">${a.desc}</span></span>`));
    }

    // Export / Import / Reset
    container.querySelector('#btn-export').addEventListener('click', () => {
      const blob = new Blob([Store.exportJson()], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `immomentor-fortschritt-${U.todayKey()}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    });

    const fileInput = container.querySelector('#import-file');
    container.querySelector('#btn-import').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          Store.importJson(reader.result);
          U.toast('✅ Fortschritt importiert.');
          App.refreshTopbar();
          render(container);
        } catch (e) {
          U.toast('❌ Datei konnte nicht gelesen werden.');
        }
      };
      reader.readAsText(file);
    });

    container.querySelector('#btn-reset').addEventListener('click', () => {
      if (confirm('Wirklich ALLEN Fortschritt löschen? Das kann nicht rückgängig gemacht werden.')) {
        Store.reset();
        App.refreshTopbar();
        render(container);
        U.toast('Fortschritt zurückgesetzt.');
      }
    });
  }

  return { render };
})();
