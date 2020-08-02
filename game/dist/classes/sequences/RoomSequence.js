import { Sequence } from './Sequence.js';
import { Player } from "../entities/Player.js";
import { ShowAvailableActions } from "../actions/simple/ShowAvailableActions.js";
import { ShowInventory } from "../actions/simple/ShowInventory.js";
import { StartFight } from "../actions/target/StartFight.js";
import { LookAt } from "../actions/target/LookAt.js";
import { GoDirection } from "../actions/target/GoDirection.js";
import { SaveGame } from "../actions/simple/SaveGame.js";
import { TalkTo } from "../actions/target/TalkTo.js";
import { TakeItem } from "../actions/target/TakeItem.js";
import { CloseSequence } from "../actions/simple/CloseSequence.js";
import { MyConsole } from "../../classes/MyConsole.js";
export class RoomSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor() {
        super();
        this.player = Player.getInstance();
        this.availableActions = "go {north,east,south,west}, inventory, take {item}, talk to {character}," +
            " look at {character}/{room}, fight {character}, save {filename}, close";
    }
    instantiateActions() {
        this.actions.push(new ShowAvailableActions(this));
        this.actions.push(new ShowInventory(this));
        this.actions.push(new TakeItem(this));
        this.actions.push(new GoDirection(this));
        this.actions.push(new StartFight(this));
        this.actions.push(new LookAt(this));
        this.actions.push(new TalkTo(this));
        this.actions.push(new SaveGame(this));
        this.actions.push(new CloseSequence(this));
    }
    async typeWriteSequenceIntroduction() {
        await MyConsole.typeWriteLog(this.player.currentRoom.description + "\r");
    }
    logReocurringInfo() {
        let output = this.player.currentRoom.name + ": \r";
        output += "\r \t-Characters:\r";
        for (let char of this.player.currentRoom.characters) {
            output += "\t\t-" + char.name + "\r";
        }
        output += "\r \t-Items:\r";
        output += this.player.currentRoom.inventory.toString();
        output += "\r";
        MyConsole.consoleLog(output);
    }
}
//# sourceMappingURL=RoomSequence.js.map