import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAComponent } from './header-a/header-a.component';
import { TransportBarComponent } from './transport-bar/transport-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAComponent,
    TransportBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
