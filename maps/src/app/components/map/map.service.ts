import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MapService {
    private NEARBY_CARS_URL: string = 'http://localhost:43421/getNearbyCars';
    constructor(private http: HttpClient){}
    getNearbyCars(callback){
        this.http.get(this.NEARBY_CARS_URL).toPromise().then(
            (value) => {
                callback(value);

        }).catch((rejection) => {
            console.log(rejection); 
        })
    }

}