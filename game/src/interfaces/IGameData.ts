import {IRoomData} from './IRoomData.js';
import {ICharacterData} from "./ICharacterData.js";

export interface IGameData {
  player: ICharacterData;
  rooms: IRoomData[];
}

