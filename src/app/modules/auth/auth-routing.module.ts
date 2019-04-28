// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Imports
import { AuthCoreComponent } from './pages/auth-core/auth-core.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
