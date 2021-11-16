enableValidation();

function enableValidation() { //включить проверку
	const forms = [...document.querySelectorAll('.popup__form')];

	forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
	const inputs = Array.from(form.querySelectorAll('.popup__input'));

	inputs.forEach(addListenersToInput);

	form.addEventListener('submit', handleFormSubmit);

    form.addEventListener('input', handleFormInput);
    toggleButton(form);
}

function handleFormSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const inputs = Array.from(form.querySelectorAll('.popup__input'));

    const data = inputs.reduce((acc, input) => {
        const key = input.name;
        const value = input.value;
        acc[key] = value;
        return acc;
    }, {});
    console.log(data);
}

function handleFormInput(evt) { //обрабатывать ввод формы
    toggleButton(evt.currentTarget);
}

function toggleButton(form) { //Кнопка-переключатель
    const button = form.querySelector('.popup__button');
    const isFormInvalid = !form.checkValidity();

    button.disabled = isFormInvalid;
    button.classList.toggle('popup__button_desabled', isFormInvalid);
}

function addListenersToInput(input) {
	input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(evt) { //обрабатывать проверку поля
	const element = evt.target;
	const errorContainer = document.querySelector(`#${element.id}-error`);
	element.setCustomValidity('');

	element.classList.toggle(
		'popup__input_state_invalid',
		!element.validity.valid
	);

	validateLength(element);
    validateRequired(element);
    validateURL(element);

	errorContainer.textContent = element.validationMessage;
}

function validateLength(element) {
	if (element.validity.tooShort || element.validity.tooLong) {
		element.setCustomValidity('Укажите длину от 3 до 10000 символов');
	}
}

function validateRequired(element) { //проверить обязательно
	if (element.validity.valueMissing) {
		element.setCustomValidity('Поле обязательное');
	}
}

function validateURL(element) {
	if (element.validity.typeMismatch && element.type === 'url') {
		element.setCustomValidity('Здесь должен быть url');
	}
}