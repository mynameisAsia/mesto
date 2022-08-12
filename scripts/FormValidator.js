const validationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_theme_save',
  inactiveButtonClass: 'button_invalid',
  errorInput: 'error_invisible',
}

class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
  }
  
  _showInputError (input) {
    this._editErrorMessage(input)
    this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = input.validationMessage; 
  }

  _editErrorMessage(input) {
    input.setCustomValidity('');

    if (input.validity.valueMissing) {
      input.setCustomValidity('Вы пропустили это поле.');
    }

    if (input.validity.typeMismatch && input.type === 'url') {
      input.setCustomValidity('Введите адрес сайта.');
    }
  }

  _hideInputError (input) {
    this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = ' '; 
  }

  _checkInputValidity (input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input); 
    }
  }

  _checkFormValidity () {
    return this._inputList.some((input) => {
      return !input.validity.valid
    });
  }

  _checkButtonStatus () {
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    if (this._checkFormValidity()) {
      
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._obj.inactiveButtonClass);
    } else {
      
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
    }
  }

  _setEventListeners () {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._checkButtonStatus();
      });
    });
  }

  enableValidation () {
    this._setEventListeners();
    this._checkButtonStatus();
  }

}

export {FormValidator, validationObj};