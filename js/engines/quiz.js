/* ============================================================
   QuizEngine – einzelne Multiple-Choice-Frage rendern
   ============================================================
   Wird von der Session-Engine benutzt (auch im Tagesmix).
   done({ correct }) wird aufgerufen, sobald der/die Lernende
   nach dem Feedback auf "Weiter" klickt.
   ============================================================ */

const QuizEngine = (() => {

  function renderItem(q, el, done) {
    const area = LERN.byId(q.areaId);
    // Optionen mischen, richtige Antwort mitführen
    const opts = U.shuffle(q.options.map((text, i) => ({ text, isCorrect: i === q.correct })));

    el.innerHTML = `
      <div class="q-card">
        <span class="q-type-tag">Quiz · ${area ? area.icon + ' ' + area.title : ''}</span>
        <div class="q-text">${q.q}</div>
        <div class="q-options"></div>
        <div class="q-feedback-slot"></div>
        <div class="session-footer" hidden><button class="btn btn-primary btn-next">Weiter →</button></div>
      </div>`;

    const optBox = el.querySelector('.q-options');
    const fbSlot = el.querySelector('.q-feedback-slot');
    const footer = el.querySelector('.session-footer');
    let answered = false;

    opts.forEach(o => {
      const btn = U.el('button', 'q-option', o.text);
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        // Auflösen
        optBox.querySelectorAll('.q-option').forEach((b, i) => {
          b.disabled = true;
          if (opts[i].isCorrect) b.classList.add('correct');
        });
        if (!o.isCorrect) btn.classList.add('wrong');

        const subKey = `${q.areaId}/${q.sub}`;
        Store.recordQuizAnswer(q.id, subKey, o.isCorrect);
        Gami.award(o.isCorrect ? 'quizCorrect' : 'quizWrong');

        const fb = U.el('div', 'q-feedback ' + (o.isCorrect ? 'ok' : 'nok'),
          `<span class="verdict">${o.isCorrect ? '✅ Richtig!' : '❌ Leider falsch.'}</span>${q.explain || ''}`);
        fbSlot.appendChild(fb);

        footer.hidden = false;
        footer.querySelector('.btn-next').focus();
        footer.querySelector('.btn-next').addEventListener('click', () => done({ correct: o.isCorrect }));
      });
      optBox.appendChild(btn);
    });
  }

  return { renderItem };
})();
