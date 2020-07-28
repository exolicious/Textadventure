import { TargetAction } from "./TargetAction.js";
export class LookAt extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    doAction(_targetName) {
        let target = this.searchTarget(_targetName);
        this.parentSequence.log(target.description);
    }
    setLegalTargets() {
        this.legalTargets = this.parentSequence.currentRoom.characters;
    }
}
//# sourceMappingURL=LookAt.js.map