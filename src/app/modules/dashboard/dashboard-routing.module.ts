// Angular Imports
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// Components Imports
import { DashboardCoreComponent } from './pages/dashboard-core/dashboard-core.component';

const Routes: Route[] = [
  {
    path: '', component: DashboardCoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
