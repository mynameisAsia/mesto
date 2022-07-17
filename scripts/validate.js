const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_theme_save',
  inactiveButtonClass: 'button_invalid',
  errorInput: 'error_invisible',
  errorInputActive: 'error_visible',
}

function showInputError(form, input) {
  editErrorMessage(input);
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}

function editErrorMessage(input) {
  input.setCustomValidity('');

  if (input.validity.valueMissing) {
      input.setCustomValidity('Вы пропустили это поле.');
  }

  if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity('Введите адрес сайта.');
  }
}

function hideInputError(form, input) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
};

function checkInputValidity(form, input, obj) {
  if (!input.validity.valid) {
    showInputError(form, input);
  } else {
    hideInputError(form, input);
  }
  checkButtonStatus(form, obj);
};

function checkButtonStatus(form, obj) {
  const buttonElement = form.querySelector(obj.submitButtonSelector);
  
  if (form.checkValidity()) {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(obj.inactiveButtonClass);
  } else {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(obj.inactiveButtonClass);
  } 
}

function setEventListeners (form, obj) {
  const inputList = Array.from(form.querySelectorAll(obj.inputSelector));

  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, obj);
      });
  });
};

function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  formList.forEach(function(form) {
    setEventListeners(form, obj);
    checkButtonStatus(form, obj);
  })
}

enableValidation(obj);