import { Item } from './Item.js';
import { Character } from './Character.js';
import { ActionTarget } from './ActionTarget.js';
export class Room extends ActionTarget {
    constructor(_roomData) {
        super(_roomData.id, _roomData.name, _roomData.description);
        this.items = new Array();
        this.characters = new Array();
        this.adjacentRooms = new Map();
        for (let itemData of _roomData.items) {
            this.items.push(new Item(itemData));
        }
        for (let characterData of _roomData.characters) {
            this.characters.push(new Character(characterData));
        }
        for (let adjacentRoomsData of _roomData.adjacentRooms) {
            this.adjacentRooms.set(adjacentRoomsData.direction, adjacentRoomsData.id);
        }
    }
    toString() {
        return this.description;
    }
}
//# sourceMappingURL=Room.js.map