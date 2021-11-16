const showError = (formSelector, inputSelector, errorMessage) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);

  inputSelector.classList.add('popup__error-visible');
  errorElement.textContent = errorMessage;
};

const hideError = (formSelector, inputSelector) => {
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);

  inputSelector.classList.remove('popup__error-visible');
  errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    showError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    hideError(formSelector, inputSelector);
  }
};

const setEventListeners = (formSelector) => {
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__button')
  
  toggleButtonState(inputList, submitButtonSelector)

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', function () {
      checkInputValidity(formSelector, inputSelector);
    });
  });
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formSelector);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-visible'
}); 

  /*   проверка наличие невалидного поля  */
function hasInvalidInput(inputList) {
  return inputList.some((inputSelector) => { 
  return !inputSelector.validity.valid;
}); 
}

function toggleButtonState (inputList, submitButtonSelector, inactiveButtonClass) {
  if(hasInvalidInput(inputList)) {
    submitButtonSelector.classList.add('popup__button_desabled');
  } else {
    submitButtonSelector.classList.remove('popup__button_desabled');
  }  
}
