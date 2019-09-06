import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
 
  messagecontent:string="";
  messages:string[] = [];
  //private Subject = new Subject();
  ioConnection:Subscription;

  constructor(private socketService:SocketService, private router: Router) { }
  user = sessionStorage.getItem("userdetails");
  ngOnInit() {
    

    if( this.user === null) {
      this.router.navigateByUrl('/login');
     }
     else {
      
      this.joinChat();
    this.initToConnection();
     }
  }

  private joinChat() {
    this.socketService.initSocket();
    this.socketService.join(this.user);
    this.socketService.onJoin()
      .subscribe((data: string) => {
        this.messages.push(data);
      });
  }

  private initToConnection(){

    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage() //receives messages from server
    .subscribe((message:string) => {
      this.messages.push(message);
    });
  }
  
    
private chat() {

  if(this.messagecontent) {
    //if messagecontent is not empty
    this.socketService.send(this.user + ': ' + this.messagecontent);
    this.messagecontent = null;
  } else {
    console.log("no message");
  }
}

ngOnDestroy() {
  this.ioConnection.unsubscribe();
}


}
