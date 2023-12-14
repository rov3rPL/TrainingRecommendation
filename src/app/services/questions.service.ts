import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../models/Question';

@Injectable({
    providedIn: 'root',
})
export class QuestionsService {

    private _jsonURL = 'assets/questions.json';

    constructor(private http: HttpClient) { }

    private getJSON(): Observable<{ questions: Question[] }> {
        return this.http.get<{ questions: Question[] }>(this._jsonURL);
    }

    public getQuestions() {

        return this.getJSON();

        // alert("czytanie pliku");

        // this.getJSON().subscribe(data => {
        //     console.log(data);
            
        // });
    }

}