    /* функциональность popup  */
const popup = document.querySelector('.popup');
const popupCloseButtonElement = popup.querySelector('.popup__close-button');
const popupOpenButtonElement =  document.querySelector('.profile__edit-button');
const popupSubmitButton = popup.querySelector('.popup__submit-button')

const openPopup = function() {
  popup.classList.add('popup_opened');
};

const closePopup = function() {
  popup.classList.remove('popup_opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSubmitButton.addEventListener('click', closePopup);


  /*  Функциональность элемента редактирование  */
const nameInput = popup.querySelector('.popup__name-input');
const jobInput = popup.querySelector('.popup__job-input');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const editUserName = function() {
  if(nameInput.value === '' || nameInput.value === Number) {
    return;
  } else {
    profileName.textContent = nameInput.value;
  }
}

const editUserJob = function() {
  if(jobInput.value === '' || jobInput.value === Number) {
    return;
  } else {
    profileJob.textContent = jobInput.value;
  }
}

popupSubmitButton.addEventListener('click', editUserName);
popupSubmitButton.addEventListener('click', editUserJob);

