import {SimpleAction} from "./SimpleAction.js";

export class ShowInventory extends SimpleAction {
  /*__________________________________________________________________________________________________________________________________________*/

  public doAction(): void {
    this.parentSequence.log("showInventory");
  }

}