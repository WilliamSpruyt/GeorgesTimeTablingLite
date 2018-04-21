import { Component, OnInit } from '@angular/core';
import { StartComponent } from '../start/start.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TimerService } from "../services/timer.service";
import { DifficultyService } from "../services/difficulty.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inPlay: boolean;
  constructor(private game: TimerService, public dialog: MatDialog, private level: DifficultyService, ) { }

  ngOnInit() {
    //this.game.inPlay.subscribe(message => inPlay = message)
    this.openLoginForm();
    this.game.setPlay(false);
  }
  openLoginForm() {

    this.dialog.open(StartComponent, { width: '750px', height: '500px', disableClose: true })
  }
}
