import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  constructor() { }
  public initSocket(): void {
    this.socket = io(SERVER_URL); //initialise the connection at port: 3000
  }
  public send(message: string): void {
    this.socket.emit('message', message); //send message to server with the message string
  }
  public join(user: string): void {
    this.socket.emit('user',user);
  }
  public onJoin(): Observable<any> {
    let observable = new Observable(observer=> {
      this.socket.on('user',(data:string) => observer.next(data)); //receive message from server as the server emits the message,
      //once the client sends the message
    });
    return observable;
  }
  public onMessage(): Observable<any> {
    let observable = new Observable(observer=> {
      this.socket.on('message',(data:string) => observer.next(data)); //receive message from server as the server emits the message,
      //once the client sends the message
    });
    return observable;
  }


}
