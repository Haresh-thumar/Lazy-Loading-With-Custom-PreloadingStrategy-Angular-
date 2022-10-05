import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor() {
    console.warn("Company Module Is Loaded...!");
  }
}
