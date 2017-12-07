import { Injectable } from '@angular/core';

import  {DateSetFilter} from './date-set-filter.service';
import  {TermSetFilter} from './term-set-filter.service';
import  {DisneyRepository} from './disney-repository.service';
import { DisneyDate } from "./disney-date";

@Injectable({
  providers: [TermSetFilter, DateSetFilter]
})
export class DisneyService {
  constructor(private termSetFildter: TermSetFilter, private dateSetFilter: DateSetFilter) {}

  get_date_filtered_schedule(time_now){
    this.dateSetFilter.get_schedule(time_now)
  }

  get_term_filtered_schedule(startDate: DisneyDate, term){
    this.termSetFildter.get_schedule(time_now, term)
  }
}
