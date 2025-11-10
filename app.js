// Mobile menu: open/close with animation

const toggleBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeItems = mobileMenu.querySelectorAll('[data-close], .mobile-menu__backdrop');

function openMenu() {
  mobileMenu.hidden = false;
  void mobileMenu.offsetWidth; // force reflow for transition
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  toggleBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
  toggleBtn.setAttribute('aria-expanded', 'false');
  setTimeout(() => mobileMenu.hidden = true, 300);
}

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
});

closeItems.forEach(el => el.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});
