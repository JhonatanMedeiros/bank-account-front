// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Auth Routing Module
import { AuthRoutingModule } from './auth-routing.module';

// Modules Imports
import { SharedModule } from '../../shared';

// Components
import { AuthCoreComponent, SignUpComponent, LoginComponent } from './pages';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthCoreComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
