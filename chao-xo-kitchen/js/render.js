// Builds the page from window.SITE (data/site.js). Nothing here is specific to one restaurant.
(function () {
  var S = window.SITE;
  if (!S) return;
  var b = S.business;

  var DAYS = [['sun', 'Sunday'], ['mon', 'Monday'], ['tue', 'Tuesday'], ['wed', 'Wednesday'],
    ['thu', 'Thursday'], ['fri', 'Friday'], ['sat', 'Saturday']];

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function get(path) { return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, S); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function placeholder(text) { return el('span', 'placeholder', text); }
  // "**bold**" -> <strong>, everything else as plain text (no raw HTML from data).
  function richText(target, text) {
    text.split(/(\*\*[^*]+\*\*)/).forEach(function (part) {
      if (/^\*\*.+\*\*$/.test(part)) target.appendChild(el('strong', null, part.slice(2, -2)));
      else if (part) target.appendChild(document.createTextNode(part));
    });
  }
  function fmtTime(hhmm) {
    var p = hhmm.split(':'), h = +p[0], m = +p[1];
    var suffix = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return h + (m ? ':' + (m < 10 ? '0' : '') + m : '') + ' ' + suffix;
  }
  function fmtPrice(n) { return '$' + (n % 1 ? n.toFixed(2) : n.toFixed(0)); }

  var fullAddress = [b.address.street, b.address.city + ', ' + b.address.region + ' ' + b.address.postalCode].join(', ');
  var q = encodeURIComponent(fullAddress);
  var directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + q;

  // Simple text bindings
  $$('[data-text]').forEach(function (e) { e.textContent = get(e.getAttribute('data-text')) || ''; });

  // Phone and directions links
  $$('[data-tel]').forEach(function (a) {
    a.href = 'tel:' + b.phone.tel;
    if (a.hasAttribute('data-tel-label')) a.textContent = a.getAttribute('data-tel-label') + b.phone.display;
    else if (!a.textContent.trim()) a.textContent = b.phone.display;
  });
  $$('[data-directions]').forEach(function (a) { a.href = directionsUrl; });

  // Hero
  var heroImg = $('#hero-img');
  heroImg.src = S.hero.image;
  heroImg.alt = S.hero.alt;
  richText($('#hero-sub'), S.hero.subhead);
  if (S.ordering.orderUrl) $('#order-btn').href = S.ordering.orderUrl;
  if (S.ordering.apps && S.ordering.apps.length) {
    var also = $('#also');
    S.ordering.apps.forEach(function (app) {
      var a = el('a', null, app.name);
      a.href = app.url;
      a.setAttribute('data-track', 'order');
      also.appendChild(a);
    });
    also.hidden = false;
  }

  // Menu: one tab per category. Items with photos become cards; the rest become rows.
  var tabs = $('#menu-tabs'), panels = $('#menu-panels');
  S.menu.categories.forEach(function (cat, i) {
    var id = 'cat-' + i;
    var tab = el('button', 'tab', cat.name);
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.id = 'tab-' + id;
    tab.setAttribute('aria-controls', 'panel-' + id);
    tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tab.tabIndex = i === 0 ? 0 : -1;
    tabs.appendChild(tab);

    var panel = el('div', 'menu-panel');
    panel.id = 'panel-' + id;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.hidden = i !== 0;

    var withPhoto = cat.items.filter(function (it) { return it.image; });
    var rows = cat.items.filter(function (it) { return !it.image; });

    if (withPhoto.length) {
      var grid = el('div', 'grid');
      withPhoto.forEach(function (it) {
        var card = el('article', 'dish');
        var img = el('img');
        img.src = it.image; img.alt = it.alt || ''; img.loading = 'lazy';
        card.appendChild(img);
        var body = el('div');
        body.appendChild(itemHead(it, 'h3'));
        body.appendChild(itemDesc(it));
        card.appendChild(body);
        grid.appendChild(card);
      });
      panel.appendChild(grid);
    }
    if (rows.length) {
      var list = el('ul', 'menu-list');
      rows.forEach(function (it) {
        var li = el('li');
        li.appendChild(itemHead(it, 'h3'));
        var d = itemDesc(it);
        if (d.childNodes.length) li.appendChild(d);
        list.appendChild(li);
      });
      panel.appendChild(list);
    }
    panels.appendChild(panel);
  });

  function itemHead(it, tag) {
    var head = el('div', 'item-head');
    head.appendChild(el(tag, null, it.name));
    if (it.price != null) head.appendChild(el('span', 'price', fmtPrice(it.price)));
    else if (S.demo && !it.hidePrice) head.appendChild(placeholder('[price]'));
    return head;
  }
  function itemDesc(it) {
    var p = el('p');
    if (it.description) p.textContent = it.description;
    else if (it.todo) p.appendChild(placeholder(it.todo));
    return p;
  }

  var note = $('#menu-note');
  if (S.menu.fullMenuUrl) {
    note.appendChild(document.createTextNode('Order ahead for pickup or delivery. '));
    var full = el('a', null, 'See the full menu →');
    full.href = S.menu.fullMenuUrl;
    full.setAttribute('data-track', 'menu');
    note.appendChild(full);
  } else {
    note.hidden = true;
  }

  // Reviews
  if (S.rating) {
    var r = $('#rating');
    r.appendChild(document.createTextNode(S.rating.source + ' '));
    var star = el('span', null, '★'); star.setAttribute('aria-hidden', 'true');
    r.appendChild(star);
    r.appendChild(document.createTextNode(' ' + S.rating.value + ' · ' + S.rating.count + ' reviews'));
  }
  var reviewList = $('#review-list');
  S.reviews.forEach(function (rv) {
    var fig = el('figure', 'review');
    var stars = el('div', 'stars', '★★★★★'.slice(0, rv.stars));
    stars.setAttribute('aria-label', rv.stars + ' out of 5 stars');
    fig.appendChild(stars);
    fig.appendChild(el('blockquote', null, '“' + rv.text + '”'));
    var cap = el('figcaption', null, rv.name + ' ');
    cap.appendChild(el('span', null, '· ' + rv.source + ' review'));
    fig.appendChild(cap);
    reviewList.appendChild(fig);
  });

  // Hours (Monday first), address, map
  var hoursList = $('#hours');
  [1, 2, 3, 4, 5, 6, 0].forEach(function (d) {
    var h = S.hours[DAYS[d][0]];
    var li = el('li');
    li.setAttribute('data-day', d);
    li.appendChild(el('span', null, DAYS[d][1]));
    if (h === 'closed') li.appendChild(el('span', null, 'Closed'));
    else if (h) li.appendChild(el('span', null, fmtTime(h.open) + ' – ' + fmtTime(h.close)));
    else li.appendChild(placeholder('[hours]'));
    hoursList.appendChild(li);
  });
  var addr = $('#addr');
  addr.appendChild(document.createTextNode(b.address.street));
  addr.appendChild(el('br'));
  addr.appendChild(document.createTextNode(b.address.city + ', ' + b.address.region + ' ' + b.address.postalCode));
  $('#foot-addr').textContent = fullAddress;
  var map = $('#map');
  map.title = 'Map to ' + b.name + ', ' + b.address.street;
  map.src = 'https://www.google.com/maps?q=' + q + '&output=embed';

  // Story and catering
  var storyImg = $('#story-img');
  storyImg.src = S.story.image; storyImg.alt = S.story.alt;
  var title = $('#story-title');
  if (S.story.title) title.textContent = S.story.title;
  else title.appendChild(placeholder('[Owner or family name]'));
  var storyText = $('#story-text');
  (S.story.paragraphs && S.story.paragraphs.length ? S.story.paragraphs : [null]).forEach(function (t) {
    var p = el('p');
    if (t) p.textContent = t;
    else p.appendChild(placeholder('[Their story in their own words]'));
    storyText.appendChild(p);
  });
  var tags = $('#story-tags');
  (S.story.tags || []).forEach(function (t) { tags.appendChild(el('span', 'tag', t)); });
  if (S.catering && S.catering.text) {
    var c = $('#catering');
    c.textContent = S.catering.text;
    c.hidden = false;
  }

  if (S.demo) $('#demo-line').hidden = false;

  // Structured data for search engines, built only from confirmed facts.
  var open = {};
  DAYS.forEach(function (d) {
    var h = S.hours[d[0]];
    if (h && h !== 'closed') {
      var key = h.open + '-' + h.close;
      (open[key] = open[key] || []).push(d[1]);
    }
  });
  var ld = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: b.name,
    servesCuisine: b.cuisine,
    priceRange: b.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.street,
      addressLocality: b.address.city,
      addressRegion: b.address.region,
      postalCode: b.address.postalCode,
      addressCountry: 'US'
    },
    openingHoursSpecification: Object.keys(open).map(function (k) {
      return { '@type': 'OpeningHoursSpecification', dayOfWeek: open[k], opens: k.split('-')[0], closes: k.split('-')[1] };
    })
  };
  if (!S.demo) ld.telephone = b.phone.tel;
  var s = el('script');
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);
})();
