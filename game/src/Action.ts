import {Sequence} from "./Sequence.js";

export abstract class Action {
  public parentSequence: Sequence;
  public actionIdentifier: string;
  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_parentSequence: Sequence, _actionIdentifier: string) {
    this.parentSequence = _parentSequence;
    this.actionIdentifier = _actionIdentifier;
  }

  abstract doAction(_targetName?: string): void

}
