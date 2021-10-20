    /* функциональность popup  */
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement =  document.querySelector('.profile__edit-button');

const closePopupByClickOverlay = function(event) {
  console.log(event.target, event.currentTarget);
  if(event.target === event.currentTarget) {
    closePopup();
  }
};

const openPopup = function() {
  popupElement.classList.add('popup_opened');
};

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);


  /*  Функциональность элемента редактирование  */
const nameInput = popupElement.querySelector('.popup__name-input');
const jobInput = popupElement.querySelector('.popup__job-input');
const submitButton = popupElement.querySelector('.popup__submit-button');

const profiel = document.querySelector('.profiel')
const profileName = profiel.querySelector('profile__name')
const profileJob = profiel.querySelector('profile__job')

const editUser = function() {
  
}
