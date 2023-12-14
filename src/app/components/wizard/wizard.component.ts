import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service'
import { TrainingsService } from '../../services/trainings.service'
import { Message } from '../../models/message'
import { Question } from '../../models/Question'
import { StepData } from '../../models/StepData'
import { StepComponent } from '../step/step.component';
import { ScoringTables } from 'src/app/services/ScoringTables';
import { Training } from 'src/app/models/Training/Training';
import { AnswersObject } from 'src/app/models/AnswersObject';
import { MoodEnum } from '../../models/Enums/MoodEnum';
import { GoalEnum } from '../../models/Enums/GoalEnum';
import { ScoringAlgorithm, ScoringResult } from 'src/app/models/ScoringAlgorithm';
import { Answer } from 'src/app/models/Answer';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  steps: StepData[] = [];
  questions!: Question[];
  stepNo: number = -1;
  resultsReady: boolean = false;
  results: { training: Training, scoring: ScoringResult }[] = [];

  private trainings!: Training[];

  collectedData: { questionId: number, answerValue: any }[] = [];

  constructor(public questionsService: QuestionsService,
    private trainingsService: TrainingsService,
    private scoringTables: ScoringTables) { }
  
  ngOnInit() {

    //TODO: combine those two
    this.questionsService.getQuestions().subscribe(data => {
  
        console.log(data);

        this.questions = data.questions;
        this.initWizard();
    });

    this.trainingsService.getTrainings().subscribe(data => {

        console.log(data);

        this.trainings = data.trainings;
        
    });

  }

  collectStepAnswer(answer: Answer) {
    
    this.collectedData.push({ 
      questionId: this.questions[this.stepNo].questionId, 
      answerValue: answer.answerValue
    });
    
    let answerStep = new StepData('user');
    answerStep.content = answer.answerText;
    this.steps = this.steps.concat(answerStep);

    this.getNextStep();
  }

  initWizard() {
    this.getNextStep();
  }

  getNextStep() {
    let nextQuestion = this.questions[++this.stepNo];
    if(!nextQuestion) {
      this.finishWizard();
    }
    else {
      this.emitStep(nextQuestion);
    }    
  }

  private emitStep(question: Question) {
    setTimeout(()=>{      
      this.steps = this.steps.concat(new StepData('bot', question));
    }, 1500);
  }

  private finishWizard() {
    
    console.log(this.collectedData);

    let answers = this.getAnswersObject();    
    console.log(answers);

    var scoringObject = this.scoringTables.getScoringObject(answers);
    console.log(scoringObject);
    
    this.trainings.forEach(training => {
      let score = ScoringAlgorithm.score(training, scoringObject);
      console.log(score);
      this.results.push({ training: training, scoring: score });
    });

    this.resultsReady = true;

  }

  private getAnswersObject(): AnswersObject {
    let answers = new AnswersObject();

    this.collectedData.forEach(element => {
      switch(element.questionId) {
        case 1:
          answers.Mood = Number(element.answerValue);
          break;
        case 2:
          answers.Goal = Number(element.answerValue);
          break;
        case 3:
          answers.LastActivities = Number(element.answerValue);
          break;
        case 4:
          answers.DutiesAfter = Number(element.answerValue);
          break;
        case 5:
          answers.EnergyLevel = Number(element.answerValue);
          break;
      }
    });

    return answers;
  }

}