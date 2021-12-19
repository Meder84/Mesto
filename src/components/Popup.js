export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this)
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

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
};