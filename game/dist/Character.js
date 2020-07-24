import { Item } from './Item.js';
export class Character {
    constructor(_characterData) {
        this.items = new Array();
        this.name = _characterData.name;
        this.description = _characterData.description;
        for (let itemData of _characterData.items) {
            this.items.push(new Item(itemData));
        }
        this.type = _characterData.type;
    }
}
//# sourceMappingURL=Character.js.map