import {Action} from "../Action.js";
import {Potion} from "../../entities/Potion.js";
import {Item} from "../../entities/Item.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";

export class ConsumeItem extends Action implements IActionNeedsTarget{

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.ConsumeItem;
  }

  public async doAction(_targetName: string): Promise<void> {
    let targetItem: Potion = <Potion>this.searchTarget(_targetName.toLowerCase());
    if(targetItem) {
      if(targetItem.type == "potion") {
        this.sequence.player.setHealth(targetItem.healAmount, true);
        this.sequence.player.inventory.removeItem(targetItem);
        MyConsole.consoleLog("You drink the " + targetItem.name+ " and feel energized.\r" +
                                           this.sequence.player.name + ": " + this.sequence.player.currentHealth + "/" + this.sequence.player.maxHealth + " HP\r");
      }
      else
        throw("You can not consume " + targetItem.name);
    }
    else
      throw ("There is no " + _targetName + " in your inventory");
  }

  public searchTarget(_targetName: string): Item {
    return this.sequence.player.inventory.findItem(_targetName);
  }
}
