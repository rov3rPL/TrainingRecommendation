import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './components/wizard/wizard.component';
import { StepComponent } from './components/step/step.component';
import { QuestionsService } from './services/questions.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [ CommonModule, FormsModule, HttpClientModule ],
  declarations: [ WizardComponent, StepComponent ],
  providers: [ QuestionsService ],
})
export class AngularBotModule {}