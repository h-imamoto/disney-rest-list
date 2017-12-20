import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DisneyService } from '../disney.service';
import { TermSetPark } from '../term-set-park';
import { DisneyDate } from '../disney-date';

@Component({
  selector: 'app-term-set',
  templateUrl: './term-set.component.html',
  styleUrls: ['./term-set.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DisneyService]
})
export class TermSetComponent implements OnInit {
  termSetPark: TermSetPark;

  constructor(private disneyService: DisneyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.termSetPark = this.disneyService.get_term_filtered_schedule(
        new DisneyDate(params['start']), new DisneyDate(params['end'])
      )
    );
  }
}
