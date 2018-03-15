import { Component, OnInit } from '@angular/core';
import {flyInOut,expand} from '../animations/app-animation';
@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.scss'],
  host:{
    '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class SucessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
