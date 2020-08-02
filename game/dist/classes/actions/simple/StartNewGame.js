import { Action } from "../Action.js";
import { EActions } from "../../../enums/EActions.js";
import { RoomSequence } from "../../sequences/RoomSequence.js";
import { MyConsole } from "../../MyConsole.js";
export class StartNewGame extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.NewGame;
    }
    async doAction() {
        await this.sequence.loaderAndSaver.loadGame("newGame");
        let roomSequence = new RoomSequence();
        MyConsole.consoleClear();
        await roomSequence.main();
    }
}
//# sourceMappingURL=StartNewGame.js.map