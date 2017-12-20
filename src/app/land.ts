import { Atraction } from './atraction';
import { Show } from './show';
import { DisneyDate } from './disney-date';
import { DateSetLand } from './date-set-land';
import { RestTerm } from './rest-term';
import { TermSetLand } from './term-set-land';

export class Land {
    atractionList: Atraction[];
    showList: Show[];

    constructor(atractionList: Atraction[], showList: Show[]) {
        this.atractionList = atractionList;
        this.showList = showList;
    }

    public createDateSetLand(targetDate: DisneyDate): DateSetLand {
        return new DateSetLand(
            this.atractionList.filter(v => v.isRestingAt(targetDate)).map(v => v.createSetDateAtraction()),
            this.showList.filter(v => v.isRestingAt(targetDate)).map(v => v.createSetDateShow())
        );
    }

    public createTermSetLand(targetStartDate: DisneyDate, targetEndDate: DisneyDate): TermSetLand {
        return new TermSetLand(
            this.atractionList.filter(v => v.isRestingBetween(targetStartDate, targetEndDate)).map(v => v.createSetTermAtraction()),
            this.showList.filter(v => v.isRestingBetween(targetStartDate, targetEndDate)).map(v => v.createSetTermShow())
        )
    }
}
