# Replace BlancVPN with Дымка VPN — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all BlancVPN promotional content with Дымка VPN across the lampa_instruction Jekyll site.

**Architecture:** Pure HTML text/link replacements across 7 files. No backend, no JS, no CSS changes. Largest rewrites are in `stability.html` (FAQ blocks and final CTA).

**Tech Stack:** Static HTML (Jekyll site)

**Spec:** `docs/superpowers/specs/2026-03-23-replace-blancvpn-with-dymka-design.md`

---

### Task 1: Navigation link — `_layouts/default.html`

**Files:**
- Modify: `_layouts/default.html:100`

- [ ] **Step 1: Replace navigation link**

Find:
```html
<li><a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link-nav">🔒 VPN</a></li>
```

Replace with:
```html
<li><a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link-nav">🌫 Дымка VPN</a></li>
```

- [ ] **Step 2: Commit**

```bash
git add _layouts/default.html
git commit -m "replace BlancVPN with Дымка in navigation"
```

---

### Task 2: VPN promo block — `index.html`

**Files:**
- Modify: `index.html:103-105`

- [ ] **Step 1: Replace VPN link and text**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">
  проверенный VPN-сервис
</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">
  VPN-сервис Дымка
</a>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "replace BlancVPN with Дымка in index.html"
```

---

### Task 3: Stability page — simple link replacements — `stability.html`

**Files:**
- Modify: `stability.html:324-327`, `stability.html:374-376`

- [ ] **Step 1: Replace "Мгновенное решение" link (line ~324)**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="inline-vpn-link">
  Подключите VPN за 2 минуты
</a> и все заработает</p>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="inline-vpn-link">
  Подключите Дымку — бесплатно, пока есть места
</a> и все заработает</p>
```

- [ ] **Step 2: Replace emergency CTA button (line ~374)**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="emergency-button">
  Включить VPN сейчас - работает за 60 секунд
</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="emergency-button">
  Подключить Дымку — бесплатно
</a>
```

- [ ] **Step 3: Commit**

```bash
git add stability.html
git commit -m "replace BlancVPN links in stability.html simple blocks"
```

---

### Task 4: Stability page — FAQ block rewrites — `stability.html`

**Files:**
- Modify: `stability.html:397-433`

- [ ] **Step 1: Replace "Почему бесплатные VPN не подходят?" FAQ block (lines ~397-408)**

Find:
```html
<div class="faq-block">
  <h3>🤔 Почему бесплатные VPN не подходят?</h3>
  <p>Бесплатные VPN имеют критические недостатки для стриминга:</p>
  <ul>
    <li>Ограничение скорости (1-5 Мбит/с)</li>
    <li>Ограничение трафика (500МБ-2ГБ в месяц)</li>
    <li>Нестабильное соединение</li>
    <li>Логирование и продажа данных</li>
    <li>Блокировка P2P трафика</li>
  </ul>
  <p><strong>Итог:</strong> для Lampa нужен платный VPN с высокой скоростью.</p>
</div>
```

Replace with:
```html
<div class="faq-block">
  <h3>🤔 Чем Дымка лучше обычных VPN?</h3>
  <p>Дымка использует умный роутинг — сама определяет, какой трафик направить через VPN, а какой нет:</p>
  <ul>
    <li>Госуслуги, Авито, Wildberries работают без отключения VPN</li>
    <li>Не нужно постоянно включать и выключать</li>
    <li>Подключил и забыл</li>
    <li>Никаких ограничений скорости и трафика</li>
  </ul>
  <p><strong>Итог:</strong> Дымка — VPN, который не мешает повседневным сервисам.</p>
</div>
```

- [ ] **Step 2: Replace "Сколько стоит" FAQ block (lines ~422-433)**

Find:
```html
<div class="faq-block">
  <h3>💰 Сколько реально стоит стабильная работа?</h3>
  <p>Сравнение затрат на разные решения:</p>
  <ul>
    <li><strong>Качественный VPN:</strong> 200-500₽/месяц</li>
    <li><strong>Платные прокси:</strong> 300-800₽/месяц</li>
    <li><strong>Смена провайдера:</strong> +500-1000₽/месяц</li>
    <li><strong>Мобильный интернет:</strong> 1000-3000₽/месяц</li>
  </ul>
  <p><strong>Специально для читателей:</strong>
  <a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer">BlancVPN всего 59₽ первый месяц</a></p>
</div>
```

Replace with:
```html
<div class="faq-block">
  <h3>💰 Сколько стоит стабильная работа?</h3>
  <p>С Дымкой — бесплатно, пока есть места. Подключение занимает 2 минуты через Telegram-бот.</p>
  <p><strong>Попробуйте:</strong>
  <a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer">Дымка — бесплатно, пока есть места</a></p>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add stability.html
git commit -m "rewrite FAQ blocks for Дымка in stability.html"
```

---

### Task 5: Stability page — final CTA block rewrite — `stability.html`

**Files:**
- Modify: `stability.html:463-490`

- [ ] **Step 1: Replace final CTA block**

Find (lines ~464-490):
```html
<div class="cta-content">
  <h3>🚀 Обеспечьте стабильную работу Lampa прямо сейчас</h3>
  <p>Не ждите, пока заблокируют именно вас. Более 15,000 пользователей Lampa уже защитили свой доступ.</p>

  <div class="cta-offers">
    <div class="cta-main-offer">
      <div class="offer-badge">Рекомендуем</div>
      <h4>BlancVPN - Проверено пользователями Lampa</h4>
      <div class="offer-features">
        <span class="offer-feature">✅ Работает со всеми источниками</span>
        <span class="offer-feature">✅ Высокая скорость стриминга</span>
        <span class="offer-feature">✅ Поддержка 24/7 на русском</span>
        <span class="offer-feature">✅ Настройка за 2 минуты</span>
      </div>
      <div class="offer-pricing">
        <span class="price-old">199₽</span>
        <span class="price-new">59₽</span>
        <span class="price-period">первый месяц</span>
      </div>
      <a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="cta-button-main">
        Получить доступ за 59₽ →
      </a>

    </div>
  </div>
