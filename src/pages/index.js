import './index.css';
import {
  validationObj,
  popupProfileEdit,
  popupAddPhoto,
  popupUpdateAvatar,
  formAddElement,
  nameInput,
  jobInput,
  buttonEdit,
  buttonUpdateAvatar,
  buttonAdd
} from '../utils/constants.js'
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';
import Api from '../scripts/Api.js';
import PopupWithConfirmation from '../scripts/PopupWithConfirmation';

const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
  headers: {
    authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
    'Content-Type': 'application/json'
  }
})

let userId = '';

const promises = [api.getInitialCards(), api.getUserInfo()];

Promise.all(promises)
        .then(([cardData, userData]) => {
          userId = userData._id;

          user.setUserInfo(userData);
		      cardsList.genereateItems(cardData);
        })
        .catch((err) => {
          console.log(err);
        })

const cardsList = new Section (
  { renderer: (data) => {
      const card = createCard(data, '#photos__template');
      const cardElement = card.createCard();
      cardsList.addItem(cardElement);
    }
  }, '.photos__list');

const user = new UserInfo ({ 
  name: '.profile__name', 
  about: '.profile__description', 
  avatar: '.profile__avatar'});

const popupImage = new PopupWithImage ('.popup_theme_image');

const popupProfile = new PopupWithForm ({popupSelector: '.popup_theme_edit', submitForm: (data) => {
  popupProfile.renderLoading(true);
  api.updateUserInfo(data)
    .then((data) => {
      user.setUserInfo(data);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    })
} });

const popupAddCard = new PopupWithForm ({popupSelector: '.popup_theme_add', submitForm: (data) => {
  popupAddCard.renderLoading(true);
  api.addNewCard(data)
    .then((cardData) => {
      const card = createCard(cardData);
      cardsList.addNewItem(card.createCard());
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddCard.renderLoading(false);
    })
}});

const popupDeleteConfirmation = new PopupWithConfirmation ({popupSelector: '.popup_theme_confirm', submitForm: (element, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      element.deleteCard();
      popupDeleteConfirmation.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }
});

const popupChangeAvatar = new PopupWithForm ({popupSelector: '.popup_theme_avatar', submitForm: (data) => {
  popupChangeAvatar.renderLoading(true);
  api.changeAvatar(data)
    .then((data) => {
      user.setUserInfo({avatar: data.avatar, name: data.name, about: data.about});
      popupChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupChangeAvatar.renderLoading(false);
    })
  }
});

const popupEditProfileValidation = new FormValidator(validationObj, popupProfileEdit);
const popupAddCardValidation = new FormValidator(validationObj, popupAddPhoto);
const popupEditAvatarValidation = new FormValidator(validationObj, popupUpdateAvatar);

function createCard(data) {
  const card = new Card({
    data: {...data, currentUserId: userId}, 
    handleCardClick: (name, link) => {
      popupImage.open({name, link});
    },
    handleLikeClick: () => {
      if(card.isLiked) {
        api.removeLike(card.getId())
          .then((data) => {
            card.removeLike();
            card.updateNumberOfLikes(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }
      else {
        api.likeCards(card.getId())
          .then((data) => {
            card.setLike();
            card.updateNumberOfLikes(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    },
    handleDeleteClick: (element, cardId) => {
      popupDeleteConfirmation.open(card);
      popupDeleteConfirmation.setCard(element, cardId);
    }
    }, '#photos__template');
  
  return card;
}

function setUserInputs (data) {
  nameInput.value = data.name;
  jobInput.value = data.about;
}

popupEditProfileValidation.enableValidation();
popupAddCardValidation.enableValidation();
popupEditAvatarValidation.enableValidation();

popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupDeleteConfirmation.setEventListeners();
popupChangeAvatar.setEventListeners();

buttonEdit.addEventListener('click', function () {
  setUserInputs(user.getUserInfo());
  popupProfile.open();
});

buttonAdd.addEventListener('click', function () {
  popupAddCard.open();
  popupAddCardValidation.resetValidation();
  formAddElement.reset();
});

buttonUpdateAvatar.addEventListener('click', function () {
  popupChangeAvatar.open();
  popupEditAvatarValidation.resetValidation();
});