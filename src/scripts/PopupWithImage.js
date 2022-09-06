import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._image = document.querySelector('.popup__image');
        this._title = document.querySelector('.popup__image-title');
    }

    open ({title, link}) {
        super.open();
        this._image.src = link;
        this._image.alt = title;
        this._title.textContent = title;
    }
}