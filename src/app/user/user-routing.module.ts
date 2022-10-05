import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
