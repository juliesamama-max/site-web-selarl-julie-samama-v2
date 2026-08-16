(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const brand = document.querySelector('.brand');
  const nav = document.querySelector('[data-nav]') || document.querySelector('.nav');
  const button = document.querySelector('[data-menu-button]') || document.querySelector('.menu-button');

  if (header && !document.querySelector('.skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'skip-link';
    skip.href = '#contenu';
    skip.textContent = 'Aller au contenu';
    body.prepend(skip);
  }

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'contenu';

  if (brand) {
    brand.setAttribute('aria-label', 'Accueil — SELARL Julie Samama, vétérinaire équine');
    const logo = new Image();
    logo.src = '/assets/logo.png';
    logo.alt = '';
    logo.decoding = 'async';
    logo.onload = () => {
      brand.textContent = '';
      brand.appendChild(logo);
      brand.classList.add('brand--logo');
    };
  }

  if (nav) {
    nav.setAttribute('aria-label', 'Navigation principale');
    nav.innerHTML = `
      <a href="/services/">Services</a>
      <a href="/blog/conseils-prevention.html">Prévention & conseils</a>
      <a href="/a-propos/">À propos</a>
      <a href="/contact/">Contact</a>
      <a href="/urgences/">Urgence</a>
      <a class="cta" href="/rendez-vous/">Demander un rendez-vous</a>`;

    const current = location.pathname.replace(/index\.html$/, '');
    nav.querySelectorAll('a').forEach(link => {
      const href = new URL(link.href, location.origin).pathname.replace(/index\.html$/, '');
      const isActive = href !== '/' && (current === href || current.startsWith(href.endsWith('/') ? href : href + '/'));
      if (isActive) link.classList.add('is-active');
    });
  }

  if (button && nav) {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'navigation-principale');
    nav.id = 'navigation-principale';
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? 'Fermer' : 'Menu';
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Menu';
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Menu';
        button.focus();
      }
    });
  }

  document.querySelectorAll('.mobile-bar').forEach(bar => bar.setAttribute('aria-label', 'Actions rapides'));
})();
