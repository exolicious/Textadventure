import {TargetAction} from "./TargetAction.js";
import {ActionTarget} from "./ActionTarget";
import {FightSequence} from "./FightSequence";
import {Enemy} from "./Enemy";
export class LookAt extends TargetAction {
  /*__________________________________________________________________________________________________________________________________________*/

  public doAction(_targetName: string): void {
    let target: ActionTarget = this.searchTarget(_targetName);
    this.parentSequence.log(target.description);
  }

  public setLegalTargets(): void {
    this.legalTargets = this.parentSequence.currentRoom.characters;
  }
}
