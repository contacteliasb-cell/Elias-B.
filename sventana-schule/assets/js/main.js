/* ============================================================
   Sventana-Schule – Shared UI
   Header & Footer werden per JS injiziert, damit die Navigation
   nur an EINER Stelle gepflegt werden muss (Wartbarkeit).
   Funktioniert ohne Build-Schritt und ohne fetch (file:// tauglich).
   ============================================================ */
(function () {
  "use strict";

  // Basis-Pfad relativ zur Seite. Alle Seiten liegen im selben Ordner.
  var NAV = [
    { label: "Startseite", href: "index.html", page: "start" },
    { label: "Neuigkeiten", href: "neuigkeiten.html", page: "neuigkeiten" },
    { label: "Termine & Mensa", href: "termine-mensa.html", page: "termine" },
    { label: "Vertretungsplan", href: "vertretungsplan.html", page: "vertretungsplan" },
    {
      label: "Unsere Schule", page: "schule-group",
      children: [
        { label: "Beschreibung der Schule", href: "schule.html", page: "schule" },
        { label: "Schülerfirma", href: "schuelerfirma.html", page: "schuelerfirma" },
        { label: "Förderverein", href: "foerderverein.html", page: "foerderverein" },
        { label: "Kooperationspartner", href: "kooperationspartner.html", page: "kooperationspartner" },
        { label: "Schulträger", href: "schultraeger.html", page: "schultraeger" },
        { label: "Vertrauenslehrkraft", href: "vertrauenslehrkraft.html", page: "vertrauenslehrkraft" }
      ]
    },
    {
      label: "Service", page: "service-group",
      children: [
        { label: "Konzepte & Ordnungen", href: "konzepte-ordnungen.html", page: "konzepte" },
        { label: "Formulare", href: "formulare.html", page: "formulare" },
        { label: "Schüleraufnahme", href: "schueleraufnahme.html", page: "schueleraufnahme" }
      ]
    },
    { label: "Kontakt", href: "kontakt.html", page: "kontakt" }
  ];

  var ITSLEARNING_URL = "https://sventana.itslearning.com/";
  var INSTAGRAM_URL   = "https://www.instagram.com/sventanaschule/";
  var YOUTUBE_URL     = "https://www.youtube.com/@sventanaschule"; // Kanal-Link (ggf. anpassen)

  var current = document.body.getAttribute("data-page") || "";

  function isActiveGroup(item) {
    if (!item.children) return false;
    return item.children.some(function (c) { return c.page === current; });
  }

  /* ---------- HEADER ---------- */
  function buildHeader() {
    var navHtml = NAV.map(function (item) {
      if (item.children) {
        var active = isActiveGroup(item) ? ' style="color:var(--blue)"' : "";
        var sub = item.children.map(function (c) {
          var cur = c.page === current ? ' aria-current="page"' : "";
          return '<li><a href="' + c.href + '"' + cur + ">" + c.label + "</a></li>";
        }).join("");
        return '<li class="has-sub">' +
                 '<button class="nav-toggle-sub"' + active + ' aria-expanded="false">' + item.label +
                   '<span class="caret" aria-hidden="true"></span></button>' +
                 '<ul class="submenu">' + sub + "</ul>" +
               "</li>";
      }
      var cur = item.page === current ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + cur + ">" + item.label + "</a></li>";
    }).join("");

    return '' +
    '<a class="skip-link" href="#main">Zum Inhalt springen</a>' +
    '<header class="site-header">' +
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Sventana-Schule Startseite">' +
          '<span class="brand-logo" aria-hidden="true"><span></span><span></span><span></span><span></span></span>' +
          '<span class="brand-text">' +
            '<span class="brand-name">Sventana-Schule</span>' +
            '<span class="brand-sub">Grund- und Gemeinschaftsschule Bornhöved</span>' +
          '</span>' +
        '</a>' +
        '<nav class="main-nav" id="mainNav" aria-label="Hauptnavigation">' +
          '<ul class="nav-list">' + navHtml + '</ul>' +
        '</nav>' +
        '<div class="header-cta">' +
          '<a class="btn btn--green btn--sm" href="' + ITSLEARNING_URL + '" target="_blank" rel="noopener">' +
            '<span class="btn-login-text">itslearning</span> Login</a>' +
          '<button class="nav-toggle" id="navToggle" aria-label="Menü öffnen" aria-controls="mainNav" aria-expanded="false"><span></span></button>' +
        '</div>' +
      '</div>' +
    '</header>';
  }

  /* ---------- FOOTER ---------- */
  function buildFooter() {
    return '' +
    '<footer class="site-footer">' +
      '<div class="footer-accent"></div>' +
      '<div class="container footer-top">' +
        '<div class="footer-brand footer-col">' +
          '<span class="brand-text" style="margin-bottom:.6rem">' +
            '<span class="brand-name">Sventana-Schule</span>' +
            '<span class="brand-sub">Grund- und Gemeinschaftsschule Bornhöved</span>' +
          '</span>' +
          '<p>Gemeinsam lernen, gemeinsam wachsen – von der ersten Klasse bis zum Schulabschluss.</p>' +
          '<div class="social-row">' +
            '<a href="' + INSTAGRAM_URL + '" target="_blank" rel="noopener" aria-label="Instagram @sventanaschule">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5 0-4.75.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.8 8.5 3.8 8.86 3.8 12s0 3.5.07 4.75c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.25.07 1.61.07 4.75.07s3.5 0 4.75-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.25.07-1.61.07-4.75s0-3.5-.07-4.75c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 17a4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.44a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"/></svg></a>' +
            '<a href="' + YOUTUBE_URL + '" target="_blank" rel="noopener" aria-label="YouTube-Kanal">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 3.9 12 3.9 12 3.9s-7.5 0-9.4.5A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z"/></svg></a>' +
            '<a href="' + ITSLEARNING_URL + '" target="_blank" rel="noopener" aria-label="itslearning Login">' +
              '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v12h16V6H4Zm2 2h8v2H6V8Zm0 4h8v2H6v-2Z"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Schnellzugriff</h4>' +
          '<ul>' +
            '<li><a href="neuigkeiten.html">Neuigkeiten</a></li>' +
            '<li><a href="termine-mensa.html">Termine &amp; Mensa</a></li>' +
            '<li><a href="vertretungsplan.html">Vertretungsplan</a></li>' +
            '<li><a href="formulare.html">Formulare</a></li>' +
            '<li><a href="schueleraufnahme.html">Schüleraufnahme</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Unsere Schule</h4>' +
          '<ul>' +
            '<li><a href="schule.html">Beschreibung der Schule</a></li>' +
            '<li><a href="konzepte-ordnungen.html">Konzepte &amp; Ordnungen</a></li>' +
            '<li><a href="foerderverein.html">Förderverein</a></li>' +
            '<li><a href="kooperationspartner.html">Kooperationspartner</a></li>' +
            '<li><a href="schultraeger.html">Schulträger</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Kontakt</h4>' +
          '<ul>' +
            '<li>Sekretariat Grundschule<br>Schulstraße 1, 24619 Bornhöved<br>Tel. 04323 7275</li>' +
            '<li>Sekretariat Sek I<br>Jahnweg 6, 24619 Bornhöved<br>Tel. 04323 7424</li>' +
            '<li><a href="kontakt.html">Alle Kontaktdaten &rarr;</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="container footer-bar">' +
        '<span>&copy; ' + new Date().getFullYear() + ' Sventana-Schule Bornhöved. Alle Rechte vorbehalten.</span>' +
        '<span class="legal-links">' +
          '<a href="impressum.html">Impressum</a>' +
          '<a href="datenschutz.html">Datenschutz</a>' +
          '<a href="kontakt.html">Kontakt</a>' +
        '</span>' +
      '</div>' +
    '</footer>';
  }

  /* ---------- Interaktionen ---------- */
  function initInteractions() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      });
    }

    // Mobile: Untermenüs aufklappen
    document.querySelectorAll(".nav-toggle-sub").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 980px)").matches) {
          e.preventDefault();
          var li = btn.closest(".has-sub");
          var open = li.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        }
      });
    });

    // Menü schließen bei Klick außerhalb (Desktop-Overlay)
    document.addEventListener("click", function (e) {
      if (nav && nav.classList.contains("open") && !nav.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        nav.classList.remove("open");
        if (toggle) { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Menü öffnen"); }
      }
    });
  }

  /* ---------- Video-Modal ---------- */
  function initVideoModal() {
    var triggers = document.querySelectorAll("[data-video-trigger]");
    if (!triggers.length) return;
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Schulvideo");
    modal.innerHTML =
      '<div class="modal-backdrop" data-close></div>' +
      '<div class="modal-dialog">' +
        '<button class="modal-close" data-close aria-label="Schließen">&times;</button>' +
        '<div class="ratio">' +
          '<div>' +
            '<p style="font-size:1.1rem;color:#fff;font-weight:600;margin-bottom:.4rem">🎬 Video-Platzhalter</p>' +
            '<p style="margin:0">Hier wird das rund 30-sekündige Schulvideo eingebunden.<br>' +
            '<span style="color:#8fa">[PLATZHALTER – echtes Video wird nachgeliefert]</span></p>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    function open() { modal.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { modal.classList.remove("open"); document.body.style.overflow = ""; }
    triggers.forEach(function (t) { t.addEventListener("click", open); });
    modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- News-Filter ---------- */
  function initNewsFilter() {
    var bar = document.getElementById("newsFilter");
    var list = document.getElementById("newsList");
    if (!bar || !list) return;
    var items = Array.prototype.slice.call(list.querySelectorAll(".news-item"));
    var empty = document.getElementById("newsEmpty");

    bar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      bar.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var cat = chip.getAttribute("data-cat");
      var visible = 0;
      items.forEach(function (item) {
        var show = cat === "all" || item.getAttribute("data-cat") === cat;
        item.classList.toggle("hidden", !show);
        if (show) visible++;
      });
      if (empty) empty.classList.toggle("hidden", visible !== 0);
    });
  }

  /* ---------- Init ---------- */
  function mount() {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    if (h) h.innerHTML = buildHeader();
    if (f) f.innerHTML = buildFooter();
    initInteractions();
    initVideoModal();
    initNewsFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
