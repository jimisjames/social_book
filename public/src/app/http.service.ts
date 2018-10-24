import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
  ) { }

  user: Object

  deleteChat(id){
    return this._http.delete("/chat/" +id)
  }

  sendMessage(data){
    return this._http.post("/message", data)
  }

  getChats(id){
    return this._http.get("/all/chats/"+id)
  }

  newChat(data){
    return this._http.post("/chat", data)
  }

  getUsers(id){
    return this._http.get("/all/users/"+id)
  }

  newPost(data){
    return this._http.post('/', data)
  }

  getPosts(){
    return this._http.get('/all')
  }

  comment(data){
    return this._http.post('/comment', data)
  }

  register(data){
    return this._http.post('/user', data)
  }

  login(data){
    let x = this._http.post('/login', data)
    x.subscribe(data => {
      if(data["message"] == "Success"){
        this.user = data["data"]
      }
    })
    return x
  }

  logout(){
    this.user = null
  }

  likePost(data){
    return this._http.post('/likePost', data)
  }

  delete(id){
    return this._http.delete('/'+ id)
  }

  removeComment(id){
    return this._http.delete('/comment/'+ id)
  }
}
