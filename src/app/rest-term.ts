import { DisneyDate } from "./disney-date";

export class RestTerm {
    restStartDate: DisneyDate
    restEndDate: DisneyDate

    constructor(restStartDate: DisneyDate, restEndDate: DisneyDate) {
        this.restStartDate = restStartDate;
        this.restEndDate = restEndDate;
    }
}
