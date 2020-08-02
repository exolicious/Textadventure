import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {MyConsole} from "../../MyConsole.js";

export class ShowAvailableActions extends Action {
  /*__________________________________________________________________________________________________________________________________________*/
  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.ShowCommands;
  }

  public async doAction(): Promise<void> {
    await MyConsole.typeWriteLog("     ");
    MyConsole.consoleLog("Your options are: " + this.sequence.availableActions);
  }
}