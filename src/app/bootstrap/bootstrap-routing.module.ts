// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { BootstrapComponent } from './bootstrap.component';

// Routes
const routes: Routes = [
  {
    path: '', component: BootstrapComponent,
    children: [
      { path: 'dashboard', loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' },
      { path: 'profile', loadChildren: '../modules/profile/profile.module#ProfileModule' },
      { path: 'company', loadChildren: '../modules/company/company.module#CompanyModule' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
