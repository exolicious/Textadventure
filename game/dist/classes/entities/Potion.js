import { Item } from "./Item.js";
export class Potion extends Item {
    constructor(_itemData) {
        super(_itemData);
        this.name = "Small Potion";
        this.healAmount = 5;
        this.price = 5;
    }
}
//# sourceMappingURL=Potion.js.map