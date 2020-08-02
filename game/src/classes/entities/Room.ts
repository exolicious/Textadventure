import {Character} from './Character.js';
import {Enemy} from './Enemy.js';
import {IRoomData} from '../../interfaces/IRoomData.js';
import {ActionTarget} from './ActionTarget.js';
import {ICharacterData} from "../../interfaces/ICharacterData.js";
import {IAdjacentRoomsData} from "../../interfaces/IAdjacentRoomsData.js";
import {Inventory} from "./Inventory.js";
import {IntelligentEnemy} from "./IntelligentEnemy.js";

export class Room extends ActionTarget {
    public locked: boolean;
    public inventory: Inventory;
    public characters: Character[];
    public adjacentRooms: Map<string,number>;

    constructor(_roomData: IRoomData) {
        super(_roomData.id, _roomData.type, _roomData.name, _roomData.description);
        this.locked = _roomData.locked;
        this.inventory = new Inventory(_roomData.inventory);
        this.characters = new Array<Character>();
        this.adjacentRooms = new Map<string, number>();
        this.initializeCharacters(_roomData.characters);
        this.setAdjacentRooms(_roomData.adjacentRooms);
    }

    private initializeCharacters(_charactersData: ICharacterData[]): void {
        for (let characterData of _charactersData) {
            if(characterData.type == "enemy") {
                this.characters.push(new Enemy(characterData))
            }
            else if(characterData.type == "intelligentenemy") {
                this.characters.push(new IntelligentEnemy(characterData))
            }
            else if(characterData.type == "intelligentshopkeeper") {
                this.characters.push(new Character(characterData))
            }
            else if(characterData.type == "character") {
                this.characters.push(new Character(characterData))
            }
        }
    }

    private setAdjacentRooms(_adjacentRoomsData: IAdjacentRoomsData[]): void {
        for (let adjacentRoomData of _adjacentRoomsData) {
            this.adjacentRooms.set(adjacentRoomData.direction, adjacentRoomData.id);
        }
    }

    public removeCharacter(_character: Character): void {
        let iRemoveCharacter = this.characters.indexOf(_character);
        this.characters.splice(iRemoveCharacter, 1);
    }
}
