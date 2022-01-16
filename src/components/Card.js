export class Card {
  constructor(
    {data, handleCardClick, handleLikeClick, handleDeleteIconClick}, 
    cardSelector, userDataId, api) {
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._link = data.link;
    
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._userDataId = userDataId;
    
    this._cardSelector = cardSelector;
    this._api = api

    this._element = this._getTemplate();
    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._cardImage = this._element.querySelector('.card__image');
    this._cardDeleteButton = this._element.querySelector('.card__delete-button');
    this._cardLikeCounter = this._element.querySelector('.card__like-counter');
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners(); 
  
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardLikeCounter.textContent = this._likes.length;

    if( this._ownerId !== this._userDataId ) {
      this._cardDeleteButton.style.display = 'none'
    }

    if(this._likes.some((elem) => this._userDataId === elem._id)) {
      this._cardLikeButton.classList.add('card__like-button_black')
    }
    return this._element;
  } 

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._element);
    }); 
    
    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteIconClick();
    });
  }
  
  handleButtonLikeClick() {
    if(this._cardLikeButton.classList.contains('card__like-button_black')) {

      this._api.deleteLikeHandler(this._id).then((data) => {
        this._cardLikeButton.classList.remove('card__like-button_black');
        this._cardLikeCounter.textContent = data.likes.length
      })
      .catch((err) => alert(err));

    } else {
      this._api.setLikeHandler(this._id).then((data) => {
        this._cardLikeButton.classList.add('card__like-button_black');
        this._cardLikeCounter.textContent = data.likes.length
      })
      .catch((err) => alert(err));
    }
  }

  handleDelete() {
    this._element.remove();
    this._element = null;
  }
}



