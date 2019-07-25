// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// External Libs
import {
  CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsModule,
  DropdownModule
} from 'angular-bootstrap-md';

const MD_BOOTSTRAP = [
  CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MD_BOOTSTRAP
  ],
  exports: [
    ...MD_BOOTSTRAP
  ]
})
export class SharedModule { }
