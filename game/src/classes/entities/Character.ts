import {ICharacterData} from '../../interfaces/ICharacterData.js';
import {ActionTarget} from "./ActionTarget.js";
import {Inventory} from "./Inventory.js";

export class Character extends ActionTarget {
  public inventory: Inventory;
  public introduction: string;
  public coins: number;

  constructor(_characterData: ICharacterData) {
    super(_characterData.id, _characterData.type, _characterData.name, _characterData.description);
    this.inventory = new Inventory(_characterData.inventory);
    this.introduction = _characterData.introduction;
    this.coins = _characterData.coins;
  }

  public getDesiredDirection(): string {
    let randomNumber: number = Math.floor((Math.random()*8) + 1); // get random number between one and 8
    if(randomNumber == 1) {
      return "north";
    }
    else if(randomNumber == 2) {
      return "east";
    }
    else if(randomNumber == 3) {
      return "south";
    }
    else if(randomNumber == 4) {
      return "west";
    }
    else {
      return "stay";
    }
  }
}
