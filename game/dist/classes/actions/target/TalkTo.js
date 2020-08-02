import { ShopSequence } from "../../sequences/ShopSequence.js";
import { Action } from "../../actions/Action.js";
import { EActions } from "../../../enums/EActions.js";
import { FightSequence } from "../../sequences/FightSequence.js";
import { MyConsole } from "../../MyConsole.js";
export class TalkTo extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.TalkTo;
    }
    async doAction(_targetName) {
        let talkTarget = this.searchTarget(_targetName.toLowerCase());
        if (talkTarget) {
            if (talkTarget.type.includes("shopkeeper")) {
                let shopSequence = new ShopSequence(talkTarget);
                await shopSequence.main();
            }
            else if (talkTarget.type.includes("enemy")) {
                let fightSequence = new FightSequence(talkTarget, true);
                await fightSequence.main();
            }
            else if (talkTarget.type.includes("character")) {
                await MyConsole.typeWriteLog(talkTarget.introduction);
            }
        }
        else
            throw ("You cannot talk to " + _targetName);
    }
    searchTarget(_targetName) {
        return this.sequence.player.currentRoom.characters.find((possibleTarget) => {
            return possibleTarget.name.toLowerCase() == _targetName;
        });
    }
}
//# sourceMappingURL=TalkTo.js.map