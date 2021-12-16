import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;

    this._formElement = this._popupSelector.querySelector('.popup__form');
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
      evt.preventDefault(); // при сабмите формы отменим стандартное поведение
      
      // добавим вызов функции _formSubmit
      // передадим ей объект — результат работы _getInputValues
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  } 
}