import {API} from '../api';

export class Project{
  static inject() { return [API]; }
  constructor(API){
    this.API = API;
    this.note = {};
  }

  activate(params){
    return this.API.getNote(params.id).then(response => {
      this.note = response.content;
    });
  }

}
