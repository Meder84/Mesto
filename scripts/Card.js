      /*  arr   */
import {initialCards} from './arr-elements.js';

      /*  const   */
import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';
import {list, placeTemplate, cardElement, cardDeleteButton, placeName, cardLikeButton} from './consts.js';

      /*  functions   */
import { closePopupEsc } from './utils.js';


export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); 
  
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__title').textContent = this._name;
  
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

initialCards.forEach((item) => {
  const card = new Card(item); 
  const cardElement = card.generateCard();
  list.append(cardElement);
}); 

