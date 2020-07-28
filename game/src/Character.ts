import {Item} from './Item.js';
import {ICharacterData} from './ICharacterData.js';
import {ActionTarget} from "./ActionTarget.js";

export class Character extends ActionTarget{
  public type: string;
  public items: Item[] = new Array<Item>();

  constructor(_characterData: ICharacterData) {
    super(_characterData.id, _characterData.name, _characterData.description);
    this.type = _characterData.type;
    for(let itemData of _characterData.items) {
      this.items.push(new Item(itemData))
    }

  }
  /*
  public toString(): String {
      return "";
  }

  public addAdjacentRoom(_direction: string, _room: Room):void {
      this.adjacentRooms.set(_direction, _room);
  }

   public removeItem(_item: Item): void {

  }

  public addCharacter(_character: Character): void {

  }

  public removeCharacter(_character: Character): void {

  }


*/

}
