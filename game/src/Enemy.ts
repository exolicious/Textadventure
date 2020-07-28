import {Item} from './Item.js';
import {Character} from './Character.js';
import {ICharacterData} from './ICharacterData.js';

export class Enemy extends Character {
  public name: string;
  public description: string;
  public items: Item[] = new Array<Item>();
  public type: string;

  constructor(_characterData: ICharacterData) {
    super(_characterData);
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
