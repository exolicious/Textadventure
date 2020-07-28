import {Action} from "./Action.js";
import {ActionTarget} from "./ActionTarget.js";
import {Sequence} from "./Sequence.js";

export abstract class TargetAction extends Action {
  public legalTargets: ActionTarget[];
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_parentSequence: Sequence, _actionIdentifier: string) {
    super(_parentSequence, _actionIdentifier);
    this.setLegalTargets();
  }

  abstract doAction(_targetName: string): void

  abstract setLegalTargets(): void

  public searchTarget(_targetName: string): ActionTarget {
    let target: ActionTarget = this.legalTargets.find((possibleTarget) => {
      return possibleTarget.name.toLowerCase() == _targetName;
    })
    if(!target) {
      throw("That is not a valid target")
    }
    return target;
  }
}
