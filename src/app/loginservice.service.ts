import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { MessagesService } from '../app/services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private subject = new Subject<any>();
  constructor(public http: HttpClient,private location: Location,private mess:MessagesService) { }

  login(email,password){

    let formData:FormData = new FormData();  
    formData.append('username',email);  
    formData.append('password',password);  
    return this.http.post('https://restapi.kusmirchuk.top/wp-json/jwt-auth/v1/token', formData).subscribe((data) => {
      if (data['token']) {
       localStorage.setItem('token',data['token']);
       this.subject.next('login');
       this.mess.set_message('is login');
      }
    },
    error => {
      this.mess.set_message('not login');
  });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.subject.next('logOut');
    this.mess.set_message('logOut');
    return this.subject.asObservable();
}
 
get_token(): Observable<any>{
  console.log(localStorage.getItem('token'));
  if (localStorage.getItem('token')){
     this.subject.next('login');
  }else{
    this.subject.next('logOut');
  }
  return  this.subject.asObservable();
}

}
