import { SimpleAction } from "../SimpleAction.js";
import { EActions } from "../../../enums/EActions.js";
export class CloseInventory extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.CloseInventory;
    }
    async doAction() {
        this.sequence.isSequenceEnd = true;
    }
}
//# sourceMappingURL=CloseInventory.js.map