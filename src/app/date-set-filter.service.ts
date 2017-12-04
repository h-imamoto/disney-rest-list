import { Injectable } from '@angular/core';

import  {DateSetPark} from './date-set-park';
import { DateSetAtraction } from "./date-set-atraction";
import { RestTerm} from "./rest-term"
import { EndDate } from "./end-date"
import { DisneyDate } from "./disney-date"
import { DateSetShow } from "./date-set-show";
import { DateSetLand } from "./date-set-land";
import { DateSetSea } from "./date-set-sea";

@Injectable()
export class DateSetFilterService {

  constructor() { }

  get_schedule(time_now) : DateSetPark {
    return new DateSetPark(
      new DateSetLand(
        [
          new DateSetAtraction('テストアトラクション1'),
          new DateSetAtraction('テストアトラクション2'),
          new DateSetAtraction('テストアトラクション3'),
          new DateSetAtraction('テストアトラクション4'),
          new DateSetAtraction('テストアトラクション5'),
          new DateSetAtraction('テストアトラクション6'),
        ],
        [
          new DateSetShow('テストショウ1'),
          new DateSetShow('テストショウ2'),
          new DateSetShow('テストショウ3'),
          new DateSetShow('テストショウ4'),
          new DateSetShow('テストショウ5'),
          new DateSetShow('テストショウ6'),
        ]
      ),
      new DateSetSea(
        [
          new DateSetAtraction('テストアトラクション1'),
          new DateSetAtraction('テストアトラクション2'),
          new DateSetAtraction('テストアトラクション3'),
          new DateSetAtraction('テストアトラクション4'),
          new DateSetAtraction('テストアトラクション5'),
          new DateSetAtraction('テストアトラクション6'),
        ],
        [
          new DateSetShow('テストショウ1'),
          new DateSetShow('テストショウ2'),
          new DateSetShow('テストショウ3'),
          new DateSetShow('テストショウ4'),
          new DateSetShow('テストショウ5'),
          new DateSetShow('テストショウ6'),
        ]
      )
    )
  }
}
