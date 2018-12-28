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
  title_post:string;
  title_image :string;
  data :any;

  constructor(private serv : GetcontentserviceService, private spinnerService: Ng4LoadingSpinnerService) { 
   
  }

  ngOnInit() {
   
   this.serv.getcontent('74').subscribe((data) => {data;
    console.log(data);
   this.title = data['title']['rendered'];
   this.container=data['content']['rendered'];
   this.title_post=data['acf']['title_post'];
   this.title_image=data['acf']['title_image'];

   this.data = data;
   console.log(data);
   this.spinnerService.hide();
   console.log(data['content']['rendered']);
    });
    
  ;

    
   
  }

}
