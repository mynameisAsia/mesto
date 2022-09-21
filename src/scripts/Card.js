export default class Card {
    constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, cardTemplate) {
      this._name = data.name;
      this._link = data.link;
      this._userId = data.currentUserId;
      this._ownerId = data.owner._id;
      this._likes = data.likes;
      this._cardId = data._id;
      this._data = data;
      this._cardTemplate = cardTemplate;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleDeleteClick = handleDeleteClick;
    }
    
    _getTemplate () {
      const newCard = document.querySelector(this._cardTemplate).content.querySelector('.photos__card').cloneNode(true); 
      return newCard;
    }

    getId() {
      return this._cardId;
    }

    isLiked() {
      return Boolean (this._likes.some((item) => item._id === this._userId))
    }

    updateNumberOfLikes(likes) {
		  this._likeCounter.textContent = likes.length;
    }

    _toggleLike() {
      if (this.isLiked()) {
        this.setLike();
      } else {
        this.removeLike();
      }
    }

    setLike() {
      this._likeBtn.classList.add('button_active');
      this.isLiked = true;
    }

    removeLike() {
      this._likeBtn.classList.remove('button_active');
      this.isLiked = false;
    }

    _setDeleteIcon() {
      if (this._userId !== this._ownerId) {
        this._buttonDelete.remove();
      }
    }

    deleteCard() {
      this._newCard.remove();
      this._newCard = null;
    }
  
    _setEventListeners () {
      this._likeBtn.addEventListener('click', () => {
        this._handleLikeClick(this._cardId);
      });
    
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteClick(this._newCard, this._cardId);
      });

      this._newImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link)
      });
    } 
  
    createCard() {
      this._newCard = this._getTemplate(); 
      this._likeBtn = this._newCard.querySelector('.button_theme_like');
      this._buttonDelete = this._newCard.querySelector('.button_theme_delete');
      this._newImage = this._newCard.querySelector('.photos__item'); 
      this._likeCounter = this._newCard.querySelector('.photos__like-counter');

      this._newCard.querySelector('.photos__title').textContent = this._name; 
      this._newImage.src = this._link; 
      this._newImage.alt = this._name; 

      this._setDeleteIcon();
      this._toggleLike();
      this.updateNumberOfLikes(this._likes);
      this._setEventListeners(); 
  
      return this._newCard;
    }
}
