export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._buttonClose = this._popupSelector.querySelector('.button_theme_close');
        this._handleEsc = (evt) => {
          this._handleEscClose(evt);
        }
      }

    open () {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close () {
        this._popupSelector.classList.remove('popup_opened'); 
        document.removeEventListener('keydown', this._handleEsc);
    }

    _handleEscClose (evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners () {
        const popupOverlay = this._popupSelector.querySelector('.popup__overlay');
        
        this._buttonClose.addEventListener('click', () => {
            this.close();
        } );

        popupOverlay.addEventListener('click', () => {
          this.close();
        })
    }
}