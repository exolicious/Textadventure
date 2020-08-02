import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {Item} from "../../entities/Item.js";
import {EActions} from "../../../enums/EActions.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";

export class TakeItem extends Action implements IActionNeedsTarget {

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.TakeItem;
  }

  public async doAction(_targetName: string): Promise<void> {
    let targetItem: Item = this.searchTarget(_targetName.toLowerCase());
    if(targetItem) {
      this.sequence.player.currentRoom.inventory.removeItem(targetItem);
      this.sequence.player.inventory.addItem(targetItem);
      MyConsole.consoleLog(targetItem.name + " has been added to your inventory.\r");
    }
    else
      throw ("You cannot take " + _targetName);
  }

  public searchTarget(_targetName: string): Item {
    return this.sequence.player.currentRoom.inventory.findItem(_targetName);
  }
}
