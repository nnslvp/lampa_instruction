# Lampa Guide Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Lampa Guide from dark AI-slop theme to light Editorial Paper aesthetic while preserving all content, URLs, and link structure. Simplify CSS from 2200 to ~500 lines.

**Architecture:** Jekyll static site. Two layouts (`default.html`, `plugin.html`), one CSS file (`styles.css`), one JS file (`navigation.js`). Seven content pages + ~90 plugin pages. All pages use `layout: default` or `layout: plugin` (which wraps `default`). Redesign touches layouts, CSS, JS, and HTML class names in content pages.

**Tech Stack:** Jekyll, HTML, CSS (custom properties), vanilla JS, Google Fonts (Literata + DM Sans)

**Spec:** `docs/superpowers/specs/2026-03-29-redesign-design.md`

---

### Task 1: Rewrite styles.css

The foundation — new design system as CSS. Everything else depends on this.

**Files:**
- Rewrite: `styles.css` (currently 2207 lines → target ~500)

- [ ] **Step 1: Write the complete new styles.css**

Replace the entire file with the new design system. Structure:

```css
/* === RESET === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
img { max-width: 100%; display: block; }

/* === VARIABLES === */
:root {
  --bg: #f5f0e8;
  --bg-surface: #fffbf5;
  --bg-elevated: #ffffff;
  --text: #1a1a1a;
  --text-secondary: #555555;
  --text-muted: #999999;
  --accent: #b45309;
  --accent-hover: #92400e;
  --accent-light: #fef3c7;
  --border: #e8e0d0;
  --border-light: #f0ebe3;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --font-heading: 'Literata', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}

/* === BASE === */
html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  font-size: 16px;
  min-height: 100vh;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  margin-bottom: var(--space-4);
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.1rem; }

p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  max-width: 70ch;
  line-height: 1.7;
}

a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
}

a:hover { color: var(--accent-hover); }

a:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

ul, ol {
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
  color: var(--text-secondary);
}

li { margin-bottom: var(--space-2); }

code {
  background: var(--accent-light);
  padding: 0.15em 0.4em;
  border-radius: var(--radius-sm);
  font-size: 0.9em;
  color: var(--accent-hover);
}

strong { color: var(--text); }
small { color: var(--text-muted); font-size: 0.875rem; }

/* === LAYOUT === */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

main.container {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

/* === HEADER === */
.header {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.nav-brand a {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
}

.nav-brand a:hover { color: var(--accent); }

.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
}

.nav-list a {
  display: block;
  padding: var(--space-2) var(--space-3);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: color 0.2s, background 0.2s;
}

.nav-list a:hover {
  color: var(--text);
  background: var(--border-light);
}

.nav-list a.active {
  color: var(--accent);
  font-weight: 600;
}

.nav-list a.telegram-link {
  background: var(--accent);
  color: white;
  font-weight: 600;
  padding: var(--space-2) var(--space-4);
}

.nav-list a.telegram-link:hover {
  background: var(--accent-hover);
  color: white;
}

/* Burger */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.nav-toggle span,
.nav-toggle span::before,
.nav-toggle span::after {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  transition: transform 0.3s;
}

.nav-toggle span { position: relative; }

.nav-toggle span::before,
.nav-toggle span::after {
  content: '';
  position: absolute;
  left: 0;
}

.nav-toggle span::before { top: -7px; }
.nav-toggle span::after { top: 7px; }

/* === FOOTER === */
footer {
  border-top: 1px solid var(--border);
  padding: var(--space-8) 0;
  text-align: center;
}

footer p {
  color: var(--text-muted);
  font-size: 0.875rem;
  max-width: none;
  margin: 0 auto var(--space-2);
}

footer a {
  color: var(--text-muted);
  font-size: 0.875rem;
}

footer a:hover { color: var(--accent); }

/* === HERO === */
.hero-section {
  text-align: center;
  padding: var(--space-12) 0 var(--space-8);
  border-bottom: 1px solid var(--border-light);
  margin-bottom: var(--space-8);
}

.hero-section h2 {
  font-size: 2rem;
  margin-bottom: var(--space-4);
}

.hero-description {
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto var(--space-6);
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-muted);
  font-size: 0.9375rem;
}

.feature-icon { font-size: 1.25rem; }

/* === CARDS === */
.card, .content-card, .faq-item, .guide-item, .info-card, .support-item, .support-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-6);
}

/* === STEPS === */
.steps-container { margin: var(--space-6) 0; }

.step-card {
  display: flex;
  gap: var(--space-6);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-4);
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.125rem;
}

.step-content { flex: 1; min-width: 0; }

.step-content h3 { margin-bottom: var(--space-3); }

.step-description { margin-bottom: var(--space-4); }

.step-result {
  background: var(--accent-light);
  border-left: 3px solid var(--accent);
  padding: var(--space-3) var(--space-4);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin-top: var(--space-4);
  font-weight: 500;
  color: var(--accent-hover);
}

/* === INSTRUCTION LIST === */
.instruction-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.instruction-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.instruction-icon {
  flex-shrink: 0;
  font-size: 1.125rem;
  line-height: 1.5;
}

/* === CTA BLOCKS === */
.vpn-cta, .telegram-cta, .proxy-cta {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-6);
}

.vpn-cta-content, .telegram-cta-content, .proxy-cta-content {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.vpn-cta-icon, .proxy-cta-icon { font-size: 2rem; flex-shrink: 0; }

.vpn-cta-text h3, .telegram-cta-text h3, .proxy-cta-text h3 { margin-bottom: var(--space-2); }
.vpn-cta-text p, .telegram-cta-text p, .proxy-cta-text p { margin-bottom: 0; }

.vpn-cta-button, .telegram-cta-button, .proxy-cta-button { flex-shrink: 0; }

/* === BUTTONS === */
.btn, .btn-vpn, .btn-telegram, .btn-proxy, .btn-secondary {
  display: inline-block;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  border: none;
  font-family: var(--font-body);
}

.btn, .btn-vpn, .btn-telegram, .btn-proxy {
  background: var(--accent);
  color: white;
}

.btn:hover, .btn-vpn:hover, .btn-telegram:hover, .btn-proxy:hover {
  background: var(--accent-hover);
  color: white;
}

.btn-secondary {
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--accent);
}

.btn-secondary:hover {
  background: var(--accent-light);
  color: var(--accent-hover);
}

/* === PAGE NAV === */
.page-nav {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  margin-bottom: var(--space-8);
}

.page-nav h3 {
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: var(--space-4);
}

.page-nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.page-nav a {
  display: block;
  padding: var(--space-2) var(--space-4);
  background: var(--bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
}

.page-nav a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* === FAQ === */
.faq-item h3 {
  color: var(--text);
  cursor: default;
}

.faq-item h4 { margin-top: var(--space-4); }

/* === GRIDS === */
.benefits-grid, .support-grid, .links-grid, .contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-4);
  margin: var(--space-4) 0;
}

.benefit-item, .quick-link {
  background: var(--bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

.benefit-item h4 { margin-bottom: var(--space-2); }
.benefit-item p { margin-bottom: 0; font-size: 0.9375rem; }

.quick-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--text-secondary);
  transition: border-color 0.2s;
}

.quick-link:hover { border-color: var(--accent); color: var(--accent); }
.link-icon { font-size: 1.25rem; }

/* === NOTICES === */
.security-notice, .warning-notice, .important-note, .geo-warning {
  background: var(--accent-light);
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  padding: var(--space-6);
  margin: var(--space-6) 0;
}

.security-notice h3, .warning-notice h3, .important-note h4, .geo-warning h3 {
  margin-bottom: var(--space-3);
}

.security-benefits, .vpn-features {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-top: var(--space-4);
}

.security-item, .vpn-feature {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.security-icon { font-size: 1.125rem; }

/* === SERVERS === */
.server-info { margin-top: var(--space-6); }
.server-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.server-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--bg);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
}

.server-icon { font-size: 1.25rem; }
.server-item strong { display: block; color: var(--text); }
.server-item small { color: var(--text-muted); font-size: 0.8125rem; }

/* === PLUGINS === */
.plugin-category { margin-bottom: var(--space-8); }

.plugin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.plugin-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
}

.plugin-card.featured { border-color: var(--accent); }

.plugin-card h3 { font-size: 1rem; margin-bottom: var(--space-2); }
.plugin-card p { font-size: 0.9375rem; margin-bottom: var(--space-3); }

.plugin-card code {
  display: block;
  margin-bottom: var(--space-3);
  word-break: break-all;
  font-size: 0.8125rem;
}

.plugin-link {
  color: var(--text);
  text-decoration: none;
}
.plugin-link:hover { color: var(--accent); }

.plugin-status {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
}

.plugin-status.active { background: #d1fae5; color: #065f46; }
.plugin-status.warning { background: var(--accent-light); color: var(--accent-hover); }
.plugin-status.required { background: #dbeafe; color: #1e40af; }

/* === CATEGORY NAV === */
.category-nav {
  margin-bottom: var(--space-8);
}

.category-nav h3 { margin-bottom: var(--space-4); }

.category-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.category-link {
  padding: var(--space-2) var(--space-4);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: border-color 0.2s, color 0.2s;
}

.category-link:hover { border-color: var(--accent); color: var(--accent); }

/* === PLUGINS PAGE INLINE OVERRIDES === */
.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-4);
  margin: var(--space-4) 0;
}

.support-section { margin-top: var(--space-8); }

.support-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

/* === CODE HIGHLIGHT (plugin pages) === */
.code-highlight {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.code-highlight code {
  display: inline;
  word-break: break-all;
}

/* === PLUGIN LIST (guides page) === */
.plugin-list { margin: var(--space-4) 0; }
.plugin-list h4 { margin-top: var(--space-4); margin-bottom: var(--space-2); }

/* === GEO WARNING (amber variant for redesign) === */
.geo-warning-content {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.geo-warning-icon { font-size: 2rem; flex-shrink: 0; }
.geo-warning-text h3 { margin-bottom: var(--space-3); }
.geo-warning-text p { margin-bottom: var(--space-3); }

.vpn-link, .vpn-link-highlighted { color: var(--accent); font-weight: 600; }
.vpn-link:hover, .vpn-link-highlighted:hover { color: var(--accent-hover); }

/* === CONTACT === */
.contact-item {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.contact-link {
  font-size: 1.125rem;
  font-weight: 600;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .nav-toggle { display: block; }

  .nav-list {
    display: none;
    flex-direction: column;
    width: 100%;
    padding: var(--space-4) 0;
    gap: var(--space-1);
  }

  .nav.open .nav-list { display: flex; }

  .nav {
    flex-wrap: wrap;
  }

  .hero-section { padding: var(--space-8) 0 var(--space-6); }
  .hero-section h2 { font-size: 1.5rem; }
  .hero-features { gap: var(--space-4); }

  .step-card { flex-direction: column; gap: var(--space-4); }

  .vpn-cta-content, .telegram-cta-content, .proxy-cta-content,
  .geo-warning-content {
    flex-direction: column;
    text-align: center;
  }

  .plugin-grid, .benefits-grid, .support-grid, .server-list,
  .info-cards, .support-cards, .links-grid {
    grid-template-columns: 1fr;
  }

  .page-nav ul { flex-direction: column; }

  main.container { padding-top: var(--space-8); padding-bottom: var(--space-8); }
}
```

