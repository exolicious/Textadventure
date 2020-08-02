import { TargetAction } from "../TargetAction.js";
export class ExamineTarget extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence, _actionIdentifier) {
        super(_actionIdentifier);
        this.sequence = _sequence;
    }
    async doAction(_targetName) {
        if (_targetName == "")
            this.sequence.log(this.sequence.currentRoom.description);
        else {
            let target = this.searchTarget(_targetName);
            this.sequence.log(target.description);
        }
    }
    searchTarget(_targetName) {
        let target = this.sequence.currentRoom.characters.find((possibleTarget) => {
            return possibleTarget.name.toLowerCase() == _targetName;
        });
        if (!target) {
            throw ("That is not a valid target");
        }
        return target;
    }
}
//# sourceMappingURL=LookAt.js.map