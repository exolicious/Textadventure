namespace TextAdventure {
  export class MyConsole {
    private static instance: MyConsole;
    private inputElement: HTMLInputElement;
    private outputElement: HTMLTextAreaElement;

    /*__________________________________________________________________________________________________________________________________________*/

    private constructor(_inputElement: HTMLInputElement, _outputElement: HTMLTextAreaElement) {
      this.inputElement = _inputElement;
      this.outputElement = _outputElement;
    }

    public static getInstance(_inputElement: HTMLInputElement, _outputElement: HTMLTextAreaElement): MyConsole {
      if (!MyConsole.instance) {
        MyConsole.instance = new MyConsole(_inputElement, _outputElement);
      }
      return MyConsole.instance;
    }

    //concatenate value of _message to the TextAreaElement's value property
    public consoleLog(_message: string): void {
      this.outputElement.value += _message;
      if (_message.length > 1)
        this.outputElement.value += "\r";

      this.outputElement.scrollTop = this.outputElement.scrollHeight;
    }

    //iterate over _message and send each character delayChar, then add a line break at the end of the whole message (since consoleLog wont cause message.length is > 1 is false)
    public async typeWriteLog(_message: string): Promise<void> {
      for (let char of _message) {
        this.consoleLog(await this.delayChar(char));
      }
      this.consoleLog("\r");
    }

    private delayChar(_character: string): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve(_character);
        }, 70);
      })
    }

    public consoleClear(): void {
      this.outputElement.value = '';
    }

    public async getPlayerInput(): Promise<string> {
      this.inputElement.readOnly = false;
      this.inputElement.focus();
      const playerInput = await this.waitForPlayerInput();
      this.inputElement.blur();
      this.inputElement.value = "";
      this.inputElement.readOnly = true;
      return playerInput;
    }

    private waitForPlayerInput(): Promise<string> {
      return new Promise((resolve, reject) => {
        let self: MyConsole = this;
        this.inputElement.addEventListener("keypress", function (_event: KeyboardEvent) {
          if (_event.key == "Enter") {
            // Keycode 66 is Enter
            let inputValue = self.inputElement.value;
            resolve(inputValue);
          }
          else {
            reject();
          }
        })
      });
    }
  }
}