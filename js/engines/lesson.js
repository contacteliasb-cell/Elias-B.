/* ============================================================
   Lesson – Lektionen anzeigen und abschließen
   ============================================================ */

const LessonEngine = (() => {

  function render(container, areaId, subId) {
    const area = LERN.byId(areaId);
    const sub = LERN.subtopic(areaId, subId);
    if (!area || !sub) { container.innerHTML = '<p>Lektion nicht gefunden.</p>'; return; }

    const done = !!Store.get().lessonsDone[sub.key];

    container.innerHTML = `
      <div class="crumbs"><a href="#/themen">Themen</a> › <a href="#/thema/${area.id}">${area.icon} ${area.title}</a> › Lektion</div>
      <article class="lesson">
        <h2>${sub.title}</h2>
        ${sub.lesson}
      </article>
      <div class="card">
        <div class="btn-row" id="lesson-actions">
          <button class="btn btn-primary" id="btn-lesson-done">${done ? '✓ Lektion erneut abschließen' : '✓ Lektion abschließen (+' + Gami.XP.lessonDone + ' XP)'}</button>
          <a class="btn" href="#/quiz/${area.id}/${sub.id}">🎯 Direkt zum Quiz</a>
          <a class="btn" href="#/thema/${area.id}">Zurück zur Übersicht</a>
        </div>
        <p class="muted small" style="margin-bottom:0">
          Tipp aus der Lernforschung: Lies die Lektion einmal konzentriert und geh dann
          <strong>sofort ins Quiz oder zu den Karteikarten</strong> – aktives Abrufen festigt
          Wissen deutlich besser als erneutes Lesen.
        </p>
      </div>`;

    container.querySelector('#btn-lesson-done').addEventListener('click', () => {
      const wasNew = Store.markLessonDone(sub.key);
      if (wasNew) {
        Gami.award('lessonDone');
        U.toast(`📖 Lektion abgeschlossen! +${Gami.XP.lessonDone} XP`);
      } else {
        Store.touchActivity();
        U.toast('Lektion war schon abgeschlossen – Wiederholung schadet nie!');
      }
      location.hash = `#/quiz/${area.id}/${sub.id}`;
    });
  }

  return { render };
})();
