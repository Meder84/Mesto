export class Api {
  constructor(data){
    this._url = data.url;
    this._headers = data.headers;
  }

  _errorHandler(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getAllCards() {
    return fetch(this._url, {
      headers: this._headers,
    }).then(this._errorHandler);   
  }

  addCard(data) {
    return fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then(this._errorHandler)
  }

  deleteCard(id) {
    return fetch(`${this._url}${id}`, {
        method: "DELETE",
        headers: this._headers,
    }).then(this._errorHandler);
  }

}