import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
<<<<<<< Updated upstream
=======
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipe } from './filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ModifyContentComponent } from './modify-content/modify-content.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  // providers: [
  //   {
  //     provide: ContentList,
  //     useFactory() {
  //       return new ContentList({
  //         id: 0,
  //         title: "Sekiro",
  //         description: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision.",
  //         creator: "Hidetaka Miyazaki",
  //         imgURL: "https://i.pcmag.com/imagery/reviews/015s7W8bORumChblqFNWD34-7..v1569473132.jpg",
  //         type: "Action"
  //       })
  //     }
  //   }
  // ],
=======
    ContentCardComponent,
    ContentListComponent,
    FilterPipe,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000
    })
  ],
  providers: [],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule {
}
