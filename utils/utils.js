      /*  elements  */  
import {profileName, profileJob} from './constants.js';
import {popupEdit} from './constants.js';
import {popupPlace, popupImagePlace, popupCaptionPlace} from './constants.js'

      /*  formElements */
import {nameInputEdit, jobInputEdit} from './constants.js';
import { formElementAdd } from './constants.js';

      /*  classes  */
import { Card } from '../components/Card.js';



export function openPopup(popup) {
  document.addEventListener('keydown', closePopupEsc);
  popup.classList.add('popup_opened');
}
  
export function closePopup(popup) {
  document.removeEventListener('keydown', closePopupEsc);
  popup.classList.remove('popup_opened');
}
  
export function editProfile() {
  nameInputEdit.value = profileName.textContent;
  jobInputEdit.value = profileJob.textContent;
  openPopup(popupEdit);
}
  
export function submitHandlerEdit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInputEdit.value;
  profileJob.textContent = jobInputEdit.value;
  closePopup(popupEdit);
}


/*  Закрытие попапа кликом на оверлей  */

// export function closePopupByClickOverlay (evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.target);
//   }
// }
// const popupAll = [...document.querySelectorAll('.popup')];
// popupAll.forEach((element) => {
//   (element.addEventListener('click', closePopupByClickOverlay));
// });
  
export function handleClosePopup() {
  document.removeEventListener('keydown', closePopupEsc);
  popupImagePlace.src = '';
  popupImagePlace.alt = '';
  popupCaptionPlace.textContent = '';
  popupPlace.classList.remove('popup_opened');
}

