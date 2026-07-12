/* ============================================================
   CalcEngine – Rechenaufgaben mit Zufallszahlen
   ============================================================
   Jede Aufgabe in den Daten hat eine generate()-Funktion, die
   eine konkrete Instanz mit neuen Zahlen erzeugt:
     { text, unit, answer, tolerance, steps: ['...', ...] }
   tolerance = absolute Abweichung, die noch als richtig gilt.
   ============================================================ */

const CalcEngine = (() => {

  function renderItem(task, el, done) {
    const inst = task.generate();
    const area = LERN.byId(task.areaId);

    el.innerHTML = `
      <div class="q-card">
        <span class="q-type-tag">Rechenaufgabe · ${area ? area.icon + ' ' + area.title : ''}</span>
        <div class="q-text">${task.title}</div>
        <div>${inst.text}</div>
        <div class="calc-input-row">
          <label for="calc-answer"><strong>Dein Ergebnis:</strong></label>
          <input id="calc-answer" class="calc-input" type="text" inputmode="decimal" autocomplete="off" placeholder="z. B. 12.500">
          <span class="calc-unit">${inst.unit || ''}</span>
          <button class="btn btn-primary btn-check">Prüfen</button>
        </div>
        <p class="muted small">Runden erlaubt – kleine Abweichungen werden akzeptiert. Deutsche Schreibweise (Komma) oder Punkt, beides ok.</p>
        <div class="q-feedback-slot"></div>
        <div class="session-footer" hidden><button class="btn btn-primary btn-next">Weiter →</button></div>
      </div>`;

    const input = el.querySelector('#calc-answer');
    const checkBtn = el.querySelector('.btn-check');
    const fbSlot = el.querySelector('.q-feedback-slot');
    const footer = el.querySelector('.session-footer');
    input.focus();
    input.addEventListener('keydown', e => { if (e.key === 'Enter') checkBtn.click(); });

    checkBtn.addEventListener('click', () => {
      const val = U.parseNum(input.value);
      if (isNaN(val)) { U.toast('Bitte gib eine Zahl ein.'); return; }

      const ok = Math.abs(val - inst.answer) <= (inst.tolerance ?? Math.abs(inst.answer) * 0.005);
      input.disabled = true;
      checkBtn.disabled = true;
      input.classList.add(ok ? 'ok' : 'nok');

      const subKey = `${task.areaId}/${task.sub}`;
      Store.recordSubAttempt(subKey, ok);
      Gami.award(ok ? 'calcCorrect' : 'calcWrong');

      const stepsHtml = inst.steps && inst.steps.length
        ? `<strong>Rechenweg:</strong><ol class="calc-steps">${inst.steps.map(s => `<li>${s}</li>`).join('')}</ol>`
        : '';

      fbSlot.innerHTML = `
        <div class="q-feedback ${ok ? 'ok' : 'nok'}">
          <span class="verdict">${ok ? '✅ Richtig!' : '❌ Nicht ganz.'}</span>
          Korrekte Lösung: <strong>${U.num(inst.answer, inst.decimals ?? 2)} ${inst.unit || ''}</strong><br>
          ${stepsHtml}
        </div>`;

      footer.hidden = false;
      const nextBtn = footer.querySelector('.btn-next');
      nextBtn.focus();
      nextBtn.addEventListener('click', () => done({ correct: ok }));
    });
  }

  return { renderItem };
})();
