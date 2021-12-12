      /*  elements  */
import { 
    popupOpenButtonEdit, popupOpenButtonAdd,
    popupEdit, popupCloseButtonEdit,
    popupAdd, popupCloseButtonAdd,
    popupPlace, popupCloseButtonPlace,
    cardListSection  
  } from '../utils/constants.js';

      /*  objects   */
import { formValid, initialCards } from '../utils/objects.js';

      /*  formElements  */
  import { 
    formElementEdit,
    formElementAdd, nameInputAdd, imageInputAdd  
  } from '../utils/constants.js';
  
      /*  functions  */
  import { 
    openPopup, closePopup, editProfile,
    submitHandlerEdit, closePopupByClickOverlay,
    handleClosePopup
  } from '../utils/utils.js';
  
  
      /*  classes  */
  import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';


const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

// initialCards.forEach((item) => {
//   renderCard(item, cardListSection);
// }); 
// export function renderCard(elem, wrap) {
//   const card = new Card(elem); 
//   const cardElement = card.generateCard();
//   wrap.prepend(cardElement);
// }


const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }
},
cardListSection
)

cardList.renderItems();


// formElementAdd.addEventListener('submit', () => {
//   renderCard(
//     {
//       name: nameInputAdd.value, 
//       link: imageInputAdd.value,
//     },
//     cardListSection
//   );
//   closePopup(popupAdd);
//   formElementAdd.reset();
//   handleClosePopup();
// });

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







  
