// Бургер меню для мобильных устройств
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav-list');

  if (navToggle && nav && navList) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      
      // Анимация иконки бургера
      const span = navToggle.querySelector('span');
      if (span) {
        span.style.transform = nav.classList.contains('open') ? 'rotate(45deg)' : 'rotate(0deg)';
        span.style.background = nav.classList.contains('open') ? 'transparent' : 'var(--text-primary)';
        
        // Анимация линий бургера
        const before = span.style.getPropertyValue('--before-transform') || 'rotate(0deg) translate(0, 0)';
        const after = span.style.getPropertyValue('--after-transform') || 'rotate(0deg) translate(0, 0)';
        
        if (nav.classList.contains('open')) {
          span.style.setProperty('--before-transform', 'rotate(45deg) translate(5.5px, 5.5px)');
          span.style.setProperty('--after-transform', 'rotate(-45deg) translate(5.5px, -5.5px)');
        } else {
          span.style.setProperty('--before-transform', 'rotate(0deg) translate(0, 0)');
          span.style.setProperty('--after-transform', 'rotate(0deg) translate(0, 0)');
        }
      }
    });

    // Закрытие меню при клике на ссылку
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        const span = navToggle.querySelector('span');
        if (span) {
          span.style.transform = 'rotate(0deg)';
          span.style.background = 'var(--text-primary)';
          span.style.setProperty('--before-transform', 'rotate(0deg) translate(0, 0)');
          span.style.setProperty('--after-transform', 'rotate(0deg) translate(0, 0)');
        }
      });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        const span = navToggle.querySelector('span');
        if (span) {
          span.style.transform = 'rotate(0deg)';
          span.style.background = 'var(--text-primary)';
          span.style.setProperty('--before-transform', 'rotate(0deg) translate(0, 0)');
          span.style.setProperty('--after-transform', 'rotate(0deg) translate(0, 0)');
        }
      }
    });
  }
}); 