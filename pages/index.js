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
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js'; 
// import { PopupWithFormTest } from '../components/PopupWithFormTest.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
// import { UserInfo } from '../components/UserInfo.js';

const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

const popupWithImage = new PopupWithImage(popupPlace);
popupWithImage.setEventListeners();


function renderCard(data) {
  const card = new Card ({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, cardListSection )
  return card;
}

const cardList = new Section({
  data: initialCards,
  renderer: (data) => {
    const card = renderCard(data);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement);
  }
}, cardListSection );

cardList.renderItems();



// создаём экземпляр формы
const addFormValue = new PopupWithForm({
  popupSelector: popupAdd,
  // объект, который мы передадим при вызове formSubmit
  // окажется на месте параметра formData
  formSubmit: (data) => {
    const card = renderCard(data);
    const cardElement = card.generateCard();
    
    cardList.addItem(cardElement)
    addFormValue.close();
  }
});
addFormValue.setEventListeners();


popupOpenButtonAdd.addEventListener('click', () => {
    addFormValue.open();
    formValidatorAdd.disableSubmitButton();
  } 
);



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


// popupCloseButtonAdd.addEventListener('click', () => {
//     closePopup(popupAdd);
//     formElementAdd.reset();
//   } 
// );




// const addFormValue = new PopupWithFormTest({
//   popupSelector: popupAdd,
//   // объект, который мы передадим при вызове formSubmit
//   // окажется на месте параметра formData
//   formSubmit: (formData) => {
//     const card = new Card(formData);
//     const cardElement = card.generateCard();

//     cardList.addItem(cardElement);
//   }
// });
// // addFormValue.setEventListeners();

// // инициализируем класс, ответственный
// // за добавление формы на страницу
// const formRenderer = new Section({
//   data: []
// }, cardListSection);

// // генерируем разметку формы
// const formElement = addFormValue.generateForm();

// // добавляем форму на страницу
// formRenderer.addItem(formElement); 


  
