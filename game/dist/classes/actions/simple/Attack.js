import { EActions } from "../../../enums/EActions.js";
import { MyConsole } from "../../MyConsole.js";
import { Action } from "../Action.js";
export class Attack extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.Attack;
    }
    async doAction() {
        let playerDamage = this.sequence.player.getDamageRoll();
        MyConsole.consoleLog("\r" + this.sequence.player.getAttackText(playerDamage, this.sequence.enemy.name));
        this.sequence.enemy.setHealth(playerDamage);
        if (this.sequence.enemy.isDead) {
            this.sequence.logReocurringInfo();
            this.enemyDies();
            this.sequence.isSequenceEnd = true;
        }
        else {
            this.enemyReaction();
            if (this.sequence.player.isDead) {
                this.sequence.logReocurringInfo();
                this.playerDies();
                this.sequence.isSequenceEnd = true;
            }
        }
    }
    enemyReaction() {
        if (this.sequence.enemy.type.includes("intelligent")) {
            if (this.sequence.enemy.currentHealth < this.sequence.enemy.maxHealth - 4 && this.sequence.enemy.inventory.potions.length > 0) {
                let potionDrinkChance = (Math.round(Math.random() * 3) + 1);
                if (potionDrinkChance == 1) {
                    let intelligentEnemy = this.sequence.enemy;
                    let consumedPotion = intelligentEnemy.consumePotion();
                    MyConsole.consoleLog(this.sequence.enemy.name + " has consumed a " + consumedPotion.name + " and restored " + consumedPotion.healAmount + " HP\r");
                    return;
                }
            }
        }
        let enemyDamage = this.sequence.enemy.getDamageRoll();
        MyConsole.consoleLog(this.sequence.enemy.getAttackText(enemyDamage));
        this.sequence.player.setHealth(enemyDamage);
    }
    enemyDies() {
        MyConsole.consoleLog("You have slain " + this.sequence.enemy.name + "\r");
        let lootInfo = "";
        let iterableInv = this.sequence.enemy.inventory.getIterableInventory();
        for (let item of iterableInv) {
            this.sequence.player.currentRoom.inventory.addItem(item);
            lootInfo += item.name + "\r";
        }
        if (lootInfo != "")
            MyConsole.consoleLog(this.sequence.enemy.name + " has dropped: \r"
                + lootInfo);
        MyConsole.consoleLog("As soon as " + this.sequence.enemy.name + "´s body fell to the floor, " + this.sequence.enemy.coins + " coins magically appeared in your purse.\r" +
            "This world truly works in mysterious ways.");
        this.sequence.player.currentRoom.removeCharacter(this.sequence.enemy);
    }
    playerDies() {
        MyConsole.consoleLog("You die.\r");
    }
}
//# sourceMappingURL=Attack.js.map