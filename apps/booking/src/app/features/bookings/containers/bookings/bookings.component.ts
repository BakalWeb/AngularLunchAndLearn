import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '@core/services/booking.service';
import { Booking } from '@core/interfaces/booking.interface';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  bookings: Booking[] = [];
  bookingsMadeToday = 0;
  datasource: MatTableDataSource<Booking>;
  displayedColumns: string[] = [
    'id',
    'created',
    'startDate',
    'endDate',
    'createdBy',
    'edit'
  ];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.returnBookings().subscribe(
      res => {
        this.datasource = new MatTableDataSource(res);
        console.log(res); // inspect console to view value
        this.bookings = res;
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;

        this.generateDashboardData();
      },
      error => {
        console.log(error);
      }
    );
  }

  generateDashboardData(): void {
    this.bookingsMadeToday = this.bookings.filter(
      x =>
        x.created.getMonth() === new Date().getMonth() &&
        x.created.getFullYear() === new Date().getFullYear() &&
        x.created.getDate() === new Date().getDate()
    ).length;
  }
}
