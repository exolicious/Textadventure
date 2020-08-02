import { MyConsole } from '../MyConsole.js';
export class Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_enemy) {
        this.enemy = _enemy;
        this.actions = new Array();
        this.isSequenceEnd = false;
        this.instantiateActions();
    }
    async main() {
        await this.typeWriteSequenceIntroduction();
        while (!this.isSequenceEnd) {
            await MyConsole.typeWriteLog("     ");
            this.logReocurringInfo();
            MyConsole.consoleLog("What would you like to do? ");
            await this.getPlayerAction();
            await MyConsole.typeWriteLog("     ");
        }
    }
    async getPlayerAction() {
        let playerInput = await MyConsole.getPlayerInput();
        MyConsole.consoleLog(playerInput);
        try {
            await this.handleInput(playerInput);
        }
        catch (e) {
            MyConsole.consoleLog(e);
        }
    }
    async handleInput(_playerInput) {
        let foundAction = this.actions.find(action => {
            return _playerInput.toLowerCase().startsWith(action.actionIdentifier);
        });
        if (foundAction) {
            let targetName = _playerInput.substring(foundAction.actionIdentifier.length + 1, _playerInput.length);
            //+1 cause user enters for example "examine the[space]item" and we dont want the space
            await foundAction.doAction(targetName);
        }
        else
            throw ("That was not a valid command");
    }
}
//# sourceMappingURL=Sequence.js.map