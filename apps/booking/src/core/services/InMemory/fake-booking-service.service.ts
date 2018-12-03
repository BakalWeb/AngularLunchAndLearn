import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Asset } from '@core/interfaces/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class FakeBookingService implements InMemoryDbService {
  createDb() {

    const assets = [
      {
        id: 1,
        display: 'Practice_1',
        type: 'Practice',
        location: 'Skegness'
      },
      {
        id: 2,
        display: 'Practice_2',
        type: 'Practice',
        location: 'Bognor Regis'
      },
      {
        id: 3,
        display: 'Projector',
        type: 'Device',
        location: 'Bognor Regis'
      },
    ];

    const bookings = [
      {
        id: 1,
        created: new Date(),
        startDate: new Date(2019, 1, 1, 13, 0),
        endDate: new Date(2019, 1, 1, 14, 0),
        createdBy: 'Billy',
        asset: assets.find(x => x.id === 1)
      },
      {
        id: 2,
        created: new Date(),
        startDate: new Date(2019, 1, 1, 11, 0),
        endDate: new Date(2019, 1, 1, 15, 0),
        createdBy: 'McNilly',
        asset: assets.find(x => x.id === 1)
      },
      {
        id: 3,
        created: new Date(),
        startDate: new Date(2018, 12, 1, 10, 0),
        endDate: new Date(2018, 12, 1, 11, 0),
        createdBy: 'Philly',
        asset: assets.find(x => x.id === 2)
      },
      {
        id: 4,
        created: new Date(),
        startDate: new Date(2018, 12, 25, 10, 0),
        endDate: new Date(2018, 12, 25, 11, 30),
        createdBy: 'Chilly',
        asset: assets.find(x => x.id === 3)
      }
    ];
    return {bookings, assets};
  }

  constructor() {}
}
