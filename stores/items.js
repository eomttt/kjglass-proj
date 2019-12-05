import { observable, action, toJS } from 'mobx';

import glassDummy from '../dummy/glassItem';
import expendablesItemDummy from '../dummy/expendablesItem';

export default class ItemsStore {
    @observable items = {
        glasses: glassDummy,
        expendables: expendablesItemDummy,
    }

    @action getItemInfo = (params) => {
        const {
            type, itemId, specificationId,
        } = params;

        const selectedItems = toJS(this.items)[type];
        const selectedItem = selectedItems && selectedItems.filter((item) => {
            return item.id === itemId;
        })[0];
        const selectedSpecificItem = selectedItem.specification.filter((specificationItem) => {
            return specificationItem.id === specificationId;
        })[0];

        return {
            selectedItem,
            selectedSpecificItem,
        };
    }
}
