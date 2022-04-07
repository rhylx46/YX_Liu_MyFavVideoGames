import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { ContentServiceService } from '../services/content-service.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?:number;
  item?: Content;
  title?: string;

  constructor(private route: ActivatedRoute, private contentService: ContentServiceService, private messageService: MessageService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0"); 
  
      this.contentService.getContentItem(this.id).subscribe(
        (c) => {
          this.item = c;
          this.messageService.add(`${c.title} (id: ${this.id}) retrieved!`);
        });
       
    });


    
    

  }

}
