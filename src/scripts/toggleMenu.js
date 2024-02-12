let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.header__menu');
let closeMenuIcon = document.querySelector('.menu__close');

menuIcon.addEventListener('click', () => menu.classList.add('menu__open'));
closeMenuIcon.addEventListener('click', () => menu.classList.remove('menu__open'));