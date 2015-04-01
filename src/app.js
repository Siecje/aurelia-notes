import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: '',     moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: ':id',  moduleId: './notes/detail',       nav: true},
        { route: 'new',  moduleId: './notes/create', nav: true, title:'Create Project' },
        { route: 'login',  moduleId: './login', nav: true, title: 'Login'}
      ]);
    });
  }
}
