import { Combatant } from "./Combatant.js";
export class Player extends Combatant {
    constructor(_characterData) {
        super(_characterData);
    }
    static getInstance(_characterData) {
        if (!Player.instance) {
            Player.instance = new Player(_characterData);
        }
        return Player.instance;
    }
    getAttackText(_damageAmount, _enemyName) {
        return "You attack " + _enemyName + " with your " + this.inventory.weapon.name + ". You dealt " + _damageAmount + " damage.\r";
    }
}
//# sourceMappingURL=Player.js.map