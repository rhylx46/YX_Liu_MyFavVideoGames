import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent implements OnInit {
  @ViewChild('id') id?: ElementRef;
  @ViewChild('title') title?: ElementRef;
  @ViewChild('description') description?: ElementRef;
  @ViewChild('creator') creator?: ElementRef;
  @ViewChild('imgURL') imgURL?: ElementRef;
  @ViewChild('type') type?: ElementRef;
  @ViewChild('tags') tags?: ElementRef;
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newGame?: Content;
  failMsg?: string;
  result?: boolean;

  constructor(element: ElementRef) {
    console.log(element.nativeElement);
  }

  ngOnInit(): void {}

  addGame(
    id: string,
    title: string,
    description: string,
    creator: string,
    imgURL: string,
    type: string,
    tags: string
  ): any {
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(','),
    };

    const self = this;

    if (
      this.newGame != null &&
      this.newGame.id.toString() != '' &&
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

    // this.hasLog();

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
        console.log(successEvent);
        self.failMsg = '';
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

        self.failMsg = failureEvent;
      });
  }

  // clear():any {

  //   this.searchInput?.nativeElement?.innerHTML?? '';
  // }
}