</div>
```

Replace with:
```html
<div class="cta-content">
  <h3>🚀 Обеспечьте стабильную работу Lampa прямо сейчас</h3>
  <p>Не ждите, пока заблокируют именно вас.</p>

  <div class="cta-offers">
    <div class="cta-main-offer">
      <div class="offer-badge">Рекомендуем</div>
      <h4>Дымка — VPN для России без боли</h4>
      <div class="offer-features">
        <span class="offer-feature">✅ Госуслуги, Авито, Wildberries работают</span>
        <span class="offer-feature">✅ Умный роутинг — подключил и забыл</span>
        <span class="offer-feature">✅ Бесплатно, пока есть места</span>
      </div>
      <a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="cta-button-main">
        Подключить Дымку →
      </a>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add stability.html
git commit -m "rewrite final CTA block for Дымка in stability.html"
```

---

### Task 6: Plugins pages — `plugins.html` and `_layouts/plugin.html`

**Files:**
- Modify: `plugins.html:67-73`, `plugins.html:94`
- Modify: `_layouts/plugin.html:49-55`

- [ ] **Step 1: Replace geo-warning block in `plugins.html` (lines ~67-73)**

Find:
```html
использовать <a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link-highlighted">надёжный VPN-сервис</a>.
</p>
<div class="vpn-features">
  <span class="vpn-feature">✓ Обход блокировок</span>
  <span class="vpn-feature">✓ Быстрое подключение</span>
  <span class="vpn-feature">✓ Безопасность</span>
</div>
```

Replace with:
```html
использовать <a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link-highlighted">VPN-сервис Дымка</a>.
</p>
<div class="vpn-features">
  <span class="vpn-feature">✓ Обход блокировок</span>
  <span class="vpn-feature">✓ Госуслуги и Авито работают</span>
  <span class="vpn-feature">✓ Бесплатно</span>
</div>
```

- [ ] **Step 2: Replace security info card link in `plugins.html` (line ~94)**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">надёжный VPN-сервис</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервис Дымка</a>
```

- [ ] **Step 3: Replace geo-warning block in `_layouts/plugin.html` (lines ~49-55)**

Find:
```html
использовать <a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link-highlighted">надёжный VPN-сервис</a>.
</p>
<div class="vpn-features">
  <span class="vpn-feature">✓ Обход блокировок</span>
  <span class="vpn-feature">✓ Быстрое подключение</span>
  <span class="vpn-feature">✓ Безопасность</span>
</div>
```

Replace with:
```html
использовать <a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link-highlighted">VPN-сервис Дымка</a>.
</p>
<div class="vpn-features">
  <span class="vpn-feature">✓ Обход блокировок</span>
  <span class="vpn-feature">✓ Госуслуги и Авито работают</span>
  <span class="vpn-feature">✓ Бесплатно</span>
</div>
```

- [ ] **Step 4: Commit**

```bash
git add plugins.html _layouts/plugin.html
git commit -m "replace BlancVPN with Дымка in plugins pages"
```

---

### Task 7: Guides page — `guides.html`

**Files:**
- Modify: `guides.html:428`, `guides.html:467`, `guides.html:481`

- [ ] **Step 1: Replace VPN link at line ~428**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN для обхода ограничений</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервис Дымка для обхода ограничений</a>
```

- [ ] **Step 2: Replace VPN link at line ~467**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">надёжный VPN с политикой "no-logs"</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервис Дымка</a>
```

- [ ] **Step 3: Replace VPN link at line ~481**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">проверенный VPN-сервис</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервис Дымка</a>
```

- [ ] **Step 4: Commit**

```bash
git add guides.html
git commit -m "replace BlancVPN with Дымка in guides.html"
```

---

### Task 8: FAQ page — `faq.html`

**Files:**
- Modify: `faq.html:636`

- [ ] **Step 1: Replace VPN link**

Find:
```html
<a href="https://getblancvpn.deals/?ref=yahor" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервисами</a>
```

Replace with:
```html
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer" class="vpn-link">VPN-сервисом Дымка</a>
```

- [ ] **Step 2: Commit**

```bash
git add faq.html
git commit -m "replace BlancVPN with Дымка in faq.html"
```

---

### Task 9: Final verification

- [ ] **Step 1: Verify no BlancVPN references remain**

```bash
grep -ri "blanc" --include="*.html" --include="*.css" --include="*.js" .
grep -ri "getblancvpn" --include="*.html" --include="*.css" --include="*.js" .
```

Expected: no output (zero matches).

- [ ] **Step 2: Verify all Дымка links point to correct URL**

```bash
grep -r "dymkavpn_bot" --include="*.html" .
```

Expected: matches in `_layouts/default.html`, `index.html`, `stability.html`, `plugins.html`, `_layouts/plugin.html`, `guides.html`, `faq.html`.

- [ ] **Step 3: Verify site builds**

```bash
bundle exec jekyll build 2>&1 | tail -5
```

Expected: successful build with no errors.
