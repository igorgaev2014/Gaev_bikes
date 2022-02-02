const body = document.body;
const nav = document.querySelector('.main-nav');
const navButton = nav.querySelector('.main-nav__button');
const navList = nav.querySelector('.main-nav__list');
const phoneInput = document.querySelector('input[type="tel"]');

body.classList.remove('body--no-js');

function openMenu () {
  nav.classList.remove('main-nav--closed');
  nav.classList.add('main-nav--opened');
  body.classList.add('page__body-lock');
}

function closeMenu () {
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

phoneInput.addEventListener('input', function () {
  onValidateInput(phoneInput);
});
