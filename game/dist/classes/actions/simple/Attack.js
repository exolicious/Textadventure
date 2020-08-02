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
        await MyConsole.typeWriteLog("\r" + this.sequence.player.getAttackText(playerDamage, this.sequence.enemy.name));
        this.sequence.enemy.setHealth(playerDamage);
        if (this.sequence.enemy.isDead) {
            this.sequence.logReocurringInfo();
            await this.enemyDies();
            this.sequence.isSequenceEnd = true;
        }
        else {
            await this.enemyReaction();
            if (this.sequence.player.isDead) {
                this.sequence.logReocurringInfo();
                await this.playerDies();
                this.sequence.isSequenceEnd = true;
            }
        }
    }
    async enemyReaction() {
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
        await MyConsole.typeWriteLog(this.sequence.enemy.getAttackText(enemyDamage));
        this.sequence.player.setHealth(enemyDamage);
    }
    async enemyDies() {
        MyConsole.consoleLog("You have slain " + this.sequence.enemy.name + "\r");
        let lootInfo = "";
        let iterableInv = this.sequence.enemy.inventory.getIterableInventory();
        for (let item of iterableInv) {
            this.sequence.player.currentRoom.inventory.addItem(item);
            lootInfo += item.name + "\r";
        }
        if (lootInfo != "")
            await MyConsole.typeWriteLog(this.sequence.enemy.name + " has dropped: \r"
                + lootInfo);
        await MyConsole.typeWriteLog("As soon as " + this.sequence.enemy.name + "´s body fell to the floor, " + this.sequence.enemy.coins + " coins magically appeared in your purse.\r" +
            "This world truly works in mysterious ways.");
        this.sequence.player.currentRoom.removeCharacter(this.sequence.enemy);
    }
    async playerDies() {
        await MyConsole.typeWriteLog("You die.\r");
    }
}
//# sourceMappingURL=Attack.js.map