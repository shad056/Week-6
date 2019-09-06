import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
   username;
   dob;
   email;
   age;
  constructor(private router: Router) { }

  ngOnInit() {

   if(sessionStorage.getItem("userdetails") === null) {
    this.router.navigateByUrl('/login');
   }
   else {
   var user = JSON.parse(sessionStorage.getItem("userdetails"));
    this.username = user.username;
    this.email = user.email;
    this.dob = user.dob;
    this.age = user.age;
   }
  }
  onLogOut(){
    sessionStorage.removeItem("userdetails");
    this.router.navigateByUrl('/login');
  }

}
