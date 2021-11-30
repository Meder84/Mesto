/*  consts элемента блока profile  */  
import {profile, popupOpenButtonEdit, popupOpenButtonAdd, profileName, profileJob} from './consts.js';

/*  consts элемента блока popup_type_edit  */  
import {popupEdit, popupCloseButtonEdit} from './consts.js';

  /*  consts Form popup_type_edit */
import {formElementEdit, nameInputEdit, jobInputEdit} from './consts.js';

  /*  consts элемента блока popup_type_add  */  
import {popupAdd, popupCloseButtonAdd} from './consts.js';

  /*  consts Form popup_type_add */
import {formElementAdd, nameInputAdd, imageInputAdd, buttonSubmitAdd} from './consts.js';

    /*  Элементы popup_type_place   */
import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';

  /*  consts Элемента секции elements  */
import {list, placeTemplate, cardElement, cardDeleteButton, placeName, cardLikeButton} from './consts.js';

import {Card} from './Card.js';  

  /*  Закрытие popup нажатием Esc   */
export function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      const closeCurrentPopup = document.querySelector('.popup_opened');
      closePopup(closeCurrentPopup);
      }
  }

    /*  Функциональность popup открытие и закрытие  */  
export function openPopup(popup) {
    document.addEventListener('keydown', closePopupEsc);
    popup.classList.add('popup_opened');
  }
  
export function closePopup(popup) {
    document.removeEventListener('keydown', closePopupEsc);
    popup.classList.remove('popup_opened');
  }
  
    /*  Функциональность элемента редактировать профиль*/
export function editProfile() {
    nameInputEdit.value = profileName.textContent;
    jobInputEdit.value = profileJob.textContent;
    openPopup(popupEdit);
  }
  
    /*  Получение значения из блока popup_type_edit  */
export function submitHandlerEdit (evt) {
    evt.preventDefault();
  
    profileName.textContent = nameInputEdit.value;
    profileJob.textContent = jobInputEdit.value;
    closePopup(popupEdit);
  }

    /*  Получение значения из блока popup_type_add  */
export function submitHandlerAdd (evt) {
  evt.preventDefault();
  const placeTemplName = nameInputAdd.value;
  const placeTemplUrl = imageInputAdd.value;

  list.prepend(new Card(
      {
        name: placeTemplName,
        link: placeTemplUrl,
      }
    )
  );

  // formElementAdd.reset();
  

  // closePopup(popupAdd);
}

   /*  Закрытие попапа кликом на оверлей  */
export function closePopupByClickOverlay (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }
  
