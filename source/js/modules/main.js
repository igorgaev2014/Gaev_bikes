'use strict';
var body = document.querySelector('body');
var nav = document.querySelector('.main-nav');
var navButton = nav.querySelector('.main-nav__button');
var navList = nav.querySelector('.main-nav__list');

body.classList.remove('body--no-js');

function openMenu() {
  nav.classList.remove('main-nav--closed');
  nav.classList.add('main-nav--opened');
  body.classList.add('page__body-lock');
}

function closeMenu() {
  nav.classList.remove('main-nav--opened');
  nav.classList.add('main-nav--closed');
  body.classList.remove('page__body-lock');
}

navButton.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navList.addEventListener('click', function () {
  closeMenu();
});
