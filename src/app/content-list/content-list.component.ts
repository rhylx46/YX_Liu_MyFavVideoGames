import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { ContentServiceService } from '../services/content-service.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  // myFavGames: Content[];
  @Input() item?: Content;
  msg?: string;
  color?: string;

  myFavGames: Content[];

  constructor(
    private contentService: ContentServiceService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {
    this.myFavGames = [];
  }

  openDialog(i: any) {
    console.log(i);
    const dialogRef = this.dialog.open(ModifyContentComponent, {
      data: i >= 0 ? this.myFavGames[i] : null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.game.id);
      if (result.game.id >= 0) {
        console.log('hello');
        this.myFavGames[result.game['id']] = result.game;
        this.messageService.add(`${result.game['title']} updated!`);
      } else {
        result.game['id'] = this.myFavGames.length;
        this.myFavGames.push(result.game);
      }

      console.log(this.myFavGames);
    });
  }
  showInfo(item: any): void {
    console.log('id: ' + item.id + '\ntitle: ' + item.title);
  }

  gameFilter(game: string): any {
    for (let i = 0; i < this.myFavGames.length; i++) {
      if (game == this.myFavGames[i].title) {
        this.msg = 'Yes, there is the game you want';
        this.color = 'green';
        //return [this.msg, this.color];

        return this.msg;
      } else {
        this.msg = "No, can't find it";
        this.color = 'red';
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
    // this.contentService.getContentObs().subscribe(contentArray => this.myFavGames = contentArray);
    this.getGameFromServer();
  }

  getGameFromServer(): void {
    this.contentService
      .getContent()
      .subscribe((contentArray) => (this.myFavGames = contentArray));
  }

  // updateFoodInList(contentItem: Content): void {
  //   // let id = this.bunchOfFood.find(foodItem => foodItem.id == contentItem.id);

  //   this.contentService.updateContent(contentItem).subscribe(() => {
  //     console.log("Content updated successfully");
  //     this.getGameFromServer();
  //   });
  // }

  addGameToList(newGameFromCC: Content): void {
    this.contentService
      .addContent(newGameFromCC)
      .subscribe((newContentFromServer) => {
        console.log('New content from server: ', newContentFromServer);
        // potentially useful if the server data is frequently updated
        // this.getFoodFromServer();

        // more efficient way of getting just 1 new item and adding it to the list
        this.myFavGames.push(newContentFromServer);
        this.myFavGames = [...this.myFavGames]; // using the spread operator
      });
  }

  updateGameInList(contentItem: Content): void {
    this.contentService.updateContent(contentItem).subscribe(() => {
      this.getGameFromServer();
    });
  }
}
