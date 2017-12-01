import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateSetPark } from '../date-set-park';

@Component({
  selector: 'app-date-set',
  templateUrl: './date-set.component.html',
  styleUrls: ['./date-set.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateSetComponent implements OnInit {
   park: DateSetPark;
   date: Date;


  constructor(park: DateSetPark, date: Date) {
    this.park = park;
    this.date = date;
   }

  ngOnInit() {
  }

}
