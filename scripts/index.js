const editBtn = document.querySelector('.button__edit');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.button__close');
let likeBtns = document.querySelectorAll('.button__like')

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
    event.target.classList.toggle('button__like_active')
}


let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__firstname');
let jobInput = document.querySelector('.popup__job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const valueName = nameInput.value;
    const valueJob = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

formElement.addEventListener('submit', formSubmitHandler); 

