import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { CustompreloadingStrategyService } from './custom-preloading-strategy.service';
import { PageNotFoundComponent } from './pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'company',
    pathMatch: 'full'
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then(mod => mod.CompanyModule),
    data: { preload: true, delay: true, time: 2000 }
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(mod => mod.PersonModule),
    data: { preload: true, delay: true, time: 4000 }
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(mod => mod.StudentModule),
    data: { preload: true, delay: true, time: 6000 }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    data: { preload: true, delay: true, time: 8000 }
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    data: { preload: true }
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
    preloadingStrategy: CustompreloadingStrategyService
  })],
  exports: [RouterModule],
  providers: [
    CustompreloadingStrategyService,
    ContactusComponent,
    PageNotFoundComponent
  ],
})
export class AppRoutingModule { }
