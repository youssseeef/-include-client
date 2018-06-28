import { Component } from '@angular/core';
// import * as $ from 'jquery';
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
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.refreshUsers();
  }
  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.refreshUsers();

  }
  MapAccident(accidentFlag: number) {
    this.accidentFlag = accidentFlag;
    if (accidentFlag !== 0) {
      // this.selectedMenuInMain = 3;
    }
  }
  refreshUsers() {
    const that = this;
    this.medicalUsersService.getMedicalUsers(function(value){
      that.medicalUsersAdded = [];
      console.log('Logged here: ');
      if (value.success !== null) {
        Object.keys(value.success).forEach((key) => {
          that.medicalUsersAdded.push(key);
        });
      }else {
        console.log('II can not fetch medical users.');
      }
    });
  }
  deleteUser(i) {
    const userIdToBeDeleted = this.medicalUsersAdded[i];
    this.medicalUsersService.deleteMedicalUser(userIdToBeDeleted, (response) => {
      console.log(response);
    });
    this.refreshUsers();
    this.medicalUsersAdded.splice(i);
  }
}
