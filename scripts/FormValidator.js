export class FormValidator {
  constructor(formValid, targetFormValid) {

    this._formElement = formValid.formElement;
    this._inputElement = formValid.inputElement;
    this._submitButton = formValid.submitButton;
    this._buttonDesabled = formValid.buttonDesabled;
    this._errorClassVisible = formValid.errorClassVisible;
    this._targetFormValid = targetFormValid;
    this._inputError = formValid.inputError;
  }

  _showError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(this._inputError);

    inputElement.classList.add(this._errorClassVisible);
    errorElement.textContent = errorMessage;
  }

  _hideError(formElement, inputElement) {
    const errorElement = formElement.querySelector(this._inputError);

    inputElement.classList.remove(this._errorClassVisible);
    errorElement.textContent = '';
  }

  _checkInputValidity(formElement, inputElement){ 
    if (!inputElement.validity.valid) {
      this._showError(
        formElement,
        inputElement, 
        inputElement.validationMessage
      );
    } else {
      this._hideError(
        formElement,
        inputElement
      );
    }
  }

  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid;
    }); 
  }

  _toggleButtonState (inputList, submitButton) {
   if(this._hasInvalidInput(inputList)) {
     submitButton.classList.add(this._buttonDesabled);
     submitButton.disabled = true;
   } else {
     submitButton.classList.remove(this._buttonDesabled);
     submitButton.disabled = false;
   }  
  }

  _setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(this._inputElement));
    const submitButton = formElement.querySelector(this._submitButton);
    submitButton.disabled = true;

    this._toggleButtonState(inputList, submitButton);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

        this._checkInputValidity(formElement, inputElement);

        this._toggleButtonState(inputList, submitButton);
      });
    });
  } 

  enableValidation() {
    this._setEventListeners(this._targetFormValid);

    this._targetFormValid.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}


