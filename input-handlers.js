// --- Name Input ---
const nameInput = document.querySelector('#name');
const cardName = document.querySelector('.card-name');

const handleNameInputChange = () => {
  cardName.innerText = nameInput.value;
  if (formIsSubmitted === true) {
    validateCardName(nameInput.value);
  }
};

nameInput.addEventListener('input', handleNameInputChange);

// --- Number Input ---
const numberInput = document.querySelector('#card-number');
const cardNumber = document.querySelector('.card-number');

const handleNumberInputChange = () => {
  cardNumber.innerText = numberInput.value;
  if (formIsSubmitted === true) {
    validateCardNnumber(numberInput.value);
  }

  const currentNumber = numberInput.value.replaceAll(' ', '');

  if (numberInput.value.length > 16) {
    numberInput.value = numberInput.value.slice(0, 19);
    return;
  }

  let formattedNumber = '';

  for (let i = 0; i < currentNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += ' ';
    }
    formattedNumber += currentNumber[i];
  }

  numberInput.value = formattedNumber;
};

numberInput.addEventListener('input', handleNumberInputChange);

// --- Expiration Date ---
const expirationMonthInput = document.querySelector(
  '[name="card-expiration-month"]'
);
const expirationYearInput = document.querySelector(
  '[name="card-expiration-year"]'
);

const handleExpirationMonthInputChange = () => {
  if (expirationMonthInput.value.length === 2) {
    expirationYearInput.focus();
  }
};

expirationMonthInput.addEventListener(
  'input',
  handleExpirationMonthInputChange
);
