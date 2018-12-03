import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@core/modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
