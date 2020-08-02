import {Action} from "../Action.js";
import {ActionTarget} from "../../entities/ActionTarget.js";
import {Enemy} from "../../entities/Enemy.js";
import {FightSequence} from "../../sequences/FightSequence.js";
import {EActions} from "../../../enums/EActions.js";
import {Sequence} from "../../sequences/Sequence.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";


export class StartFight extends Action implements IActionNeedsTarget {
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.StartFight;
  }

  public async doAction(_targetName: string): Promise<void> {
    let enemyTarget: Enemy = <Enemy>this.searchTarget(_targetName.toLowerCase());
    if(enemyTarget.type.includes("enemy")) {
      let fightSequence = new FightSequence(enemyTarget);
      await fightSequence.main();
    }
    else {
      throw(enemyTarget.name + " is visibly scared as you approach him. 'Poor guy', you think as you decide against fighting him.")
    }

  }

  public searchTarget(_targetName: string): ActionTarget {
      for(let target of this.sequence.player.currentRoom.characters) {
        if(target.name.toLowerCase() == _targetName) {
          return target;
        }
      }
      throw("You cannot start a fight with '" + _targetName + "'");
    }
}