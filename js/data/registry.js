/* ============================================================
   LERN – zentrale Inhalts-Registry
   ============================================================
   Die Dateien unter data/ registrieren hier ihre Themenbereiche.
   Schema eines Bereichs (Area):

   {
     id: 'bewertung',
     title: 'Bewertung & Gutachten',
     icon: '📐',
     description: '...',
     subtopics: [
       { id: 'grundlagen', title: '...', teaser: '...', lesson: '<html>' }
     ],
     quiz:  [ { sub: 'grundlagen', q: '...', options: [...], correct: 0, explain: '...' } ],
     cards: [ { sub: 'grundlagen', front: '...', back: '...' } ],
     cloze: [ { sub: 'grundlagen', title: '...', intro: '...', text: '... {{Antwort|Alternative}} ...' } ],
     cases: [ { id: 'x', title: '...', intro: '...', steps: [ { situation, question, options: [{text, quality:'best'|'okay'|'bad', feedback}] } ] } ],
     calc:  [ { sub: 'ertragswert', title: '...', generate() { return { text, unit, answer, tolerance, steps: [...] } } } ],
   }

   IDs werden automatisch vergeben:
     Frage:  areaId/q/index     Karte: areaId/c/index
     Lücke:  areaId/l/index     Fall:  areaId/case/caseId
   ============================================================ */

const LERN = (() => {
  const areas = [];

  function registerArea(area) {
    // IDs vergeben + Rückverweise setzen
    (area.quiz || []).forEach((q, i) => { q.id = `${area.id}/q/${i}`; q.areaId = area.id; });
    (area.cards || []).forEach((c, i) => { c.id = `${area.id}/c/${i}`; c.areaId = area.id; });
    (area.cloze || []).forEach((c, i) => { c.id = `${area.id}/l/${i}`; c.areaId = area.id; });
    (area.cases || []).forEach(c => { c.areaId = area.id; c.fullId = `${area.id}/case/${c.id}`; });
    (area.calc || []).forEach((c, i) => { c.id = `${area.id}/r/${i}`; c.areaId = area.id; });
    (area.subtopics || []).forEach(st => { st.areaId = area.id; st.key = `${area.id}/${st.id}`; });
    areas.push(area);
  }

  const byId = id => areas.find(a => a.id === id);

  function allSubtopics() {
    return areas.flatMap(a => a.subtopics);
  }
  function allFlashcards() {
    return areas.flatMap(a => a.cards || []);
  }
  function allQuiz() {
    return areas.flatMap(a => a.quiz || []);
  }
  function allCloze() {
    return areas.flatMap(a => a.cloze || []);
  }
  function allCases() {
    return areas.flatMap(a => a.cases || []);
  }
  function allCalc() {
    return areas.flatMap(a => a.calc || []);
  }

  function subtopic(areaId, subId) {
    const a = byId(areaId);
    return a ? a.subtopics.find(s => s.id === subId) : null;
  }

  /** Inhalte eines Unterthemas gebündelt */
  function contentFor(areaId, subId) {
    const a = byId(areaId);
    if (!a) return null;
    const f = x => x.sub === subId;
    return {
      quiz: (a.quiz || []).filter(f),
      cards: (a.cards || []).filter(f),
      cloze: (a.cloze || []).filter(f),
      calc: (a.calc || []).filter(f),
    };
  }

  return {
    registerArea, areas, byId,
    allSubtopics, allFlashcards, allQuiz, allCloze, allCases, allCalc,
    subtopic, contentFor,
  };
})();
