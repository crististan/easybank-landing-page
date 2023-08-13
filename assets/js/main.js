const hamburgerBtn = document.querySelector('.header__hamburger');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__navbar');
const header = document.querySelector('header');

hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('show-navbar');
    hamburger.classList.toggle('show-navbar');
});