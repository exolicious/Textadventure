import {IItemData} from './IItemData.js';

export interface ICharacterData {
  id: number;
  type: string;
  name: string;
  description: string;
  introduction: string;
  maxHealth: number;
  currentHealth: number;
  baseDamage: number;
  coins: number;
  inventory: IItemData[];
}