    /*  элементы блока profile  */   
const profile = document.querySelector('.profile');
const popupOpenButtonEdit = profile.querySelector('.profile__edit-button');
const popupOpenButtonAdd = profile.querySelector('.profile__add-button')
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const popupEdit = document.querySelector('.popup_edit');
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button_edit');

const popupAdd = document.querySelector('.popup_add');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add')

      /*  Form popup_edit */
const formElement = popupEdit.querySelector('[name="popup-form-edit"]');
const nameInput = formElement.querySelector('[name="name-input"]');
const jobInput = formElement.querySelector('[name="job-input"]');



    /*  Функциональность элемента редактировать профиль  */  
const openPopupEdit = function() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

popupOpenButtonEdit.addEventListener('click', openPopupEdit);

const closePopupEdit = function() {
  popupEdit.classList.remove('popup_opened');
}

popupCloseButtonEdit.addEventListener('click', closePopupEdit);

    /*  Функциональность элемента редактировать профиль (событие submit)  */
function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopupEdit();
}
    
    formElement.addEventListener('submit', formSubmitHandler); 

    /*  Функциональность элемента добавить  */  
const openPopupAdd = function() {
  popupAdd.classList.add('popup_opened');
}

const closePopupAdd = function() {
  popupAdd.classList.remove('popup_opened');
}

popupOpenButtonAdd.addEventListener('click', openPopupAdd);
popupCloseButtonAdd.addEventListener('click', closePopupAdd);


    /*  Карточки  */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 





