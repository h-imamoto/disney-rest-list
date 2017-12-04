import { Park } from './park';
import { DateSetLand } from './date-set-land';
import { DateSetSea } from './date-set-sea';

export class DateSetPark implements Park {
    land: DateSetLand;
    sea: DateSetSea;

    constructor(
        land: DateSetLand,
        sea: DateSetSea
    ) {
        this.land = land;
        this.sea = sea;
    }
}
