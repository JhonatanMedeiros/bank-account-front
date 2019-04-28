// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Dashboard Routing Module
import { DashboardRoutingModule } from './dashboard-routing.module';

// Shared Module
import { SharedModule } from '../../shared';

// Components
import { DashboardCoreComponent } from './pages/dashboard-core/dashboard-core.component';

@NgModule({
  declarations: [DashboardCoreComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
