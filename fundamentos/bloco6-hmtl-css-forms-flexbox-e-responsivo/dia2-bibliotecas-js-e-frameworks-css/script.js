import './node_modules/just-validate/dist/js/just-validate.js';

// validação de formulário usando a biblioteca Just Validate
new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 50,
      minLength: 5
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    adress: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true
    },
    housetype: {
      required: true
    },
    resume: {
      required: true
    },
    role: {
      required: true
    },
    roleDescription: {
      required: true
    },
    startDate: {
      required: true,
      maxLength: 10,
      minLength: 1
    },
    submitHandler: function (form, values) {
      console.log(form, values);
    }
  }
});

// 'validação' de data usando a biblioteca Pikaday
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

const clearButton = document.querySelector('.clear-button');

// limpar campos preenchidos
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
  }
}

clearButton.addEventListener('click', clearFields);

// criação das opções de estado
function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

window.onload = function initialize() {
  createStateOptions();
}
