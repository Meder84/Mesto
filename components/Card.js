      /*  constants   */
import {popupPlace,  popupImagePlace, popupCaptionPlace} from '../utils/constants.js';

      /*  functions   */
import { openPopup } from '../utils/utils.js';


export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector('.card-template')
    .content
    .querySelector('.card')
    .cloneNode(true);
    this._cardLikeButton = cardElement.querySelector('.card__like-button');
    this._cardImage = cardElement.querySelector('.card__image');

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); 
  
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
  
    return this._element;
  } 

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleButtonLikeClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup();
    });   
    
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });
  }

  _handleButtonLikeClick() {
    this._cardLikeButton.classList.toggle('card__like-button_black');
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



