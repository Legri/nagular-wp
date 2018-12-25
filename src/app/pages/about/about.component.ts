import { Component, OnInit } from '@angular/core';
import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string;
  container : any;

  constructor(private serv : GetcontentserviceService, private spinnerService: Ng4LoadingSpinnerService) { 
   
  }

  ngOnInit() {
  this.spinnerService.show();
   this.serv.getcontent().subscribe((data) => {data;
   this.title = data[0]['title']['rendered'];
   this.container=data[0]['content']['rendered'];
    });
  ;

    console.log(this.container);
   // this.spinnerService.hide();
  }

}
