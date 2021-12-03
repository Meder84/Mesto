  
        /*  elements  */
  import {profile, popupOpenButtonEdit, popupOpenButtonAdd, profileName, profileJob} from './consts.js';
  import {popupEdit, popupCloseButtonEdit} from './consts.js';
  import {popupAdd, popupCloseButtonAdd} from './consts.js';
  import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';
  import {list, placeTemplate, cardElement, cardDeleteButton, placeName, cardLikeButton} from './consts.js';
  
        /*  objects   */
import { formValid } from './consts.js';

        /*  forms  */
  import {formElementEdit, nameInputEdit, jobInputEdit} from './consts.js'; 
  import {formElementAdd, nameInputAdd, imageInputAdd, buttonSubmitAdd} from './consts.js';
  
      /*  functions  */
  import {closePopupEsc} from './utils.js';
  import { openPopup, closePopup } from './utils.js';
  import {editProfile} from './utils.js';
  import {submitHandlerEdit} from './utils.js';
  import {closePopupByClickOverlay} from './utils.js';
  
      /*  classes  */
  import { Card } from './Card.js';
  import { FormValidator } from './FormValidator.js'


const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();


  /*  Навешивание обработчиков событий на элементов (элемент редактировать) */  
formElementEdit.addEventListener('submit', submitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => editProfile());
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEdit));

formElementAdd.addEventListener('submit', () => {
    const card = new Card( 
      {
        name: nameInputAdd.value, 
        link: imageInputAdd.value,
      },
      '.card-template'
    ); 
    const cardElement = card.generateCard();
    list.prepend(cardElement);
    formElementAdd.reset();
    // buttonSubmitAdd.disabled = true;
    // buttonSubmitAdd.classList.add('popup__button_desabled');
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



  
