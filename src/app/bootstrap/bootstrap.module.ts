// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External Libs Imports
import { NavbarModule } from 'angular-bootstrap-md';

// Bootstrap Routing Module Import
import { BootstrapRoutingModule } from './bootstrap-routing.module';

// Components Imports
import { BootstrapComponent } from './bootstrap.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared';

const MD_BOOTSTRAP: any[] = [
  NavbarModule
];

@NgModule({
  declarations: [BootstrapComponent, NavbarComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    ...MD_BOOTSTRAP,
    SharedModule
  ]
})
export class BootstrapModule { }
