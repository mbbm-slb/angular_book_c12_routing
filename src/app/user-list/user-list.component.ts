import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dr-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('User List');
  }
}
