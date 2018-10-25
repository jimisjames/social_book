import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) {}

  user = this._httpService.user

  users = null;

  chats = null;

  post = {
    post: "",
    name: "",
    userId: "",
  }

  posts = []

  newComment = {
    userId: "",
    post_id: "",
    comment: "",
    name: ""
  }
  sub: any;
  chatRoom = null;

  commentFlash = []
  postFlash = []
  
  newMessage = ""

  ngOnInit() {
    this.sub = this._httpService.subscription;

    this.getPosts()
    if(this.user){
      this.getUsers(this.user['_id'])
      this.getChats(this.user['_id'])
    }
  }

  sendSocket(){
    this._httpService.testSocket("test")
  }

  sendInstantMessage(data){
    //console.log(data)
    
    this._httpService.instantMessage({id: this.chatRoom["id"], data: data.key})
  }






  sendMessage(){
    let observable = this._httpService.sendMessage({newMessage: (this.newMessage+" - "+this.user['name']), chatId: this.chatRoom['id']})
    observable.subscribe(data => {
      //console.log(data, "messssssssssssssssssssage")
      if(data["message"] == "Success"){
        this.getChats(this.user['_id'])
        this.openChat(data['data']['_id'])
        this.newMessage = ""
        this.chatRoom = {
          messages: data['data']['messages'],
          names: data['data']['names'],
          id: data['data']['_id']
        }
      }
    })
  }

  getChats(id){
    let observable = this._httpService.getChats(id)
    observable.subscribe(data => {
      console.log("Winner", data)
      if(data["message"] == "Success"){
        this.chats = data["data"]
        for(let chat of this.chats){
          chat['names'] = []
          for(let name of chat['userNames'])
            if(name != this.user['name']){
              chat['names'].push(name)
          }
        }
      }
    })
  }

  getUsers(id){
    let observable = this._httpService.getUsers(id)
    observable.subscribe(data => {
      //console.log(data)
      if(data["message"] == "Success"){
        this.users = data["data"]
      }
    })
  }

  newChat(data){
    let observable = this._httpService.newChat({idOne: data[0], idTwo: this.user["_id"], nameOne: data[1], nameTwo: this.user["name"]})
    observable.subscribe(data => {
      //console.log(data)
      this.getChats(this.user['_id'])
    })
  }

  openChat(id){
    this._httpService.openChat(id)
    this.chatRoom = this._httpService.chatRoom
    console.log(this.chatRoom)
  }

  minimise(){
    this.chatRoom = null
  }

  deleteChat(){
    if(confirm("Are you sure you want to delete this conversation?")){
      let observable = this._httpService.deleteChat(this.chatRoom["id"])
      observable.subscribe(data => {
        //console.log(data)
        if(data["message"] == "Success"){
          this.getChats(this.user["_id"])
          this.chatRoom = null
        }
      })
    }
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
    this.users = null;
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
          let d = new Date(post['created_at']);
          let hour = d.getHours()
          let x = "am"
          if(hour > 12){
            x = "pm"
            hour -= 12
          }
          post['date'] = d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear()+" "+hour+":"+d.getMinutes()+" "+x
        }
      }
    })
  }

  open(id){
    this.newComment = {
      userId: "",
      post_id: id,
      comment: "",
      name: ""
    }
  }

  comment(){
    this.newComment.userId = this.user["_id"]
    this.newComment.name = this.user["name"]
    let observable = this._httpService.comment(this.newComment)
    observable.subscribe(data => {
      console.log(data)
      if(data['message'] == "Success"){
        this.getPosts()
        this.newComment = {
          userId: "",
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
