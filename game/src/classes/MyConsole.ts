export class MyConsole {
  private static inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('console__input');
  private static outputElement: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('console__output');

  /*__________________________________________________________________________________________________________________________________________*/

  //concatenate value of _message to the TextAreaElement's value property
  public static consoleLog(_message: string): void {
    MyConsole.outputElement.value += _message;
    if (_message.length > 1)
      MyConsole.outputElement.value += "\r";

    this.outputElement.scrollTop = this.outputElement.scrollHeight;
  }

  //iterate over _message and send each character delayChar, then add a line break at the end of the whole message (since consoleLog wont cause message.length is > 1 is false)
  public static async typeWriteLog(_message: string): Promise<void> {
    for (let char of _message) {
      MyConsole.consoleLog(await this.delayChar(char));
    }
    MyConsole.consoleLog("\r");
  }

  private static delayChar(_character: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(_character);
      }, 70);
    })
  }

  public static consoleClear(): void {
    MyConsole.outputElement.value = '';
  }

  public static async getPlayerInput(): Promise<string> {
    MyConsole.inputElement.readOnly = false;
    MyConsole.inputElement.focus();
    const playerInput = await this.waitForPlayerInput();
    MyConsole.inputElement.blur();
    MyConsole.inputElement.value = "";
    MyConsole.inputElement.readOnly = true;
    return playerInput;
  }

  private static waitForPlayerInput(): Promise<string> {
    return new Promise((resolve) => {
      MyConsole.inputElement.addEventListener("keypress", function (_event: KeyboardEvent) {
        if (_event.key == "Enter") {
          let inputValue = MyConsole.inputElement.value;
          resolve(inputValue);
        }
      })
    });
  }
}
