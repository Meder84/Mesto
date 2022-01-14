/*  elements  */
import './index.css'
import { 
  popupOpenButtonEdit, 
  inputNameEdit, inputJobEdit,popupOpenButtonAdd,
  cardListSection, popupOpenButtonAvatar
} from '../utils/constants.js';

      /*  objects   */
import { formValid } from '../utils/objects.js';

      /*  formElements  */
  import { 
    formElementEdit,
    formElementAdd,
    formElementAvatar, 
  } from '../utils/constants.js';
  
      /*  classes  */
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js'; 
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithDelete } from '../components/PopupWithDelete.js';


const formValidatorAdd = new FormValidator(formValid, formElementAdd);
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(formValid, formElementEdit);
formValidatorEdit.enableValidation();

const formValidatorAvatar = new FormValidator(formValid, formElementAvatar);
formValidatorAvatar.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_place');
popupWithImage.setEventListeners();

const popupWithDelete = new PopupWithDelete('.popup_type_delete');
popupWithDelete.setEventListeners();


const userInfo = new UserInfo ({
  name: '.profile__name',
  about: '.profile__job',
  avatar: '.profile__avatar'
})

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33/',
  headers: {
    authorization: '04054c0a-e5f0-43e0-9b89-7862898c59bd',
    'Content-Type': 'application/json;charset=utf-8',
  }
})


let cardList = '';
let cardId = '';

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
    handleCardClick: () => {
      popupWithImage.open(data);
    },

    handleLikeClick: () => {

      if(card.currentLike()) {
        api.deleteLikeHandler(data._id).then((data) => {
          card.handleButtonLikeClick(data);
        })
        .catch((err) => alert(err));

      } else {
        api.setLikeHandler(data._id).then((data) => {
          card.handleButtonLikeClick(data);
        })
        .catch((err) => alert(err));
      }
    },

    handleDeleteIconClick: () => {
      popupWithDelete.handlerSubmit(() => {
        api.deleteCard(data._id).then((data) => {
          card.handleDelete(data);
          
          popupWithDelete.close();
        })
        .catch((err) => alert(err));
      })
      popupWithDelete.open();
    }, cardId
    
  }, '.card-template')

  const cardElement = card.generateCard();
  return cardElement;
}


Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cards]) => {

    userInfo.setUserInfo(userData);
    cardId = userData._id;

    cardListHandler(cards);
    cardList.renderItems(cards);
  })
  .catch((err) => alert(err));


const addFormValue = new PopupWithForm({
  popupElement: '.popup_type_add',
  handleFormSubmit: (data) => {
    addFormValue.loadingHandler(true)

    api.addNewCard(data).then((data) => { 
        cardList.addItem(data)
        addFormValue.close();
      })
      .catch((err) => alert(err))
      .finally(() => {
        addFormValue.loadingHandler(false)
      }) 

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
    editFormValue.loadingHandler(true)
    
    api.setUser(data).then((data) => {
        userInfo.setUserInfo(data);

        editFormValue.close();
      })
      .catch((err) => alert(err))
      .finally(() => {
        editFormValue.loadingHandler(false)
      }) 
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


const avatarFormValue = new PopupWithForm ({
  popupElement: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    avatarFormValue.loadingHandler(true);

    api.userAvatarUpdate(data).then((data) => {      
      userInfo.userAvatarUpdate(data)

      avatarFormValue.close();
    })
    .catch((err) => alert(err))
    .finally(() => {
      avatarFormValue.loadingHandler(false);
    })
  }
})

avatarFormValue.setEventListeners()

popupOpenButtonAvatar.addEventListener('click', () => {
  avatarFormValue.open();
  formValidatorAvatar.resetValidation();
})



  
