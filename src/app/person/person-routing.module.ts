import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent
  },
  {
    path: 'person-list',
    component: PersonListComponent
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
export class PersonRoutingModule { }
