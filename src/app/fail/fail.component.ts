import { Component, OnInit } from '@angular/core';
import {failInOut,flyInOut,expand,visibility} from '../animations/app-animation';
@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss'],
  host:{
    '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class FailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
