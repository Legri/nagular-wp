import { Component, OnInit } from '@angular/core';
import{ LoginserviceService } from '../../../loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  str : any;

  constructor(private log: LoginserviceService) {
    this.log.get_token().subscribe(message => { this.str = message; });
   }

  ngOnInit() {
    this.log.get_token().subscribe(message => { this.str = message; });
   // this.log.logout().subscribe(message => { this.str = message; });
    console.log(this.str);
  }

}
