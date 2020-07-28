import { ActionTarget } from "./ActionTarget.js";
export class Item extends ActionTarget {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_itemData) {
        super(_itemData.id, _itemData.name, _itemData.description);
        this.type = _itemData.type;
    }
}
//# sourceMappingURL=Item.js.map