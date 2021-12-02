const showError = (formSelector, inputSelector, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);

  inputSelector.classList.add('popup__error-visible');
  errorElement.textContent = errorMessage;
};

const hideError = (formSelector, inputSelector) => {
  // Находим элемент ошибки
  const errorElement = formSelector.querySelector(`#${inputSelector.id}-error`);

  inputSelector.classList.remove('popup__error-visible');
  errorElement.textContent = '';
};


// Функция checkInputValidity теперь принимает formSelector и inputSelector,
// а не берёт их из внешней области видимости
// Теперь функция isValid принимает сразу два параметра:
//  1.formSelector — html-элемент формы, в которой находится проверяемое поле ввода. 
// Он нужен для поиска элемента ошибки в форме.
//  2.inputSelector — проверяемое поле ввода.
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    // showError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {

    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideError(formSelector, inputSelector);
  }
};

// Пусть слушатель событий добавится всем полям ввода внутри формы. 
// Для этого создадим функцию setEventListeners, которая примет параметром 
// элемент формы и добавит её полям нужные обработчики:
const setEventListeners = (formSelector) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  const submitButtonSelector = formSelector.querySelector('.popup__button')
  submitButtonSelector.disabled = true;

  toggleButtonState(inputList, submitButtonSelector)

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputSelector) => {
    // каждому полю добавим обработчик события input
    inputSelector.addEventListener('input', function () {
      // Внутри колбэка вызовем checkInputValidity,
      // передав ей форму и проверяемый элемент
      checkInputValidity(formSelector, inputSelector);

      toggleButtonState(inputList, submitButtonSelector)
    });
  });
}  
//Функция setEventListeners готова. Она добавит обработчики сразу всем полям формы. 
// Осталось функцию вызвать.
//  Для этого нужно разобраться, как добавить обработчики всем формам.

// Теперь нужно найти все формы в DOM и вызвать для них функцию setEventListeners.
// Для единообразия поступим с формами аналогично полям внутри них. Объявим функцию 
// enableValidation, которая найдёт и переберёт все формы на странице:
const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

   // Переберём полученную коллекцию
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
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
// Функция enableValidation найдёт на странице и обработает все формы с классоми. 

  /*   проверка наличие невалидного поля  */
function hasInvalidInput(inputList) { // Функция принимает массив полей
  return inputList.some((inputSelector) => { // проходим по этому массиву методом some
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся фунцкция
    // hasInvalidInput вернёт true

    return !inputSelector.validity.valid;
}); 
}
// Функция hasInvalidInput только проверяет наличие невалидного поля и сигнализирует, 
// можно ли разблокировать кнопку сабмита. Но она ничего не делает с самой кнопкой «Отправить».

// Для стилизации нужна функция toggleButtonState. Именно она отключает и включает кнопку.
// Для этого функция hasInvalidInput проверяет валидность полей и возвращает true или false.
//  На их основе toggleButtonState меняет состояние кнопки:


// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
function toggleButtonState (inputList, submitButtonSelector, inactiveButtonClass) {
   // Если есть хотя бы один невалидный инпут
  if(hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    submitButtonSelector.classList.add('popup__button_desabled');
    submitButtonSelector.disabled = true;
  } else {
    // иначе сделай кнопку активной
    submitButtonSelector.classList.remove('popup__button_desabled');
    submitButtonSelector.disabled = false;
  }  
}

// Функция переключения кнопки готова. Осталось понять, где её вызвать.
// Нужно сверять состояние кнопки при каждом изменении полей формы. Поэтому toggleButtonState вызывают внутри обработчика события input.
// Это можно сделать после вызова функции checkInputValidity():
//
// const setEventListeners = (formElement) => {
//   какой-то код...

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement);

//       // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// }; 