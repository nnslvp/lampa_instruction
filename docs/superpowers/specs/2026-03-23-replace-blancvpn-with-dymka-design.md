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
Replace entire block with:
- Title: "Чем Дымка лучше обычных VPN?"
- Content: Smart routing benefits — Russian services work without disabling VPN

**FAQ "Сколько стоит" (line ~431-432):**
- "BlancVPN всего 59₽ первый месяц" → "Дымка — бесплатно, пока есть места"

**Final CTA block (lines ~463-490):**
Rewrite entirely:
- Title: "Дымка — VPN для России без боли"
- Features: smart routing, Russian services work, free while spots available
- Button: "Подключить Дымку →" linking to bot

### 4. `plugins.html` (lines ~67-73) and `_layouts/plugin.html` (lines ~49-55)
- URL → `https://t.me/dymkavpn_bot`
- Text: "надёжный VPN-сервис" → "VPN-сервис Дымка"
- Features update: "✓ Быстрое подключение" → "✓ Госуслуги и Авито работают", "✓ Безопасность" → "✓ Бесплатно"

### 5. `guides.html` (lines ~428, 467, 481)
- All `getblancvpn.deals/?ref=yahor` → `https://t.me/dymkavpn_bot`
- Text references updated to mention Дымка

### 6. `faq.html` (line ~636)
- URL → `https://t.me/dymkavpn_bot`

## Out of Scope

- Web landing page for Dymka (deferred — chicken-and-egg problem with Telegram blocked in RF)
- Changes to VPN infrastructure or bot code
