// Управление баннером казино
// Работает на всех страницах, где есть баннер с id="casino-ad"
document.addEventListener('DOMContentLoaded', function() {
  const casinoAd = document.getElementById('casino-ad');
  const hideAdsBtn = document.getElementById('hide-ads-btn');
  const showAdsSection = document.getElementById('show-ads-section');
  const showAdsBtn = document.getElementById('show-ads-btn');

  if (!casinoAd || !hideAdsBtn || !showAdsSection || !showAdsBtn) return;

  // Проверяем, скрыт ли баннер в localStorage
  const isAdHidden = localStorage.getItem('casinoAdHidden') === 'true';

  if (isAdHidden) {
    casinoAd.style.display = 'none';
    showAdsSection.style.display = 'block';
  }

  // Обработчик скрытия баннера
  hideAdsBtn.addEventListener('click', function() {
    casinoAd.style.display = 'none';
    showAdsSection.style.display = 'block';
    localStorage.setItem('casinoAdHidden', 'true');
  });

  // Обработчик показа баннера
  showAdsBtn.addEventListener('click', function() {
    casinoAd.style.display = 'block';
    showAdsSection.style.display = 'none';
    localStorage.removeItem('casinoAdHidden');
  });

  // Анимация появления баннера при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isAdHidden) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(casinoAd);
}); 