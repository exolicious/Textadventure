import { Sequence } from './Sequence.js';
import { GameMap } from './GameMap.js';
import { Room } from './Room.js';
export class GameSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_input, _output) {
        super(_input, _output);
        this.isSqeuenceEnd = false;
        this.gameMap = new GameMap();
    }
    //idea for later: make path parameter, so that user can specify which save file he wants to load
    async initializeState() {
        const loadedMap = await this.loadJSON();
        console.log(loadedMap);
        this.fillWorldMap(loadedMap.rooms);
    }
    async main() {
        await this.console.typeWriteLog(this.currentRoom.toString());
        this.console.consoleLog("commands (c), north (n), quit (q)");
        while (!this.isSqeuenceEnd) {
            await this.getUserAction();
            await this.console.typeWriteLog(this.currentRoom.toString());
        }
    }
    async getUserAction() {
        let playerInput = await this.console.getPlayerInput();
        this.console.consoleLog(playerInput);
        //inputController logic comes here
        if (playerInput == "quit") {
            this.isSqeuenceEnd = true;
        }
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