import {IItemData} from './IItemData.js';

export class Item {

  // private characters: Character[];
  // private player: Player;
  public name: string;
  public description: string;
  public type: string;

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_itemData: IItemData) {
    this.name = _itemData.name;
    this.description = _itemData.description;
    this.type = _itemData.type;
  }
}
