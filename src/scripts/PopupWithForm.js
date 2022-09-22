import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._buttonSubmitForm = this._form.querySelector('.button_theme_save');
        this._intialText = this._buttonSubmitForm.textContent;
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
          });
          return this._inputValues;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
          });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmitForm.textContent = 'Сохранение...';
        }
        else {
            this._buttonSubmitForm.textContent = this._intialText;
        }
    }
}