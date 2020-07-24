import {IItemData} from './IItemData.js';

export interface ICharacterData {
  id: number;
  name: string;
  description: string;
  items: IItemData[],
  type: string;
}