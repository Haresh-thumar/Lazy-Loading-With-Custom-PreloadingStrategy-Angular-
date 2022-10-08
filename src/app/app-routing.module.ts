import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { CustomOreloadingStrategyService } from './custom-oreloading-strategy.service';
import { PageNotFoundComponent } from './pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(mod => mod.CompanyModule),
    data: { preload: true }
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule),
    data: { preload: true }
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule),
    data: { preload: true }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],

  //-------- PreLoading Strategy (Load All Module) ---------
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomOreloadingStrategyService
  })],
  exports: [RouterModule],
  providers: [
    CustomOreloadingStrategyService
  ],
})
export class AppRoutingModule { }
