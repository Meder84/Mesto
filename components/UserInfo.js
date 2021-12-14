export class UserInfo {
  constructor(data) {
    this._nameSelector = data.nameSelector;
    this._jobSelector = data.jobSelector;
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