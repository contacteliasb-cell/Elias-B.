/* ============================================================
   FlashcardEngine – Karteikarten mit Spaced Repetition (SM-2)
   ============================================================
   run(container, cards, opts)
     cards: Liste von Karten { id, front, back, areaId, sub }
     opts.title: Überschrift der Runde
     opts.backLink: Hash für "Zurück"
   ============================================================ */

const FlashcardEngine = (() => {

  function run(container, cards, opts = {}) {
    if (!cards.length) {
      container.innerHTML = `
        <div class="card result-panel">
          <div class="big">🎉</div>
          <h2>Nichts fällig!</h2>
          <p class="muted">Alle Karten dieser Auswahl sind aktuell gelernt. Komm später wieder –<br>
          der Wiederholungsalgorithmus meldet sich, wenn es Zeit ist.</p>
          <a class="btn btn-primary" href="${opts.backLink || '#/dashboard'}">Zurück</a>
        </div>`;
      return;
    }

    const queue = U.shuffle(cards);
    let index = 0;
    let reviewed = 0;
    let again = 0;

    function show() {
      if (index >= queue.length) return finish();
      const card = queue[index];
      const area = LERN.byId(card.areaId);
      const total = queue.length;

      container.innerHTML = `
        <div class="session-head">
          <a class="btn btn-ghost" href="${opts.backLink || '#/dashboard'}">✕</a>
          <div class="progress-bar"><div style="width:${(index / total) * 100}%"></div></div>
          <span class="counter">${index + 1} / ${total}</span>
        </div>
        <div class="flashcard-stage">
          <div class="flashcard" id="fc" tabindex="0" role="button" aria-label="Karte umdrehen">
            <span class="fc-label">${area ? area.icon + ' ' + area.title : ''} · Frage</span>
            <div class="fc-content">${card.front}</div>
            <span class="fc-hint">Klicken oder Leertaste zum Umdrehen</span>
          </div>
          <div id="rating-slot"></div>
        </div>`;

      const fc = container.querySelector('#fc');

      function flip() {
        fc.classList.add('fc-back');
        fc.innerHTML = `
          <span class="fc-label">Antwort</span>
          <div class="fc-front-mini">${card.front}</div>
          <div class="fc-content">${card.back}</div>`;
        fc.onclick = null;

        const slot = container.querySelector('#rating-slot');
        slot.innerHTML = `
          <div class="rating-row">
            <button class="rating-btn rating-again" data-q="0">Nochmal<small>${SRS.previewInterval(card.id, 0)}</small></button>
            <button class="rating-btn rating-hard" data-q="3">Schwer<small>${SRS.previewInterval(card.id, 3)}</small></button>
            <button class="rating-btn rating-good" data-q="4">Gut<small>${SRS.previewInterval(card.id, 4)}</small></button>
            <button class="rating-btn rating-easy" data-q="5">Einfach<small>${SRS.previewInterval(card.id, 5)}</small></button>
          </div>
          <p class="muted small" style="text-align:center">Sei ehrlich mit dir – nur dann setzt der Algorithmus die Abstände richtig. Tasten: 1–4</p>`;

        slot.querySelectorAll('.rating-btn').forEach(btn => {
          btn.addEventListener('click', () => rate(parseInt(btn.dataset.q, 10)));
        });
      }

      function rate(quality) {
        SRS.review(card.id, quality);
        Gami.award('flashReview');
        reviewed++;
        if (quality < 3) {
          again++;
          queue.push(card); // "Nochmal"-Karten kommen ans Ende der Runde
        }
        index++;
        show();
      }

      fc.onclick = flip;

      // Tastatursteuerung
      document.onkeydown = e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        if (e.code === 'Space' && !fc.classList.contains('fc-back')) { e.preventDefault(); flip(); }
        if (fc.classList.contains('fc-back')) {
          const map = { Digit1: 0, Digit2: 3, Digit3: 4, Digit4: 5 };
          if (map[e.code] !== undefined) rate(map[e.code]);
        }
      };
    }

    function finish() {
      document.onkeydown = null;
      Store.logSession({ type: 'flashcards', total: reviewed, again });
      Gami.award('sessionFinished');
      Gami.checkAchievements();
      App.refreshTopbar();
      container.innerHTML = `
        <div class="card result-panel">
          <div class="big">🃏</div>
          <h2>Runde geschafft!</h2>
          <p class="result-score">${reviewed} Karten wiederholt</p>
          <p class="muted">${again === 0 ? 'Alles gewusst – hervorragend!' : again + '× "Nochmal" – diese Karten kommen bald wieder dran.'}</p>
          <div class="btn-row" style="justify-content:center">
            <a class="btn btn-primary" href="${opts.backLink || '#/dashboard'}">Fertig</a>
            <a class="btn" href="#/karten">Weitere fällige Karten</a>
          </div>
        </div>`;
    }

    show();
  }

  return { run };
})();
