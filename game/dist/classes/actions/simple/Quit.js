import { SimpleAction } from "../SimpleAction.js";
import { EAllActions } from "../../../enums/EAllActions.js";
export class Quit extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super();
        this.sequence = _sequence;
        this.actionIdentifier = EAllActions.Quit;
    }
    async doAction() {
    }
}
//# sourceMappingURL=Quit.js.map