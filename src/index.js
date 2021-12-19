/*  elements  */
import './pages/index.css'
import { 
  profileJob, profileName,
  popupEdit, popupOpenButtonEdit, 
  inputNameEdit, inputJobEdit,
  popupAdd, popupOpenButtonAdd,
  popupPlace,
  cardListSection
} from './utils/constants.js';

      /*  objects   */
import { formValid, initialCards } from './utils/objects.js';

      /*  formElements  */
  import { 
    formElementEdit,
    formElementAdd, 
  } from './utils/constants.js';
  
      /*  classes  */
import { FormValidator } from './components/FormValidator.js'
import { Section } from './components/Section.js';
import { Card } from './components/Card.js';
import { PopupWithImage } from './components/PopupWithImage.js'; 
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';


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


const userInfo = new UserInfo ({
  name: profileName,
  job: profileJob,
})



const addFormValue = new PopupWithForm({
  popupSelector: popupAdd,
  handleFormSubmit: (data) => {
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

const editFormValue = new PopupWithForm({
  popupSelector: popupEdit,
  handleFormSubmit: (data) => {
    const userInfo = new UserInfo ({
      name: profileName,
      job: profileJob,
    })

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
    formValidatorEdit.disableSubmitButton();
  }
);



  
