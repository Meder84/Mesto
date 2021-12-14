      /*  elements  */
import { 
    popupOpenButtonEdit, popupOpenButtonAdd,
    popupEdit, popupCloseButtonEdit,
    popupAdd, popupCloseButtonAdd,
    popupPlace, popupContainerPlace, popupCloseButtonPlace,
    popupImagePlace, popupCaptionPlace,
    cardListSection , placeTemplate
  } from '../utils/constants.js';

      /*  objects   */
import { formValid, initialCards } from '../utils/objects.js';

      /*  formElements  */
  import { 
    formElementEdit,
    formElementAdd, nameInputAdd, imageInputAdd  
  } from '../utils/constants.js';
  
      /*  classes  */
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
// import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
// import { PopupWithForm } from '../components/PopupWithForm.js';
// import { UserInfo } from '../components/UserInfo.js';

const popupWithImage = new PopupWithImage(popupPlace);
popupWithImage.setEventListeners();

const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

const renderCard = (data) => {
  const card = new Card(data, placeTemplate, {
    handleCardClick: () => {
      popupWithImage.open(
        data.name,
        data.link
      );
    }
  });
  return card.generateCard();
}

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




    /*  functions  */
  // import { 
  //   openPopup, closePopup, editProfile,
  //   submitHandlerEdit, closePopupByClickOverlay,
  //   handleClosePopup
  // } from '../utils/utils.js';
  

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
// formElementEdit.addEventListener('submit', submitHandlerEdit);
// popupOpenButtonEdit.addEventListener('click', () => {
//     editProfile();
//     formValidatorEdit.disableSubmitButton();
//   }
// );
// popupCloseButtonEdit.addEventListener('click', () => {
//     closePopup(popupEdit);
//   }
// );

// popupCloseButtonPlace.addEventListener('click', () => {
//     closePopup(popupPlace);
//   }
// );

// popupOpenButtonAdd.addEventListener('click', () => {
//     openPopup(popupAdd);
//     formValidatorAdd.disableSubmitButton();
//   } 
// );
// popupCloseButtonAdd.addEventListener('click', () => {
//     closePopup(popupAdd);
//     formElementAdd.reset();
//   } 
// );







  
