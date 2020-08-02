import { GameState } from "./GameState.js";
import { Room } from "./entities/Room.js";
import { Player } from "./entities/Player.js";
export class LoadAndSaver {
    constructor() {
        this.gameState = GameState.getInstance();
    }
    static getInstance() {
        if (!LoadAndSaver.instance) {
            LoadAndSaver.instance = new LoadAndSaver();
        }
        return LoadAndSaver.instance;
    }
    async loadGame(_fileName) {
        const loadedJSONState = await this.loadJSON(_fileName);
        this.gameState.player = Player.getInstance(loadedJSONState.player);
        this.initializeRooms(loadedJSONState.rooms);
    }
    async loadJSON(_fileName) {
        let response = await fetch("./dist/" + _fileName + ".json");
        let text = await response.text();
        let json = JSON.parse(text);
        return json;
    }
    initializeRooms(_roomsData) {
        for (let roomData of _roomsData) {
            let roomInstance = new Room(roomData);
            this.gameState.rooms.push(roomInstance);
            if (roomData.currentRoom) {
                this.gameState.player.currentRoom = roomInstance;
            }
        }
    }
    save(_filename) {
        let gameStateJSONString = JSON.stringify(this.gameState);
        let blob = new Blob([gameStateJSONString], { type: "application/plain" });
        let url = window.URL.createObjectURL(blob);
        //*/ using anchor element for download
        let downloader;
        downloader = document.createElement("a");
        downloader.setAttribute("href", url);
        downloader.setAttribute("download", _filename + ".json");
        document.body.appendChild(downloader);
        downloader.click();
        document.body.removeChild(downloader);
        window.URL.revokeObjectURL(url);
    }
}
//# sourceMappingURL=LoadAndSaver.js.map