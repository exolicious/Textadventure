import { Action } from "../Action.js";
import { PlayerInventorySequence } from "../../sequences/PlayerInventorySequence.js";
import { EActions } from "../../../enums/EActions.js";
export class ShowInventory extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.ShowInventory;
    }
    async doAction() {
        let inventorySequence = new PlayerInventorySequence();
        await inventorySequence.main();
    }
}
//# sourceMappingURL=ShowInventory.js.map