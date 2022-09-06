export const popupProfileEdit = document.querySelector('.popup_theme_edit');
export const popupAddPhoto = document.querySelector('.popup_theme_add');
export const imagePopup = document.querySelector('.popup_theme_image');
export const imagePopupSelector = document.querySelector('.popup__image');
export const imageTitleSelector = document.querySelector('.popup__image-title');
export const buttonEdit = document.querySelector('.button_theme_edit');
export const buttonAdd = document.querySelector('.button_theme_add');
export const buttonClose = document.querySelector('.button_theme_close');
export const formEditElement = document.querySelector('.popup__form-edit');
export const nameInput = document.querySelector('.popup__input_type_firstname');
export const jobInput = document.querySelector('.popup__input_type_job');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const formAddElement = document.querySelector('.popup__form-add')

export const initialCards = [
    {
      title: 'Атлантический океан',
      link: 'https://assets.website-files.com/5ce44e4e8d1c1fc85b84c18d/5f0388468934bb739f0536ba_best-life-jackets-for-sailing.jpg'
    },
    {
      title: 'Корабль Жанна дАрк',
      link: 'https://2015.f.a0z.ru/11/25-4022762-jeanne-darc.jpg'
    },
    {
      title: 'Антарктида',
      link: 'https://images.unsplash.com/photo-1486566584569-b9319dc74315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Амазонка',
      link: 'https://images.unsplash.com/photo-1599582964755-971498d2b4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      title: 'Нью-Йорк',
      link: 'https://images.unsplash.com/photo-1578297886235-c521966ea880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
      title: 'Сент-Андре-Де-Кюбзак',
      link: 'https://exp.cdn-hotels.com/hotels/31000000/30040000/30033400/30033304/71406e72_y.jpg?impolicy=fcrop&w=500&h=333&q=high'
    }
  ];

  export const validationObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.button_theme_save',
    inactiveButtonClass: 'button_invalid',
    errorInput: 'error_invisible',
  }