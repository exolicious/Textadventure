import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {PlayerInventorySequence} from "../../sequences/PlayerInventorySequence.js";
import {EActions} from "../../../enums/EActions.js";

export class ShowInventory extends Action {
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.ShowInventory;
  }

  public async doAction(): Promise<void> {
    let inventorySequence = new PlayerInventorySequence();
    await inventorySequence.main();
  }
}