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
        return (targetDate.isAfter(this.restStartDate) || targetDate.isEqual(this.restStartDate))
            && (targetDate.isBefore(this.restEndDate) || targetDate.isEqual(this.restEndDate));
    }

    public isRestTerm(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return this.isPinpoint(targetStarDate, targetEndDate)
            || this.isExistRestTerm(targetStarDate, targetEndDate)
            || this.isRestTermBefore(targetStarDate, targetEndDate)
            || this.isRestTermAfter(targetStarDate, targetEndDate)
            || this.isOver(targetStarDate, targetEndDate);
    }

    private isPinpoint(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return (this.restStartDate.isEqual(this.restEndDate))
            && this.isExistRestTerm(targetStarDate, targetEndDate);
    }

    private isExistRestTerm(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return (targetStarDate.isEqual(this.restStartDate) || targetStarDate.isBefore(this.restStartDate))
            && (targetEndDate.isEqual(this.restEndDate) || targetEndDate.isAfter(this.restEndDate));
    }

    private isRestTermBefore(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return ((targetStarDate.isAfter(this.restStartDate) && targetStarDate.isBefore(this.restEndDate))
            && (targetEndDate.isEqual(this.restEndDate) || targetEndDate.isAfter(this.restEndDate)))
            || targetStarDate.isEqual(this.restEndDate);
    }

    private isRestTermAfter(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return ((targetStarDate.isBefore(this.restStartDate))
            && (targetEndDate.isBefore(this.restEndDate) && targetEndDate.isAfter(this.restStartDate)))
            || targetEndDate.isEqual(this.restStartDate);
    }

    private isOver(targetStarDate: DisneyDate, targetEndDate: DisneyDate): boolean {
        return targetStarDate.isAfter(this.restStartDate) && targetEndDate.isBefore(this.restEndDate);
    }

}
