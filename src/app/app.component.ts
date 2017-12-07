import { Component } from '@angular/core';
import { DisneyDate } from "./disney-date";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateSetDate: DisneyDate = new DisneyDate('2017/12/01')
  termSetStartDate: DisneyDate = new DisneyDate('2017/12/01')
  termSetEndDate: DisneyDate = new DisneyDate('2018/01/01')
}
