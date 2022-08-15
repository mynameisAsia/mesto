class Card {
    constructor(name, link, cardTemplate, cardObj, handleCardClick) {
      this._name = name;
      this._link = link;
      this._cardTemplate = cardTemplate;
      this._cardObj = cardObj;
      this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._name, this._link)
      });
    } 
  
    createCard() {
      this._newCard = this._getTemplate(); 
      this._likeBtn = this._newCard.querySelector(this._cardObj.buttonLikeSelector);
      this._buttonDelete = this._newCard.querySelector(this._cardObj.buttonDeleteSelector);
      this._newImage = this._newCard.querySelector(this._cardObj.photoItemSelector); 
      this._newCard.querySelector(this._cardObj.cardTitleSelector).textContent = this._name; 
      this._newImage.src = this._link; 
      this._newImage.alt = this._name; 
      this._setEventListeners(); 
  
      return this._newCard;
    }
}

export { Card };