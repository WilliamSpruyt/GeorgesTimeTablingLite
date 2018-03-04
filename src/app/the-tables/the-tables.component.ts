import { Component, OnInit, OnChanges } from '@angular/core';
import{ Question } from '../question'
import { TheQuestionsService} from '../services/the-questions.service'
import {Router} from '@angular/router';
import { ScoreService } from "../services/score.service";
@Component({
  selector: 'app-the-tables',
  templateUrl: './the-tables.component.html',
  styleUrls: ['./the-tables.component.scss'],
  providers: [],
})
export class TheTablesComponent implements OnInit {
  theQuestions:Question[];
  score:number;
  constructor(private qs :TheQuestionsService,private router :Router,private data: ScoreService) { }

  ngOnInit() {
    this.theQuestions=this.qs.questionMaker(20,1,12);
    this.data.currentScore.subscribe(message => this.score = message)
    this.data.changeScore(0);
    
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
