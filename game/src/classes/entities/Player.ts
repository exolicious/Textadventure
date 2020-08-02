import {Room} from "./Room.js";
import {ICharacterData} from "../../interfaces/ICharacterData.js";
import {Combatant} from "./Combatant.js";
export class Player extends Combatant {
  private static instance: Player;
  public currentRoom: Room;

  private constructor(_characterData: ICharacterData) {
    super(_characterData);
  }

  public static getInstance(_characterData?: ICharacterData): Player {
    if (!Player.instance) {
      Player.instance = new Player(_characterData);
    }
    return Player.instance;
  }

  public getAttackText(_damageAmount: number, _enemyName: string): string {
    return "You attack " + _enemyName + " with your " + this.inventory.weapon.name + ". You dealt " + _damageAmount + " damage.\r";
  }
}
