const body = document.body;
const nav = document.querySelector('.main-nav');
const navButton = nav.querySelector('.main-nav__button');
const navList = nav.querySelector('.main-nav__list');
const phoneInput = document.querySelector('input[type="tel"]');

body.classList.remove('no-js');

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

const onValidateInput = (input) => {
  const inputs = input.value.toLowerCase().split(' ');
  const invalidInputs = [];
  const pattern = '^[0-9\-\+]{9,15}$';
  const patternText = '+79001234567';

  inputs.forEach((input) => {
    if (!input.match(pattern)) {
      invalidInputs.push(input);
    }
  });

  if (invalidInputs.length !== 0) {
    input.setCustomValidity(`Некорректно заполнены данные. Введите в формате ${patternText}`);
    input.classList.add('input-invalid')
  } else {
    input.setCustomValidity('');
    input.classList.remove('input-invalid')
  }
  input.reportValidity();
};
//# sourceMappingURL=main.js.map
