import {ShopSequence} from "../../sequences/ShopSequence.js";
import {Character} from "../../entities/Character.js";
import {Action} from "../../actions/Action.js";
import {Sequence} from "../../sequences/Sequence.js";
import {EActions} from "../../../enums/EActions.js";
import {FightSequence} from "../../sequences/FightSequence.js";
import {Enemy} from "../../entities/Enemy.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";
import {MyConsole} from "../../MyConsole.js";

export class TalkTo extends Action implements IActionNeedsTarget {

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.TalkTo;
  }

  public async doAction(_targetName: string): Promise<void> {
    let talkTarget: Character = this.searchTarget(_targetName.toLowerCase());
    if(talkTarget) {
      if(talkTarget.type.includes("shopkeeper")) {
        let shopSequence: ShopSequence = new ShopSequence(talkTarget);
        await shopSequence.main();
      }
      else if(talkTarget.type.includes("enemy")) {
        let fightSequence: FightSequence = new FightSequence(<Enemy>talkTarget, true);
        await fightSequence.main();
      }
      else if(talkTarget.type.includes("character")) {
        await MyConsole.typeWriteLog(talkTarget.introduction);
      }
    }
    else
      throw("You cannot talk to " + _targetName);
  }

  public searchTarget(_targetName: string): Character {
    return this.sequence.player.currentRoom.characters.find((possibleTarget) => {
      return possibleTarget.name.toLowerCase() == _targetName;
    })
  }
}
