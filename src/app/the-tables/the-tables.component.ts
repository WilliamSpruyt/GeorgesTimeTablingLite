import { Component, OnInit } from '@angular/core';
import{ Question } from '../question'

@Component({
  selector: 'app-the-tables',
  templateUrl: './the-tables.component.html',
  styleUrls: ['./the-tables.component.scss']
})
export class TheTablesComponent implements OnInit {
  theQuestions:Question[];
  constructor() { }

  ngOnInit() {
    this.theQuestions=this.questionMaker(100,1,12);
  }
 questionMaker(num: number,low: number,high: number): Question[]{
     var answer: Question[]=[];
    for(var i=0;i<num;i++){
        var a=2+Math.floor(Math.random() * (high-1));
        var b=2+Math.floor(Math.random() * (high-1));
        var ans=a*b;
        console.log(a,b,ans);
        let question=new Question(i,a,b);
        console.log(question.answer)
        answer.push(question)}
         
        return answer;
    }
    trackByQuestion(index: number, question: Question): number { return question.answer; }
}
