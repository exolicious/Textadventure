import { Enemy } from "./Enemy.js";
export class IntelligentEnemy extends Enemy {
    constructor(_characterData) {
        super(_characterData);
    }
    consumePotion() {
        let consumedPotion = this.inventory.potions.pop();
        this.currentHealth += consumedPotion.healAmount;
        return consumedPotion;
    }
}
//# sourceMappingURL=IntelligentEnemy.js.map