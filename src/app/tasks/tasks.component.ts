import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!: string;

  // @Output() select = new EventEmitter<string>();
  
  // onSelectUser() {
  //   DUMMY_USERS.find(user => user.id === selectedUserId)!;
  //  }

}

