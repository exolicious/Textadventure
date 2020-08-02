import {Sequence} from "./Sequence.js";
import {LoadAndSaver} from "../LoadAndSaver.js";
import {StartNewGame} from "../actions/simple/StartNewGame.js";
import {RoomSequence} from "./RoomSequence.js";
import {MyConsole} from "../../classes/MyConsole.js";
import {ShowAvailableActions} from "../actions/simple/ShowAvailableActions.js";

export class MainMenuSequence extends Sequence {
  private static instance: MainMenuSequence;
  public loaderAndSaver: LoadAndSaver;
  public nextRoomSequence: RoomSequence;

  /*__________________________________________________________________________________________________________________________________________*/
  private constructor() {
    super();
    this.loaderAndSaver = LoadAndSaver.getInstance();
    this.availableActions = "new game"
  }

  public static getInstance(): MainMenuSequence {
    if (!MainMenuSequence.instance) {
      MainMenuSequence.instance = new MainMenuSequence();
    }
    return MainMenuSequence.instance;
  }

  public instantiateActions(): void {
    this.actions.push(new ShowAvailableActions(this));
    this.actions.push(new StartNewGame(this));
  }

  public async main(): Promise<void> {
    await this.typeWriteSequenceIntroduction();
    while(!this.isSequenceEnd) {
      this.logReocurringInfo();
      await MyConsole.typeWriteLog("What would you like to do? \r")
      await this.getPlayerAction();
      while(this.nextRoomSequence) {
        await this.nextRoomSequence.main();
      }
    }
  }

  public async typeWriteSequenceIntroduction(): Promise<void> {
    await MyConsole.consoleLog( "Welcome to the awesome Textadventure! \r");
    await MyConsole.consoleLog("If you ever want to know what your options are, you can always enter 'commands' down below to display them.\r")
  }

  public logReocurringInfo(): void {
  }
}