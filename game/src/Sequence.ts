import {MyConsole} from './MyConsole.js'
import {InputHandler} from './InputHandler.js'
import {Room} from "./Room.js";

export abstract class Sequence {
  //private player: Player;
  public inputHandler: InputHandler;
  public console: MyConsole;
  public currentRoom: Room;
  public availableActions: string;
  public actionsStringArray: string[]; //maybe get these from an enum or some constant array somewhere instead of hardcoding them in the specific sequences
  public isSequenceEnd: boolean;

  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_input?: HTMLInputElement, _output?: HTMLTextAreaElement) {
    this.console = MyConsole.getInstance(_input, _output);
    this.isSequenceEnd = false;
  }

  public async main(): Promise<void> {
    await this.typeWriteStory(this.getSequenceIntroduction());
    //log available Actions
    this.log(this.availableActions);
    while(!this.isSequenceEnd) {
      await this.getPlayerAction();
      // await this.console.typeWriteLog(this.currentRoom.toString());
    }
  }

  public abstract getSequenceIntroduction(): string

  public async getPlayerAction(): Promise<void> {
    let playerInput: string = await this.console.getPlayerInput();
    try {
      await this.inputHandler.handleInput(playerInput);
    }
    catch(e) {
      this.console.consoleLog(e);
    }
  }
  public async typeWriteStory(_message: string): Promise<void> {
    await this.console.typeWriteLog(_message);
  }

  public log(_message: string): void {
    this.console.consoleLog(_message);
  }
}
