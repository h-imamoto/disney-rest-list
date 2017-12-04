import { TermSetAtraction } from "./term-set-atraction";
import { TermSetShow } from "./term-set-show";

export class TermSetLand {
    termSetAtractionList: TermSetAtraction[]
    termSetShowList: TermSetShow[]

    constructor(
        termSetAtractionList: TermSetAtraction[],
        termSetShowList: TermSetShow[]
    ) {
        this.termSetAtractionList = termSetAtractionList;
        this.termSetShowList = termSetShowList;
    }
}
