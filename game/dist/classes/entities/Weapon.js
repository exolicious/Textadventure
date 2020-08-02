import { Item } from "./Item.js";
export class Weapon extends Item {
    constructor(_itemData) {
        super(_itemData);
        this.damageBoost = _itemData.damageBoost;
    }
}
//# sourceMappingURL=Weapon.js.map