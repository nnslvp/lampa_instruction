# Replace BlancVPN with Dymka VPN

## Context

The project previously promoted BlancVPN (via referral link `getblancvpn.deals/?ref=yahor`). Now there is an in-house VPN service called "Dymka" (Дымка), distributed through Telegram bot `@dymkavpn_bot`. All BlancVPN references must be replaced.

## Dymka Key Messaging

- **Brand:** Дымка — VPN для России без боли
- **USP:** Smart routing — Gosuslugi, Avito, Wildberries work without disabling VPN
- **Price:** Free while spots are available (бесплатно, пока есть места)
- **Link:** `https://t.me/dymkavpn_bot`

## Approach

**Approach B: Replace text + simplify promo blocks.** All BlancVPN references replaced with Dymka. Large promo blocks (pricing, guarantees) rewritten to match Dymka's current offering.

## Changes by File

### 1. `_layouts/default.html` (line ~100)
- Navigation link: `getblancvpn.deals/?ref=yahor` → `https://t.me/dymkavpn_bot`
- Text: `🔒 VPN` → `🌫 Дымка VPN`

### 2. `index.html` (lines ~103-105)
- URL → `https://t.me/dymkavpn_bot`
- Text: "проверенный VPN-сервис" → "VPN-сервис Дымка"

### 3. `stability.html` — multiple locations

**"Мгновенное решение" block (line ~324):**
- URL → `https://t.me/dymkavpn_bot`
- Text: "Подключите VPN за 2 минуты" → "Подключите Дымку — бесплатно, пока есть места"

**Emergency CTA button (line ~374):**
- URL → `https://t.me/dymkavpn_bot`
- Text: "Включить VPN сейчас - работает за 60 секунд" → "Подключить Дымку — бесплатно"

**FAQ "Почему бесплатные VPN не подходят?" (lines ~398-407):**
Replace entire block content:
```html
<h3>🤔 Чем Дымка лучше обычных VPN?</h3>
<p>Дымка использует умный роутинг — сама определяет, какой трафик направить через VPN, а какой нет:</p>
<ul>
  <li>Госуслуги, Авито, Wildberries работают без отключения VPN</li>
  <li>Не нужно постоянно включать и выключать</li>
  <li>Подключил и забыл</li>
  <li>Никаких ограничений скорости и трафика</li>
</ul>
<p><strong>Итог:</strong> Дымка — VPN, который не мешает повседневным сервисам.</p>
```

**FAQ "Сколько стоит" (lines ~422-433):**
Replace the entire pricing comparison block. Remove the old cost tiers (200-500₽/month etc.) since Dymka is free:
```html
<h3>💰 Сколько стоит стабильная работа?</h3>
<p>С Дымкой — бесплатно, пока есть места. Подключение занимает 2 минуты через Telegram-бот.</p>
<p><strong>Попробуйте:</strong>
<a href="https://t.me/dymkavpn_bot" target="_blank" rel="noopener noreferrer">Дымка — бесплатно, пока есть места</a></p>
```

**Generic VPN text in conclusions (lines ~446-456):**
Leave generic — these mention "VPN" as a concept, not BlancVPN. No changes needed.

**Final CTA block (lines ~463-490):**
Replace entirely:
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
Remove old pricing elements (`.price-old`, `.price-new`, `.price-period`).

### 4. `plugins.html` — two locations

**Geo-warning block (lines ~67-73):**
- URL → `https://t.me/dymkavpn_bot`
- Text: "надёжный VPN-сервис" → "VPN-сервис Дымка"
- Features: "✓ Обход блокировок" (keep), "✓ Быстрое подключение" → "✓ Госуслуги и Авито работают", "✓ Безопасность" → "✓ Бесплатно"

**Security info card (line ~94):**
- URL → `https://t.me/dymkavpn_bot`
- Text: "надёжный VPN-сервис" → "VPN-сервис Дымка"

### 5. `_layouts/plugin.html` (lines ~49-55)
- Same changes as plugins.html geo-warning block

### 6. `guides.html` — three links with specific replacement text

**Line ~428:** "VPN для обхода ограничений" → "VPN-сервис Дымка для обхода ограничений"
**Line ~467:** "надёжный VPN с политикой "no-logs"" → "VPN-сервис Дымка"
**Line ~481:** "проверенный VPN-сервис" → "VPN-сервис Дымка"

All URLs → `https://t.me/dymkavpn_bot`

### 7. `faq.html` (line ~636)
- URL → `https://t.me/dymkavpn_bot`
- Text: "VPN-сервисами" → "VPN-сервисом Дымка"

## Out of Scope

- Web landing page for Dymka (deferred — Telegram blocked in RF)
- Changes to VPN infrastructure or bot code
- CSS class renaming (`.vpn-offer-card`, `.vpn-link` etc. — generic names, still valid)
- Orphaned CSS rules for removed elements (`.vpn-offer-price`, `.vpn-guarantee`) — cosmetic, can clean up later
- `styles.css` VPN-related styles — generic, no BlancVPN references
- `contacts.html` line 80 — generic VPN mention, no BlancVPN reference
- `_plugins/*.html` YAML front-matter — generic VPN mentions, no BlancVPN reference
- SEO/meta keywords — no BlancVPN references present
