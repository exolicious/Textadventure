import {IItemData} from './IItemData.js';
import {ActionTarget} from "./ActionTarget.js";

export class Item extends ActionTarget{
  public type: string;

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_itemData: IItemData) {
    super(_itemData.id, _itemData.name, _itemData.description);
    this.type = _itemData.type;
  }
}
