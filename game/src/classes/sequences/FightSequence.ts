import {Sequence} from './Sequence.js';
import {ShowAvailableActions} from "../actions/simple/ShowAvailableActions.js";
import {Attack} from "../actions/simple/Attack.js";
import {Player} from "../entities/Player.js";
import {ShowInventory} from "../actions/simple/ShowInventory.js";
import {Enemy} from "../entities/Enemy.js";
import {MyConsole} from "../../classes/MyConsole.js";

export class FightSequence extends Sequence {
   public enemyInitiatedFight: boolean;
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_enemy: Enemy, _enemyIniatedFight?: boolean) {
    super(_enemy);
    this.player = Player.getInstance();
    this.enemyInitiatedFight = _enemyIniatedFight;
    this.availableActions = "attack, inventory"
  }

  public instantiateActions(): void {
    this.actions.push(new ShowAvailableActions(this));
    this.actions.push(new Attack(this));
    this.actions.push(new ShowInventory(this));
  }

  public async typeWriteSequenceIntroduction(): Promise<void> {
    if(this.enemyInitiatedFight)
      MyConsole.consoleLog(this.enemy.name + " appearently does not want to talk to you...\r")
    else
      MyConsole.consoleLog("You attack " + this.enemy.name + "\r");
  }

  public logReocurringInfo(): void {
    let output: string = "";
    output += "\r" + this.player.name + ": " + this.player.currentHealth + " HP \r";
    output += this.enemy.name + ": " + this.enemy.currentHealth + " HP \r";
    MyConsole.consoleLog(output);
  }

}
