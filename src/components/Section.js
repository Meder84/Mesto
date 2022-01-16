export class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  
  renderItems(items) {
    items.forEach(item => {
      this._renderer(item); 
    });
  }

  addItem(elem) {
    // const card = this._renderer(elem) // Спасибо за подсказку, времени мало было, не стал реализовать. Сделаю после сдачи работы.
    this._container.prepend(elem);
  }
}