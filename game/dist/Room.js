import { Item } from './Item.js';
import { Character } from './Character.js';
export class Room {
    constructor(_roomData) {
        this.items = new Array();
        this.characters = new Array();
        this.adjacentRooms = new Map();
        this.id = _roomData.id;
        this.name = _roomData.name;
        this.description = _roomData.description;
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