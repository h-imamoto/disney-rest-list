import { DisneyDate } from './disney-date';

export class RestTerm {
    restStartDate: DisneyDate;
    restEndDate: DisneyDate;

    constructor(restStartDate: DisneyDate, restEndDate: DisneyDate) {
        this.restStartDate = restStartDate;
        this.restEndDate = restEndDate;
    }

    public getStartDisplayValue(): string {
        return this.restStartDate.getDisplayValue();
    }

    public getEndDisplayValue(): string {
        return this.restEndDate.getDisplayValue();
    }

    public isRest(targetDate: DisneyDate): boolean {
        return (targetDate.isAfter(this.restStartDate)
            && targetDate.isBefore(this.restEndDate))
            || targetDate.isEqual(this.restStartDate)
            || targetDate.isEqual(this.restEndDate);
    }

    public isRestTerm(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return this.isRest(targetStarDate) || this.isRest(targetEndDate);
    }


}
