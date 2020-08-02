import { TargetAction } from "../TargetAction.js";
export class ExamineRoomEntity extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence, _actionIdentifier) {
        super(_actionIdentifier);
        this.sequence = _sequence;
    }
    async doAction(_targetName) {
        let examineTarget = this.searchTarget(_targetName);
        if (examineTarget) {
            this.sequence.log(examineTarget.description);
        }
        throw ("You cannot see clearly.");
    }
    searchTarget(_targetName) {
        if (this.sequence.currentRoom.name == _targetName) {
            return this.sequence.currentRoom;
        }
        let possibleTarget = this.sequence.currentRoom.characters.find((possibleTarget) => {
            return possibleTarget.name.toLowerCase() == _targetName;
        });
        if (!possibleTarget)
            possibleTarget = this.sequence.currentRoom.inventory.find(_targetName);
        return possibleTarget;
    }
}
//# sourceMappingURL=LookAt.js.map