import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MedicalUsers {
    private MEDICAL_USERS_URL = 'http://localhost:43421/getMedicalUsers';
    private DELETE_MEDICAL_USER_URL = 'http://localhost:43421/deleteMedicalUser';
    constructor(private http: HttpClient) {}
    getMedicalUsers(callback) {
        this.http.get(this.MEDICAL_USERS_URL).toPromise().then(
            (value) => {
                callback(value);

        }).catch((rejection) => {
            console.log(rejection);
        });
    }
    deleteMedicalUser(userId, callback) {
        this.http.get(this.DELETE_MEDICAL_USER_URL + '?userToBeDeleted=' + userId).toPromise().then(
            (value) => {
                callback(value);

        }).catch((rejection) => {
            console.log(rejection);
        });
    }

}