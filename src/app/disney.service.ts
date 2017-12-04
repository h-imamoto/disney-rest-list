import { Injectable } from '@angular/core';

import  {DateSetFilterService} from './date-set-filter.service';
import  {TermSetFilterService} from './term-set-filter.service';
import  {DisneyRepositoryService} from './disney-repository.service';

@Injectable({
  providers: [TermSetFilterService, DateSetFilterService]
})
export class DisneyService {
  constructor(private termSetFildterService: TermSetFilterService, private dateSetFilterService: DateSetFilterService) {}

  get_date_filtered_schedule(time_now){
    this.dateSetFilterService.get_schedule(time_now)
  }

  get_term_filtered_schedule(time_now, term){
    this.termSetFildterService.get_schedule(time_now, term)
  }
}
