/* ============================================================
   Review – Tagesmix (Interleaving) & Karteikarten-Einstieg
   ============================================================ */

const ReviewView = (() => {

  /** Tagesmix: gemischte Runde über alle Bereiche und Aufgabentypen */
  function renderDailyMix(container) {
    const due = SRS.dueCount();

    container.innerHTML = `
      <h1 class="page-title">🎲 Tagesmix</h1>
      <p class="page-sub">Eine gemischte Runde quer durch alle Themenbereiche und Aufgabentypen –
      genau das Durcheinander, das dein Gehirn zum Vernetzen braucht (Interleaving).
      Schwache und neue Themen kommen automatisch häufiger dran.</p>

      ${due > 0 ? `
        <div class="card">
          <strong>🃏 Zuerst die fälligen Karten?</strong>
          <p class="muted small" style="margin:.3rem 0 .7rem">Du hast ${due} fällige Karteikarten. Empfehlung: erst Karten, dann Mix.</p>
          <a class="btn" href="#/karten">Karten zuerst wiederholen</a>
        </div>` : ''}

      <div class="card">
        <strong>Rundenlänge wählen:</strong>
        <div class="btn-row" style="margin-top:.6rem">
          <button class="btn btn-primary" data-size="8">Kurz (8 Aufgaben)</button>
          <button class="btn btn-primary" data-size="15">Standard (15 Aufgaben)</button>
          <button class="btn btn-primary" data-size="25">Intensiv (25 Aufgaben)</button>
        </div>
      </div>`;

    container.querySelectorAll('[data-size]').forEach(btn => {
      btn.addEventListener('click', () => {
        const size = parseInt(btn.dataset.size, 10);
        Session.run(container, Session.buildDailyMix(size), {
          title: 'Tagesmix',
          backLink: '#/dashboard',
          logType: 'mix',
          rebuild: () => Session.buildDailyMix(size),
        });
      });
    });
  }

  /** Karteikarten: fällige Karten (global oder je Bereich) bzw. gezieltes Üben eines Unterthemas */
  function renderCards(container, areaId = null, subId = null) {
    // Unterthema: gezielt alle Karten des Themas üben (unabhängig von Fälligkeit)
    if (areaId && subId) {
      const cards = LERN.contentFor(areaId, subId).cards;
      FlashcardEngine.run(container, cards, { backLink: `#/thema/${areaId}` });
      return;
    }

    const dueAll = SRS.dueCards(areaId);
    const area = areaId ? LERN.byId(areaId) : null;

    if (dueAll.length === 0) {
      FlashcardEngine.run(container, [], { backLink: area ? `#/thema/${area.id}` : '#/dashboard' });
      return;
    }

    container.innerHTML = `
      <h1 class="page-title">🃏 Karteikarten ${area ? '· ' + area.icon + ' ' + area.title : ''}</h1>
      <p class="page-sub">${dueAll.length} Karten sind fällig. Der SM-2-Algorithmus (wie bei Anki)
      zeigt dir jede Karte genau dann wieder, wenn du sie sonst vergessen würdest.</p>
      <div class="card">
        <div class="btn-row">
          <button class="btn btn-primary" id="btn-start-due">▶ ${Math.min(dueAll.length, 20)} Karten lernen</button>
          ${dueAll.length > 20 ? `<button class="btn" id="btn-start-all">Alle ${dueAll.length} fälligen Karten</button>` : ''}
        </div>
        <p class="muted small" style="margin-bottom:0">Lieber täglich 10–20 Karten als einmal pro Woche 100 – Konstanz schlägt Masse.</p>
      </div>`;

    const backLink = area ? `#/thema/${area.id}` : '#/dashboard';
    container.querySelector('#btn-start-due').addEventListener('click', () =>
      FlashcardEngine.run(container, U.shuffle(dueAll).slice(0, 20), { backLink }));
    const allBtn = container.querySelector('#btn-start-all');
    if (allBtn) allBtn.addEventListener('click', () =>
      FlashcardEngine.run(container, dueAll, { backLink }));
  }

  return { renderDailyMix, renderCards };
})();
