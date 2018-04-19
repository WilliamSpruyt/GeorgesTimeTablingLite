import { Component, OnInit, OnChanges } from '@angular/core';
import{ Question } from '../question'
import { TheQuestionsService} from '../services/the-questions.service'
import {Router} from '@angular/router';
import { ScoreService } from "../services/score.service";
import { TimerService } from "../services/timer.service";
import { DifficultyService } from "../services/difficulty.service";
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
import {flyInOut,expand,failInOut} from '../animations/app-animation';
import {FocusDirective} from "../directives/focus.directive";
import { Inject} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { DataSource } from '@angular/cdk/collections';
import{Stat} from '../stat'
import { StatsService} from '../services/stats.service';
import { Statement } from '@angular/compiler';
@Component({
  selector: 'app-the-tables',
  templateUrl: './the-tables.component.html',
  styleUrls: ['./the-tables.component.scss'],
  providers: [],
  host:{
    '[@expand]': 'true',
  'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand(),
    failInOut()
  ]
})
export class TheTablesComponent implements OnInit {
  player="";
  public focus: string;
  numqs: number;  
  timeLimit: number; 
  theQuestions:Question[];
  score:number;
  focNo=0;
  errMess: string;
  stat:Stat; 
  timeNow:number;
   
  public cols: Observable<number>;
  constructor(private statservice : StatsService,
     
    @Inject('BaseURL') private BaseURL,private level: DifficultyService,private observableMedia: ObservableMedia,private qs :TheQuestionsService,private router :Router,private data: ScoreService,private time: TimerService) { }

  ngOnInit() {
     
    this.data.currentScore.subscribe(message => this.score = message)
    this.level.currentNumQs.subscribe(message => this.numqs = message)
    this.level.currentTime.subscribe(message => this.timeLimit = message)
    this.level.currentPlayer.subscribe(message => this.player = message)
    this.time.currentTime.subscribe(message => this.timeNow = message)
    this.data.changeScore(0);
     
    this.theQuestions=this.qs.questionMaker(this.numqs,1,12); 
    const grid = new Map([
      ["xs", 2],
      ["sm", 6],
      ["md", 10],
      ["lg", 10],
      ["xl", 10]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        
        return grid.get(change.mqAlias);
      })
      .startWith(start);
    
  }
   
  suceed(){if(this.score===this.theQuestions.length)
  { 
    this.writeStats();
   
    this.router.navigate(['sucess']);
    //this.data.changeScore(0);
  }}
  updateScore(){
    if(this.qs.scoreIt(this.theQuestions)>this.score){
      
      this.focNo++;
      
    }
    this.data.changeScore(this.qs.scoreIt(this.theQuestions));


  }


writeStats(){
  var d=new Date();
  //constructor(id:number,time:number,numQs:number,date:string,name:string)
  this.stat=new Stat(Math.floor(Date.now() / 1000),this.timeNow,this.theQuestions.length,d.toDateString(),this.player)
  
  console.log("this far "+this.stat.id);
  this.statservice.submitFeedback(this.stat);


}





   


}
 