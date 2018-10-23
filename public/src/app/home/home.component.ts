import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  user = this._httpService.user

  post = {
    post: "",
    name: ""
  }

  posts = []

  newComment = {
    post_id: "",
    comment: "",
    name: ""
  }
  commentFlash = null

  ngOnInit() {
    this.getPosts()
  }

  logout(){
    this._httpService.logout()
    this.user = this._httpService.user
  }

  send(){
    let observable = this._httpService.post(this.post)
    observable.subscribe(data => {
      //console.log(data)
      this.getPosts()
    })
  }

  getPosts(){
    let observable = this._httpService.getPosts()
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.posts = data["data"]
        for(let post of this.posts){
          post['like_count'] = post['likes'].length
        }
      }
    })
  }

  open(id){
    this.newComment = {
      post_id: id,
      comment: "",
      name: ""
    }
  }

  comment(){
    let observable = this._httpService.comment(this.newComment)
    observable.subscribe(data => {
      //console.log(data)
      if(data['message'] == "Success"){
        this.getPosts()
        this.newComment = {
          post_id: "",
          comment: "",
          name: ""
        }
        this.commentFlash = []
      } else {
        this.commentFlash = []
        for(let err in data['error']['errors']){
          this.commentFlash.push(data['error']['errors'][err]["message"])
        }
      }
    })
  }
}
