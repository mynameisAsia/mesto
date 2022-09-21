export default class Api {
    constructor() {
      
    }

    getUserInfo() {
        return fetch ('https://nomoreparties.co/v1/cohort-50/users/me', {
            method: 'GET',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            }
        })
            .then ((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }
  
    getInitialCards() {
        return fetch ('https://mesto.nomoreparties.co/v1/cohort-50/cards', {
            method: 'GET',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1'
            }
        })
            .then ((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    updateUserInfo(data) {
        return fetch ('https://nomoreparties.co/v1/cohort-50/users/me', {
            method: 'PATCH',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then ((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    addNewCard(data) {
        return fetch ('https://mesto.nomoreparties.co/v1/cohort-50/cards', {
            method: 'POST',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then ((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    likeCards(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-50/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            }
        })
            .then ((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    removeLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-50/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }

            })
    }

    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-50/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }

            })
    }

    changeAvatar(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-50/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: 'd4f68056-59ea-430a-8f1d-8d7b59fc70d1',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }

            })
    }
    
  }