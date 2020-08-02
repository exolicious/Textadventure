import {MyConsole} from '../MyConsole.js'
import {Action} from '../../classes/actions/Action.js'
import {Player} from "../entities/Player.js";
import {Enemy} from "../entities/Enemy.js";

export abstract class Sequence {
  public player: Player;
  public enemy: Enemy;
  public actions: Action[];
  public availableActions: string;
  public isSequenceEnd: boolean;

  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_enemy?: Enemy) {
    this.enemy = _enemy;
    this.actions = new Array<Action>();
    this.isSequenceEnd = false;
    this.instantiateActions();
  }

  public abstract instantiateActions(): void;

  public async main(): Promise<void> {
    await this.typeWriteSequenceIntroduction();
    while(!this.isSequenceEnd) {
      await MyConsole.typeWriteLog("     ");
      this.logReocurringInfo();
      MyConsole.consoleLog("What would you like to do? ")
      await this.getPlayerAction();
      await MyConsole.typeWriteLog("     ");
    }
  }

  public abstract async typeWriteSequenceIntroduction(): Promise<void>;

  public abstract logReocurringInfo(): void;

  public async getPlayerAction(): Promise<void> {
    let playerInput: string = await MyConsole.getPlayerInput();
    MyConsole.consoleLog(playerInput);
    try {
      await this.handleInput(playerInput);
    }
    catch(e) {
      MyConsole.consoleLog(e);
    }
  }

  public async handleInput(_playerInput: string): Promise<void> {
    let foundAction: Action = this.actions.find(action => {
      return _playerInput.toLowerCase().startsWith(action.actionIdentifier);
    })
    if(foundAction){
      let targetName: string = _playerInput.substring(foundAction.actionIdentifier.length+1, _playerInput.length);
      //+1 cause user enters for example "examine the[space]item" and we dont want the space
      await foundAction.doAction(targetName);
    }
    else
      throw("That was not a valid command");
  }
}
