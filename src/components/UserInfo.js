export class UserInfo {
  constructor(data) {
    this._nameSelector = data.name;
    this._jobSelector = data.job;
  }

  getUserInfo() {
    const userInfo = {
      name: this._nameSelector.textContent,
      job: this._jobSelector.textContent
    }
    return userInfo;
  }

  setUserInfo(evt) {
    this._nameSelector.textContent = evt.name;
    this._jobSelector.textContent = evt.job;
  }
}