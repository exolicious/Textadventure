import {ICharacterData} from '../../interfaces/ICharacterData.js';
import {Character} from "./Character.js";

export abstract class Combatant extends Character {
  public maxHealth: number;
  public currentHealth: number;
  public baseDamage: number;
  public isDead: boolean;

  protected constructor(_characterData: ICharacterData) {
    super(_characterData);
    this.maxHealth = _characterData.maxHealth;
    this.currentHealth = _characterData.maxHealth;
    this.baseDamage = _characterData.baseDamage;
    this.isDead = false;
  }

  public getDamageRoll(): number {
      if(this.inventory.weapon)
        return this.baseDamage + this.inventory.weapon.damageBoost;
      return this.baseDamage;
  }

  public setHealth(_amount: number, _isHeal?:boolean): void {
    if(_isHeal)
      this.currentHealth += _amount;
    else
      this.currentHealth -= _amount;

    if(this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth;
    }
    else if(this.currentHealth <= 0) {
      this.currentHealth = 0;
      this.isDead = true;
    }
  }


  abstract getAttackText(_damageAmount: number, _enemyName?: string): string;

}
