/* ============================================================
   ClozeEngine – Lückentexte
   ============================================================
   Syntax im Text:  {{Antwort}}  oder  {{Antwort|Alternative|...}}
   Der erste Wert ist die "Musterlösung", alle Werte gelten als
   richtig (Groß-/Kleinschreibung egal, Leerzeichen getrimmt).
   ============================================================ */

const ClozeEngine = (() => {

  function normalize(s) {
    return s.trim().toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/[.,;:!]+$/g, '')
      .replace(/^(der|die|das|ein|eine)\s+/, '');
  }

  function renderItem(cz, el, done) {
    const area = LERN.byId(cz.areaId);
    const gaps = []; // { solutions: [..], input }

    const html = cz.text.replace(/\{\{(.+?)\}\}/g, (_, inner) => {
      const solutions = inner.split('|').map(s => s.trim());
      const idx = gaps.length;
      gaps.push({ solutions });
      return `<input class="cloze-gap" data-gap="${idx}" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Lücke ${idx + 1}">`;
    });

    el.innerHTML = `
      <div class="q-card">
        <span class="q-type-tag">Lückentext · ${area ? area.icon + ' ' + area.title : ''}</span>
        <div class="q-text">${cz.title}</div>
        ${cz.intro ? `<p class="muted">${cz.intro}</p>` : ''}
        <div class="cloze-text">${html}</div>
        <div class="q-feedback-slot"></div>
        <div class="session-footer"><button class="btn btn-primary btn-check">Prüfen</button></div>
      </div>`;

    el.querySelectorAll('.cloze-gap').forEach((inp, i) => { gaps[i].input = inp; });

    const checkBtn = el.querySelector('.btn-check');
    const fbSlot = el.querySelector('.q-feedback-slot');

    // Enter springt zur nächsten Lücke bzw. prüft
    el.querySelectorAll('.cloze-gap').forEach((inp, i) => {
      inp.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const next = el.querySelector(`[data-gap="${i + 1}"]`);
          if (next) next.focus(); else checkBtn.click();
        }
      });
    });
    const first = el.querySelector('.cloze-gap');
    if (first) first.focus();

    checkBtn.addEventListener('click', () => {
      let correct = 0;
      gaps.forEach(g => {
        const val = normalize(g.input.value);
        const ok = g.solutions.some(s => normalize(s) === val);
        g.input.disabled = true;
        g.input.classList.add(ok ? 'ok' : 'nok');
        if (ok) correct++;
        else {
          const sol = U.el('span', 'cloze-solution', ' → ' + U.esc(g.solutions[0]));
          g.input.insertAdjacentElement('afterend', sol);
        }
      });

      const allOk = correct === gaps.length;
      const subKey = `${cz.areaId}/${cz.sub}`;
      Store.recordSubAttempt(subKey, allOk);
      Gami.award('clozeGap', correct);

      fbSlot.innerHTML = `
        <div class="q-feedback ${allOk ? 'ok' : 'nok'}">
          <span class="verdict">${allOk ? '✅ Alle Lücken richtig!' : `📝 ${correct} von ${gaps.length} Lücken richtig.`}</span>
          ${allOk ? 'Stark – genau so sitzt Fachvokabular.' : 'Präg dir die Lösungen ein – beim nächsten Mal klappt es.'}
        </div>`;

      checkBtn.textContent = 'Weiter →';
      checkBtn.onclick = () => done({ correct: allOk, partial: correct / Math.max(1, gaps.length) });
    }, { once: true });
  }

  return { renderItem };
})();
