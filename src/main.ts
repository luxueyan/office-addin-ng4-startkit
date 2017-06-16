import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var Office:any

function launch() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {
  // Application-specific initialization code goes into a function that is
  // assigned to the Office.initialize event and runs after the Office.js initializes.
  // Bootstrapping of the AppModule must come AFTER Office has initialized.
  Office.initialize = reason => {
    launch();
  }
} else {
  launch();
}
