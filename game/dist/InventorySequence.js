import { Sequence } from './Sequence.js';
export class InventorySequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor() {
        super();
        this.availableActions = "commands (c), drop(d) {itemname}";
    }
    async main() {
        await this.typeWriteStory(this.getSequenceIntroduction());
        this.log(this.availableActions);
        while (!this.isSequenceEnd) {
            await this.getPlayerAction();
        }
    }
    getSequenceIntroduction() {
        return "You open your bag";
    }
}
//# sourceMappingURL=InventorySequence.js.map