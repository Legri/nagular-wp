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
  title_pre:string;

  constructor(private serv : GetcontentserviceService, private spinnerService: Ng4LoadingSpinnerService) { 
   
  }

  ngOnInit() {
    this.title='Loading...';
    this.container='Loading...';
    
    this.title_pre='assets/img/pre.gif';
    this.title_image='assets/img/pre.gif';
   this.serv.getcontent('74').subscribe((data) => {data;
    console.log(data);
   this.title = data['title']['rendered'];
   this.container=data['content']['rendered'];
   this.title_post=data['acf']['title_post'];
   this.title_image=data['acf']['title_image'];
   this.title_pre='';
   this.data = data;
   console.log(data);
   this.spinnerService.hide();
   console.log(data['content']['rendered']);
    });
    
  ;

    
   
  }

}
