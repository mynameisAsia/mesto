import { Card } from './Card.js';
import { FormValidator, validationObj } from './FormValidator.js';

const cardObj = {
  cardSelector: '.photos__card', 
  photoItemSelector: '.photos__item', 
  cardTitleSelector: '.photos__title',
  buttonLikeActive: 'button_active',
  buttonLikeSelector: '.button_theme_like',
  buttonDeleteSelector: '.button_theme_delete',
  buttonClosePopupSelector: '.button_theme_close',
}

const popupProfileEdit = document.querySelector('.popup_theme_edit');
const popupAddPhoto = document.querySelector('.popup_theme_add');
const imagePopup = document.querySelector('.popup_theme_image');
const imagePopupSelector = document.querySelector('.popup__image');
const imageTitleSelector = document.querySelector('.popup__image-title');
const buttonEdit = document.querySelector('.button_theme_edit');
const buttonCloseProfile = document.querySelector('.button_theme_close-profile');
const buttonCloseAddForm = document.querySelector('.button_theme_close-adding');
const buttonCloseImage = document.querySelector('.button_theme_close-image');
const buttonAdd = document.querySelector('.button_theme_add');
const formEditElement = document.querySelector('.popup__form-edit');
const nameInput = document.querySelector('.popup__input_type_firstname');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formAddElement = document.querySelector('.popup__form-add')
const linkInput = document.querySelector('.popup__input_type_link');
const photoTitleInput = document.querySelector('.popup__input_type_name');
const list = document.querySelector('.photos__list');

const popupEditProfileValidation = new FormValidator(validationObj, popupProfileEdit);
const popupAddCardValidation = new FormValidator(validationObj, popupAddPhoto);

popupEditProfileValidation.enableValidation();
popupAddCardValidation.enableValidation();

function renderCards() {
  initialCards.forEach(function (element) { 
   const card = createCard(element);
       insertCard(card); 
   });
}

function insertCard(data) {
  list.prepend(data); 
}

function createCard(item) {
  const card = new Card(item.name, item.link, '#photos__template', cardObj, handleCardClick);
  return card.createCard()
}

renderCards();

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened'); 
  document.removeEventListener('keydown', handleEscClose);
}

function handleEscClose (evt) {
  if (evt.key === 'Escape') {
  closePopup(document.querySelector('.popup_opened'));
}
}

function handleOverlayClose() {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popupElement) => {
    const popupOverlay = popupElement.querySelector('.popup__overlay');
    popupOverlay.addEventListener('click', () => closePopup(popupElement));
  })
}

handleOverlayClose();

function handleCardClick (name, link) {
  imagePopupSelector.alt = name;
  imagePopupSelector.src = link; 
  imageTitleSelector.textContent = name;
  openPopup(imagePopup);
}

const handleEditPopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileEdit);
}

const handleAddPopup = () => {
  openPopup(popupAddPhoto);
  popupAddCardValidation.resetValidation();
  formAddElement.reset();
}

buttonEdit.addEventListener('click', handleEditPopup);
buttonAdd.addEventListener('click', handleAddPopup);
buttonCloseProfile.addEventListener('click', () => { 
  closePopup(popupProfileEdit)
});
buttonCloseAddForm.addEventListener('click', () => {
  closePopup(popupAddPhoto);
});
buttonCloseImage.addEventListener('click', () => {
  closePopup(imagePopup);
});

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(popupProfileEdit);
}

formEditElement.addEventListener('submit', handleEditFormSubmit); 

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const data = { name: photoTitleInput.value, link: linkInput.value };
  list.prepend(createCard(data));
  closePopup(popupAddPhoto);
  popupAddCardValidation.checkButtonStatus();
}

formAddElement.addEventListener('submit', handleAddFormSubmit);