import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private message = new Subject<any>();

  constructor() { }

   
set_message(tx): Observable<any>{
  this.message.next(tx);
  return  this.message.asObservable();
}

get_message(): Observable<any>{
    return  this.message.asObservable();
}

}
