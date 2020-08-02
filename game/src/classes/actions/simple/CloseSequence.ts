import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";

export class CloseSequence extends Action {
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.CloseSequence;
  }

  public async doAction(): Promise<void> {
    this.sequence.isSequenceEnd = true;
  }
}