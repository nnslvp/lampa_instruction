#!/usr/bin/env ruby
# frozen_string_literal: true

# Гард консистентности бот-CTA (статический аналог cta.spec.ts с dymkavpn-site).
# Сканирует собранный сайт и проверяет:
#   1. каждая ссылка в бота размечена ?start=lampa_<...> правильного формата;
#   2. payload ?start= не длиннее 64 символов (лимит Telegram — иначе обрежется);
#   3. на каждой странице плагина есть хотя бы одна ссылка в бота.
# Запуск: bundle exec jekyll build && ruby scripts/check_cta.rb

SITE = File.expand_path("../_site", __dir__)
LINK_RE = %r{https://t\.me/dymka_app_bot\?start=[^"'\s]+}
MARKER_RE = %r{\Ahttps://t\.me/dymka_app_bot\?start=lampa_[a-z0-9_-]+\z}
START_LIMIT = 64

abort "No _site/ — run `bundle exec jekyll build` first" unless Dir.exist?(SITE)

errors = []
pages = Dir.glob(File.join(SITE, "**", "*.html"))

pages.each do |file|
  rel = file.delete_prefix("#{SITE}/")
  File.read(file, encoding: "UTF-8").scan(LINK_RE).each do |href|
    errors << "#{rel}: bad marker format → #{href}" unless href.match?(MARKER_RE)
    payload = href.split("?start=", 2).last
    if payload.length > START_LIMIT
      errors << "#{rel}: ?start= payload is #{payload.length}>#{START_LIMIT} chars → #{payload}"
    end
  end
end

# Каждая страница плагина обязана вести в бота (каталог /plugins/ — не деталь).
Dir.glob(File.join(SITE, "plugins", "*.html")).each do |file|
  rel = file.delete_prefix("#{SITE}/")
  next if rel == "plugins/index.html"
  errors << "#{rel}: no bot CTA on plugin page" unless File.read(file, encoding: "UTF-8").match?(LINK_RE)
end

if errors.empty?
  puts "CTA check passed: #{pages.size} pages scanned"
else
  warn "CTA check FAILED (#{errors.size}):"
  errors.each { |e| warn "  - #{e}" }
  exit 1
end
