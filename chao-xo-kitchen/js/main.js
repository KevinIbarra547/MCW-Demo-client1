// Page behavior. Runs after js/render.js has built the page from data/site.js.
(function () {
  var S = window.SITE;
  if (!S) return;

  // Menu tabs (click, or arrow keys when a tab has focus)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next); next.focus();
    });
  });

  // Open-now badge and today's row, in the restaurant's time zone.
  // No badge on days whose hours are unknown.
  (function () {
    var keys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var parts = new Intl.DateTimeFormat('en-US', { timeZone: S.business.timeZone, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var part = function (type) { return parts.filter(function (p) { return p.type === type; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(part('weekday'));
    var now = (parseInt(part('hour'), 10) % 24) * 60 + parseInt(part('minute'), 10);
    var mins = function (hhmm) { var p = hhmm.split(':'); return +p[0] * 60 + +p[1]; };
    var label = function (hhmm) {
      var h = +hhmm.split(':')[0], m = +hhmm.split(':')[1];
      return (h % 12 || 12) + (m ? ':' + (m < 10 ? '0' : '') + m : '') + (h >= 12 ? ' PM' : ' AM');
    };

    var row = document.querySelector('#hours li[data-day="' + day + '"]');
    if (row) { row.classList.add('today'); row.firstElementChild.textContent += ' (today)'; }

    var h = S.hours[keys[day]];
    var bar = document.getElementById('infobar-hours');
    if (h != null) {
      bar.textContent = '🕚 ' + (h === 'closed' ? 'Closed today' : 'Open today ' + label(h.open) + ' – ' + label(h.close));
      bar.hidden = false;
    }
    if (h == null) return;
    var status = document.getElementById('status'), text = document.getElementById('status-text');
    if (h !== 'closed' && now >= mins(h.open) && now < mins(h.close)) {
      text.textContent = 'Open now · closes ' + label(h.close);
    } else {
      status.classList.add('closed');
      text.textContent = h !== 'closed' && now < mins(h.open) ? 'Closed · opens ' + label(h.open) : 'Closed now';
    }
    status.hidden = false;
  })();

  // Button analytics for the team hub. Nothing is sent until siteKey and hubUrl are set.
  var a = S.analytics || {};
  if (a.siteKey && a.hubUrl && navigator.sendBeacon) {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-track]');
      if (!el) return;
      navigator.sendBeacon(a.hubUrl + '/api/events', JSON.stringify({ site_key: a.siteKey, button: el.getAttribute('data-track') }));
    });
  }

  // Cloudflare Web Analytics, only once a token is set.
  if (a.cfToken) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: a.cfToken }));
    document.body.appendChild(s);
  }
})();
