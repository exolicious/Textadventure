import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {Item} from "../../entities/Item.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";
import {ShopSequence} from "../../sequences/ShopSequence.js";

export class BuyItem extends Action implements IActionNeedsTarget {
  public sequence: ShopSequence;
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.BuyItem;
  }

  public async doAction(_targetName: string): Promise<void> {
    let targetItem: Item = this.searchTarget(_targetName.toLowerCase());
    if(targetItem) {
      if(targetItem.price <= this.sequence.player.coins) {
        this.sequence.player.coins -= targetItem.price;
        this.sequence.player.inventory.addItem(targetItem);
        this.logPurchaseSummary(targetItem);
      }
      else
        throw(targetItem.name + " costs " + targetItem.price + " coins, however you only have " + this.sequence.player.coins + " coins.")
    }
    else
      throw ("There is no " + _targetName + " in your inventory");
  }

  public searchTarget(_targetName: string): Item {
    return this.sequence.shopKeeper.inventory.findItem(_targetName);
  }

  private logPurchaseSummary(_purchasedItem: Item): void {
    let output = "You successfuly purchased " + _purchasedItem.name + " for a price of " + _purchasedItem.price + " coins. \r" +
      "The shopkeeper smirks for some reason.\r";
    output += "Your new balance: " + this.sequence.player.coins + " coins. \r";
    MyConsole.consoleLog(output);
  }
}
