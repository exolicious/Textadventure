import { Potion } from "./Potion.js";
import { Key } from "./Key.js";
import { Weapon } from "./Weapon.js";
export class Inventory {
    /*__________________________________________________________________________________________________________________________________________*/
    constructor(_itemsData) {
        this.potions = new Array();
        this.keys = new Array();
        for (let itemData of _itemsData) {
            if (itemData.type == "potion") {
                this.potions.push(new Potion(itemData));
            }
            else if (itemData.type == "key") {
                this.keys.push(new Key(itemData));
            }
            else {
                this.weapon = new Weapon(itemData);
            }
        }
    }
    addItem(_item) {
        if (_item.type == "weapon") {
            this.weapon = _item;
        }
        if (_item.type == "potion") {
            this.potions.push(_item);
        }
        if (_item.type == "key") {
            this.keys.push(_item);
        }
    }
    removeItem(_item) {
        let foundItem;
        for (let item of this.getIterableInventory()) {
            if (item == _item) {
                foundItem = item;
                break;
            }
        }
        if (foundItem.type == "potion") {
            this.potions.splice(this.potions.indexOf(foundItem), 1);
        }
        else if (foundItem.type == "key") {
            this.keys.splice(this.keys.indexOf(foundItem), 1);
        }
        else if (foundItem.type == "weapon") {
            this.weapon = null;
        }
    }
    *getIterableInventory() {
        for (let potion of this.potions) {
            yield potion;
        }
        for (let key of this.keys) {
            yield key;
        }
        if (this.weapon)
            yield this.weapon;
    }
    findItem(_itemName) {
        for (let item of this.getIterableInventory()) {
            if (item.name.toLowerCase() == _itemName) {
                return item;
            }
        }
        return null;
    }
    toString(_shopFlag) {
        let output = "";
        if (this.potions.length > 0) {
            output += "\t\t-Potions: \r";
            for (let potion of this.potions) {
                output += "\t\t\t-" + potion.name;
                if (_shopFlag)
                    output += ": " + potion.price + " coins";
                output += "\r";
            }
        }
        if (this.keys.length > 0) {
            output += "\t\t-Keys: \r";
            for (let key of this.keys) {
                output += "\t\t\t-" + key.name;
                if (_shopFlag)
                    output += ": " + key.price + " coins";
                output += "\r";
            }
        }
        if (this.weapon) {
            output += "\t\t-Weapon: \r";
            if (_shopFlag)
                output += this.weapon.price;
            output += "\t\t\t-" + this.weapon.name + "\r";
        }
        return output;
    }
}
//# sourceMappingURL=Inventory.js.map