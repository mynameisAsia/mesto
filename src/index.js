import './pages/index.css';
import {
  initialCards,
  validationObj,
  popupProfileEdit,
  popupAddPhoto,
  imagePopup,
  formAddElement,
  nameInput,
  jobInput,
  profileName,
  profileDescription,
  buttonEdit,
  buttonAdd
} from './utils/constants.js'
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';

const user = new UserInfo ({name: profileName, description: profileDescription});

const popupImage = new PopupWithImage (imagePopup);

const popupProfile = new PopupWithForm ({popupSelector: popupProfileEdit, submitForm: (data) => {
  user.setUserInfo(data);
  popupProfile.close();
} });

const popupAddCard = new PopupWithForm ({popupSelector: popupAddPhoto, submitForm: (data) => {
  const cardElement = createCard(data);
  cardsList.addItem(cardElement);
  popupAddCard.close();
}});

const cardsList = new Section (
  { items: initialCards,
    renderer: (data) => {
      addNewCard(data);
    }
  }, '.photos__list');

cardsList.genereateItems();

const popupEditProfileValidation = new FormValidator(validationObj, popupProfileEdit);
const popupAddCardValidation = new FormValidator(validationObj, popupAddPhoto);

popupEditProfileValidation.enableValidation();
popupAddCardValidation.enableValidation();

popupProfile.setEventListeners();
popupAddCard.setEventListeners();
popupImage.setEventListeners();

function createCard(data) {
  const card = new Card(data, '#photos__template', handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

function addNewCard (data) {
  cardsList.addItem(createCard(data))
}

function handleCardClick (title, link) {
  popupImage.open({title, link});
}

buttonEdit.addEventListener('click', function () {
  setUserInputs(user.getUserInfo());
  popupProfile.open();
});

buttonAdd.addEventListener('click', function () {
  popupAddCard.open();
  popupAddCardValidation.resetValidation();
  formAddElement.reset();
});


function setUserInputs (data) {
  nameInput.value = data.firstname;
  jobInput.value = data.description;
}