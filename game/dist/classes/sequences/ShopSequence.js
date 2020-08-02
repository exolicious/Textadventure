import { Sequence } from './Sequence.js';
import { Player } from "../entities/Player.js";
import { ShowAvailableActions } from "../actions/simple/ShowAvailableActions.js";
import { BuyItem } from "../actions/target/BuyItem.js";
import { ExamineItem } from "../actions/target/ExamineItem.js";
import { CloseSequence } from "../actions/simple/CloseSequence.js";
import { MyConsole } from "../../classes/MyConsole.js";
export class ShopSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_shopKeeper) {
        super();
        this.player = Player.getInstance();
        this.shopKeeper = _shopKeeper;
        this.availableActions = "commands, buy {item}, examine {item}, close(cl)";
    }
    instantiateActions() {
        this.actions.push(new ShowAvailableActions(this));
        this.actions.push(new BuyItem(this));
        this.actions.push(new ExamineItem(this));
        this.actions.push(new CloseSequence(this));
    }
    async typeWriteSequenceIntroduction() {
        let output = this.shopKeeper.name + " " + this.shopKeeper.introduction;
        MyConsole.consoleLog(output);
    }
    async logReocurringInfo() {
        await MyConsole.typeWriteLog(this.shopKeeper.inventory.toString(true));
    }
}
//# sourceMappingURL=ShopSequence.js.map