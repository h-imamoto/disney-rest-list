import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateSetPark } from '../date-set-park';
import { RestingAtraction } from '../resting-atraction';

const ATRACTIONS: RestingAtraction[] = [
  new RestingAtraction('空飛ぶダンボ'),
  new RestingAtraction('カリブの海賊')
];

@Component({
  selector: 'app-date-set',
  templateUrl: './date-set.component.html',
  styleUrls: ['./date-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateSetComponent implements OnInit {
  title = '日付指定休止アトラクション/ショー';
  restAtractions: RestingAtraction[] = ATRACTIONS;

  ngOnInit() {
  }

}
