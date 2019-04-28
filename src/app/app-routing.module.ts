// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules Imports
import { AuthModule } from './modules/auth/auth.module';

// Routes
const routes: Routes = [
  { path: 'auth', loadChildren: () => AuthModule },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
