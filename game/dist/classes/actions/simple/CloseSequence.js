import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
export class CloseSequence extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.CloseSequence;
    }
    async doAction() {
        this.sequence.isSequenceEnd = true;
    }
}
//# sourceMappingURL=CloseSequence.js.map