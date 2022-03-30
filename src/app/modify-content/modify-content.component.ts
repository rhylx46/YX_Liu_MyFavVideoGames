import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss'],
})
export class ModifyContentComponent implements OnInit {
  // @ViewChild('id') id?: ElementRef;
  // @ViewChild('title') title?: ElementRef;
  // @ViewChild('description') description?: ElementRef;
  // @ViewChild('creator') creator?: ElementRef;
  // @ViewChild('imgURL') imgURL?: ElementRef;
  // @ViewChild('type') type?: ElementRef;
  // @ViewChild('tags') tags?: ElementRef;

  // @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  // @Output() updateGameEvent: EventEmitter<Content> =
  //   new EventEmitter<Content>();

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModifyContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  newGame?: Content;
  result?: boolean;
  //dialogRef?: MatDialogRef<any>;
  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      this.formGroup = new FormGroup({
        id: new FormControl(this.data.id),
        description: new FormControl(this.data.description),
        title: new FormControl(this.data.title),
        creator: new FormControl(this.data.creator),
        imgURL: new FormControl(this.data.imgURL),
        type: new FormControl(this.data.type),
        tags: new FormControl(this.data.tags.join()),
      });
    } else {
      this.formGroup = new FormGroup({
        id: new FormControl(''),
        description: new FormControl(''),
        title: new FormControl(''),
        creator: new FormControl(''),
        imgURL: new FormControl(''),
        type: new FormControl(''),
        tags: new FormControl(''),
      });
    }
  }

  onNoClick(): void {
    this.dialogRef?.close();
  }

  addGame(): void {
    console.log(this.formGroup.value.id == '');
    this.newGame = {
      id: this.formGroup.value.id >= 0 ? parseInt(this.formGroup.value.id) : -1,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      creator: this.formGroup.value.creator,
      imgURL: this.formGroup.value.imgURL,
      type: this.formGroup.value.type,
      tags: this.formGroup.value.tags.split(','),
    };
    this.dialogRef.close({ game: this.newGame });

    // this.newGameEvent.emit(this.newGame);
    const self = this;
    if (
      this.newGame != null &&
      this.newGame.title != '' &&
      this.newGame.description != '' &&
      this.newGame.creator != ''
    ) {
      this.result = true;

      // this.newGameEvent.emit(this.newGame);

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

    // newPromise
    //   .then(function (successEvent: string) {
    //     self.title!.nativeElement!.value = '';
    //     self.description!.nativeElement!.value = '';
    //     self.creator!.nativeElement!.value = '';
    //     self.imgURL!.nativeElement!.value = '';
    //     self.type!.nativeElement!.value = '';
    //     self.tags!.nativeElement!.value = '';
    //     // console.log(self.searchInput?.nativeElement.value);
    //   })
    //   .catch(function (failureEvent: any) {
    //     // const element: HTMLElement = document.getElementById('alert') as HTMLElement
    //     // element.innerHTML = failureEvent;
    //     // self.failMsg = failureEvent;
    //   });
  }

  updateGame(): void {
    console.log(this.formGroup.value.tags);
    this.newGame = {
      id: parseInt(this.formGroup.value.id),
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      creator: this.formGroup.value.creator,
      imgURL: this.formGroup.value.imgURL,
      type: this.formGroup.value.type,
      tags: this.formGroup.value.tags.split(','),
    };
    this.dialogRef.close({ game: this.newGame });
    // this.updateGameEvent.emit(this.newGame);

    const self = this;
    if (
      this.newGame.id == 0 ||
      this.newGame.id == 1 ||
      this.newGame.id == 2 ||
      this.newGame.id == 3 ||
      this.newGame.id == 4 ||
      this.newGame.id == 5 ||
      (this.newGame.id == 6 &&
        this.newGame != null &&
        this.newGame.title != '' &&
        this.newGame.description != '' &&
        this.newGame.creator != '')
    ) {
      this.result = true;

      //this.updateGameEvent.emit(this.newGame);

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

    // newPromise
    //   .then(function (successEvent: string) {
    //     self.id!.nativeElement!.value = '';
    //     self.title!.nativeElement!.value = '';
    //     self.description!.nativeElement!.value = '';
    //     self.creator!.nativeElement!.value = '';
    //     self.imgURL!.nativeElement!.value = '';
    //     self.type!.nativeElement!.value = '';
    //     self.tags!.nativeElement!.value = '';
    //     // console.log(self.searchInput?.nativeElement.value);
    //   })
    //   .catch(function (failureEvent: any) {
    //     // const element: HTMLElement = document.getElementById('alert') as HTMLElement
    //     // element.innerHTML = failureEvent;
    //     // self.failMsg = failureEvent;
    //   });
  }
}
