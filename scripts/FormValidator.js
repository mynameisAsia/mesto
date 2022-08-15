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
    this._buttonElement = this._formElement.querySelector(this._obj.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._obj.inputSelector));
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

  checkButtonStatus () {
    
    if (this._checkFormValidity()) {
      
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._obj.inactiveButtonClass);
    } else {
      
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._obj.inactiveButtonClass);
    }
  }

  resetValidation() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._obj.inactiveButtonClass); // при использовании this.checkButtonStatus(); кнопка активировалась во второй раз открытия формы добавления карточки, и давала создать пустую карточку, а в третий раз работала корректно, поэтому решила вставить код из функции на проверку кнопки :(

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

export {FormValidator, validationObj};