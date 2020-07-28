import {Sequence} from './Sequence.js';

export class InventorySequence extends Sequence {

  /*__________________________________________________________________________________________________________________________________________*/

  constructor() {
    super();
    this.availableActions = "commands (c), drop(d) {itemname}"
  }

  public async main(): Promise<void> {
    await this.typeWriteStory(this.getSequenceIntroduction());
    this.log(this.availableActions);
    while(!this.isSequenceEnd) {
      await this.getPlayerAction();
    }
  }

  public getSequenceIntroduction(): string {
    return "You open your bag";
  }
}