- [ ] **Step 2: Verify the file saved correctly**

Run: `wc -l styles.css`
Expected: ~450-550 lines

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "style: rewrite CSS to Editorial Paper design system

Literata + DM Sans typography, amber accent on paper background.
From 2207 lines to ~500, no frameworks."
```

---

### Task 2: Rewrite default layout

Strip ads and third-party dependencies, update fonts, update navigation to 6 items.

**Files:**
- Modify: `_layouts/default.html`

- [ ] **Step 1: Rewrite _layouts/default.html**

Full replacement. Key changes:
- Google Fonts: replace Roboto with Literata + DM Sans (`display=swap`, only needed weights)
- Remove: Milligram CSS link, Normalize.css link, VK OpenAPI script, Yandex RTB ad script + 3 ad blocks in main
- Navigation: 6 items (Главная, FAQ, Плагины, Руководства, Контакты, Telegram button) — remove Стабильность and Дымка VPN links
- Keep: GTM noscript + script, `{% seo %}`, favicons, `navigation.js`

New `_layouts/default.html`:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {% seo %}
    <meta name="msapplication-TileColor" content="#b45309" />
    <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
    <link rel="manifest" href="/icons/site.webmanifest" />
    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#b45309" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,700&family=DM+Sans:wght@400;500;600&display=swap" />
    <link rel="stylesheet" href="/styles.css" />
  </head>

  <!-- Google Tag Manager -->
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5VKMRGJ9");
  </script>
  <!-- End Google Tag Manager -->

  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VKMRGJ9"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <a href="/">Lampa Guide</a>
        </div>
        <button class="nav-toggle" aria-label="Toggle navigation">
          <span></span>
        </button>
        <ul class="nav-list">
          <li><a href="/" {% if page.url == "/" %}class="active"{% endif %}>Главная</a></li>
          <li><a href="/faq" {% if page.url == "/faq/" %}class="active"{% endif %}>FAQ</a></li>
          <li><a href="/plugins" {% if page.url == "/plugins/" %}class="active"{% endif %}>Плагины</a></li>
          <li><a href="/guides" {% if page.url == "/guides/" %}class="active"{% endif %}>Руководства</a></li>
          <li><a href="/contacts" {% if page.url == "/contacts/" %}class="active"{% endif %}>Контакты</a></li>
          <li><a href="https://t.me/+0iNJ8wLZretiOThi" target="_blank" rel="noopener noreferrer" class="telegram-link">Telegram</a></li>
        </ul>
      </nav>
    </header>

    <main class="container">
      {{ content }}
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2026 Инструкция по настройке Lampa. Все права защищены.</p>
        <p>
          <a href="/privacy">Политика конфиденциальности</a> |
          <a href="/terms">Пользовательское соглашение</a> |
          <a href="/contacts">Контакты</a>
        </p>
      </div>
    </footer>

    <script src="/navigation.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add _layouts/default.html
git commit -m "layout: strip ads and dependencies, update nav to 6 items

Remove Yandex RTB, VK OpenAPI, Milligram, Normalize.
Switch to Literata + DM Sans. Remove Stability and VPN from nav."
```

