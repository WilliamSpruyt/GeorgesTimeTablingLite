import { Component, OnInit ,Inject} from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';
import { Pipe, PipeTransform } from '@angular/core';
import {Router} from '@angular/router';
import{ Question } from '../question';
import { TheQuestionsService} from '../services/the-questions.service';
import {StartComponent} from '../start/start.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { ScoreService } from "../services/score.service";
import { TimerService } from "../services/timer.service";
import { DifficultyService } from "../services/difficulty.service";
import { OnChanges } from '@angular/core';
import { StatsService} from '../services/stats.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs/Observable";
import{Stat} from '../stat';
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";
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
	inPlay: boolean = false;
  mins: String="05";
	secs: String="00";
	death: String=""
	counter0 = 0;
	timeLimit=120;
	timer0Id: string;
	timer0button = 'START';
	score:number=0;
	testLength: number;
	stat:Stat;
	player='';

  constructor(private statservice : StatsService,

    @Inject('BaseURL') private BaseURL,
    private observableMedia: ObservableMedia,
    private level: DifficultyService,
    private data: ScoreService,public dialog: MatDialog,private st: SimpleTimer, private router :Router,private qs :TheQuestionsService,private time: TimerService) { }

  ngOnInit() {
		this.data.currentScore.subscribe(message => this.score = message);
		this.level.currentTime.subscribe(message => this.timeLimit = message);
		this.level.currentNumQs.subscribe(message => this.testLength = message);
		this.level.currentPlayer.subscribe(message => this.player = message)
		this.time.changeTime(this.counter0);
		this.st.newTimer('1sec',1);
		this.openLoginForm();


}
delAllTimer() {
	this.st.delTimer('1sec');

}
subscribeTimer0() {
	this.inPlay=true;
	this.counter0 = 0;;
	this.death="";
	if (this.timer0Id) {
		// Unsubscribe if timer Id is defined
		this.st.unsubscribe(this.timer0Id);
		this.timer0Id = undefined;
		this.timer0button = 'FINISHED';
		//console.log('timer 0 Unsubscribed.');
		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
		this.timer0button = 'FINISH';

		//console.log('timer 0 Subscribed.',this.timer0button);
	} else {
		// Subscribe if timer Id is undefined
		this.timer0Id = this.st.subscribe('1sec', () => this.timer0callback());
		this.timer0button = 'FINISH';

		//console.log('timer 0 Subscribed.',this.timer0button);
	}
	//console.log(this.st.getSubscription(),);
}
timer0callback(): void {
	//console.log(this.score,this.testLength)
	this.timer0button=(this.score<this.testLength)?"FINISH":"START";
	if(this.counter0>=this.timeLimit){
		this.death="TIMES UP! you only got "+this.score;
		this.timer0button = 'START';

		if (this.score<this.testLength && this.inPlay){
			this.writeStats();
			this.death="TIMES UP! you only got "+this.score;
			this.inPlay=false;
			this.router.navigate(['fail']);}



	}
	else if(this.score<this.testLength){
	this.counter0++;
  this.time.changeTime(this.counter0)}
}
openLoginForm(){

  this.dialog.open(StartComponent,{width:'750px',height:'500px',disableClose: true})
}
//conky(){console.log(this.score+'woop')}

writeStats(){
	var d=new Date();
	//constructor(id:number,time:number,numQs:number,date:string,name:string)
	this.stat=new Stat(Math.floor(Date.now() / 1000),this.timeLimit,this.score,d.toDateString(),this.player);

	console.log("this far "+this.stat.id);
	this.statservice.submitFeedback(this.stat);


  }

}
