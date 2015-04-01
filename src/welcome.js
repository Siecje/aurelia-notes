import {API} from './api';

export class Welcome{
  static inject() { return [API]; }
  constructor(API){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.API = API;
    this.projects = [];
  }

  activate(){
    return this.API.getAllProjects().then(response => {
      this.projects = response.content;
    });
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  welcome(){
    alert(`Welcome, ${this.fullName}!`);
  }

}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
