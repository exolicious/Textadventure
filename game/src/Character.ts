import {Item} from './Item.js';
import {ICharacterData} from './ICharacterData.js';

export class Character {
  public name: string;
  public description: string;
  public items: Item[] = new Array<Item>();
  public type: string;

  constructor(_characterData: ICharacterData) {
    this.name = _characterData.name;
    this.description = _characterData.description;
    for(let itemData of _characterData.items) {
      this.items.push(new Item(itemData))
    }
    this.type = _characterData.type;
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
