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

   /*  Закрытие попапа кликом на оверлей  */
export function closePopupByClickOverlay (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }
  
