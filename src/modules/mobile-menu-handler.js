const menuIcon = document.querySelector('.navigation-mobile');
const menuItems = document.querySelectorAll('.menu-item');
const nav = document.querySelector('.nav');

export const toggleMobileMenu = () => {
  nav.style.transition = 'transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)';
  menuIcon.classList.toggle('clicked');
  nav.classList.toggle('show');
};

menuIcon.addEventListener('click', toggleMobileMenu);
menuIcon.addEventListener('touchend', toggleMobileMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', toggleMobileMenu);
});

document.addEventListener('click', (e) => {
  if (e.target != nav && nav.classList.contains('show') && e.target != menuIcon) {
    toggleMobileMenu();
  }
});
