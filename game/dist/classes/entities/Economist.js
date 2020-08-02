import { Character } from "./Character.js";
export class Economist extends Character {
    getInventory() {
        let output = "Potions: \r";
        for (let potion of this.inventory.potions) {
            output += "\t" + potion.name + "\r";
        }
        output += "Keys: \r";
        for (let key of this.inventory.keys) {
            output += "\t" + key.name + "\r";
        }
        output += "Weapon: \r" +
            "\t" + this.inventory.weapon.name + "\r";
        return output;
    }
}
//# sourceMappingURL=Economist.js.map