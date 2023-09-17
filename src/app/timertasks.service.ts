import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimertasksService {
 timertasks:any =[];
  constructor() { }

  setTask(taskname:any){
    this.timertasks.push(taskname);
  }
  getTask(){
    this.timertasks;
  }
}
