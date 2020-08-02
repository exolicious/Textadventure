import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
export class DropItem extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.DropItem;
    }
    async doAction(_targetName) {
        let targetItem = this.searchTarget(_targetName.toLowerCase());
        if (targetItem) {
            this.sequence.player.inventory.removeItem(targetItem);
            this.sequence.player.currentRoom.inventory.addItem(targetItem);
        }
        else
            throw ("You cannot drop " + _targetName);
    }
    searchTarget(_targetName) {
        return this.sequence.player.inventory.findItem(_targetName);
    }
}
//# sourceMappingURL=DropItem.js.map