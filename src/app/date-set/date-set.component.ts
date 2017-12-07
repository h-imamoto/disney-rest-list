import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateSetPark } from '../date-set-park';
import { RestingAtraction } from '../resting-atraction';
import { DisneyService } from '../disney.service';
import { DisneyDate } from '../disney-date';

const ATRACTIONS: RestingAtraction[] = [
  new RestingAtraction('空飛ぶダンボ'),
  new RestingAtraction('カリブの海賊')
];

@Component({
  selector: 'app-date-set',
  templateUrl: './date-set.component.html',
  styleUrls: ['./date-set.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DisneyService]
})
export class DateSetComponent implements OnInit {
  title = '日付指定休止アトラクション/ショー';
  restAtractions: RestingAtraction[] = this.disneyService.get_date_filtered_schedule();

  constructor(private disneyService: DisneyService) {

  }

  ngOnInit() {
  }

}
