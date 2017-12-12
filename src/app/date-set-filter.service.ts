import { Injectable } from '@angular/core';

import { DateSetPark } from './date-set-park';
import { RestingAtraction } from './resting-atraction';
import { RestingShow } from './resting-show';
import { RestTerm } from './rest-term';
import { EndDate } from './end-date';
import { DisneyDate } from './disney-date';
import { DateSetLand } from './date-set-land';
import { DateSetSea } from './date-set-sea';


@Injectable()
export class DateSetFilter {

  constructor() { }
  get_schedule(time_now): DateSetPark {
    return new DateSetPark(
      new DateSetLand(
        [
          new RestingAtraction('テストアトラクション1'),
          new RestingAtraction('テストアトラクション2'),
          new RestingAtraction('テストアトラクション3'),
          new RestingAtraction('テストアトラクション4'),
          new RestingAtraction('テストアトラクション5'),
          new RestingAtraction('テストアトラクション6'),
        ],
        [
          new RestingShow('テストショウ1'),
          new RestingShow('テストショウ2'),
          new RestingShow('テストショウ3'),
          new RestingShow('テストショウ4'),
          new RestingShow('テストショウ5'),
          new RestingShow('テストショウ6'),
        ]
      ),
      new DateSetSea(
        [
          new RestingAtraction('テストアトラクション1'),
          new RestingAtraction('テストアトラクション2'),
          new RestingAtraction('テストアトラクション3'),
          new RestingAtraction('テストアトラクション4'),
          new RestingAtraction('テストアトラクション5'),
          new RestingAtraction('テストアトラクション6'),
        ],
        [
          new RestingShow('テストショウ1'),
          new RestingShow('テストショウ2'),
          new RestingShow('テストショウ3'),
          new RestingShow('テストショウ4'),
          new RestingShow('テストショウ5'),
          new RestingShow('テストショウ6'),
        ]
      )
    );
  }
}
