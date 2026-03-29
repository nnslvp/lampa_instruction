# Lampa Guide — Full Redesign

## Context

Lampa Guide — Jekyll-сайт с инструкциями по настройке медиаплеера Lampa. Аудитория: 30+ россияне, настраивают Lampa на телевизор, читают инструкцию с телефона. Не гики — нужна максимальная простота и доверие.

Текущее состояние: тёмная тема, 2200 строк CSS с дублированием, Milligram framework, Roboto шрифт, Yandex RTB реклама, VK OpenAPI — типичный перегруженный "AI slop" дизайн.

## Design Direction

**Editorial Paper** — светлый, бумажный, утилитарный. Как хорошая инструкция: красиво, но главное — понятно.

## Design System

### Typography

- **Заголовки:** Literata (Google Fonts), weight 700
- **Текст:** DM Sans (Google Fonts), weights 400/500/600
- Загрузка: `display=swap`, только нужные weights

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#f5f0e8` | Основной фон (бумага) |
| `--bg-surface` | `#fffbf5` | Шапка, карточки, поверхности |
| `--bg-elevated` | `#ffffff` | Модалки, выделенные блоки |
| `--text` | `#1a1a1a` | Заголовки, основной текст |
| `--text-secondary` | `#555555` | Описания, параграфы |
| `--text-muted` | `#999999` | Подсказки, мета-информация |
| `--accent` | `#b45309` | Кнопки, ссылки, CTA |
| `--accent-hover` | `#92400e` | Hover состояния акцента |
| `--accent-light` | `#fef3c7` | Фон уведомлений, подсветка |
| `--border` | `#e8e0d0` | Границы карточек, разделители |
| `--border-light` | `#f0ebe3` | Тонкие разделители |

### Spacing

Базовая единица 8px. Используем rem:
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)

### Border Radius

- `--radius-sm`: 4px
- `--radius-md`: 6px
- `--radius-lg`: 10px

## Navigation

6 пунктов в шапке:

1. Главная (`/`)
2. FAQ (`/faq`)
3. Плагины (`/plugins`)
4. Руководства (`/guides`) — страница Стабильность вливается сюда
5. Контакты (`/contacts`)
6. **Telegram** — акцентная кнопка (amber), ведёт на `https://t.me/+0iNJ8wLZretiOThi`

VPN Дымка убирается из навигации, остаётся в CTA-блоках на страницах.

Мобильная навигация: бургер-меню, те же 6 пунктов.

## Page Structure

### Layout (default.html)

```
header (sticky)
  nav: logo | links | telegram-btn
main.container
  {{ content }}
footer
  links: privacy, terms, contacts
  copyright
```

**Удалить из layout:**
- Yandex RTB блоки (3 шт)
- VK OpenAPI script
- Milligram CSS подключение
- Normalize.css подключение

**Оставить:**
- GTM (noscript + script)
- Jekyll SEO tag
- Favicon/manifest ссылки

### Страницы (контент сохраняется as-is)

1. **index.html** — hero, VPN CTA, Telegram CTA, Proxy CTA, описание, шаги, поддержка
2. **faq.html** — hero, FAQ items с schema.org разметкой
3. **plugins.html** — hero, категории, каталог плагинов из коллекции `_plugins/`
4. **guides.html** — hero, руководства + содержимое stability.html
5. **contacts.html** — контактная информация
6. **privacy.html** / **terms.html** — юридические страницы
7. **stability.html** — остаётся как отдельная страница, убирается только из навигации (на неё ведут прямые ссылки из index.html)

### Компоненты (CSS-классы)

- `.hero` — секция-герой (заголовок + описание + теги)
- `.card` — универсальная карточка (плагины, FAQ, поддержка, шаги)
- `.step` — пошаговая карточка с номером
- `.cta` — промо-блок (VPN, Telegram, Proxy)
- `.nav-page` — внутренняя навигация по странице
- `.btn` / `.btn-outline` — кнопки
- `.badge` — статус плагина (Активен/Неактивен)
- `.notice` — уведомление/предупреждение
- `.code` — inline code блок
- `.grid-2` / `.grid-3` / `.grid-4` — grid-раскладки

## Code Simplification

### CSS Target: ~400-500 строк (с 2200)

Структура файла:
1. Reset (~20 строк)
2. CSS Variables (~30 строк)
3. Base typography (~30 строк)
4. Layout: header, main, footer (~60 строк)
5. Navigation + burger (~60 строк)
6. Components: card, step, cta, hero, badge, notice (~150 строк)
7. Utilities: grid, spacing, buttons (~50 строк)
8. Responsive (~50 строк)

### HTML Simplification

- Убрать все inline `style=""` атрибуты
- Убрать лишние wrapper-div'ы
- Убрать emoji из CSS-классов (оставить только в контенте)
- Единообразная структура карточек

### JS Simplification

`navigation.js` — упростить бургер-логику. Текущий код избыточен (40+ строк на простой toggle). Целевой: ~15 строк.

## What Does NOT Change

- Весь текстовый контент (ни слова не меняется)
- Все URL: внутренние (`/faq`, `/plugins`, etc.) и внешние (GitHub, Telegram, VPN)
- Все якоря (`#step1`, `#basic`, `#technical`, etc.)
- Schema.org разметка (HowTo, FAQPage, Question/Answer)
- Jekyll: `_config.yml`, front matter, Liquid templates, коллекция `_plugins/`
- GTM tracking
- Файлы: `_redirects`, `CNAME`, `robots.txt`, `icons/`
- Индивидуальные страницы плагинов (`_plugins/*.html`)
