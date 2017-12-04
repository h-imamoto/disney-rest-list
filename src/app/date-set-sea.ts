import { DateSetAtraction } from './date-set-atraction';
import { DateSetShow } from './date-set-show';

export class DateSetSea {
    atractionList: DateSetAtraction[];
    showList: DateSetShow[];

    constructor(atractionList: DateSetAtraction[],
        showList: DateSetShow[]
    ) {
        this.atractionList = atractionList;
        this.showList = showList;
    }
}
