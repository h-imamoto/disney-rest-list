import { Park } from "./park";
import { TermSetLand } from "./term-set-land";
import { TermSetSea } from "./term-set-sea";

export class TermSetPark implements Park {
    termSetLand: TermSetLand
    termSetSea: TermSetSea

    constructor(
        termSetLand: TermSetLand,
        termSetSea: TermSetSea
    ) {
        this.termSetLand = termSetLand;
        this.termSetSea = termSetSea;
    }
}
