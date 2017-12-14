import {NgModule} from '@angular/core';
import {RegisterComponent} from '../components/register/register.component';
import {OuterComponent} from '../components/outer/outer.component';
import {LoginComponent} from '../components/login/login.component';
import {
  MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from "./shared.module";

@NgModule({
  declarations: [
    LoginComponent,
    OuterComponent,
    RegisterComponent
  ],
  exports: [
    OuterComponent
  ],
  imports: [
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class OuterModule {}
