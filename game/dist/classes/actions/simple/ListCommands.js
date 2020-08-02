import { SimpleAction } from "../SimpleAction.js";
export class ListCommands extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence, _actionIdentifier) {
        super(_actionIdentifier);
        this.sequence = _sequence;
    }
    async doAction() {
        this.sequence.log(this.sequence.availableActions);
    }
}
//# sourceMappingURL=ShowAvailableActions.js.map