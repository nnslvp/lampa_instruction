(function () {
  var COUNTER = 97955420;

  function reachGoal(goal, params) {
    if (typeof window.ym === 'function') {
      if (params) {
        window.ym(COUNTER, 'reachGoal', goal, params);
      } else {
        window.ym(COUNTER, 'reachGoal', goal);
      }
    }
    window.dataLayer = window.dataLayer || [];
    var event = { event: goal };
    if (params) {
      for (var key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          event[key] = params[key];
        }
      }
    }
    window.dataLayer.push(event);
  }

  // Fallback: вытащить sub1/sub2 из href, если data-атрибуты не отрендерились
  function subFromHref(href, name) {
    var match = href.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return match ? decodeURIComponent(match[1]) : 'unknown';
  }

  document.addEventListener('click', function (e) {
    var el = e.target;
    var link = el && el.closest ? el.closest('a[href]') : null;
    if (!link) return;

    var href = link.getAttribute('href') || '';

    if (href.indexOf('getblancvpn.deals') !== -1) {
      reachGoal('blancvpn_click', {
        page: link.getAttribute('data-vpn-page') || subFromHref(href, 'sub1'),
        pos: link.getAttribute('data-vpn-pos') || subFromHref(href, 'sub2')
      });
    } else if (href.indexOf('t.me/+0iNJ8wLZretiOThi') !== -1) {
      reachGoal('lampa_chat_open');
    }
  });
})();
