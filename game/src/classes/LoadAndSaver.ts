import {GameState} from "./GameState.js";
import {IGameData} from "../interfaces/IGameData.js";
import {IRoomData} from "../interfaces/IRoomData.js";
import {Room} from "./entities/Room.js";
import {Player} from "./entities/Player.js";

export class LoadAndSaver {
  private static instance: LoadAndSaver;
  public gameState: GameState;

  private constructor() {
    this.gameState = GameState.getInstance();
  }

  public static getInstance(): LoadAndSaver {
    if (!LoadAndSaver.instance) {
      LoadAndSaver.instance = new LoadAndSaver();
    }
    return LoadAndSaver.instance;
  }

  public async loadGame(_fileName?: string): Promise<void> {
    const loadedJSONState: IGameData = await this.loadJSON(_fileName);
    this.gameState.player = Player.getInstance(loadedJSONState.player);
    this.initializeRooms(loadedJSONState.rooms);
  }

  private async loadJSON(_fileName?: string): Promise<IGameData> {
    let response: Response = await fetch("./dist/" + _fileName + ".json");
    let text: string = await response.text();
    let json: IGameData = JSON.parse(text);
    return json;
  }

  private initializeRooms(_roomsData: IRoomData[]): void {
    for(let roomData of _roomsData) {
      let roomInstance: Room = new Room(roomData);
      this.gameState.rooms.push(roomInstance);
      if(roomData.currentRoom) {
        this.gameState.player.currentRoom = roomInstance;
      }
    }
  }

  public save(_filename: string): void {
    let gameStateJSONString: string = JSON.stringify(this.gameState);
    let blob: Blob = new Blob([gameStateJSONString], { type: "application/plain" });
    let url: string = window.URL.createObjectURL(blob);
    //*/ using anchor element for download
    let downloader: HTMLAnchorElement;
    downloader = document.createElement("a");
    downloader.setAttribute("href", url);
    downloader.setAttribute("download", _filename+".json");
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
    window.URL.revokeObjectURL(url);
  }
}