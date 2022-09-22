export default class FormValidator {
  constructor(obj, formElement) {
    this._obj = obj;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
  }
  
  _showInputError (input) {
    this._errorElement = this._formElement.querySelector(`#${input.id}-error`);
    this._errorElement.textContent = input.validationMessage;
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

  _setDisabledAttribute() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._obj.inactiveButtonClass);
  }

  checkButtonStatus () {
    
    if (this._checkFormValidity()) {
      this._setDisabledAttribute();
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
    }
  }

  resetValidation() {
    this._setDisabledAttribute();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  } 

  _setEventListeners () {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this.checkButtonStatus();
      });
    });
  }

  enableValidation () {
    this._setEventListeners();
    this.checkButtonStatus();
  }

}