import { OriginalAtraction } from './original-atraction';
import { OriginalShow } from './original-show';

export class OriginalLand {
  atractions: OriginalAtraction[];
  shows: OriginalShow[];

  constructor(atractions: OriginalAtraction[], shows: OriginalShow[]) {
    this.atractions = atractions;
    this.shows = shows;
  }
}
