'use strict';
var navList = document.querySelector('.main-nav__list');
var navButton = document.querySelector('.main-nav__button');
var navToggle = document.querySelector('.main-nav__toggle');

navButton.classList.remove('main-nav__button--nojs');
navList.classList.remove('main-nav__list--nojs');

navButton.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
    navList.classList.add('main-nav__list--opened');

    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');

    navButton.classList.remove('main-nav__button--closed');
    navButton.classList.add('main-nav__button--opened');
  } else {
    navList.classList.add('main-nav__list--closed');
    navList.classList.remove('main-nav__list--opened');

    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');

    navButton.classList.add('main-nav__button--closed');
    navButton.classList.remove('main-nav__button--opened');
  }
});
