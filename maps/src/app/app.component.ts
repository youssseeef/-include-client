import { Component } from '@angular/core';
import * as $ from 'jquery';
import { MedicalUsers } from './services/medicalUsers.service';
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
  medicalUsersAdded = [];
  constructor(private medicalUsersService: MedicalUsers) {

  }
  MapAccident(accidentFlag: number) {
    this.accidentFlag = accidentFlag;
    if (accidentFlag !== 0) {
      this.selectedMenuInMain = 3;
    }
  }
  refreshUsers() {
    let that = this;
    this.medicalUsersService.getNearbyCars(function(value){
      that.medicalUsersAdded = [];
      Object.keys(value.success).forEach((key) => {
        that.medicalUsersAdded.push(key);
      });
    });
  }
}
