const editBtn = document.querySelector('.button_theme_edit');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.button_theme_close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_firstname');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

function openPopup() {
    popUp.classList.add('popup_opened');
}

function closePopup() {
    popUp.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 

