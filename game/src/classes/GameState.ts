import {Room} from './entities/Room.js';
import {Player} from './entities/Player.js';

export class GameState {
  private static instance: GameState;
  public player: Player;
  public rooms: Room[];
  /*__________________________________________________________________________________________________________________________________________*/

  private constructor() {
    this.rooms = new Array<Room>();
  }

  public static getInstance(): GameState {
    if (!GameState.instance) {
      GameState.instance = new GameState();
    }
    return GameState.instance;
  }

  public findRoomWithId(_roomId: number): Room {
    return this.rooms.find((room) => {
      return room.id == _roomId;
    })
  }
}