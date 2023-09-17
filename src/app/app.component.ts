import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddtaskComponent } from './addtask/addtask.component';
import { TimerComponent } from './timer/timer.component';
import { TimertasksService } from './timertasks.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'timetracker';
  isActive: any;
  modalRef:any;
  startTime:any;
  endTime:any;
  difference:any;
  time: Observable<string> | any;
  @ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef | any;


  private componentRef: ComponentRef<any> | any;

 constructor(private modalService: NgbModal,private componentFactoryResolver: ComponentFactoryResolver,private timerservice:TimertasksService){
  this.startTime = new Date().getMinutes();
  this.time = new Observable((observer) => {
    setInterval(() => {
      this.endTime = new Date().getMinutes();
      this.difference = this.endTime -  this.startTime;
      observer.next(this.difference);
    }, 2000);
  });
 }
  opentaskModal() {
    this.modalRef = this.modalService.open(AddtaskComponent);
    this.modalRef.componentInstance.name = 'World';

    this.modalRef.result.then((result:any) => {
      if ( result === 'Success' ) {
        let childComponent = this.componentFactoryResolver.resolveComponentFactory(TimerComponent);
        this.componentRef = this.target.createComponent(childComponent);
        var taskname =  this.modalRef.componentInstance.addtaskForm.controls.taskName.value;
        this.componentRef.instance.name = taskname;
      }
    }, (reason:any) => {
    });

   
    
  }
  ngOnInit() {
    console.log(this.modalService);
  }
}
