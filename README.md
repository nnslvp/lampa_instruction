# Lampa Guide — lampa.nnslvp.io

Гайд-каталог по настройке медиаплеера [Lampa](https://lampa.nnslvp.io): 115 проверенных плагинов с инструкциями по установке, руководства для Smart TV (LG webOS, Samsung Tizen), Android TV и iOS, FAQ и решения типовых проблем.

**Сайт: [lampa.nnslvp.io](https://lampa.nnslvp.io)**

Основные разделы:

- [Каталог плагинов](https://lampa.nnslvp.io/plugins) — онлайн-просмотр, торренты, IPTV, интерфейс, интеграции
- [Руководства по настройке](https://lampa.nnslvp.io/guides) — пошаговая установка на всех устройствах
- [FAQ](https://lampa.nnslvp.io/faq) — частые вопросы
- [Стабильная работа](https://lampa.nnslvp.io/stability) — обход блокировок источников

## SEO и индексация

Состояние на 17.08.2026: сайт верифицирован в Яндекс.Вебмастере и Google Search Console
(domain property); sitemap переотправлен в GSC 17.08.2026, индексация главной и /plugins
запрошена вручную.

Чек-лист поддержки:

- После публикации новых страниц — запросить их индексацию в GSC (Проверка URL → Request indexing).
- Раз в 2–4 недели смотреть GSC → Индексирование → Страницы: число проиндексированных должно расти с нуля.
- Ежемесячно обновлять `content_month` в `_config.yml` (страницы /torrserver-public и /working-plugins носят месяц в h1) и прогонять `./check_plugins.sh` для сверки статусов карточек.
- Клики по партнёрским ссылкам смотреть в Метрике: цель `blancvpn_click`, параметры page/pos.

## Стек

Статический сайт на Jekyll (GitHub Pages): коллекция `_plugins/` с карточками плагинов, layouts в `_layouts/`, конфигурация в `_config.yml`.

Локальная сборка:

```bash
bundle install
bundle exec jekyll serve
```
