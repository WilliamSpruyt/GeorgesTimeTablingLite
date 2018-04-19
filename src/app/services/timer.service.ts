import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 
@Injectable()
export class TimerService {
  private timerSource = new BehaviorSubject<number>(0);
  currentTime = this.timerSource.asObservable();
  constructor() { }
  changeTime(time: number) {
    this.timerSource.next(time)
  }
}
