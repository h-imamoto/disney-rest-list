import { RestTerm } from './rest-term';
import { EndDate } from './end-date';
import { DisneyDate } from './disney-date';
import { RestingShow } from './resting-show';
import { TermSetShow } from './term-set-show';

export class Show {
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
        return this.restTerms.some(v => v.isRestTerm(targetStartDate, targetEndDate));
    }

    public createSetDateShow(): RestingShow {
        return new RestingShow(this.name);
    }

    public createSetTermShow(): TermSetShow {
        return new TermSetShow(this.name, this.restTerms, this.endDate);
    }
}
