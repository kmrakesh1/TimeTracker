import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit{
  addtaskForm: any;
  @ViewChild(TimerComponent, {static: false}) timer: TimerComponent | any;

 constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder){
  this.createContactForm();
 }

 createContactForm(){
  this.addtaskForm = this.formBuilder.group({
    taskName: ['',Validators.required],  
  });
}
 ngOnInit(){
  
 }
 onSubmit(){
  console.log(this.addtaskForm.value.taskName);
  this.activeModal.close('Success');
 }
}
