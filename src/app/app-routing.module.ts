import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  { path: 'company', loadChildren: () => import('./company/company.module').then(mod => mod.CompanyModule) },
  { path: 'person', loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule) },
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
