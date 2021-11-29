// import {initialCards} from './arr-elements';

class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
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
}


















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