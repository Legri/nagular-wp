import { Component, OnInit } from '@angular/core';
import{ LoginserviceService } from '../loginservice.service';
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
  str:any;
  isLoggedIn = false;
  constructor(private auth: LoginserviceService) {
   }

  ngOnInit() {
    this.auth.get_token().subscribe(message => { this.str = message; 
    });
  }

  onlogin(postname,password){
    this.auth.login(postname, password);
  }
  onlogout(){
    this.auth.logout();
  }


}
