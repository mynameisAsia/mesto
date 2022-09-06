export default class Card {
    constructor(data, cardTemplate, handleCardClick) {
      this._title = data.title;
      this._link = data.link;
      this._cardTemplate = cardTemplate;
      this._handleCardClick = handleCardClick;
    }
    
    _getTemplate () {
      const newCard = document.querySelector(this._cardTemplate).content.querySelector('.photos__card').cloneNode(true); 
      return newCard;
    }

    _addLike() {
      this._likeBtn.classList.toggle('button_active');
    }
  
    _deletePhoto () {
      this._newCard.remove();
      this._newCard = null;
    }
  
    _setEventListeners () {
      this._likeBtn.addEventListener('click', () => {
        this._addLike();
      });
    
      this._buttonDelete.addEventListener('click', () => {
        this._deletePhoto();
      });

      this._newImage.addEventListener('click', () => {
        this._handleCardClick(this._title, this._link)
      });
    } 
  
    createCard() {
      this._newCard = this._getTemplate(); 
      this._likeBtn = this._newCard.querySelector('.button_theme_like');
      this._buttonDelete = this._newCard.querySelector('.button_theme_delete');
      this._newImage = this._newCard.querySelector('.photos__item'); 
      this._newCard.querySelector('.photos__title').textContent = this._title; 
      this._newImage.src = this._link; 
      this._newImage.alt = this._title; 
      this._setEventListeners(); 
  
      return this._newCard;
    }
}
