import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './containers/bookings/bookings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@core/modules/material.module';
import { FakeBookingService } from '@core/services/InMemory/fake-booking-service.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from '@core/services/booking.service';

export const routes: Routes = [
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
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBookingService, {delay: 500})
  ],
  providers: [
    BookingService,
  ],
  exports: [
    RouterModule,
    BookingsComponent,
    HttpClientModule
  ]
})
export class BookingsModule { }
