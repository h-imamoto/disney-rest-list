import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { DisneyDate } from "./disney-date";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateSetDate: string = new DisneyDate(new Date()).getUrlValue()
  termSetStartDate: string = new DisneyDate(new Date()).getUrlValue()
  termSetEndDate: string = new DisneyDate(new Date(new Date().getTime() + 14 * 86400000)).getUrlValue()
}
