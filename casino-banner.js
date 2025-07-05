// Управление полноэкранным поп-апом казино
// Работает на всех страницах, где есть блок с id="casino-ad"
// Показывается один раз, пока пользователь не скроет его (флаг в localStorage)

document.addEventListener('DOMContentLoaded', () => {
  const casinoAd = document.getElementById('casino-ad');
  const hideAdsBtn = document.getElementById('hide-ads-btn');
  const showAdsSection = document.getElementById('show-ads-section');
  const showAdsBtn = document.getElementById('show-ads-btn');

  // Если нет хотя бы одного из элементов – выходим
  if (!casinoAd || !hideAdsBtn || !showAdsSection || !showAdsBtn) return;

  /* ----------------------------------------
   * 1. Превращаем секцию в полноэкранный поп-ап
   * -------------------------------------- */
  const overlayStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    borderRadius: '0',
    padding: '20px',
    boxSizing: 'border-box',
    background: 'rgba(0, 0, 0, 0.92)',
    overflowY: 'auto',
    zIndex: '9999',
    opacity: '0', // плавное появление
    transition: 'opacity 0.4s ease'
  };

  Object.assign(casinoAd.style, overlayStyles);

  // Кнопки управления – фиксируем в правом верхнем углу
  const adControls = casinoAd.querySelector('.ad-controls');
  if (adControls) {
    adControls.style.position = 'absolute';
    adControls.style.top = '15px';
    adControls.style.right = '15px';
    adControls.style.margin = '0';
  }

  /* ----------------------------------------
   * 2. Логика показа / скрытия
   * -------------------------------------- */
  const STORAGE_KEY = 'casinoPopupHidden';
  const POPUP_DELAY_MS = 5000; // 10 секунд задержки перед показом
  const isAdHidden = localStorage.getItem(STORAGE_KEY) === 'true';

  const showPopup = () => {
    casinoAd.style.display = 'flex';
    // Отложенный setTimeout даёт браузеру время применить display: flex,
    // чтобы transition сработал корректно
    requestAnimationFrame(() => {
      casinoAd.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    });
  };

  const hidePopup = () => {
    casinoAd.style.opacity = '0';
    // Дожидаемся окончания анимации, затем скрываем блок из потока
    setTimeout(() => {
      casinoAd.style.display = 'none';
      document.body.style.overflow = '';
    }, 400);
  };

  // Начальный рендер
  if (isAdHidden) {
    casinoAd.style.display = 'none';
    showAdsSection.style.display = 'block';
  } else {
    showAdsSection.style.display = 'none';
    // Показываем поп-ап с задержкой, чтобы не отпугнуть пользователя
    setTimeout(showPopup, POPUP_DELAY_MS);
  }

  /* ----------------------------------------
   * 3. Обработчики кнопок
   * -------------------------------------- */
  hideAdsBtn.addEventListener('click', () => {
    hidePopup();
    showAdsSection.style.display = 'block';
    localStorage.setItem(STORAGE_KEY, 'true');
  });

  showAdsBtn.addEventListener('click', () => {
    showPopup();
    showAdsSection.style.display = 'none';
    localStorage.removeItem(STORAGE_KEY);
  });

  /* ----------------------------------------
   * Список баннеров, собранных со всех страниц
   * -------------------------------------- */
  const BANNERS = [
    {
      href: 'https://1wilib.life/casino/list?open=register&p=lx4t',
      img: 'https://1win-partners.com/promo-files-uploads/196b505b1a71d41dc419430aa23345511533d7436e5b1cace2.jpg',
      alt: '1win Casino - Лучшие слоты и бонусы для игроков'
    },
    {
      href: 'https://1wilib.life/casino/list?open=register&p=lx4t',
      img: 'https://1win-partners.com/promo-files-uploads/25f425a26f3b4b372ef56280f65bd3105354511ffb8d94bc4c.jpg',
      alt: '1win Casino - Игровые автоматы и бонусные предложения'
    },
    {
      href: 'https://1wilib.life/casino/list?open=register&p=lx4t',
      img: 'https://1win-partners.com/promo-files-uploads/8c0c00aa72a37ce52c70e6f100bf587fbb6da8e58805f27abe.jpg',
      alt: '1win Casino - Лучшие игровые слоты и казино игры'
    },
    {
      href: 'https://1wilib.life/casino/list?open=register&p=lx4t',
      img: 'https://1win-partners.com/promo-files-uploads/cb494e7008a1d85bd016537c9e21dcf6d4051367a20e0ebbe7.jpg',
      alt: '1win Casino - Популярные слоты и игровые автоматы'
    }
  ];

  // Выбираем случайный баннер
  const randomBanner = BANNERS[Math.floor(Math.random() * BANNERS.length)];

  // Обновляем содержимое существующего баннерного блока
  const adAnchor = casinoAd.querySelector('a[href]');
  const adImage = adAnchor ? adAnchor.querySelector('img') : null;

  if (adAnchor) adAnchor.href = randomBanner.href;
  if (adImage) {
    adImage.src = randomBanner.img;
    adImage.alt = randomBanner.alt;
  }

  // Сохраняем ссылку для клика по фону
  const adUrl = randomBanner.href;

  /* ----------------------------------------
   * 4. Клик по фону ведёт на рекламную ссылку
   * -------------------------------------- */
  casinoAd.addEventListener('click', (event) => {
    // Если клик был по кнопке "Скрыть рекламу" – ничего не делаем
    if (hideAdsBtn.contains(event.target)) return;

    // Если клик был по внутренней ссылке/картинке – её дефолтное действие оставляем
    if (event.target.closest('a')) return;

    // Иначе открываем рекламную ссылку в новой вкладке
    if (adUrl) window.open(adUrl, '_blank');
  });
}); 