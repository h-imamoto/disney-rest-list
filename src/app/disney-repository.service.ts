import { Injectable } from '@angular/core';
import { OriginalPark } from './original-park';
import { OriginalLand } from './original-land';
import { OriginalSea } from './original-sea';
import { OriginalAtraction} from './original-atraction';
import { OriginalShow} from './original-show';
import { DisneyDate } from "./disney-date"
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DisneyRepository {
  constructor(private http: HttpClient) {}

  get_disney_json(){
    var park = new OriginalPark();
    this.http.get('http://localhost:5000/disney-api.json').subscribe(data => {
      var attractions = data['attractions'];
      for (let d in attractions) {
        if (d['place'] == 'land') {
          if (d['type'] == 'attraction') {
            park.originalLand.atractions.push(new OriginalAtraction(d['title'], new DisneyDate(d['start']), new DisneyDate(d['end'])));
          }
          else if(d['type'] == 'show'){
            park.originalLand.shows.push(new OriginalShow(d['title'], new DisneyDate(d['start']), new DisneyDate(d['end'])));
          }
        }
        else if (d['place'] == 'sea') {
          if (d['type'] == 'attraction') {
            park.originalSea.atractions.push(new OriginalAtraction(d['title'], new DisneyDate(d['start']), new DisneyDate(d['end'])));
          }
          else if(d['type'] == 'show'){
            park.originalSea.shows.push(new OriginalShow(d['title'], new DisneyDate(d['start']), new DisneyDate(d['end'])));
          }
        }
      }
      return park
    });

  }
}
