import { Injectable } from '@angular/core';

import  {DateSetPark} from './date-set-park.ts;

@Injectable()
export class DateSetFilterService {

  constructor() { }

  get_schedule(time_now) : DateSetPark {
    return new DateSetPark()
  }
}
