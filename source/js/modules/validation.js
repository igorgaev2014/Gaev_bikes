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
