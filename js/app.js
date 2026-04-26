(function () {
  'use strict';

  var sections = [
    'nav', 'hero', 'numbers', 'companies',
    'services', 'work', 'archive', 'contact', 'footer'
  ];

  var promises = sections.map(function (name) {
    return fetch('sections/' + name + '.html')
      .then(function (res) {
        if (!res.ok) { throw new Error('Failed to load section: ' + name); }
        return res.text();
      })
      .then(function (html) {
        document.getElementById('section-' + name).innerHTML = html;
      });
  });

  Promise.all(promises).then(function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  });
}());
