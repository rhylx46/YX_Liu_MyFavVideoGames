import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate, private messageService: MessageService, private snackbar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      console.log("A version update potentially happened", event);
      switch (event.type) {
        case 'VERSION_DETECTED':
          this.messageService.add(`Downloading new app version: ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          this.messageService.add(`Current app version: ${event.currentVersion.hash}`);
          this.messageService.add(`New app version ready for use: ${event.latestVersion.hash}`);
          let snackBarRef = this.snackbar.open("An update is ready for you!", "Update App");
          snackBarRef.onAction().subscribe(() => {
            this.updates.activateUpdate().then(() => {
              
              document.location.reload();
            });
          });



          break;
      }
    });
  }
}
