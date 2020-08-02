import {ICharacterData} from '../../interfaces/ICharacterData.js';
import {Combatant} from "./Combatant.js";

export class Enemy extends Combatant {
  constructor(_characterData: ICharacterData) {
    super(_characterData);
  }

  public getAttackText(_damageAmount: number): string {
    if(!this.inventory.weapon)
      return this.name + " attacks you with his bare hands." + " You lose " + _damageAmount + " HP.\r";
    else
      return this.name + " attacks you with " + this.inventory.weapon.name + " You lose " + _damageAmount + " HP.\r";
  }
}