---

### Task 3: Simplify navigation.js

Current: 60 lines of JS with complex burger animation. Target: ~15 lines, simple toggle.

**Files:**
- Rewrite: `navigation.js`

- [ ] **Step 1: Rewrite navigation.js**

```javascript
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});
```

- [ ] **Step 2: Commit**

```bash
git add navigation.js
git commit -m "refactor: simplify burger menu to 15 lines"
```

---

### Task 4: Update index.html

Remove inline styles, update CSS class usage to match new system. Content stays identical.

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Clean up index.html**

Changes needed:
- Line 11: keep `<div itemscope...>` — schema.org stays
- Lines 18-41: `.hero-section` / `.hero-content` — class names unchanged, works with new CSS
- Lines 44-88: CTA blocks — class names unchanged (`.vpn-cta`, `.telegram-cta`, `.proxy-cta`), work with new CSS
- Lines 153-157: Remove inline `style=""` from the stability guide link. Replace with:
  ```html
  <div style="text-align: center; margin-top: 1.5rem;">
    <a href="/stability" class="btn">
      Подробное руководство по стабильности →
    </a>
  </div>
  ```
  Change only the `<a>` tag — remove inline styles, add `class="btn"`.

All other content, URLs, anchors, schema.org — untouched.

- [ ] **Step 2: Verify no broken links**

