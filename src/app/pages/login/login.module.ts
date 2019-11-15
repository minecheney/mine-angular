import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule} from "ng-zorro-antd";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule
  ]
})
export class LoginModule { }
