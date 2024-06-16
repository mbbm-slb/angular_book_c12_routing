import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';


const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'user-entry', component: UserEntryComponent, 
    children: [
      { path: 'user-list', component: UserListComponent },
      { path: 'user-add', component: UserAddComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
