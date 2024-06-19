import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dr-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrl: './user-entry.component.css'
})
export class UserEntryComponent {
  constructor(private router: Router) {}

  navigateToAddUser() {
    this.router.navigate(['/user-entry/user-add']);
    
    //alternative ways to navigate
    //this.router.navigate(['/user-entry', 'user-add']);
    //this.router.navigateByUrl('/user-entry/user-add');
  }


}
