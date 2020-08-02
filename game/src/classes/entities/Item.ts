import {IItemData} from '../../interfaces/IItemData.js';
import {ActionTarget} from "./ActionTarget.js";

export class Item extends ActionTarget{
  public price: number;
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_itemData: IItemData) {
    super(_itemData.id, _itemData.type, _itemData.name, _itemData.description);
    this.price = 0;
  }
}
