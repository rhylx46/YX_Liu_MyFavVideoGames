import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentServiceService } from './services/content-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'YX_Liu_WEB601Assignments_MyFavouriteVideoGames';
  oneGame: any; 

  constructor(private contentService: ContentServiceService) {
    this.oneGame = '';
  }

  ngOnInit(): void {
    // this.contentService.oneContentObs().subscribe(oneContent => this.oneGame = oneContent);
  }

  idPass(item:any) {
    this.contentService.oneContentObs(item).subscribe(oneContent => this.oneGame = oneContent);
    // console.log("See: ", this.oneGame.id);
  }



}
