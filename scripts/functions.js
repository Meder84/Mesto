      /*  elements  */  
import {profileName, profileJob} from './consts.js';
import {popupEdit} from './consts.js';
import {popupPlace, popupImagePlace, popupCaptionPlace} from './consts.js'

      /*  formElements */
import {nameInputEdit, jobInputEdit} from './consts.js';
import { formElementAdd } from './consts.js';

      /*  classes  */
import { Card } from './Card.js';


export function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const closeCurrentPopup = document.querySelector('.popup_opened');
    closePopup(closeCurrentPopup);
    formElementAdd.reset();
  }
}

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

export function closePopupByClickOverlay (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}
  
export function handleClosePopup() {
  document.removeEventListener('keydown', closePopupEsc);
  popupImagePlace.src = '';
  popupImagePlace.alt = '';
  popupCaptionPlace.textContent = '';
  popupPlace.classList.remove('popup_opened');
}

export function renderCard(elem, wrap) {
  const card = new Card(elem); 
  const cardElement = card.generateCard();
  wrap.prepend(cardElement);
}