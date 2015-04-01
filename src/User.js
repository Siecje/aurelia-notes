export class User {

  constructor(){
    this.data = {};
  }

  getUser(){
    return this.data;
  }

  setUser(user){
    this.data = user;
  }

  setToken(token){
    this.data.token = token;
  }

}
