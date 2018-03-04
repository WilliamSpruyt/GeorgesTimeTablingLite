import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
 
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<StartComponent>) { }

  ngOnInit() {
     
  }
  onSubmit() {
     
    this.dialogRef.close();
  }
}
