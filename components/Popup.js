export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    // this._handleEscClose = this._handleEscClose.bind(this)
  }
  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        const closeCurrentPopup = document.querySelector('.popup_opened');
        this.close(closeCurrentPopup);
      }
  }

  _closePopupByClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close(evt.target);
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button')
    .addEventListener('click', (evt) => this.close(evt));

    this._popup.addEventListener(
      'click', this._closePopupByClickOverlay(this)
    )    
  }
};