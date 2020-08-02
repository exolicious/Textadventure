export class MyConsole {
    /*__________________________________________________________________________________________________________________________________________*/
    //concatenate value of _message to the TextAreaElement's value property
    static consoleLog(_message) {
        MyConsole.outputElement.value += _message;
        if (_message.length > 1)
            MyConsole.outputElement.value += "\r";
        this.outputElement.scrollTop = this.outputElement.scrollHeight;
    }
    //iterate over _message and send each character delayChar, then add a line break at the end of the whole message (since consoleLog wont cause message.length is > 1 is false)
    static async typeWriteLog(_message) {
        for (let char of _message) {
            MyConsole.consoleLog(await this.delayChar(char));
        }
        MyConsole.consoleLog("\r");
    }
    static delayChar(_character) {
        return new Promise((resolve) => {
            setTimeout(function () {
                resolve(_character);
            }, 70);
        });
    }
    static consoleClear() {
        MyConsole.outputElement.value = '';
    }
    static async getPlayerInput() {
        MyConsole.inputElement.readOnly = false;
        MyConsole.inputElement.focus();
        const playerInput = await this.waitForPlayerInput();
        MyConsole.inputElement.blur();
        MyConsole.inputElement.value = "";
        MyConsole.inputElement.readOnly = true;
        return playerInput;
    }
    static waitForPlayerInput() {
        return new Promise((resolve) => {
            MyConsole.inputElement.addEventListener("keypress", function (_event) {
                if (_event.key == "Enter") {
                    let inputValue = MyConsole.inputElement.value;
                    resolve(inputValue);
                }
            });
        });
    }
}
MyConsole.inputElement = document.getElementById('console__input');
MyConsole.outputElement = document.getElementById('console__output');
//# sourceMappingURL=MyConsole.js.map