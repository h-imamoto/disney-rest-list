import { DateSetAtraction } from './date-set-atraction';

export class RestingAtraction implements DateSetAtraction {
    name: String;

    constructor(name: String) {
        this.name = name;
    }
}
