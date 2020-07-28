import { SimpleAction } from "./SimpleAction.js";
export class ListCommands extends SimpleAction {
    /*__________________________________________________________________________________________________________________________________________*/
    doAction() {
        this.parentSequence.log(this.parentSequence.availableActions);
    }
}
//# sourceMappingURL=ListCommands.js.map