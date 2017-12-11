import { Injectable } from '@angular/core';
import { OriginalPark } from './original-park';


@Injectable()
export class DisneyRepository {
  constructor() {}

  get_original_park(): OriginalPark {
    return new OriginalPark();
  }
}
