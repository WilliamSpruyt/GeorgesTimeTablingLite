import { Component, OnInit } from '@angular/core';
import { DifficultyService } from "../services/difficulty.service";
import {StartComponent} from '../start/start.component';
import {MatDialog,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  player="";
  constructor(private level: DifficultyService,public dialog: MatDialog) { }

  ngOnInit() {
      this.level.currentPlayer.subscribe(message => this.player = message)
  }
  openLoginForm(){

    this.dialog.open(StartComponent,{width:'750px',height:'500px',disableClose: true})
  }

}
