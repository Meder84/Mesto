import {initialCards} from './arr-elements.js';

  /*  Элементы popup_type_place   */
import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';

class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement; // вернём DOM-элемент карточки
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики
  
    // Добавим данные
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
  
    // Вернём элемент наружу
    return this._element;
  } 

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._handleButtonLikeClick();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    popupCloseButtonPlace.addEventListener('click', () => {
      this._handleClosePopup();
    });   
    
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });
  }

  _handleButtonLikeClick() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_black');
  }

  _handleOpenPopup() {
    popupImagePlace.src = this._link;
    popupImagePlace.alt = this._name;
    popupCaptionPlace.textContent = this._name;
    popupPlace.classList.add('popup_opened');
  }

  _handleClosePopup() {
    popupImagePlace.src = '';
    popupImagePlace.alt = '';
    popupCaptionPlace.textContent = '';
    popupPlace.classList.remove('popup_opened');
  }

  _handleDelete() {
    this._element.closest('.card').remove();
  }
}

// переберём весь исходный массив
initialCards.forEach((item) => {
  const card = new Card(item); // передаём объект аргументом
  const cardElement = card.generateCard();
  document.querySelector('.list').append(cardElement);
}); 


















// /*  элементы блока popup_type_add  */  
// const popupAdd = document.querySelector('.popup_type_add');
// const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add');
  
// /*  Form popup_type_add */
// const formElementAdd = popupAdd.querySelector('[name="popup-form-add"]');
// const nameInputAdd = formElementAdd.querySelector('[name="description-input"]');
// const imageInputAdd = formElementAdd.querySelector('[name="url-input"]');
// const buttonSubmitAdd = formElementAdd.querySelector('.popup__button');

//   /*  Элементы секции elements  */
// const cardList = document.querySelector('.list');
// const placeTemplate = document.querySelector('#place-template').content; 
// const listElement = placeTemplate.querySelector('.list__element');
// const listDeleteButton = placeTemplate.querySelector('.list__delete-button');
// const placeName = placeTemplate.querySelector('.list__title');
// const listLikeButton = placeTemplate.querySelector('.list__like-button')

// export class Card {
//   constructor(cardSelector) {
//     this._cardSelector = cardSelector;
//   }

//   _getTemplate() {
//     const cardElement = document
//       .querySelector(this._cardSelector)
//       .content
//       .querySelector('.list__element')
//       .cloneNode(true);

//     return cardElement;
//   }

//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();

//     this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
//     this._element.querySelector('.card__title').textContent = this._title;

//     return this._element;
//   }
  
//   _handleOpenPopup() {
//     popupImage.src = this._image;
//     popupElement.classList.add('popup_opened');
//   }

//   _handleClosePopup() {
//     popupImage.src = '';
//     popupElement.classList.remove('popup_opened');
//   }
// }