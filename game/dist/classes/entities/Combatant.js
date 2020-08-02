import { Character } from "./Character.js";
export class Combatant extends Character {
    constructor(_characterData) {
        super(_characterData);
        this.maxHealth = _characterData.maxHealth;
        this.currentHealth = _characterData.maxHealth;
        this.baseDamage = _characterData.baseDamage;
        this.isDead = false;
    }
    getDamageRoll() {
        if (this.inventory.weapon)
            return this.baseDamage + this.inventory.weapon.damageBoost;
        return this.baseDamage;
    }
    setHealth(_amount, _isHeal) {
        if (_isHeal)
            this.currentHealth += _amount;
        else
            this.currentHealth -= _amount;
        if (this.currentHealth > this.maxHealth) {
            this.currentHealth = this.maxHealth;
        }
        else if (this.currentHealth <= 0) {
            this.currentHealth = 0;
            this.isDead = true;
        }
    }
}
//# sourceMappingURL=Combatant.js.map