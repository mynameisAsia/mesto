class Card {
    constructor(imageTitle, imageLink, cardTemplate, cardObj) {
      this._imageTitle = imageTitle;
      this._imageLink = imageLink;
      this._cardTemplate = cardTemplate;
      this._cardObj = cardObj;
    }
    
    _getTemplate () {
      const newCard = document.querySelector(this._cardTemplate).content.cloneNode(true); 
      return newCard;
    }

    _addLike() {
      this._likeBtn.classList.toggle(this._cardObj.buttonLikeActive);
    }
  
    _deletePhoto () {
      const cardSelector = this._cardObj.cardSelector;
      this._buttonDelete.closest(cardSelector).remove();
    }
  
    _setEventListeners () {
      this._likeBtn.addEventListener('click', () => {
        this._addLike();
      });
    
      this._buttonDelete.addEventListener('click', () => {
        this._deletePhoto();
      });
  
      this._newImage.addEventListener('click', () => { 
        this._handleImagePopup();
      })
    }

    _handleImagePopup () {
      this._popupImage.alt = this._newCard.alt;
      this._popupImage.src = this._newCard.src;
      this._popupContainer.querySelector(this._cardObj.imageTitleSelector).textContent = this._newImage.alt;
      this._popupContainer.classList.add(this._cardObj.popupOpenedClass);
    }
  
    createCard() {
      this._newCard = this._getTemplate(); 
      this._likeBtn = this._newCard.querySelector(this._cardObj.buttonLikeSelector);
      this._buttonDelete = this._newCard.querySelector(this._cardObj.buttonDeleteSelector);
      this._popupContainer = document.querySelector(this._cardObj.imagePopupContainerSelector); 
      this._popupImage = this._popupContainer.querySelector(this._cardObj.imagePopupSelector);
      this._newImage = this._newCard.querySelector(this._cardObj.photoItemSelector); 
      this._newCard.querySelector(this._cardObj.cardTitleSelector).textContent = this._imageTitle; 
      this._newImage.src = this._imageLink; 
      this._newImage.alt = this._imageTitle; 
      this._setEventListeners(); 
  
      return this._newCard;
    }
  }

export { Card };