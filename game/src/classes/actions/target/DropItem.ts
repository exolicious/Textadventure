import {Action} from "../Action.js";
import {Item} from "../../entities/Item.js";
import {EActions} from "../../../enums/EActions.js";
import {Sequence} from "../../sequences/Sequence.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";

export class DropItem extends Action implements IActionNeedsTarget{

  /*__________________________________________________________________________________________________________________________________________*/
  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.DropItem;
  }

  public async doAction(_targetName: string): Promise<void> {
    let targetItem: Item = this.searchTarget(_targetName.toLowerCase());
    if(targetItem) {
      this.sequence.player.inventory.removeItem(targetItem);
      this.sequence.player.currentRoom.inventory.addItem(targetItem);
    }
    else
      throw ("You cannot drop " + _targetName);
  }

  public searchTarget(_targetName: string): Item {
    return this.sequence.player.inventory.findItem(_targetName);
  }
}
