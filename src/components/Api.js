export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
}

  _errorHandler(res) {
    if (res.ok) {
      return res.json()
    } 
    return Promise.reject(`Произошла ошибка: ${res.status}`)
  }

  getUser() {
    return fetch( this._url + 'users/me', {
      headers: this._headers,
    })
    .then(this._errorHandler);
  }
  setUser(data) {
    return fetch( this._url + 'users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._errorHandler)
  }
  getCards() {
    return fetch( this._url + 'cards', {
      headers: this._headers,
    })
    .then(this._errorHandler);
  }

  addNewCard(data) {
    return fetch( this._url + 'cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._errorHandler);
  }

  deleteCard(id) {
    return fetch( this._url + 'cards/' + id, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(this._getResponseData)
  }

  setLikeHandler(id) {
    return fetch( this._url + 'cards/likes/' + id, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._errorHandler);
  }

  deleteLikeHandler(id) {
    return fetch( this._url + 'cards/likes/' + id, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._errorHandler);
  }
}