import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component'
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
 
  
  //constructors are executed when class is instantiated
  //dependency injection - you tell angular which type of value you need and angular creates it
  // and provides it as an argument. private is a shortcut to create 
  constructor(private tasksService: TasksService) {

  }
  

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    //....
    
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask () {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
    
  //   this.isAddingTask = false;
  // }
}

