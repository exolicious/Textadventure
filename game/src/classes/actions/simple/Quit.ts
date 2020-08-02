import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";

export class Quit extends Action {
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.Quit;
  }

  public async doAction(): Promise<void> {
    window.close();
  }
}