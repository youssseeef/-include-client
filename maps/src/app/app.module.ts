import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './components/map/map.service';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { TabNavComponent } from './components/tab-nav/tab-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TabNavComponent

  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDd-4nZI3trYvjXstsCzT-tk9aU1HuDe5s'
    }),
    HttpClientModule,
    QRCodeModule,
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
