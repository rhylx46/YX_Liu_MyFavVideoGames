import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentServiceService } from '../services/content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 // myFavGames: Content[];
@Input() item?: Content;
 msg?:string;
 color?: string;  

 myFavGames: Content[];


 constructor (private contentService: ContentServiceService){
      this.myFavGames = [];
 }

showInfo(item:any):void {

  console.log("id: " + item.id + "\ntitle: " + item.title );
  
}


gameFilter(game:string):any {
    
    for(let i = 0; i < this.myFavGames.length; i++) {
      
      if (game == this.myFavGames[i].title) {
        this.msg = 'Yes, there is the game you want';
        this.color = "green";
        //return [this.msg, this.color];

        return this.msg;
      } 
      else  {
        this.msg = 'No, can\'t find it';
        this.color = "red";
      }
      //console.log("See:", this.myFavGames[i].title);
      
    }


    // if (game == "Sekiro" || game == "Fallout 4" || game == "Resident Evil 2 Remake"|| game == "Kunoichi"|| game == "Fatal Frame: Mask of the Lunar Eclipse"|| game == "Devil Survivor Overclocked"|| game == "Devil Survivor 2 Record Breaker") {
    //     this.msg = 'Yes, there is the game you want';
    //     this.color = "green";
    // } else {
    //     this.msg = 'No, can\'t find it';
    //     this.color = "red";
    // }

    
}

  ngOnInit(): void {
      this.contentService.getContentObs().subscribe(contentArray => this.myFavGames = contentArray);

  }



}
