      /*  elements  */
  import {popupOpenButtonEdit, popupOpenButtonAdd} from './consts.js';
  import {popupEdit, popupCloseButtonEdit} from './consts.js';
  import {popupAdd, popupCloseButtonAdd} from './consts.js';
  import {popupPlace, popupCloseButtonPlace} from './consts.js';
  import { list } from './consts.js';

      /*  objects   */
import { formValid } from './objects.js';
import { initialCards } from './objects.js';

      /*  formElements  */
  import {formElementEdit} from './consts.js'; 
  import {formElementAdd, nameInputAdd, imageInputAdd} from './consts.js';
  
      /*  functions  */
  import { openPopup, closePopup } from './functions.js';
  import {editProfile} from './functions.js';
  import {submitHandlerEdit} from './functions.js';
  import {closePopupByClickOverlay} from './functions.js';
  import { handleClosePopup } from './functions.js';
  import { renderCard } from './functions.js'; 
  
      /*  classes  */
  import { FormValidator } from './FormValidator.js'


const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

initialCards.forEach((item) => {
  renderCard(item, list);
}); 

formElementAdd.addEventListener('submit', () => {
  renderCard(
    {
      name: nameInputAdd.value, 
      link: imageInputAdd.value,
    },
    list
  );
  closePopup(popupAdd);
  formElementAdd.reset();
  handleClosePopup();
});

      /*  Навешивание обработчиков событий */  
formElementEdit.addEventListener('submit', submitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => {
    editProfile();
    formValidatorEdit.disableSubmitButton();
  }
);
popupCloseButtonEdit.addEventListener('click', () => {
    closePopup(popupEdit);
  }
);

popupCloseButtonPlace.addEventListener('click', () => {
    closePopup(popupPlace);
  }
);

popupOpenButtonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
    formValidatorAdd.disableSubmitButton();
  } 
);
popupCloseButtonAdd.addEventListener('click', () => {
    closePopup(popupAdd);
    formElementAdd.reset();
  } 
);

      /*  Закрытие попапа кликом на оверлей  */
const popupAll = [...document.querySelectorAll('.popup')];
popupAll.forEach((element) => {
  (element.addEventListener('click', closePopupByClickOverlay));
});





  
