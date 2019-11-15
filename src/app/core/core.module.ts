import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import {NzIconModule, NzLayoutModule, NzMenuModule} from "ng-zorro-antd";


@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule
  ]
})
export class CoreModule { }
