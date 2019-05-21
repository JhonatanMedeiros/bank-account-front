// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
  { path: '', loadChildren: './bootstrap/bootstrap.module#BootstrapModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
