import { Action } from "../Action.js";
import { FightSequence } from "../../sequences/FightSequence.js";
import { EActions } from "../../../enums/EActions.js";
export class StartFight extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.StartFight;
    }
    async doAction(_targetName) {
        let enemyTarget = this.searchTarget(_targetName.toLowerCase());
        if (enemyTarget.type.includes("enemy")) {
            let fightSequence = new FightSequence(enemyTarget);
            await fightSequence.main();
        }
        else {
            throw (enemyTarget.name + " is visibly scared as you approach him. 'Poor guy', you think as you decide against fighting him.");
        }
    }
    searchTarget(_targetName) {
        for (let target of this.sequence.player.currentRoom.characters) {
            if (target.name.toLowerCase() == _targetName) {
                return target;
            }
        }
        throw ("You cannot start a fight with '" + _targetName + "'");
    }
}
//# sourceMappingURL=StartFight.js.map