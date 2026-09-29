// Menu tabs
(function () {
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
})();

// Open-now badge and today's hours, in San Diego time. Sunday hours are unconfirmed, so no badge on Sundays.
(function () {
  var hours = { 1: [11, 20], 2: [11, 20], 3: null, 4: [11, 20], 5: [11, 20], 6: [11, 20] };
  var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
  var get = function (type) { return parts.filter(function (p) { return p.type === type; })[0].value; };
  var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  var now = (parseInt(get('hour'), 10) % 24) + parseInt(get('minute'), 10) / 60;
  var row = document.querySelector('#hours li[data-day="' + day + '"]');
  if (row) { row.classList.add('today'); row.firstElementChild.textContent += ' (today)'; }
  if (!(day in hours)) return;
  var status = document.getElementById('status'), text = document.getElementById('status-text');
  var h = hours[day];
  if (h && now >= h[0] && now < h[1]) {
    text.textContent = 'Open now · closes 8 PM';
  } else {
    status.classList.add('closed');
    text.textContent = h && now < h[0] ? 'Closed · opens 11 AM' : 'Closed now';
  }
  status.hidden = false;
})();

// Button analytics for the team hub. Placeholders stay until launch; nothing is sent while they're unset.
(function () {
  var SITE_KEY = '[SITE_KEY]', HUB_URL = '[HUB_URL]';
  if (SITE_KEY.charAt(0) === '[' || HUB_URL.charAt(0) === '[' || !navigator.sendBeacon) return;
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;
    navigator.sendBeacon(HUB_URL + '/api/events', JSON.stringify({ site_key: SITE_KEY, button: el.getAttribute('data-track') }));
  });
})();
