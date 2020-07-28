import { Item } from './Item.js';
import { ActionTarget } from "./ActionTarget.js";
export class Character extends ActionTarget {
    constructor(_characterData) {
        super(_characterData.id, _characterData.name, _characterData.description);
        this.items = new Array();
        this.type = _characterData.type;
        for (let itemData of _characterData.items) {
            this.items.push(new Item(itemData));
        }
    }
}
//# sourceMappingURL=Character.js.map