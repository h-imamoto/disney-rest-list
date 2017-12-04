import { DateSetShow } from './date-set-show';

export class RestingShow implements DateSetShow {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
}
