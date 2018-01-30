import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { toPromise } from 'rxjs/operator/toPromise';

import { MapService } from './map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //these are where we center the user in the map.
  //these should be the user's location
  lat: number = 31.254567;
  lng: number = 29.978568;

  otherCarMarkers = []

  constructor(private mapService:MapService) { }

  ngOnInit() {
    this.defaultCall();
  }
  defaultCall(){
    let that = this;
    setTimeout(function(){
      that.mapService.getNearbyCars(function(value){
        if(value && value.thisCar && value.thisCar.lng && value.thisCar.lat){
          this.lng  = value.thisCar.lng;
          this.lat = value.thisCar.lat;
        }
      });
      that.defaultCall();
    },1500)
  }

}
