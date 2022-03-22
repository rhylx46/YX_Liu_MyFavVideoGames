import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YX_Liu_WEB601Assignments_MyFavouriteVideoGames';
<<<<<<< Updated upstream
=======
  // oneGame: any; 
  // myFavGames: Content[];
  constructor(private contentService: ContentServiceService) {
    // this.oneGame = '';
    // this.myFavGames = [];
  }

  ngOnInit(): void {
    // this.contentService.oneContentObs().subscribe(oneContent => this.oneGame = oneContent);
    // this.getGameFromServer();
  }

  // idPass(item:any) {
  //   this.contentService.oneContentObs(item).subscribe(oneContent => this.oneGame = oneContent);
  //   // console.log("See: ", this.oneGame.id);
  // }
  // getGameFromServer(): void{
  //   this.contentService.getContent().subscribe(contentArray => this.myFavGames = contentArray);
  // }


>>>>>>> Stashed changes
}
