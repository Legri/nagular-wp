import { Component, OnInit } from '@angular/core';
import{ LoginserviceService } from '../loginservice.service';
import { MessagesService } from '../services/messages.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:any;
  username:any;
  password:any;
  str:string;
  message2:string;
  constructor(private auth: LoginserviceService, private mess:MessagesService) {
    this.auth.get_token().subscribe(message => { this.str = message; 
    });
    this.mess.get_message().subscribe(message => { this.message2 = message; 
    });
   }

  ngOnInit() {
    this.auth.get_token().subscribe(message => { this.str = message; 
    });
    this.mess.get_message().subscribe(message => { this.message2 = message; 
    });
  }

  onlogin(postname,password){
    this.auth.login(postname, password);
  }
  onlogout(){
    this.auth.logout();
  }


}
