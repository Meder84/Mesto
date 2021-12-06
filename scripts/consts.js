      /*  elements  */   
  export const profile = document.querySelector('.profile');  
  export const popupOpenButtonEdit = profile.querySelector('.profile__edit-button'); 
  export const popupOpenButtonAdd = profile.querySelector('.profile__add-button')
  export const profileName = profile.querySelector('.profile__name');
  export const profileJob = profile.querySelector('.profile__job');
  
  export const popupEdit = document.querySelector('.popup_type_edit');
  export const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button_edit');
  export const popupAdd = document.querySelector('.popup_type_add');
  export const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add');

  export const popupPlace = document.querySelector('.popup_type_place');
  export const popupContainerPlace = popupPlace.querySelector('.popup__container-place');
  export const popupCloseButtonPlace = popupPlace.querySelector('.popup__close-button_place');
  export const popupImagePlace = popupPlace.querySelector('.popup__image');
  export const popupCaptionPlace = popupPlace.querySelector('.popup__caption');

  export const list = document.querySelector('.list');
  export const placeTemplate = document.querySelector('#card-template').content; 
  export const cardElement = placeTemplate.querySelector('.card');
  export const cardDeleteButton = placeTemplate.querySelector('.card__delete-button');
  export const placeName = placeTemplate.querySelector('.card__title');
  export const cardLikeButton = placeTemplate.querySelector('.card__like-button')

      /*  formElements */
  export const formElementEdit = popupEdit.querySelector('.popup__form');
  export const nameInputEdit = formElementEdit.querySelector('.popup__input_name');
  export const jobInputEdit = formElementEdit.querySelector('.popup__input_job');
  
  export const formElementAdd = popupAdd.querySelector('.popup__form');
  export const nameInputAdd = formElementAdd.querySelector('.popup__input_description');
  export const imageInputAdd = formElementAdd.querySelector('.popup__input_url');
  export const buttonSubmitAdd = formElementAdd.querySelector('.popup__button');
