export class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteIconClick, cardId}, cardSelector ) {
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._link = data.link;
    
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._cardId = cardId;
    
    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
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
    this._element.querySelector('.card__like-counter').textContent = this._likes.length;
  
    return this._element;
  } 

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
      this.handleButtonLikeClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._element);
    }); 
    
    // if (this._ownerId === this._cardId) {
      
    // }
    
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });
  }

  currentLike() {
    return this._currentLike;
  }

  handleButtonLikeClick(data) {
    this._currentLike = data.likes.filter((elem) => { 
      return elem._id === this._cardId
    }) 

    this._cardLikeButton.classList.toggle('card__like-button_black');
  }

  handleDelete() {
    this._element.remove();
    this._element = null;
  }
}



