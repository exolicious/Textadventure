import {Action} from "../Action.js";
import {ActionTarget} from "../../entities/ActionTarget.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";

export class LookAt extends Action implements IActionNeedsTarget{

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.LookAt;
  }

  public async doAction(_targetName: string): Promise<void> {
    let lookTarget: ActionTarget = this.searchTarget(_targetName.toLowerCase());
    if(lookTarget) {
      MyConsole.consoleLog(lookTarget.description);
    }
    else
      throw("You cannot look at " + _targetName);
  }

  public searchTarget(_targetName: string): ActionTarget {
    let lookTarget: ActionTarget;
    if(this.sequence.player.currentRoom.name.toLowerCase() == _targetName) {
      lookTarget = this.sequence.player.currentRoom;
    }
    if(!lookTarget) {
      lookTarget = this.sequence.player.currentRoom.characters.find((possibleTarget) => {
        return possibleTarget.name.toLowerCase() == _targetName;
      })
      if(!lookTarget) {
        lookTarget = this.sequence.player.currentRoom.inventory.findItem(_targetName);
      }
    }
    return lookTarget;
  }
}
