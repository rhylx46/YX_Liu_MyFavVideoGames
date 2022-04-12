import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentServiceService } from './services/content-service.service';
import { LogUpdateService } from './services/log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { ApplicationRef } from '@angular/core';
import { concat } from 'rxjs';
import { interval } from 'rxjs';
import { first } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'YX_Liu_WEB601Assignments_MyFavouriteVideoGames';
  // oneGame: any; 
  // myFavGames: Content[];
  constructor(private contentService: ContentServiceService, private logService: LogUpdateService, private appRef: ApplicationRef, private updates: SwUpdate
    ) {
    // this.oneGame = '';
    // this.myFavGames = [];
  }


  ngOnInit(): void {
    // this.contentService.oneContentObs().subscribe(oneContent => this.oneGame = oneContent);
    // this.getGameFromServer();
    this.logService.init();
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everyHalfHour$ = interval(1800 * 1000);
      const everyHalfHourOnceAppIsStable$ = concat(appIsStable$, everyHalfHour$);
      everyHalfHourOnceAppIsStable$.subscribe( () => this.updates.checkForUpdate() );
  }

  // idPass(item:any) {
  //   this.contentService.oneContentObs(item).subscribe(oneContent => this.oneGame = oneContent);
  //   // console.log("See: ", this.oneGame.id);
  // }
  // getGameFromServer(): void{
  //   this.contentService.getContent().subscribe(contentArray => this.myFavGames = contentArray);
  // }


}
