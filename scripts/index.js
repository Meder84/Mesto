  
      /*  elements  */
  import {profile, popupOpenButtonEdit, popupOpenButtonAdd} from './consts.js';
  import {popupEdit, popupCloseButtonEdit} from './consts.js';
  import {popupAdd, popupCloseButtonAdd} from './consts.js';
  import {popupPlace, popupCloseButtonPlace} from './consts.js';
  import {list} from './consts.js';
  
      /*  objects   */
import { formValid } from './arr-elements.js';

      /*  formElements  */
  import {formElementEdit} from './consts.js'; 
  import {formElementAdd, nameInputAdd, imageInputAdd, buttonSubmitAdd} from './consts.js';
  
      /*  functions  */
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
    buttonSubmitAdd.disabled = true;
    buttonSubmitAdd.classList.add('popup__button_desabled');
    closePopup(popupAdd);
  }
);

      /*  Навешивание обработчиков событий */  
formElementEdit.addEventListener('submit', submitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => editProfile());
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEdit));

popupCloseButtonPlace.addEventListener('click', () => closePopup(popupPlace));

popupOpenButtonAdd.addEventListener('click', () => openPopup(popupAdd));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAdd));

      /*  Закрытие попапа кликом на оверлей  */
const popupAll = [...document.querySelectorAll('.popup')];
popupAll.forEach((element) => {
  (element.addEventListener('click', closePopupByClickOverlay));
});



  
