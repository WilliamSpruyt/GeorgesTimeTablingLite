import { Component, OnInit } from '@angular/core';
import { DifficultyService } from "../services/difficulty.service";
import { Observable } from "rxjs/Observable";
import { MatDialog, MatDialogRef } from '@angular/material';
import { TimerService } from "../services/timer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  player: string;
  inPlay: boolean;
  constructor(private game: TimerService,
    private level: DifficultyService, public dialog: MatDialog) { }

  ngOnInit() {
    this.level.currentPlayer.subscribe(message => this.player = message);
    this.game.inPlay.subscribe(message => this.inPlay = message);

  }




}
