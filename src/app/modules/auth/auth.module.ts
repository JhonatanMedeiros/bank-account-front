// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Auth Routing Module
import { AuthRoutingModule } from './auth-routing.module';

// Modules Imports
import { SharedModule } from '../../shared';

// Components
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthCoreComponent } from './pages/auth-core/auth-core.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthCoreComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
