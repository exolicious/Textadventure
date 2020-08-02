import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class ExamineItem extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.ExamineItem;
    }
    async doAction(_targetName) {
        let targetItem = this.searchTarget(_targetName.toLowerCase());
        if (targetItem) {
            MyConsole.consoleLog(targetItem.description);
        }
        else
            throw ("You can not examine " + _targetName);
    }
    searchTarget(_targetName) {
        let possibleTarget = this.sequence.player.inventory.findItem(_targetName);
        return possibleTarget;
    }
}
//# sourceMappingURL=ExamineItem.js.map