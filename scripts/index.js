    /* функциональность popup  */   
const profile = document.querySelector('.profile');
const popup = document.querySelector('.popup');
const popupOpenButtonElement =  profile.querySelector('.profile__edit-button');
const popupCloseButtonElement = popup.querySelector('.popup__close-button');

const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('[name="name-input"]');
const jobInput = formElement.querySelector('[name="job-input"]');

const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

const openPopup = function() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const closePopup = function() {
  popup.classList.remove('popup_opened');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);


    /*  Функциональность элемента редактирование  */

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}


formElement.addEventListener('submit', formSubmitHandler); 








// const editUserName = function() {
//   

// popupSubmitButton.addEventListener('click', editUserName);
// popupSubmitButton.addEventListener('click', editUserJob);

