// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { CompanyCoreComponent } from './pages';
import { CompanyListComponent } from './components';

// Routes
const routes: Routes = [
  {
    path: '', component: CompanyCoreComponent, children: [
      { path: 'list', component: CompanyListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
