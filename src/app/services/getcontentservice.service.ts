import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcontentserviceService {

  constructor(private http: HttpClient) { }

  getcontent(id){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/pages/'+id);
  }


  getcontentbypost(){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/posts/');
  }
}
