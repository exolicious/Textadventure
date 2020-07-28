import {Action} from "./Action.js";
import {Sequence} from "./Sequence.js";

export abstract class SimpleAction extends Action {
  /*__________________________________________________________________________________________________________________________________________*/
  constructor(_parentSequence: Sequence, _actionIdentifier: string) {
    super(_parentSequence, _actionIdentifier);
  }

  abstract doAction(): void

}
