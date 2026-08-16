#!/usr/bin/env ruby
# frozen_string_literal: true

# Гард консистентности VPN-CTA. Сканирует собранный сайт и проверяет:
#   1. на каждой странице плагина есть ссылка на партнёрку BlancVPN;
#   2. в сборке не осталось следов отключённого сервиса «Дымка»;
#   3. каждая партнёрская ссылка несёт data-vpn-page/data-vpn-pos и
#      rel="nofollow sponsored noopener" (атрибуция и SEO-гигиена);
#   4. на страницах плагинов slug атрибуции начинается с "plugins-".
# Запуск: bundle exec jekyll build && ruby scripts/check_cta.rb

SITE = File.expand_path("../_site", __dir__)
LINK_RE = %r{https://getblancvpn\.deals/\?ref=yahor}
DEAD_RE = %r{dymka|t\.me/dymka_app_bot|proxy\.dymka\.app}i
ANCHOR_RE = %r{<a\b[^>]*getblancvpn\.deals[^>]*>}

abort "No _site/ — run `bundle exec jekyll build` first" unless Dir.exist?(SITE)

errors = []
pages = Dir.glob(File.join(SITE, "**", "*.html"))

pages.each do |file|
  rel = file.delete_prefix("#{SITE}/")
  html = File.read(file, encoding: "UTF-8")

  # Мёртвые ссылки на «Дымку» не должны попадать в сборку ни на одной странице.
  errors << "#{rel}: dead Dymka reference" if html.match?(DEAD_RE)

  # Каждая партнёрская ссылка обязана нести атрибуцию и корректный rel.
  html.scan(ANCHOR_RE).each do |anchor|
    errors << "#{rel}: partner link without data-vpn-page" unless anchor.include?("data-vpn-page=")
    errors << "#{rel}: partner link without data-vpn-pos" unless anchor.include?("data-vpn-pos=")
    errors << "#{rel}: partner link without rel=\"nofollow sponsored noopener\"" unless anchor.include?('rel="nofollow sponsored noopener"')
    errors << "#{rel}: partner link without sub1=" unless anchor.include?("sub1=")
  end
end

# Каждая страница плагина обязана вести на VPN (каталог /plugins/ — не деталь).
Dir.glob(File.join(SITE, "plugins", "*.html")).each do |file|
  rel = file.delete_prefix("#{SITE}/")
  next if rel == "plugins/index.html"
  html = File.read(file, encoding: "UTF-8")
  errors << "#{rel}: no VPN CTA on plugin page" unless html.match?(LINK_RE)
  html.scan(ANCHOR_RE).each do |anchor|
    slug = anchor[/data-vpn-page="([^"]+)"/, 1]
    errors << "#{rel}: plugin page slug #{slug.inspect} lacks plugins- prefix" unless slug&.start_with?("plugins-")
  end
end

if errors.empty?
  puts "CTA check passed: #{pages.size} pages scanned"
else
  warn "CTA check FAILED (#{errors.uniq.size}):"
  errors.uniq.each { |e| warn "  - #{e}" }
  exit 1
end
