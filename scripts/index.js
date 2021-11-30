  /*  consts элемента блока profile  */  
import { Card } from './Card.js';
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


  /*  Закрытие popup нажатием Esc   */
import {closePopupEsc} from './utils.js';

  /*  Функциональность popup открытие и закрытие  */  
import { openPopup, closePopup } from './utils.js';

  /*  Функциональность элемента редактировать профиль*/
import {editProfile} from './utils.js';

  /*  Получение значения из блока popup_type_edit  */
import {submitHandlerEdit} from './utils.js';

 /*  Закрытие попапа кликом на оверлей  */
 import {closePopupByClickOverlay} from './utils.js';

  /*  Навешивание обработчиков событий на элементов (элемент редактировать) */  
formElementEdit.addEventListener('submit', submitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => editProfile());
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEdit));

formElementAdd.addEventListener('submit', () => {
    const card = new Card( // передаём объект аргументом
      {
        name: nameInputAdd.value, 
        link: imageInputAdd.value,
      },
      '.card-template'
    ); 
    const cardElement = card.generateCard();
    list.prepend(cardElement);
    formElementAdd.reset();
    buttonSubmitAdd.disabled = true;
    buttonSubmitAdd.classList.add('popup__button_desabled');
    closePopup(popupAdd);
  }
);

popupCloseButtonPlace.addEventListener('click', () => closePopup(popupPlace));

popupOpenButtonAdd.addEventListener('click', () => openPopup(popupAdd));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAdd));


const popupAll = [...document.querySelectorAll('.popup')];
popupAll.forEach((element) => {
  (element.addEventListener('click', closePopupByClickOverlay));
});


  
