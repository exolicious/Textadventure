import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class ShowAvailableActions extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.ShowCommands;
    }
    async doAction() {
        await MyConsole.typeWriteLog("     ");
        MyConsole.consoleLog("Your options are: " + this.sequence.availableActions);
    }
}
//# sourceMappingURL=ShowAvailableActions.js.map