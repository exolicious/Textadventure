import { TargetAction } from "../TargetAction.js";
import { FightSequence } from "../../sequences/FightSequence.js";
import { EActions } from "../../../enums/EActions.js";
export class FightWith extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super();
        this.sequence = _sequence;
        this.actionIdentifier = EActions.FightWith;
    }
    async doAction(_targetName) {
        let fightSequence = new FightSequence(this.searchTarget(_targetName.toLowerCase()));
        await fightSequence.main();
    }
    searchTarget(_targetName) {
        for (let target of this.sequence.player.currentRoom.characters) {
            if (target.name.toLowerCase() == _targetName && target.type.includes("enemy")) {
                return target;
            }
        }
        throw ("You cannot start a fight with '" + _targetName + "'");
    }
}
//# sourceMappingURL=StartFight.js.map