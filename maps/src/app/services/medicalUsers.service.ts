import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MedicalUsers {
    private MEDICAL_USERS_URL: string = 'http://localhost:43421/getMedicalUsers';
    constructor(private http: HttpClient){}
    getMedicalUsers(callback){
        this.http.get(this.MEDICAL_USERS_URL).toPromise().then(
            (value) => {
                callback(value);

        }).catch((rejection) => {
            console.log(rejection); 
        })
    }

}