import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab';
  login = false;
  ngOnInit() {
    if(sessionStorage.getItem("userdetails") !== null) {
      this.login=true;
     }
  }
  LogOut() {
    sessionStorage.removeItem("userdetails");
    this.login = false;

  }
}
