import { ActionTarget } from "./ActionTarget.js";
export class Item extends ActionTarget {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_itemData) {
        super(_itemData.id, _itemData.type, _itemData.name, _itemData.description);
        this.price = 0;
    }
}
//# sourceMappingURL=Item.js.map