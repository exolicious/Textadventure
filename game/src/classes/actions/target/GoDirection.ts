import {Action} from "../Action.js";
import {RoomSequence} from "../../sequences/RoomSequence.js";
import {EActions} from "../../../enums/EActions.js";
import {Room} from "../../entities/Room.js";
import {Key} from "../../entities/Key.js";
import {IntelligentEnemy} from "../../entities/IntelligentEnemy.js";
import {EDirections} from "../../../enums/EDirections.js";
import {GameState} from "../../GameState.js";
import {MainMenuSequence} from "../../sequences/MainMenuSequence.js";
import {Sequence} from "../../sequences/Sequence.js";
import {MyConsole} from "../../MyConsole.js";
import {IActionNeedsTarget} from "../../../interfaces/IActionNeedsTarget.js";


export class GoDirection extends Action implements IActionNeedsTarget{
  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_sequence: Sequence) {
    super(_sequence);
    this.sequence = _sequence;
    this.actionIdentifier = EActions.Go;
  }

  public async doAction(_targetName: string,): Promise<void> {
    let targetRoom: Room = this.searchTarget(_targetName.toLowerCase());
    if(targetRoom.locked) {
      let rightKey: Key = this.sequence.player.inventory.keys.find((key) => {
        return key.roomId == targetRoom.id;
      })
      if(rightKey) {
        MyConsole.consoleLog("The door is locked...You try to use " + rightKey.name + ".\r" +
                                           "The door opens.\r");
        this.movePlayer(targetRoom);
      }
      else {
        MyConsole.consoleLog("The door is locked... Maybe there is a key somewhere to unlock it.\r");
      }
    }
    else {
      this.movePlayer(targetRoom);
    }
  }

  public searchTarget(_targetName: string): Room {
    let allRooms: Room[] = GameState.getInstance().rooms;
    let roomId: number;
    if(_targetName == EDirections.North) {
      roomId = this.sequence.player.currentRoom.adjacentRooms.get(_targetName);
    }
    else if(_targetName == EDirections.East) {
      roomId = this.sequence.player.currentRoom.adjacentRooms.get(_targetName);
    }
    else if(_targetName == EDirections.South) {
      roomId = this.sequence.player.currentRoom.adjacentRooms.get(_targetName);
    }
    else if(_targetName == EDirections.West) {
      roomId = this.sequence.player.currentRoom.adjacentRooms.get(_targetName);
    }
    else {
      throw("That is not a viable direction.");
    }
    if(roomId > -1) {
      return allRooms.find(room => {
        return room.id == roomId;
      })
    }
    else {
      throw("There is nothing but a very steep mountain side in this direction.");
      //this.sequence.log(this.sequence.availableActions);
    }
  }

  private movePlayer(_room: Room): void {
    this.sequence.player.currentRoom = _room;
    MainMenuSequence.getInstance().nextRoomSequence = new RoomSequence();
    this.sequence.isSequenceEnd = true;
    this.moveIntelligentEnemies();
  }

  private moveIntelligentEnemies(): void {
    let allRooms: Room[] = GameState.getInstance().rooms;
    for(let room of allRooms) {
      for(let character of room.characters) {
        if(character.type.includes("intelligent")) {
          this.moveSingleIntelligentEnemy(<IntelligentEnemy>character, room);
        }
      }
    }
  }

  private moveSingleIntelligentEnemy(_intelligentEnemy: IntelligentEnemy, _enemyLocation: Room): void {
    let desiredDirection: string = _intelligentEnemy.getDesiredDirection();
    if(desiredDirection != "stay") {
      let destinationRoomId: number = _enemyLocation.adjacentRooms.get(desiredDirection);
      if(destinationRoomId > -1 && !_enemyLocation.locked) {
        let destinationRoom: Room = GameState.getInstance().findRoomWithId(destinationRoomId);
        if(!destinationRoom.locked) {
          destinationRoom.characters.push(_intelligentEnemy);
          _enemyLocation.removeCharacter(_intelligentEnemy);
        }
      }
    }
  }
}