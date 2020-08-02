import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class BuyItem extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.BuyItem;
    }
    async doAction(_targetName) {
        let targetItem = this.searchTarget(_targetName.toLowerCase());
        if (targetItem) {
            if (targetItem.price <= this.sequence.player.coins) {
                this.sequence.player.coins -= targetItem.price;
                this.sequence.player.inventory.addItem(targetItem);
                this.logPurchaseSummary(targetItem);
            }
            else
                throw (targetItem.name + " costs " + targetItem.price + " coins, however you only have " + this.sequence.player.coins + " coins.");
        }
        else
            throw ("There is no " + _targetName + " in your inventory");
    }
    searchTarget(_targetName) {
        return this.sequence.shopKeeper.inventory.findItem(_targetName);
    }
    logPurchaseSummary(_purchasedItem) {
        let output = "You successfuly purchased " + _purchasedItem.name + " for a price of " + _purchasedItem.price + " coins. \r" +
            "The shopkeeper smirks for some reason.\r";
        output += "Your new balance: " + this.sequence.player.coins + " coins. \r";
        MyConsole.consoleLog(output);
    }
}
//# sourceMappingURL=BuyItem.js.map