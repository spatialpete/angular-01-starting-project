import { Component, Input, computed, input, Output, EventEmitter } from '@angular/core';

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required:true}) user!: User;
 @Input({required:true}) selected!: boolean;
 @Output() select = new EventEmitter<string>();

 get imagePath() {
  return 'assets/users/' + this.user.avatar;
 }

  onSelectUser() {
   this.select.emit(this.user.id);
  }
}
