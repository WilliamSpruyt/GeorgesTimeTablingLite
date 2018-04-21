import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TimerService {
  private timerSource = new BehaviorSubject<number>(0);
  private inPlaySource = new BehaviorSubject<boolean>(false);
  currentTime = this.timerSource.asObservable();
  inPlay = this.inPlaySource.asObservable();
  constructor() { }
  changeTime(time: number) {
    this.timerSource.next(time)
  }

  setPlay(swap: boolean) {
    this.inPlaySource.next(swap)
  }
}
