export class GameState {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor() {
        this.rooms = new Array();
    }
    static getInstance() {
        if (!GameState.instance) {
            GameState.instance = new GameState();
        }
        return GameState.instance;
    }
    findRoomWithId(_roomId) {
        return this.rooms.find((room) => {
            return room.id == _roomId;
        });
    }
}
//# sourceMappingURL=GameState.js.map