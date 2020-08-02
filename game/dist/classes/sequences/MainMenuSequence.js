import { Sequence } from "./Sequence.js";
import { LoadAndSaver } from "../LoadAndSaver.js";
import { StartNewGame } from "../actions/simple/StartNewGame.js";
import { MyConsole } from "../../classes/MyConsole.js";
import { ShowAvailableActions } from "../actions/simple/ShowAvailableActions.js";
export class MainMenuSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor() {
        super();
        this.loaderAndSaver = LoadAndSaver.getInstance();
        this.availableActions = "new game";
    }
    static getInstance() {
        if (!MainMenuSequence.instance) {
            MainMenuSequence.instance = new MainMenuSequence();
        }
        return MainMenuSequence.instance;
    }
    instantiateActions() {
        this.actions.push(new ShowAvailableActions(this));
        this.actions.push(new StartNewGame(this));
    }
    async main() {
        await this.typeWriteSequenceIntroduction();
        while (!this.isSequenceEnd) {
            this.logReocurringInfo();
            await MyConsole.typeWriteLog("What would you like to do? \r");
            await this.getPlayerAction();
            while (this.nextRoomSequence) {
                await this.nextRoomSequence.main();
            }
        }
    }
    async typeWriteSequenceIntroduction() {
        await MyConsole.typeWriteLog("Welcome to the awesome Textadventure! \r");
        await MyConsole.typeWriteLog("If you ever want to know what your options are, you can always enter 'commands' down below to display them.\r");
    }
    logReocurringInfo() {
    }
}
//# sourceMappingURL=MainMenuSequence.js.map