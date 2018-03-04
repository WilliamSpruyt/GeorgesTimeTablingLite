import { Component, OnInit } from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';
import { Pipe, PipeTransform } from '@angular/core';
import {Router} from '@angular/router';
import{ Question } from '../question';
import { TheQuestionsService} from '../services/the-questions.service';
import {StartComponent} from '../start/start.component';
import {MatDialog,MatDialogRef} from '@angular/material';
import { ScoreService } from "../services/score.service";
@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {
		
    transform(value: number): string {
			
			 const minutes: number = Math.floor(value / 60);
			 const minPad  = (minutes<10)?"0":"";
			 const secPad  = (value - minutes * 60<10)?"0":"";
       return minPad+ minutes + ':' + secPad + (value - minutes * 60);
    }

}
@Component({
  selector: 'app-the-clock',
  templateUrl: './the-clock.component.html',
	styleUrls: ['./the-clock.component.scss'],
	providers: [],
})
export class TheClockComponent implements OnInit {
  mins: String="05";
	secs: String="00";
	death: String=""
  counter0 = 120;
	timer0Id: string;
	timer0button = 'START';
	score:number;
	testLength=20;
	
  constructor(private data: ScoreService,public dialog: MatDialog,private st: SimpleTimer, private router :Router,private qs :TheQuestionsService) { }

  ngOnInit() {
		this.data.currentScore.subscribe(message => this.score = message);
		this.st.newTimer('1sec',1);
		this.openLoginForm();
		
	   
}
delAllTimer() {
	this.st.delTimer('1sec');
	 
}
subscribeTimer0() {
	this.counter0 = 120;
	this.death="";
	if (this.timer0Id) {
		// Unsubscribe if timer Id is defined
		this.st.unsubscribe(this.timer0Id);
		this.timer0Id = undefined;
		this.timer0button = 'FINISHED';
		console.log('timer 0 Unsubscribed.');
		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
		this.timer0button = 'FINISH';
		
		console.log('timer 0 Subscribed.',this.timer0button);
	} else {
		// Subscribe if timer Id is undefined
		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
		this.timer0button = 'FINISH';
		
		console.log('timer 0 Subscribed.',this.timer0button);
	}
	console.log(this.st.getSubscription(),);
}
timer0callback(): void {
	this.timer0button=(this.score<20)?"FINISH":"START";
	if(this.counter0<1){
		this.death="TIMES UP! you only got "+this.score;
		this.timer0button = 'START';
		 
		if (this.score<this.testLength){
			this.death="TIMES UP! you only got "+this.score;
			this.router.navigate(['fail']);}
			else{
				this.death="You did it!";
				this.router.navigate(['sucess']);}
			
		 
	}
	else if(this.score<20){
	this.counter0--;}
}
openLoginForm(){
   
  this.dialog.open(StartComponent,{width:'600px',height:'500px'})
}
conky(){console.log(this.score+'woop')}
}
