import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module'
import { DemoRoutingModule } from './views/demo/demo-routing.module'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot({ userName: 'Miss Marple' }),
    // SharedModule,
    AppRoutingModule,
    DemoRoutingModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
