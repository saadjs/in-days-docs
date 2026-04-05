// Mark current page as active in navigation
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.site-nav__links a');

  links.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
