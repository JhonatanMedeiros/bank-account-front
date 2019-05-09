// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { AuthCoreComponent, LoginComponent, SignUpComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: AuthCoreComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
