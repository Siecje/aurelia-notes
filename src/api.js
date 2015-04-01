import {HttpClient} from 'aurelia-http-client';
import {User} from './User';

export class API {
  static inject() { return [HttpClient, User]; }

  constructor(http, User){
    this.http = http;
    this.http.configure(x => {
      x.withBaseUri('http://localhost:3000/api/');
      let token = localStorage.getItem('token');
      if(token){
        x.withHeader('X-Access-Token', token);
        // x.withHeader('Authorization', 'Token ' + token);
      }
      x.withHeader('Content-Type', 'application/json');
      x.withHeader('Accept', 'application/json');
    });
    this.User = User;
  }

  getAuthToken(username, password){
    this.http.post('login', {username: username, password: password})
      .then(response => {
        let token = JSON.parse(response.response).token;
        this.http.configure(x => {
          x.withHeader('X-Access-Token', token);
          x.withHeader('Authorization', 'Token ' + token);
        });
        localStorage.setItem('token', token);
      });
  }

  getAllProjects(){
    return this.http.get('projects');
  }

  getProject(id){
    return this.http.get(`projects/${id}`);
  }

  saveProject(project){
    if(project.id){
      return this.http.put('projects/' + project.id, project);
    }
    else{
      // TODO: use current user or use authenticated user of request
      project.creator = 1;
      return this.http.post('projects', project);
    }
  }

  getIssue(id){
    return this.http.get(`issues/${id}`);
  }

  saveComment(comment){
    if(comment.id){
      return this.http.put('comments/' + comment.id, comment);
    }
    else{
      // TODO: use current user or use authenticated user of request
      comment.user = 1;
      return this.http.post('comments', comment);
    }
  }
}
