import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcontentserviceService {

  constructor(private http: HttpClient) { }

  getcontent(){
     return this.http.get('https://kusmirchuk.top/wp-json/wp/v2/pages?slug=test-page');
    

  }
}
