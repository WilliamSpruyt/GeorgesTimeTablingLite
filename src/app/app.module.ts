import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpModule} from '@angular/http';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import  'hammerjs';
import { AppComponent } from './app.component';
import { TheTablesComponent } from './the-tables/the-tables.component';
import { TheClockComponent, MinuteSecondsPipe } from './the-clock/the-clock.component';
import { SimpleTimer } from 'ng2-simple-timer';
import { FailComponent } from './fail/fail.component';
import { SucessComponent } from './sucess/sucess.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StartComponent } from './start/start.component';
import {ScoreService} from './services/score.service';
import {TheQuestionsService} from './services/the-questions.service';
import { AutofocusModule } from 'angular-autofocus-fix';
import { DifficultyService } from './services/difficulty.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';  
@NgModule({
  declarations: [
    AppComponent,
    TheTablesComponent,
    TheClockComponent,
    MinuteSecondsPipe,
    FailComponent,
    SucessComponent,
    FooterComponent,
    StartComponent,
    FocusDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,FlexLayoutModule,
    AutofocusModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SimpleTimer,ScoreService,TheQuestionsService,DifficultyService],
  bootstrap: [AppComponent],
  entryComponents: [
    StartComponent
],
})
export class AppModule { }
