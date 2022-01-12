/*  elements  */
import './index.css'
import { 
  popupOpenButtonEdit, 
  inputNameEdit, inputJobEdit,popupOpenButtonAdd,
  cardListSection
} from '../utils/constants.js';

      /*  objects   */
import { formValid } from '../utils/objects.js';

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
  about: '.profile__job',
  avatar: '.profile__avatar'
})

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    authorization: '04054c0a-e5f0-43e0-9b89-7862898c59bd',
    'Content-Type': 'application/json;charset=utf-8',
  }
})

let cardList = '';

function cardListHandler (item) {
  cardList = new Section({
    data: item,
    renderer: (item) => {
      cardList.addItem(renderCard(item));
    }
  }, cardListSection );
}

function renderCard(data) {
  const card = new Card ({
    data: data,
    handleCardClick: (card) => {
      // popupWithImage.open(data);
    },

    handleLikeClick: () => {

      if(card.currentLike()) {
        api.deleteLikeHandler(data._id).then((data) => {
          card.handleButtonLikeClick(data);
        })
      } else {
        api.setLikeHandler(data._id).then((data) => {
          card.handleButtonLikeClick(data);
        })
        .catch((err) => alert(err));
      }
    },

    handleDeleteIconClick: () => {
      
    }
  }, '.card-template')

  const cardElement = card.generateCard();
  return cardElement;
}

const userApi = api.getUser()
.then((data) => {  
  userInfo.setUserInfo(data);
})
.catch((err) => alert(err));


const cardsApi = api.getCards()
.then((data) => {
  cardListHandler(data);
  cardList.renderItems(data);
})
.catch((err) => alert(err));


const addFormValue = new PopupWithForm({
  popupElement: '.popup_type_add',
  handleFormSubmit: (data) => {
    api.addNewCard(data)
      .then((data) => {        
        cardListHandler(data);
        addFormValue.close();
      })
      .catch((err) => alert(err));  

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
    api.setUser(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        editFormValue.close();
      })
      .catch((err) => alert(err));  

    editFormValue.close();
  }
});
editFormValue.setEventListeners();


popupOpenButtonEdit.addEventListener('click', () => {
    editFormValue.open();
    const userInfoGet = userInfo.getUserInfo();

    inputNameEdit.value = userInfoGet.name; 
    inputJobEdit.value = userInfoGet.about;
    formValidatorEdit.resetValidation();
  }
);



  
