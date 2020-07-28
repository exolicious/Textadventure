import {TargetAction} from "./TargetAction.js";
import {ICommandTarget} from "./ICommandTarget.js";

export class TakeItem extends TargetAction {
  /*__________________________________________________________________________________________________________________________________________*/

  public doAction(_target: ICommandTarget): void {

  }
  public setLegalTargets(): void {
    this.legalTargets = this.parentSequence.currentRoom.items;
  }

}
