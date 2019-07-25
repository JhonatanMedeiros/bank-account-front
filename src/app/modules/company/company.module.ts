// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Company Routing Module
import { CompanyRoutingModule } from './company-routing.module';

// MDB Angular Free
import {
  WavesModule,
  TableModule,
  InputsModule,
  IconsModule,
  ButtonsModule,
} from 'angular-bootstrap-md';


import { CompanyCoreComponent } from './pages';
import { CompanyListComponent } from './components';

const MD_BOOTSTRAP_MODULES = [
  WavesModule,
  TableModule,
  InputsModule,
  IconsModule,
  ButtonsModule
];

@NgModule({
  declarations: [CompanyCoreComponent, CompanyListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ...MD_BOOTSTRAP_MODULES
  ]
})
export class CompanyModule { }
