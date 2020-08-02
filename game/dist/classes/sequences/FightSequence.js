import { Sequence } from './Sequence.js';
import { ShowAvailableActions } from "../actions/simple/ShowAvailableActions.js";
import { Attack } from "../actions/simple/Attack.js";
import { Player } from "../entities/Player.js";
import { ShowInventory } from "../actions/simple/ShowInventory.js";
import { MyConsole } from "../../classes/MyConsole.js";
export class FightSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_enemy, _enemyIniatedFight) {
        super(_enemy);
        this.player = Player.getInstance();
        this.enemyInitiatedFight = _enemyIniatedFight;
        this.availableActions = "attack, inventory";
    }
    instantiateActions() {
        this.actions.push(new ShowAvailableActions(this));
        this.actions.push(new Attack(this));
        this.actions.push(new ShowInventory(this));
    }
    async typeWriteSequenceIntroduction() {
        if (this.enemyInitiatedFight)
            await MyConsole.typeWriteLog(this.enemy.name + " appearently does not want to talk to you...\r");
        else
            await MyConsole.typeWriteLog("You attack " + this.enemy.name + "\r");
    }
    logReocurringInfo() {
        let output = "";
        output += "\r" + this.player.name + ": " + this.player.currentHealth + " HP \r";
        output += this.enemy.name + ": " + this.enemy.currentHealth + " HP \r";
        MyConsole.consoleLog(output);
    }
}
//# sourceMappingURL=FightSequence.js.map