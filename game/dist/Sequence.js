import { MyConsole } from './MyConsole.js';
export class Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_input, _output) {
        this.console = MyConsole.getInstance(_input, _output);
        this.isSequenceEnd = false;
    }
    async main() {
        await this.typeWriteStory(this.getSequenceIntroduction());
        //log available Actions
        this.log(this.availableActions);
        while (!this.isSequenceEnd) {
            await this.getPlayerAction();
            // await this.console.typeWriteLog(this.currentRoom.toString());
        }
    }
    async getPlayerAction() {
        let playerInput = await this.console.getPlayerInput();
        try {
            await this.inputHandler.handleInput(playerInput);
        }
        catch (e) {
            this.console.consoleLog(e);
        }
    }
    async typeWriteStory(_message) {
        await this.console.typeWriteLog(_message);
    }
    log(_message) {
        this.console.consoleLog(_message);
    }
}
//# sourceMappingURL=Sequence.js.map