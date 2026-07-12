/* ============================================================
   Util – kleine Hilfsfunktionen
   ============================================================ */

const U = {

  /** Element-Shortcut */
  el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  },

  /** HTML escapen (für Nutzereingaben in Templates) */
  esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },

  /** Array mischen (Fisher-Yates, Kopie) */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Zufällige Ganzzahl in [min, max] */
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /** Zufälliges Element */
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /** Zahl als deutsche Währung formatieren */
  eur(n, decimals = 0) {
    return n.toLocaleString('de-DE', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + ' €';
  },

  /** Zahl deutsch formatieren */
  num(n, decimals = 2) {
    return n.toLocaleString('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    });
  },

  /** Prozent formatieren */
  pct(n, decimals = 1) {
    return U.num(n, decimals) + ' %';
  },

  /** Deutsche Zahleneingabe parsen ("1.234,56" oder "1234.56") */
  parseNum(s) {
    if (typeof s !== 'string') return NaN;
    s = s.trim().replace(/\s/g, '').replace(/€|%/g, '');
    if (s === '') return NaN;
    // Wenn Komma vorhanden: deutsches Format annehmen
    if (s.includes(',')) {
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      // "1.234" könnte Tausenderpunkt sein – nur wenn genau 3 Nachstellen
      const m = s.match(/^(\d{1,3})(\.\d{3})+$/);
      if (m) s = s.replace(/\./g, '');
    }
    return parseFloat(s);
  },

  /** Heutiges Datum als "YYYY-MM-DD" (lokal) */
  todayKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  },

  /** Tage-Differenz zwischen zwei "YYYY-MM-DD"-Keys */
  dayDiff(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  },

  /** Kurze Erfolgsmeldung unten rechts */
  toast(msg, ms = 2600) {
    const c = document.getElementById('toast-container');
    if (!c) return;
    const t = U.el('div', 'toast', msg);
    c.appendChild(t);
    setTimeout(() => t.remove(), ms);
  },
};
