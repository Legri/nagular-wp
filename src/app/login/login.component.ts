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

  constructor(private auth: LoginserviceService) {
    //this.auth.login('kusmirchuk','123321');
   }

  ngOnInit() {
    
  }

  onlogin(postname,password){
    console.log(postname);
    console.log(password);
    this.auth.login(postname, password);
  }
}