Run: `grep -n 'href=' index.html | head -30`
Verify all hrefs are present and unchanged.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "refactor: remove inline styles from index.html"
```

---

### Task 5: Update plugin layout and remove inline styles from plugin pages

The `_layouts/plugin.html` has inline `<style>` blocks for geo-warning. Those styles are now in `styles.css`. Remove the inline block.

**Files:**
- Modify: `_layouts/plugin.html` (remove `<style>` block at lines 205-306)

- [ ] **Step 1: Remove inline style block from plugin.html**

Delete the entire `<style>...</style>` block at the end of the file (lines 205-306). The geo-warning styles and vpn-features styles are now in `styles.css`. Keep everything else (HTML structure, Liquid templates, `<script>` for clipboard).

- [ ] **Step 2: Commit**

```bash
git add _layouts/plugin.html
git commit -m "refactor: remove inline styles from plugin layout"
```

---

### Task 6: Update plugins.html — remove inline styles

The `plugins.html` has an inline `<style>` block (lines 344-460) for geo-warning and plugin-link styles. Remove it — all styles are now in `styles.css`.

**Files:**
- Modify: `plugins.html` (remove `<style>` block at lines 344-460)

- [ ] **Step 1: Remove inline style block from plugins.html**

Delete the entire `<style>...</style>` block at the end of the file (lines 344 to end). These styles are now covered by `styles.css`.

- [ ] **Step 2: Commit**

```bash
git add plugins.html
git commit -m "refactor: remove inline styles from plugins page"
```

---

### Task 7: Verify with Jekyll serve

Build and visually verify the site works correctly.

**Files:** None (verification only)

- [ ] **Step 1: Build Jekyll site**

Run: `cd /Users/yahor.bukhta/work/lampa_instruction && bundle exec jekyll build 2>&1 | tail -5`
Expected: no errors, `_site/` directory updated

- [ ] **Step 2: Serve and check**

Run: `bundle exec jekyll serve --port 4001 &`
Open `http://localhost:4001` and verify:
- Light paper background
- Literata headings, DM Sans body text
- Amber accent color on buttons and links
- 6 nav items with Telegram as amber button
- No Yandex ads, no VK scripts
- All pages load: `/`, `/faq`, `/plugins`, `/guides`, `/contacts`, `/stability`
- Burger menu works on mobile viewport
- Plugin pages render correctly (e.g., `/plugins/online-mod`)

- [ ] **Step 3: Kill server**

Run: `kill %1` or `pkill -f "jekyll serve"`
