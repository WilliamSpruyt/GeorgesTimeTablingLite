import { Injectable } from '@angular/core';
import { Question } from '../question';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
 
import 'rxjs/add/operator/delay';
@Injectable()
export class TheQuestionsService {
  theQuestions:Question[];
  
  constructor() { }
   
  questionMaker(num: number,low: number,high: number): Question[]{
    var answer: Question[]=[];
   for(var i=0;i<num;i++){
       var a=2+Math.floor(Math.random() * (high-1));
       var b=2+Math.floor(Math.random() * (high-1));
       var ans=a*b;
        
       let question=new Question(i,a,b);
        
       answer.push(question)}
        
       return answer;
   }
   scoreIt(qs): number {var ans =0;
    qs.forEach(element => {if(element.answer.toString()===element.answerString){
    element.setAnsweredRight(true);
   ans ++;}
   }
     
   );
   return ans
 }

}
