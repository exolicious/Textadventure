import { Action } from "./Action.js";
export class TargetAction extends Action {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_parentSequence, _actionIdentifier) {
        super(_parentSequence, _actionIdentifier);
        this.setLegalTargets();
    }
    searchTarget(_targetName) {
        let target = this.legalTargets.find((possibleTarget) => {
            return possibleTarget.name.toLowerCase() == _targetName;
        });
        if (!target) {
            throw ("That is not a valid target");
        }
        return target;
    }
}
//# sourceMappingURL=TargetAction.js.map