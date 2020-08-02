import {Item} from "./Item.js";
import {IItemData} from "../../interfaces/IItemData.js";

export class Potion extends Item {
  public healAmount: number;

  constructor(_itemData: IItemData) {
    super(_itemData);
    this.name = "Small Potion"
    this.healAmount = 5;
    this.price = 5;
  }
}