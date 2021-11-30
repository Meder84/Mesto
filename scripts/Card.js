import {initialCards} from './arr-elements.js';

  /*  Элементы popup_type_place   */
import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';

/*  consts Элемента секции elements  */
import {list, placeTemplate, cardElement, cardDeleteButton, placeName, cardLikeButton} from './consts.js';

/*  Закрытие popup нажатием Esc   */
import { closePopupEsc } from './utils.js';


export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
    document.addEventListener('keydown', closePopupEsc);
    popupImagePlace.src = this._link;
    popupImagePlace.alt = this._name;
    popupCaptionPlace.textContent = this._name;
    popupPlace.classList.add('popup_opened');
  }

  _handleClosePopup() {
    document.removeEventListener('keydown', closePopupEsc);
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
  list.append(cardElement);
}); 

