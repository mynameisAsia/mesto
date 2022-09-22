import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor ({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._card, this._idCard);
        })
    }

    open (card) {
        super.open();
        this._card = card;
    }

    setCard(element, id) {
        this._idCard = id;
        this._cardElement = element;
    }

    _clear() {
        this._idCard = '';
        this._cardElement = '';
    }
}