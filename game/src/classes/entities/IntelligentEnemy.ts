import {ICharacterData} from '../../interfaces/ICharacterData.js';
import {Enemy} from "./Enemy.js";
import {Potion} from "./Potion.js";

export class IntelligentEnemy extends Enemy {
  constructor(_characterData: ICharacterData) {
    super(_characterData);
  }

  public consumePotion(): Potion {
    let consumedPotion: Potion = this.inventory.potions.pop()
    this.currentHealth += consumedPotion.healAmount;
    return consumedPotion;
  }
}
