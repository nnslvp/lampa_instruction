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

    if (href.indexOf('getblancvpn.deals') !== -1) {
      reachGoal('blancvpn_click');
    } else if (href.indexOf('t.me/+0iNJ8wLZretiOThi') !== -1) {
      reachGoal('lampa_chat_open');
    }
  });
})();
