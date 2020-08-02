import { EActions } from "../../../enums/EActions.js";
import { LoadAndSaver } from "../../LoadAndSaver.js";
import { Action } from "../Action.js";
export class SaveGame extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence) {
        super(_sequence);
        this.actionIdentifier = EActions.SaveGame;
    }
    async doAction(_targetName) {
        LoadAndSaver.getInstance().save(_targetName);
    }
}
//# sourceMappingURL=SaveGame.js.map