// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules Imports
import { BootstrapModule } from './bootstrap';
import { AuthModule } from './modules/auth';

// Routes
const routes: Routes = [
  { path: '', loadChildren: () => BootstrapModule },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => AuthModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
