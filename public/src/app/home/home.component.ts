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
    name: "",
    userId: "",
  }

  posts = []

  newComment = {
    post_id: "",
    comment: "",
    name: ""
  }
  commentFlash = []
  postFlash = []

  ngOnInit() {
    this.getPosts()
  }

  likePost(id){
    let observable = this._httpService.likePost({postId: id, userId: this.user['_id']})
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.getPosts()
      }
    })
  }

  logout(){
    this._httpService.logout()
    this.user = this._httpService.user
  }

  newPost(){
    if(this.user){
      this.post.name = this.user['name']
      this.post.userId = this.user['_id']
    }
    //console.log(this.post)
    let observable = this._httpService.newPost(this.post)
    observable.subscribe(data => {
      if(data["message"] == "Success"){
        this.getPosts()
        this.post.post = ""
        this.postFlash = []
      } else {
        this.postFlash = []
        for(let err in data['error']['errors']){
          this.postFlash.push(data['error']['errors'][err]["message"])
        }
      }
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
    this.newComment.name = this.user["name"]
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

  delete(id){
    if(confirm("Are you sure you want to delete this post?")){
      let observable = this._httpService.delete(id)
      observable.subscribe(data => {
        //console.log(data)
        if(data['message'] == "Success"){
          this.getPosts()
        }
      })
    }
  }

  removeComment(id){
    if(confirm("Are you sure you want to delete this comment?")){
      let observable = this._httpService.removeComment(id)
      observable.subscribe(data => {
        console.log(data)
        if(data['message'] == "Success"){
          this.getPosts()
        }
      })
    }
  }
}
