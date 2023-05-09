// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     // const scrollLockMethod = !isMenuOpen
//     //   ? 'disableBodyScroll'
//     //   : 'enableBodyScroll';
//     // bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

// })();

const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const body = document.querySelector('body');

mobileMenuBtn.addEventListener('click', onOpenMobileMenu);
function onOpenMobileMenu() {
  mobileMenuBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('mobile-menu-open');
}

//   // Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  mobileMenuBtn.classList.remove('is-open');
  body.classList.remove('mobile-menu-open');
  // bodyScrollLock.enableBodyScroll(document.body);
});
