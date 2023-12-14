import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../models/Training/Training';

@Injectable({
    providedIn: 'root',
})
export class TrainingsService {

    private _jsonURL = 'assets/trainings.json';

    constructor(private http: HttpClient) { }

    private getJSON(): Observable<{ trainings: Training[] }> {
        return this.http.get<{ trainings: Training[] }>(this._jsonURL);
    }

    public getTrainings() {

        return this.getJSON();

        // alert("czytanie pliku");

        // this.getJSON().subscribe(data => {
        //     console.log(data);
            
        // });
    }

}