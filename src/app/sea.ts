import { Atraction } from './atraction';
import { Show } from './show';
import { DisneyDate } from './disney-date';
import { DateSetSea } from './date-set-sea';
import { RestTerm } from './rest-term';
import { TermSetSea } from './term-set-sea';

export class Sea {
    atractionList: Atraction[];
    showList: Show[];

    constructor(atractionList: Atraction[], showList: Show[]) {
        this.atractionList = atractionList;
        this.showList = showList;
    }

    public createDateSetSea(targetDate: DisneyDate): DateSetSea {
        return new DateSetSea(
            this.atractionList.filter(v => v.isRestingAt(targetDate)).map(v => v.createSetDateAtraction()),
            this.showList.filter(v => v.isRestingAt(targetDate)).map(v => v.createSetDateShow())
        );
    }

    public createTermSetSea(targetTerm: RestTerm): TermSetSea {
        return new TermSetSea(
            this.atractionList.filter(v => v.isRestingBetween(targetTerm)).map(v => v.createSetTermAtraction()),
            this.showList.filter(v => v.isRestingBetween(targetTerm)).map(v => v.createSetTermShow())
        )
    }
}
