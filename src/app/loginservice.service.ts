import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private subject = new Subject<any>();
  constructor(public http: HttpClient,private location: Location) { }

  login(email,password){
  //  var body = "username=" + email + "&password=" +password ;
    let formData:FormData = new FormData();  
    formData.append('username',email);  
    formData.append('password',password);  
  //console.log (credentials)
    return this.http.post('https://restapi.kusmirchuk.top/wp-json/jwt-auth/v1/token', formData).subscribe((data) => {
      //console.log(data['token']);
      if (data['token']) {
        localStorage.setItem('token',data['token']);
 
        this.subject.next('login');

       // this.location.back();
        
      }
      else{
        //console.log('data');
        
      }
      
    });
  }

  logout(): Observable<any> {
    localStorage.removeItem('token');
    this.subject.next('logOut');

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
