import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module'
import { AngularBotModule } from './angular-bot.module'
import { AppComponent } from './app.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularBotModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }