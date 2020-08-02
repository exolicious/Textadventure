import {Action} from "../Action.js";
import {MainMenuSequence} from "../../sequences/MainMenuSequence.js";
import {EActions} from "../../../enums/EActions.js";
import {RoomSequence} from "../../sequences/RoomSequence.js";
import {MyConsole} from "../../MyConsole.js";

export class StartNewGame extends Action {
  public sequence: MainMenuSequence;
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: MainMenuSequence) {
    super(_sequence);
    this.actionIdentifier = EActions.NewGame;
  }

  public async doAction(): Promise<void> {
    await this.sequence.loaderAndSaver.loadGame("newGame");
    let roomSequence: RoomSequence = new RoomSequence();
    MyConsole.consoleClear();
    await roomSequence.main();
  }
}