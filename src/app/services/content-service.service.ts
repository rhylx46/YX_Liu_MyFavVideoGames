import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MYFAVGAMES } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient, private messageService: MessageService) { 


  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  // getContentObs(): Observable<Content[]> {
    
  //   return of (MYFAVGAMES);
  // }

  // oneContentObs(item:any): Observable<Content> {
  //   const MFG = MYFAVGAMES[item];
  //   if(item > MYFAVGAMES.length - 1 || isNaN(item) == true || item < 0 ) {
  //     this.messageService.clear();
  //     this.messageService.add('Not a valid id!');
     
  //   } else

  //  { 
  //   this.messageService.clear();
  //   this.messageService.add('Loaded Successfully!');
  //   this.messageService.add(`Content Item at id: ${MFG.id}`);
    
  //  }

  // //  this.messageService.clear();


  //   return of (MFG);
  // } 

  getContent() : Observable<Content[]> {
    return this.http.get<Content[]>("api/game");
  }


  getContentItem(id: number): Observable<Content>{
    return this.http.get<Content>("api/game/" + id);
  }


  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.clear();
    this.messageService.add('New Game added');
    return this.http.post<Content>("api/game", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any> {
    this.messageService.clear();
    this.messageService.add('Game Updated');
    return this.http.put("api/game", contentItem, this.httpOptions);
  }
}
