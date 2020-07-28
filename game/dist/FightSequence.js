import { Sequence } from './Sequence.js';
import { InputHandler } from "./InputHandler.js";
export class FightSequence extends Sequence {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_enemy) {
        super();
        this.enemy = _enemy;
        this.actionsStringArray = ["commands", "attack"];
        this.availableActions = "commands (c), attack(a) {targetname}";
        this.inputHandler = new InputHandler(this, this.actionsStringArray);
    }
    getSequenceIntroduction() {
        return "You give " + this.enemy.name + " a mean look. He points his sword at you.";
    }
}
//# sourceMappingURL=FightSequence.js.map