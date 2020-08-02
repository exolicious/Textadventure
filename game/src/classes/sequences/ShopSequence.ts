import {Sequence} from './Sequence.js';
import {Player} from "../entities/Player.js";
import {ShowAvailableActions} from "../actions/simple/ShowAvailableActions.js";
import {BuyItem} from "../actions/target/BuyItem.js";
import {ExamineItem} from "../actions/target/ExamineItem.js";
import {Character} from "../entities/Character.js";
import {CloseSequence} from "../actions/simple/CloseSequence.js";
import {MyConsole} from "../../classes/MyConsole.js";

export class ShopSequence extends Sequence {
  public shopKeeper: Character;
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_shopKeeper: Character) {
    super();
    this.player = Player.getInstance();
    this.shopKeeper = _shopKeeper;
    this.availableActions = "commands, buy {item}, examine {item}, close(cl)"
  }

  public instantiateActions(): void {
    this.actions.push(new ShowAvailableActions(this));
    this.actions.push(new BuyItem(this));
    this.actions.push(new ExamineItem(this));
    this.actions.push(new CloseSequence(this));
  }

  public async typeWriteSequenceIntroduction(): Promise<void> {
    let output: string = this.shopKeeper.name + " " + this.shopKeeper.introduction;
    MyConsole.consoleLog(output);
  }

  public async logReocurringInfo(): Promise<void> {
    await MyConsole.typeWriteLog(this.shopKeeper.inventory.toString(true));
  }
}