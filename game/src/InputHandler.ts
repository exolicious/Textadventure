import {Sequence} from "./Sequence.js";
import {Action} from "./Action.js";
import {ListCommands} from "./ListCommands.js";
import {ShowInventory} from "./ShowInventory.js";
import {LookAt} from "./LookAt.js";
import {TakeItem} from "./TakeItem.js";
import {EAllActions} from "./EAllActions.js";
import {StartFight} from "./StartFight.js";
import {Quit} from "./Quit.js";


export class InputHandler {
  public actions: Action[];

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_parentSequence: Sequence, _actionsStringArray: string[]) {
    this.actions = new Array<Action>();
    this.instantiateActions(_parentSequence, _actionsStringArray);
  }

  private instantiateActions(_parentSequence: Sequence, _actionsStringArray: string[]): void {
    for(let actionIdentifier of _actionsStringArray) {
      switch(actionIdentifier) {
        //SimpleCommands instantiation
        case EAllActions.ShowCommands:
          this.actions.push(new ListCommands(_parentSequence, actionIdentifier))
          break;
        case EAllActions.ShowInventory:
          this.actions.push(new ShowInventory(_parentSequence, actionIdentifier))
          break;
        case EAllActions.Quit:
          this.actions.push(new Quit(_parentSequence, actionIdentifier))
          break;
        //TargetCommands instantiation (with their targetArray)
        case EAllActions.LookAt:
          //let viableTargetsArray: CommandTarget[] = <CommandTarget[]>this.parentSequence.currentRoom.characters.concat(<CommandTarget[]>this.parentSequence.currentRoom.items);
          this.actions.push(new LookAt(_parentSequence, actionIdentifier))
          break;
        case EAllActions.TakeItem:
          this.actions.push(new TakeItem(_parentSequence, actionIdentifier))
          break;
        case EAllActions.FightWith:
          this.actions.push(new StartFight(_parentSequence, actionIdentifier))
          break;
        /*case "quit":
          this.commands.push(new ListCommands(commandString))*/
      }
    }
  }

  public async handleInput(_playerInput: string): Promise<void> {
    let matchArray: string[] = this.validatePlayerInput(_playerInput.toLowerCase());
    let actionIdentifier: string = matchArray[1];
    let targetName: string = matchArray[2];
    //match gives back the 3 regex groups -> full match (whole string if match), then the action at [1] and the possible target at [2]
    //if the targetName is null then it has to be a simple command, try and catch, if the user typed in rubbish
    try {
      await this.actions.find(action => {
        return action.actionIdentifier == actionIdentifier;
      }).doAction(targetName);
    }
    catch(e) {
      throw("That was not a valid input!");
    }
  }

  public validatePlayerInput(_playerInput: string): string[] {
    if(_playerInput.length < 1)
      throw("You need to enter something!");
    else {
      //https://regex101.com/r/72K30X/89 played with the tool and gotten a "decent" result, which could probably be way better still
      //the first group of the regex matches either one set of characters only if they end instantly or two sets of characters seperated by a space
      //so that matchArray[1] is always either "[word]" or "[word] [space] [word]" and everything after (except the first following space) is at matchArray[2]
      let matchArray: string[] = _playerInput.match("^([\\w]+$|[\\w]+ [\\w]+) ?(.*)");

      return matchArray;
    }
  }
}
