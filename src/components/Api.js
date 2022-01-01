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
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers,
    }).then(this._errorHandler);
  }
}