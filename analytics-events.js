(function () {
  var COUNTER = 97955420;

  function reachGoal(goal) {
    if (typeof window.ym === 'function') {
      window.ym(COUNTER, 'reachGoal', goal);
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: goal });
  }

  document.addEventListener('click', function (e) {
    var el = e.target;
    var link = el && el.closest ? el.closest('a[href]') : null;
    if (!link) return;

    var href = link.getAttribute('href') || '';

    if (href.indexOf('t.me/dymka_app_bot') !== -1) {
      reachGoal('dymka_bot_open');
    } else if (href.indexOf('tg://proxy') === 0) {
      reachGoal('dymka_proxy_connect');
    } else if (href.indexOf('t.me/+0iNJ8wLZretiOThi') !== -1) {
      reachGoal('lampa_chat_open');
    }
  });
})();
