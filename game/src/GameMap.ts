import {Room} from './Room.js';

export class GameMap {
  public rooms: Room[];

  /*__________________________________________________________________________________________________________________________________________*/

  public constructor() {
    this.rooms = new Array<Room>();
  }
}