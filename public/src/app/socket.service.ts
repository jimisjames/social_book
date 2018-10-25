import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  private socket

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url);

    let observable = new Observable(observer => {
      this.socket.on('instantMessage', (data) => {
        console.log("Received Message")
        observer.next(data)
      })
      return () => {
        this.socket.disconnect()
      }
    })
    let observer = {
      next: (data: Object) => {
        this.socket.emit('instantMessage', JSON.stringify(data))
      }
    }
    return Rx.Subject.create(observer, observable)
  }
}
