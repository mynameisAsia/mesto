const popUps = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_theme_edit');
const addPopup = document.querySelector('.popup_theme_add');
const imagePopup = document.querySelector('.popup_theme_image');
const editBtn = document.querySelector('.button_theme_edit');
const closeBtns = document.querySelectorAll('.button_theme_close');
const addBtn = document.querySelector('.button_theme_add');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_firstname');
const jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
const formAddElement = document.querySelector('.popup__form-add')
const linkInput = document.querySelector('.popup__input_type_link');
const photoTitleInput = document.querySelector('.popup__input_type_name');
const cardsTemplate = document.querySelector('#photos__template').content;
const list = document.querySelector('.photos__list');
const photoItem = document.querySelector('.popup__image');
const photoTitle = document.querySelector('.popup__image-title');

const initialCards = [
    {
      name: 'Атлантический океан',
      link: 'https://assets.website-files.com/5ce44e4e8d1c1fc85b84c18d/5f0388468934bb739f0536ba_best-life-jackets-for-sailing.jpg'
    },
    {
      name: 'Корабль Жанна дАрк',
      link: 'https://2015.f.a0z.ru/11/25-4022762-jeanne-darc.jpg'
    },
    {
      name: 'Антарктида',
      link: 'https://images.unsplash.com/photo-1486566584569-b9319dc74315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Амазонка',
      link: 'https://images.unsplash.com/photo-1599582964755-971498d2b4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Нью-Йорк',
      link: 'https://images.unsplash.com/photo-1578297886235-c521966ea880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
      name: 'Сент-Андре-Де-Кюбзак',
      link: 'https://exp.cdn-hotels.com/hotels/31000000/30040000/30033400/30033304/71406e72_y.jpg?impolicy=fcrop&w=500&h=333&q=high'
    }
  ];

const createCard = (link, name) => {
  const newCard = cardsTemplate.querySelector('.photos__card').cloneNode(true);
  const newImage = newCard.querySelector('.photos__item');
  const newTitle = newCard.querySelector('.photos__title');
  newImage.src = link;
  newTitle.textContent = name;

  const likeBtns = newCard.querySelectorAll('.button_theme_like');
  for (const likeBtn of likeBtns) {
    likeBtn.addEventListener('click', addLike);
  }
  
  const deleteBtns = newCard.querySelector('.button_theme_delete');
  deleteBtns.addEventListener('click', deletePhoto);

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
  openPopup(editPopup);
}

const handleAddPopup = () => {
  openPopup(addPopup);
}

function handleImagePopup(link, name) {
  photoItem.src = link;
  photoTitle.textContent = name;
  openPopup(imagePopup);
}

editBtn.addEventListener('click', handleEditPopup);
addBtn.addEventListener('click', handleAddPopup);
for (const closeBtn of closeBtns) {
  closeBtn.addEventListener('click', closePopup);
}

function addLike(evt) {
  evt.target.classList.toggle('button_active');
 }

function deletePhoto(evt) {
  evt.target.closest('.photos__card').remove();
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup(editPopup);
}

formElement.addEventListener('submit', formSubmitHandler); 

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const newPhotoItem = linkInput.value;
  const newPhotoTitle = photoTitleInput.value;
  const newCard = createCard(newPhotoItem, newPhotoTitle);
  list.prepend(newCard);
  formAddElement.reset();
  closePopup(addPopup);
}

formAddElement.addEventListener('submit', formAddSubmitHandler);