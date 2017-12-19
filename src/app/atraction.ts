import { RestTerm } from './rest-term';
import { EndDate } from './end-date';
import { DisneyDate } from './disney-date';
import { DateSetAtraction } from './date-set-atraction';
import { TermSetAtraction } from './term-set-atraction';
import { RestingAtraction } from './resting-atraction';

export class Atraction {
    name: string;
    restTerms: RestTerm[];
    endDate: EndDate;

    constructor(
        name: string,
        restTerms: RestTerm[],
        endDate: EndDate = null
    ) {
        this.name = name;
        this.restTerms = restTerms;
        this.endDate = endDate;
    }

    public isRestingAt(targetDate: DisneyDate): boolean {
        return this.restTerms.some(function(value){
            return value.isRest(targetDate);
        });
    }

    public isRestingBetween(targetStartDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return ;
    }

    public createSetDateAtraction(): RestingAtraction {
        return new RestingAtraction(this.name);
    }

    public createSetTermAtraction(): TermSetAtraction {
        return ;
    }
}
