import { RestTerm } from "./rest-term";
import { EndDate } from "./end-date";

export class TermSetAtraction {
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
}
