import {Sequence} from './Sequence.js';
import {Player} from '../entities/Player.js';
import {DropItem} from "../actions/target/DropItem.js";
import {ExamineItem} from "../actions/target/ExamineItem.js";
import {ConsumeItem} from "../actions/target/ConsumeItem.js";
import {ShowAvailableActions} from "../actions/simple/ShowAvailableActions.js";
import {CloseSequence} from "../actions/simple/CloseSequence.js";
import {MyConsole} from "../../classes/MyConsole.js";

export class PlayerInventorySequence extends Sequence {
  /*__________________________________________________________________________________________________________________________________________*/

  constructor() {
    super();
    this.player = Player.getInstance();
    this.availableActions = "examine {item}, consume {itemname}, drop {itemname}, close inventory"
  }

  public instantiateActions(): void {
    this.actions.push(new ShowAvailableActions(this));
    this.actions.push(new ExamineItem(this));
    this.actions.push(new ConsumeItem(this));
    this.actions.push(new DropItem(this));
    this.actions.push(new CloseSequence(this));
  }

  public async typeWriteSequenceIntroduction(): Promise<void> {
    await MyConsole.typeWriteLog("You open your bag: \r")
  }

  public logReocurringInfo(): void {
    MyConsole.consoleLog( "Inventory: \r" + this.player.inventory.toString());
  }
}
