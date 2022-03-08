import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MYFAVGAMES } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private messageService: MessageService) { 


  }

  getContentObs(): Observable<Content[]> {
    
    return of (MYFAVGAMES);
  }

  oneContentObs(item:any): Observable<Content> {
    const MFG = MYFAVGAMES[item];
    if(item > MYFAVGAMES.length - 1 || isNaN(item) == true || item < 0 ) {
      this.messageService.clear();
      this.messageService.add('Not a valid id!');
     
    } else

   { 
    this.messageService.clear();
    this.messageService.add('Loaded Successfully!');
    this.messageService.add(`Content Item at id: ${MFG.id}`);
    
   }

  //  this.messageService.clear();


    return of (MFG);
  } 



}
