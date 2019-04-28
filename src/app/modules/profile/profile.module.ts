// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Profile Routing Module Import
import { ProfileRoutingModule } from './profile-routing.module';

// Shared Module Import
import { SharedModule } from '../../shared';

// Component Imports
import { ProfileCoreComponent } from './pages/profile-core/profile-core.component';

@NgModule({
  declarations: [ProfileCoreComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
