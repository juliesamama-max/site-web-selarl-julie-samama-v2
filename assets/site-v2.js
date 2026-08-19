(() => {
  const brand = document.querySelector('.brand');
  if (brand && !brand.querySelector('img')) {
    const fallback = brand.textContent.trim() || 'SELARL Julie Samama';
    const img = document.createElement('img');
    img.className = 'brand-logo';
    img.src = '/assets/logo.png?v=20260819-1542';
    img.alt = 'SELARL Julie Samama — vétérinaire équine';
    img.decoding = 'async';
    img.addEventListener('error', () => {
      brand.textContent = fallback;
      brand.setAttribute('aria-label', fallback);
    }, { once: true });
    brand.replaceChildren(img);
  }

  const button = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (button && nav) {
    button.setAttribute('aria-controls', nav.id || 'navigation-principale');
    if (!nav.id) nav.id = 'navigation-principale';
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Fermer' : 'Menu';
    });
  }
})();
