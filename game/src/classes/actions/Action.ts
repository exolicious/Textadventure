import {Sequence} from "../sequences/Sequence.js";

export abstract class Action {
  public actionIdentifier: string;
  public actionShortcut: string;
  public sequence: Sequence;
  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_sequence: Sequence) {
    this.sequence = _sequence;
  }
  abstract async doAction(_targetName?: string): Promise<void>

}
