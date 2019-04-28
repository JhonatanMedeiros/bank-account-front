// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External Libs
import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsFreeModule } from 'angular-bootstrap-md';

// Auth Routing Module
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthCoreComponent } from './pages/auth-core/auth-core.component';

const MD_BOOTSTRAP = [
  CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsFreeModule
];

@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthCoreComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...MD_BOOTSTRAP
  ]
})
export class AuthModule { }
