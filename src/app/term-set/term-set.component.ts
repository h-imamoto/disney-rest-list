import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisneyService } from '../disney.service';
import { DateSetFilter } from '../date-set-filter.service';

@Component({
  selector: 'app-term-set',
  templateUrl: './term-set.component.html',
  styleUrls: ['./term-set.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DisneyService, DateSetFilter]
})
export class TermSetComponent implements OnInit {

  constructor(private disneyService: DisneyService) { }

  ngOnInit() {
  }

}
