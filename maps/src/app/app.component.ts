import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#Include';
  // should get it from the other file dynamically..
  carId = 'cqowieucop98034ckle65689cwer2132we';
  selectedMenuInMain = 0;
  accidentFlag = 0;
  MapAccident(accidentFlag: number) {
    this.accidentFlag = accidentFlag;
    if (accidentFlag !== 0) {
      this.selectedMenuInMain = 3;
    }
  }
}
