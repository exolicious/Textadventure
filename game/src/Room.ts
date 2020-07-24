import {Item} from './Item.js';
import {Character} from './Character.js';
import {IRoomData} from './IRoomData.js';

export class Room {
    public id: number;
    public name: string;
    public description: string;
    public items: Item[] = new Array<Item>();
    public characters: Character[] = new Array<Character>();
    public adjacentRooms: Map<string, number> = new Map<string, number>();

    constructor(_roomData: IRoomData) {
        this.id = _roomData.id;
        this.name = _roomData.name;
        this.description = _roomData.description;
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
