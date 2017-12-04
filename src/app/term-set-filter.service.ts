import { Injectable } from '@angular/core';
import { TermSetPark } from './term-set-park'
import { TermSetAtraction } from "./term-set-atraction";
import { RestTerm} from "./rest-term"
import { EndDate } from "./end-date"
import { DisneyDate } from "./disney-date"
import { TermSetShow } from "./term-set-show";
import { TermSetLand } from "./term-set-land";
import { TermSetSea } from "./term-set-sea";

@Injectable()
export class TermSetFilterService {

  constructor() { }

  get_schedule(time_now, term) : TermSetPark {
    return new TermSetPark(
      new TermSetLand(
        [
          new TermSetAtraction(
            'テストアトラクション1',
            new RestTerm[new DisneyDate("2017/12/1"), new DisneyDate("2017/12/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション2',[],
            new EndDate(new DisneyDate("2017/12/1"))
          ),
          new TermSetAtraction(
            'テストアトラクション3',
            new RestTerm[new DisneyDate("2017/12/16"), new DisneyDate("2017/12/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション4',
            new RestTerm[new DisneyDate("2018/1/1"), new DisneyDate("2018/1/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション5',[],
            new EndDate(new DisneyDate("2017/12/16"))
          ),
          new TermSetAtraction(
            'テストアトラクション6',[],
            new EndDate(new DisneyDate("2017/1/1"))
          ),
        ],
        [
          new TermSetShow(
            'テストショウ1',
            new RestTerm[new DisneyDate("2017/12/1"), new DisneyDate("2017/12/31")]
          ),
          new TermSetShow(
            'テストショウ2',[],
            new EndDate(new DisneyDate("2017/12/1"))
          ),
          new TermSetShow(
            'テストショウ3',
            new RestTerm[new DisneyDate("2017/12/16"), new DisneyDate("2017/12/31")]
          ),
          new TermSetShow(
            'テストショウ4',
            new RestTerm[new DisneyDate("2018/1/1"), new DisneyDate("2018/1/31")]
          ),
          new TermSetShow(
            'テストショウ5',[],
            new EndDate(new DisneyDate("2017/12/16"))
          ),
          new TermSetShow(
            'テストショウ6',[],
            new EndDate(new DisneyDate("2017/1/1"))
          ),
        ]
      ),
      new TermSetSea(
        [
          new TermSetAtraction(
            'テストアトラクション1',
            new RestTerm[new DisneyDate("2017/12/1"), new DisneyDate("2017/12/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション2',[],
            new EndDate(new DisneyDate("2017/12/1"))
          ),
          new TermSetAtraction(
            'テストアトラクション3',
            new RestTerm[new DisneyDate("2017/12/16"), new DisneyDate("2017/12/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション4',
            new RestTerm[new DisneyDate("2018/1/1"), new DisneyDate("2018/1/31")]
          ),
          new TermSetAtraction(
            'テストアトラクション5',[],
            new EndDate(new DisneyDate("2017/12/16"))
          ),
          new TermSetAtraction(
            'テストアトラクション6',[],
            new EndDate(new DisneyDate("2017/1/1"))
          ),
        ],
        [
          new TermSetShow(
            'テストショウ1',
            new RestTerm[new DisneyDate("2017/12/1"), new DisneyDate("2017/12/31")]
          ),
          new TermSetShow(
            'テストショウ2',[],
            new EndDate(new DisneyDate("2017/12/1"))
          ),
          new TermSetShow(
            'テストショウ3',
            new RestTerm[new DisneyDate("2017/12/16"), new DisneyDate("2017/12/31")]
          ),
          new TermSetShow(
            'テストショウ4',
            new RestTerm[new DisneyDate("2018/1/1"), new DisneyDate("2018/1/31")]
          ),
          new TermSetShow(
            'テストショウ5',[],
            new EndDate(new DisneyDate("2017/12/16"))
          ),
          new TermSetShow(
            'テストショウ6',[],
            new EndDate(new DisneyDate("2017/1/1"))
          ),
        ]
      )
    )
  }
}
