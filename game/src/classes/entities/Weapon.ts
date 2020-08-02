import {Item} from "./Item.js";
import {IItemData} from "../../interfaces/IItemData.js";

export class Weapon extends Item {
  public damageBoost: number;

  constructor(_itemData: IItemData) {
    super(_itemData);
    this.damageBoost = _itemData.damageBoost;
  }
}