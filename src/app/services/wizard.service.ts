// import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { Message } from '../models/message';
// import { StepData } from '../models/StepData';
// import { QuestionService } from './question.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class WizardService {

//   constructor(public questionService: QuestionService) { }

//   stepNo: number = 0;

//   steps: StepData[] = 
//   [
//     new StepData('bot', 1, "treść pytania 1", [
//       {answerId: 1, answerValue: "mały"},
//       {answerId: 2, answerValue: "średni"},
//       {answerId: 3, answerValue: "duży"}
//     ]),
//     new StepData('bot', 2, "treść pytania 2", [
//       {answerId: 1, answerValue: "tak"},
//       {answerId: 2, answerValue: "nie"},
//       {answerId: 3, answerValue: "nie wiem"}
//     ]),
//     new StepData('bot', 3, "treść pytania 3", [
//       {answerId: 1, answerValue: "tak"},
//       {answerId: 2, answerValue: "nie"},
//       {answerId: 3, answerValue: "nie wiem"}
//     ]),
//     new StepData('bot', 4, "treść pytania 4", [
//       {answerId: 1, answerValue: "tak"},
//       {answerId: 2, answerValue: "nie"},
//       {answerId: 3, answerValue: "nie wiem"}
//     ])
//   ];
  
//   questionnaire = new Subject<StepData[]>();

//   answers: object[] = [];

//   getNextStep(msg: string) {

//     // this.answers.push({ questionId: this.steps[this.stepNo].questionId, answerId: msg});

//     let nextStep = this.steps[++this.stepNo];

//     if(!nextStep) {
//       alert("koniec ankiety!");
//       alert(JSON.stringify(this.answers));
//     }

//     setTimeout(()=>{
//       this.questionnaire.next([nextStep]);
//     }, 1500);
//   }

//   initWizard() {
//     const initStep = this.steps[this.stepNo];
//     this.questionnaire.next([initStep]);
//   }
// }