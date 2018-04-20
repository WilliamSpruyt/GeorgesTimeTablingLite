import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DifficultyService {
  private numQsSource = new BehaviorSubject<number>(10);
  private timeLimit=new BehaviorSubject<number>(60);
  private player= new BehaviorSubject<string>('Nobody');
  currentTime = this.timeLimit.asObservable();
  currentNumQs = this.numQsSource.asObservable();
  currentPlayer= this.player.asObservable();
  constructor() { }
  setDifficulty(numQs: number,time: number,name: string) {
    this.numQsSource.next(numQs);
    this.timeLimit.next(time);
    this.player.next(name);
  }
}
