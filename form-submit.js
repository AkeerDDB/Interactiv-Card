const cardForm = document.querySelector('.card-data-form');
const stepTwoContainer = document.querySelector('.confirm-container');
const nameInputError = document.querySelector('.name-input-error');
const numberInputError = document.querySelector('.number-input-error');
const expDateError = document.querySelector('.exp-date-error');
const cvcError = document.querySelector('.cvc-error');
const submitButton = document.querySelector(
  '.card-data-form button[type="submit"]'
);
const cardFormSpinner = document.querySelector('.card-form-spinner');

const forbiddenCharactersForName = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  ',',
  '/',
];
const forbiddenCharactersForNumber = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];
let numberOfErrors = 0;
let formIsSubmitted = false;

const handleCardFormSubmit = (e) => {
  e.preventDefault();

  formIsSubmitted = true;
  numberOfErrors = 0;

  const formData = new FormData(e.target);

  validateCardName(formData.get('name'));
  validateCardNnumber(formData.get('card-number'));
  validateExpMonth(formData.get('card-expiration-month'));
  validateExpYear(formData.get('card-expiration-year'));
  validateCvc(formData.get('cvc'));

  if (numberOfErrors === 0) {
    submitButton.setAttribute('disabled', 'true');
    cardFormSpinner.classList.remove('hide');

    setTimeout(() => {
      // daca ai vrea sa revii la statusul anterior
      // submitButton.removeAttribute("disabled");
      // cardFormSpinner.classList.add("hide");

      // trecere pe pasul 2
      cardForm.style.opacity = '0%';

      setTimeout(() => {
        cardForm.classList.add('hide');
        stepTwoContainer.classList.remove('hide');
        // stepTwoContainer.style.opacity = "100%";
      }, 1000);
    }, 2000);
  }
};

cardForm.addEventListener('submit', handleCardFormSubmit);

const validateCardName = (cardName) => {
  if (cardName.length === 0) {
    numberOfErrors++;
    nameInput.classList.add('has-error');
    nameInputError.classList.remove('hide');
    nameInputError.innerText = 'This field is required';
    return;
  }

  for (let i = 0; i < cardName.length; i++) {
    if (forbiddenCharactersForName.includes(cardName[i])) {
      numberOfErrors++;
      nameInput.classList.add('has-error');
      nameInputError.classList.remove('hide');
      nameInputError.innerText = 'Must contain only letters';
      return;
    }
  }

  if (cardName.length > 256) {
    numberOfErrors++;
    nameInput.classList.add('has-error');
    nameInputError.classList.remove('hide');
    nameInputError.innerText = 'Maximum number of characters is 256';
    return;
  }

  nameInput.classList.remove('has-error');
  nameInputError.classList.add('hide');
};

const validateCardNnumber = (cardNumber) => {
  if (cardNumber.length === 0) {
    numberOfErrors++;
    numberInput.classList.add('has-error');
    numberInputError.classList.remove('hide');
    numberInputError.innerText = 'This field is required';
    return;
  }

  for (let i = 0; i < cardNumber.length; i++) {
    if (forbiddenCharactersForNumber.includes(cardNumber[i])) {
      numberOfErrors++;
      numberInput.classList.add('has-error');
      numberInputError.classList.remove('hide');
      numberInputError.innerText = 'Must contain only number';
      return;
    }
  }

  numberInput.classList.remove('has-error');
  numberInputError.classList.add('hide');
};

const validateExpMonth = (expMonth) => {
  if (expirationMonthInput.value.length > 2) {
    expirationMonthInput.value = expirationMonthInput.value.slice(0, 2);
  }
  if (expMonth.length === 0) {
    numberOfErrors++;
    expirationMonthInput.classList.add('has-error');
    expDateError.classList.remove('hide');
    expDateError.innerText = "Can't be blank";
    return;
  }

  expirationMonthInput.classList.remove('has-error');
  expDateError.classList.add('hide');
};
expirationMonthInput.addEventListener('input', validateExpMonth);

const validateExpYear = (expYear) => {
  if (expirationYearInput.value.length > 2) {
    expirationYearInput.value = expirationYearInput.value.slice(0, 2);
  }
  if (expYear.length === 0) {
    numberOfErrors++;
    expirationYearInput.classList.add('has-error');
    expDateError.classList.remove('hide');
    expDateError.innerText = "Can't be blank";
    return;
  }

  expirationYearInput.classList.remove('has-error');
  expDateError.classList.add('hide');
};

expirationYearInput.addEventListener('input', validateExpYear);

const validateCvc = (cvc) => {
  if (cvcInput.value.length > 3) {
    cvcInput.value = cvcInput.value.slice(0, 3);
  }
  if (cvc.length === 0) {
    numberOfErrors++;
    cvcInput.classList.add('has-error');
    cvcError.classList.remove('hide');
    cvcError.innerText = "Can't be blank";
    return;
  }

  cvcInput.classList.remove('has-error');
  cvcError.classList.add('hide');
};

cvcInput.addEventListener('input', validateCvc);
