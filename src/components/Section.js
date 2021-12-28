export class Section {
  constructor({data, renderer, api}, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;
    this._api = api;
    this._container = containerSelector;
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item); 
    });
  }

  addItem(elem) {
    this._container.prepend(elem);
  }
}