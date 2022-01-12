import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupElement, handleFormSubmit}) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;

    this._formElement = this._popupElement.querySelector('.popup__form');    
    this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
  }


_getInputValues() {
  this._formValues = {};

  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });

  return this._formValues;
} 

  setEventListeners() {
    super.setEventListeners()

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  } 
}