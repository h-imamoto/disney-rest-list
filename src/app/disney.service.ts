import { Injectable } from '@angular/core';

import { DisneyRepository } from './disney-repository.service';
import { DateSetPark } from './date-set-park';
import { identifierModuleUrl } from '@angular/compiler';
import { DisneyDate } from './disney-date';
import { TermSetPark } from './term-set-park';
import { OriginalPark } from './original-park';
import { Park } from './park';
import { Atraction } from './atraction';
import { Show } from './show';
import { Land } from './land';
import { Sea } from './sea';
import { RestTerm } from './rest-term';
import { EndDate } from './end-date';

const MOCK_PARK: Park = new Park(
  new Land(
    [
      new Atraction(
        'イッツ・ア・スモールワールド',
        [
          new RestTerm(new DisneyDate('2017/03/01'), new DisneyDate('2017/12/20'))
        ]
      ),
      new Atraction(
        'ガジェットのゴーコースター',
        [
          new RestTerm(new DisneyDate('2017/12/20'), new DisneyDate('2018/01/03')),
          new RestTerm(new DisneyDate('2018/06/25'), new DisneyDate('2018/07/14'))
        ]
      )
    ],
    [
      new Show(
        'ハピネス・イズ・ヒア',
        [],
        new EndDate(new DisneyDate('2018/04/09'))
      ),
      new Show(
        'リロのルアウ＆ファン',
        [
          new RestTerm(new DisneyDate('2017/01/25'), new DisneyDate('2018/02/01'))
        ]
      )
    ]
  ),
  new Sea(
    [
      new Atraction(
        'レイジングスピリッツ',
        [
          new RestTerm(new DisneyDate('2017/12/21'), new DisneyDate('2017/12/26'))
        ]
      ),
      new Atraction(
        'アクアトピア',
        [
          new RestTerm(new DisneyDate('2018/01/02'), new DisneyDate('2018/01/20'))
        ]
      )
    ],
    [
      new Show(
        'ファンタズミック！',
        [
          new RestTerm(new DisneyDate('2018/01/15'), new DisneyDate('2018/02/03'))
        ]
      ),
      new Show(
        'ビッグバンドビート',
        [
          new RestTerm(new DisneyDate('2018/02/05'), new DisneyDate('2018/03/05'))
        ]
      )
    ]
  )
);

@Injectable()
export class DisneyService {
  constructor() { }

  get_date_filtered_schedule(disneyDate: DisneyDate): DateSetPark {
    return MOCK_PARK.createDateSetPark(disneyDate);
  }

  get_term_filtered_schedule(startDate: DisneyDate, endDate: DisneyDate): TermSetPark {
    return MOCK_PARK.createTermSetPark(startDate, endDate);
  }
}
