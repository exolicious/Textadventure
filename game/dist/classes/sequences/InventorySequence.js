import { Sequence } from './Sequence.js';
import { InputHandler } from "../InputHandler";
export class InventorySequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_player) {
        super();
        this.player = _player;
        this.availableActions = "look at {item}, consume the {itemname}, drop(d) {itemname}, quit(q)";
        this.inputHandler = new InputHandler(this, this.getActions());
    }
    getActions() {
        return ["look at", "consume", "drop", "quit"];
    }
    getNPCAction() {
    }
    getSequenceIntroduction() {
        let output = "You open your bag: \r" + this.player.inventory.toString();
        return output;
    }
}
//# sourceMappingURL=InventorySequence.js.map