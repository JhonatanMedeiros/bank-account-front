// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Company Routing Module
import { CompanyRoutingModule } from './company-routing.module';

// Components Imports
import { CompanyCoreComponent } from './pages';

@NgModule({
  declarations: [CompanyCoreComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
