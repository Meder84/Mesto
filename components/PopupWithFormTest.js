// import { Popup } from "./Popup.js";

 class PopupWithFormTest {
  constructor({popupSelector, formSubmit}) {
    this._popupSelector = popupSelector;
    this._formSubmit = formSubmit;

    // this._formElement = this._popupSelector.querySelector('.popup__form');
    // this._inputList = Array.from(this._formElement.querySelectorAll('.popup__input'));
  }

  _getTemplate() {
    const formElement = document
    querySelector(this._popupSelector)
    .content
    .querySelector('.popup__form')
    .cloneNode(true);

  return formElement;
} 

_getInputValues() {
  this._inputList = Array.from(this._element.querySelectorAll('.popup__input'));

  this._formValues = {};

  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
  });

  return this._formValues;
} 

  setEventListeners() {
    // super.setEventListeners()

    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault(); // при сабмите формы отменим стандартное поведение
      
      // добавим вызов функции _formSubmit
      // передадим ей объект — результат работы _getInputValues
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    // super.close();
    this._element.reset();
  } 

  
generateForm() {
    this._element = this._getTemplate(); // создаём элемент
    this._setEventListeners(); // добавляем обработчики
  
    return this._element; // возвращаем наружу
  } 
}