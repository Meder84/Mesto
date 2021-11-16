  /*  элементы блока profile  */   
const profile = document.querySelector('.profile');  
const popupOpenButtonEdit = profile.querySelector('.profile__edit-button'); 
const popupOpenButtonAdd = profile.querySelector('.profile__add-button')
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__job');

  /*  элементы блока popup_type_edit  */  
const popupEdit = document.querySelector('.popup_type_edit');
const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button_edit');

  /*  Form popup_type_edit */
const formElementEdit = popupEdit.querySelector('[name="popup-form-edit"]');
const nameInputEdit = formElementEdit.querySelector('[name="name-input"]');
const jobInputEdit = formElementEdit.querySelector('[name="job-input"]');

  /*  Функциональность popup открытие и закрытие  */  
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

  /*  Функциональность элемента редактировать профиль*/
function editProfile() {
  nameInputEdit.value = profileName.textContent;
  jobInputEdit.value = profileJob.textContent;
  openPopup(popupEdit)
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

/*  элементы блока popup_type_add  */  
const popupAdd = document.querySelector('.popup_type_add');
const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add');
  
/*  Form popup_type_add */
const formElementAdd = popupAdd.querySelector('[name="popup-form-add"]');
const nameInputAdd = formElementAdd.querySelector('[name="description-input"]');
const imageInputAdd = formElementAdd.querySelector('[name="url-input"]');
const buttonSubmitAdd = formElementAdd.querySelector('.popup__button-submit');

  /*  Элементы секции elements  */
const list = document.querySelector('.list');
const placeTemplate = document.querySelector('#place-template').content; 
const listElement = placeTemplate.querySelector('.list__element');
const listDeleteButton = placeTemplate.querySelector('.list__delete-button');
const placeName = placeTemplate.querySelector('.list__title');
const listLikeButton = placeTemplate.querySelector('.list__like-button')

initialCards.forEach (data => {
  const newCard = createCard(data);
  list.append(newCard);
});

function createCard (evt) {   //Создать разметку. 
  const placeTempl = placeTemplate.querySelector('.list__element').cloneNode(true);
  const placeUrl = placeTempl.querySelector('.list__image');
  placeTempl.querySelector('.list__title').textContent = evt.name;  //Записать значения title.
  placeUrl.src = evt.link;  //Записать путь.
  placeUrl.alt = evt.name;  

    /*  Открыть изображения по ближе  */
  placeUrl.addEventListener('click', function(evt) {
    popupImagePlace.src = evt.target.src;
    popupCaptionPlace.textContent = evt.target.alt;
    openPopup(popupPlace);
  });

  setListeners(placeTempl); // Навесить события.

   /*  Кнопка лайк */
  placeTempl.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('list__like-button')){
      evt.target.classList.toggle('list__like-button_black');
    }
  });
  return placeTempl;
}

/*Элементы popup_type_place   */
const popupPlace = document.querySelector('.popup_type_place');
const popupContainerPlace = popupPlace.querySelector('.popup__container-place');
const popupCloseButtonPlace = popupPlace.querySelector('.popup__close-button_place');
const popupImagePlace = popupPlace.querySelector('.popup__image');
const popupCaptionPlace = popupPlace.querySelector('.popup__caption');

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

  closePopup(popupAdd);
}

formElementAdd.addEventListener('submit', submitHandlerAdd);
popupCloseButtonPlace.addEventListener('click', () => closePopup(popupPlace));

  /*  Удаление элементов  */
function handleDelete(evt) {
  evt.target.closest('.list__element').remove();
}

function setListeners(element) {
  element.querySelector('.list__delete-button').addEventListener('click', handleDelete)
}

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

  /*  Закрытие popup нажатием Esc   */
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
    }
}
  









