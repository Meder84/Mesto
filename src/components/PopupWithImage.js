import { Popup } from "./Popup.js";


export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._image = this._popupElement.querySelector('.popup__image')
    this._caption = this._popupElement.querySelector('.popup__caption')
  }

  open(data) {
    super.open();
    this._image.src = data.link;
    this._image.alt = data.name;
    this._caption.textContent = data.name;
  }
}
