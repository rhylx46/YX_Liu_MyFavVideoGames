import { Component, EventEmitter, OnInit, Output,ViewChild, ElementRef } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @ViewChild('id') id?: ElementRef;
  @ViewChild('title') title?: ElementRef;
  @ViewChild('description') description?: ElementRef;
  @ViewChild('creator') creator?: ElementRef;
  @ViewChild('imgURL') imgURL?: ElementRef;
  @ViewChild('type') type?: ElementRef;
  @ViewChild('tags') tags?: ElementRef;

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  constructor() { }
  newGame?: Content;
  result?: boolean;
  ngOnInit(): void {
  }

  addGame(title: string,
    description: string,
    creator: string,
    imgURL: string,
    type: string,
    tags: string): void {
    this.newGame = {
      // id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(','),
    };
    
    // this.newGameEvent.emit(this.newGame);
    const self = this;
    if (
      this.newGame != null &&
      this.newGame.title != '' &&
      this.newGame.description != '' &&
      this.newGame.creator != ''
    ) {
      this.result = true;

      this.newGameEvent.emit(this.newGame);

      // console.log(this.newGame.description);
    } else {
      this.result = false;
    }
    let newPromise: any;

    newPromise = new Promise((success, fail) => {
      if (this.result == true) {
        success('The addition is successful!');
      } else {
        fail('The addition failed.');
      }
    });

    newPromise
      .then(function (successEvent: string) {
        self.title!.nativeElement!.value = '';
        self.description!.nativeElement!.value = '';
        self.creator!.nativeElement!.value = '';
        self.imgURL!.nativeElement!.value = '';
        self.type!.nativeElement!.value = '';
        self.tags!.nativeElement!.value = '';
        // console.log(self.searchInput?.nativeElement.value);
      })
      .catch(function (failureEvent: any) {
        // const element: HTMLElement = document.getElementById('alert') as HTMLElement
        // element.innerHTML = failureEvent;

        // self.failMsg = failureEvent;
      });

  }

  updateGame(id:string, title: string,
    description: string,
    creator: string,
    imgURL: string,
    type: string,
    tags: string): void {
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(','),
    };
    // this.updateGameEvent.emit(this.newGame);
    const self = this;
    if (
      this.newGame.id == 0 || this.newGame.id == 1 || this.newGame.id == 2 || this.newGame.id == 3 || this.newGame.id == 4 || this.newGame.id == 5 || this.newGame.id == 6 && 
      this.newGame != null &&
      this.newGame.title != '' &&
      this.newGame.description != '' &&
      this.newGame.creator != ''
    ) {
      this.result = true;

      this.updateGameEvent.emit(this.newGame);

      // console.log(this.newGame.description);
    } else {
      this.result = false;
    }
    let newPromise: any;

    newPromise = new Promise((success, fail) => {
      if (this.result == true) {
        success('The addition is successful!');
      } else {
        fail('The addition failed.');
      }
    });

    newPromise
      .then(function (successEvent: string) {
        self.id!.nativeElement!.value = '';
        self.title!.nativeElement!.value = '';
        self.description!.nativeElement!.value = '';
        self.creator!.nativeElement!.value = '';
        self.imgURL!.nativeElement!.value = '';
        self.type!.nativeElement!.value = '';
        self.tags!.nativeElement!.value = '';
        // console.log(self.searchInput?.nativeElement.value);
      })
      .catch(function (failureEvent: any) {
        // const element: HTMLElement = document.getElementById('alert') as HTMLElement
        // element.innerHTML = failureEvent;

        // self.failMsg = failureEvent;
      });
  }



  

}