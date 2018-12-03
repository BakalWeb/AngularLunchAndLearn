import { Asset } from './asset.interface';
import { Time } from '@angular/common';

export interface Booking {
  id: number;
  created: Date;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  asset: Asset;
}
