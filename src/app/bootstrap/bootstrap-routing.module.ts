// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules Imports
import { DashboardModule } from '../modules/dashboard';

// Components Imports
import { BootstrapComponent } from './bootstrap.component';

// Routes
const routes: Routes = [
  {
    path: '', component: BootstrapComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
