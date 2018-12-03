import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Booking } from '@core/interfaces/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl: string;
  bookings_endpoint = 'bookings';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
  }

  public returnBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/${this.bookings_endpoint}/`);
  }

  // public returnBookingsWithinDateRange(start: Date, end: Date): Observable<any> {
  //   return this.http.get<Booking[]>(`${this.baseUrl}/${this.bookings_endpoint}/bookingsWithinDateRange/${start}/${end}`);
  // }
}
