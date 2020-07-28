import {Sequence} from './Sequence.js';
import {Enemy} from "./Enemy.js";
import {InputHandler} from "./InputHandler.js";

export class FightSequence extends Sequence {
   private enemy: Enemy;

  /*__________________________________________________________________________________________________________________________________________*/

  constructor(_enemy: Enemy) {
    super();
    this.enemy = _enemy;
    this.actionsStringArray = ["commands", "attack"];
    this.availableActions = "commands (c), attack(a) {targetname}"
    this.inputHandler = new InputHandler(this, this.actionsStringArray);
  }

  public getSequenceIntroduction(): string {
    return "You give " + this.enemy.name + " a mean look. He points his sword at you.";
  }
}
