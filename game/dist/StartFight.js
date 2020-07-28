import { TargetAction } from "./TargetAction.js";
import { FightSequence } from "./FightSequence.js";
export class StartFight extends TargetAction {
    /*__________________________________________________________________________________________________________________________________________*/
    async doAction(_targetName) {
        let targetEnemy = this.searchTarget(_targetName);
        let fightSequence = new FightSequence(targetEnemy);
        await fightSequence.main();
    }
    setLegalTargets() {
        console.log(this.parentSequence.currentRoom.characters);
        this.legalTargets = this.parentSequence.currentRoom.characters;
    }
}
//# sourceMappingURL=StartFight.js.map