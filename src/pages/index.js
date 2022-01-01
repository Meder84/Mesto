/*  elements  */
import './index.css'
import { 
  popupOpenButtonEdit, 
  inputNameEdit, inputJobEdit,popupOpenButtonAdd,
  cardListSection
} from '../utils/constants.js';

      /*  objects   */
import { formValid, initialCards } from '../utils/objects.js';

      /*  formElements  */
  import { 
    formElementEdit,
    formElementAdd, 
  } from '../utils/constants.js';
  
      /*  classes  */
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js'; 
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';


const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_place');
popupWithImage.setEventListeners();

const userInfo = new UserInfo ({
  name: '.profile__name',
  job: '.profile__job'
})

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-33/users/me',
  headers: {
    Authentication: '04054c0a-e5f0-43e0-9b89-7862898c59bd',
    'Content-Type': 'application/json;charset=utf-8',
  }
})

// const api = new Api({
//   url: "https://api-test.pa7lux.ru/streams/",
//   headers: {
// 		//Authorisation: 'fdsfdfsfdsa',
//     "content-type": "application/json",
//   },
// });

api.getUser();
// .then((data) => {
//     console.log(data)
//   })

// const userApi = api.getUser();
// userApi.then((data) => {
//   console.log(data)
// })
// .catch((err) => alert(err));
// debugger;


function renderCard(data) {
  const card = new Card ({
    data: data,
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  }, cardListSection )

  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  data: initialCards,
  renderer: (data) => {
    cardList.addItem(renderCard(data));
  }
}, cardListSection );

cardList.renderItems();


const addFormValue = new PopupWithForm({
  popupElement: '.popup_type_add',
  handleFormSubmit: (data) => {
    cardList.addItem(renderCard(data))
    addFormValue.close();
  }
});
addFormValue.setEventListeners();


popupOpenButtonAdd.addEventListener('click', () => {
    addFormValue.open();
    formValidatorAdd.resetValidation();
  } 
);

const editFormValue = new PopupWithForm({
  popupElement: '.popup_type_edit',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    editFormValue.close();
  }
});
editFormValue.setEventListeners();


popupOpenButtonEdit.addEventListener('click', () => {
    editFormValue.open();
    const userInfoGet = userInfo.getUserInfo();

    inputNameEdit.value = userInfoGet.name; 
    inputJobEdit.value = userInfoGet.job;
    formValidatorEdit.resetValidation();
  }
);



  
