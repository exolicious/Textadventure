import {IItemData} from './IItemData.js';
import {ICharacterData} from './ICharacterData.js';
import {IAdjacentRoomsData} from './IAdjacentRoomsData.js';

export interface IRoomData {
    id: number;
    name: string;
    description: string;
    type: string,
    locked: boolean,
    currentRoom: boolean,
    inventory: IItemData[];
    characters: ICharacterData[];
    adjacentRooms: IAdjacentRoomsData[];
  }

