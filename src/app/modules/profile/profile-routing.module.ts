// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { ProfileCoreComponent } from './pages';

// Routes
const routes: Routes = [
  { path: '', component: ProfileCoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
