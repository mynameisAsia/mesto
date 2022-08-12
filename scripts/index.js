import { Card } from './Card.js';
import { FormValidator, validationObj } from './FormValidator.js';

const cardObj = {
  popupOpenedClass: 'popup_opened',
  imagePopupContainerSelector: '.popup_theme_image',
  imagePopupSelector: '.popup__image', 
  imageTitleSelector: '.popup__image-title', 
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
const buttonElement = document.querySelector('.button_theme_save-card');

const popupEditProfileValidation = new FormValidator(validationObj, popupProfileEdit);
const popupAddCardValidation = new FormValidator(validationObj, popupAddPhoto);

popupEditProfileValidation.enableValidation();
popupAddCardValidation.enableValidation();

function loadCards() {

  initialCards.forEach(function(element) {
    const newCard = new Card(element.name, element.link, '#photos__template', cardObj).createCard();
    list.prepend(newCard); 
  });
}
loadCards();

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

const handleEditPopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileEdit);
}

const handleAddPopup = () => {
  buttonElement.classList.add('button_invalid');
  buttonElement.setAttribute('disabled', '');
  openPopup(popupAddPhoto);
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
  const newPhotoItem = linkInput.value;
  const newPhotoTitle = photoTitleInput.value;
  const newCard = new Card(newPhotoTitle, newPhotoItem, '#photos__template', cardObj).createCard();
  list.prepend(newCard);
  closePopup(popupAddPhoto);
  formAddElement.reset();
}

formAddElement.addEventListener('submit', handleAddFormSubmit);