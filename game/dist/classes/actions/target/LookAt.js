import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
export class LookAt extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.LookAt;
    }
    async doAction(_targetName) {
        let lookTarget = this.searchTarget(_targetName.toLowerCase());
        if (lookTarget) {
            MyConsole.consoleLog(lookTarget.description);
        }
        else
            throw ("You cannot look at " + _targetName);
    }
    searchTarget(_targetName) {
        let lookTarget;
        if (this.sequence.player.currentRoom.name.toLowerCase() == _targetName) {
            lookTarget = this.sequence.player.currentRoom;
        }
        if (!lookTarget) {
            lookTarget = this.sequence.player.currentRoom.characters.find((possibleTarget) => {
                return possibleTarget.name.toLowerCase() == _targetName;
            });
            if (!lookTarget) {
                lookTarget = this.sequence.player.currentRoom.inventory.findItem(_targetName);
            }
        }
        return lookTarget;
    }
}
//# sourceMappingURL=LookAt.js.map