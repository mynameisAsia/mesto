const popUps = document.querySelectorAll('.popup');
const popupProfileEdit = document.querySelector('.popup_theme_edit');
const popupAddPhoto = document.querySelector('.popup_theme_add');
const imagePopup = document.querySelector('.popup_theme_image');
const buttonEdit = document.querySelector('.button_theme_edit');
const closeBtns = document.querySelectorAll('.button_theme_close');
const buttonAdd = document.querySelector('.button_theme_add');
const formElement = document.querySelector('.popup__form');
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

const createCard = (link, name) => {
  const newCard = cardsTemplate.querySelector('.photos__card').cloneNode(true);
  const newImage = newCard.querySelector('.photos__item');
  const newTitle = newCard.querySelector('.photos__title');
  newImage.src = link;
  newImage.alt = name;
  newTitle.textContent = name;

  const likeBtns = newCard.querySelectorAll('.button_theme_like');
  for (const likeBtn of likeBtns) {
    likeBtn.addEventListener('click', addLike);
  }
  
  const buttonDelete = newCard.querySelector('.button_theme_delete');
  buttonDelete.addEventListener('click', deletePhoto);

  newImage.addEventListener('click', () => {
    handleImagePopup(link, name)
  } )

  return newCard;
}

const renderCard = () => {
  list.prepend(createCard());
}

initialCards.forEach(function(element) {
  list.prepend(createCard(element.link, element.name));
});

const openPopup = (popup) => {
  popup.classList.add('popup_opened')
}

const closePopup = () => {
  for (const popUp of popUps) {
    popUp.classList.remove('popup_opened');
  }
}

const handleEditPopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(popupProfileEdit);
}

const handleAddPopup = () => {
  openPopup(popupAddPhoto);
}

function handleImagePopup(link, name) {
  photoItem.src = link;
  photoTitle.textContent = name;
  openPopup(imagePopup);
}

buttonEdit.addEventListener('click', handleEditPopup);
buttonAdd.addEventListener('click', handleAddPopup);
for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', closePopup);
}

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

formElement.addEventListener('submit', handleEditFormSubmit); 

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const newPhotoItem = linkInput.value;
  const newPhotoTitle = photoTitleInput.value;
  const newCard = createCard(newPhotoItem, newPhotoTitle);
  list.prepend(newCard);
  formAddElement.reset();
  closePopup(popupAddPhoto);
}

formAddElement.addEventListener('submit', handleAddFormSubmit);