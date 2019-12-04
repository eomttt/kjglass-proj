import { observable, action } from 'mobx';

import glassDummy from '../dummy/glassItem';
import expendablesItemDummy from '../dummy/expendablesItem';

export default class ItemsStore {
    @observable items = {
        glasses: glassDummy,
        expendables: expendablesItemDummy,
    }

    @action getItemInfo = (params) => {
        const {
            type, itemId, count, specificatinoItemId,
        } = params;

        const selectedItems = this.items[type];
        return selectedItems.filter((selectedItem) => {
          return selectedItem.id === itemId,
        })[0];
    }
}
