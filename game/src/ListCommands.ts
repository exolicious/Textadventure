import {SimpleAction} from "./SimpleAction.js";

export class ListCommands extends SimpleAction {
  /*__________________________________________________________________________________________________________________________________________*/

  public doAction(): void {
    this.parentSequence.log(this.parentSequence.availableActions);
  }
}