import {API} from './api';

export class Login{
  static inject() { return [API]; }
  constructor(API){
    this.api = API;
    this.username = '';
    this.password = '';
  }

  // activate(){
  //   // redirect if already logged in
  // }

  login(){
    this.api.getAuthToken(this.username, this.password);
  }

}
