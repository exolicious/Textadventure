import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class ConsumeItem extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.ConsumeItem;
    }
    async doAction(_targetName) {
        let targetItem = this.searchTarget(_targetName.toLowerCase());
        if (targetItem) {
            if (targetItem.type == "potion") {
                this.sequence.player.setHealth(targetItem.healAmount, true);
                this.sequence.player.inventory.removeItem(targetItem);
                MyConsole.consoleLog("You drink the " + targetItem.name + " and feel energized.\r" +
                    this.sequence.player.name + ": " + this.sequence.player.currentHealth + "/" + this.sequence.player.maxHealth + " HP\r");
            }
            else
                throw ("You can not consume " + targetItem.name);
        }
        else
            throw ("There is no " + _targetName + " in your inventory");
    }
    searchTarget(_targetName) {
        return this.sequence.player.inventory.findItem(_targetName);
    }
}
//# sourceMappingURL=ConsumeItem.js.map