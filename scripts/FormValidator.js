export class FormValidator {
  constructor(data, targetInputSelector) {

    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submiButtonSelector = data.submiButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._errorShowClass = data.errorShowClass;
    this._controlSelectorClass = data.controlSelectorClass;
    this._targetInputSelector = targetInputSelector;
  }

  _showError(inputSelector, errorMessage) {
    const errorElement = inputSelector.closest(this._controlSelectorClass).querySelector(this._errorClass);
    inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    // errorElement.classList.add(this._errorShowClass);
  }

  _hideError(inputSelector) {
    const errorElement = inputSelector.closest(this._controlSelectorClass).querySelector(this._errorClass);
  
    inputSelector.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputSelector){ // Продолжение следует!
    if (!inputSelector.validity.valid) {
      this._showError(
        inputSelector, 
        inputSelector.validationMessage
      );
    } else {
      this._hideError(
        inputSelector
      );
    }
  }

  _setEventListeners(formSelector){
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const submitButtonSelector = formSelector.querySelector('.popup__button');
    submitButtonSelector.disabled = true;

    this._toggleButtonState(inputList, submitButtonSelector);

    inputList.forEach((inputSelector) => {
      inputSelector.addEventListener('input', function () {

        this._checkInputValidity(formSelector, inputSelector);

        this._toggleButtonState(inputList, submitButtonSelector);
      });
    });
  } 

  _hasInvalidInput(inputList){
    return inputList.some((inputSelector) => { 
      return !inputSelector.validity.valid;
    }); 
  }

  _toggleButtonState (inputList, submitButtonSelector) {
   if(this._hasInvalidInput(inputList)) {
     submitButtonSelector.classList.add('popup__button_desabled');
     submitButtonSelector.disabled = true;
   } else {
     submitButtonSelector.classList.remove('popup__button_desabled');
     submitButtonSelector.disabled = false;
   }  
 }
  
  enableValidation() {
    this._setEventListeners(formSelector);

    this._targetInputSelector.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}

