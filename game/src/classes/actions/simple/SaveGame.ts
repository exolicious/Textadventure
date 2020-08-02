import {EActions} from "../../../enums/EActions.js";
import {LoadAndSaver} from "../../LoadAndSaver.js";
import {Action} from "../Action.js";
import {Sequence} from "../../sequences/Sequence.js";

export class SaveGame extends Action {
  /*__________________________________________________________________________________________________________________________________________*/
  constructor(_sequence: Sequence) {
    super(_sequence);
    this.actionIdentifier = EActions.SaveGame;
  }

  public async doAction(_targetName: string): Promise<void> {
    LoadAndSaver.getInstance().save(_targetName);
  }
}
