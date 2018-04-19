import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
import { DifficultyService } from "../services/difficulty.service"; 
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Settings} from '../settings';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  loginForm: FormGroup;
  settings: Settings;
  
  constructor(private fb: FormBuilder, private level: DifficultyService,public dialogRef: MatDialogRef<StartComponent>) { this.createForm();}

  ngOnInit() {
     
  }
  onSubmit() {
    
    this.settings=this.loginForm.value;
    console.log('questions '+this.settings.questions,'time '+this.settings.time)
    this.level.setDifficulty(this.settings.questions*1,this.settings.time*60,this.settings.name);
    this.dialogRef.close();
    
  }
  createForm(){
    this.loginForm = this.fb.group({
      time: [2 ],
      questions: [20 ],
      name: 'Name'
       
       
    });
    
  }
}
