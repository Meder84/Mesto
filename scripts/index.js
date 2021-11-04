// import { initialCards } from "./arr-elements.js";   
    
  /*  элементы блока profile  */   
const profile = document.querySelector('.profile');  
const popupOpenButtonEdit = profile.querySelector('.profile__edit-button'); 
const popupOpenButtonAdd = profile.querySelector('.profile__add-button')
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

  /*  элементы popup  */ 
const popup = document.querySelectorAll('.popup');

  /*  элементы блока popup_type_edit  */  
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button_edit');

  /*  Form popup_type_edit */
const formElementEdit = popupEdit.querySelector('[name="popup-form-edit"]');
const nameInputEdit = formElementEdit.querySelector('[name="name-input"]');
const jobInputEdit = formElementEdit.querySelector('[name="job-input"]');
  
  /*  Функциональность popup открытие и закрытие  */  
function openPopup(index) {
    popup[index].classList.add('popup_opened');
    nameInputEdit.value = profileName.textContent;
    jobInputEdit.value = profileJob.textContent;
}

function closePopup(index) {
  popup[index].classList.remove('popup_opened');
}

  /*  Функциональность элемента редактировать профиль (событие submit)  */
function SubmitHandlerEdit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInputEdit.value;
  profileJob.textContent = jobInputEdit.value;
  closePopup(0);
}

  /*  Навешивание обработчиков событий на элементов (элемент редактировать) */  
formElementEdit.addEventListener('submit', SubmitHandlerEdit);
popupOpenButtonEdit.addEventListener('click', () => openPopup(0));
popupCloseButtonEdit.addEventListener('click', () => closePopup(0));

/*  элементы блока popup_type_add  */  
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add');
  
/*  Form popup_type_add */
const formElementAdd = popupAdd.querySelector('[name="popup-form-add"]');
const nameInputAdd = formElementAdd.querySelector('[name="name-input"]');
const imageInputAdd = formElementAdd.querySelector('[name="image-input"]');
const addButtonSubmit = formElementAdd.querySelector('.popup__button-submit');

  /*  Элементы секции elements  */
const list = document.querySelector('.list');
const placeTemplate = document.querySelector('#place-template').content; 
const listElement = placeTemplate.querySelector('.list__element');
const listDeleteButton = placeTemplate.querySelector('.list__delete-button');
const placeName = placeTemplate.querySelector('.list__title');
const placeUrl = placeTemplate.querySelector('.list__image');
const listLikeButton = placeTemplate.querySelector('.list__like-button')

function main() {   
  initialCards.forEach((evt) => {
    renderItem(evt);
  })

  addButtonSubmit.addEventListener('click', SubmitHandlerAdd);
}

function renderItem(evt) {   //Создать разметку. 
  const placeTempl = placeTemplate.querySelector('.list__element').cloneNode(true);

  placeTempl.querySelector('.list__title').textContent = evt.name;  //Записать значения title.
  placeTempl.querySelector('.list__image').src = evt.link;  //Записать путь.

  setListeners(placeTempl); // Навесить события.

  list.prepend(placeTempl);

   /*  Кнопка лайк */
  placeTempl.querySelector('.list__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('list__like-button_black')
  })
}

function SubmitHandlerAdd (evt) {
  evt.preventDefault();
  const placeTemplName = nameInputAdd.value;
  const placeTemplUrl = imageInputAdd.value;

  renderItem(
    {
      name: placeTemplName,
      link: placeTemplUrl,
    }
  );
  
  closePopup(1);
}

  /*  Удаление элементов  */
function handleDelete(evt) {
  evt.target.closest('.list__element').remove();
}

function setListeners(element) {
  element.querySelector('.list__delete-button').addEventListener('click', handleDelete)
}

// listLikeButton.addEventListener('click', likeClick);
popupOpenButtonAdd.addEventListener('click', () => openPopup(1));
popupCloseButtonAdd.addEventListener('click', () => closePopup(1));

main();









