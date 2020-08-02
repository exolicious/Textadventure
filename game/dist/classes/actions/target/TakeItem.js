import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class TakeItem extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.TakeItem;
    }
    async doAction(_targetName) {
        let targetItem = this.searchTarget(_targetName.toLowerCase());
        if (targetItem) {
            this.sequence.player.currentRoom.inventory.removeItem(targetItem);
            this.sequence.player.inventory.addItem(targetItem);
            MyConsole.consoleLog(targetItem.name + " has been added to your inventory.\r");
        }
        else
            throw ("You cannot take " + _targetName);
    }
    searchTarget(_targetName) {
        return this.sequence.player.currentRoom.inventory.findItem(_targetName);
    }
}
//# sourceMappingURL=TakeItem.js.map