import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SocketService} from './socket.service';
import {Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';﻿


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  messages: Subject<any>;
  user: Object
  subscription;
  chats;
  chatRoom = null;

  constructor(
    private _http: HttpClient,
    private sService: SocketService
  ) {
    this.messages = <Subject<any>>sService
      .connect().pipe(
        map((response: any): any => {
          return response
        })
      )

    this.subscription = this.messages.subscribe(data => {
      console.log(data)
    })
  }

  openChat(id){
    if(this.chatRoom){
      if(this.chatRoom['id'] == id){
        this.chatRoom = null
      } else {
        for(let chat of this.chats){
          if(chat._id == id){
            this.chatRoom = {
              messages: chat.messages,
              names: chat.names,
              id: chat._id
            }
          }
        }
      }
    } else {
      for(let chat of this.chats){
        if(chat._id == id){
          this.chatRoom = {
            messages: chat.messages,
            names: chat.names,
            id: chat._id
          }
        }
      }
    }
    console.log(this.chats)
    console.log(this.chatRoom)
  }

  testSocket(msg){
    this.messages.next(msg)
  }

  instantMessage(data){
    this.messages.next(data)
  }

  deleteChat(id){
    return this._http.delete("/chat/" +id)
  }

  sendMessage(data){
    return this._http.post("/message", data)
  }

  getChats(id){
    let x = this._http.get("/all/chats/"+id)
    x.subscribe(data => {
      this.chats = data["data"]
      for(let chat of this.chats){
        chat['names'] = []
        for(let name of chat['userNames'])
          if(name != this.user['name']){
            chat['names'].push(name)
        }
      }
    })
    return x
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
