const popUps = document.querySelectorAll('.popup');
const popupProfileEdit = document.querySelector('.popup_theme_edit');
const popupAddPhoto = document.querySelector('.popup_theme_add');
const imagePopup = document.querySelector('.popup_theme_image');
const buttonEdit = document.querySelector('.button_theme_edit');
const buttonCloseProfile = document.querySelector('.button__close-profile');
const buttonCloseAddForm = document.querySelector('.button__close-adding');
const buttonCloseImage = document.querySelector('.button__close-image');
const buttonAdd = document.querySelector('.button_theme_add');
const formEditElement = document.querySelector('.popup__form-edit');
const nameInput = document.querySelector('.popup__input_type_firstname');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formAddElement = document.querySelector('.popup__form-add')
const linkInput = document.querySelector('.popup__input_type_link');
const photoTitleInput = document.querySelector('.popup__input_type_name');
const cardsTemplate = document.querySelector('#photos__template').content;
const list = document.querySelector('.photos__list');
const photoItem = document.querySelector('.popup__image');
const photoTitle = document.querySelector('.popup__image-title');
const contentOfPopups = document.querySelectorAll('.popup__content');
const buttonElement = document.querySelector('.button__create');

const createCard = (link, name) => {
  const newCard = cardsTemplate.querySelector('.photos__card').cloneNode(true);
  const newImage = newCard.querySelector('.photos__item');
  const newTitle = newCard.querySelector('.photos__title');
  newImage.src = link;
  newImage.alt = name;
  newTitle.textContent = name;

  const likeBtn = newCard.querySelector('.button_theme_like');
  likeBtn.addEventListener('click', addLike);
  
  const buttonDelete = newCard.querySelector('.button_theme_delete');
  buttonDelete.addEventListener('click', deletePhoto);

  newImage.addEventListener('click', () => {
    handleImagePopup(link, name)
  } )

  return newCard;
}
/*
const renderCard = () => {
  list.prepend(createCard());
}*/

initialCards.forEach(function(element) {
  list.prepend(createCard(element.link, element.name));
});

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

function handleImagePopup(link, name) {
  photoItem.src = link;
  photoItem.alt = name;
  photoTitle.textContent = name;
  openPopup(imagePopup);
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

function addLike(evt) {
  evt.target.classList.toggle('button_active');
 }

function deletePhoto(evt) {
  evt.target.closest('.photos__card').remove();
}

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
  const newCard = createCard(newPhotoItem, newPhotoTitle);
  list.prepend(newCard);
  closePopup(popupAddPhoto);
  formAddElement.reset();
}

formAddElement.addEventListener('submit', handleAddFormSubmit);