import { SimpleAction } from "../SimpleAction.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class ListActions extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.ShowCommands;
        this.sequence = _sequence;
    }
    async doAction() {
        MyConsole.consoleLog(this.sequence.availableActions);
    }
}
//# sourceMappingURL=ShowAvailableActions.js.map