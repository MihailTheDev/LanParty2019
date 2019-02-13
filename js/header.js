const $burger = document.querySelector('.navbar__links--burger');
const $mobileBurger = document.querySelector('.mobile-navbar__links--burger');
const $mobileNavbar = document.querySelector('.mobile-navbar');

$burger.addEventListener('click', () => {
  $mobileNavbar.classList.add('mobile-navbar--active');
});

$mobileBurger.addEventListener('click', () => {
  $mobileNavbar.classList.remove('mobile-navbar--active');
});