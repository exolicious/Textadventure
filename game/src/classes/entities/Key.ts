import {Item} from "./Item.js";
import {IItemData} from "../../interfaces/IItemData.js";

export class Key extends Item {
  public roomId: number;

  constructor(_itemData: IItemData) {
    super(_itemData);
    this.roomId = _itemData.roomId;
  }
}