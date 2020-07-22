namespace TextAdventure {
  export class Game {
    // private characters: Character[];
    // private player: Player;
    // private worldMap: Map;
    // private currentRoom: Room;
    private console: MyConsole;
    private isGameEnd: boolean;

    constructor(_input: HTMLInputElement, _output: HTMLTextAreaElement) {
      this.console = MyConsole.getInstance(_input, _output);
      this.isGameEnd = false;
      /*
      this.fillWorldMap();
      //instantiate characters of each Room and push them into respective characters arrays
      this.fillRoomsWithCharacters();
      //instantiate Characterinventory-Items of each Char and push them into respective items arrays
      this.fillCharacterInventories();*/
    }

    public async main(): Promise<void> {
        while(!this.isGameEnd) {
          let playerInput = await this.console.getPlayerInput();
          //outputController logic comes here
          if(playerInput == "quit") {
            this.isGameEnd = true;
          }
          this.console.consoleLog(playerInput);
          await this.console.typeWriteLog("asdasdasdasd");
        }
    }

    /*private async fillWorldMap(_direction: string, _room: Room): Promise<void> {
      //before filling is possible we need to wait for the JSON file to have finished loading
      let tempGameMap = await this.loadJSON();
      //work through tempGameMap and fill according arrays with Objects and set properties of said objects
    }

    private fillRooms(): void {

    }

    private fillCharacterInventories() {

    }

    private loadJSON(): Object {
      return {};
    }*/
  }
}