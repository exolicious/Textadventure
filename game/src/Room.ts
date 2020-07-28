import {Item} from './Item.js';
import {Character} from './Character.js';
import {IRoomData} from './IRoomData.js';
import {ActionTarget} from './ActionTarget.js';

export class Room extends ActionTarget {
    public id: number;
    public items: Item[];
    public characters: Character[];
    public adjacentRooms: Map<string,number>;

    constructor(_roomData: IRoomData) {
        super(_roomData.id, _roomData.name, _roomData.description);
        this.items = new Array<Item>();
        this.characters = new Array<Character>();
        this.adjacentRooms = new Map<string, number>();
        for (let itemData of _roomData.items) {
            this.items.push(new Item(itemData))
        }
        for (let characterData of _roomData.characters) {
            this.characters.push(new Character(characterData))
        }
        for (let adjacentRoomsData of _roomData.adjacentRooms) {
            this.adjacentRooms.set(adjacentRoomsData.direction, adjacentRoomsData.id);
        }
    }



    public toString(): string {
        return this.description;
    }
    /*
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
