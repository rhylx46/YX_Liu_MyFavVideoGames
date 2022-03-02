import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

import { ContentListComponent } from  '../content-list/content-list.component';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;
  newPromise?: any;
  result?: boolean;
  constructor() {



   }

  hasLog() {

    this.newPromise = new Promise((success, fail) => {

    if (this.result == true) {
        success('The addition is successful!');
    } else {
        // this.alert = "The addtion failed!";
        fail('The addition failed!');
    }
  });

    this.newPromise.then(function(successEvent:any) {
        console.log(successEvent);
    }).catch(function(failureEvent:any) {
        
        // console.log(failureEvent);

        const element: HTMLElement = document.getElementById('alert') as HTMLElement
        element.innerHTML = failureEvent;
    });
  }

  ngOnInit(): void {
  }

  addGame(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): any {
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };

    

    if (this.newGame != null && this.newGame.id.toString() != '' && this.newGame.title != '' && this.newGame.description != '' && this.newGame.creator != '') {

      this.result = true;

      this.newGameEvent.emit(this.newGame);

      console.log(this.newGame.description);
    } else {
      this.result = false;
    }

      
    this.hasLog();

  }

}
