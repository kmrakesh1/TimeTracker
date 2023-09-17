import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { TimertasksService } from '../timertasks.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() name: any;
  startText = 'Start';
  taskname:any;
  laps:any = [];
constructor(private timerservice:TimertasksService,private componentFactoryResolver: ComponentFactoryResolver){
  
}
ngOnInit() {
  
}
mm = 0;
ss = 0;
ms = 0;
isRunning = false;
timerId :any = 0;
startDt:any;
endDt:any;
timerEvents:string[]=[];
activeEvent: any = "";
startTimer() {
  this.startText ="Stop";
  if (!this.isRunning) {
    this.startDt = new Date();
    this.activeEvent= `Started the Timer at ${this.startDt.toLocaleString()}(Active)`;
    this.timerId = setInterval(() => {
      this.ms++;

      if (this.ms >= 100) {
        this.ss++;
        this.ms = 0;
      }
      if (this.ss >= 60) {
        this.mm++;
        this.ss = 0
      }
    }, 10);
  } else {
    this.endDt = new Date();
    clearInterval(this.timerId);
    this.activeEvent= '';
    const event= `Started the Timer at ${this.startDt.toLocaleString()} & Stopped at  ${this.endDt.toLocaleString()} `;
    this.timerEvents.push(event);
  }
  this.isRunning = !this.isRunning;
}

format(num: number) {
  return (num + '').length === 1 ? '0' + num : num + '';
}


}


