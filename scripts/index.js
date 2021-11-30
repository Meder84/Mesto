  /*  consts элемента блока profile  */  
import {profile, popupOpenButtonEdit, popupOpenButtonAdd, profileName, profileJob} from './consts.js';
  
  /*  consts элемента блока popup_type_edit  */  
import {popupEdit, popupCloseButtonEdit} from './consts.js';

  /*  consts Form popup_type_edit */
import {formElementEdit, nameInputEdit, jobInputEdit} from './consts.js';

  /*  consts элемента блока popup_type_add  */  
import {popupAdd, popupCloseButtonAdd} from './consts.js';

  /*  consts Form popup_type_add */
import {formElementAdd, nameInputAdd, imageInputAdd, buttonSubmitAdd} from './consts.js';

    /*  Элементы popup_type_place   */
import {popupPlace, popupContainerPlace, popupCloseButtonPlace, popupImagePlace, popupCaptionPlace} from './consts.js';

  /*  consts Элемента секции elements  */
import {list, placeTemplate, listElement, listDeleteButton, placeName, listLikeButton} from './consts.js';


  /*  Закрытие popup нажатием Esc   */
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const closeCurrentPopup = document.querySelector('.popup_opened');
    closePopup(closeCurrentPopup);
    }
}

  /*  Функциональность popup открытие и закрытие  */  
function openPopup(popup) {
  document.addEventListener('keydown', closePopupEsc);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupEsc);
  popup.classList.remove('popup_opened');
}

  /*  Функциональность элемента редактировать профиль*/
function editProfile() {
  nameInputEdit.value = profileName.textContent;
  jobInputEdit.value = profileJob.textContent;
  openPopup(popupEdit);
}

  /*  Получение значения из блока popup_type_edit  */
function submitHandlerEdit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInputEdit.value;
  profileJob.textContent = jobInputEdit.value;
  closePopup(popupEdit);
}

  /*  Навешивание обработчиков событий на элементов (элемент редактировать) */  
formElementEdit.addEventListener('submit', submitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => editProfile());
popupCloseButtonEdit.addEventListener('click', () => closePopup(popupEdit));


// initialCards.forEach (data => {
//   const newCard = createCard(data);
//   list.append(newCard);
// });

// function createCard (evt) {   //Создать разметку. 
//   const placeTempl = placeTemplate.querySelector('.card').cloneNode(true);
//   const placeUrl = placeTempl.querySelector('.card__image');
//   placeTempl.querySelector('.card__title').textContent = evt.name;  //Записать значения title.
//   placeUrl.src = evt.link;  //Записать путь.
//   placeUrl.alt = evt.name;  

//     /*  Открыть изображения по ближе  */
//   placeUrl.addEventListener('click', function(evt) {
//     popupImagePlace.src = evt.target.src;
//     popupImagePlace.alt = evt.target.alt;
//     popupCaptionPlace.textContent = evt.target.alt;
//     openPopup(popupPlace);
//   });

//   setListeners(placeTempl); // Навесить события.

//    /*  Кнопка лайк */
//   placeTempl.addEventListener('click', function(evt) {
//     if(evt.target.classList.contains('card__like-button')){
//       evt.target.classList.toggle('card__like-button_black');
//     }
//   });
//   return placeTempl;
// }

  /*  Получение значения из блока popup_type_add  */
function submitHandlerAdd (evt) {
  evt.preventDefault();
  const placeTemplName = nameInputAdd.value;
  const placeTemplUrl = imageInputAdd.value;

  list.prepend(createCard(
    {
      name: placeTemplName,
      link: placeTemplUrl,
    }
  ));

  formElementAdd.reset();
  buttonSubmitAdd.disabled = true;
  buttonSubmitAdd.classList.add('popup__button_desabled');

  closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', submitHandlerAdd);
popupCloseButtonPlace.addEventListener('click', () => closePopup(popupPlace));

//   /*  Удаление элементов  */
// function handleDelete(evt) {
//   evt.target.closest('.card').remove();
// }

// function setListeners(element) {
//   element.querySelector('.card__delete-button').addEventListener('click', handleDelete)
// }

popupOpenButtonAdd.addEventListener('click', () => openPopup(popupAdd));
popupCloseButtonAdd.addEventListener('click', () => closePopup(popupAdd));

  /*  Закрытие попапа кликом на оверлей  */
function closePopupByClickOverlay (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

const popupAll = [...document.querySelectorAll('.popup')];
popupAll.forEach((element) => {
  (element.addEventListener('click', closePopupByClickOverlay));
});


  









