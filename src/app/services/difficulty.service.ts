import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DifficultyService {
  private numQsSource = new BehaviorSubject<number>(10);
  private timeLimit=new BehaviorSubject<number>(60);
  currentTime = this.timeLimit.asObservable();
  currentNumQs = this.numQsSource.asObservable();
  constructor() { }
  setDifficulty(numQs: number,time: number) {
    this.numQsSource.next(numQs);
    this.timeLimit.next(time);
  }
}

  
 
