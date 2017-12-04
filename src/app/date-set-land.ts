import { RestingAtraction } from './resting-atraction';
import { RestingShow } from './resting-show';

export class DateSetLand {
    atractionList: RestingAtraction[];
    showList: RestingShow[];

    constructor(
        atractionList: RestingAtraction[],
        showList: RestingShow[]
    ) {
        this.atractionList = atractionList;
        this.showList = showList;
    }
}
