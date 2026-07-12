/* ============================================================
   App – Hash-Router und Topbar
   ============================================================
   Routen:
     #/dashboard                      Startseite
     #/themen                         Themenübersicht
     #/thema/{area}                   Themen-Detail
     #/lektion/{area}/{sub}           Lektion
     #/quiz/{area}[/{sub}]            Quiz-Runde
     #/luecken/{area}/{sub}           Lückentexte
     #/rechnen/{area}[/{sub}]         Rechenaufgaben
     #/karten[/{area}[/{sub}]]        Karteikarten
     #/fall/{area}/{caseId}           Fallstudie
     #/tagesmix                       Gemischte Runde
     #/statistik                      Statistik
   ============================================================ */

const App = (() => {

  const main = () => document.getElementById('app');

  function route() {
    const hash = location.hash || '#/dashboard';
    const parts = hash.replace(/^#\//, '').split('/').filter(Boolean);
    const [page, p1, p2] = parts;
    const container = main();
    container.innerHTML = '';
    window.scrollTo(0, 0);
    document.onkeydown = null; // Karten-Shortcuts aufräumen

    switch (page) {
      case 'themen':
        TopicsView.renderList(container); break;
      case 'thema':
        TopicsView.renderArea(container, p1); break;
      case 'lektion':
        LessonEngine.render(container, p1, p2); break;
      case 'quiz': {
        const area = LERN.byId(p1);
        const sub = p2 ? LERN.subtopic(p1, p2) : null;
        Session.run(container, Session.buildQuiz(p1, p2 || null), {
          title: sub ? `Quiz: ${sub.title}` : `Quiz-Mix: ${area ? area.title : ''}`,
          backLink: `#/thema/${p1}`,
          logType: 'quiz',
          rebuild: () => Session.buildQuiz(p1, p2 || null),
        });
        break;
      }
      case 'luecken': {
        const sub = LERN.subtopic(p1, p2);
        Session.run(container, Session.buildCloze(p1, p2), {
          title: sub ? `Lückentext: ${sub.title}` : 'Lückentext',
          backLink: `#/thema/${p1}`,
          logType: 'cloze',
          rebuild: () => Session.buildCloze(p1, p2),
        });
        break;
      }
      case 'rechnen': {
        const area = LERN.byId(p1);
        Session.run(container, Session.buildCalc(p1, p2 || null), {
          title: `Rechentraining: ${area ? area.title : ''}`,
          backLink: `#/thema/${p1}`,
          logType: 'calc',
          rebuild: () => Session.buildCalc(p1, p2 || null),
        });
        break;
      }
      case 'karten':
        ReviewView.renderCards(container, p1 || null, p2 || null); break;
      case 'fall':
        CaseEngine.run(container, p1, p2); break;
      case 'tagesmix':
        ReviewView.renderDailyMix(container); break;
      case 'statistik':
        StatsView.render(container); break;
      case 'dashboard':
      default:
        DashboardView.render(container);
    }

    highlightNav(page || 'dashboard');
    refreshTopbar();
  }

  function highlightNav(page) {
    const map = {
      dashboard: 'dashboard',
      themen: 'themen', thema: 'themen', lektion: 'themen', quiz: 'themen',
      luecken: 'themen', rechnen: 'themen', fall: 'themen',
      tagesmix: 'tagesmix',
      karten: 'karten',
      statistik: 'statistik',
    };
    const active = map[page] || 'dashboard';
    document.querySelectorAll('#mainnav a').forEach(a => {
      a.classList.toggle('active', a.dataset.route === active);
    });
  }

  /** Streak, XP und Fällig-Badge in der Topbar aktualisieren */
  function refreshTopbar() {
    const s = Store.get();
    document.getElementById('streak-display').textContent = `🔥 ${Store.liveStreak()}`;
    document.getElementById('xp-display').textContent = `⭐ ${U.num(s.xp, 0)} XP`;
    const due = SRS.dueCount();
    const badge = document.getElementById('due-badge');
    badge.hidden = due === 0;
    badge.textContent = due;
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);

  return { route, refreshTopbar };
})();
