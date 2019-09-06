import { MetaService } from './../services/meta.service';
import { Users } from './../services/Models/Users';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private metaService: MetaService, private http: HttpClient) { }
  uname: string
  pwd: string
  error: string
  //test = [{username: 'Saad', Password: '123'}, { username: 'John', Password: '123'} , {username: 'Smith', Password: '123'}];
  validuser = 'false';
  errors = false;
  users;
  private postSub: Subscription;
  onSubmit() {
    // for (let value of this.test) {
    //   if(this.uname == value.username && this.pwd == value.Password) {
    //     this.validuser = 'true';
    //     this.errors = false;
        // this.metaService.postData(this.uname, this.pwd);
        // console.log(this.metaService.posts);
        //this.router.navigateByUrl('/account');
    //   }
    var user = {username: this.uname, password: this.pwd};
    // this.http.post<Users>('http://localhost:3000/api/auth', user)
    this.metaService.postData(this.uname,this.pwd).subscribe(res => {this.users = res
    // console.log(this.users);
    if(this.users.valid == false) {
      this.error= 'User is not valid';
      this.errors = true;
    }
    else {
      if(typeof(Storage) !== "undefined") {
        console.log('Storage ready');
        var userdetails = this.users.username;
        sessionStorage.setItem("userdetails",JSON.stringify(userdetails));


      }
      else {
        console.log('No storage support');
      }
      this.router.navigateByUrl('/chat');
    }
  },
    (err: HttpErrorResponse) => {console.log(err.error); } );

    // }
    // if(this.validuser == 'false') {

    // }




  }
  ngOnInit() {

    // this.postSub = this.metaService.getPostUpdateListener().subscribe((users:Users) =>
    // { this.users = users});
    // console.log(this.users);
  }
  // ngOnDestroy() {
  //   this.postSub.unsubscribe();
  // }
}
