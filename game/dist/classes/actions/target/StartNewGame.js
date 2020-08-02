import { SimpleAction } from "../SimpleAction.js";
export class StartNewGame extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence, _actionIdentifier) {
        super(_actionIdentifier);
        this.sequence = _sequence;
    }
    async doAction(_fileName) {
        if (_fileName == "") {
            _fileName = "newGame";
        }
        this.sequence.gameState = await this.sequence.loaderAndSaver.loadGame(_fileName);
        await this.sequence.startRoomSequence();
    }
}
//# sourceMappingURL=StartNewGame.js.map