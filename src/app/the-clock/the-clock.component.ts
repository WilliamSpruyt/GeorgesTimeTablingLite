import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-clock',
  templateUrl: './the-clock.component.html',
  styleUrls: ['./the-clock.component.scss']
})
export class TheClockComponent implements OnInit {
  mins: String="05";
  secs: String="00";
  constructor() { }

  ngOnInit() {
  }

}
