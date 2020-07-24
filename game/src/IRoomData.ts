import {IItemData} from './IItemData.js';
import {ICharacterData} from './ICharacterData.js';
import {IAdjacentRoomsData} from './IAdjacentRoomsData.js';

export interface IRoomData {
  id: number;
  name: string;
  description: string;
  startRoom: boolean;
  items: IItemData[];
  characters: ICharacterData[];
  type: string
  adjacentRooms: IAdjacentRoomsData[];
}

