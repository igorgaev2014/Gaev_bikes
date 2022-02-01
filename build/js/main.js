'use strict';
var body = document.querySelector('body');
var navList = document.querySelector('.main-nav__list');
var navButton = document.querySelector('.main-nav__button');
var navToggle = document.querySelector('.main-nav__toggle');

navButton.classList.remove('main-nav__button--nojs');
navList.classList.remove('main-nav__list--nojs');

function openMenu() {
  navList.classList.remove('main-nav__list--closed');
  navList.classList.add('main-nav__list--opened');

  navToggle.classList.remove('main-nav__toggle--closed');
  navToggle.classList.add('main-nav__toggle--opened');

  navButton.classList.remove('main-nav__button--closed');
  navButton.classList.add('main-nav__button--opened');

  body.classList.add('page__body-lock');
}

function closeMenu() {
  navList.classList.remove('main-nav__list--opened');
  navList.classList.add('main-nav__list--closed');

  navToggle.classList.remove('main-nav__toggle--opened');
  navToggle.classList.add('main-nav__toggle--closed');

  navButton.classList.remove('main-nav__button--opened');
  navButton.classList.add('main-nav__button--closed');

  body.classList.remove('page__body-lock');
}

navButton.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

navList.addEventListener('click', function () {
  closeMenu();
});
//# sourceMappingURL=main.js.map
