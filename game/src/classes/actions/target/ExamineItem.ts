import {Action} from "../Action.js";
import {Item} from "../../entities/Item.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";

export class ExamineItem extends Action implements IActionNeedsTarget{

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.ExamineItem;
  }

  public async doAction(_targetName: string): Promise<void> {
    let targetItem: Item = this.searchTarget(_targetName.toLowerCase());
    if(targetItem) {
      MyConsole.consoleLog(targetItem.description);
    }
    else
      throw("You can not examine " + _targetName);
  }

  public searchTarget(_targetName: string): Item {
    let possibleTarget: Item = this.sequence.player.inventory.findItem(_targetName);
    return possibleTarget;
  }
}
