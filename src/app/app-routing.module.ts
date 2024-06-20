import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleStrategy } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { CustomTitleStrategy } from './customtitlestrategy';


const routes: Routes = [
  { path: 'settings', component: SettingsComponent, title: 'Settings' },
  { path: 'user-entry', component: UserEntryComponent, title: 'User Entry',
    children: [
      //{ path: '', redirectTo: 'user-list', pathMatch: 'full' },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-add', component: UserAddComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ {
    provide: TitleStrategy,
    useClass: CustomTitleStrategy
  }]
})
export class AppRoutingModule { }
