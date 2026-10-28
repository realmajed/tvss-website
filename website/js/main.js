/* Tiered Visitor Safety System: site script.
   One HTML file holds every page; the hash (#home, #design, ...) picks which page is shown. */
(function () {
  // 3D hotspot positions (metres) for each kit model
  // (positions come from the model builder, which places each product at its real size)
  var KIT = [{ label: 'Printed visitor guide', position: [-0.2, 0.003, 0.06] }, { label: 'Trip log (departure and return)', position: [-0.08, 0.003, 0.075] }, { label: 'Strobe (Wuben X1 Pro)', position: [-0.12, 0.031, 0.185] }, { label: 'Power bank (10,000 mAh)', position: [0.06, 0.018, 0.061] }, { label: 'Whistle (Fox 40 Micro)', position: [0.093, 0.017, 0.185] }, { label: 'USB-C cable', position: [0.151, 0.013, 0] }];
  var HOT = {
    tier1: [{ label: 'Printed visitor guide', position: [-0.062, 0.003, 0] }, { label: 'Trip log (departure and return)', position: [0.062, 0.003, 0.01] }],
    tier2: [{ label: 'Tier 2 pouch', position: [0, 0.063, -0.1] }].concat(KIT),
    tier3: [{ label: 'Tier 3 pouch', position: [0, 0.063, -0.1] }].concat(KIT, [{ label: 'Two-way satellite messenger (Garmin inReach Messenger)', position: [0.17, 0.09, 0.09] }])
  };
  var NAMES = { 1: 'Tier 1 kit: printed visitor guide and trip record', 2: 'Tier 2 kit: pouch, guide, trip log, whistle, strobe torch, power bank and cable', 3: 'Tier 3 kit: Tier 2 items plus a two-way satellite messenger' };
  var SITE = 'Tiered Visitor Safety System';

  var pages = [].slice.call(document.querySelectorAll('.page'));
  var routes = pages.map(function (p) { return p.dataset.route; });
  var navLinks = [].slice.call(document.querySelectorAll('.nav a[data-r]'));
  var groups = { project: ['project', 'background', 'problem'], design: ['options', 'selection', 'design'], delivery: ['implementation', 'costs', 'considerations', 'recommendations'] };
  var shown = null;

  // ---------- pages ----------
  function routeFromHash() {
    var r = (location.hash || '').slice(1);
    return routes.indexOf(r) >= 0 ? r : 'home';
  }
  function show(route) {
    if (routes.indexOf(route) < 0) route = 'home';
    if (route === shown) return;
    shown = route;
    pages.forEach(function (p) { p.classList.toggle('active', p.dataset.route === route); });
    navLinks.forEach(function (a) { if (a.dataset.r === route) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    Object.keys(groups).forEach(function (g) {
      var b = document.querySelector('.grp-btn[data-g="' + g + '"]');
      if (b) b.classList.toggle('current', groups[g].indexOf(route) >= 0);
    });
    closeMenus();
    var page = document.getElementById('p-' + route);
    buildToc(page);
    var h1 = page.querySelector('.banner h1');
    document.title = route === 'home' || !h1 ? SITE + ' · EWB Challenge 2026' : h1.textContent + ' · ' + SITE;
    if (route === 'prototype') initViewer();
    window.scrollTo(0, 0);
  }
  function go(route) {
    try { history.pushState(null, '', '#' + route); } catch (e) { /* sandboxed frames may block this; the page still changes */ }
    show(route);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var r = a.getAttribute('href').slice(1);
    if (routes.indexOf(r) < 0) return;
    e.preventDefault();
    go(r);
  });
  window.addEventListener('popstate', function () { show(routeFromHash()); });
  window.addEventListener('hashchange', function () { show(routeFromHash()); });

  // ---------- menus ----------
  var nav = document.getElementById('nav'), menuBtn = document.getElementById('menuBtn');
  function closeMenus() {
    document.querySelectorAll('.nav li.grp').forEach(function (li) { li.classList.remove('open'); li.querySelector('.grp-btn').setAttribute('aria-expanded', 'false'); });
    nav.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  document.querySelectorAll('.grp-btn').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var li = b.parentElement, open = !li.classList.contains('open');
      document.querySelectorAll('.nav li.grp').forEach(function (x) { if (x !== li) { x.classList.remove('open'); x.querySelector('.grp-btn').setAttribute('aria-expanded', 'false'); } });
      li.classList.toggle('open', open);
      b.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav') && !e.target.closest('#menuBtn')) document.querySelectorAll('.nav li.grp').forEach(function (li) { li.classList.remove('open'); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenus(); });
  menuBtn.addEventListener('click', function () {
    var on = !nav.classList.contains('show');
    nav.classList.toggle('show', on);
    menuBtn.setAttribute('aria-expanded', String(on));
  });

  // "Read the proposal" button
  document.querySelectorAll('[data-scroll]').forEach(function (b) {
    b.addEventListener('click', function () { document.getElementById(b.dataset.scroll).scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  });

  // ---------- "On this page" lists ----------
  function buildToc(page) {
    var ol = page.querySelector('[data-toc]');
    if (!ol || ol.childElementCount) return;
    page.querySelectorAll('h2').forEach(function (h) {
      var li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button';
      b.textContent = h.textContent;
      b.addEventListener('click', function () { h.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
      li.appendChild(b);
      ol.appendChild(li);
    });
  }

  // ---------- 3D viewer (models come from models/kits.js as base64) ----------
  var viewerStarted = false, mv = null;
  function modelSrc(t) {
    return 'data:model/gltf-binary;base64,' + window.KIT_GLB[t].replace(/\s+/g, '');
  }
  function initViewer() {
    if (viewerStarted) return;
    viewerStarted = true;
    var host = document.getElementById('mvHost');
    var fail = function () { host.innerHTML = '<p class="vfail">The 3D viewer could not load here. The concept renders below show the same kits.</p>'; };
    var start = function () {
      mv = document.createElement('model-viewer');
      mv.setAttribute('camera-controls', '');
      mv.setAttribute('touch-action', 'pan-y');
      mv.setAttribute('shadow-intensity', '1');
      mv.setAttribute('exposure', '1.05');
      mv.setAttribute('camera-orbit', '25deg 58deg 72%');
      mv.setAttribute('interaction-prompt', 'none');
      mv.addEventListener('error', fail);
      host.appendChild(mv);
      setTier('3');
    };
    if (!window.KIT_GLB || !window.customElements) return fail();
    if (customElements.get('model-viewer')) return start();
    var timer = setTimeout(fail, 12000);
    customElements.whenDefined('model-viewer').then(function () { clearTimeout(timer); start(); });
  }
  function setTier(t) {
    document.querySelectorAll('.vt').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.tier === t)); });
    if (!mv) return;
    mv.querySelectorAll('.hs').forEach(function (h) { h.remove(); });
    mv.setAttribute('src', modelSrc(t));
    mv.setAttribute('alt', '3D model of the ' + NAMES[t]);
    var legend = document.getElementById('mvLegend');
    legend.innerHTML = '';
    HOT['tier' + t].forEach(function (s, i) {
      var n = i + 1, h = document.createElement('button'), li = document.createElement('li'), txt = document.createElement('span');
      h.className = 'hs'; h.type = 'button'; h.slot = 'hotspot-' + n; h.textContent = n;
      h.setAttribute('aria-label', n + '. ' + s.label);
      h.dataset.position = s.position.map(function (v) { return v + 'm'; }).join(' ');
      h.dataset.normal = (s.normal || [0, 1, 0]).map(function (v) { return v + 'm'; }).join(' ');
      li.innerHTML = '<span class="k">' + n + '</span>';
      txt.textContent = s.label;
      li.appendChild(txt);
      var on = function () { h.classList.add('hot'); li.classList.add('hot'); };
      var off = function () { h.classList.remove('hot'); li.classList.remove('hot'); };
      [h, li].forEach(function (el) { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off); });
      h.addEventListener('focus', on); h.addEventListener('blur', off);
      mv.appendChild(h);
      legend.appendChild(li);
    });
  }
  document.querySelectorAll('.vt').forEach(function (b) { b.addEventListener('click', function () { setTier(b.dataset.tier); }); });

  // ---------- render carousel ----------
  var imgs = [].slice.call(document.querySelectorAll('#carStage img')), ci = 0;
  var dots = document.getElementById('carDots'), cap = document.getElementById('carCap');
  var labels = ['Tier 1', 'Tier 2', 'Tier 3'];
  imgs.forEach(function (_, i) {
    var d = document.createElement('button');
    d.type = 'button';
    d.setAttribute('aria-label', 'Show ' + labels[i]);
    d.addEventListener('click', function () { slide(i); });
    dots.appendChild(d);
  });
  function slide(i) {
    ci = (i + imgs.length) % imgs.length;
    imgs.forEach(function (im, k) { im.classList.toggle('on', k === ci); });
    [].forEach.call(dots.children, function (d, k) { d.setAttribute('aria-current', String(k === ci)); });
    cap.textContent = labels[ci];
  }
  document.getElementById('carPrev').addEventListener('click', function () { slide(ci - 1); });
  document.getElementById('carNext').addEventListener('click', function () { slide(ci + 1); });
  slide(0);

  // ---------- Figure 14: cost chart (values from Table 10) ----------
  (function () {
    var data = [['5 accessory bundles', 1389.45], ['2 messengers + activation', 1138], ['Ranger training (4 Rangers × 4 h)', 720], ['Contingency (15%)', 629.32], ['Satellite service (12 months)', 528], ['Materials, setup and delivery', 420]];
    var total = data.reduce(function (s, d) { return s + d[1]; }, 0), max = 2000;
    var box = document.getElementById('costChart');
    var tip = document.createElement('div'); tip.className = 'tip'; tip.hidden = true; box.appendChild(tip);
    data.forEach(function (d) {
      var row = document.createElement('div'); row.className = 'bar-row';
      var lbl = document.createElement('div'); lbl.className = 'bar-lbl'; lbl.textContent = d[0];
      var tr = document.createElement('div'); tr.className = 'bar-track';
      var bar = document.createElement('div'); bar.className = 'bar'; bar.style.width = (d[1] / max * 100) + '%'; bar.tabIndex = 0;
      var share = Math.round(d[1] / total * 100);
      var money = '$' + d[1].toLocaleString('en-AU', { minimumFractionDigits: 2 });
      bar.setAttribute('aria-label', d[0] + ': ' + money + ', ' + share + '% of total');
      var val = document.createElement('span'); val.className = 'bar-val'; val.style.left = 'calc(' + (d[1] / max * 100) + '% + 8px)';
      val.textContent = '$' + Math.round(d[1]).toLocaleString('en-AU');
      var showTip = function () {
        var r = bar.getBoundingClientRect(), b = box.getBoundingClientRect();
        tip.textContent = d[0] + ' · ' + money + ' · ' + share + '% of total';
        tip.style.left = (r.left - b.left + r.width / 2) + 'px';
        tip.style.top = (r.top - b.top) + 'px';
        tip.hidden = false;
      };
      var hideTip = function () { tip.hidden = true; };
      bar.addEventListener('mouseenter', showTip); bar.addEventListener('mouseleave', hideTip);
      bar.addEventListener('focus', showTip); bar.addEventListener('blur', hideTip);
      tr.appendChild(bar); tr.appendChild(val); row.appendChild(lbl); row.appendChild(tr); box.appendChild(row);
    });
    var ax = document.createElement('div'); ax.className = 'bar-axis';
    ax.innerHTML = '<span></span><div class="ticks"><span>$0</span><span>$500</span><span>$1,000</span><span>$1,500</span><span>$2,000</span></div>';
    box.appendChild(ax);
  })();

  // ---------- Figure 13: implementation timeline ----------
  (function () {
    var months = ['Nov 26', 'Dec', 'Jan 27', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov 27'];
    var full = ['Nov 2026', 'Dec 2026', 'Jan 2027', 'Feb 2027', 'Mar 2027', 'Apr 2027', 'May 2027', 'Jun 2027', 'Jul 2027', 'Aug 2027', 'Sep 2027', 'Oct 2027', 'Nov 2027'];
    var wet = [0, 1, 2, 3, 4, 5, 12];
    var phases = [
      ['1. Local review', 'YAC and Rangers agree routes, tier rules, monitoring and privacy', 0, 4, '#143F61'],
      ['2. Procure and deliver', 'Order via Cairns; deliver when roads reopen', 4, 6, '#3F6E91'],
      ['3. Configure and train', 'Activate service, test messages, practise handover', 5, 7, '#00735D'],
      ['4. Limited pilot', 'Measure demand, failures, charging and staff time', 6, 12, '#009E82'],
      ['5. Review', 'Revise quantities, training and budget; suspend service', 12, 13, '#B87414']
    ];
    var g = document.getElementById('tlGrid');
    g.appendChild(document.createElement('div'));
    months.forEach(function (m, i) { var d = document.createElement('div'); d.className = 'tl-m' + (wet.indexOf(i) >= 0 ? ' wet' : ''); d.textContent = m; g.appendChild(d); });
    phases.forEach(function (p, r) {
      // the label column carries the description, so the bars only need the dates (a one-month bar is too narrow for text)
      var l = document.createElement('div'); l.className = 'tl-l'; l.style.gridRow = r + 2; l.style.gridColumn = '1';
      var name = document.createElement('b'); name.textContent = p[0];
      var desc = document.createElement('span'); desc.textContent = p[1];
      l.appendChild(name); l.appendChild(desc); g.appendChild(l);
      var a = full[p[2]].split(' '), z = full[p[3] - 1].split(' ');
      var when = p[3] - p[2] === 1 ? full[p[2]] : a[1] === z[1] ? a[0] + ' – ' + z.join(' ') : full[p[2]] + ' – ' + full[p[3] - 1];
      var b = document.createElement('div'); b.className = 'tl-b'; b.title = p[0] + ': ' + when;
      b.textContent = p[3] - p[2] === 1 ? months[p[2]] : months[p[2]] + '–' + months[p[3] - 1];
      b.dataset.full = when; // the stacked phone layout shows the full dates instead
      b.style.gridRow = r + 2; b.style.gridColumn = (p[2] + 2) + ' / ' + (p[3] + 2); b.style.background = p[4];
      g.appendChild(b);
    });
  })();

  // first page: wait for the whole document so the 3D models (loaded after this script in the single-file version) are ready
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { show(routeFromHash()); });
  else show(routeFromHash());
})();
