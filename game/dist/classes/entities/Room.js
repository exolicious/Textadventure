import { Character } from './Character.js';
import { Enemy } from './Enemy.js';
import { ActionTarget } from './ActionTarget.js';
import { Inventory } from "./Inventory.js";
import { IntelligentEnemy } from "./IntelligentEnemy.js";
export class Room extends ActionTarget {
    constructor(_roomData) {
        super(_roomData.id, _roomData.type, _roomData.name, _roomData.description);
        this.locked = _roomData.locked;
        this.inventory = new Inventory(_roomData.inventory);
        this.characters = new Array();
        this.adjacentRooms = new Map();
        this.initializeCharacters(_roomData.characters);
        this.setAdjacentRooms(_roomData.adjacentRooms);
    }
    initializeCharacters(_charactersData) {
        for (let characterData of _charactersData) {
            if (characterData.type == "enemy") {
                this.characters.push(new Enemy(characterData));
            }
            else if (characterData.type == "intelligentenemy") {
                this.characters.push(new IntelligentEnemy(characterData));
            }
            else if (characterData.type == "intelligentshopkeeper") {
                this.characters.push(new Character(characterData));
            }
            else if (characterData.type == "character") {
                this.characters.push(new Character(characterData));
            }
        }
    }
    setAdjacentRooms(_adjacentRoomsData) {
        for (let adjacentRoomData of _adjacentRoomsData) {
            this.adjacentRooms.set(adjacentRoomData.direction, adjacentRoomData.id);
        }
    }
    removeCharacter(_character) {
        let iRemoveCharacter = this.characters.indexOf(_character);
        this.characters.splice(iRemoveCharacter, 1);
    }
}
//# sourceMappingURL=Room.js.map