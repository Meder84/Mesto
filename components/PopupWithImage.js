import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector('.popup__image')
    this._caption = this._popupSelector.querySelector('.popup__caption')
  }

  open(evt) {
    super.open();
    this._image.src = evt.link;
    this._image.alt = evt.name;
    this._caption.textContent = evt.name;
  }
}
