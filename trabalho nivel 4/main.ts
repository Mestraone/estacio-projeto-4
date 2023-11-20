import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/modulo.app';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
