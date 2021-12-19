const altai = new URL('../images/element-altai.jpg', import.meta.url);
const baikal = new URL('../images/element-baikal.jpg', import.meta.url);
const bonifacio = new URL('../images/element-bonifacio.jpg', import.meta.url);
const barelia = new URL('../images/element-karelia.jpg', import.meta.url);
const kolsky = new URL('../images/element-kolsky.jpg', import.meta.url);
const kosa = new URL('../images/element-kosa.jpg', import.meta.url);

export const initialCards = [
  { name: 'Алтай', link: altai },
  { name: 'Байкал', link: baikal },
  { name: 'Бонифачо', link: bonifacio },
  { name: 'Барелия', link: barelia },
  { name: 'Кольский', link: kolsky },
  { name: 'Коса', link: kosa }
]

    /*  objects  */
export const formValid = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  submitButton: '.popup__button', 
  buttonDisabled: 'popup__button_disabled',
  errorClassVisible: 'popup__error-visible'
}
