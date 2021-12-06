export class FormValidator {
  constructor(formValid, targetFormValid) {

    this._formElement = formValid.formElement;
    this._inputElement = formValid.inputElement;
    this._submitButton = formValid.submitButton;
    this._buttonDisabled = formValid.buttonDisabled;
    this._errorClassVisible = formValid.errorClassVisible;
    this._inputError = formValid.inputError;
    
    this._targetFormValid = targetFormValid;

    this._inputList = Array.from(this._targetFormValid.querySelectorAll(this._inputElement));
    this._targetSubmitButton = this._targetFormValid.querySelector(this._submitButton);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._targetFormValid.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._errorClassVisible);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._targetFormValid.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(this._errorClassVisible);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement){ 
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement, 
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputList){
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid;
    }); 
  }

  _toggleButtonState () {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton(); 
    } else {
      this._targetSubmitButton.classList.remove(this._buttonDisabled);
      this._targetSubmitButton.disabled = false;
    }
  }

  _setEventListeners(){

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {

        this._checkInputValidity(inputElement);

        this._toggleButtonState();
      });
    });
  } 

  disableSubmitButton() {
    this._targetSubmitButton.classList.add(this._buttonDisabled)
    this._targetSubmitButton.disabled = true;
  }

  enableValidation() {
    this._setEventListeners();

    this._targetFormValid.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  }
}


