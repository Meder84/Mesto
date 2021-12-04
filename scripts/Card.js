      /*  arr   */
import {initialCards} from './objects.js';

      /*  const   */
import {popupPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';
import {list} from './consts.js';

      /*  functions   */
import { closePopupEsc } from './utils.js';
import { openPopup } from './utils.js';


export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardLikeButton = data.cardLikeButton;
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
    openPopup(popupPlace);
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }
}



