#!/usr/bin/env ruby
# frozen_string_literal: true

# Гард консистентности VPN-CTA. Сканирует собранный сайт и проверяет:
#   1. на каждой странице плагина есть ссылка на партнёрку BlancVPN;
#   2. в сборке не осталось следов отключённого сервиса «Дымка».
# Запуск: bundle exec jekyll build && ruby scripts/check_cta.rb

SITE = File.expand_path("../_site", __dir__)
LINK_RE = %r{https://getblancvpn\.deals/\?ref=yahor}
DEAD_RE = %r{dymka|t\.me/dymka_app_bot|proxy\.dymka\.app}i

abort "No _site/ — run `bundle exec jekyll build` first" unless Dir.exist?(SITE)

errors = []
pages = Dir.glob(File.join(SITE, "**", "*.html"))

# Мёртвые ссылки на «Дымку» не должны попадать в сборку ни на одной странице.
pages.each do |file|
  rel = file.delete_prefix("#{SITE}/")
  errors << "#{rel}: dead Dymka reference" if File.read(file, encoding: "UTF-8").match?(DEAD_RE)
end

# Каждая страница плагина обязана вести на VPN (каталог /plugins/ — не деталь).
Dir.glob(File.join(SITE, "plugins", "*.html")).each do |file|
  rel = file.delete_prefix("#{SITE}/")
  next if rel == "plugins/index.html"
  errors << "#{rel}: no VPN CTA on plugin page" unless File.read(file, encoding: "UTF-8").match?(LINK_RE)
end

if errors.empty?
  puts "CTA check passed: #{pages.size} pages scanned"
else
  warn "CTA check FAILED (#{errors.size}):"
  errors.each { |e| warn "  - #{e}" }
  exit 1
end
