// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Bootstrap Routing Module Import
import { BootstrapRoutingModule } from './bootstrap-routing.module';

// Components Imports
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    CommonModule,
    BootstrapRoutingModule
  ]
})
export class BootstrapModule { }
