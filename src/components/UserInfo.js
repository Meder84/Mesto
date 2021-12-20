export class UserInfo {
  constructor(data) {
    this._profileName = document.querySelector(data.name);
    this._profileJob = document.querySelector(data.job);
  } 

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    }
    return userInfo;
  }

  setUserInfo(evt) {
    this._profileName.textContent = evt.name;
    this._profileJob.textContent = evt.job;
  }
}