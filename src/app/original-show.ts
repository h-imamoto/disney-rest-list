import { DisneyDate } from "./disney-date"

export class OriginalShow {
  name: String;
  restStartDate: DisneyDate;
  restEndDate: DisneyDate;

  constructor(
    name : string,
    restStartDate : DisneyDate,
    restEndDate : DisneyDate = null
  ) {
    this.name = name
    this.restStartDate = restStartDate
    this.restEndDate = restEndDate
  }
}
