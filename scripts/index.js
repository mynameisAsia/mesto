const editBtn = document.querySelector('.button__edit');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.button__close');
const likeBtns = document.querySelectorAll('.button__like');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__firstname');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

editBtn.addEventListener('click', function(event) {
    event.preventDefault();
    popUp.classList.add('popup_opened');
})

closeBtn.addEventListener('click', () => {
    popUp.classList.remove('popup_opened');
})


for (const likeBtn of likeBtns) {
    likeBtn.addEventListener('click', addLike);
}

function addLike(event) {
    event.target.classList.toggle('button__like_active');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    popUp.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 

