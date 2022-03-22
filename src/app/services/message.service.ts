import { Injectable } from '@angular/core';
// import { Content } from '../helper-files/content-interface';
// import { MYFAVGAMES } from '../helper-files/contentDb';
// import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }


}
