import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './containers/bookings/bookings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@core/modules/material.module';

export const routes: Routes = [
  // {
  //   path: 'bookings',
  //   redirectTo: 'bookings',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: BookingsComponent
  }
];

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    RouterModule,
    BookingsComponent
  ]
})
export class BookingsModule { }
