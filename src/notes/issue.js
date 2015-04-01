import {API} from '../api';

export class CreateProject{
  static inject() { return [API]; }

  constructor(API){
    this.API = API;
    this.comment = {};
    this.issue = {};
    this.projectId = '';
  }

  activate(params){
    this.projectId = params.projectId;
    this.API.getIssue(params.issueId).then(response => {
      this.issue = response.content;
      this.comment.issue = this.issue.id;
    });
  }

  createComment(){
    this.API.saveComment(this.comment).then(response => {
      this.issue.comments.push(JSON.parse(response.response));
      this.comment = {issue: this.issue.id, text: ''};
    });
  }

}
