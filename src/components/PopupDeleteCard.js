import { Popup } from './Popup.js';

export class PopupDeleteCard extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._formElement = this._popupElement.querySelector('.popup__form');
  }

  handlerSubmit(data) {
    this.handlerSubmit = data;
  }

  setEventListeners() {
      super.setEventListeners();
      this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this.handlerSubmit();
    });
  }
}