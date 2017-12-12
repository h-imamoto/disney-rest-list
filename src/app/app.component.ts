import { Component } from '@angular/core';
import { DisneyDate } from "./disney-date";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateSetDate: DisneyDate = new DisneyDate(new Date())
  termSetStartDate: DisneyDate = new DisneyDate(new Date())
  termSetEndDate: DisneyDate = new DisneyDate(new Date())
}
