import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { StepData } from 'src/app/models/StepData';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  @Input() stepData!: StepData;

  // possibleAnswers
  // selectedAnswer
  // possibleAnswers = [{id: 1, ansValue: "tak"}, {id: 2, ansValue: "nie"}, {id: 3, ansValue: "nie wiem"}];
  //selectedAnswer!: number;

  // @Output() stepAnswer!: number;
  selectedValue!: number;
  // @Output() stepAnswerEvent = new EventEmitter<number>();
  @Output() stepAnswerEvent = new EventEmitter<Answer>()

  constructor() { }
  
  ngOnInit() {

  }

  collectAnswer(answer: Answer) {
    // this.selectedValue = e.target.value;
    this.selectedValue = answer.answerValue;
    // this.stepAnswerEvent.emit(e.target.value);
    this.stepAnswerEvent.emit(answer);
  }
}