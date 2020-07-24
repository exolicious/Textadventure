import {Sequence} from './Sequence.js';
import {GameMap} from './GameMap.js';
import {Room} from './Room.js';
import {IGameData} from './IGameData.js';
import {IRoomData} from './IRoomData.js';

export class GameSequence extends Sequence {
  // private characters: Character[];
  private gameMap: GameMap;
  private currentRoom: Room;

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_input: HTMLInputElement, _output: HTMLTextAreaElement) {
    super(_input, _output);
    this.isSqeuenceEnd = false;
    this.gameMap = new GameMap();
  }

  //idea for later: make path parameter, so that user can specify which save file he wants to load
  public async initializeState(): Promise<void> {
    const loadedMap: IGameData = await this.loadJSON();
    console.log(loadedMap);
    this.fillWorldMap(loadedMap.rooms);
  }

  public async main(): Promise<void> {
    await this.console.typeWriteLog(this.currentRoom.toString());
    this.console.consoleLog("commands (c), north (n), quit (q)");
    while(!this.isSqeuenceEnd) {
      await this.getUserAction();
      await this.console.typeWriteLog(this.currentRoom.toString());
    }
  }

  public async getUserAction(): Promise<void> {
    let playerInput = await this.console.getPlayerInput();
    this.console.consoleLog(playerInput);
    //inputController logic comes here
    if(playerInput == "quit") {
      this.isSqeuenceEnd = true;
    }
  }

  private async loadJSON(): Promise<IGameData> {
    let response: Response = await fetch("./dist/newGame.json");
    let text: string = await response.text();
    let json: IGameData = JSON.parse(text);
    return json;
  }

  //iterate over the rooms property of the JSON file and create a Room for each entry
  //the constructor of the room handles the lower level properties (e.g. items) and the instantiation for the entries
  //the instantiation happens recursively
  private fillWorldMap(_roomsData: IRoomData[]): void {
    for(let roomData of _roomsData) {
      let roomInstance: Room = new Room(roomData);
      this.gameMap.rooms.push(roomInstance);
      if(roomData.startRoom) {
        this.currentRoom = roomInstance;
      }
    }
  }
}