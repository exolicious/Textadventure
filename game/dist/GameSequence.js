import { Sequence } from './Sequence.js';
import { GameMap } from './GameMap.js';
import { Room } from './Room.js';
import { InputHandler } from "./InputHandler.js";
export class GameSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_input, _output) {
        super(_input, _output);
        this.availableActions = "commands(c), fight with(f with), look at (l at) {character} or {room},  ";
        this.actionsStringArray = ["commands", "inventory", "fight with", "look at", "take item", "quit"];
        this.gameMap = new GameMap();
    }
    //idea for later: make path parameter, so that user can specify which save file he wants to load
    async initializeState() {
        const loadedMap = await this.loadJSON();
        console.log(loadedMap);
        this.fillWorldMap(loadedMap.rooms);
        this.inputHandler = new InputHandler(this, this.actionsStringArray);
    }
    getSequenceIntroduction() {
        let output = this.currentRoom.description;
        if (this.currentRoom.characters.length > 0) {
            output += "\rCharacters:\r";
            for (let char of this.currentRoom.characters) {
                output += char.name + "\r";
            }
        }
        if (this.currentRoom.items.length > 0) {
            output += "\rItems:\r";
            for (let item of this.currentRoom.items) {
                output += item.name + "\r";
            }
        }
        return output;
    }
    async loadJSON() {
        let response = await fetch("./dist/newGame.json");
        let text = await response.text();
        let json = JSON.parse(text);
        return json;
    }
    //iterate over the rooms property of the JSON file and create a Room for each entry
    //the constructor of the room handles the lower level properties (e.g. items) and the instantiation for the entries
    //the instantiation happens recursively
    fillWorldMap(_roomsData) {
        for (let roomData of _roomsData) {
            let roomInstance = new Room(roomData);
            this.gameMap.rooms.push(roomInstance);
            if (roomData.startRoom) {
                this.currentRoom = roomInstance;
            }
        }
    }
}
//# sourceMappingURL=GameSequence.js.map