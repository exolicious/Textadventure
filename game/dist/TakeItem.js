import { TargetAction } from "./TargetAction.js";
export class TakeItem extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    doAction(_target) {
    }
    setLegalTargets() {
        this.legalTargets = this.parentSequence.currentRoom.items;
    }
}
//# sourceMappingURL=TakeItem.js.map