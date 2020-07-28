import {TargetAction} from "./TargetAction.js";
import {ActionTarget} from "./ActionTarget.js";
import {FightSequence} from "./FightSequence.js";
import {Enemy} from "./Enemy.js";

export class StartFight extends TargetAction {
  /*__________________________________________________________________________________________________________________________________________*/

  public async doAction(_targetName: string): Promise<void> {
    let targetEnemy: ActionTarget = this.searchTarget(_targetName);
    let fightSequence = new FightSequence(<Enemy>targetEnemy);
    await fightSequence.main();
  }

  public setLegalTargets(): void {
    console.log(this.parentSequence.currentRoom.characters);
    this.legalTargets = this.parentSequence.currentRoom.characters;
  }
}