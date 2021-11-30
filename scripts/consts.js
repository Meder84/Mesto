   /*  элементы блока profile  */   
  export const profile = document.querySelector('.profile');  
  export const popupOpenButtonEdit = profile.querySelector('.profile__edit-button'); 
  export const popupOpenButtonAdd = profile.querySelector('.profile__add-button')
  export const profileName = profile.querySelector('.profile__name');
  export const profileJob = profile.querySelector('.profile__job');
  
    /*  элементы блока popup_type_edit  */  
  export const popupEdit = document.querySelector('.popup_type_edit');
  export const popupCloseButtonEdit = popupEdit.querySelector('.popup__close-button_edit');
  
    /*  Form popup_type_edit */
  export const formElementEdit = popupEdit.querySelector('[name="popup-form-edit"]');
  export const nameInputEdit = formElementEdit.querySelector('[name="name-input"]');
  export const jobInputEdit = formElementEdit.querySelector('[name="job-input"]');
  
    /*  элементы блока popup_type_add  */  
  export const popupAdd = document.querySelector('.popup_type_add');
  export const popupCloseButtonAdd = popupAdd.querySelector('.popup__close-button_add');
    
   /*  Form popup_type_add */
  export const formElementAdd = popupAdd.querySelector('[name="popup-form-add"]');
  export const nameInputAdd = formElementAdd.querySelector('[name="description-input"]');
  export const imageInputAdd = formElementAdd.querySelector('[name="url-input"]');
  export const buttonSubmitAdd = formElementAdd.querySelector('.popup__button');

  
    /*  Элементы popup_type_place   */
export const popupPlace = document.querySelector('.popup_type_place');
export const popupContainerPlace = popupPlace.querySelector('.popup__container-place');
export const popupCloseButtonPlace = popupPlace.querySelector('.popup__close-button_place');
export const popupImagePlace = popupPlace.querySelector('.popup__image');
export const popupCaptionPlace = popupPlace.querySelector('.popup__caption');
  
    /*  Элементы секции elements  */
  export const list = document.querySelector('.list');
  export const placeTemplate = document.querySelector('#card-template').content; 
  export const listElement = placeTemplate.querySelector('.card');
  export const listDeleteButton = placeTemplate.querySelector('.card__delete-button');
  export const placeName = placeTemplate.querySelector('.card__title');
  export const listLikeButton = placeTemplate.querySelector('.card__like-button')