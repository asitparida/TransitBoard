import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAComponent } from './header-a/header-a.component';
import { TransportBarComponent } from './transport-bar/transport-bar.component';
import { TransportBarModeComponent } from './transport-bar/transport-bar-mode/transport-bar-mode.component';
import { TransportBarItemComponent } from './transport-bar/transport-bar-item/transport-bar-item.component';
import { MapComponent } from './map/map.component';
import { TransportBarNewComponent } from './transport-bar/transport-bar-new/transport-bar-new.component';
import { AppService } from './app.service';
import { TransportBarDetailedComponent } from './transport-bar/transport-bar-detailed/transport-bar-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAComponent,
    TransportBarComponent,
    TransportBarModeComponent,
    TransportBarItemComponent,
    MapComponent,
    TransportBarNewComponent,
    TransportBarDetailedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
