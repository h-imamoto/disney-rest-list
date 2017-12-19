import { RestTerm } from './rest-term';
import { EndDate } from './end-date';
import { DisneyDate } from './disney-date';

export class Atraction {
    name : string
    restTerms : RestTerm[]
    endDate : EndDate

    constructor(
        name : string,
        restTerms : RestTerm[],
        endDate : EndDate = null
    ) {
        this.name = name
        this.restTerms = restTerms
        this.endDate = endDate
    }

    public isRestingAt(targetDate: DisneyDate): boolean {
        return true;
    }

    public isRestingBetween(targetTerm: RestTerm): boolean {
        return true;
    }

    public createSetDateAtraction() {
        return null;
    }

    public createSetTermAtraction() {
        return null;
    }
}
