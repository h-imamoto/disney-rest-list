import { Land } from './land';
import { Sea } from './sea';
import { DisneyDate } from './disney-date';
import { DateSetPark } from './date-set-park';
import { RestTerm } from './rest-term';
import { TermSetPark } from './term-set-park';

export class Park {
    land: Land;
    sea: Sea;

    constructor(land: Land, sea: Sea) {
        this.land = land;
        this.sea = sea;
    }

    public createDateSetPark(targetDate: DisneyDate): DateSetPark {
        return new DateSetPark(
            this.land.createDateSetLand(targetDate),
            this.sea.createDateSetSea(targetDate)
        );
    }

    public createTermSetPark(targetStartDate: DisneyDate, targetEndDate: DisneyDate): TermSetPark {
        return new TermSetPark(
            this.land.createTermSetLand(targetStartDate, targetEndDate),
            this.sea.createTermSetSea(targetStartDate, targetEndDate)
        );
    }
}
