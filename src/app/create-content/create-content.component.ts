import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @ViewChild('searchInput') searchInput?: ElementRef;
  @ViewChild('searchInput1') searchInput1?: ElementRef;
  @ViewChild('searchInput2') searchInput2?: ElementRef;
  @ViewChild('searchInput3') searchInput3?: ElementRef;
  @ViewChild('searchInput4') searchInput4?: ElementRef;
  @ViewChild('searchInput5') searchInput5?: ElementRef;
  @ViewChild('searchInput6') searchInput6?: ElementRef;
  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
 
  newGame?: Content;
  ss?:string;
  result?: boolean;


  constructor(element: ElementRef) {
    console.log(element.nativeElement);
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

    const self = this;

    if (this.newGame != null && this.newGame.id.toString() != '' && this.newGame.title != '' && this.newGame.description != '' && this.newGame.creator != '') {

      this.result = true;

      this.newGameEvent.emit(this.newGame);

      // console.log(this.newGame.description);
    } else {
      this.result = false;
    }

      
    // this.hasLog();

    
    let newPromise:any;

    
    newPromise = new Promise((success, fail) => {

    if (this.result == true) {
        success('The addition is successful!');
    } else {
        
        fail('The addition failed.');
    }
  });

    

   newPromise.then(function(successEvent:string) {
        console.log(successEvent);
        self.ss = '';
        self.searchInput!.nativeElement!.value = '';
        self.searchInput1!.nativeElement!.value = '';
        self.searchInput2!.nativeElement!.value = '';
        self.searchInput3!.nativeElement!.value = '';
        self.searchInput4!.nativeElement!.value = '';
        self.searchInput5!.nativeElement!.value = '';
        self.searchInput6!.nativeElement!.value = '';
        // console.log(self.searchInput?.nativeElement.value);
    }).catch(
      
      function(failureEvent:any) {
            
        // const element: HTMLElement = document.getElementById('alert') as HTMLElement
        // element.innerHTML = failureEvent;

        self.ss = failureEvent;
        
    });


    
  }

  // clear():any {
    
  //   this.searchInput?.nativeElement?.innerHTML?? '';
  // }

  

}
