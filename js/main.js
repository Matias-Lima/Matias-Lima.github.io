/* ==========================================================================
   Matias Lima — site scripts
   nav · reveal · hero · coverflow (projects / studies) · explorer grids · timeline
   Content lives in js/data.js (window.SITE).
   ========================================================================== */
(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const narrow = window.matchMedia('(max-width: 760px)');
  const GOLD = '#C58B47';

  /* ---------- helpers ---------- */
  const pad = n => String(n).padStart(2, '0');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const hash = s => { let h = 2166136261; for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
  const rng = seed => {
    let t = seed || 1;
    return () => {
      t += 0x6D2B79F5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  };
  const icon = name => `<svg class="ico" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const f1 = n => n.toFixed(1);
  const openLink = url => {
    if (/^https?:/i.test(url)) window.open(url, '_blank', 'noopener');
    else window.location.href = url;
  };

  /* ---------- procedural card art (used when an item has no image) ---------- */
  const ART = {
    chart(r, o, id) {
      const pts = []; let y = 150;
      for (let i = 0; i <= 20; i++) { y += (r() - .47) * 44; y = Math.max(48, Math.min(212, y)); pts.push([i * 20, y]); }
      const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0] + ' ' + f1(p[1])).join(' ');
      const grid = [60, 110, 160, 210].map(g => `<line x1="0" y1="${g}" x2="400" y2="${g}"/>`).join('');
      return `<g stroke="${GOLD}" stroke-opacity=".12">${grid}</g>
        <path d="${d} L400 250 L0 250Z" fill="url(#gf-${id})"/>
        <path d="${d}" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-opacity=".9"/>
        <circle cx="${pts[20][0]}" cy="${f1(pts[20][1])}" r="3.5" fill="${GOLD}"/>`;
    },
    candles(r) {
      let o = 130, s = '';
      for (let i = 0; i < 24; i++) {
        const c = Math.max(40, Math.min(220, o + (r() - .5) * 52));
        const hi = Math.min(o, c) - r() * 18, lo = Math.max(o, c) + r() * 18, x = 12 + i * 16, up = c < o;
        s += `<line x1="${x}" y1="${f1(hi)}" x2="${x}" y2="${f1(lo)}" stroke="${GOLD}" stroke-opacity=".5"/>
          <rect x="${x - 4}" y="${f1(Math.min(o, c))}" width="8" height="${f1(Math.max(2, Math.abs(c - o)))}" fill="${up ? GOLD : '#0b0b0b'}" fill-opacity="${up ? .85 : 1}" stroke="${GOLD}" stroke-opacity=".8"/>`;
        o = c;
      }
      return s;
    },
    network(r) {
      const P = []; for (let i = 0; i < 16; i++) P.push([30 + r() * 340, 25 + r() * 200]);
      let s = '';
      P.forEach((p, i) => {
        P.map((q, j) => [Math.hypot(p[0] - q[0], p[1] - q[1]), j]).filter(d => d[1] !== i).sort((a, b) => a[0] - b[0]).slice(0, 2)
          .forEach(([, j]) => { s += `<line x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(P[j][0])}" y2="${f1(P[j][1])}" stroke="${GOLD}" stroke-opacity=".35"/>`; });
      });
      P.forEach((p, i) => { s += `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${i % 4 ? 2.2 : 4}" fill="${GOLD}" fill-opacity="${i % 4 ? .7 : .95}"/>`; });
      return s;
    },
    pipeline(r, o) {
      const L = o.left || ['B3', 'CVM', 'AWS'], R = o.right || ['Parquet', 'Database', 'Dashboards'], mid = o.mid || 'Pipeline';
      const font = 'font-family="Inter,system-ui,sans-serif"';
      const box = (x, y, w, t) => `<rect x="${x}" y="${y}" width="${w}" height="30" rx="7" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.22)"/><text x="${x + w / 2}" y="${y + 19}" text-anchor="middle" ${font} font-size="11" fill="#e8e3da">${esc(t)}</text>`;
      const ys = [50, 110, 170]; let s = '';
      L.forEach((t, i) => { s += box(40, ys[i], 70, t) + `<path d="M110 ${ys[i] + 15} C140 ${ys[i] + 15},140 125,165 125" fill="none" stroke="${GOLD}" stroke-opacity=".6"/>`; });
      s += `<rect x="165" y="105" width="80" height="40" rx="9" fill="rgba(197,139,71,.12)" stroke="${GOLD}" stroke-opacity=".8"/><text x="205" y="130" text-anchor="middle" ${font} font-size="12" fill="#f1eee8">${esc(mid)}</text>`;
      R.forEach((t, i) => { s += `<path d="M245 125 C270 125,270 ${ys[i] + 15},295 ${ys[i] + 15}" fill="none" stroke="${GOLD}" stroke-opacity=".6"/>` + box(295, ys[i], 84, t); });
      return s;
    },
    waves() {
      let s = '';
      for (let k = 0; k < 9; k++) {
        const y0 = 62 + k * 18; let d = '';
        for (let x = 0; x <= 400; x += 8) {
          const y = y0 + Math.sin(x / 42 + k * .7) * 14 * Math.sin(x / 130 + 1) + Math.cos(x / 23 + k) * 4;
          d += (x ? 'L' : 'M') + x + ' ' + f1(y);
        }
        s += `<path d="${d}" fill="none" stroke="${GOLD}" stroke-opacity="${(.22 + k * .07).toFixed(2)}" stroke-width="1.3" stroke-dasharray="1.5 5" stroke-linecap="round"/>`;
      }
      return s;
    },
    skyline(r, o, id) {
      let s = `<rect width="400" height="250" fill="url(#gl-${id})"/>`, x = 0;
      while (x < 400) {
        const w = 18 + r() * 40, h = 40 + r() * 150;
        s += `<rect x="${f1(x)}" y="${f1(250 - h)}" width="${f1(w)}" height="${f1(h)}" fill="#0f0e0c" stroke="rgba(197,139,71,.35)"/>`;
        for (let wy = 250 - h + 10; wy < 240; wy += 12)
          for (let wx = x + 5; wx < x + w - 5; wx += 9)
            if (r() > .55) s += `<rect x="${f1(wx)}" y="${f1(wy)}" width="3" height="4" fill="${GOLD}" fill-opacity="${(.3 + r() * .6).toFixed(2)}"/>`;
        x += w + 4 + r() * 10;
      }
      return s;
    },
    code(r) {
      let s = `<text x="300" y="165" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="150" fill="${GOLD}" fill-opacity=".10">&lt;/&gt;</text>`;
      for (let i = 0; i < 10; i++) {
        const y = 40 + i * 19, ind = (i % 4) * 18, w = 60 + r() * 160;
        s += `<rect x="${30 + ind}" y="${y}" width="${w.toFixed(0)}" height="5" rx="2.5" fill="${i % 3 ? 'rgba(255,255,255,.18)' : 'rgba(197,139,71,.6)'}"/>`;
      }
      return s;
    },
    pages(r) {
      let s = '';
      [[150, 40, -8], [120, 55, -3], [95, 70, 3]].forEach(([x, y, rot]) => {
        s += `<g transform="rotate(${rot} ${x + 90} ${y + 90})"><rect x="${x}" y="${y}" width="180" height="200" rx="6" fill="#121110" stroke="rgba(255,255,255,.16)"/>`;
        for (let i = 0; i < 9; i++) s += `<rect x="${x + 18}" y="${y + 24 + i * 18}" width="${(60 + r() * 90).toFixed(0)}" height="4" rx="2" fill="${i ? 'rgba(255,255,255,.14)' : 'rgba(197,139,71,.7)'}"/>`;
        s += '</g>';
      });
      return s;
    },
    rings() {
      let s = '';
      for (let i = 0; i < 7; i++) s += `<line x1="${40 + i * 50}" y1="0" x2="${40 + i * 50}" y2="250" stroke="rgba(255,255,255,.05)"/>`;
      for (let i = 1; i <= 5; i++) s += `<circle cx="250" cy="130" r="${i * 22}" fill="none" stroke="${GOLD}" stroke-opacity="${(.5 - i * .07).toFixed(2)}"/>`;
      s += `<ellipse cx="250" cy="130" rx="110" ry="30" fill="none" stroke="${GOLD}" stroke-opacity=".45" transform="rotate(-18 250 130)"/>
        <ellipse cx="250" cy="130" rx="110" ry="30" fill="none" stroke="${GOLD}" stroke-opacity=".3" transform="rotate(32 250 130)"/>
        <circle cx="${f1(250 + 110 * Math.cos(.6))}" cy="${f1(130 + 30 * Math.sin(.6))}" r="3.5" fill="${GOLD}"/>`;
      return s;
    },
    chat() {
      const b = (x, y, w, gold) => `<rect x="${x}" y="${y}" width="${w}" height="38" rx="12" fill="${gold ? 'rgba(197,139,71,.16)' : 'rgba(255,255,255,.06)'}" stroke="${gold ? 'rgba(197,139,71,.7)' : 'rgba(255,255,255,.18)'}"/>
        <rect x="${x + 16}" y="${y + 13}" width="${w - 50}" height="4" rx="2" fill="rgba(255,255,255,.3)"/>
        <rect x="${x + 16}" y="${y + 23}" width="${(w - 50) * .6}" height="4" rx="2" fill="rgba(255,255,255,.18)"/>`;
      return `<rect x="140" y="18" width="120" height="214" rx="18" fill="#0f0f0f" stroke="rgba(255,255,255,.18)"/>
        <rect x="185" y="26" width="30" height="4" rx="2" fill="rgba(255,255,255,.2)"/>
        ${b(152, 50, 80, 0)}${b(168, 100, 80, 1)}${b(152, 150, 72, 0)}${b(176, 195, 72, 1)}
        <circle cx="330" cy="70" r="26" fill="none" stroke="${GOLD}" stroke-opacity=".5"/><circle cx="330" cy="70" r="4" fill="${GOLD}"/>`;
    }
  };

  let uid = 0;
  function art(kind, seed, opts = {}) {
    const id = 'a' + (++uid).toString(36);
    const fn = ART[kind] || ART.rings;
    const r = rng(hash(seed || kind));
    return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="gf-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${GOLD}" stop-opacity=".28"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0"/></linearGradient>
        <radialGradient id="gl-${id}" cx="${opts.gx ?? .5}" cy="${opts.gy ?? .6}" r=".7"><stop offset="0" stop-color="${GOLD}" stop-opacity=".16"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="400" height="250" fill="#0c0b0a"/>
      <rect width="400" height="250" fill="url(#gl-${id})"/>
      ${fn(r, opts, id)}
    </svg>`;
  }

  // fit: 'contain' shows the whole image (certificates, logos, documents) over a blurred copy of itself
  const media = item => item.image
    ? (item.fit === 'contain'
      ? `<img class="bg" src="${esc(item.image)}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="fit" src="${esc(item.image)}" alt="" loading="lazy" decoding="async">`
      : `<img src="${esc(item.image)}" alt="" loading="lazy" decoding="async">`)
    : art(item.art || 'rings', item.id || item.title, item.artOpts || {});
  const mediaClass = item => item.fit === 'contain' ? ' media-contain' : '';

  const tagsHtml = t => (t && t.length) ? `<ul class="tags">${t.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';

  // every link a card offers: `links: [{label, url}]` when there are several (or the label matters),
  // otherwise the single `link` with a label guessed from its address
  const autoLabel = url => /github\.com/i.test(url) ? 'Code' : /streamlit\.app/i.test(url) ? 'Live site'
    : /canva\.com/i.test(url) ? 'Presentation' : /coursera\.org|drive\.google\.com/i.test(url) ? 'Certificate'
    : /\.pdf$/i.test(url) ? 'PDF' : /\.(png|jpe?g|webp)$/i.test(url) ? 'Image' : /^Paginas_projects\//.test(url) ? 'Page' : 'Open';
  const linksOf = item => item.links && item.links.length ? item.links : (item.link ? [{ label: autoLabel(item.link), url: item.link }] : []);
  const linksHtml = item => {
    const ls = linksOf(item);
    return ls.length ? `<div class="links">${ls.map(l => `<a href="${esc(l.url)}"${/^https?:/i.test(l.url) ? ' target="_blank" rel="noopener"' : ''}>${esc(l.label)} ${icon('arrow')}</a>`).join('')}</div>` : '';
  };

  const numRow = (n, year) => `<div class="card-num"><span>${pad(n)}</span><i></i>${year ? `<span class="year">${esc(year)}</span>` : ''}</div>`;

  const flowCard = (item, n) => `<article class="fcard" data-id="${esc(item.id)}"${item.link ? ' data-link' : ''}>
      <div class="fcard-media${mediaClass(item)}">${media(item)}</div>
      <div class="fcard-body">
        ${numRow(n, item.year)}
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
        ${tagsHtml(item.tags)}
        ${linksHtml(item)}
      </div>
    </article>`;

  // last card of a carousel: the invitation to open the full explorer page
  const ctaCard = item => `<article class="fcard fcard--cta" data-id="cta" data-link>
      <div class="fcard-cta">
        <span class="eyebrow eyebrow--line">${esc(item.eyebrow)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
        <span class="btn btn--sm btn--pill">${esc(item.label)} <span class="arrow">${icon('arrow')}</span></span>
      </div>
    </article>`;

  // the primary link stretches over the whole card; the labelled links sit above it
  const gridCard = (item, n) => {
    const ext = /^https?:/i.test(item.link || '') ? ' target="_blank" rel="noopener"' : '';
    return `<article class="gcard reveal">
      <div class="gcard-media${mediaClass(item)}">${media(item)}${item.link ? `<span class="arrow-btn" aria-hidden="true">${icon('arrow')}</span>` : ''}</div>
      <div class="gcard-body">
        ${numRow(n, item.year)}
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
        ${item.group || item.org ? `<div class="org">${esc([item.group, item.org].filter(Boolean).join(' · '))}</div>` : ''}
        ${tagsHtml(item.tags)}
        ${linksHtml(item)}
      </div>
      ${item.link ? `<a class="gcard-stretch" href="${esc(item.link)}"${ext} aria-label="${esc(item.title)}"></a>` : ''}
    </article>`;
  };

  /* ---------- reveal on scroll ---------- */
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  const observeReveals = (scope = document) => $$('.reveal:not(.in)', scope).forEach(el => revealIO.observe(el));
  // safety net: anything already on screen is shown even if the observer never fires
  setTimeout(() => $$('.reveal:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in'); }), 1500);

  /* ---------- coverflow ---------- */
  const X = [0, .25, .43, .58, .7], S = [1, .86, .74, .64, .56], R = [0, 14, 22, 28, 32], Z = [0, -120, -240, -340, -420], O = [1, .92, .72, .45, 0];

  class Flow {
    // pick(key) -> the items to show for a filter; cta(key) -> the closing "see all" card (or null)
    constructor(root, pick, filters, cta) {
      this.root = root; this.pick = pick; this.cta = cta; this.filters = filters; this.active = 0;
      this.items = this.build('all');
      this.stage = $('.flow-stage', root); this.now = $('.flow-now', root);
      this.dots = $('.flow-dots', root); this.count = $('.flow-count', root); this.pills = $('.pills', root);

      this.pills.innerHTML = filters.map(f => `<button class="pill${f.key === 'all' ? ' is-active' : ''}" type="button" data-key="${esc(f.key)}">${esc(f.label)}</button>`).join('');
      this.pills.addEventListener('click', e => { const b = e.target.closest('.pill'); if (b) this.setFilter(b.dataset.key); });
      $('.flow-btn.prev', root).addEventListener('click', () => this.go(this.active - 1));
      $('.flow-btn.next', root).addEventListener('click', () => this.go(this.active + 1));
      this.dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) this.go(+b.dataset.i); });
      this.stage.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); this.go(this.active + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.go(this.active - 1); }
      });

      // drag / swipe in 3D mode
      let startX = null;
      this.stage.addEventListener('pointerdown', e => { if (narrow.matches || e.button) return; startX = e.clientX; });
      this.stage.addEventListener('pointerup', e => {
        if (startX === null) return;
        const dx = e.clientX - startX; startX = null;
        if (Math.abs(dx) > 40) { this.swiped = true; this.go(this.active + (dx < 0 ? 1 : -1)); setTimeout(() => { this.swiped = false; }, 0); }
      });
      this.stage.addEventListener('pointercancel', () => { startX = null; });

      // mobile: follow native horizontal scroll
      let raf = 0;
      this.stage.addEventListener('scroll', () => {
        if (!narrow.matches || this.autoScroll) return;
        cancelAnimationFrame(raf); raf = requestAnimationFrame(() => this.syncFromScroll());
      }, { passive: true });

      const relayout = () => this.layout(true);
      window.addEventListener('resize', relayout);
      narrow.addEventListener('change', relayout);
      this.render();
    }

    build(key) {
      const list = this.pick(key).slice();
      const c = this.cta && this.cta(key);
      if (c) list.push({ ...c, cta: true });
      return list;
    }

    setFilter(key) {
      $$('.pill', this.pills).forEach(p => p.classList.toggle('is-active', p.dataset.key === key));
      this.items = this.build(key);
      this.active = 0;
      this.render();
    }

    render() {
      this.stage.innerHTML = this.items.length ? this.items.map((it, i) => it.cta ? ctaCard(it) : flowCard(it, i + 1)).join('') : '<div class="flow-empty">Nothing here yet.</div>';
      this.cards = $$('.fcard', this.stage);
      this.cards.forEach((c, i) => c.addEventListener('click', e => {
        if (this.swiped || e.target.closest('.links a')) return;  // labelled links handle themselves
        if (i !== this.active) { this.go(i); return; }
        const it = this.items[i]; if (it.link) openLink(it.link);
      }));
      const n = this.items.length;
      this.dots.innerHTML = (n > 1 && n <= 14) ? this.items.map((_, i) => `<button type="button" data-i="${i}" aria-label="Item ${i + 1}"></button>`).join('') : '';
      this.layout(true);
    }

    // no wrap-around: the carousel has a clear start and a clear end (the "see all" card)
    go(i) { const n = this.items.length; if (!n) return; this.active = Math.max(0, Math.min(n - 1, i)); this.layout(); }

    layout(silent) {
      const n = this.items.length;
      if (!n) { this.now.hidden = true; this.count.textContent = ''; return; }
      const mobile = narrow.matches, W = this.stage.clientWidth;
      $('.flow-btn.prev', this.root).disabled = this.active === 0;
      $('.flow-btn.next', this.root).disabled = this.active === n - 1;
      this.cards.forEach((c, i) => {
        const off = i - this.active;
        const a = Math.abs(off), k = Math.min(a, 4), sign = Math.sign(off);
        c.classList.toggle('is-active', off === 0);
        c.classList.toggle('is-hidden', !mobile && a >= 4);
        c.setAttribute('aria-hidden', off !== 0 && !mobile);
        if (mobile) { c.style.transform = ''; c.style.opacity = ''; c.style.zIndex = ''; return; }
        c.style.transform = `translate3d(${f1(sign * X[k] * W)}px,0,${Z[k]}px) rotateY(${-sign * R[k]}deg) scale(${S[k]})`;
        c.style.opacity = O[k];
        c.style.zIndex = 20 - a;
      });
      if (mobile && !silent) {
        const c = this.cards[this.active];
        this.autoScroll = true;
        this.stage.scrollTo({ left: c.offsetLeft - (this.stage.clientWidth - c.offsetWidth) / 2, behavior: reduced.matches ? 'auto' : 'smooth' });
        clearTimeout(this.autoT); this.autoT = setTimeout(() => { this.autoScroll = false; }, 700);
      }
      const it = this.items[this.active];
      this.now.hidden = false;
      $('.flow-thumb', this.now).innerHTML = it.cta ? icon('grid') : media(it);
      $('strong', this.now).textContent = it.title;
      $('span', this.now).textContent = it.cta ? it.sub : (it.tagline || it.org || it.group || (this.filters.find(f => f.key === it.cat) || {}).label || '');
      $$('button', this.dots).forEach((d, i) => d.classList.toggle('is-active', i === this.active));
      this.count.textContent = `${pad(this.active + 1)} / ${pad(n)}`;
    }

    syncFromScroll() {
      const mid = this.stage.scrollLeft + this.stage.clientWidth / 2;
      let best = 0, bd = Infinity;
      this.cards.forEach((c, i) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = i; } });
      if (best !== this.active) { this.active = best; this.layout(true); }
    }
  }

  /* ---------- explorer grid pages ---------- */
  function initGrid(root, items, filters, noun) {
    if (!root) return;
    const grid = $('.grid', root), search = $('.search input', root), sort = $('.select select', root);
    const pills = $('.pills', root), count = $('.grid-count', root);
    let key = 'all', q = '', order = sort ? sort.value : 'theme';
    const hashKey = decodeURIComponent(location.hash.slice(1));
    if (filters.some(f => f.key === hashKey)) key = hashKey;

    pills.innerHTML = filters.map(f => `<button class="pill${f.key === key ? ' is-active' : ''}" type="button" data-key="${esc(f.key)}">${esc(f.label)}</button>`).join('');

    const apply = () => {
      let list = items.filter(i => key === 'all' || i.cat === key);
      if (q) { const nq = norm(q); list = list.filter(i => norm([i.title, i.desc, i.org, i.group, ...(i.tags || [])].join(' ')).includes(nq)); }
      list = list.slice();
      if (order === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
      else if (order === 'recent') list.sort((a, b) => (b.year || 0) - (a.year || 0));
      else if (order === 'oldest') list.sort((a, b) => (a.year || 9999) - (b.year || 9999));
      // 'theme' keeps the data order and adds a heading whenever the theme changes,
      // plus a smaller sub-heading for the groups of themes that have more than one
      const groupsByCat = {};
      list.forEach(it => { (groupsByCat[it.cat] = groupsByCat[it.cat] || new Set()).add(it.group || ''); });
      let html = '', lastCat = null, lastGroup = null;
      list.forEach((it, i) => {
        if (order === 'theme') {
          if (it.cat !== lastCat) {
            const label = (filters.find(f => f.key === it.cat) || {}).label || it.cat;
            html += `<div class="grid-section"><span class="eyebrow eyebrow--line">${esc(label)}</span></div>`;
            lastCat = it.cat; lastGroup = null;
          }
          if (it.group && it.group !== lastGroup && groupsByCat[it.cat].size > 1) {
            html += `<div class="grid-subsection">${esc(it.group)}</div>`;
          }
          lastGroup = it.group;
        }
        html += gridCard(it, i + 1);
      });
      grid.innerHTML = list.length ? html
        : `<div class="grid-empty">${q ? `No ${noun} match “${esc(q)}”.` : 'Nothing here yet.'}</div>`;
      count.textContent = `${list.length} ${list.length === 1 ? noun.replace(/s$/, '') : noun}`;
      $$('.gcard', grid).forEach((c, i) => { c.style.transitionDelay = `${Math.min(i, 8) * 45}ms`; });
      observeReveals(grid);
    };

    pills.addEventListener('click', e => {
      const b = e.target.closest('.pill'); if (!b) return;
      key = b.dataset.key;
      $$('.pill', pills).forEach(p => p.classList.toggle('is-active', p === b));
      history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
      apply();
    });
    if (search) search.addEventListener('input', () => { q = search.value.trim(); apply(); });
    if (sort) sort.addEventListener('change', () => { order = sort.value; apply(); });
    apply();
  }

  /* ---------- navigation ---------- */
  function initNav() {
    const nav = $('#nav'); if (!nav) return;
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

    const toggle = $('.nav-toggle', nav), menu = $('#menu');
    if (toggle && menu) {
      const set = open => { menu.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('menu-open', open); };
      toggle.addEventListener('click', () => set(!menu.classList.contains('is-open')));
      $$('a', menu).forEach(a => a.addEventListener('click', () => set(false)));
      document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
    }

    // scroll-spy (single page only)
    const links = $$('.nav-links a[href^="#"]', nav); if (!links.length) return;
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.remove('is-active'));
        const a = map.get(en.target.id) || (en.target.id === 'skills' ? map.get('home') : null);
        if (a) a.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    [...map.keys(), 'skills'].forEach(id => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- hero ---------- */
  function initHero() {
    const hero = $('.hero'); if (!hero) return;
    const probe = src => new Promise(res => { const im = new Image(); im.onload = () => res(true); im.onerror = () => res(false); im.src = src; });
    probe('images/hero-bg.jpg').then(ok => { if (ok) hero.classList.add('has-bg'); });

    const img = $('.hero-portrait', hero);
    if (img && !reduced.matches) {
      let raf = 0;
      const update = () => { raf = 0; img.style.setProperty('--py', narrow.matches ? '0px' : `${Math.min(window.scrollY, 900) * .07}px`); };
      window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    }
  }

  /* ---------- about timeline ---------- */
  function initTimeline() {
    const items = $$('.tl-item'); if (!items.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { items.forEach(i => i.classList.remove('is-active')); en.target.classList.add('is-active'); } });
    }, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });
    items.forEach(i => io.observe(i));
  }

  /* ---------- boot ---------- */
  function boot() {
    const S = window.SITE || {};
    initNav();
    $$('[data-art]').forEach(el => { el.innerHTML = art(el.dataset.art, el.dataset.seed || el.dataset.art, {}); });

    const page = document.body.dataset.page;
    if (page === 'home') {
      const P = S.PROJECTS || [], St = S.STUDIES || [];
      const PF = S.PROJECT_FILTERS || [{ key: 'all', label: 'All' }], SF = S.STUDY_FILTERS || [{ key: 'all', label: 'All' }];
      const byCat = (list, key) => list.filter(i => i.cat === key);
      // small themes are shown whole; big ones only through their featured items
      const important = (list, max) => { const f = list.filter(i => i.featured); return list.length <= max ? list : (f.length >= 3 ? f : list.slice(0, max)); };
      const ctaFor = (noun, page, list, filters) => key => {
        const n = key === 'all' ? list.length : byCat(list, key).length;
        const label = (filters.find(f => f.key === key) || {}).label || '';
        return {
          title: key === 'all' ? `See all ${n} ${noun}` : `See all ${n} in ${label}`,
          eyebrow: key === 'all' ? noun : `${noun} · ${label}`,
          desc: 'Open the full explorer to search, sort and filter.',
          sub: `${n} ${noun}`, label: 'Open the explorer',
          link: page + (key === 'all' ? '' : '#' + key)
        };
      };
      const flows = {};
      const pf = $('#projects .flow'), sf = $('#studies .flow');
      if (pf) flows.projects = new Flow(pf, key => key === 'all' ? P.filter(i => i.featured) : important(byCat(P, key), 8), PF, ctaFor('projects', 'projects.html', P, PF));
      // "All" in Studies = every challenge and competition; other themes show their highlights
      if (sf) flows.studies = new Flow(sf, key => (key === 'all' || key === 'challenges') ? byCat(St, 'challenges') : important(byCat(St, key), 6), SF, ctaFor('studies', 'studies.html', St, SF));
      $$('[data-flow-filter]').forEach(a => a.addEventListener('click', e => {
        const [name, key] = a.dataset.flowFilter.split(':');
        const flow = flows[name]; if (!flow) return;
        e.preventDefault();
        flow.setFilter(key || 'all');
        const target = document.getElementById(name);
        if (target) target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
      }));
      initHero();
      initTimeline();
    } else if (page === 'projects') {
      initGrid($('.page'), S.PROJECTS || [], S.PROJECT_FILTERS || [], 'projects');
    } else if (page === 'studies') {
      initGrid($('.page'), S.STUDIES || [], S.STUDY_FILTERS || [], 'studies');
    }
    observeReveals();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
