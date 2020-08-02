import {IItemData} from '../../interfaces/IItemData.js';
import {Item} from "./Item.js";
import {Potion} from "./Potion.js";
import {Key} from "./Key.js";
import {Weapon} from "./Weapon.js";

export class Inventory {
  public potions: Potion[];
  public keys: Key[];
  public weapon: Weapon;

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_itemsData: IItemData[]) {
    this.potions = new Array<Potion>();
    this.keys = new Array<Key>();
    for(let itemData of _itemsData) {
      if(itemData.type == "potion") {
        this.potions.push(new Potion(itemData));
      }
      else if(itemData.type == "key") {
        this.keys.push(new Key(itemData));
      }
      else {
        this.weapon = new Weapon(itemData);
      }
    }
  }

  public addItem(_item: Item): void {
    if(_item.type == "weapon") {
      this.weapon = <Weapon>_item;
    }
    if(_item.type == "potion") {
      this.potions.push(<Potion>_item);
    }
    if(_item.type == "key") {
      this.keys.push(<Key>_item);
    }
  }

  public removeItem(_item: Item): void {
    let foundItem: Item;
    for (let item of this.getIterableInventory()) {
      if (item == _item) {
        foundItem = item;
        break;
      }
    }
    if(foundItem.type == "potion"){
      this.potions.splice(this.potions.indexOf(<Potion>foundItem),1 );
    }
    else if(foundItem.type == "key"){
      this.keys.splice(this.keys.indexOf(<Key>foundItem),1 );
    }
    else if(foundItem.type == "weapon"){
      this.weapon = null;
    }
  }

  public *getIterableInventory(): Iterable<Item> {
    for(let potion of this.potions) {
      yield potion
    }
    for(let key of this.keys) {
      yield key;
    }
    if(this.weapon)
      yield this.weapon;
  }

  public findItem(_itemName: string): Item {
    for (let item of this.getIterableInventory()) {
      if(item.name.toLowerCase() == _itemName) {
        return item;
      }
    }
    return null;
  }

  public toString(_shopFlag?: boolean): string {
    let output: string = "";
    if (this.potions.length > 0) {
      output += "\t\t-Potions: \r";
      for (let potion of this.potions) {
        output += "\t\t\t-" + potion.name;
        if (_shopFlag)
          output += ": " + potion.price + " coins";
        output += "\r";
      }
    }
    if (this.keys.length > 0) {
      output += "\t\t-Keys: \r"
      for (let key of this.keys) {
        output += "\t\t\t-" + key.name;
        if (_shopFlag)
          output += ": " + key.price + " coins";
        output += "\r";
      }
    }
    if (this.weapon) {
      output += "\t\t-Weapon: \r";
      if(_shopFlag)
        output += this.weapon.price;
      output+= "\t\t\t-" + this.weapon.name +  "\r" ;

    }
    return output;
  }
}
