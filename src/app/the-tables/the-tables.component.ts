import { Component, OnInit, OnChanges } from '@angular/core';
import{ Question } from '../question'
import { TheQuestionsService} from '../services/the-questions.service'
import {Router} from '@angular/router';
import { ScoreService } from "../services/score.service";
import { DifficultyService } from "../services/difficulty.service";
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
@Component({
  selector: 'app-the-tables',
  templateUrl: './the-tables.component.html',
  styleUrls: ['./the-tables.component.scss'],
  providers: [],
})
export class TheTablesComponent implements OnInit {
  public focus: string;
  numqs: number;   
  theQuestions:Question[];
  score:number;
  public cols: Observable<number>;
  constructor(private level: DifficultyService,private observableMedia: ObservableMedia,private qs :TheQuestionsService,private router :Router,private data: ScoreService) { }

  ngOnInit() {
     
    this.data.currentScore.subscribe(message => this.score = message)
    this.level.currentNumQs.subscribe(message => this.numqs = message)
    this.data.changeScore(0);
    console.log("numqs "+this.numqs)
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
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      })
      .startWith(start);
    
  }
   
  suceed(){if(this.score===this.theQuestions.length)
  {
    this.router.navigate(['sucess']);
    //this.data.changeScore(0);
  }}
  updateScore(){

    this.data.changeScore(this.qs.scoreIt(this.theQuestions));


  }
   


}
