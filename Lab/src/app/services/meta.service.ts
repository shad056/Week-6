import { Users } from './Models/Users';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Post} from './Models/dataModel';
import {HttpErrorResponse} from '@angular/common/http';
import { Subject } from "rxjs"; //Event Handler

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  posts;
  //private postsUpdated = new Subject<Users>();
  constructor(private http: HttpClient) {
   }

  //  getPosts() {
  //   //  this.http.get<Post>(this.url).subscribe(res => {   
  //   //  this.posts = res.title;  });
  //   return this.posts;
  //             }
  // getPostUpdateListener() {
  //   return this.postsUpdated.asObservable(); //Start listening to this event someone
  // }
postData(uname,pwd) { 
  var user = {username: uname, password: pwd};
  return this.http.post<Users>('http://localhost:3000/api/auth', user);
  //.subscribe(res => {this.posts = res

  //this.postsUpdated.next(this.posts);
//},
  //(err: HttpErrorResponse) => {console.log(err.error); } );

      }

}
