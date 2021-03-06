import {EActions} from "../../../enums/EActions.js";
import {FightSequence} from "../../sequences/FightSequence.js";
import {IntelligentEnemy} from "../../entities/IntelligentEnemy.js";
import {Potion} from "../../entities/Potion.js";
import {Item} from "../../entities/Item.js";
import {MyConsole} from "../../MyConsole.js";
import {Action} from "../Action.js";

export class Attack extends Action {
  public sequence: FightSequence;

  /*__________________________________________________________________________________________________________________________________________*/
  constructor(_sequence: FightSequence) {
    super(_sequence);
    this.actionIdentifier = EActions.Attack;
  }

  public async doAction(): Promise<void> {
    let playerDamage: number = this.sequence.player.getDamageRoll();
    await MyConsole.typeWriteLog("\r" + this.sequence.player.getAttackText(playerDamage, this.sequence.enemy.name));
    this.sequence.enemy.setHealth(playerDamage);
    if(this.sequence.enemy.isDead) {
      this.sequence.logReocurringInfo();
      await this.enemyDies();
      this.sequence.isSequenceEnd = true;
    }
    else {
      await this.enemyReaction();
      if(this.sequence.player.isDead) {
        this.sequence.logReocurringInfo();
        await this.playerDies();
        this.sequence.isSequenceEnd = true;
      }
    }
  }

  public async enemyReaction(): Promise<void> {
    if(this.sequence.enemy.type.includes("intelligent")) {
      if(this.sequence.enemy.currentHealth < this.sequence.enemy.maxHealth - 4 && this.sequence.enemy.inventory.potions.length > 0) {
        let potionDrinkChance: number = (Math.round(Math.random()*3)+1);
        if(potionDrinkChance == 1) {
          let intelligentEnemy: IntelligentEnemy = <IntelligentEnemy>this.sequence.enemy;
          let consumedPotion: Potion = intelligentEnemy.consumePotion();
          MyConsole.consoleLog(this.sequence.enemy.name + " has consumed a " + consumedPotion.name + " and restored " + consumedPotion.healAmount + " HP\r");
          return;
        }
      }
    }
    let enemyDamage: number = this.sequence.enemy.getDamageRoll();
    await MyConsole.typeWriteLog(this.sequence.enemy.getAttackText(enemyDamage));
    this.sequence.player.setHealth(enemyDamage);
  }

  public async enemyDies(): Promise<void> {
    MyConsole.consoleLog("You have slain " + this.sequence.enemy.name + "\r");
    let lootInfo: string = "";
    let iterableInv: Iterable<Item> = this.sequence.enemy.inventory.getIterableInventory();
    for(let item of iterableInv) {
        this.sequence.player.currentRoom.inventory.addItem(item);
        lootInfo += item.name + "\r";
    }
    if(lootInfo != "")
      await MyConsole.typeWriteLog(this.sequence.enemy.name + " has dropped: \r"
                             +  lootInfo)
      await MyConsole.typeWriteLog("As soon as " + this.sequence.enemy.name + "´s body fell to the floor, " + this.sequence.enemy.coins + " coins magically appeared in your purse.\r" +
                             "This world truly works in mysterious ways.")
    this.sequence.player.currentRoom.removeCharacter(this.sequence.enemy);
  }

  public async playerDies(): Promise<void> {
    await MyConsole.typeWriteLog("You die.\r");
  }
}