import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterPipe } from './filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterPipe,
    HoverAffectDirective,
    AppMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
