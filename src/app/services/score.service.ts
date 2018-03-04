import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ScoreService {
  private scoreSource = new BehaviorSubject<number>(0);
  currentScore = this.scoreSource.asObservable();
  constructor() { }
  changeScore(score: number) {
    this.scoreSource.next(score)
  }
}
