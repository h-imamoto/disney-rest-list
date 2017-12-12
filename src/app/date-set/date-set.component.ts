import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateSetPark } from '../date-set-park';
import { RestingAtraction } from '../resting-atraction';
import { DisneyService } from '../disney.service';
import { DisneyDate } from '../disney-date';
import { DateSetFilter } from '../date-set-filter.service';
import { TermSetFilter } from '../term-set-filter.service';

const ATRACTIONS: RestingAtraction[] = [
  new RestingAtraction('空飛ぶダンボ'),
  new RestingAtraction('カリブの海賊')
];

@Component({
  selector: 'app-date-set',
  templateUrl: './date-set.component.html',
  styleUrls: ['./date-set.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DisneyService, DateSetFilter, TermSetFilter]
})
export class DateSetComponent implements OnInit {
  title = '日付指定休止アトラクション/ショー';
  park: DateSetPark = this.disneyService.get_date_filtered_schedule(new DisneyDate('2017/12/8'));


  constructor(private disneyService: DisneyService) {

  }

  ngOnInit() {
  }

}
