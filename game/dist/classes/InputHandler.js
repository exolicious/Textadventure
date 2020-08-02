import { ListActions } from "./actions/simple/ListActions.js";
import { ShowInventory } from "./actions/simple/ShowInventory.js";
import { LookAt } from "./actions/target/LookAt.js";
import { TakeItem } from "./actions/target/TakeItem.js";
import { EAllActions } from "../enums/EAllActions.js";
import { FightWith } from "./actions/target/FightWith.js";
import { Quit } from "./actions/simple/Quit.js";
import { StartNewGame } from "./actions/simple/StartNewGame.js";
import { ConsumeItem } from "./actions/target/ConsumeItem.js";
import { DropItem } from "./actions/target/DropItem.js";
import { ExamineItem } from "./actions/target/ExamineItem.js";
export class InputHandler {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_sequence, _actionsStringArray) {
        this.actions = new Array();
        this.instantiateActions(_sequence, _actionsStringArray);
    }
    instantiateActions(_sequence, _actionsStringArray) {
        for (let actionIdentifier of _actionsStringArray) {
            switch (actionIdentifier) {
                //SimpleCommands instantiation
                case EAllActions.ShowCommands:
                    this.actions.push(new ListActions(_sequence, actionIdentifier));
                    break;
                case EAllActions.ShowInventory:
                    this.actions.push(new ShowInventory(_sequence, actionIdentifier));
                    break;
                case EAllActions.Quit:
                    this.actions.push(new Quit(_sequence, actionIdentifier));
                    break;
                case EAllActions.NewGame:
                    this.actions.push(new StartNewGame(_sequence, actionIdentifier));
                    break;
                //TargetCommands instantiation (with their targetArray)
                case EAllActions.ExamineItem:
                    //let viableTargetsArray: CommandTarget[] = <CommandTarget[]>this.parentSequence.currentRoom.characters.concat(<CommandTarget[]>this.parentSequence.currentRoom.items);
                    this.actions.push(new ExamineItem(_sequence, actionIdentifier));
                    break;
                case EAllActions.TakeItem:
                    this.actions.push(new TakeItem(_sequence, actionIdentifier));
                    break;
                case EAllActions.DropItem:
                    this.actions.push(new DropItem(_sequence, actionIdentifier));
                    break;
                case EAllActions.ConsumeItem:
                    this.actions.push(new ConsumeItem(_sequence, actionIdentifier));
                    break;
                case EAllActions.LookAt:
                    this.actions.push(new LookAt(_sequence, actionIdentifier));
                    break;
                case EAllActions.FightWith:
                    this.actions.push(new FightWith(_sequence, actionIdentifier));
                    break;
                /*case "quit":
                  this.actions.push(new ShowAvailableActions(commandString))*/
            }
        }
    }
    // public async handleInput(_playerInput: string): Promise<void> {
    //   let matchArray: string[] = this.splitAction(_playerInput.toLowerCase());
    //   let actionIdentifier: string = matchArray[1];
    //   let targetName: string = matchArray[2];
    //
    //   let foundAction: Action = this.actions.find(action => {
    //       return action.actionIdentifier == actionIdentifier;
    //     })
    //   if(foundAction)
    //     await foundAction.doAction(targetName);
    //   else
    //     throw("That was not a valid command");
    // }
    splitAction(_playerInput) {
        if (_playerInput.length < 1)
            throw ("You need to enter something!");
        else {
            //https://regex101.com/r/72K30X/89
            //matchArray[1] is always either "[word]" or "[word] [space] [word]" and everything after (except the first following space) is at matchArray[2]
            let matchArray = _playerInput.match("^([\\w]+$|[\\w]+ [\\w]+) ?(.*)");
            return matchArray;
        }
    }
}
//# sourceMappingURL=InputHandler.js.map