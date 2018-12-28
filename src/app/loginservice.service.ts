import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public http: HttpClient,private location: Location) { }

  login(email,password){
  //  var body = "username=" + email + "&password=" +password ;
    let formData:FormData = new FormData();  
    formData.append('username',email);  
    formData.append('password',password);  
  //console.log (credentials)
    return this.http.post('https://kusmirchuk.top/wp-json/jwt-auth/v1/token', formData).subscribe((data) => {
      //console.log(data['token']);
      if (data['token']) {
        localStorage.setItem('token',data['token']);
        console.log(data['token']);
        this.location.back();
      }
      else{
        console.log('data');
        localStorage.removeItem('token');
      }
      
    });
      
    
   
  }

}
